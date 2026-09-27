import React from 'react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Sparkles,
  Scale,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Building2,
  Coins,
  LockKeyhole,
  Users,
  HelpCircle,
  Gem,
  CircleDot
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import LiveGoldCalculator from '@/components/LiveGoldCalculator';
import LiveRateCTA from '@/components/LiveRateCTA';

import TransparentProcess from '@/components/TransparentProcess';
import PledgedGoldReleaseCard from '@/components/PledgedGoldReleaseCard';
import ServicesGrid from '@/components/ServicesGrid';
import AEODirectAnswer from '@/components/AEODirectAnswer';
import LocationFAQAccordion from '@/components/LocationFAQAccordion';
import CategorizedFAQAccordion from '@/components/CategorizedFAQAccordion';
import CustomerSuccessStories from '@/components/CustomerSuccessStories';
import BranchMap from '@/components/BranchMap';
import GPSHeroBanner from '@/components/GPSHeroBanner';
import GPSAutoLocationDetector from '@/components/GPSAutoLocationDetector';
import TrustIndicators from '@/components/TrustIndicators';
import ErrorBoundary from '@/components/ErrorBoundary';
import { TESTIMONIALS_DATA } from '@/lib/testimonials';
import { BRAND } from '@/lib/brand';
import { getAllStates } from '@/lib/location-service';
import { PRECIOUS_METALS } from '@/lib/services';
import { PURITY_STANDARDS } from '@/lib/gold-rates';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const metadata: Metadata = {
  title: generateSeoTitle({
    searchIntent: 'Gold Buyers',
    location: 'Andhra Pradesh & Telangana'
  }),
  description: `${BRAND.name} provides transparent gold buying across Andhra Pradesh & Telangana. Valuation with non-destructive XRF laser testing, spot payout via IMPS/Cash, and pledged gold release. Call ${BRAND.phone1Display}.`,
  alternates: {
    canonical: BRAND.website,
    types: {
      'application/amp+html': `${BRAND.website}/amp`
    }
  },
  openGraph: {
    title: `${BRAND.name} | Gold Buyers in AP & Telangana`,
    description: `Sell old gold jewellery, coins, bars, and release pledged gold with transparent XRF testing and direct payment.`,
    url: BRAND.website,
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  }
};

export default function HomePage() {
  const states = getAllStates();
  const apState = states.find(s => s.slug === 'andhra-pradesh');
  const tgState = states.find(s => s.slug === 'telangana');

  const categorizedFaqs = {
    general: {
      categoryName: 'General Cash for Gold & Purity Valuation FAQs',
      items: [
        {
          q: 'Why should I sell gold to Akshaya Gold Buyers instead of traditional pawnbrokers?',
          a: 'Akshaya Gold Buyers uses laboratory-grade German XRF laser spectrometry to test exact gold purity in front of you without acid damage or melting. We weigh your items on Class II certified digital scales (accurate to 0.001g) and pay live bullion spot benchmark rates with direct bank transfer or cash.',
          category: 'General Cash for Gold & Valuation'
        },
        {
          q: 'How does Akshaya Gold Buyers determine gold valuation?',
          a: 'Valuation is calculated directly from your certified pure metal content and real-time bullion market spot prices. We test purity using laser spectrometry with zero acid or melting loss.',
          category: 'General Cash for Gold & Valuation'
        },
        {
          q: 'How does the non-destructive German XRF testing work?',
          a: 'Our certified German XRF spectrometer shoots safe X-ray lasers to measure exact elemental composition (gold, silver, copper, zinc) with 99.9% precision in 30 seconds without melting, cutting, or acid damage.',
          category: 'General Cash for Gold & Valuation'
        },
        {
          q: 'Can I sell broken gold chains, damaged ornaments, or scrap gold?',
          a: 'Yes, absolutely. We evaluate broken jewellery, single earrings, bent bangles, melted gold, and dental scrap based purely on their verified pure metal content without applying any damage penalties.',
          category: 'General Cash for Gold & Valuation'
        },
        {
          q: 'What documents are required to sell gold in Andhra Pradesh and Telangana?',
          a: 'As per statutory KYC and PMLA guidelines, you only need one Government-issued photo identity proof (Aadhaar Card, PAN Card, Voter ID, or Passport) and your bank account details for instant electronic payment.',
          category: 'General Cash for Gold & Valuation'
        }
      ]
    },
    pledgedGold: {
      categoryName: 'Pledged Gold & Loan Release FAQs',
      items: [
        {
          q: 'How does Akshaya Gold Buyers help release pledged gold from banks and Muthoot/Manappuram?',
          a: 'If you have pledged gold with high compounding interest or are facing auction risk, we calculate the current market value of your gold, accompany you to the lender, pay off the outstanding loan balance directly, safely retrieve your gold, and pay you the remaining cash surplus immediately on the spot.',
          category: 'Pledged Gold Release Solutions'
        },
        {
          q: 'What are the charges or interest rates for releasing pledged gold?',
          a: 'There are no hidden fees. We pay the exact outstanding loan principal and interest directly to your financier/bank. The only deduction is the actual loan amount paid; we then evaluate the ornaments and hand over the complete remaining balance in cash or instant bank transfer.',
          category: 'Pledged Gold Release Solutions'
        },
        {
          q: 'Can I release pledged gold from Muthoot, Manappuram, or banks?',
          a: 'Yes, our representative accompanies you to your bank or financier branch, clears the full pending loan dues directly, collects your jewellery safely with you, and transfers the remaining surplus amount to you immediately.',
          category: 'Pledged Gold Release Solutions'
        }
      ]
    },
    andhraPradesh: {
      categoryName: 'Andhra Pradesh Regional FAQ Additions (Kurnool & Nandyal Hubs)',
      items: [
        {
          q: 'Where are your physical branches in Kurnool and Nandyal?',
          a: 'In Kurnool, our physical branch is located on Park Road near Raj Vihar Circle. In Nandyal, our branch is located on Sanjeeva Nagar Main Road near Gandhi Chowk. Both branches feature on-site German XRF laser spectrometers, Class II digital scales, and private customer cabins.',
          category: 'Andhra Pradesh Branch & Regional Coverage'
        },
        {
          q: 'Do you offer doorstep gold valuation or bank release services across Rayalaseema and Coastal AP?',
          a: 'Yes, we provide dedicated doorstep assistance for releasing pledged gold from banks or NBFCs in Kurnool, Nandyal, Visakhapatnam, Vijayawada, Guntur, Tirupati, and Nellore. Our local agent coordinates with you directly at your bank branch.',
          category: 'Andhra Pradesh Branch & Regional Coverage'
        }
      ]
    },
    telangana: {
      categoryName: 'Telangana Regional FAQ Additions (Hyderabad Hub)',
      items: [
        {
          q: 'Where is your Hyderabad flagship branch located?',
          a: 'Our primary Telangana flagship branch is centrally located in Somajiguda/Punjagutta along the Metro Corridor, easily accessible from Kukatpally, Secunderabad, Ameerpet, Dilsukhnagar, Madhapur, and Gachibowli.',
          category: 'Telangana Branch & Regional Coverage'
        },
        {
          q: 'How can I access your gold loan release services in Hyderabad or Secunderabad?',
          a: 'You can visit our main corporate office in Somajiguda, Hyderabad, or request a localized advisor to meet you at your designated bank branch in Hyderabad or Secunderabad to release pledged ornaments instantly.',
          category: 'Telangana Branch & Regional Coverage'
        }
      ]
    }
  };

  const allHomepageFaqs = [
    ...categorizedFaqs.general.items,
    ...categorizedFaqs.pledgedGold.items,
    ...categorizedFaqs.andhraPradesh.items,
    ...categorizedFaqs.telangana.items
  ];

  // Helper to convert human-readable testimonial dates (e.g. "January 2026") into ISO-8601 compliant dates (e.g. "2026-01-15")
  const parseDateToIso = (dateStr: string): string => {
    try {
      const parts = dateStr.split(' ');
      if (parts.length === 2) {
        const month = parts[0];
        const year = parts[1];
        const monthMap: Record<string, string> = {
          'January': '01', 'February': '02', 'March': '03', 'April': '04',
          'May': '05', 'June': '06', 'July': '07', 'August': '08',
          'September': '09', 'October': '10', 'November': '11', 'December': '12'
        };
        const monthNum = monthMap[month] || '01';
        return `${year}-${monthNum}-15`;
      }
    } catch (e) {
      // safe fallback
    }
    return '2026-02-15';
  };

  // Schema for Home
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BRAND.website}#organization`,
        name: BRAND.name,
        legalName: BRAND.legalName,
        url: BRAND.website,
        logo: `${BRAND.website}/icon.png`,
        telephone: [BRAND.phone1, BRAND.phone2],
        email: BRAND.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BRAND.headOffice.street,
          addressLocality: BRAND.headOffice.city,
          addressRegion: BRAND.headOffice.state,
          postalCode: BRAND.headOffice.postalCode,
          addressCountry: BRAND.headOffice.country
        },
        sameAs: [
          'https://www.facebook.com/akshayagoldbuyers',
          'https://www.instagram.com/akshayagoldbuyers'
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: String(14000 + TESTIMONIALS_DATA.length),
          bestRating: '5',
          worstRating: '1'
        },
        review: TESTIMONIALS_DATA.map(t => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: t.author
          },
          datePublished: parseDateToIso(t.date),
          reviewBody: t.story,
          name: t.title,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: String(t.rating),
            bestRating: '5',
            worstRating: '1'
          }
        }))
      },
      {
        '@type': 'FinancialService',
        '@id': `${BRAND.website}#localbusiness`,
        name: BRAND.name,
        image: `${BRAND.website}/icon.png`,
        telephone: BRAND.phone1,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: BRAND.headOffice.street,
          addressLocality: BRAND.headOffice.city,
          addressRegion: BRAND.headOffice.state,
          postalCode: BRAND.headOffice.postalCode,
          addressCountry: BRAND.headOffice.country
        },
        url: BRAND.website,
        parentOrganization: { '@id': `${BRAND.website}#organization` },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: String(14000 + TESTIMONIALS_DATA.length),
          bestRating: '5',
          worstRating: '1'
        },
        review: TESTIMONIALS_DATA.map(t => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: t.author
          },
          datePublished: parseDateToIso(t.date),
          reviewBody: t.story,
          name: t.title,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: String(t.rating),
            bestRating: '5',
            worstRating: '1'
          }
        }))
      },
      {
        '@type': 'WebSite',
        '@id': `${BRAND.website}#website`,
        url: BRAND.website,
        name: BRAND.name,
        publisher: { '@id': `${BRAND.website}#organization` }
      },
      {
        '@type': 'WebPage',
        '@id': BRAND.website,
        url: BRAND.website,
        name: BRAND.name,
        isPartOf: { '@id': `${BRAND.website}#website` },
        about: { '@id': `${BRAND.website}#organization` },
        description: `${BRAND.name} provides transparent gold buying across Andhra Pradesh & Telangana. Valuation with non-destructive XRF laser testing, spot payout via IMPS/Cash, and pledged gold release.`,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': BRAND.website
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${BRAND.website}#faq`,
        mainEntityOfPage: { '@id': BRAND.website },
        mainEntity: allHomepageFaqs.map(faq => ({
          '@type': 'Question',
          name: faq.category ? `[${faq.category}] ${faq.q}` : faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  // Structured standalone FAQPage JSON-LD object for homepage FAQ section
  const homepageFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BRAND.website}/#faq-page`,
    mainEntityOfPage: { '@id': BRAND.website },
    mainEntity: allHomepageFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.category ? `[${faq.category}] ${faq.q}` : faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-500 selection:text-slate-900 font-sans">
      <script
        id="home-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <script
        id="home-faq-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />

      <Navbar />

      {/* Background GPS Auto Detector */}
      <GPSAutoLocationDetector autoTriggerOnMount={true} />

      <main className="flex-1">
        <ErrorBoundary widgetName="Main Hero Section">
          {/* Hero Section - Geometric Balance Architecture */}
          <section className="bg-white border-b border-slate-200 py-10 lg:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* GPS Auto-Location Banner */}
              <ErrorBoundary widgetName="GPS Location Detector">
                <GPSHeroBanner />
              </ErrorBoundary>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest border border-amber-300">
                    Hyderabad • Kurnool • Nandyal
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest border border-slate-300">
                    59 Districts AP &amp; Telangana
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  Akshaya <br />
                  <span className="text-amber-600">Gold Buyers</span> <br />
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 block mt-1">
                    Transparent Valuation &amp; Pledged Gold Release
                  </span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Evaluate and sell your gold, silver, or pledged ornaments with complete transparency. Certified <strong>non-destructive German XRF laser purity testing</strong> with 0% melting loss and instant payout via bank transfer (IMPS/UPI) or cash.
                </p>

                {/* 4 Geometric Metric Balance Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-amber-600 text-2xl font-bold">XRF</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      Laser Purity Assay
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-amber-600 text-2xl font-bold">0.001g</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      Scale Precision
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-amber-600 text-2xl font-bold">0% Loss</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      Zero Melt Loss
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-amber-600 text-2xl font-bold">Live</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      Spot-Linked Rate
                    </div>
                  </div>
                </div>

                {/* Purity Standards Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5">
                    <span className="text-[10px] text-amber-800 uppercase tracking-wider block font-bold">
                      22K (916 Hallmark)
                    </span>
                    <span className="text-base font-black text-amber-700 block mt-0.5">
                      91.67% Fine Gold
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold mt-0.5 block">● Live Spot Linked</span>
                  </div>

                  <div className="bg-slate-100/90 border border-slate-200 rounded-xl p-3.5">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                      24K Pure Gold
                    </span>
                    <span className="text-base font-black text-slate-900 block mt-0.5">
                      99.9% Fine Bullion
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold mt-0.5 block">● MCX Benchmark</span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 bg-slate-100/90 border border-slate-200 rounded-xl p-3.5">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                      999 Fine Silver
                    </span>
                    <span className="text-base font-black text-slate-900 block mt-0.5">
                      99.9% Pure Silver
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold mt-0.5 block">Bars &amp; Articles</span>
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    href="/pledged-gold-calculator"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Scale className="w-5 h-5 text-amber-400" />
                    <span>Pledged Gold Calculator</span>
                  </Link>

                  <a
                    id="home-call-cta-main"
                    href={`tel:${BRAND.phone1Raw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm sm:text-base rounded-xl uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call {BRAND.phone1Display}</span>
                  </a>

                  <LiveRateCTA
                    variant="secondary"
                    className="!px-5 !py-3.5 text-xs sm:text-sm hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Hero Right: Assurance Card */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-md space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-amber-600" />
                      <h3 className="font-black text-slate-900 text-base sm:text-lg">Certified Gold Buyers</h3>
                    </div>
                    <span className="text-[11px] text-amber-800 bg-amber-100 font-bold px-2.5 py-0.5 rounded uppercase">
                      Live Valuation
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    Transparent precious metal evaluation with scientific precision across Andhra Pradesh &amp; Telangana:
                  </p>

                  <div className="space-y-3">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">Precision XRF Laser Assay</span>
                        <span className="text-[11px] text-slate-500">Non-destructive test in customer presence</span>
                      </div>
                      <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded">
                        100% Non-Destructive
                      </span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">Class II Digital Weighing</span>
                        <span className="text-[11px] text-slate-500">0.001g certified scale precision</span>
                      </div>
                      <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded">
                        Direct Settlement
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/gold-valuation-calculator"
                    className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-center text-xs sm:text-sm rounded-xl uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Scale className="w-4 h-4" />
                    <span>Open Purity Calculator</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ErrorBoundary>

        {/* Trust Indicators: Certified Gold Buyers, ISO Certified Testing, 150,000+ Happy Customers */}
        <ErrorBoundary widgetName="Trust Indicators">
          <TrustIndicators />
        </ErrorBoundary>

        {/* Services & Assets Strip (au, ag, pt, di) */}
        <section className="bg-slate-100 border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 shrink-0">
                Precious Assets Evaluated:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
                <Link href="/metals/gold" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                    Au
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Gold Jewelry</div>
                    <div className="text-[10px] text-slate-500">22K 916, 24K, Coins, Bars</div>
                  </div>
                </Link>

                <Link href="/metals/silver" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                    Ag
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Silver Articles</div>
                    <div className="text-[10px] text-slate-500">999 Fine, 925 Puja Items</div>
                  </div>
                </Link>

                <Link href="/metals/platinum" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                    Pt
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Platinum 950</div>
                    <div className="text-[10px] text-slate-500">Rings, Bands, Chains</div>
                  </div>
                </Link>

                <Link href="/metals/diamond" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                    Di
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Diamonds</div>
                    <div className="text-[10px] text-slate-500">Studded Ornaments &amp; Gems</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* State Selection & Location Network Section */}
        <section className="py-14 bg-white border-b border-slate-200 text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                  Location Network
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Serving Customers Across Andhra Pradesh &amp; Telangana
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Select your region below to view gold buyer assistance in your exact area or town.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/andhra-pradesh"
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 transition-colors"
                >
                  AP Towns →
                </Link>
                <Link
                  href="/telangana"
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 transition-colors"
                >
                  TG Towns →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Andhra Pradesh Card */}
              <div className="bg-slate-50 border border-slate-200 hover:border-amber-500 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-sm">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Building2 className="w-6 h-6 text-amber-600" />
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        Andhra Pradesh
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded">
                      Regional Coverage
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Complete gold valuation coverage across major hubs and localities including Visakhapatnam, Vijayawada, Guntur, Tirupati, Kakinada, Nellore, Kurnool, Kadapa, and all surrounding regions.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {apState?.districts.slice(0, 10).map(d => (
                      <Link
                        key={d.url}
                        href={d.url}
                        className="px-2.5 py-1 rounded-md bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-600 text-xs font-medium border border-slate-200 transition-colors shadow-2xs"
                      >
                        {d.name}
                      </Link>
                    ))}
                    <Link
                      href="/andhra-pradesh"
                      className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 hover:bg-amber-200 text-xs font-bold border border-amber-200"
                    >
                      View all AP locations →
                    </Link>
                  </div>
                </div>

                <Link
                  href="/andhra-pradesh"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white hover:bg-amber-500 hover:text-slate-900 text-amber-700 font-bold text-xs rounded-xl border border-slate-200 hover:border-amber-500 transition-all shadow-xs"
                >
                  <span>Explore Available AP Locations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Telangana Card */}
              <div className="bg-slate-50 border border-slate-200 hover:border-amber-500 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-sm">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Building2 className="w-6 h-6 text-amber-600" />
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        Telangana
                      </h3>
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded">
                      Regional Coverage
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Instant cash-for-gold and valuation across major hubs and localities including Hyderabad, Warangal, Karimnagar, Nizamabad, Khammam, Ranga Reddy, Medchal-Malkajgiri, and all surrounding areas.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tgState?.districts.slice(0, 10).map(d => (
                      <Link
                        key={d.url}
                        href={d.url}
                        className="px-2.5 py-1 rounded-md bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-600 text-xs font-medium border border-slate-200 transition-colors shadow-2xs"
                      >
                        {d.name}
                      </Link>
                    ))}
                    <Link
                      href="/telangana"
                      className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 hover:bg-amber-200 text-xs font-bold border border-amber-200"
                    >
                      View all Telangana locations →
                    </Link>
                  </div>
                </div>

                <Link
                  href="/telangana"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white hover:bg-amber-500 hover:text-slate-900 text-amber-700 font-bold text-xs rounded-xl border border-slate-200 hover:border-amber-500 transition-all shadow-xs"
                >
                  <span>Explore Available Telangana Locations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Live Interactive Gold Calculator */}
        <section className="py-14 bg-slate-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ErrorBoundary widgetName="Live Gold Calculator">
            <LiveGoldCalculator locationName="Andhra Pradesh & Telangana" />
          </ErrorBoundary>
        </section>

        {/* 4-Step Transparent Purity Testing Walkthrough */}
        <ErrorBoundary widgetName="Purity Testing Guide">
          <TransparentProcess />
        </ErrorBoundary>

        {/* Core Services Grid */}
        <ErrorBoundary widgetName="Services Directory">
          <ServicesGrid />
        </ErrorBoundary>

        {/* Pledged Gold Closure Assistance Section */}
        <section className="py-12 bg-slate-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ErrorBoundary widgetName="Pledged Gold Release Calculator">
            <PledgedGoldReleaseCard locationName="Andhra Pradesh & Telangana" />
          </ErrorBoundary>
        </section>

        {/* Precious Metals Grid */}
        <section className="py-12 bg-white border-y border-slate-200 text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
                Precious Metal Specialization
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                All Precious Metals &amp; Ornaments Purchased
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                We handle high-value bullion, ornaments, and certified gems with dedicated assay equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRECIOUS_METALS.map(metal => (
                <div
                  key={metal.id}
                  className="bg-slate-50 border border-slate-200 hover:border-amber-500 rounded-xl p-5 flex flex-col justify-between transition-all shadow-xs group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                      <Coins className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">{metal.name} Valuation</h3>
                    <div className="space-y-1 text-xs text-slate-600 mb-3">
                      <div className="font-bold text-slate-700">Supported Grades:</div>
                      {metal.purityGrades.slice(0, 3).map((g, i) => (
                        <div key={i} className="truncate">• {g}</div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/metals/${metal.id}`}
                    className="pt-2 text-xs font-bold text-amber-700 hover:text-amber-600 flex items-center justify-between border-t border-slate-200"
                  >
                    <span>{metal.name} Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Official Physical Branch Hubs Showcase (Hyderabad, Kurnool, Nandyal) */}
        <section className="py-14 bg-slate-100 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Permanent Physical Network</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                  Our Official Physical Branch Hubs
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Visit our air-conditioned branches equipped with German XRF laser spectrometers, certified Class II scales, CCTV security, and private consultation rooms.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition"
                >
                  View All Branch Details →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BRAND.branches.map(branch => (
                <div
                  key={branch.id}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-400 transition"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 inline-block">
                      Physical Branch
                    </span>
                    <h3 className="text-lg font-black text-slate-900">{branch.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{branch.address}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Helpline:</span>
                      <strong className="text-slate-900">{branch.phone}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Timings:</span>
                      <strong className="text-slate-900">{branch.timings}</strong>
                    </div>
                    <div className="flex items-center justify-between text-emerald-700 font-bold">
                      <span>Assaying:</span>
                      <span>German XRF Laser on site</span>
                    </div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Get Branch Directions</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Interactive Branch Map */}
            <div className="mt-8">
              <BranchMap />
            </div>
          </div>
        </section>

        {/* Telugu + English Bilingual Trust & Guidance Section */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-200/80 px-2.5 py-1 rounded inline-block">
                  ఆంధ్రప్రదేశ్ &amp; తెలంగాణ వినియోగదారుల భరోసా • Telugu Guidance
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  బంగారం అమ్మకంలో మరియు తాకట్టు లోన్ విడిపించడంలో పూర్తి పారదర్శకత
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  అక్షయ గోల్డ్ బయర్స్ (Akshaya Gold Buyers) వద్ద మీ బంగారానికి నయా పైసా తరుగు తీయకుండా, జర్మన్ లేజర్ టెక్నాలజీతో మీ కళ్ళ ముందే స్వచ్ఛతను లెక్కించి స్పాట్‌లోనే నగదు లేదా బ్యాంక్ ఖాతాకు బదిలీ చేస్తాము.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="bg-white/90 p-5 rounded-2xl border border-amber-200/70 space-y-2 shadow-2xs">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>0% కరుగుదల నష్టం (Zero Melting Loss)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    మేము సాంప్రదాయ యాసిడ్ రాపిడి చేయము. జర్మన్ XRF లేజర్ ద్వారా నగలకు ఎలాంటి నష్టం లేకుండా 100% అసలైన బంగారు బరువుకు పూర్తి విలువ చెల్లిస్తాము.
                  </p>
                </div>

                <div className="bg-white/90 p-5 rounded-2xl border border-amber-200/70 space-y-2 shadow-2xs">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>బ్యాంక్ లోన్ విడిపించే సదుపాయం</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ముత్తూట్, మణప్పురం, IIFL లేదా బ్యాంకుల్లో చక్రవడ్డీతో వేలం ప్రమాదంలో ఉన్న మీ బంగారాన్ని మా సొంత నిధులతో విడిపించి, మిగులు నగదును తక్షణమే చెల్లిస్తాము.
                  </p>
                </div>

                <div className="bg-white/90 p-5 rounded-2xl border border-amber-200/70 space-y-2 shadow-2xs">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>కర్నూలు, నంద్యాల &amp; హైదరాబాద్ బ్రాంచీలు</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    కర్నూలు పార్క్ రోడ్, నంద్యాల సంజీవ నగర్ మరియు హైదరాబాద్ సోమాజిగూడలో మా సొంత బ్రాంచీలు కలవు. డోర్‌స్టెప్ బ్యాంక్ ఎస్కార్ట్ సేవలు అందుబాటులో ఉన్నాయి.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/pledged-gold-calculator"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-2"
                >
                  <Scale className="w-4 h-4 text-amber-400" />
                  <span>తాకట్టు లోన్ క్యాలిక్యులేటర్ తెరవండి</span>
                </Link>
                <a
                  href={`tel:${BRAND.phone1Raw}`}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>హెల్ప్‌లైన్: {BRAND.phone1Display}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories & Verified Testimonials */}
        <ErrorBoundary widgetName="Customer Success Stories">
          <CustomerSuccessStories />
        </ErrorBoundary>

        {/* Answer Engine Optimization (AEO) Questions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorBoundary widgetName="AEO Answer Engine">
            <AEODirectAnswer
              locationName="Andhra Pradesh & Telangana"
              stateName="AP & Telangana"
              nearbyNames={['Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Warangal', 'Tirupati']}
            />
          </ErrorBoundary>
        </div>

        {/* Comprehensive FAQs */}
        <ErrorBoundary widgetName="Frequently Asked Questions">
          <CategorizedFAQAccordion locationName="Andhra Pradesh & Telangana" categories={categorizedFaqs} />
        </ErrorBoundary>

        {/* Final Conversion Callout */}
        <section className="py-16 bg-slate-900 border-t border-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Transparent Valuation • Immediate Payout</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Sell Your Gold Today with Full Confidence &amp; Best Market Value
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Call our central customer desk or contact us on WhatsApp. 100% German laser testing in front of you with zero melting loss and immediate payment.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a
                id="footer-call-action-1"
                href={`tel:${BRAND.phone1Raw}`}
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm sm:text-base rounded-xl uppercase tracking-wider transition-all shadow-md"
              >
                Call: {BRAND.phone1Display}
              </a>
              <a
                id="footer-call-action-2"
                href={`tel:${BRAND.phone2Raw}`}
                className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base rounded-xl uppercase tracking-wider transition-colors border border-slate-700"
              >
                Alt: {BRAND.phone2Display}
              </a>
              <LiveRateCTA
                variant="primary"
                className="!px-8 !py-3.5 sm:!text-base shadow-md flex items-center gap-2"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
