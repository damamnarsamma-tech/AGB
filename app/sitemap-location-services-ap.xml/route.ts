export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { generateSitemapLocationServicesApXml } from '@/lib/sitemap-generator';

export async function GET() {
  const xml = generateSitemapLocationServicesApXml();
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
