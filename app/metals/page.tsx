import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import UniversalPageView from '@/components/UniversalPageView';
import { BRAND } from '@/lib/brand';
import { resolvePageContext } from '@/lib/universal-engine';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Precious Metals Buying & Valuation',
    location: 'Andhra Pradesh & Telangana'
  }),
  description: `Instant spot cash for gold, silver, platinum, and diamond items with non-destructive German XRF laser purity testing across Andhra Pradesh and Telangana.`,
  alternates: {
    canonical: `${BRAND.website}/metals`,
    types: {
      'application/amp+html': `${BRAND.website}/amp/metals`
    }
  },
  openGraph: {
    title: `Precious Metals Buying & Valuation | ${BRAND.name}`,
    description: `Transparent valuation and instant payout for gold, silver, platinum, and diamond items.`,
    url: `${BRAND.website}/metals`,
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  }
};

export default function MetalsHubPage() {
  const context = resolvePageContext({ pathname: '/metals' });
  return <UniversalPageView context={context} />;
}
