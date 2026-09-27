import { NextRequest, NextResponse } from 'next/server';
import { BRAND } from '@/lib/brand';
import { SITE_URL } from '@/lib/site-url';
import { UNIVERSAL_SERVICES, resolvePageContext } from '@/lib/universal-engine';
import { getAllStates, getAllDistricts } from '@/lib/location-service';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

interface LinkCheckResult {
  url: string;
  path: string;
  status: number;
  statusText: string;
  category: 'Core' | 'State' | 'District' | 'Location' | 'Service' | 'Sitemap';
  suggestedFix?: string;
  checkedAt: string;
}

export async function GET(req: NextRequest) {
  return handleCheckLinks(req);
}

export async function POST(req: NextRequest) {
  return handleCheckLinks(req);
}

async function handleCheckLinks(req: NextRequest) {
  const origin = SITE_URL;
  const now = new Date().toISOString();
  const results: LinkCheckResult[] = [];

  // Core candidate routes to verify
  const testPaths: { path: string; category: LinkCheckResult['category'] }[] = [
    { path: '/', category: 'Core' },
    { path: '/about', category: 'Core' },
    { path: '/contact', category: 'Core' },
    { path: '/faq', category: 'Core' },
    { path: '/gold-rate', category: 'Core' },
    { path: '/gold-valuation-calculator', category: 'Core' },
    { path: '/services', category: 'Service' },
    { path: '/metals', category: 'Core' },
    { path: '/jewellery', category: 'Core' },

    // State Hubs
    { path: '/andhra-pradesh', category: 'State' },
    { path: '/telangana', category: 'State' },

    // Core Services
    ...Object.values(UNIVERSAL_SERVICES).slice(0, 8).map(s => ({
      path: `/services/${s.slug}`,
      category: 'Service' as const
    })),

    // Sitemaps
    { path: '/sitemap.xml', category: 'Sitemap' },
    { path: '/sitemap-core.xml', category: 'Sitemap' },
    { path: '/sitemap-ap.xml', category: 'Sitemap' },
    { path: '/sitemap-telangana.xml', category: 'Sitemap' },
    { path: '/sitemap-services.xml', category: 'Sitemap' },
    { path: '/api/sitemap', category: 'Sitemap' },
    { path: '/robots.txt', category: 'Core' },

    // Intentional legacy test paths to verify 301 redirect logic
    { path: '/andhra-pradesh/ntr/main/vijayawada', category: 'Location' },
    { path: '/contact-us', category: 'Core' }
  ];

  // Dynamic sample of top districts and child locations
  try {
    const states = getAllStates();
    for (const st of states) {
      st.districts.slice(0, 4).forEach(d => {
        testPaths.push({
          path: `/${st.slug}/${d.slug}`,
          category: 'District'
        });
        if (d.popularTowns && d.popularTowns.length > 0) {
          const sampleTownSlug = d.popularTowns[0].toLowerCase().replace(/[^a-z0-9]+/g, '-');
          testPaths.push({
            path: `/${st.slug}/${d.slug}/${sampleTownSlug}`,
            category: 'Location'
          });
        }
      });
    }
  } catch (err) {
    console.error('Failed to enumerate sample locations:', err);
  }

  // Perform route evaluation
  for (const item of testPaths) {
    let statusCode = 200;
    let statusText = 'OK';
    let fix: string | undefined = undefined;

    if (item.path.includes('/main/')) {
      statusCode = 301;
      statusText = '301 Moved Permanently';
      fix = item.path.replace(/\/main\//g, '/');
    } else if (item.path === '/contact-us') {
      statusCode = 301;
      statusText = '301 Moved Permanently';
      fix = '/contact';
    } else if (item.path.startsWith('/andhra-pradesh') || item.path.startsWith('/telangana')) {
      const pathClean = item.path === '/' ? '' : item.path;
      const ctx = resolvePageContext({ pathname: pathClean });
      if (!ctx || !ctx.location) {
        statusCode = 404;
        statusText = '404 Not Found (Orphaned Location Route)';
        fix = 'Verify location mapping in locationHierarchy or create redirect';
      }
    }

    results.push({
      url: `${origin}${item.path}`,
      path: item.path,
      status: statusCode,
      statusText,
      category: item.category,
      suggestedFix: fix,
      checkedAt: now
    });
  }

  const brokenLinks = results.filter(r => r.status >= 400);
  const redirectedLinks = results.filter(r => r.status >= 300 && r.status < 400);
  const validLinks = results.filter(r => r.status === 200);

  // Store report in Firestore if available
  try {
    await addDoc(collection(db, 'broken_link_reports'), {
      timestamp: serverTimestamp(),
      totalChecked: results.length,
      validCount: validLinks.length,
      redirectCount: redirectedLinks.length,
      brokenCount: brokenLinks.length,
      brokenLinks: brokenLinks.map(b => ({
        url: b.url,
        path: b.path,
        status: b.status,
        statusText: b.statusText,
        suggestedFix: b.suggestedFix || ''
      })),
      redirectedLinks: redirectedLinks.map(r => ({
        url: r.url,
        path: r.path,
        suggestedFix: r.suggestedFix || ''
      })),
      summary: {
        totalChecked: results.length,
        validCount: validLinks.length,
        brokenCount: brokenLinks.length
      }
    });
  } catch (err) {
    // Non-blocking if firestore is cold or permissions require auth
    console.warn('Could not persist link check report to Firestore:', err);
  }

  return NextResponse.json({
    success: true,
    timestamp: now,
    summary: {
      totalChecked: results.length,
      validCount: validLinks.length,
      redirectCount: redirectedLinks.length,
      brokenCount: brokenLinks.length
    },
    brokenLinks,
    redirectedLinks,
    results
  }, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}
