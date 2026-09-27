'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  Search,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Scale,
  MapPin,
  Menu,
  X,
  ShieldCheck,
  Coins,
  ArrowRight,
  Info,
  HelpCircle,
  Navigation
} from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { CONTACT_CONFIG } from '@/lib/contact-config';
import { resolvePageContext, UNIVERSAL_SERVICES } from '@/lib/universal-engine';
import { generateCanonicalRoute } from '@/lib/route-registry';
import LocationSearchModal from './LocationSearchModal';
import GPSAutoLocationDetector from './GPSAutoLocationDetector';
import LiveRateCTA from './LiveRateCTA';


interface NavbarProps {
  currentLocationName?: string;
}

export default function Navbar({ currentLocationName }: NavbarProps) {
  const pathname = usePathname() || '';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [gpsModalOpen, setGpsModalOpen] = useState(false);
  const [apDropdown, setApDropdown] = useState(false);
  const [tgDropdown, setTgDropdown] = useState(false);
  const [mobileApOpen, setMobileApOpen] = useState(false);
  const [mobileTgOpen, setMobileTgOpen] = useState(false);

  const apDropdownRef = useRef<HTMLDivElement>(null);
  const tgDropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdowns on outside click or escape key
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (apDropdownRef.current && !apDropdownRef.current.contains(e.target as Node)) {
        setApDropdown(false);
      }
      if (tgDropdownRef.current && !tgDropdownRef.current.contains(e.target as Node)) {
        setTgDropdown(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setApDropdown(false);
        setTgDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Dynamic context awareness from current route
  const currentContext = resolvePageContext({ pathname: pathname || '' });

  // Popular districts for quick nav
  const apPopular = [
    { name: 'Visakhapatnam', slug: 'visakhapatnam', state: 'andhra-pradesh' },
    { name: 'Vijayawada (NTR)', slug: 'ntr', state: 'andhra-pradesh' },
    { name: 'Guntur', slug: 'guntur', state: 'andhra-pradesh' },
    { name: 'Tirupati', slug: 'tirupati', state: 'andhra-pradesh' },
    { name: 'Kakinada', slug: 'kakinada', state: 'andhra-pradesh' },
    { name: 'Nellore', slug: 'nellore', state: 'andhra-pradesh' },
    { name: 'Kurnool', slug: 'kurnool', state: 'andhra-pradesh' },
    { name: 'Anantapur', slug: 'ananthapuramu', state: 'andhra-pradesh' },
    { name: 'Rajahmundry', slug: 'east-godavari', state: 'andhra-pradesh' },
    { name: 'Kadapa', slug: 'ysr-kadapa', state: 'andhra-pradesh' }
  ];

  const tgPopular = [
    { name: 'Hyderabad', slug: 'hyderabad', state: 'telangana' },
    { name: 'Warangal', slug: 'warangal', state: 'telangana' },
    { name: 'Karimnagar', slug: 'karimnagar', state: 'telangana' },
    { name: 'Nizamabad', slug: 'nizamabad', state: 'telangana' },
    { name: 'Khammam', slug: 'khammam', state: 'telangana' },
    { name: 'Ranga Reddy', slug: 'ranga-reddy', state: 'telangana' },
    { name: 'Medchal-Malkajgiri', slug: 'medchal-malkajgiri', state: 'telangana' },
    { name: 'Sangareddy', slug: 'sangareddy', state: 'telangana' },
    { name: 'Mahabubnagar', slug: 'mahabubnagar', state: 'telangana' },
    { name: 'Nalgonda', slug: 'nalgonda', state: 'telangana' }
  ];

  const allServicesList = Object.values(UNIVERSAL_SERVICES);

  const getServiceLink = (serviceSlug: string) => {
    return generateCanonicalRoute({
      service: serviceSlug,
      location: currentContext.location
    });
  };

  const getLocationLink = (state: string, slug: string) => {
    return generateCanonicalRoute({
      location: `/${state}/${slug}`,
      service: currentContext.service
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white text-slate-900 shadow-xs border-b border-slate-200 font-sans">
      {/* Top Banner with Direct Helpline & Value Assurances */}
      <div className="bg-slate-900 px-4 py-1.5 text-xs text-slate-300 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap text-[11px]">
            <span className="inline-flex items-center gap-1.5 font-bold text-amber-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {currentContext.location ? `${currentContext.location.displayName} Live Desk` : 'Live Precious Metals Desk'}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200">Non-Destructive XRF Spectrometric Testing</span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-200">Direct Bank / Cash Settlement</span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              id="top-nav-call-1"
              href={CONTACT_CONFIG.phone1Tel}
              aria-label={`Call primary helpline ${CONTACT_CONFIG.phone1Display}`}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_CONFIG.phone1Display}</span>
            </a>
            <span className="text-slate-400 hidden md:inline">•</span>
            <a
              id="top-nav-call-2"
              href={CONTACT_CONFIG.phone2Tel}
              aria-label={`Call alternate helpline ${CONTACT_CONFIG.phone2Display}`}
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_CONFIG.phone2Display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Akshaya Gold Buyers Home">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-xl italic shadow-xs group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="leading-none">
              <span className="text-xl font-black tracking-tighter text-slate-900 block">
                AKSHAYA
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-amber-700 font-bold block mt-0.5">
                Gold Buyers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-semibold text-slate-700">
            <Link
              href="/"
              className={`hover:text-amber-700 transition-colors py-2 ${pathname === '/' ? 'text-amber-700 font-bold' : ''}`}
            >
              Home
            </Link>

            {/* Pledged Gold Calculator CTA Nav */}
            <Link
              href="/pledged-gold-calculator"
              className={`hover:text-amber-700 transition-colors py-2 inline-flex items-center gap-1.5 ${pathname === '/pledged-gold-calculator' ? 'text-amber-700 font-bold' : ''}`}
            >
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Pledged Gold</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-amber-500 text-slate-950 uppercase">
                Loan Calc
              </span>
            </Link>

            {/* Direct Services Hub Link */}
            <Link
              id="nav-services-hub-link"
              href="/services"
              className={`hover:text-amber-700 transition-colors py-2 ${pathname?.startsWith('/services') ? 'text-amber-700 font-bold' : ''}`}
            >
              Services
            </Link>

            {/* Dynamic Andhra Pradesh Dropdown */}
            <div
              ref={apDropdownRef}
              className="relative"
              onMouseEnter={() => setApDropdown(true)}
              onMouseLeave={() => setApDropdown(false)}
            >
              <div className="inline-flex items-center">
                <Link
                  href="/andhra-pradesh"
                  className={`hover:text-amber-700 transition-colors py-2 inline-flex items-center gap-1 ${pathname?.startsWith('/andhra-pradesh') ? 'text-amber-700 font-bold' : ''}`}
                >
                  <span>Andhra Pradesh</span>
                </Link>
                <button
                  type="button"
                  id="nav-ap-dropdown-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setApDropdown(prev => !prev);
                    setTgDropdown(false);
                  }}
                  className="p-1 hover:text-amber-700 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Toggle Andhra Pradesh districts menu"
                  aria-expanded={apDropdown}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${apDropdown ? 'rotate-180 text-amber-700' : ''}`} />
                </button>
              </div>

              {apDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Andhra Pradesh Locations</span>
                    <Link
                      href="/andhra-pradesh"
                      onClick={() => setApDropdown(false)}
                      className="text-xs text-slate-500 hover:text-amber-700 font-semibold underline"
                    >
                      Explore All Towns →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-72 overflow-y-auto">
                    {apPopular.map(d => (
                      <Link
                        key={d.slug}
                        href={getLocationLink(d.state, d.slug)}
                        onClick={() => setApDropdown(false)}
                        className="px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-amber-800 hover:bg-slate-50 rounded-md transition-colors"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dynamic Telangana Dropdown */}
            <div
              ref={tgDropdownRef}
              className="relative"
              onMouseEnter={() => setTgDropdown(true)}
              onMouseLeave={() => setTgDropdown(false)}
            >
              <div className="inline-flex items-center">
                <Link
                  href="/telangana"
                  className={`hover:text-amber-700 transition-colors py-2 inline-flex items-center gap-1 ${pathname?.startsWith('/telangana') ? 'text-amber-700 font-bold' : ''}`}
                >
                  <span>Telangana</span>
                </Link>
                <button
                  type="button"
                  id="nav-tg-dropdown-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTgDropdown(prev => !prev);
                    setApDropdown(false);
                  }}
                  className="p-1 hover:text-amber-700 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Toggle Telangana districts menu"
                  aria-expanded={tgDropdown}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${tgDropdown ? 'rotate-180 text-amber-700' : ''}`} />
                </button>
              </div>

              {tgDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Telangana Locations</span>
                    <Link
                      href="/telangana"
                      onClick={() => setTgDropdown(false)}
                      className="text-xs text-slate-500 hover:text-amber-700 font-semibold underline"
                    >
                      Explore All Towns →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-72 overflow-y-auto">
                    {tgPopular.map(d => (
                      <Link
                        key={d.slug}
                        href={getLocationLink(d.state, d.slug)}
                        onClick={() => setTgDropdown(false)}
                        className="px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-amber-800 hover:bg-slate-50 rounded-md transition-colors"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/gold-valuation-calculator"
              className={`hover:text-amber-700 transition-colors py-2 inline-flex items-center gap-1.5 ${pathname === '/gold-valuation-calculator' ? 'text-amber-700 font-bold' : ''}`}
            >
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Valuation Guide</span>
            </Link>

            <Link
              href="/about"
              className={`hover:text-amber-700 transition-colors py-2 ${pathname === '/about' ? 'text-amber-700 font-bold' : ''}`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`hover:text-amber-700 transition-colors py-2 ${pathname === '/contact' ? 'text-amber-700 font-bold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* GPS Auto-Detect Button */}
            <button
              id="nav-gps-auto-detect-btn"
              onClick={() => setGpsModalOpen(true)}
              className="p-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-bold bg-amber-50 hover:bg-amber-100 text-amber-950 rounded-xl border border-amber-300 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer group"
              title="Auto-detect current location via GPS"
              aria-label="Auto-detect current location via GPS"
            >
              <Navigation className="w-4 h-4 text-amber-700 group-hover:rotate-12 transition-transform animate-pulse" />
              <span className="hidden md:inline">Use GPS</span>
            </button>

            {/* Search Location Button */}
            <button
              id="open-location-search-btn"
              onClick={() => setSearchModalOpen(true)}
              className="p-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Search towns & localities"
              aria-label="Search towns and localities"
            >
              <Search className="w-4 h-4 text-amber-700" />
              <span className="hidden sm:inline">Find Town</span>
            </button>

            {/* WhatsApp Quick CTA */}
            <LiveRateCTA
              variant="navbar"
              className="hidden sm:inline-flex"
            />

            {/* Direct Call Button */}
            <a
              id="header-call-btn"
              href={CONTACT_CONFIG.phone1Tel}
              aria-label={`Call Akshaya Gold Buyers at ${CONTACT_CONFIG.phone1Display}`}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950" />
              <span className="hidden md:inline">Call Now</span>
              <span className="md:hidden">Call</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
          {/* GPS Quick Trigger in Mobile Menu */}
          <button
            type="button"
            id="mobile-gps-detect-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              setGpsModalOpen(true);
            }}
            className="w-full p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 fill-slate-950" />
            <span>Auto-Detect My Location (GPS)</span>
          </button>

          {/* Quick Context Summary */}
          {currentContext.location && (
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
              <span className="font-bold text-slate-900 block">Current Location:</span>
              <span className="text-slate-700">{currentContext.location.displayName}</span>
            </div>
          )}

          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-amber-800 hover:bg-amber-50 rounded-lg"
            >
              All Services Hub
            </Link>

            <Link
              href="/pledged-gold-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm font-bold text-slate-900 bg-amber-50 rounded-lg border border-amber-200"
            >
              <span className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-amber-600" />
                <span>Pledged Gold Calculator</span>
              </span>
              <span className="text-[9px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded uppercase">
                Loan Calc
              </span>
            </Link>

            {/* Primary Services Quick List */}
            <div className="pt-2 pl-2 border-l-2 border-amber-200 my-1 space-y-1">
              {allServicesList.slice(0, 6).map(s => (
                <Link
                  key={s.id}
                  href={getServiceLink(s.slug)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-amber-800 hover:bg-slate-50 rounded-md font-medium"
                >
                  {s.name}
                </Link>
              ))}
            </div>

            {/* Mobile Andhra Pradesh Section */}
            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50">
                <Link
                  href="/andhra-pradesh"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold text-slate-800 uppercase tracking-wider hover:text-amber-700"
                >
                  Andhra Pradesh
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileApOpen(!mobileApOpen)}
                  className="p-1 text-slate-500 hover:text-amber-700 focus:outline-none"
                  aria-label="Toggle AP districts"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileApOpen ? 'rotate-180 text-amber-700' : ''}`} />
                </button>
              </div>

              {mobileApOpen && (
                <div className="pl-4 pr-2 py-2 grid grid-cols-2 gap-1.5 bg-slate-50 rounded-lg my-1">
                  {apPopular.map(d => (
                    <Link
                      key={d.slug}
                      href={getLocationLink(d.state, d.slug)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1 text-xs text-slate-700 hover:text-amber-700 font-medium truncate"
                    >
                      • {d.name}
                    </Link>
                  ))}
                  <div className="col-span-2 pt-1 border-t border-slate-200">
                    <Link
                      href="/andhra-pradesh"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-bold text-amber-700 hover:underline block text-center"
                    >
                      Explore All AP Locations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Telangana Section */}
            <div className="pt-1">
              <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50">
                <Link
                  href="/telangana"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold text-slate-800 uppercase tracking-wider hover:text-amber-700"
                >
                  Telangana
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileTgOpen(!mobileTgOpen)}
                  className="p-1 text-slate-500 hover:text-amber-700 focus:outline-none"
                  aria-label="Toggle Telangana districts"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTgOpen ? 'rotate-180 text-amber-700' : ''}`} />
                </button>
              </div>

              {mobileTgOpen && (
                <div className="pl-4 pr-2 py-2 grid grid-cols-2 gap-1.5 bg-slate-50 rounded-lg my-1">
                  {tgPopular.map(d => (
                    <Link
                      key={d.slug}
                      href={getLocationLink(d.state, d.slug)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-2 py-1 text-xs text-slate-700 hover:text-amber-700 font-medium truncate"
                    >
                      • {d.name}
                    </Link>
                  ))}
                  <div className="col-span-2 pt-1 border-t border-slate-200">
                    <Link
                      href="/telangana"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-bold text-amber-700 hover:underline block text-center"
                    >
                      Explore All Telangana Locations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Extra Navigation links */}
            <div className="pt-3 border-t border-slate-100 space-y-1">
              <Link
                href="/gold-valuation-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Valuation Guide & Calculator
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Contact & Branches
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Location Search Modal */}
      {searchModalOpen && (
        <LocationSearchModal
          onClose={() => setSearchModalOpen(false)}
        />
      )}

      {/* GPS Auto-Location Detector Modal */}
      {gpsModalOpen && (
        <GPSAutoLocationDetector
          showModalOnly={true}
          onClose={() => setGpsModalOpen(false)}
        />
      )}
    </header>
  );
}
