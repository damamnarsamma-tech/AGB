import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, Sparkles, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import LiveRateCTA from './LiveRateCTA';

import { SERVICES, PRECIOUS_METALS } from '@/lib/services';
import { getAllStates } from '@/lib/location-service';

export default function Footer() {
  const states = getAllStates();
  const apState = states.find(s => s.slug === 'andhra-pradesh');
  const tgState = states.find(s => s.slug === 'telangana');

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs pb-16 lg:pb-0 font-sans">
      {/* Upper Footer: Value Props & Numbers */}
      <div className="bg-slate-950 border-b border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Non-Destructive Assaying</div>
              <p className="text-slate-400 text-xs mt-0.5">High-precision XRF laser analysis with zero chemical acid and no metal damage.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Live Bullion Spot Pricing</div>
              <p className="text-slate-400 text-xs mt-0.5">Real-time market rate benchmarking for 24K, 22K 916, 18K, and fine silver.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Direct Bank Settlement</div>
              <p className="text-slate-400 text-xs mt-0.5">Immediate IMPS, UPI, RTGS, or cash settlement upon verification.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Doorstep &amp; Branch Coverage</div>
              <p className="text-slate-400 text-xs mt-0.5">Serving customers across Andhra Pradesh and Telangana.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info & Physical Branches */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Akshaya Gold Buyers Home">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center font-black text-base">
                A
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {BRAND.name.toUpperCase()}
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {BRAND.shortDescription}
            </p>

            {/* Verified Physical Branch Hubs */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Verified Physical Branch Hubs:
              </div>
              {BRAND.branches.map(branch => (
                <div key={branch.id} className="text-[11px] text-slate-300">
                  <span className="font-bold text-white">{branch.name}:</span>
                  <div className="text-slate-400 text-[10px]">{branch.address}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Primary Helpline: </span>
                <a href={`tel:${BRAND.phone1Raw}`} className="text-amber-400 font-bold hover:underline">
                  {BRAND.phone1Display}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Alternate Helpline: </span>
                <a href={`tel:${BRAND.phone2Raw}`} className="text-slate-200 font-bold hover:underline">
                  {BRAND.phone2Display}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Primary WhatsApp: </span>
                <LiveRateCTA variant="footer" label={BRAND.phone1Display} />
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:underline">
                  {BRAND.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-amber-400">
              <Link href="/services" className="hover:underline">Gold Buying Services</Link>
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="hover:text-amber-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link href="/pledged-gold-calculator" className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1">
                  <span>Pledged Gold Calculator</span>
                  <span className="text-[9px] bg-amber-500 text-slate-950 font-black px-1 rounded">NEW</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Precious Metals & Tools */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-amber-400">
              Precious Metals &amp; Tools
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              {PRECIOUS_METALS.map(m => (
                <li key={m.id}>
                  <Link href={`/metals/${m.id}`} className="hover:text-amber-400 transition-colors">
                    {m.name} Valuation
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link href="/gold-valuation-calculator" className="text-amber-300 hover:text-amber-200 font-medium">
                  Gold Rate Calculator
                </Link>
              </li>
              <li>
                <Link href="/gold-rate" className="text-amber-300 hover:text-amber-200 font-medium">
                  Today&apos;s Gold Rate (22K/24K)
                </Link>
              </li>
              <li>
                <Link href="/#customer-success-stories-section" className="hover:text-slate-200">
                  Customer Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-slate-200">
                  Gold Selling FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-200">
                  About Akshaya Gold Buyers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: State Coverage Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-amber-400">
              States Coverage
            </h4>
            <div className="space-y-3">
              <div>
                <Link href="/andhra-pradesh" className="font-semibold text-slate-200 hover:text-amber-400 block">
                  Andhra Pradesh
                </Link>
                <span className="text-[11px] text-slate-400">Serving customers across Andhra Pradesh</span>
              </div>
              <div>
                <Link href="/telangana" className="font-semibold text-slate-200 hover:text-amber-400 block">
                  Telangana
                </Link>
                <span className="text-[11px] text-slate-400">Serving customers across Telangana</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-400 block text-[11px]">Sitemap &amp; AI Manifest:</span>
                <div className="flex gap-2 flex-wrap text-[11px] text-amber-400/90 mt-1">
                  <a href="/sitemap.xml" target="_blank" className="hover:underline font-bold text-amber-300">
                    Main Sitemap (XML)
                  </a>
                  <span>•</span>
                  <a href="/llms.txt" target="_blank" className="hover:underline text-amber-300 font-bold">
                    llms.txt
                  </a>
                  <span>•</span>
                  <a href="/llms-full.txt" target="_blank" className="hover:underline text-amber-300 font-bold">
                    llms-full.txt
                  </a>
                  <span>•</span>
                  <Link href="/admin/diagnostics" className="hover:underline text-emerald-400 font-bold">
                    SEO Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* District Mega Link Directory (SEO & Crawlability) */}
        <div className="mt-12 pt-8 border-t border-slate-800 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Andhra Pradesh Districts
              </span>
              <Link href="/andhra-pradesh" className="text-[11px] text-slate-400 hover:text-amber-400">
                Explore all AP towns →
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
              {apState?.districts.map(d => (
                <Link key={d.url} href={d.url} className="hover:text-amber-400 transition-colors">
                  {d.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Telangana Districts
              </span>
              <Link href="/telangana" className="text-[11px] text-slate-400 hover:text-amber-400">
                Explore all TG towns →
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
              {tgState?.districts.map(d => (
                <Link key={d.url} href={d.url} className="hover:text-amber-400 transition-colors">
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal & Compliance Notice */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>Statutory Compliance Notice:</strong> {BRAND.name} complies with all applicable Reserve Bank of India (RBI), Prevention of Money Laundering Act (PMLA), and Indian Income Tax regulations. Mandatory KYC verification (Aadhaar / PAN / Govt Photo ID) is conducted for all gold selling transactions. Gold loan closure services are conducted strictly in assistance with legitimate financial institutions and pawn brokers.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-slate-400">
            <div>
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Registered Office: {BRAND.headOffice.street}, {BRAND.headOffice.city}, {BRAND.headOffice.state}.
            </div>
            <div className="flex gap-4">
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/faq" className="hover:underline">FAQs</Link>
              <Link href="/gold-rate" className="hover:underline">Gold Rates</Link>
              <Link href="/admin/competitor-intelligence" className="hover:underline text-amber-400 font-medium">Competitor Matrix</Link>
              <Link href="/admin" className="hover:underline text-amber-500 font-bold">Admin Panel</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
