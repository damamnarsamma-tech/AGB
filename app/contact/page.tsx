import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, ChevronRight, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import { BRAND, getBranchesByState } from '@/lib/brand';
import { buildCanonicalUrl } from '@/lib/site-url';
import LiveRateCTA from '@/components/LiveRateCTA';
import BranchMap from '@/components/BranchMap';
import { generateSeoTitle } from '@/lib/seo-title-engine';
import BranchDirectory from '@/components/BranchDirectory';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Contact & 59 District Branch Hubs',
    location: 'AP & Telangana'
  }),
  description: `Contact ${BRAND.name} at any of our 59 physical district branch hubs across Andhra Pradesh and Telangana. Immediate gold valuation, German XRF assay, and pledged gold release. Call ${BRAND.phone1Display} or ${BRAND.phone2Display}.`,
  alternates: {
    canonical: buildCanonicalUrl('contact'),
    types: {
      'application/amp+html': `${BRAND.website}/amp/contact`
    }
  },
  openGraph: {
    title: `Contact ${BRAND.name} | 59 Physical District Branch Hubs | AP & Telangana`,
    description: `Contact ${BRAND.name} at any of our 59 physical district branch hubs across Andhra Pradesh and Telangana. Call ${BRAND.phone1Display} or ${BRAND.phone2Display}. Available 7 days a week.`,
    url: buildCanonicalUrl('contact'),
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  }
};

export default function ContactPage() {
  const apBranches = getBranchesByState('andhra-pradesh');
  const tgBranches = getBranchesByState('telangana');

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${buildCanonicalUrl('contact')}#webpage`,
        url: buildCanonicalUrl('contact'),
        name: `Contact ${BRAND.name}`,
        description: `Contact helpline numbers, WhatsApp support, and 59 physical district branch hubs for ${BRAND.name}.`
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${buildCanonicalUrl('contact')}#breadcrumbs`,
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
            name: 'Contact Us',
            item: buildCanonicalUrl('contact')
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <script
        id="contact-ld-json"
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
            <span className="text-amber-700 font-bold">Contact & District Hubs</span>
          </div>
        </nav>

        <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-bold uppercase tracking-wider mb-3">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Direct Customer Helpline & 59 District Hubs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Get in Touch with {BRAND.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Physical branch hubs operating across all 59 district named cities of Andhra Pradesh & Telangana. Available 7 days a week with German XRF laser testing and instant payment.
            </p>
          </div>

          {/* Direct CTA Helpline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Call Primary */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Primary Helpline</h3>
                <p className="text-xs text-slate-500 mt-1">Instant spot rates, appointment booking, and customer desk.</p>
                <div className="text-xl font-bold text-amber-600 mt-3">{BRAND.phone1Display}</div>
              </div>
              <a
                href={`tel:${BRAND.phone1Raw}`}
                className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold uppercase tracking-wider text-xs rounded-xl text-center transition-colors shadow-xs"
              >
                Call Primary Line
              </a>
            </div>

            {/* Alternate Line */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Loan Settlement Desk</h3>
                <p className="text-xs text-slate-500 mt-1">Dedicated pledged gold bank loan takeover coordinator.</p>
                <div className="text-xl font-bold text-slate-900 mt-3">{BRAND.phone2Display}</div>
              </div>
              <a
                href={`tel:${BRAND.phone2Raw}`}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-xl text-center transition-colors border border-slate-200"
              >
                Call Alternate Line
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">WhatsApp Valuation</h3>
                <p className="text-xs text-slate-500 mt-1">Send photos of jewellery or pledge receipts for fast quote.</p>
                <div className="text-sm font-bold text-emerald-700 mt-3 flex flex-col gap-0.5">
                  <div>Primary: {BRAND.phone1Display}</div>
                  <div>Alternate: {BRAND.phone2Display}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <LiveRateCTA
                  variant="primary"
                  className="flex-1 !py-2.5 !px-2 !text-[11px] shadow-xs"
                  label="Primary WA"
                />
                <LiveRateCTA
                  variant="secondary"
                  useAlternateNumber={true}
                  className="flex-1 !py-2.5 !px-2 !text-[11px] shadow-xs"
                  label="Alternate WA"
                />
              </div>
            </div>
          </div>

          {/* Interactive Branch Map */}
          <div className="max-w-6xl mx-auto mb-14">
            <BranchMap />
          </div>

          {/* 59 District Physical Branch Directory */}
          <div className="max-w-6xl mx-auto">
            <BranchDirectory apBranches={apBranches} tgBranches={tgBranches} />
          </div>

          {/* Central Corporate Operations */}
          <div className="mt-14 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Central Corporate Operations</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{BRAND.name}</h3>
              <p className="text-xs text-slate-600">
                {BRAND.headOffice.street}, {BRAND.headOffice.city}, {BRAND.headOffice.state} - {BRAND.headOffice.postalCode}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Operating Hours: {BRAND.operatingHours} (All 7 Days)</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-sm">
              <div className="font-bold text-slate-900 mb-1">Total Network:</div>
              Providing official gold evaluation across all 59 physical district branch hubs with doorstep bank escort coverage across 30,620 localities.
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
