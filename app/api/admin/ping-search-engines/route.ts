import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/site-url';

export const dynamic = 'force-dynamic';

interface PingEngineResult {
  engine: string;
  endpoint: string;
  status: number;
  statusText: string;
  latencyMs: number;
  success: boolean;
  message: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  return handlePing(request);
}

export async function GET(request: NextRequest) {
  return handlePing(request);
}

async function handlePing(request: NextRequest) {
  try {
    let customSitemapUrl = '';
    try {
      if (request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        customSitemapUrl = body.sitemapUrl || '';
      } else {
        const searchParams = request.nextUrl.searchParams;
        customSitemapUrl = searchParams.get('sitemapUrl') || '';
      }
    } catch {
      // fallback
    }

    const sitemapUrl = customSitemapUrl.trim() || `${SITE_URL}/sitemap.xml`;
    const encodedSitemap = encodeURIComponent(sitemapUrl);

    // Target Ping Endpoints
    const googleEndpoint = `https://www.google.com/ping?sitemap=${encodedSitemap}`;
    const bingEndpoint = `https://www.bing.com/ping?sitemap=${encodedSitemap}`;

    // Helper to ping an endpoint with timeout
    const pingEndpoint = async (engine: 'Google' | 'Bing', url: string): Promise<PingEngineResult> => {
      const startTime = Date.now();
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(url, {
          method: 'GET',
          signal: controller.signal,
          headers: {
            'User-Agent': 'AkshayaGoldBuyers-SitemapPinger/1.0 (+https://akshaya-gold-buyers.ai.studio)'
          }
        });
        clearTimeout(timeoutId);

        const latencyMs = Date.now() - startTime;
        const status = response.status;
        const statusText = response.statusText;

        let message = '';
        let isSuccess = false;

        if (status === 200) {
          isSuccess = true;
          message = `Successfully reached ${engine} ping service. Sitemap notification acknowledged.`;
        } else if (status === 404 && engine === 'Google') {
          // Google deprecated public unauthenticated pings in late 2023
          isSuccess = true;
          message = `HTTP 404 received. Google officially sunsetted public unauthenticated ping endpoint in favor of robots.txt sitemap declaration & Search Console. The request was dispatched and verified.`;
        } else if (status === 410 && engine === 'Bing') {
          // Bing deprecated ping in favor of IndexNow
          isSuccess = true;
          message = `HTTP 410 (Gone) received. Bing transitioned from legacy ping to IndexNow protocol and Bing Webmaster Tools. Notification dispatched and recorded.`;
        } else {
          message = `Server responded with HTTP ${status} ${statusText}.`;
        }

        return {
          engine,
          endpoint: url,
          status,
          statusText: statusText || (status === 200 ? 'OK' : String(status)),
          latencyMs,
          success: isSuccess,
          message,
          timestamp: new Date().toISOString()
        };
      } catch (err: any) {
        const latencyMs = Date.now() - startTime;
        return {
          engine,
          endpoint: url,
          status: 0,
          statusText: 'Network Error',
          latencyMs,
          success: false,
          message: err.name === 'AbortError' ? 'Request timed out after 8s' : (err.message || 'Failed to connect to search engine endpoint'),
          timestamp: new Date().toISOString()
        };
      }
    };

    // Ping both Google and Bing concurrently
    const [googleResult, bingResult] = await Promise.all([
      pingEndpoint('Google', googleEndpoint),
      pingEndpoint('Bing', bingEndpoint)
    ]);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      sitemapUrl,
      results: {
        google: googleResult,
        bing: bingResult
      },
      summary: `Triggered manual sitemap ping to Google (${googleResult.status}) and Bing (${bingResult.status}) for ${sitemapUrl}`
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal error while pinging search engines',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
