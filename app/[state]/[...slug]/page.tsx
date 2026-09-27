import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
import UniversalPageView from '@/components/UniversalPageView';
import { BRAND } from '@/lib/brand';
import { SITE_URL } from '@/lib/site-url';
import { resolvePageContext } from '@/lib/universal-engine';
import { generateSeoTitle } from '@/lib/seo-title-engine';

interface PageProps {
  params: Promise<{
    state: string;
    slug?: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, slug } = await params;
  const ctx = resolvePageContext({ state, slug });

  if (!ctx || !ctx.location) {
    return {
      title: generateSeoTitle({ searchIntent: 'Gold Buyers', location: state.replace('-', ' ') }),
      description: `Sell gold for instant cash with ${BRAND.name}.`
    };
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

export default async function DynamicLocationPage({ params }: PageProps) {
  const { state, slug } = await params;
  const ctx = resolvePageContext({ state, slug });

  if (!ctx || !ctx.integrityCheck?.passed || (!ctx.location && !ctx.service && !ctx.material && !ctx.jewellery)) {
    notFound();
  }

  return <UniversalPageView context={ctx} />;
}

