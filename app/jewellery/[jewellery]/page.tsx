import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
import UniversalPageView from '@/components/UniversalPageView';
import { BRAND } from '@/lib/brand';
import { SITE_URL } from '@/lib/site-url';
import { resolvePageContext, JEWELLERY_TYPES } from '@/lib/universal-engine';
import { generateSeoTitle } from '@/lib/seo-title-engine';

interface JewelleryPageProps {
  params: Promise<{
    jewellery: string;
  }>;
}

export async function generateMetadata({ params }: JewelleryPageProps): Promise<Metadata> {
  const { jewellery } = await params;
  const ctx = resolvePageContext({ jewellerySlug: jewellery, pathname: `/jewellery/${jewellery}` });

  if (!ctx || !ctx.jewellery) {
    return { title: generateSeoTitle({ searchIntent: 'Gold Jewellery' }) };
  }

  const ampUrl = `${SITE_URL}/amp${ctx.pathname === '/' ? '' : ctx.pathname}`;

  return {
    title: ctx.pageTitle,
    description: ctx.metaDescription,
    alternates: {
      canonical: ctx.canonicalUrl,
      types: {
        'application/amp+html': ampUrl
      }
    },
    openGraph: {
      title: ctx.pageTitle,
      description: ctx.metaDescription,
      url: ctx.canonicalUrl,
      siteName: BRAND.name,
      locale: 'en_IN',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: ctx.pageTitle,
      description: ctx.metaDescription
    }
  };
}

export default async function JewelleryDetailPage({ params }: JewelleryPageProps) {
  const { jewellery } = await params;
  const ctx = resolvePageContext({ jewellerySlug: jewellery, pathname: `/jewellery/${jewellery}` });

  if (!ctx || !ctx.jewellery) {
    notFound();
  }

  return <UniversalPageView context={ctx} />;
}
