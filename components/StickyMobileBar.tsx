'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, FileText, Scale } from 'lucide-react';
import { CONTACT_CONFIG, buildWhatsAppLink } from '@/lib/contact-config';
import LiveRateCTA from './LiveRateCTA';

interface StickyMobileBarProps {
  locationName?: string;
}

export default function StickyMobileBar({ locationName }: StickyMobileBarProps) {
  const locText = locationName || 'AP & Telangana';

  const handleOpenEnquiry = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('kgb:open-enquiry'));
    }
  };

  return (
    <div
      id="sticky-mobile-action-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg flex items-center justify-between gap-2"
    >
      {/* Direct Call Button */}
      <a
        id="mobile-sticky-call-btn"
        href={CONTACT_CONFIG.phone1Tel}
        className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-3 px-2 bg-amber-500 active:bg-amber-600 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-xs transition-all touch-manipulation"
      >
        <Phone className="w-3.5 h-3.5 fill-slate-950 shrink-0" />
        <span className="truncate">Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <LiveRateCTA
        variant="primary"
        className="flex-1 min-w-0 !py-3 !px-2 !rounded-xl !text-xs shadow-xs"
        locationName={locationName}
      />

      {/* Enquire Modal Trigger */}
      <button
        id="mobile-sticky-enquire-btn"
        type="button"
        onClick={handleOpenEnquiry}
        className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-3 px-2 bg-slate-900 active:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all touch-manipulation cursor-pointer"
      >
        <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="truncate">Enquire</span>
      </button>

      {/* Calculator Link */}
      <Link
        id="mobile-sticky-calculator-btn"
        href="/gold-valuation-calculator"
        className="flex items-center justify-center p-3 bg-slate-100 text-slate-700 rounded-xl border border-slate-200 active:bg-slate-200 transition-colors shrink-0"
        title="Gold Rate Calculator"
        aria-label="Gold Rate Calculator"
      >
        <Scale className="w-4 h-4 text-amber-600" />
      </Link>
    </div>
  );
}
