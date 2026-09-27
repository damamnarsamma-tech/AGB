import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Sparkles, Scale, Phone, MessageCircle, ChevronRight, TrendingUp, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import LiveGoldCalculator from '@/components/LiveGoldCalculator';
import TransparentProcess from '@/components/TransparentProcess';
import { BRAND } from '@/lib/brand';
import LiveRateCTA from '@/components/LiveRateCTA';

import { PURITY_STANDARDS } from '@/lib/gold-rates';
import { buildCanonicalUrl } from '@/lib/site-url';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Gold Purity & Karat Standards Guide'
  }),
  description: `Understand Indian gold purity standards (24K, 22K 916 Hallmark, 18K, 14K) and fine metal content calculation. Sell gold with 100% German XRF laser testing and instant payout.`,
  alternates: {
    canonical: buildCanonicalUrl('gold-rate'),
    types: {
      'application/amp+html': `${BRAND.website}/amp/gold-rate`
    }
  },
  openGraph: {
    title: `Gold Purity & Karat Standards Guide | ${BRAND.name}`,
    description: `Understand Indian gold purity standards (24K, 22K 916 Hallmark, 18K, 14K) and fine metal content calculation. Sell gold with 100% German XRF laser testing and instant payout.`,
    url: buildCanonicalUrl('gold-rate'),
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  }
};

export default function GoldRatePage() {
  const standardsList = Object.values(PURITY_STANDARDS);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${buildCanonicalUrl('gold-rate')}#webpage`,
        url: buildCanonicalUrl('gold-rate'),
        name: `Gold Purity & Karat Standards Guide | ${BRAND.name}`,
        description: `Understand Indian gold purity standards (24K, 22K 916 Hallmark, 18K, 14K) and fine metal content calculation.`
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${buildCanonicalUrl('gold-rate')}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: buildCanonicalUrl('')
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Gold Purity & Rates Guide',
            item: buildCanonicalUrl('gold-rate')
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        id="gold-rate-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 text-xs">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-slate-600">
            <Link href="/" className="hover:text-slate-900 font-medium">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-amber-800 font-bold">Gold Purity &amp; Rates Guide</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
              <span>Live Bullion &amp; MCX Linked Valuation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Gold Purity &amp; Live Valuation Guide
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Get spot payouts based strictly on live market bullion rates with zero hidden deductions, 0% melt loss, and non-destructive German XRF laser testing.
            </p>
          </div>

          {/* Karat Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardsList.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  item.popular
                    ? 'bg-amber-50/70 border-amber-400 shadow-md ring-1 ring-amber-400/30'
                    : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-slate-900">{item.name}</span>
                  {item.popular && (
                    <span className="text-[10px] bg-amber-500 text-slate-950 font-bold uppercase px-2 py-0.5 rounded">
                      Most Traded
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-500 mb-4">{item.description}</div>

                <div className="space-y-2 py-3 border-t border-slate-200 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Fine Content:</span>
                    <span className="text-sm font-bold text-amber-800">{item.purityPercent}% Pure</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Fineness Scale:</span>
                    <span className="font-bold text-slate-900">{item.fineness} / 1000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Typical Usage:</span>
                    <span className="font-medium text-slate-700 truncate max-w-[180px]">{item.typicalUsage}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex gap-2">
                  <LiveRateCTA
                    variant="primary"
                    className="flex-1 !py-2 !px-3 !text-xs shadow-xs"
                    materialName="Gold"
                    jewelleryName={item.name}
                  />
                  <a
                    href={`tel:${BRAND.phone1Raw}`}
                    className="py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold uppercase tracking-wider text-xs rounded-xl text-center transition-colors shadow-xs"
                  >
                    Call Desk
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator Embed */}
          <div className="pt-8">
            <LiveGoldCalculator locationName="Andhra Pradesh & Telangana" />
          </div>
        </section>

        <TransparentProcess />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
