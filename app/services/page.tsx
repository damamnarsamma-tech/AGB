import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import UniversalPageView from '@/components/UniversalPageView';
import { BRAND } from '@/lib/brand';
import { resolvePageContext } from '@/lib/universal-engine';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Precious Metals & Gold Buying Services',
    location: 'Andhra Pradesh & Telangana'
  }),
  description: `Explore our full range of precious metals services including spot gold buying, silver valuation, platinum appraisal, pledged gold release, and loan transfer assistance across AP & Telangana.`,
  alternates: {
    canonical: `${BRAND.website}/services`,
    types: {
      'application/amp+html': `${BRAND.website}/amp/services`
    }
  },
  openGraph: {
    title: `Precious Metals & Gold Buying Services | ${BRAND.name}`,
    description: `Transparent valuation, non-destructive assay testing, and immediate direct settlement for gold, silver, and pledged gold across Andhra Pradesh and Telangana.`,
    url: `${BRAND.website}/services`,
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `Precious Metals & Gold Buying Services | ${BRAND.name}`,
    description: `Explore all gold valuation, buying, and gold loan foreclosure services available at ${BRAND.name}.`
  }
};

export default function ServicesHubPage() {
  const context = resolvePageContext({ pathname: '/services' });
  return <UniversalPageView context={context} />;
}
