import React from 'react';
import { Award, FlaskConical, Users, ShieldCheck } from 'lucide-react';

export default function TrustIndicators() {
  const indicators = [
    {
      id: 'trust-indicator-certified-buyers',
      title: 'Certified Gold Buyers',
      subtitle: 'Government KYC & statutory compliant precious metals valuation desk with official purity benchmark payouts.',
      badge: 'Govt. KYC Compliant',
      icon: Award
    },
    {
      id: 'trust-indicator-iso-testing',
      title: 'ISO Certified Testing',
      subtitle: 'Precision German XRF laser spectrometry delivering 100% non-destructive purity analysis with zero melting loss.',
      badge: 'Non-Destructive Assay',
      icon: FlaskConical
    },
    {
      id: 'trust-indicator-happy-customers',
      title: '150,000+ Happy Customers',
      subtitle: 'Over 1.5 lakh customers served across Andhra Pradesh and Telangana with instant direct settlements and 4.9★ ratings.',
      badge: '4.9★ Official Reviews',
      icon: Users
    }
  ];

  return (
    <section
      id="trust-indicators-section"
      className="bg-slate-50 border-b border-slate-200 py-8 lg:py-10"
      aria-label="Trust Indicators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Institutional Compliance &amp; Trust Pillars
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {indicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between transition-all hover:border-amber-400 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="inline-block text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">Audited &amp; Authenticated Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
