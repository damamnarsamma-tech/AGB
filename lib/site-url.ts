import { locationHierarchy as hierarchyData } from './location-data';
import { SERVICES, PRECIOUS_METALS } from './services';

/**
 * Authoritative Single Source of Truth for Domain Configuration
 * Production Domain: https://akshaya-gold-buyers.ai.studio
 */
export const SITE_URL = 'https://akshaya-gold-buyers.ai.studio';
export const PUBLIC_SITE_URL = SITE_URL;

/**
 * Central Canonical URL Builder
 * Generates clean, normalized canonical URLs with the single authoritative production domain.
 * Ensures: SITEMAP URL = CANONICAL URL = PUBLIC PAGE URL
 */
export function buildCanonicalUrl(path: string = ''): string {
  if (!path || path === '/' || path.trim() === '') {
    return SITE_URL;
  }

  // Strip protocol/domains if accidentally passed in
  let clean = path
    .replace(/^https?:\/\/[^/]+/i, '')
    .split('?')[0]
    .split('#')[0]
    .trim();

  // Normalize slashes
  clean = clean
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .replace(/\/+/g, '/');

  return clean ? `${SITE_URL}/${clean}` : SITE_URL;
}

/**
 * Route Registry Interface
 */
export interface IndexableRoute {
  path: string;
  url: string;
  category: 'core' | 'service' | 'metal' | 'state' | 'district' | 'mandal' | 'locality';
  stateSlug?: 'andhra-pradesh' | 'telangana';
}

/**
 * Authoritative Route Registry: getIndexableRoutes()
 * Returns the exhaustive, deduplicated list of all public indexable routes across
 * Core pages, Services, Metals, States, Districts, Mandals, and Localities.
 */
export function getIndexableRoutes(): IndexableRoute[] {
  const routes: IndexableRoute[] = [];
  const seenPaths = new Set<string>();

  function addRoute(rawPath: string, category: IndexableRoute['category'], stateSlug?: 'andhra-pradesh' | 'telangana') {
    const cleanPath = rawPath
      .split('?')[0]
      .split('#')[0]
      .replace(/^\/+/, '')
      .replace(/\/+$/, '')
      .replace(/\/+/g, '/');

    const key = cleanPath || '/';
    if (seenPaths.has(key)) return;
    seenPaths.add(key);

    routes.push({
      path: key === '/' ? '/' : `/${key}`,
      url: buildCanonicalUrl(cleanPath),
      category,
      stateSlug
    });
  }

  // 1. Core Pages (HTTP 200, public, indexable)
  addRoute('', 'core');
  addRoute('about', 'core');
  addRoute('contact', 'core');
  addRoute('faq', 'core');
  addRoute('gold-rate', 'core');
  addRoute('gold-valuation-calculator', 'core');
  addRoute('services', 'core');
  addRoute('metals', 'core');
  addRoute('jewellery', 'core');

  // 2. Services Pages
  const ALL_SERVICE_SLUGS = [
    'sell-gold',
    'gold-buyers',
    'gold-jewellery-buyers',
    'old-gold-buyers',
    'broken-scrap-gold',
    'scrap-gold',
    'gold-coins-bars',
    'gold-coins',
    'pledged-gold-buyers',
    'pledged-gold-release',
    'pledged-gold-takeover',
    'pledged-gold-transfer',
    'gold-exchange',
    'gold-valuation',
    'gold-valuation-appraisal',
    'silver-buyers',
    'platinum-buyers',
    'diamond-buyers',
    'platinum-diamond',
    'loan-transfer'
  ];
  for (const sSlug of ALL_SERVICE_SLUGS) {
    addRoute(`services/${sSlug}`, 'service');
  }

  // 3. Precious Metals Pages
  for (const m of PRECIOUS_METALS) {
    addRoute(`metals/${m.id}`, 'metal');
  }

  // 3b. Jewellery Type Pages
  const ALL_JEWELLERY_SLUGS = [
    'chains', 'necklaces', 'bangles', 'rings', 'earrings',
    'bracelets', 'pendants', 'mangalsutra', 'coins', 'bars', 'scrap'
  ];
  for (const jSlug of ALL_JEWELLERY_SLUGS) {
    addRoute(`jewellery/${jSlug}`, 'core');
  }

  // 4. Hub Aliases
  const apHubs = ['visakhapatnam', 'ntr', 'guntur', 'tirupati', 'kurnool'];
  for (const hub of apHubs) {
    addRoute(`andhra-pradesh/${hub}`, 'district', 'andhra-pradesh');
  }
  const tsHubs = ['hyderabad', 'ranga-reddy', 'medchal-malkajgiri', 'warangal', 'karimnagar'];
  for (const hub of tsHubs) {
    addRoute(`telangana/${hub}`, 'district', 'telangana');
  }

  // 5. State, District, Mandal, Locality, and Location x Service Pages
  const topServices = SERVICES.map(s => s.slug);

  for (const sKey of ['andhra-pradesh', 'telangana'] as const) {
    const stateObj = hierarchyData.states[sKey];
    if (!stateObj) continue;

    // State root
    addRoute(sKey, 'state', sKey);

    for (const dKey in stateObj.districts) {
      const dist = (stateObj.districts as Record<string, any>)[dKey];
      // District root
      addRoute(`${sKey}/${dKey}`, 'district', sKey);

      // District Main City Neighbourhoods
      if (dist.mandals && dist.mandals.main) {
        const mainLocs = dist.mandals.main.neighbourhoods || dist.mandals.main.localities || [];
        for (const loc of mainLocs) {
          const locSlug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          addRoute(`${sKey}/${dKey}/${locSlug}`, 'locality', sKey);
        }
      }

      // District x Service combinations
      for (const srvSlug of topServices) {
        addRoute(`${sKey}/${dKey}/services/${srvSlug}`, 'service', sKey);
      }

      for (const mKey in dist.mandals) {
        if (mKey === 'main') continue;
        const mandal = dist.mandals[mKey];
        // Mandal URL
        addRoute(`${sKey}/${dKey}/${mKey}`, 'mandal', sKey);

        // Locality URLs
        if (mandal.localities && Array.isArray(mandal.localities)) {
          for (const loc of mandal.localities) {
            addRoute(`${sKey}/${dKey}/${mKey}/${loc}`, 'locality', sKey);
          }
        }
      }
    }
  }

  return routes;
}
