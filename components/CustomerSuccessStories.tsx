'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Sparkles,
  Clock,
  ArrowRight,
  Scale,
  Zap,
  Building2,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Award
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/lib/testimonials';
import { getTestimonialUrls } from '@/lib/testimonial-utils';

const ITEMS_PER_PAGE = 9;

export default function CustomerSuccessStories() {
  const [activeState, setActiveState] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Derive unique districts list sorted alphabetically
  const districtOptions = useMemo(() => {
    const set = new Set<string>();
    TESTIMONIALS_DATA.forEach(t => {
      if (activeState === 'all' || t.state === activeState) {
        if (t.district) set.add(t.district);
      }
    });
    return Array.from(set).sort();
  }, [activeState]);

  // Filter logic
  const filteredTestimonials = useMemo(() => {
    return TESTIMONIALS_DATA.filter((t) => {
      // Filter by State
      if (activeState !== 'all' && t.state !== activeState) return false;

      // Filter by Category
      if (activeCategory !== 'all' && t.category !== activeCategory) return false;

      // Filter by District
      if (selectedDistrict !== 'all' && t.district !== selectedDistrict) return false;

      // Filter by Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = t.author.toLowerCase().includes(q);
        const matchesLocation = t.location.toLowerCase().includes(q);
        const matchesDistrict = t.district.toLowerCase().includes(q);
        const matchesTitle = t.title.toLowerCase().includes(q);
        const matchesStory = t.story.toLowerCase().includes(q);
        const matchesRole = t.role.toLowerCase().includes(q);
        const matchesItem = t.transactionDetails.itemType.toLowerCase().includes(q);

        if (!matchesName && !matchesLocation && !matchesDistrict && !matchesTitle && !matchesStory && !matchesRole && !matchesItem) {
          return false;
        }
      }

      return true;
    });
  }, [activeState, activeCategory, selectedDistrict, searchQuery]);

  // Reset page to 1 when filters change
  const handleStateChange = (state: string) => {
    setActiveState(state);
    setSelectedDistrict('all');
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleDistrictChange = (dist: string) => {
    setSelectedDistrict(dist);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const resetAllFilters = () => {
    setActiveState('all');
    setActiveCategory('all');
    setSelectedDistrict('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalItems = filteredTestimonials.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTestimonials = filteredTestimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const categories = [
    { id: 'all', label: 'All Verified Stories' },
    { id: 'pledged-gold', label: 'Pledged Gold Releases' },
    { id: 'old-jewellery', label: 'Old Jewellery & Bullion' },
    { id: 'scrap-gold', label: 'Broken & Scrap Gold' },
    { id: 'silver-diamond', label: 'Silver & Diamonds' }
  ];

  return (
    <section id="customer-success-stories-section" className="py-16 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Metrics & Social Proof Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>500+ Real Customer Success Stories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Verified Customer Success Stories Across AP &amp; TS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Explore 500+ authentic seller journeys across 100+ locations in Andhra Pradesh and Telangana. See how gold owners safely released pledged gold loans, got 0% melting loss laser valuation, and received instant bank credit.
            </p>
          </div>

          {/* Social Proof Aggregate Metric Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-xs">
              4.95
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-extrabold text-slate-900">
                500+ Stories • 14,500+ Transactions
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-amber-600" />
                <span>Coverage Across 59 Districts in AP &amp; TS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search, State, Category & District Filtering Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs space-y-4">
          
          {/* Top Bar: Search Input + State Selector Tabs */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by city, name, 'Muthoot', 'Kukatpally', 'Vijayawada'..."
                aria-label="Search customer stories and reviews"
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 p-0.5 rounded-full hover:bg-slate-200 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* State Switcher Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start md:self-auto shrink-0 overflow-x-auto max-w-full no-scrollbar">
              <button
                id="state-filter-all"
                onClick={() => handleStateChange('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeState === 'all'
                    ? 'bg-amber-500 text-slate-950 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All States (500+)
              </button>
              <button
                id="state-filter-ap"
                onClick={() => handleStateChange('Andhra Pradesh')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeState === 'Andhra Pradesh'
                    ? 'bg-amber-500 text-slate-950 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Andhra Pradesh (AP)
              </button>
              <button
                id="state-filter-ts"
                onClick={() => handleStateChange('Telangana')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeState === 'Telangana'
                    ? 'bg-amber-500 text-slate-950 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Telangana (TS)
              </button>
            </div>
          </div>

          {/* Bottom Bar: Category Pills + District Filter Dropdown */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-story-cat-${cat.id}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-amber-400 shadow-2xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* District Dropdown Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <select
                id="select-district-story"
                aria-label="Filter stories by district"
                value={selectedDistrict}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer capitalize"
              >
                <option value="all">All Districts ({districtOptions.length})</option>
                {districtOptions.map((dist) => (
                  <option key={dist} value={dist} className="capitalize">
                    {dist.replace(/-/g, ' ')}
                  </option>
                ))}
              </select>

              {(activeState !== 'all' || activeCategory !== 'all' || selectedDistrict !== 'all' || searchQuery !== '') && (
                <button
                  onClick={resetAllFilters}
                  className="px-2.5 py-1.5 text-xs text-amber-700 hover:text-amber-900 hover:bg-amber-50 font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1"
                  title="Reset all filters"
                >
                  <X className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>
              Showing <strong className="text-slate-900">{totalItems > 0 ? startIndex + 1 : 0}</strong>–
              <strong className="text-slate-900">{Math.min(startIndex + ITEMS_PER_PAGE, totalItems)}</strong> of{' '}
              <strong className="text-slate-900">{totalItems}</strong> Verified Stories
            </span>
          </div>
          {totalPages > 1 && (
            <div className="text-slate-500 text-[11px]">
              Page {currentPage} of {totalPages}
            </div>
          )}
        </div>

        {/* Testimonials Grid */}
        {paginatedTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedTestimonials.map((t) => {
              const urls = getTestimonialUrls(t);
              return (
                <div
                  key={t.id}
                  id={`story-card-${t.id}`}
                  className="bg-white hover:bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 hover:border-amber-400 transition-all flex flex-col justify-between shadow-xs hover:shadow-md group relative"
                >
                  <div className="space-y-4">
                    {/* Top Badge & Rating */}
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

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                      &ldquo;{t.title}&rdquo;
                    </h3>

                    {/* Story Narrative */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t.story}
                    </p>

                    {/* Structured Transaction Metric Box */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-700">
                        <span className="text-[11px] font-medium text-slate-500">Item Evaluated:</span>
                        <span className="font-semibold text-slate-900">{t.transactionDetails.itemType}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span className="text-[11px] font-medium text-slate-500">Highlight:</span>
                        <span className="font-bold text-emerald-700">{t.transactionDetails.benefitHighlight}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700 pt-1.5 border-t border-slate-200/60">
                        <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>Speed:</span>
                        </span>
                        <span className="font-bold text-amber-800">{t.transactionDetails.settlementSpeed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Author Footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-amber-200 bg-amber-100 flex items-center justify-center font-bold text-amber-900 text-xs shadow-2xs">
                        <Image
                          src={`https://picsum.photos/seed/cust_${t.id}/120/120`}
                          alt={t.author}
                          width={36}
                          height={36}
                          className="object-cover w-full h-full"
                          referrerPolicy="no-referrer"
                          sizes="36px"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5 truncate">
                          <span className="truncate">{t.author}</span>
                          <span title="Verified Customer Transaction" className="inline-flex shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          </span>
                        </div>
                        <Link
                          href={urls.locationUrl}
                          className="text-[11px] text-amber-800 hover:text-amber-950 font-semibold flex items-center gap-1 mt-0.5 truncate hover:underline"
                          title={`View ${t.location} Location Hub & Spot Rates`}
                        >
                          <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                          <span className="truncate">{t.location}</span>
                        </Link>
                      </div>
                    </div>

                    <Link
                      href={urls.locationUrl}
                      className="text-[11px] font-bold text-amber-800 hover:text-amber-950 hover:underline flex items-center gap-0.5 shrink-0 capitalize bg-amber-50 px-2 py-1 rounded-md border border-amber-200/80"
                      title={`Open ${t.location} location page`}
                    >
                      <span className="hidden sm:inline">{t.district.replace(/-/g, ' ')}</span>
                      <ArrowRight className="w-3 h-3 text-amber-700" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No matching success stories found</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any stories matching your search query or location filter. Try resetting your search or selecting a different district.
            </p>
            <button
              onClick={resetAllFilters}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear All Search Filters</span>
            </button>
          </div>
        )}

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="text-xs font-semibold text-slate-600">
              Page <strong className="text-slate-900">{currentPage}</strong> of{' '}
              <strong className="text-slate-900">{totalPages}</strong> ({totalItems} Stories Total)
            </div>

            <div className="flex items-center gap-1.5">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
                .map((page, idx, arr) => {
                  const prevPage = arr[idx - 1];
                  const showEllipsis = prevPage && page - prevPage > 1;

                  return (
                    <React.Fragment key={page}>
                      {showEllipsis && <span className="px-1 text-xs text-slate-400">...</span>}
                      <button
                        onClick={() => setCurrentPage(page)}
                        className={`w-9 h-9 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                          currentPage === page
                            ? 'bg-amber-500 text-slate-950 shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  );
                })}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-all cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Trust Guarantees & Social Proof Banner */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">0% Melting Loss</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">German XRF laser analysis with zero acid damage or melting guesswork.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">0.001g Precision</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Certified digital scales calibrated under customer observation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Instant IMPS / Cash</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Real-time payment disbursement with formal statutory invoice.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Bank Loan Release</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Direct debt payoff assistance to retrieve pledged gold safely.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
