import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import UniversalPageView from '@/components/UniversalPageView';
import { BRAND } from '@/lib/brand';
import { resolvePageContext } from '@/lib/universal-engine';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Gold & Silver Jewellery Buyers',
    location: 'Andhra Pradesh & Telangana'
  }),
  description: `Sell gold chains, necklaces, bangles, rings, earrings, bracelets, mangalsutras, coins, and scrap jewellery for instant cash with 0% melting loss.`,
  alternates: {
    canonical: `${BRAND.website}/jewellery`,
    types: {
      'application/amp+html': `${BRAND.website}/amp/jewellery`
    }
  },
  openGraph: {
    title: `Gold & Silver Jewellery Buyers | ${BRAND.name}`,
    description: `Highest payout for all types of gold and silver jewellery with German XRF laser purity verification.`,
    url: `${BRAND.website}/jewellery`,
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  }
};

export default function JewelleryHubPage() {
  const context = resolvePageContext({ pathname: '/jewellery' });
  return <UniversalPageView context={context} />;
}
