import { NextResponse } from 'next/server';
import { generateSitemapIndexXml } from '@/lib/sitemap-generator';

export const dynamic = 'force-dynamic';

export async function GET() {
  const xml = generateSitemapIndexXml();

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
