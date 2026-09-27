import React from 'react';
import { Sparkles, Scale, Banknote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BRAND } from '@/lib/brand';

export default function TransparentProcess() {
  const steps = [
    {
      num: '01',
      title: 'Walk In or Doorstep Valuation',
      desc: 'Bring your gold, silver, or pledged gold receipts along with a valid Govt Photo ID (Aadhaar / PAN).',
      icon: Sparkles
    },
    {
      num: '02',
      title: 'Non-Destructive XRF Purity Test',
      desc: 'We analyze exact karat purity (14K to 24K) in customer presence using laboratory-grade XRF laser spectrometry. Non-destructive, with zero acid damage.',
      icon: ShieldCheck
    },
    {
      num: '03',
      title: 'Certified Computerized Weighing',
      desc: 'Net metal weight measured on Class II electronic laboratory balances accurate to 0.001g, transparently visible on customer screen.',
      icon: Scale
    },
    {
      num: '04',
      title: 'Instant Bank Transfer or Cash',
      desc: 'Valuation calculated against live bullion market rate. Full funds transferred to your bank via IMPS/RTGS/UPI or spot cash within 5 minutes.',
      icon: Banknote
    }
  ];

  return (
    <section className="py-14 bg-slate-50 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
            100% Scientific &amp; Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            How The Gold Selling Process Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            No guesswork, no melting loss, no hidden commission. Complete valuation performed in front of you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(step => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white border border-slate-200 hover:border-amber-500 rounded-xl p-6 relative group transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-amber-600 transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-slate-700 shadow-xs">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Non-Destructive Testing
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            High-Precision XRF Laser Spectrometry
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Full Statutory KYC Compliance
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Direct Bank (IMPS/UPI) or Cash Settlement
          </span>
        </div>
      </div>
    </section>
  );
}
