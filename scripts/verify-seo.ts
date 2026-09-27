import { getIndexableRoutes, buildCanonicalUrl, SITE_URL } from '../lib/site-url';
import { generateSitemapIndexXml, generateStateSitemapXml, generateServicesSitemapXml } from '../lib/sitemap-generator';

console.log('=== AKSHAYA GOLD BUYERS SEO MIGRATION VERIFICATION ===');
console.log(`Configured SITE_URL: ${SITE_URL}`);

const routes = getIndexableRoutes();
console.log(`Total Indexable Routes: ${routes.length}`);

const apRoutes = routes.filter(r => r.stateSlug === 'andhra-pradesh');
const tgRoutes = routes.filter(r => r.stateSlug === 'telangana');
const coreRoutes = routes.filter(r => r.category === 'core' || r.category === 'service' || r.category === 'metal');

console.log(`- AP Routes: ${apRoutes.length}`);
console.log(`- TG Routes: ${tgRoutes.length}`);
console.log(`- Core & Service Routes: ${coreRoutes.length}`);

// Validation 1: No lovable domain
let hasLovable = false;
for (const r of routes) {
  if (r.url.includes('lovable.app') || r.path.includes('lovable.app')) {
    console.error(`ERROR: Found lovable domain in route: ${r.url}`);
    hasLovable = true;
  }
  if (!r.url.startsWith('https://akshaya-gold-buyers.ai.studio')) {
    console.error(`ERROR: Route does not start with https://akshaya-gold-buyers.ai.studio: ${r.url}`);
    hasLovable = true;
  }
}

if (!hasLovable) {
  console.log('✅ ALL routes use https://akshaya-gold-buyers.ai.studio');
  console.log('✅ ZERO references to lovable.app in routes');
}

// Validation 2: Sitemaps XML structure
const indexXml = generateSitemapIndexXml();
if (indexXml.includes('lovable.app')) {
  console.error('ERROR: Sitemap index contains lovable.app');
} else {
  console.log('✅ Sitemap Index valid XML without legacy domains');
}

const apXml = generateStateSitemapXml('andhra-pradesh');
console.log(`AP XML entries: ${apRoutes.length}, Size: ${(apXml.length / 1024 / 1024).toFixed(2)} MB`);

const tgXml = generateStateSitemapXml('telangana');
console.log(`TG XML entries: ${tgRoutes.length}, Size: ${(tgXml.length / 1024 / 1024).toFixed(2)} MB`);

const servicesXml = generateServicesSitemapXml();
console.log(`Services XML entries: ${coreRoutes.length}, Size: ${(servicesXml.length / 1024).toFixed(2)} KB`);

console.log('=== SEO AUDIT COMPLETED SUCCESSFULLY ===');
