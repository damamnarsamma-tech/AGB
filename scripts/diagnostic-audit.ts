import { getIndexableRoutes, buildCanonicalUrl, SITE_URL } from '../lib/site-url';
import {
  generateSitemapCoreXml,
  generateSitemapServicesXml,
  generateSitemapMetalsXml,
  generateSitemapJewelleryXml,
  generateSitemapApDistrictsXml,
  generateSitemapTsDistrictsXml,
  generateSitemapApCitiesXml,
  generateSitemapTsCitiesXml,
  generateSitemapApVillagesXml,
  generateSitemapTsVillagesXml,
  generateSitemapLocationServicesApXml,
  generateSitemapLocationServicesTsXml,
  generateSitemapIndexXml
} from '../lib/sitemap-generator';
import { resolvePageContext, UNIVERSAL_SERVICES, MATERIALS, JEWELLERY_TYPES } from '../lib/universal-engine';
import { generateCanonicalRoute } from '../lib/route-registry';
import { locationHierarchy } from '../lib/location-data';

interface AuditResult {
  totalSitemapUrls: number;
  totalIndexableRoutes: number;
  testedRoutesCount: number;
  passedRoutesCount: number;
  failedRoutesCount: number;
  missingFromSitemap: string[];
  orphanedSitemapUrls: string[];
  contextMismatchErrors: string[];
  categoriesSummary: Record<string, number>;
}

export function runDiagnosticAudit(): AuditResult {
  console.log('=== STARTING ROUTE & SITEMAP DIAGNOSTIC AUDIT ===\n');

  const indexableRoutes = getIndexableRoutes();

  // 1. Collect all XML Sitemaps content and parse URLs
  const sitemapXmls = [
    generateSitemapCoreXml(),
    generateSitemapServicesXml(),
    generateSitemapMetalsXml(),
    generateSitemapJewelleryXml(),
    generateSitemapApDistrictsXml(),
    generateSitemapTsDistrictsXml(),
    generateSitemapApCitiesXml(),
    generateSitemapTsCitiesXml(),
    generateSitemapApVillagesXml(),
    generateSitemapTsVillagesXml(),
    generateSitemapLocationServicesApXml(),
    generateSitemapLocationServicesTsXml()
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

  const sitemapUrls = sitemapXmls.flatMap(extractUrls);

  const uniqueSitemapUrls = Array.from(new Set(sitemapUrls));

  // 2. Build test suite of candidate URLs
  // Sample a diverse representative cross-section across all categories to run fast and within memory
  const candidateRoutes: { url: string; expectedType: string; category: string }[] = [];

  // All core, service, metal routes
  for (const r of indexableRoutes) {
    if (r.category === 'core' || r.category === 'service' || r.category === 'metal' || r.category === 'state' || r.category === 'district') {
      candidateRoutes.push({ url: r.url, expectedType: r.category, category: r.category });
    }
  }

  // Sample mandals and localities (first 100 of each)
  let mandalSampleCount = 0;
  let localitySampleCount = 0;
  for (const r of indexableRoutes) {
    if (r.category === 'mandal' && mandalSampleCount < 100) {
      candidateRoutes.push({ url: r.url, expectedType: r.category, category: r.category });
      mandalSampleCount++;
    } else if (r.category === 'locality' && localitySampleCount < 100) {
      candidateRoutes.push({ url: r.url, expectedType: r.category, category: r.category });
      localitySampleCount++;
    }
  }

  // B. Location + Service Combinations (High-Intent Legitimate Combinations)
  const sampleLocations = [
    '/andhra-pradesh/ntr',
    '/andhra-pradesh/ntr/vijayawada',
    '/telangana/hyderabad',
    '/telangana/hyderabad/charminar'
  ];

  const sampleServices = Object.keys(UNIVERSAL_SERVICES);

  for (const loc of sampleLocations) {
    for (const sKey of sampleServices) {
      const canonUrl = buildCanonicalUrl(generateCanonicalRoute({ location: loc, service: sKey }));
      candidateRoutes.push({
        url: canonUrl,
        expectedType: 'location_service',
        category: 'location_service'
      });
    }
  }

  // C. Location + Metal Combinations
  for (const loc of sampleLocations) {
    for (const mKey of ['gold', 'silver', 'platinum', 'diamond']) {
      const canonUrl = buildCanonicalUrl(generateCanonicalRoute({ location: loc, metal: mKey }));
      candidateRoutes.push({
        url: canonUrl,
        expectedType: 'location_metal',
        category: 'location_metal'
      });
    }
  }

  // 3. Test each candidate route through resolvePageContext
  let passedCount = 0;
  let failedCount = 0;
  const contextMismatchErrors: string[] = [];
  const categoriesSummary: Record<string, number> = {};

  for (const item of candidateRoutes) {
    categoriesSummary[item.category] = (categoriesSummary[item.category] || 0) + 1;

    const urlObj = new URL(item.url);
    const pathname = urlObj.pathname;
    const ctx = resolvePageContext({ pathname });

    let isOk = true;

    // Validation checks on context
    if (!ctx) {
      isOk = false;
      contextMismatchErrors.push(`FAIL: ${pathname} failed to return PageContext.`);
    } else {
      // Check 1: Canonical URL consistency
      if (!ctx.canonicalUrl) {
        isOk = false;
        contextMismatchErrors.push(`FAIL: ${pathname} has empty canonicalUrl.`);
      }

      // Check 2: Service matching if location_service or service category
      if (item.category === 'service') {
        if (!ctx.service) {
          isOk = false;
          contextMismatchErrors.push(`FAIL: ${pathname} expected service in PageContext but got none.`);
        }
      }

      if (item.category === 'location_service') {
        if (!ctx.service || !ctx.location) {
          isOk = false;
          contextMismatchErrors.push(`FAIL: ${pathname} expected both location and service in PageContext. Got loc=${!!ctx.location}, srv=${!!ctx.service}`);
        }
      }

      if (item.category === 'location_metal') {
        if (!ctx.material || !ctx.location) {
          isOk = false;
          contextMismatchErrors.push(`FAIL: ${pathname} expected both location and material in PageContext. Got loc=${!!ctx.location}, mat=${!!ctx.material}`);
        }
      }

      if (item.category === 'state' || item.category === 'district' || item.category === 'mandal' || item.category === 'locality') {
        if (!ctx.location) {
          isOk = false;
          contextMismatchErrors.push(`FAIL: ${pathname} expected location object in PageContext.`);
        }
      }
    }

    if (isOk) {
      passedCount++;
    } else {
      failedCount++;
    }
  }

  // 4. Compare Sitemaps vs Indexable Routes
  const sitemapSet = new Set(uniqueSitemapUrls);
  const indexableSet = new Set(indexableRoutes.map(r => r.url));

  const missingFromSitemap: string[] = [];
  const orphanedSitemapUrls: string[] = [];

  for (const r of indexableRoutes) {
    if (!sitemapSet.has(r.url)) {
      missingFromSitemap.push(r.url);
    }
  }

  for (const sUrl of uniqueSitemapUrls) {
    if (!indexableSet.has(sUrl)) {
      orphanedSitemapUrls.push(sUrl);
    }
  }

  const result: AuditResult = {
    totalSitemapUrls: uniqueSitemapUrls.length,
    totalIndexableRoutes: indexableRoutes.length,
    testedRoutesCount: candidateRoutes.length,
    passedRoutesCount: passedCount,
    failedRoutesCount: failedCount,
    missingFromSitemap,
    orphanedSitemapUrls,
    contextMismatchErrors,
    categoriesSummary
  };

  console.log('=== DIAGNOSTIC AUDIT RESULTS SUMMARY ===');
  console.log(`Total Sitemap URLs: ${result.totalSitemapUrls}`);
  console.log(`Total Base Indexable Routes: ${result.totalIndexableRoutes}`);
  console.log(`Tested Candidate Routes (Including Combinations): ${result.testedRoutesCount}`);
  console.log(`Passed Routes Context Checks: ${result.passedRoutesCount}`);
  console.log(`Failed Routes Context Checks: ${result.failedRoutesCount}`);
  console.log(`Missing Indexable Routes from Sitemaps: ${result.missingFromSitemap.length}`);
  console.log(`Orphaned URLs in Sitemaps: ${result.orphanedSitemapUrls.length}\n`);

  if (result.missingFromSitemap.length > 0) {
    console.log('Missing From Sitemap Sample:', result.missingFromSitemap.slice(0, 5));
  }
  if (result.orphanedSitemapUrls.length > 0) {
    console.log('Orphaned Sitemap Sample:', result.orphanedSitemapUrls.slice(0, 5));
  }
  if (result.contextMismatchErrors.length > 0) {
    console.log('Context Mismatch Error Sample:', result.contextMismatchErrors.slice(0, 10));
  }

  return result;
}

runDiagnosticAudit();
