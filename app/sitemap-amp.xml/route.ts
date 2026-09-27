export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/site-url';
import { UNIVERSAL_SERVICES, MATERIALS, JEWELLERY_TYPES } from '@/lib/universal-engine';

export async function GET() {
  const routes = [
    '',
    '/services',
    '/gold-rate',
    '/gold-valuation-calculator',
    '/faq',
    '/about',
    '/contact',
    '/andhra-pradesh',
    '/telangana'
  ];

  // Core service AMP routes
  Object.keys(UNIVERSAL_SERVICES).forEach(s => routes.push(`/services/${s}`));
  // Core material AMP routes
  Object.keys(MATERIALS).forEach(m => routes.push(`/metals/${m}`));
  // Core jewellery AMP routes
  Object.keys(JEWELLERY_TYPES).forEach(j => routes.push(`/jewellery/${j}`));

  // Primary hubs
  const majorCities = [
    '/andhra-pradesh/visakhapatnam',
    '/andhra-pradesh/vijayawada',
    '/andhra-pradesh/guntur',
    '/andhra-pradesh/tirupati',
    '/andhra-pradesh/kurnool',
    '/telangana/hyderabad',
    '/telangana/warangal',
    '/telangana/nizamabad',
    '/telangana/khammam',
    '/telangana/karimnagar'
  ];

  majorCities.forEach(c => routes.push(c));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:amp="http://www.google.com/schemas/sitemap-amp/1.0">
${routes.map(r => `  <url>
    <loc>${SITE_URL}/amp${r}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${r === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
