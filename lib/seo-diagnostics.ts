import { getIndexableRoutes, buildCanonicalUrl } from './site-url';
import * as sitemapGen from './sitemap-generator';
import { resolvePageContext, UNIVERSAL_SERVICES } from './universal-engine';
import { generateCanonicalRoute } from './route-registry';

export interface DiscrepancyItem {
  id: string;
  type: 'missing_from_sitemap' | 'orphaned_in_sitemap' | 'context_mismatch' | 'integrity_check_failed' | 'canonical_mismatch';
  severity: 'error' | 'warning' | 'info';
  url: string;
  category: string;
  details: string;
  suggestedFix?: string;
}

export interface SeoDiagnosticReport {
  timestamp: string;
  summary: {
    totalSitemapUrls: number;
    totalIndexableRoutes: number;
    testedRoutes: number;
    passedRoutes: number;
    failedRoutes: number;
    integrityWarnings: number;
    healthScore: number;
  };
  discrepancies: DiscrepancyItem[];
  categories: Record<string, { total: number; passed: number; failed: number }>;
}

export function runSeoDiagnostics(): SeoDiagnosticReport {
  const timestamp = new Date().toISOString();
  const indexableRoutes = getIndexableRoutes();

  // 1. Generate Sitemaps & Extract URLs from ALL modular sitemaps
  const allSitemapGenerators = [
    sitemapGen.generateSitemapCoreXml,
    sitemapGen.generateSitemapServicesXml,
    sitemapGen.generateSitemapMetalsXml,
    sitemapGen.generateSitemapApDistrictsXml,
    sitemapGen.generateSitemapTsDistrictsXml,
    sitemapGen.generateSitemapApCitiesXml,
    sitemapGen.generateSitemapTsCitiesXml,
    sitemapGen.generateSitemapApVillagesXml,
    sitemapGen.generateSitemapTsVillagesXml,
    sitemapGen.generateSitemapLocationServicesApXml,
    sitemapGen.generateSitemapLocationServicesTsXml,
  ];

  const extractUrls = (xml: string): string[] => {
    const locRegex = /<loc>(.*?)<\/loc>/g;
    const urls: string[] = [];
    let match;
    while ((match = locRegex.exec(xml)) !== null) {
      urls.push(match[1].trim());
    }
    return urls;
  };

  const allSitemapUrls = allSitemapGenerators.flatMap(fn => extractUrls(fn()));
  const uniqueSitemapUrls = Array.from(new Set(allSitemapUrls));
  const sitemapSet = new Set(uniqueSitemapUrls);

  // 2. Map Indexable Routes
  const indexableMap = new Map<string, typeof indexableRoutes[0]>();
  for (const r of indexableRoutes) {
    indexableMap.set(r.url, r);
  }

  const discrepancies: DiscrepancyItem[] = [];
  const categories: Record<string, { total: number; passed: number; failed: number }> = {};

  const recordCategory = (cat: string, isPassed: boolean) => {
    if (!categories[cat]) {
      categories[cat] = { total: 0, passed: 0, failed: 0 };
    }
    categories[cat].total++;
    if (isPassed) {
      categories[cat].passed++;
    } else {
      categories[cat].failed++;
    }
  };

  let testedCount = 0;
  let passedCount = 0;
  let failedCount = 0;
  let integrityWarnings = 0;

  // A. Check Route Registry vs Sitemap Parity (Missing from Sitemap)
  for (const r of indexableRoutes) {
    testedCount++;
    const inSitemap = sitemapSet.has(r.url);

    // Test PageContext resolution
    const urlObj = new URL(r.url);
    const pathname = urlObj.pathname;
    const ctx = resolvePageContext({ pathname });

    let isPassed = true;

    if (!inSitemap) {
      isPassed = false;
      discrepancies.push({
        id: `missing-sitemap-${pathname}`,
        type: 'missing_from_sitemap',
        severity: 'error',
        url: r.url,
        category: r.category,
        details: `Route ${pathname} exists in RouteRegistry but is missing from XML sitemap.`,
        suggestedFix: 'Include route in sitemap generator function.'
      });
    }

    if (!ctx) {
      isPassed = false;
      discrepancies.push({
        id: `ctx-null-${pathname}`,
        type: 'context_mismatch',
        severity: 'error',
        url: r.url,
        category: r.category,
        details: `PageContext returned null for route ${pathname}.`,
        suggestedFix: 'Verify resolvePageContext handles this path.'
      });
    } else {
      // Canonical Check
      if (ctx.canonicalUrl !== r.url) {
        isPassed = false;
        discrepancies.push({
          id: `canonical-mismatch-${pathname}`,
          type: 'canonical_mismatch',
          severity: 'warning',
          url: r.url,
          category: r.category,
          details: `Canonical URL ${ctx.canonicalUrl} does not match expected route ${r.url}.`,
          suggestedFix: 'Align buildCanonicalUrl with route.'
        });
      }

      // Integrity Check
      if (ctx.integrityCheck && !ctx.integrityCheck.passed) {
        integrityWarnings++;
        if (ctx.integrityCheck.isDiagnostic404) {
          discrepancies.push({
            id: `integrity-failed-${pathname}`,
            type: 'integrity_check_failed',
            severity: 'warning',
            url: r.url,
            category: r.category,
            details: `Integrity check failed: ${ctx.integrityCheck.reason || 'Source entity missing.'}`,
            suggestedFix: 'Ensure source data dictionary contains requested entity.'
          });
        }
      }
    }

    recordCategory(r.category, isPassed);
    if (isPassed) passedCount++;
    else failedCount++;
  }

  // B. Check Orphaned URLs in Sitemap
  for (const sUrl of uniqueSitemapUrls) {
    if (!indexableMap.has(sUrl)) {
      discrepancies.push({
        id: `orphaned-sitemap-${sUrl}`,
        type: 'orphaned_in_sitemap',
        severity: 'error',
        url: sUrl,
        category: 'sitemap_orphan',
        details: `Sitemap URL ${sUrl} is not registered in indexable RouteRegistry.`,
        suggestedFix: 'Remove non-canonical or stale URL from sitemap generator.'
      });
    }
  }

  // C. Test Sample Location + Service Combinations
  const sampleLocations = [
    '/andhra-pradesh/ntr',
    '/andhra-pradesh/ntr/vijayawada-urban',
    '/telangana/hyderabad',
    '/telangana/hyderabad/charminar'
  ];

  for (const loc of sampleLocations) {
    for (const serviceKey of Object.keys(UNIVERSAL_SERVICES)) {
      testedCount++;
      const comboPath = generateCanonicalRoute({ location: loc, service: serviceKey });
      const fullUrl = buildCanonicalUrl(comboPath);
      const ctx = resolvePageContext({ pathname: comboPath });

      let isPassed = true;
      if (!ctx || !ctx.service || !ctx.location) {
        isPassed = false;
        discrepancies.push({
          id: `combo-mismatch-${comboPath}`,
          type: 'context_mismatch',
          severity: 'error',
          url: fullUrl,
          category: 'location_service_combo',
          details: `Location + Service combination ${comboPath} failed to resolve both location and service.`,
          suggestedFix: 'Verify resolvePageContext segment parsing logic.'
        });
      }

      recordCategory('location_service_combo', isPassed);
      if (isPassed) passedCount++;
      else failedCount++;
    }
  }

  const errorCount = discrepancies.filter(d => d.severity === 'error').length;
  const healthScore = testedCount > 0
    ? Math.max(0, Math.min(100, Math.round(((testedCount - errorCount) / testedCount) * 100)))
    : 100;

  return {
    timestamp,
    summary: {
      totalSitemapUrls: uniqueSitemapUrls.length,
      totalIndexableRoutes: indexableRoutes.length,
      testedRoutes: testedCount,
      passedRoutes: passedCount,
      failedRoutes: failedCount,
      integrityWarnings,
      healthScore
    },
    discrepancies,
    categories
  };
}

export function getSeoDiagnosticReport(): SeoDiagnosticReport {
  return runSeoDiagnostics();
}
