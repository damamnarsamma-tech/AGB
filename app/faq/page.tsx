import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { HelpCircle, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import LocationFAQAccordion from '@/components/LocationFAQAccordion';
import { BRAND } from '@/lib/brand';
import { ALL_FAQS } from '@/lib/services';
import { buildCanonicalUrl, SITE_URL } from '@/lib/site-url';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Gold Selling FAQs & Purity Guide'
  }),
  description: `Find authoritative answers to common questions about selling gold, XRF purity testing, documents required, live MCX pricing, and releasing pledged gold loans.`,
  alternates: {
    canonical: buildCanonicalUrl('faq'),
    types: {
      'application/amp+html': `${SITE_URL}/amp/faq`
    }
  },
  openGraph: {
    title: `Gold Selling FAQs & Purity Guide | ${BRAND.name}`,
    description: `Find authoritative answers to common questions about selling gold, XRF purity testing, documents required, live MCX pricing, and releasing pledged gold loans.`,
    url: buildCanonicalUrl('faq'),
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `Gold Selling FAQs & Purity Guide | ${BRAND.name}`,
    description: `Find authoritative answers to common questions about selling gold, XRF purity testing, documents required, live MCX pricing, and releasing pledged gold loans.`
  }
};

export default function FAQPage() {
  const faqPageUrl = buildCanonicalUrl('faq');

  // Dedicated Google-compliant FAQPage JSON-LD Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${faqPageUrl}#faqpage`,
    name: 'Gold Selling, Valuation & Pledged Gold Release FAQs - Akshaya Gold Buyers',
    description: 'Frequently asked questions regarding selling gold, silver, diamonds, German XRF spectrometry testing, live MCX spot rates, KYC documents needed, and bank pledged gold loan release.',
    url: faqPageUrl,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      name: BRAND.name,
      url: SITE_URL
    },
    mainEntity: ALL_FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  // Structured BreadcrumbList schema for enhanced SERP navigation
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${faqPageUrl}#breadcrumb`,
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
        name: 'FAQs',
        item: faqPageUrl
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        id="faq-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c')
        }}
      />
      {/* BreadcrumbList Schema */}
      <script
        id="breadcrumb-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c')
        }}
      />

      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 text-xs">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-slate-600">
            <Link href="/" className="hover:text-slate-900 font-medium">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-amber-700 font-bold">FAQs</span>
          </div>
        </nav>

        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Comprehensive Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Gold Selling &amp; Valuation FAQs
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Everything you need to know about our scientific valuation, rates, documents, and pledged gold release.
            </p>
          </div>

          <LocationFAQAccordion locationName="Andhra Pradesh & Telangana" faqs={ALL_FAQS} />
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
