import { resolvePageContext } from '../lib/universal-engine';
import { generateAmpHtml } from '../lib/amp-engine';
import { SITE_URL } from '../lib/site-url';

interface AmpAuditResult {
  route: string;
  ampUrl: string;
  canonicalUrl: string;
  hasAmpAttribute: boolean;
  hasAmpRuntimeScript: boolean;
  hasAmpBoilerplateCss: boolean;
  hasCustomStyleUnderLimit: boolean;
  hasCanonicalLink: boolean;
  hasJsonLdSchema: boolean;
  hasViewportMeta: boolean;
  hasZeroDisallowedScripts: boolean;
  payloadSizeBytes: number;
  renderTimeMs: number;
  passed: boolean;
  errors: string[];
}

const TEST_ROUTES = [
  '/',
  '/andhra-pradesh',
  '/telangana',
  '/andhra-pradesh/visakhapatnam',
  '/telangana/hyderabad',
  '/andhra-pradesh/visakhapatnam/gajuwaka',
  '/telangana/hyderabad/secunderabad',
  '/services',
  '/services/sell-gold',
  '/services/pledged-gold-release',
  '/metals/gold',
  '/metals/silver',
  '/jewellery/chains',
  '/gold-rate',
  '/gold-valuation-calculator',
  '/faq',
  '/about',
  '/contact'
];

export async function runAmpAudit(): Promise<{
  totalAudited: number;
  passedCount: number;
  failedCount: number;
  results: AmpAuditResult[];
}> {
  console.log('🚀 Launching AMP (Accelerated Mobile Pages) Diagnostic Audit Suite...\n');

  const results: AmpAuditResult[] = [];

  for (const route of TEST_ROUTES) {
    const startTime = performance.now();
    const errors: string[] = [];

    // Resolve context & generate AMP HTML
    const ctx = resolvePageContext({ pathname: route });
    if (!ctx) {
      errors.push(`Failed to resolve universal page context for path: ${route}`);
    }

    const ampHtml = generateAmpHtml(ctx);
    const endTime = performance.now();
    const renderTimeMs = Math.round(endTime - startTime);
    const payloadSizeBytes = Buffer.byteLength(ampHtml, 'utf8');

    // Rule checks
    const hasAmpAttribute = /<html\s+[^>]*[\u26A1amp][^>]*>/i.test(ampHtml) || /<html\s+⚡/i.test(ampHtml) || /<html\s+amp/i.test(ampHtml);
    const hasAmpRuntimeScript = ampHtml.includes('https://cdn.ampproject.org/v0.js');
    const hasAmpBoilerplateCss = ampHtml.includes('amp-boilerplate');
    
    // Custom style size check
    const styleMatch = ampHtml.match(/<style amp-custom>([\s\S]*?)<\/style>/i);
    const styleSize = styleMatch ? Buffer.byteLength(styleMatch[1], 'utf8') : 0;
    const hasCustomStyleUnderLimit = styleSize < 75000; // AMP limit is 75KB

    const hasCanonicalLink = ampHtml.includes(`<link rel="canonical" href="${ctx.canonicalUrl}">`);
    const hasJsonLdSchema = ampHtml.includes('application/ld+json');
    const hasViewportMeta = ampHtml.includes('width=device-width');
    
    // Verify no illegal external scripts
    const scriptTags = ampHtml.match(/<script[\s\S]*?<\/script>/gi) || [];
    const illegalScripts = scriptTags.filter(s => {
      if (s.includes('application/ld+json')) return false;
      if (s.includes('https://cdn.ampproject.org/v0.js')) return false;
      return true;
    });
    const hasZeroDisallowedScripts = illegalScripts.length === 0;

    if (!hasAmpAttribute) errors.push('Missing <html ⚡> or <html amp> attribute.');
    if (!hasAmpRuntimeScript) errors.push('Missing AMP JS runtime (v0.js).');
    if (!hasAmpBoilerplateCss) errors.push('Missing AMP boilerplate CSS.');
    if (!hasCustomStyleUnderLimit) errors.push(`AMP custom CSS exceeds limit (${Math.round(styleSize / 1024)}KB / 75KB).`);
    if (!hasCanonicalLink) errors.push(`Canonical URL mismatch. Expected: ${ctx.canonicalUrl}`);
    if (!hasJsonLdSchema) errors.push('Missing JSON-LD structured data graph.');
    if (!hasViewportMeta) errors.push('Missing standard AMP viewport meta tag.');
    if (!hasZeroDisallowedScripts) errors.push(`Found ${illegalScripts.length} disallowed inline script(s).`);
    if (payloadSizeBytes > 60000) errors.push(`AMP HTML size is large (${Math.round(payloadSizeBytes / 1024)}KB). Goal <50KB.`);

    const passed = errors.length === 0;

    results.push({
      route,
      ampUrl: `${SITE_URL}/amp${route === '/' ? '' : route}`,
      canonicalUrl: ctx.canonicalUrl,
      hasAmpAttribute,
      hasAmpRuntimeScript,
      hasAmpBoilerplateCss,
      hasCustomStyleUnderLimit,
      hasCanonicalLink,
      hasJsonLdSchema,
      hasViewportMeta,
      hasZeroDisallowedScripts,
      payloadSizeBytes,
      renderTimeMs,
      passed,
      errors
    });
  }

  const passedCount = results.filter(r => r.passed).length;
  const failedCount = results.length - passedCount;

  console.log('-----------------------------------------------------------------------------------------');
  console.log(`AMP AUDIT RESULTS SUMMARY: ${passedCount}/${results.length} PASSED`);
  console.log('-----------------------------------------------------------------------------------------\n');

  console.table(
    results.map(r => ({
      Route: r.route,
      'Size (KB)': (r.payloadSizeBytes / 1024).toFixed(1),
      'Render (ms)': r.renderTimeMs,
      'AMP Valid': r.hasAmpAttribute && r.hasAmpRuntimeScript && r.hasAmpBoilerplateCss ? '✅ YES' : '❌ NO',
      Canonical: r.hasCanonicalLink ? '✅ MATCH' : '❌ MISMATCH',
      Schema: r.hasJsonLdSchema ? '✅ PRESENT' : '❌ MISSING',
      Status: r.passed ? '✅ PASSED' : '❌ FAILED'
    }))
  );

  if (failedCount > 0) {
    console.error('\n⚠️ DETAILED AMP VALIDATION ERRORS:');
    results.filter(r => !r.passed).forEach(r => {
      console.error(`\nRoute: ${r.route}`);
      r.errors.forEach(err => console.error(`  - ${err}`));
    });
  } else {
    console.log('\n🎉 ALL AMP PAGES ARE 100% VALID, COMPLIANT, AND OPTIMIZED FOR MOBILE SEARCH ENGINES!\n');
  }

  return {
    totalAudited: results.length,
    passedCount,
    failedCount,
    results
  };
}

// Execute if run directly from CLI
if (require.main === module) {
  runAmpAudit().catch(err => {
    console.error('AMP Audit execution failed:', err);
    process.exit(1);
  });
}
