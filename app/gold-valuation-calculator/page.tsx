import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Scale, ChevronRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import LiveGoldCalculator from '@/components/LiveGoldCalculator';
import TransparentProcess from '@/components/TransparentProcess';
import { BRAND } from '@/lib/brand';
import { PURITY_STANDARDS } from '@/lib/gold-rates';
import { buildCanonicalUrl } from '@/lib/site-url';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Gold Valuation & Purity Calculator'
  }),
  description: `Calculate your exact gold jewellery and coin fine metal content. Get live market benchmark valuations for 24K, 22K 916 Hallmark, 18K gold and 999 silver with 0% melting loss.`,
  alternates: {
    canonical: buildCanonicalUrl('gold-valuation-calculator'),
    types: {
      'application/amp+html': `${BRAND.website}/amp/gold-valuation-calculator`
    }
  },
  openGraph: {
    title: `Gold Valuation & Purity Calculator | ${BRAND.name}`,
    description: `Calculate your exact gold jewellery and coin fine metal content. Get live market benchmark valuations for 24K, 22K 916 Hallmark, 18K gold and 999 silver with 0% melting loss.`,
    url: buildCanonicalUrl('gold-valuation-calculator'),
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  }
};

export default function GoldValuationCalculatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${buildCanonicalUrl('gold-valuation-calculator')}#webpage`,
        url: buildCanonicalUrl('gold-valuation-calculator'),
        name: `Gold Valuation & Purity Calculator | ${BRAND.name}`,
        description: `Calculate your exact gold jewellery and coin fine metal content. Get live market benchmark valuations.`
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${buildCanonicalUrl('gold-valuation-calculator')}#breadcrumbs`,
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
            name: 'Gold Valuation Calculator',
            item: buildCanonicalUrl('gold-valuation-calculator')
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        id="calculator-ld-json"
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
            <span className="text-amber-800 font-bold">Gold Valuation Calculator</span>
          </div>
        </nav>

        <section className="pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-bold uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5 text-amber-700" />
              <span>Purity &amp; Fine Weight Estimator</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Live Gold &amp; Silver Fine Content Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Select your karat purity and enter gross weight in grams to calculate fine metal content and request an immediate live market valuation.
            </p>
          </div>

          <LiveGoldCalculator locationName="Andhra Pradesh & Telangana" />

          {/* Karat Fineness Reference Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>Standard Indian Karat Fineness Matrix</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-500 uppercase text-[11px] font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Metal / Karat</th>
                    <th className="p-3">Purity %</th>
                    <th className="p-3">Fineness (Parts per 1000)</th>
                    <th className="p-3">Testing Method</th>
                    <th className="p-3">Typical Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {Object.values(PURITY_STANDARDS).map((std, idx) => (
                    <tr key={idx} className={std.popular ? 'bg-amber-50/40 font-semibold' : ''}>
                      <td className="p-3 font-bold text-slate-900">{std.name}</td>
                      <td className="p-3 font-bold text-amber-800">{std.purityPercent}%</td>
                      <td className="p-3 font-bold text-slate-800">{std.fineness}</td>
                      <td className="p-3 text-slate-600">German XRF Laser (0% Melt Loss)</td>
                      <td className="p-3 text-slate-500">{std.typicalUsage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <TransparentProcess />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
