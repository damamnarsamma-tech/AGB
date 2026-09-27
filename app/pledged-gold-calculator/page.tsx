import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Scale, ChevronRight, ShieldAlert, Sparkles, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import PledgedGoldCalculator from '@/components/PledgedGoldCalculator';
import TransparentProcess from '@/components/TransparentProcess';
import { BRAND } from '@/lib/brand';
import { buildCanonicalUrl } from '@/lib/site-url';
import { generateSeoTitle } from '@/lib/seo-title-engine';
import { LENDER_DATABASE } from '@/lib/competitor-data';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Pledged Gold & Loan Settlement Calculator',
    location: 'AP & Telangana'
  }),
  description: `Calculate your net cash surplus after clearing gold loans from Muthoot, Manappuram, IIFL, or banks. Transparent live valuation with 0% melting loss by ${BRAND.name}.`,
  alternates: {
    canonical: buildCanonicalUrl('pledged-gold-calculator'),
    types: {
      'application/amp+html': `${BRAND.website}/amp/pledged-gold-calculator`
    }
  },
  openGraph: {
    title: `Pledged Gold Loan Settlement Calculator | ${BRAND.name}`,
    description: `Calculate your net cash surplus after clearing gold loans from Muthoot, Manappuram, IIFL, or banks. Transparent live valuation with 0% melting loss.`,
    url: buildCanonicalUrl('pledged-gold-calculator'),
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  }
};

export default function PledgedGoldCalculatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FinancialProduct',
        '@id': `${buildCanonicalUrl('pledged-gold-calculator')}#calculator`,
        name: `${BRAND.name} Pledged Gold Loan Settlement Calculator`,
        description: `Financial tool to calculate loan payoff dues, market gold value, and net cash surplus when releasing pledged ornaments from lenders.`,
        provider: {
          '@type': 'Organization',
          name: BRAND.name,
          url: BRAND.website
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${buildCanonicalUrl('pledged-gold-calculator')}#breadcrumbs`,
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
            name: 'Pledged Gold Calculator',
            item: buildCanonicalUrl('pledged-gold-calculator')
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        id="pledged-calc-ld-json"
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
            <Link href="/services/pledged-gold" className="hover:text-slate-900 font-medium">Pledged Gold</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-amber-800 font-bold">Pledged Gold Calculator</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-amber-700" />
              <span>Gold Loan Foreclosure &amp; Cash Surplus Tool</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Pledged Gold Release &amp; Surplus Calculator
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Find out exactly how much cash surplus you receive after clearing your gold loan principal, accrued interest, and penalty charges with Muthoot, Manappuram, IIFL, or commercial banks.
            </p>
          </div>

          {/* Interactive Calculator */}
          <PledgedGoldCalculator locationName="Andhra Pradesh & Telangana" />

          {/* Lender Settlement Guide Matrix */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-amber-600" />
                <span>Major Lenders: Gold Loan Settlement Procedures &amp; Auction Rules</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Factual reference on typical interest ranges, foreclosure procedures, and auction warning triggers across Andhra Pradesh and Telangana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LENDER_DATABASE.map(lender => (
                <div key={lender.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-base">{lender.name}</h3>
                    <span className="text-[10px] bg-slate-200 text-slate-800 font-bold px-2 py-0.5 rounded">
                      {lender.category}
                    </span>
                  </div>
                  <div className="text-xs text-amber-800 font-semibold">
                    Interest Range: {lender.interestRange}
                  </div>
                  <div className="text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Auction Trigger:</span> {lender.auctionTriggerNotice}
                  </div>
                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                    <span className="font-bold text-slate-700">Notice:</span> {lender.customerWarning}
                  </div>
                </div>
              ))}
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
