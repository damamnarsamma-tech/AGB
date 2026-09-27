import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
import UniversalPageView from '@/components/UniversalPageView';
import { BRAND } from '@/lib/brand';
import { SITE_URL } from '@/lib/site-url';
import { resolvePageContext, UNIVERSAL_SERVICES } from '@/lib/universal-engine';
import { generateSeoTitle } from '@/lib/seo-title-engine';

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service } = await params;
  const ctx = resolvePageContext({ serviceSlug: service, pathname: `/services/${service}` });

  if (!ctx || !ctx.service) {
    return { title: generateSeoTitle({ searchIntent: 'Gold Services' }) };
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

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service } = await params;
  const ctx = resolvePageContext({ serviceSlug: service, pathname: `/services/${service}` });

  if (!ctx || !ctx.service) {
    notFound();
  }

  return <UniversalPageView context={ctx} />;
}
