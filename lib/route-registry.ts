import { UNIVERSAL_SERVICES, MATERIALS, JEWELLERY_TYPES, ServiceDef, MaterialDef, JewelleryDef, UniversalLocationSummary } from './universal-engine';

export interface CanonicalRouteOptions {
  service?: ServiceDef | string;
  location?: UniversalLocationSummary | string;
  metal?: MaterialDef | string;
  item?: JewelleryDef | string;
  transaction?: string;
  state?: string;
  district?: string;
}

/**
 * Centralized Canonical Route Generator
 * Ensures unified URL structure across all components and pages.
 * 
 * Rules:
 * - Location + Service: /[locationPath]/services/[serviceSlug]
 * - Location + Metal: /[locationPath]/metals/[metalSlug]
 * - Location + Item: /[locationPath]/jewellery/[itemSlug]
 * - Service only: /services/[serviceSlug]
 * - Metal only: /metals/[metalSlug]
 * - Item only: /jewellery/[itemSlug]
 * - Location only: /[locationPath]
 * - Default: /
 */
export function generateCanonicalRoute(options: CanonicalRouteOptions = {}): string {
  const { service, location, metal, item } = options;

  // 1. Resolve Service Slug
  let serviceSlug: string | undefined;
  if (typeof service === 'object' && service !== null) {
    serviceSlug = service.slug;
  } else if (typeof service === 'string' && service.trim()) {
    const sKey = service.trim().toLowerCase();
    if (UNIVERSAL_SERVICES[sKey]) {
      serviceSlug = UNIVERSAL_SERVICES[sKey].slug;
    } else {
      // Find by id or name match
      const found = Object.values(UNIVERSAL_SERVICES).find(
        s => s.id === sKey || s.slug === sKey || s.name.toLowerCase() === sKey || s.shortTitle.toLowerCase() === sKey
      );
      serviceSlug = found ? found.slug : sKey;
    }
  }

  // 2. Resolve Material Slug
  let metalSlug: string | undefined;
  if (typeof metal === 'object' && metal !== null) {
    metalSlug = metal.slug;
  } else if (typeof metal === 'string' && metal.trim()) {
    const mKey = metal.trim().toLowerCase();
    if (MATERIALS[mKey]) {
      metalSlug = MATERIALS[mKey].slug;
    } else {
      const found = Object.values(MATERIALS).find(m => m.id === mKey || m.slug === mKey || m.name.toLowerCase() === mKey);
      metalSlug = found ? found.slug : mKey;
    }
  }

  // 3. Resolve Item Slug
  let itemSlug: string | undefined;
  if (typeof item === 'object' && item !== null) {
    itemSlug = item.slug;
  } else if (typeof item === 'string' && item.trim()) {
    const iKey = item.trim().toLowerCase();
    if (JEWELLERY_TYPES[iKey]) {
      itemSlug = JEWELLERY_TYPES[iKey].slug;
    } else {
      const found = Object.values(JEWELLERY_TYPES).find(j => j.id === iKey || j.slug === iKey || j.name.toLowerCase() === iKey);
      itemSlug = found ? found.slug : iKey;
    }
  }

  // 4. Resolve Location Base Path
  let locationPath: string | undefined;
  if (typeof location === 'object' && location !== null) {
    locationPath = location.fullPath || location.url;
  } else if (typeof location === 'string' && location.trim()) {
    const locStr = location.trim();
    if (locStr.startsWith('/')) {
      locationPath = locStr.replace(/\/+$/, '');
    } else {
      locationPath = `/${locStr.replace(/^\/+|\/+$/g, '')}`;
    }
  }

  // Ensure locationPath has no trailing slash unless root
  if (locationPath && locationPath.length > 1 && locationPath.endsWith('/')) {
    locationPath = locationPath.slice(0, -1);
  }

  // 5. Construct Canonical Path
  if (locationPath && locationPath !== '/') {
    if (serviceSlug) {
      return `${locationPath}/services/${serviceSlug}`;
    }
    if (metalSlug) {
      return `${locationPath}/metals/${metalSlug}`;
    }
    if (itemSlug) {
      return `${locationPath}/jewellery/${itemSlug}`;
    }
    return locationPath;
  }

  // Standalone routes (no location)
  if (serviceSlug) {
    return `/services/${serviceSlug}`;
  }
  if (metalSlug) {
    return `/metals/${metalSlug}`;
  }
  if (itemSlug) {
    return `/jewellery/${itemSlug}`;
  }

  return '/';
}

export const RouteRegistry = {
  home: '/',
  servicesHub: '/services',
  metalsHub: '/metals',
  calculator: '/gold-valuation-calculator',
  goldRate: '/gold-rate',
  faq: '/faq',
  about: '/about',
  contact: '/contact',
  generateCanonicalRoute,
  getServiceRoute: (service: ServiceDef | string, location?: UniversalLocationSummary | string) =>
    generateCanonicalRoute({ service, location }),
  getLocationRoute: (location: UniversalLocationSummary | string, service?: ServiceDef | string) =>
    generateCanonicalRoute({ location, service }),
  getMetalRoute: (metal: MaterialDef | string, location?: UniversalLocationSummary | string) =>
    generateCanonicalRoute({ metal, location }),
  getJewelleryRoute: (item: JewelleryDef | string, location?: UniversalLocationSummary | string) =>
    generateCanonicalRoute({ item, location }),
};
