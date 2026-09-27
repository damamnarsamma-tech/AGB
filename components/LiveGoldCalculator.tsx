'use client';

import React, { useState } from 'react';
import { Scale, Sparkles, MessageCircle, Phone, ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { PURITY_STANDARDS, calculateFineMetalContent, PurityKey } from '@/lib/gold-rates';
import { BRAND } from '@/lib/brand';
import LiveRateCTA from './LiveRateCTA';


interface LiveGoldCalculatorProps {
  locationName?: string;
  defaultPurity?: PurityKey;
}

export default function LiveGoldCalculator({ locationName, defaultPurity = '22k' }: LiveGoldCalculatorProps) {
  const [weight, setWeight] = useState<number>(10);
  const [purity, setPurity] = useState<PurityKey>(defaultPurity);

  const { grossGrams, fineGrams, purityPercent, fineness, standard } = calculateFineMetalContent(weight, purity);
  const locTitle = locationName || 'Andhra Pradesh & Telangana';

  const quickWeights = [8, 10, 20, 50, 100];

  return (
    <div
      id="live-gold-valuation-assistant"
      className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden text-slate-900"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>Purity &amp; Fine Weight Calculator</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Gold &amp; Precious Metal Valuation Assistant
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Calculate your fine metal content and request a live market valuation in {locTitle}.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold text-slate-700">Non-Destructive German XRF Testing</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Input Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Karat Selection */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Metal &amp; Karat Purity
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.values(PURITY_STANDARDS).map(item => (
                <button
                  key={item.id}
                  id={`calc-purity-${item.id}`}
                  type="button"
                  onClick={() => setPurity(item.id as PurityKey)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    purity === item.id
                      ? 'bg-amber-50 border-2 border-amber-500 text-amber-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{item.shortLabel}</span>
                    {item.popular && (
                      <span className="text-[9px] bg-amber-500 text-slate-900 font-bold px-1.5 py-0.5 rounded">
                        Popular
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-600 block mt-0.5 truncate">{item.typicalUsage}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Weight in Grams Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="gold-weight-input" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Enter Gross Weight (in Grams)
              </label>
              <span className="text-xs text-amber-700 font-semibold">1 Sovereign = 8g • 1 Tola = 10g</span>
            </div>

            <div className="relative">
              <input
                type="number"
                id="gold-weight-input"
                min="0.1"
                step="0.1"
                value={weight || ''}
                onChange={e => setWeight(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-lg font-bold text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white pr-16"
                placeholder="e.g. 24.5"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-xs uppercase tracking-wider">
                GRAMS
              </span>
            </div>

            {/* Quick Weight Chips */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <span className="text-xs text-slate-600 font-medium">Quick Select:</span>
              {quickWeights.map(w => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWeight(w)}
                  className={`px-3 py-1 text-xs rounded-lg border font-bold transition-colors cursor-pointer ${
                    weight === w
                      ? 'bg-amber-500 text-slate-900 border-amber-500'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {w}g {w === 8 ? '(1 Sovereign)' : w === 10 ? '(1 Tola)' : ''}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Purity Breakdown</span>
              <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 0% Melting Loss
              </span>
            </div>

            <div className="py-5 text-center">
              <span className="text-xs text-slate-500 block mb-1 font-medium">
                Verified Pure Content for {grossGrams}g of {standard.name}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-amber-600 tracking-tight">
                {fineGrams} <span className="text-lg font-bold text-slate-700">Grams Fine Metal</span>
              </div>
              <span className="text-xs text-slate-500 font-semibold block mt-1">
                Fineness: {fineness}/1000 ({purityPercent}% Pure Content)
              </span>
            </div>

            <div className="space-y-2 py-3 border-t border-b border-slate-200 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span>Testing Method:</span>
                <span className="text-slate-900 font-bold">German XRF Laser Spectrometry</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Wastage / Making Deductions:</span>
                <span className="text-emerald-700 font-bold">ZERO Deductions</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment Mode:</span>
                <span className="text-slate-900 font-bold">Instant IMPS / UPI / Cash</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-5">
            <LiveRateCTA
              variant="primary"
              className="w-full flex items-center justify-center gap-2"
              locationName={locTitle}
              materialName={standard.name}
              serviceName="Gold Valuation"
            />

            <a
              id="calc-call-instant-btn"
              href={`tel:${BRAND.phone1Raw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs rounded-xl uppercase tracking-wider transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Valuation Desk ({BRAND.phone1Display})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
