import { resolvePageContext, resolveRoute, UNIVERSAL_SERVICES, MATERIALS, JEWELLERY_TYPES } from '../lib/universal-engine';
import { CONTACT_CONFIG } from '../lib/contact-config';
import { BRAND } from '../lib/brand';
import { SITE_URL } from '../lib/site-url';

function runTests() {
  console.log('====================================================');
  console.log('AKSHAYA GOLD BUYERS — UNIVERSAL ENGINE VERIFICATION');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string, details?: string) {
    if (condition) {
      console.log(`✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${testName}`);
      if (details) console.error(`   Details: ${details}`);
      failed++;
    }
  }

  // 1. Test Domain Verification
  assert(SITE_URL === 'https://akshaya-gold-buyers.ai.studio', 'SITE_URL is production domain', `Got: ${SITE_URL}`);

  // 2. Test Central Contact Numbers
  assert(CONTACT_CONFIG.phone1Raw === '7997433993', 'Primary Phone Raw is 7997433993');
  assert(CONTACT_CONFIG.phone1Display === '+91 79974 33993', 'Primary Phone Display is +91 79974 33993');
  assert(CONTACT_CONFIG.phone2Raw === '8885288817', 'Secondary Phone Raw is 8885288817');
  assert(CONTACT_CONFIG.phone2Display === '+91 88852 88817', 'Secondary Phone Display is +91 88852 88817');
  assert(CONTACT_CONFIG.whatsapp1Number === '917997433993', 'WhatsApp 1 Number is 917997433993');
  assert(CONTACT_CONFIG.whatsapp2Number === '918885288817', 'WhatsApp 2 Number is 918885288817');

  // 3. Test Vijayawada + Loan Transfer
  const vjaLoan = resolvePageContext({
    pathname: '/andhra-pradesh/ntr/vijayawada/services/loan-transfer'
  });
  assert(vjaLoan.location?.displayName === 'Vijayawada', 'Vijayawada location resolved in vjaLoan');
  assert(vjaLoan.service?.id === 'loan-transfer', 'Loan transfer service resolved in vjaLoan');
  assert(vjaLoan.h1.includes('Transfer') && vjaLoan.h1.includes('Vijayawada'), 'H1 includes Transfer and Vijayawada', `Got: ${vjaLoan.h1}`);
  assert(vjaLoan.whatsAppMessage.includes('Vijayawada') && vjaLoan.whatsAppMessage.includes('Transfer'), 'WhatsApp message has Vijayawada and Transfer', `Got: ${vjaLoan.whatsAppMessage}`);
  assert(vjaLoan.popupHeadline.includes('Loan Transfer') && vjaLoan.popupHeadline.includes('Vijayawada'), 'Popup headline has Loan Transfer in Vijayawada', `Got: ${vjaLoan.popupHeadline}`);

  // 4. Test Hyderabad + Gold Valuation (Zero Context Leakage - Selling not primary)
  const hydValuation = resolvePageContext({
    pathname: '/telangana/hyderabad/services/gold-valuation'
  });
  assert(hydValuation.location?.displayName === 'Hyderabad', 'Hyderabad location resolved');
  assert(hydValuation.service?.id === 'gold-valuation', 'Gold Valuation service resolved');
  assert(hydValuation.primaryIntent === 'valuation', 'Intent is valuation (not selling)');
  assert(hydValuation.h1.includes('Gold Valuation') && hydValuation.h1.includes('Hyderabad'), 'H1 matches Gold Valuation in Hyderabad');

  // 5. Test Visakhapatnam + Silver Buyers (Zero Context Leakage - Gold not primary)
  const vizagSilver = resolvePageContext({
    pathname: '/andhra-pradesh/visakhapatnam/services/silver-buyers'
  });
  assert(vizagSilver.location?.displayName === 'Visakhapatnam', 'Visakhapatnam resolved');
  assert(vizagSilver.service?.id === 'silver-buyers', 'Silver Buyers resolved');
  assert(vizagSilver.material?.id === 'silver', 'Material is silver');
  assert(vizagSilver.h1.includes('Silver Buyers') && vizagSilver.h1.includes('Visakhapatnam'), 'H1 is Silver Buyers in Visakhapatnam');

  // 6. Test Route Preservation (Vijayawada -> Loan Transfer must preserve location)
  const vjaLocContext = resolvePageContext({ pathname: '/andhra-pradesh/ntr/vijayawada' });
  const routeResult = resolveRoute({
    currentLocation: vjaLocContext.location,
    newService: UNIVERSAL_SERVICES['loan-transfer']
  });
  assert(
    routeResult === '/andhra-pradesh/ntr/vijayawada/services/loan-transfer',
    'Switching to Loan Transfer on Vijayawada yields /andhra-pradesh/ntr/vijayawada/services/loan-transfer',
    `Got: ${routeResult}`
  );

  // 7. Test Route Preservation (Hyderabad -> Silver Buyers)
  const hydLocContext = resolvePageContext({ pathname: '/telangana/hyderabad' });
  const hydSilverRoute = resolveRoute({
    currentLocation: hydLocContext.location,
    newService: UNIVERSAL_SERVICES['silver-buyers']
  });
  assert(
    hydSilverRoute === '/telangana/hyderabad/services/silver-buyers',
    'Switching to Silver Buyers on Hyderabad yields /telangana/hyderabad/services/silver-buyers',
    `Got: ${hydSilverRoute}`
  );

  // 8. Test Schema Generation
  assert(vjaLoan.structuredData.length >= 3, 'Schema graph contains Organization, WebPage, Breadcrumbs, FAQs');
  const orgSchema = vjaLoan.structuredData.find(s =>
    Array.isArray(s['@type']) ? s['@type'].includes('FinancialService') : s['@type'] === 'FinancialService'
  );
  assert(!!orgSchema, 'FinancialService Organization schema present');

  console.log('\n----------------------------------------------------');
  console.log(`TEST SUMMARY: ${passed} passed, ${failed} failed.`);
  console.log('----------------------------------------------------');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
