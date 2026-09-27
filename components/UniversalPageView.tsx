'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  HelpCircle,
  MapPin,
  Clock,
  Coins,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Scale,
  Zap,
  Building2,
  Lock,
  ChevronDown,
  Layers,
  Award,
  Gem,
  RefreshCw,
  FileCheck,
  CreditCard,
  Check,
  Compass,
  Star
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyMobileBar from './StickyMobileBar';
import LiveRateCTA from './LiveRateCTA';
import DistrictBranchHubCard from './DistrictBranchHubCard';
import { generateCanonicalRoute } from '@/lib/route-registry';
import { getTestimonialsForLocation, getTestimonialUrls } from '@/lib/testimonial-utils';

import {
  UniversalPageContext,
  resolveRoute,
  UNIVERSAL_SERVICES,
  MATERIALS,
  JEWELLERY_TYPES,
  TRANSACTION_TYPES,
  ServiceDef
} from '@/lib/universal-engine';
import { CONTACT_CONFIG } from '@/lib/contact-config';
import { BRAND } from '@/lib/brand';

interface UniversalPageViewProps {
  context: UniversalPageContext;
}

export default function UniversalPageView({ context }: UniversalPageViewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const localTestimonials = getTestimonialsForLocation({
    stateSlug: context.location?.stateSlug,
    districtSlug: context.location?.districtSlug,
    mandalSlug: context.location?.mandalSlug,
    limit: 6
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleOpenEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('kgb:open-enquiry'));
    }
  };

  const allServices = Object.values(UNIVERSAL_SERVICES);
  const allMaterials = Object.values(MATERIALS);
  const allJewellery = Object.values(JEWELLERY_TYPES);
  const allTransactions = Object.values(TRANSACTION_TYPES);

  // Group services by category
  const serviceCategories = [
    {
      name: 'Gold Buying & Liquidation',
      description: 'Transparent evaluation and instant settlement for all types of gold ornaments, scrap, and bullion.',
      services: allServices.filter(s => s.categoryGroup === 'Gold Buying')
    },
    {
      name: 'Precious Metals & Gemstones',
      description: 'Accurate valuation and market payout for silver, platinum, and diamond-studded jewellery.',
      services: allServices.filter(s => s.categoryGroup === 'Precious Metals')
    },
    {
      name: 'Gold Loan Solutions',
      description: 'Direct financial assistance to release pledged gold from banks and NBFCs with zero upfront cash.',
      services: allServices.filter(s => s.categoryGroup === 'Gold Loan Solutions')
    },
    {
      name: 'Valuation & Testing',
      description: 'Non-destructive XRF spectrometric laser testing and weight verification with zero obligation.',
      services: allServices.filter(s => s.categoryGroup === 'Valuation & Testing')
    }
  ];

  const locName = context.location?.displayName || 'Andhra Pradesh & Telangana';
  const locPath = context.location?.fullPath || '';

  // 404-Diagnostic View for valid route patterns with unresolved entity content
  if (context.integrityCheck && context.integrityCheck.isDiagnostic404) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
        <Navbar currentLocationName={context.location?.displayName} />

        <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          {/* Diagnostic Alert Box */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-100 rounded-xl text-amber-800">
                <AlertCircle className="w-7 h-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-200/80 text-amber-900 text-xs font-bold font-mono">
                  404-Diagnostic • Integrity Notice
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Route Pattern Valid — Source Content Unresolved
                </h1>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              The requested URL path <code className="bg-amber-100 px-2 py-0.5 rounded text-amber-900 font-mono text-xs">{context.pathname}</code> matches a valid structural route pattern, but the specific requested entity parameter was not found in our verified location or service data dictionaries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border border-amber-200 rounded-xl p-4 text-xs">
              <div>
                <span className="text-slate-500 font-medium block">Diagnostic Code</span>
                <span className="font-bold font-mono text-amber-800">{context.integrityCheck.code}</span>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Discrepancy Details</span>
                <span className="text-slate-800">{context.integrityCheck.reason || 'Requested parameter is missing from source dictionary.'}</span>
              </div>
            </div>
          </div>

          {/* Directory Recovery Options */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-700" />
              Verified Navigation Directories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/services"
                className="group p-4 bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300 rounded-xl transition space-y-2"
              >
                <div className="font-bold text-sm text-slate-900 group-hover:text-amber-900 flex items-center justify-between">
                  <span>Services Catalog</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700" />
                </div>
                <p className="text-xs text-slate-500">Explore all verified precious metals evaluation and loan release services.</p>
              </Link>

              <Link
                href="/metals/gold"
                className="group p-4 bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300 rounded-xl transition space-y-2"
              >
                <div className="font-bold text-sm text-slate-900 group-hover:text-amber-900 flex items-center justify-between">
                  <span>Gold Buying</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700" />
                </div>
                <p className="text-xs text-slate-500">Instant spot market gold valuation and non-destructive XRF testing.</p>
              </Link>

              <Link
                href="/admin/diagnostics"
                className="group p-4 bg-slate-50 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300 rounded-xl transition space-y-2"
              >
                <div className="font-bold text-sm text-slate-900 group-hover:text-amber-900 flex items-center justify-between">
                  <span>SEO Diagnostics</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700" />
                </div>
                <p className="text-xs text-slate-500">View real-time route parity reports and sitemap audit dashboard.</p>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
        <StickyMobileBar />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900" itemScope itemType="https://schema.org/FinancialService">
      {/* JSON-LD Schema Graph Injection */}
      <script
        id="universal-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(context.structuredData) }}
      />

      <Navbar currentLocationName={context.location?.displayName} />

      <main className="flex-1">
        {/* 1. Breadcrumbs */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-medium text-slate-500 overflow-x-auto whitespace-nowrap">
              {context.breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.url + idx}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
                  {idx === context.breadcrumbs.length - 1 ? (
                    <span className="text-amber-800 font-bold">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.url} className="hover:text-amber-700 transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Context Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                {context.location?.locationType === 'village' || context.location?.isVillage ? (
                  <>
                    <Compass className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{context.location.displayName} (Village) • Gram Panchayat / Rural Desk</span>
                  </>
                ) : context.location?.locationType === 'neighbourhood' || context.location?.isNeighbourhood ? (
                  <>
                    <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{context.location.displayName} • Urban Neighbourhood / Locality Desk</span>
                  </>
                ) : context.location?.locationType === 'city' ? (
                  <>
                    <Building2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{context.location.displayName} • City Hub</span>
                  </>
                ) : context.location?.locationType === 'town' ? (
                  <>
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{context.location.displayName} • Town / Mandal Desk</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>
                      {context.location
                        ? `${context.location.displayName} • Verified Valuation Desk`
                        : context.pageArchetype === 'service-hub'
                        ? 'All Services Hub • AP & Telangana'
                        : 'Andhra Pradesh & Telangana'}
                    </span>
                  </>
                )}
              </div>

              {/* Dynamic H1 */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {context.h1}
              </h1>

              {/* Dynamic Subhead */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                {context.metaDescription}
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-8 text-[11px] sm:text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs min-w-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">Non-Destructive XRF</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs min-w-0">
                  <Scale className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="truncate">Calibrated Gram Scales</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1 min-w-0">
                  <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">Direct Bank / Cash Settlement</span>
                </div>
              </div>

              {/* Direct Action CTAs */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <a
                  id="hero-call-primary-btn"
                  href={CONTACT_CONFIG.phone1Tel}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 fill-slate-950 shrink-0" />
                  <span>Call {CONTACT_CONFIG.phone1Display}</span>
                </a>

                <LiveRateCTA
                  variant="primary"
                  className="!w-full sm:!w-auto !rounded-xl"
                  locationName={context.location?.displayName}
                  serviceName={context.service?.name || context.service?.shortTitle}
                  materialName={context.material?.name}
                  jewelleryName={context.jewellery?.name}
                />

                <button
                  id="hero-enquire-btn"
                  onClick={handleOpenEnquiry}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Enquire Online</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. AEO Direct Answer Block */}
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-black text-lg shadow-2xs">
                  Q
                </div>
                <div className="space-y-3 flex-1">
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">
                    {context.directAnswer.question}
                  </h2>
                  <div className="bg-white rounded-xl p-4 border border-amber-200 text-sm font-medium text-slate-800 leading-relaxed shadow-2xs">
                    <p className="font-bold text-amber-900 mb-1">Direct Answer:</p>
                    <p className="direct-answer-summary text-slate-900 font-semibold">{context.directAnswer.directAnswer}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {context.directAnswer.explanation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 Physical Branch Hub Spotlight */}
        {(context.physicalBranchHub || context.nearestBranchHub) && (
          <section className="py-8 bg-gradient-to-b from-amber-50/50 via-white to-slate-50/50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DistrictBranchHubCard
                branch={(context.physicalBranchHub || context.nearestBranchHub)!}
                locationName={locName}
                isCityOrTown={context.location?.locationType === 'city' || context.location?.locationType === 'town'}
              />
            </div>
          </section>
        )}

        {/* 4. Business + Location Introduction */}
        <section className="py-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Precious Metals Desk in {locName}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                About Akshaya Gold Buyers in {locName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Akshaya Gold Buyers provides transparent, certified precious metals evaluation and purchasing services across {locName} and surrounding localities. We employ non-destructive laboratory-grade XRF spectrometry to evaluate fine metal content without damage, testing gold, silver, and platinum in customer presence. Our pricing is benchmarked against live bullion spot markets with zero hidden deductions and direct settlement via bank transfer or cash.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-700">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Serving {locName}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>XRF Laser Purity Analysis</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Pledged Gold Foreclosure Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Main Services Grid: SERVICES AVAILABLE IN [LOCATION] */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Verified Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Services Available in {locName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Explore all verified gold buying, silver valuation, platinum appraisal, and pledged gold release services available with local context in {locName}:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServices.map(srv => {
                const srvUrl = locPath ? `${locPath}/services/${srv.slug}` : `/services/${srv.slug}`;
                const isCurrentService = context.service?.id === srv.id;

                return (
                  <div
                    key={srv.id}
                    className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                      isCurrentService
                        ? 'bg-amber-50/50 border-amber-400 ring-1 ring-amber-400/50 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-xs'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                          {srv.categoryGroup}
                        </span>
                        <span className="text-slate-400 uppercase font-medium">{srv.intent}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900">
                        <Link href={srvUrl} className="hover:text-amber-700 transition-colors">
                          {srv.shortTitle} in {locName}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {srv.tagline}
                      </p>

                      <div className="pt-1">
                        <ul className="space-y-1 text-xs text-slate-600">
                          {srv.whatIsHandled.slice(0, 2).map((item, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={srvUrl}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                      >
                        <span>View {srv.shortTitle} Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Service Categories & Transactions */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Structured Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Service Categories &amp; Intent Portfolios in {locName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategories.map((cat, cIdx) => (
                <div key={cIdx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-black text-slate-900">{cat.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
                  </div>

                  <div className="space-y-2">
                    {cat.services.map(srv => {
                      const sUrl = locPath ? `${locPath}/services/${srv.slug}` : `/services/${srv.slug}`;
                      return (
                        <Link
                          key={srv.id}
                          href={sUrl}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50/80 border border-slate-200 hover:border-amber-300 transition-all text-xs font-semibold text-slate-800 hover:text-amber-900 group"
                        >
                          <span className="truncate">{srv.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Relevant Metals / Materials in [LOCATION] */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Precious Materials
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Precious Metals Assayed in {locName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                We accept and evaluate all standard precious metals with laboratory-grade non-destructive assaying:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {allMaterials.map(mat => {
                const matUrl = locPath ? `${locPath}/metals/${mat.slug}` : `/metals/${mat.slug}`;
                const isCurrentMat = context.material?.id === mat.id;

                return (
                  <div
                    key={mat.id}
                    className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                      isCurrentMat
                        ? 'bg-amber-50/60 border-amber-400 ring-1 ring-amber-400/50 shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:border-amber-400 hover:shadow-xs'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase text-amber-800">
                        <span>{mat.name}</span>
                        <span className="text-slate-400 font-normal">{mat.category}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900">
                        <Link href={matUrl} className="hover:text-amber-700 transition-colors">
                          {mat.name} Buyers in {locName}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {mat.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                          Purity Grades Handled:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {mat.purityGrades.map((g, gi) => (
                            <span key={gi} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-700">
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href={matUrl}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                      >
                        <span>{mat.name} in {locName}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Relevant Jewellery / Items in [LOCATION] */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Accepted Item Types
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Jewellery &amp; Ornaments Evaluated in {locName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                We evaluate all forms of jewellery regardless of condition, age, or wear:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {allJewellery.map(j => {
                const jUrl = locPath ? `${locPath}/jewellery/${j.slug}` : `/jewellery/${j.slug}`;
                const isCurrentJ = context.jewellery?.id === j.id;

                return (
                  <Link
                    key={j.id}
                    href={jUrl}
                    className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between group ${
                      isCurrentJ
                        ? 'bg-amber-100 border-amber-400 shadow-2xs text-amber-950 font-bold'
                        : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-2xs text-slate-800'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block group-hover:text-amber-800 transition-colors">
                        {j.name}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5 line-clamp-1">
                        {j.category}
                      </span>
                    </div>
                    <div className="mt-3 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-amber-700">
                      <span>Valuate</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. Transaction Services */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Transaction Pathways
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Transaction &amp; Liquidation Modes in {locName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allTransactions.map(tx => (
                <div key={tx.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    {tx.name}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tx.description}
                  </p>
                  <span className="text-[10px] text-slate-400 font-medium block">
                    Mode: {tx.actionType}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Step-by-Step Procedure */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Transparent Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                How Our Services Work in {locName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our 5-stage evaluation process ensures complete fairness and customer visibility at every step:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  step: '01',
                  title: 'KYC Verification',
                  desc: 'Present valid government photo ID (Aadhaar/PAN/Voter ID) and complete registration.'
                },
                {
                  step: '02',
                  title: 'Surface Cleaning',
                  desc: 'Gentle ultrasonic cleaning to remove dirt and wax without any metal loss or scratching.'
                },
                {
                  step: '03',
                  title: 'XRF Laser Assay',
                  desc: 'Non-destructive laser spectrometry analysis determines exact karat purity in your presence.'
                },
                {
                  step: '04',
                  title: 'Precision Weighing',
                  desc: 'Gross and net weight measured on calibrated digital scales accurate to 0.001g.'
                },
                {
                  step: '05',
                  title: 'Instant Settlement',
                  desc: 'Receive immediate payout via IMPS/RTGS bank transfer or cash based on live spot benchmark rates.'
                }
              ].map((st, sIdx) => (
                <div key={sIdx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
                  <span className="text-xs font-black text-amber-600 block">
                    STEP {st.step}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Local Service Area & Documentation Requirements */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Service Area Distinction */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Local Service Area Coverage</span>
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  Physical Valuation Desk vs. Service Area in {locName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Akshaya Gold Buyers provides valuation desk appointments as well as doorstep appraisal coverage across {locName} and surrounding towns. While our central offices and valuation counters host advanced laser testing equipment, our certified evaluation teams can also visit residential locations for senior citizens or high-value pledged gold releases.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="font-semibold text-slate-800">Operating Schedule:</p>
                  <p>{CONTACT_CONFIG.operatingHours} • Monday to Sunday</p>
                </div>
              </div>

              {/* Documentation Requirements */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <FileCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Mandatory KYC Requirements</span>
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  Documents Required to Transact in {locName}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Valid Photo ID (Aadhaar / PAN)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Bank Account Details (Passbook/UPI)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Original Invoice (If Available)</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pledge Receipt (For Loan Release)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Relevant Localities / Mandals Grid */}
        {((context.location?.childDistricts && context.location.childDistricts.length > 0) ||
          (context.location?.childMandals && context.location.childMandals.length > 0) ||
          (context.location?.childNeighbourhoods && context.location.childNeighbourhoods.length > 0) ||
          (context.location?.childVillages && context.location.childVillages.length > 0) ||
          (context.location?.childLocalities && context.location.childLocalities.length > 0)) && (
          <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              {/* 12A. If State Page: Districts Coverage */}
              {context.location?.childDistricts && context.location.childDistricts.length > 0 && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                      Districts Coverage
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      Districts in {context.location.displayName}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                    {context.location.childDistricts.map(d => (
                      <Link
                        key={d.url}
                        href={generateCanonicalRoute({ location: d.url, service: context.service })}
                        className="p-3 rounded-xl bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-xs font-medium text-slate-800 hover:text-amber-900 transition-all flex items-center justify-between group shadow-2xs"
                      >
                        <span className="truncate">{d.name}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-amber-700 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 12B. Urban Neighbourhoods & Colonies (Strictly Urban Centres / Colonies - Never Merged!) */}
              {context.location?.childNeighbourhoods && context.location.childNeighbourhoods.length > 0 && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-[11px] font-bold uppercase tracking-wider mb-1">
                        <Building2 className="w-3 h-3 text-blue-600" />
                        <span>Urban Neighbourhoods &amp; Colonies</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                        {context.location?.level === 'district'
                          ? `${context.location.displayName} City Neighbourhoods & Commercial Hubs`
                          : context.location?.isVillage
                          ? `Town Neighbourhoods & Commercial Hubs in ${context.location.mandalName}`
                          : context.location?.isNeighbourhood
                          ? `Other Neighbourhoods & Colonies in ${context.location.mandalName || context.location.displayName}`
                          : `City & Town Neighbourhoods in ${context.location?.displayName}`}
                      </h2>
                    </div>
                    <span className="text-xs text-blue-700 bg-blue-100/60 px-2.5 py-1 rounded-full font-semibold self-start sm:self-end">
                      {context.location.childNeighbourhoods.length} Urban Areas
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                    {context.location.childNeighbourhoods.map(l => (
                      <Link
                        key={l.url}
                        href={generateCanonicalRoute({ location: l.url, service: context.service })}
                        className="p-3 rounded-xl bg-white hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 text-xs font-medium text-slate-800 hover:text-blue-950 transition-all flex items-center justify-between group shadow-2xs"
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <Building2 className="w-3.5 h-3.5 text-blue-500 shrink-0 group-hover:text-blue-700" />
                          <span className="truncate">{l.name}</span>
                        </div>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-700 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 12C. Rural Revenue Villages & Gram Panchayats (Strictly Rural Villages - Never Merged!) */}
              {context.location?.childVillages && context.location.childVillages.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-bold uppercase tracking-wider mb-1">
                        <Compass className="w-3 h-3 text-emerald-600" />
                        <span>Rural Revenue Villages &amp; Gram Panchayats</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                        {context.location?.isVillage
                          ? `Surrounding Villages & Gram Panchayats in ${context.location.mandalName} Mandal`
                          : context.location?.isNeighbourhood
                          ? `Surrounding Rural Villages in ${context.location.mandalName} Mandal`
                          : `Villages & Gram Panchayats in ${context.location?.displayName} Mandal`}
                      </h2>
                    </div>
                    <span className="text-xs text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-full font-semibold self-start sm:self-end">
                      {context.location.childVillages.length} Revenue Villages
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                    {context.location.childVillages.map(v => (
                      <Link
                        key={v.url}
                        href={generateCanonicalRoute({ location: v.url, service: context.service })}
                        className="p-3 rounded-xl bg-white hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-300 text-xs font-medium text-slate-800 hover:text-emerald-950 transition-all flex items-center justify-between group shadow-2xs"
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 group-hover:text-emerald-700" />
                          <span className="truncate">{v.name}</span>
                        </div>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-700 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 12D. Fallback Localities (only if neither childNeighbourhoods nor childVillages is defined) */}
              {!context.location?.childNeighbourhoods?.length && !context.location?.childVillages?.length && context.location?.childLocalities && context.location.childLocalities.length > 0 && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                        Localities &amp; Areas
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                        Localities in {context.location?.displayName}
                      </h2>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      {context.location.childLocalities.length} Verified Areas
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                    {context.location.childLocalities.map(l => (
                      <Link
                        key={l.url}
                        href={generateCanonicalRoute({ location: l.url, service: context.service })}
                        className="p-3 rounded-xl bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-xs font-medium text-slate-800 hover:text-amber-900 transition-all flex items-center justify-between group shadow-2xs"
                      >
                        <span className="truncate">{l.name}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-amber-700 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 12E. Mandals & Regional Subdivisions (if available) */}
              {context.location?.childMandals && context.location.childMandals.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200/80">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                        Regional Subdivisions
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                        Towns &amp; Mandals in {context.location.displayName}
                      </h2>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      {context.location.childMandals.length} Mandals &amp; Towns
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                    {context.location.childMandals.map(m => (
                      <Link
                        key={m.url}
                        href={generateCanonicalRoute({ location: m.url, service: context.service })}
                        className="p-3 rounded-xl bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-xs font-medium text-slate-800 hover:text-amber-900 transition-all flex items-center justify-between group shadow-2xs"
                      >
                        <span className="truncate">{m.name}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-amber-700 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 13. Verified Customer Reviews & Success Stories (GSC Location Linked) */}
        <section className="py-12 bg-slate-100/70 border-b border-slate-200" id="location-reviews">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                  <span>Verified Customer Reviews • {locName}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Customer Payout Stories &amp; Reviews in {locName}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Real transactions, pledged gold releases, and 0% melting loss evaluations completed for customers in {locName} and across {context.location?.stateSlug === 'telangana' ? 'Telangana' : 'Andhra Pradesh'}.
                </p>
              </div>

              <Link
                href="/#stories"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all shrink-0 shadow-xs"
              >
                <span>View All 525+ Verified Stories</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localTestimonials.map(t => {
                const urls = getTestimonialUrls(t);
                return (
                  <div
                    key={t.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={urls.locationServiceUrl}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-950 text-[11px] font-bold hover:bg-amber-100 transition-colors"
                          title={`View ${t.categoryLabel} services in ${t.location}`}
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                          <span>{t.categoryLabel}</span>
                        </Link>

                        <div className="flex items-center gap-0.5 text-amber-500">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        &ldquo;{t.title}&rdquo;
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                        {t.story}
                      </p>

                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="text-[11px] text-slate-500 font-medium">Evaluated:</span>
                          <span className="font-semibold text-slate-900">{t.transactionDetails.itemType}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="text-[11px] text-slate-500 font-medium">Payout Advantage:</span>
                          <span className="font-bold text-emerald-700">{t.transactionDetails.benefitHighlight}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs gap-2">
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 flex items-center gap-1">
                          <span>{t.author}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </div>
                        <Link
                          href={urls.locationUrl}
                          className="text-[11px] text-amber-800 hover:text-amber-950 font-semibold flex items-center gap-1 mt-0.5 truncate hover:underline"
                        >
                          <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                          <span className="truncate">{t.location}</span>
                        </Link>
                      </div>

                      <Link
                        href={urls.locationUrl}
                        className="text-[11px] font-bold text-amber-800 hover:text-amber-950 bg-amber-50 px-2 py-1 rounded-md border border-amber-200 shrink-0 flex items-center gap-0.5"
                      >
                        <span>{t.district.replace(/-/g, ' ')}</span>
                        <ChevronRight className="w-3 h-3 text-amber-700" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 13. Dynamic AEO / GEO FAQ Accordion */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Common Questions in {locName}
              </h2>
            </div>

            <div className="space-y-3">
              {context.faqSet.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaqIndex === idx}
                    aria-controls={`aeo-faq-answer-${idx}`}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                        openFaqIndex === idx ? 'rotate-180 text-amber-700' : ''
                      }`}
                    />
                  </button>

                  {openFaqIndex === idx && (
                    <div id={`aeo-faq-answer-${idx}`} className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Geographic Cross-Linking (Zero Leakage) */}
        {context.relatedLocations.length > 0 && (
          <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {context.service
                      ? `${context.service.shortTitle} Coverage Across Key Districts`
                      : 'Key Coverage Areas & Districts'}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Valuation desks and doorstep service appointments available across Andhra Pradesh &amp; Telangana
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                {context.relatedLocations.map(loc => {
                  const targetUrl = generateCanonicalRoute({
                    location: loc.url,
                    service: context.service
                  });

                  return (
                    <Link
                      key={loc.url}
                      href={targetUrl}
                      className="p-3 rounded-xl bg-white hover:bg-amber-50/80 border border-slate-200 hover:border-amber-300 text-xs font-medium text-slate-800 hover:text-amber-900 transition-all flex items-center justify-between group shadow-2xs"
                    >
                      <span className="truncate">{loc.name}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 15. Final Conversion CTA Banner */}
        <section className="py-14 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Transparent Precious Metals Valuation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              {context.ctaHeadline}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              {context.ctaSubheadline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={CONTACT_CONFIG.phone1Tel}
                className="py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call {CONTACT_CONFIG.phone1Display}</span>
              </a>

              <LiveRateCTA
                variant="primary"
                className="!rounded-xl flex items-center gap-2 shadow-md"
                locationName={context.location?.displayName}
                serviceName={context.service?.name || context.service?.shortTitle}
                materialName={context.material?.name}
                jewelleryName={context.jewellery?.name}
              />

              <button
                onClick={handleOpenEnquiry}
                className="py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors border border-slate-700 cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Enquire Online</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar locationName={context.location?.displayName} />
    </div>
  );
}
