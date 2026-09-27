export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { generateSitemapIndexXml } from '@/lib/sitemap-generator';

export async function GET() {
  const xml = generateSitemapIndexXml();

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
