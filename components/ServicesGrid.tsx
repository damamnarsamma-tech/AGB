import React from 'react';
import Link from 'next/link';
import { Sparkles, Coins, Gem, ShieldAlert, Award, LockKeyhole, Scale, CircleDot, Layers, ArrowRight, ArrowRightLeft, RefreshCw } from 'lucide-react';
import { SERVICES } from '@/lib/services';
import { generateCanonicalRoute } from '@/lib/route-registry';

interface ServicesGridProps {
  locationName?: string;
  locationPath?: string;
  limit?: number;
}

const iconMap: Record<string, any> = {
  Coins,
  Gem,
  Sparkles,
  ShieldAlert,
  Award,
  LockKeyhole,
  Scale,
  CircleDot,
  Layers,
  ArrowRightLeft,
  RefreshCw
};

export default function ServicesGrid({ locationName, locationPath, limit }: ServicesGridProps) {
  const loc = locationName ? `in ${locationName}` : 'in AP & Telangana';
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="py-14 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
            Verified Precious Metal Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Services Available {loc}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every service provides non-destructive XRF laser assay testing, calibrated weight precision, live spot valuation, and direct settlement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map(service => {
            const Icon = iconMap[service.iconName] || Coins;
            const targetUrl = generateCanonicalRoute({
              service: service.slug,
              location: locationPath
            });

            return (
              <div
                key={service.id}
                className="bg-slate-50 border border-slate-200 hover:border-amber-500 rounded-xl p-6 flex flex-col justify-between group transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                      Direct Settlement
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {service.name} {locationName ? `in ${locationName}` : ''}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.summary}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200 text-xs text-slate-700 mb-4">
                    {service.features.slice(0, 3).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></span>
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={targetUrl}
                  className="inline-flex items-center justify-between w-full py-2.5 px-3 bg-white hover:bg-amber-50 text-amber-700 hover:text-amber-800 text-xs font-bold rounded-lg border border-slate-200 hover:border-amber-500 transition-all shadow-2xs"
                >
                  <span>Explore {service.shortTitle} Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
