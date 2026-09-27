import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
import UniversalPageView from '@/components/UniversalPageView';
import { BRAND } from '@/lib/brand';
import { SITE_URL } from '@/lib/site-url';
import { resolvePageContext, MATERIALS } from '@/lib/universal-engine';
import { generateSeoTitle } from '@/lib/seo-title-engine';

interface MetalPageProps {
  params: Promise<{
    metal: string;
  }>;
}

export async function generateMetadata({ params }: MetalPageProps): Promise<Metadata> {
  const { metal } = await params;
  const ctx = resolvePageContext({ metalSlug: metal, pathname: `/metals/${metal}` });

  if (!ctx || !ctx.material) {
    return { title: generateSeoTitle({ searchIntent: 'Precious Metals' }) };
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

export default async function MetalDetailPage({ params }: MetalPageProps) {
  const { metal } = await params;
  const ctx = resolvePageContext({ metalSlug: metal, pathname: `/metals/${metal}` });

  if (!ctx || !ctx.material) {
    notFound();
  }

  return <UniversalPageView context={ctx} />;
}
