import { SITE_URL } from '../lib/site-url';
import { generateSitemapIndexXml } from '../lib/sitemap-generator';

async function testUrl(url: string): Promise<{ status: number; contentType: string | null; body: string }> {
  try {
    const res = await fetch(url, { method: 'GET' });
    const text = await res.text();
    return {
      status: res.status,
      contentType: res.headers.get('content-type'),
      body: text,
    };
  } catch (err: any) {
    return {
      status: 500,
      contentType: null,
      body: err.message || String(err),
    };
  }
}

async function main() {
  console.log('====================================================');
  console.log('TECHNICAL SEO & SITEMAP AUDIT RUN');
  console.log('====================================================');

  const localHost = 'http://localhost:3000';

  // 1. Audit /robots.txt
  console.log('\n--- 1. AUDITING ROBOTS.TXT ---');
  const robotsRes = await testUrl(`${localHost}/robots.txt`);
  console.log(`Status: ${robotsRes.status}`);
  console.log(`Content-Type: ${robotsRes.contentType}`);
  if (robotsRes.status === 200) {
    console.log('Content:\n', robotsRes.body);
  } else {
    console.error('❌ robots.txt failed to load!');
  }

  // 2. Audit /sitemap.xml index
  console.log('\n--- 2. AUDITING SITEMAP.XML INDEX ---');
  const indexRes = await testUrl(`${localHost}/sitemap.xml`);
  console.log(`Status: ${indexRes.status}`);
  console.log(`Content-Type: ${indexRes.contentType}`);
  if (indexRes.status === 200) {
    console.log('✅ Sitemap index loaded successfully.');
    // Extract loc tags
    const matches = indexRes.body.match(/<loc>(.*?)<\/loc>/g) || [];
    const childSitemaps = matches.map(m => m.replace(/<\/?loc>/g, '').trim());
    console.log(`Found ${childSitemaps.length} child sitemaps inside the index:`);
    
    for (const smUrl of childSitemaps) {
      const relativePath = smUrl.replace(SITE_URL, '');
      const localSitemapUrl = `${localHost}${relativePath}`;
      console.log(`  Testing child sitemap: ${relativePath} -> ${localSitemapUrl}`);
      const smRes = await testUrl(localSitemapUrl);
      
      if (smRes.status === 200) {
        const isXml = smRes.contentType?.includes('xml');
        const urlCount = (smRes.body.match(/<loc>/g) || []).length;
        console.log(`    ✅ HTTP 200 | Type: ${smRes.contentType} | URLs found: ${urlCount} | XML valid: ${isXml}`);
      } else {
        console.log(`    ❌ Failed with status ${smRes.status}`);
      }
    }
  } else {
    console.error('❌ Sitemap index failed to load!');
  }

  // 3. Audit Core landing page internal links
  console.log('\n--- 3. AUDITING CORE INTERNAL LINKS ---');
  const coreUrls = [
    '/',
    '/gold-rate',
    '/gold-valuation-calculator',
    '/services',
    '/metals',
    '/jewellery',
    '/faq',
    '/about',
    '/contact'
  ];

  for (const path of coreUrls) {
    const pageRes = await testUrl(`${localHost}${path}`);
    if (pageRes.status === 200) {
      // Find all hrefs inside the body
      const hrefMatches = pageRes.body.match(/href="([^"]+)"/g) || [];
      const hrefs = hrefMatches.map(h => h.replace('href="', '').replace('"', ''));
      const internalLinks = hrefs.filter(h => h.startsWith('/') && !h.startsWith('//') && !h.includes('.') && h !== '/');
      const uniqueInternalLinks = Array.from(new Set(internalLinks));
      console.log(`✅ ${path} loaded successfully. Found ${uniqueInternalLinks.length} unique internal links.`);
      
      // Fast check on a few internal links to verify no 404
      const sampleLinks = uniqueInternalLinks.slice(0, 5);
      for (const link of sampleLinks) {
        const linkRes = await testUrl(`${localHost}${link}`);
        if (linkRes.status === 200) {
          console.log(`    - Link ${link} is OK (200)`);
        } else {
          console.log(`    - ❌ Link ${link} returned status ${linkRes.status}`);
        }
      }
    } else {
      console.log(`❌ Page ${path} returned status ${pageRes.status}`);
    }
  }
}

main().catch(err => {
  console.error('Audit crashed: ', err);
});
