export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { resolvePageContext } from '@/lib/universal-engine';
import { generateAmpHtml } from '@/lib/amp-engine';
import { generateSeoTitle } from '@/lib/seo-title-engine';
import { SITE_URL } from '@/lib/site-url';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params;
  
  // Construct the target pathname (e.g., /andhra-pradesh/visakhapatnam)
  const targetPath = slug && slug.length > 0 ? `/${slug.join('/')}` : '/';

  // Resolve universal page context for this target route
  const ctx = resolvePageContext({ pathname: targetPath });

  // If page context is missing or diagnostic 404, generate 404 AMP
  if (!ctx || ctx.integrityCheck?.isDiagnostic404) {
    const ampHtml = generateAmpHtml({
      ...ctx,
      pageTitle: generateSeoTitle({ searchIntent: 'Page Not Found' }),
      h1: 'Requested Page Not Found',
      metaDescription: 'The requested AMP page could not be found.',
      canonicalUrl: SITE_URL
    });
    return new NextResponse(ampHtml, {
      status: 404,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store, max-age=0'
      }
    });
  }

  // Generate valid AMP HTML payload
  const ampHtml = generateAmpHtml(ctx);

  return new NextResponse(ampHtml, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      'X-AMP-Version': '1.0.0'
    }
  });
}
