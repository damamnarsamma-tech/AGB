'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Search,
  Building2,
  TrendingUp,
  Scale,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Filter,
  Layers,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Activity
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import {
  COMPETITOR_DATABASE,
  COMPETITOR_FEATURE_MATRIX,
  SEARCH_INTENT_MAP,
  LENDER_DATABASE,
  CompetitorProfile
} from '@/lib/competitor-data';
import { BRAND } from '@/lib/brand';

const MARKET_INTELLIGENCE_FAQS = [
  {
    q: 'How do major competitors like Attica and White Gold structure their gold purchase deductions?',
    a: 'Most competitor gold buying chains list a high "live per-gram market rate" but apply hidden deductions (ranging from 3% to 8%) under labels such as melting loss, wastage, service fees, or processing charges. Akshaya Gold Buyers guarantees 100% transparent pricing linked directly to live MCX and international spot rates with zero arbitrary deductions.'
  },
  {
    q: 'What is the primary market gap identified in AP and Telangana for pledged gold release services?',
    a: 'Most gold loan NBFCs (like Muthoot or Manappuram) and commercial banks do not allow direct redemption of pledged gold without the borrower physically paying off the entire accrued loan and interest first. Akshaya Gold Buyers fills this major market gap by sending an executive to accompany the customer, clearing the full pending dues directly, collecting the jewellery safely, and paying out the remaining cash surplus instantly.'
  },
  {
    q: 'Why do traditional pawnbrokers and local independent gold buyers present high risks to sellers?',
    a: 'Local pawnbrokers often use obsolete, non-scientific testing methods (like acid stone tests or touchstone rubbing) which are subjective and can damage ornaments. Furthermore, they do not offer real-time pricing, resulting in arbitrary valuation, lack of official invoicing, and significantly lower payout values for the customer.'
  },
  {
    q: 'How does Akshaya Gold Buyers utilize German XRF spectrometry to maintain a competitive advantage?',
    a: 'Traditional testing methods rely on manual stone rubbing or destructive melting. Akshaya uses state-of-the-art laboratory-grade XRF spectrometry that delivers 99.9% accurate elemental purity analysis of gold, silver, copper, and zinc within 30 seconds. This is done entirely in the customer\'s presence without any damage, cutting, or weight loss.'
  }
];

export default function CompetitorIntelligencePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'database' | 'matrix' | 'search-intent' | 'lenders' | 'faqs'>('database');

  const filteredCompetitors = COMPETITOR_DATABASE.filter(c => {
    if (selectedCategory !== 'all' && !c.businessCategory.includes(selectedCategory)) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        c.brand.toLowerCase().includes(q) ||
        c.primaryCities.some(city => city.toLowerCase().includes(q)) ||
        c.keyLocalities.some(loc => loc.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans">
      {/* FAQ Schema for Competitive Knowledge Base SEO */}
      <script
        id="competitor-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': 'https://akshaya-gold-buyers.ai.studio/admin/competitor-intelligence#faq',
            name: 'Gold Market Competitor Intelligence FAQs - Akshaya Internal Knowledge Base',
            description: 'Frequently asked questions and answers for competitive intelligence, market gap analysis, and gold buying service differentiators in Andhra Pradesh and Telangana.',
            mainEntity: MARKET_INTELLIGENCE_FAQS.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a
              }
            }))
          }).replace(/</g, '\\u003c')
        }}
      />

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-stone-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Akshaya Strategic Competitor Intelligence &amp; Market Gap Console</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              AP &amp; Telangana Gold Market Competitor Intelligence
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
              Factual analysis of gold buyers, gold loan NBFCs (Muthoot, Manappuram), retail jewelers, and local independent buyers across Hyderabad, Kurnool, Nandyal, and AP/Telangana commercial hubs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/admin"
              className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-bold border border-stone-800 transition"
            >
              Back to Admin
            </Link>
            <Link
              href="/admin/diagnostics"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition shadow-sm"
            >
              SEO Diagnostics
            </Link>
          </div>
        </div>

        {/* High-Level Competitive Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5">
            <div className="text-xs text-stone-400 mb-1">Tracked Competitor Profiles</div>
            <div className="text-3xl font-black text-amber-400">{COMPETITOR_DATABASE.length} Major Entities</div>
            <div className="text-[11px] text-stone-500 mt-1">Chains, NBFCs, Local &amp; Search Rivals</div>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5">
            <div className="text-xs text-stone-400 mb-1">Key Focused Regional Hubs</div>
            <div className="text-3xl font-black text-emerald-400">Hyderabad, Kurnool, Nandyal</div>
            <div className="text-[11px] text-stone-500 mt-1">Plus 59 Districts of AP &amp; Telangana</div>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5">
            <div className="text-xs text-stone-400 mb-1">Calculators Discovered Online</div>
            <div className="text-3xl font-black text-rose-400">1 of 6 Competitors</div>
            <div className="text-[11px] text-stone-500 mt-1">0 Pledged Loan Settlement Calculators</div>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5">
            <div className="text-xs text-stone-400 mb-1">Akshaya Strategic Advantage</div>
            <div className="text-3xl font-black text-amber-400">100% Transparency</div>
            <div className="text-[11px] text-emerald-400 mt-1">0% Melt Loss + Pledged Gold Engine</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-800 gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('database')}
            className={`py-3 px-4 font-bold text-xs whitespace-nowrap transition border-b-2 flex items-center gap-2 ${
              activeTab === 'database'
                ? 'border-amber-400 text-amber-400 bg-stone-900/50'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Competitor Profiles Database</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`py-3 px-4 font-bold text-xs whitespace-nowrap transition border-b-2 flex items-center gap-2 ${
              activeTab === 'matrix'
                ? 'border-amber-400 text-amber-400 bg-stone-900/50'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Capability &amp; Feature Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('search-intent')}
            className={`py-3 px-4 font-bold text-xs whitespace-nowrap transition border-b-2 flex items-center gap-2 ${
              activeTab === 'search-intent'
                ? 'border-amber-400 text-amber-400 bg-stone-900/50'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Search Intent &amp; Opportunity Map</span>
          </button>

          <button
            onClick={() => setActiveTab('lenders')}
            className={`py-3 px-4 font-bold text-xs whitespace-nowrap transition border-b-2 flex items-center gap-2 ${
              activeTab === 'lenders'
                ? 'border-amber-400 text-amber-400 bg-stone-900/50'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Lender Settlement &amp; Auction Rules</span>
          </button>

          <button
            onClick={() => setActiveTab('faqs')}
            className={`py-3 px-4 font-bold text-xs whitespace-nowrap transition border-b-2 flex items-center gap-2 ${
              activeTab === 'faqs'
                ? 'border-amber-400 text-amber-400 bg-stone-900/50'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>FAQ &amp; Competitive Intelligence</span>
          </button>
        </div>

        {/* Tab 1: Competitor Database */}
        {activeTab === 'database' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-stone-900 p-4 rounded-2xl border border-stone-800">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Filter by brand, city, or locality..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-stone-500" />
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="bg-stone-950 border border-stone-800 text-stone-200 text-xs py-2 px-3 rounded-xl focus:outline-none focus:border-amber-500 w-full sm:w-auto"
                >
                  <option value="all">All Categories</option>
                  <option value="Category A">Category A - Gold Buyer Chains</option>
                  <option value="Category B">Category B - Gold Loan NBFCs</option>
                  <option value="Category D">Category D - Local Independent Buyers</option>
                </select>
              </div>
            </div>

            {/* Competitor Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCompetitors.map(competitor => (
                <div
                  key={competitor.id}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4 hover:border-stone-700 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">
                        {competitor.businessCategory}
                      </div>
                      <h3 className="text-xl font-black text-white">{competitor.brand}</h3>
                      <div className="text-xs text-stone-400 mt-0.5">{competitor.website}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-amber-400">{competitor.reviewRating}</div>
                      <div className="text-[10px] text-stone-500">{competitor.reviewCount}</div>
                    </div>
                  </div>

                  <div className="text-xs text-stone-300 space-y-1.5 pt-2 border-t border-stone-800">
                    <div>
                      <span className="text-stone-500 font-semibold">Primary Markets:</span>{' '}
                      {competitor.primaryCities.join(', ')}
                    </div>
                    <div>
                      <span className="text-stone-500 font-semibold">Key Localities:</span>{' '}
                      {competitor.keyLocalities.join(', ')}
                    </div>
                    <div>
                      <span className="text-stone-500 font-semibold">Purity Testing:</span>{' '}
                      {competitor.goldTestingMethod}
                    </div>
                    <div>
                      <span className="text-stone-500 font-semibold">Pricing Transparency:</span>{' '}
                      <span
                        className={`font-bold ${
                          competitor.pricingTransparency === 'High'
                            ? 'text-emerald-400'
                            : competitor.pricingTransparency === 'Moderate'
                            ? 'text-amber-400'
                            : 'text-rose-400'
                        }`}
                      >
                        {competitor.pricingTransparency}
                      </span>
                    </div>
                  </div>

                  {/* Weaknesses vs Akshaya Opportunity */}
                  <div className="space-y-3 pt-3 border-t border-stone-800 text-xs">
                    <div>
                      <div className="text-rose-400 font-bold flex items-center gap-1.5 mb-1 text-[11px]">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Competitor Weaknesses:</span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-stone-400 text-[11px]">
                        {competitor.weaknesses.map((w, idx) => (
                          <li key={idx}>{w}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-emerald-400 font-bold flex items-center gap-1.5 mb-1 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Akshaya Differentiation Opportunity:</span>
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-stone-300 text-[11px]">
                        {competitor.akshayaOpportunities.map((o, idx) => (
                          <li key={idx}>{o}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Feature Matrix */}
        {activeTab === 'matrix' && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 overflow-x-auto">
            <h3 className="text-lg font-bold text-white mb-2">Capability &amp; Service Feature Matrix</h3>
            <p className="text-xs text-stone-400 mb-6">
              Factual side-by-side comparison of Akshaya Gold Buyers against established regional chains and local players.
            </p>

            <table className="w-full text-left text-xs">
              <thead className="bg-stone-950 text-stone-400 uppercase text-[10px] border-b border-stone-800">
                <tr>
                  <th className="p-3">Feature / Capability</th>
                  <th className="p-3 text-amber-400 font-bold">Akshaya Gold Buyers</th>
                  <th className="p-3">Attica Gold</th>
                  <th className="p-3">White Gold</th>
                  <th className="p-3">Muthoot Gold Point</th>
                  <th className="p-3">Local Pawn Shops</th>
                  <th className="p-3 text-emerald-400">Market Gap Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {COMPETITOR_FEATURE_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-950/40">
                    <td className="p-3 font-bold text-white max-w-[200px]">{row.feature}</td>
                    <td className="p-3 font-bold text-amber-400 bg-amber-500/5">{row.akshayaGold}</td>
                    <td className="p-3 text-stone-400">{row.atticaGold}</td>
                    <td className="p-3 text-stone-400">{row.whiteGold}</td>
                    <td className="p-3 text-stone-400">{row.muthootGoldPoint}</td>
                    <td className="p-3 text-stone-500">{row.localPawnShops}</td>
                    <td className="p-3 text-emerald-400 font-medium">{row.marketGapImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Search Intent Map */}
        {activeTab === 'search-intent' && (
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Search Intent &amp; Local Demand Mapping</h3>
              <p className="text-xs text-stone-400">
                Analysis of high-volume customer queries across Kurnool, Nandyal, Hyderabad, Vijayawada, and Visakhapatnam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SEARCH_INTENT_MAP.map((intent, idx) => (
                <div key={idx} className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-amber-400">{intent.intentCategory}</h4>
                    <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-mono">
                      High Conversion Intent
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] text-stone-500 uppercase font-bold tracking-wider">
                      Target Search Queries:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {intent.highIntentKeywords.map((kw, kidx) => (
                        <span key={kidx} className="px-2.5 py-1 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-300">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-800 text-xs">
                    <div>
                      <span className="text-rose-400 font-bold">Customer Pain Point:</span>{' '}
                      <span className="text-stone-400">{intent.customerProblem}</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-bold">Akshaya Winning Solution:</span>{' '}
                      <span className="text-stone-200">{intent.akshayaSolution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Lender Settlement Matrix */}
        {activeTab === 'lenders' && (
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Gold Loan Lender Settlement &amp; Foreclosure Matrix</h3>
              <p className="text-xs text-stone-400">
                Operating rules for releasing pledged gold loans across NBFCs and commercial banks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LENDER_DATABASE.map(lender => (
                <div key={lender.id} className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase">{lender.category}</span>
                    <h4 className="text-lg font-black text-white">{lender.name}</h4>
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-300">
                    <div>
                      <span className="text-stone-500 font-bold">Interest Rate Range:</span> {lender.interestRange}
                    </div>
                    <div>
                      <span className="text-rose-400 font-bold">Auction Notice Trigger:</span>{' '}
                      <span className="text-stone-400">{lender.auctionTriggerNotice}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-800 space-y-1.5">
                    <div className="text-[11px] font-bold text-amber-300">Settlement Steps with Akshaya:</div>
                    <ol className="list-decimal pl-4 text-[11px] text-stone-400 space-y-1">
                      {lender.procedureToRelease.slice(0, 4).map((step, sidx) => (
                        <li key={sidx}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 text-[10px] text-stone-400">
                    <span className="font-bold text-rose-400">Notice:</span> {lender.customerWarning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: FAQ & Competitive Knowledge Base */}
        {activeTab === 'faqs' && (
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-2">
              <h3 className="text-lg font-bold text-white">Competitive Intelligence FAQ</h3>
              <p className="text-xs text-stone-400">
                Key training questions and answers regarding market positioning, competitor tactics, and Akshaya advantages.
              </p>
            </div>

            <div className="space-y-4">
              {MARKET_INTELLIGENCE_FAQS.map((faq, idx) => (
                <div key={idx} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <HelpCircle className="w-4 h-4 flex-shrink-0" />
                    <h4 className="text-sm font-bold text-white">{faq.q}</h4>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
