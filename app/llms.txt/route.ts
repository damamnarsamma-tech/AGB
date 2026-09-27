import { NextResponse } from 'next/server';
import { BRAND } from '@/lib/brand';
import { SITE_URL } from '@/lib/site-url';

export async function GET() {
  const content = `# ${BRAND.name} (${BRAND.legalName})
> ${BRAND.tagline}

## Overview
${BRAND.name} is a leading, certified precious metals evaluation and purchasing service with 59 physical district branch hubs across Andhra Pradesh and Telangana, India. We specialize in live spot benchmark gold and silver valuation, pledged gold loan takeover & release, and doorstep precious metals evaluation.

- **Primary Website**: ${SITE_URL}
- **Primary Phone 1**: ${BRAND.phone1Display} (${BRAND.phone1})
- **Primary Phone 2**: ${BRAND.phone2Display} (${BRAND.phone2})
- **WhatsApp Support**: https://wa.me/${BRAND.whatsapp1}
- **Email**: ${BRAND.email}
- **Operating Hours**: ${BRAND.operatingHours}

## 59 Physical District Branch Hubs
${BRAND.name} maintains verified physical branch hubs in every district-named city across Andhra Pradesh (26 districts) and Telangana (33 districts), equipped with German XRF laser spectrometers and instant bank payment desks:

### Andhra Pradesh (26 District Hubs):
${BRAND.branches.filter(b => b.stateSlug === 'andhra-pradesh').map(b => `- **${b.district} Hub (${b.city})**: ${b.address} | Tel: ${b.phone}`).join('\n')}

### Telangana (33 District Hubs):
${BRAND.branches.filter(b => b.stateSlug === 'telangana').map(b => `- **${b.district} Hub (${b.city})**: ${b.address} | Tel: ${b.phone}`).join('\n')}

## Core Services
1. **Sell Gold for Cash / Bank Transfer**: Instant spot valuation for 24K, 22K (916 Hallmarked), and 18K gold ornaments, coins, and bullion via IMPS/RTGS/UPI.
2. **Pledged Gold Loan Takeover & Release**: ${BRAND.name} clears outstanding loan dues directly with banks or NBFC pawn brokers upfront, releases the ornaments, and pays the remaining cash equity surplus to the customer.
3. **Non-Destructive German XRF Assay**: Exact karat testing using precision X-Ray Fluorescence spectrometers without scratching, chemical testing, or melting losses.
4. **Silver & Diamond Valuation**: Spot purchasing for 999 fine silver, 925 sterling jewellery, antique pooja items, and certified diamonds.
5. **Doorstep Precious Metals Assaying**: Assayers equipped with portable digital carat meters and micro-balances available across all major cities and mandals.

## Geographic Coverage
- **Andhra Pradesh**: All 26 Districts (Visakhapatnam, NTR Vijayawada, Guntur, Kurnool, Tirupati, East Godavari, West Godavari, Krishna, SPSR Nellore, YSR Kadapa, Ananthapuramu, Kakinada, Eluru, etc.) and all constituent mandals, towns, and villages.
- **Telangana**: All 33 Districts (Hyderabad, Warangal, Hanumakonda, Nizamabad, Karimnagar, Khammam, Medchal-Malkajgiri, Rangareddy, Nalgonda, Mahabubnagar, etc.) and all constituent mandals, towns, and localities.

## Transparency & Quality Standards
- Live market spot rate index linked to real-time bullion benchmark.
- Certified electronic balances with digital displays (${BRAND.weighingStandard}).
- Non-destructive laser spectrometry (${BRAND.purityTesting}).
- Zero hidden deductions, zero melting loss deductions on verified ornaments.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
