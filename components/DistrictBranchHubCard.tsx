'use client';

import React from 'react';
import { Building2, MapPin, Phone, MessageCircle, Navigation, ShieldCheck, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { BranchHub, BRAND } from '@/lib/brand';

interface DistrictBranchHubCardProps {
  branch: BranchHub;
  locationName?: string;
  isCityOrTown?: boolean;
  className?: string;
}

export default function DistrictBranchHubCard({
  branch,
  locationName,
  isCityOrTown = false,
  className = ''
}: DistrictBranchHubCardProps) {
  if (!branch) return null;

  const encodedMessage = encodeURIComponent(
    `Hello Akshaya Gold Buyers, I am inquiring from ${locationName || branch.city} about precious metals valuation at your ${branch.district} District Branch Hub.`
  );
  const waUrl = `https://wa.me/${branch.phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
  const telUrl = `tel:${branch.phone.replace(/[^0-9]/g, '')}`;
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`;

  return (
    <div
      className={`bg-white border-2 border-amber-300/80 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all space-y-6 relative overflow-hidden ${className}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Top Header Badge & District Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-amber-950 text-[10px] font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-700" />
              <span>{isCityOrTown ? 'Official City Physical Branch' : 'Dedicated District Physical Branch Hub'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1" itemProp="name">
              {branch.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            {branch.district} District {branch.isFlagship ? '• Flagship Hub' : ''}
          </span>
        </div>
      </div>

      {/* Address & Direct Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Left Column: Street Address, Timings, & Assaying */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block text-sm">Physical Address:</span>
              <p className="text-slate-600 leading-relaxed mt-0.5" itemProp="address">
                {branch.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5 text-xs">
              <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Timings:</span>
                <span className="text-slate-600">{branch.timings}</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/80 flex items-start gap-2.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-950 block">Testing Assayer:</span>
                <span className="text-emerald-800 font-medium">German XRF Laser (0% Melting Loss)</span>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-md text-amber-900 border border-amber-200">
              <CheckCircle2 className="w-3 h-3 text-amber-600" />
              Live Spot Bullion Pricing
            </span>
            <span className="inline-flex items-center gap-1 bg-blue-50 px-2.5 py-1 rounded-md text-blue-900 border border-blue-200">
              <CheckCircle2 className="w-3 h-3 text-blue-600" />
              Instant Bank IMPS / UPI
            </span>
            <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md text-slate-900 border border-slate-200">
              <CheckCircle2 className="w-3 h-3 text-slate-600" />
              Pledged Gold Release Escort
            </span>
          </div>
        </div>

        {/* Right Column: Instant CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 block">
              Direct Branch Desk Support
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              {branch.phone}
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Available 7 days a week for walk-ins, spot valuations, and doorstep appointments.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={telUrl}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Branch</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Directions to Branch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
