import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Scale, Award, Users, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import TransparentProcess from '@/components/TransparentProcess';
import { BRAND } from '@/lib/brand';
import { buildCanonicalUrl } from '@/lib/site-url';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Certified Gold Buyers',
    location: 'AP & Telangana'
  }),
  description: `Learn about ${BRAND.name}, our certified German XRF laser testing methodology, transparent pricing, and extensive valuation network across Andhra Pradesh & Telangana.`,
  alternates: {
    canonical: buildCanonicalUrl('about'),
    types: {
      'application/amp+html': `${BRAND.website}/amp/about`
    }
  },
  openGraph: {
    title: `About ${BRAND.name} | Certified Gold Buyers in AP & Telangana`,
    description: `Learn about ${BRAND.name}, our certified German XRF laser testing methodology, transparent pricing, and extensive valuation network across Andhra Pradesh & Telangana.`,
    url: buildCanonicalUrl('about'),
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  }
};

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${buildCanonicalUrl('about')}#webpage`,
        url: buildCanonicalUrl('about'),
        name: `About ${BRAND.name} | Certified Gold Buyers`,
        description: BRAND.shortDescription
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${buildCanonicalUrl('about')}#breadcrumbs`,
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
            name: 'About Us',
            item: buildCanonicalUrl('about')
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        id="about-ld-json"
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
            <span className="text-amber-700 font-bold">About Us</span>
          </div>
        </nav>

        <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>About {BRAND.name}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Revolutionizing Gold Selling with Scientific Transparency
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {BRAND.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Zero Melting Loss</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We never melt ornaments with acid or open flames. Our German XRF laser spectrometers analyze elemental purity non-destructively in 30 seconds.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Class II Digital Scales</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Certified electronic balances accurate to 0.001 grams with customer-facing digital displays. Zero stone weight is accurately calculated.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">150,000+ Happy Sellers</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Trusted by families across 59 districts of Andhra Pradesh &amp; Telangana for transparent gold selling, coin liquidation, and pledged loan closure.
              </p>
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
