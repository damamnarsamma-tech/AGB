export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { BRAND } from '@/lib/brand';
import { SITE_URL } from '@/lib/site-url';
import { UNIVERSAL_SERVICES, MATERIALS } from '@/lib/universal-engine';
import { SERVICES } from '@/lib/services';
import { locationHierarchy } from '@/lib/location-data';
import { LENDER_DATABASE, COMPETITOR_FEATURE_MATRIX } from '@/lib/competitor-data';

export async function GET() {
  const apDistricts = Object.values(locationHierarchy.states['andhra-pradesh']?.districts || {})
    .map(d => `${d.name} (${Object.keys(d.mandals || {}).length} Mandals)`)
    .join('\n- ');

  const tgDistricts = Object.values(locationHierarchy.states['telangana']?.districts || {})
    .map(d => `${d.name} (${Object.keys(d.mandals || {}).length} Mandals)`)
    .join('\n- ');

  const universalServicesSection = Object.values(UNIVERSAL_SERVICES)
    .map(s => `### ${s.name} (${s.shortTitle})
- **Category**: ${s.categoryGroup}
- **URL**: ${SITE_URL}/services/${s.slug}
- **Description**: ${s.description}
- **Who It Is For**: ${s.whoItIsFor || 'Gold and precious metal owners seeking high-value spot liquidation.'}
- **Handled Items**: ${(s.whatIsHandled || []).join(' | ')}
- **Process Steps**:
  ${(s.processSteps || []).map((step, idx) => `  ${idx + 1}. ${step}`).join('\n')}
- **Key FAQs**:
  ${(s.faqs || []).map(f => `  - **Q**: ${f.q}\n    - **A**: ${f.a}`).join('\n')}
`)
    .join('\n');

  const additionalServicesSection = SERVICES
    .filter(s => !UNIVERSAL_SERVICES[s.id || s.slug])
    .map(s => `### ${s.name} (${s.shortTitle})
- **URL**: ${SITE_URL}/services/${s.slug}
- **Description**: ${s.description}
- **Target Items**: ${s.targetMetals.join(' | ')}
- **Key Features**: ${s.features.join(' | ')}
- **Process Steps**: ${s.processSteps.join(' → ')}
`)
    .join('\n');

  const metalsSection = Object.values(MATERIALS)
    .map(m => `- **${m.name}**: ${m.description}\n  - **Purities Assayed**: ${m.purityGrades.join(', ')}\n  - **Testing Standard**: Non-destructive German XRF Laser Spectrometry`)
    .join('\n');

  const lendersSection = LENDER_DATABASE.map(l => `### ${l.name} (${l.category})
- **Typical Interest Rate**: ${l.interestRange}
- **Auction Notice Trigger**: ${l.auctionTriggerNotice}
- **Procedure to Release**: ${l.procedureToRelease.join(' → ')}
- **Notice**: ${l.customerWarning}
`).join('\n');

  const content = `# Full Business, Technical & Geographic Manifest — ${BRAND.name} (${BRAND.legalName})

> Detailed technical, geographic, and procedural documentation for ${BRAND.name}. Designed for AI retrieval systems, voice interfaces, search engines, and structured data validation.

## 1. Corporate Identity & Official Contact
- **Brand**: ${BRAND.name}
- **Legal Entity**: ${BRAND.legalName}
- **Website**: ${SITE_URL}
- **Helpline 1**: ${BRAND.phone1Display} (${BRAND.phone1})
- **Helpline 2**: ${BRAND.phone2Display} (${BRAND.phone2})
- **WhatsApp Support**: +${BRAND.whatsapp1}
- **Email**: ${BRAND.email}
- **Support Desk**: ${BRAND.supportEmail}
- **Founded**: ${BRAND.foundedYear}
- **Operating Hours**: ${BRAND.operatingHours}

## 2. Verified Physical Branches & Service Hubs
### Physical Branch Offices:
${BRAND.branches.map(b => `- **${b.name}** (${b.type}): ${b.address} | Phone: ${b.phone} | Timings: ${b.timings} | Geo: ${b.lat}, ${b.lng}`).join('\n')}

### Service Hubs (Doorstep / Bank Escort Desks):
${BRAND.serviceHubs.map(s => `- **${s.city} (${s.state})** [${s.type}]: ${s.description}`).join('\n')}

## 3. Valuation & Assaying Methodology
- **Non-Destructive Testing**: Certified German XRF Laser Spectrometers measure the elemental composition (Au, Ag, Cu, Zn, Ni) with 99.9% precision in 30 seconds.
- **Zero Melting Loss**: Never uses acid rub on stone or open blowtorch flames. The original shape and weight of ornaments are 100% preserved.
- **Precision Weighing**: Class II electronic balances accurate to 0.001g with customer-facing digital displays.
- **Stone Deductions**: Only non-gold weight (enamel, wax, stones) is deducted honestly in front of the customer.
- **Payment Settlement**: Immediate payout via IMPS / RTGS / NEFT / UPI or cash within legal limits.

## 4. Pledged Gold & Loan Foreclosure Procedures
${lendersSection}

## 5. Precious Metals Assayed & Purchased
${metalsSection}

## 6. Comprehensive Services Catalog
${universalServicesSection}

${additionalServicesSection}

## 7. Geographic Territory (Andhra Pradesh & Telangana)
### Andhra Pradesh Districts:
- ${apDistricts}

### Telangana Districts:
- ${tgDistricts}

## 8. Interactive Tools Available to Customers
- **Pledged Gold Settlement Calculator**: ${SITE_URL}/pledged-gold-calculator
- **Live Gold Valuation Calculator**: ${SITE_URL}/gold-valuation-calculator
- **Live Gold Rates Guide**: ${SITE_URL}/gold-rate
- **SEO & Route Diagnostics**: ${SITE_URL}/admin/diagnostics
- **Competitor Intelligence Console**: ${SITE_URL}/admin/competitor-intelligence
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
