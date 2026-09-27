import React from 'react';
import Link from 'next/link';
import { LockKeyhole, ArrowRight, Phone, MessageCircle, ShieldAlert, CheckCircle2, Banknote } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import LiveRateCTA from './LiveRateCTA';


interface PledgedGoldProps {
  locationName?: string;
}

export default function PledgedGoldReleaseCard({ locationName }: PledgedGoldProps) {
  const loc = locationName || 'your area';

  return (
    <div
      id="pledged-gold-closure-section"
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
            <LockKeyhole className="w-3.5 h-3.5" />
            <span>Pledged Gold Loan Closure &amp; Release</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
            Unable to Clear Pledged Gold Loan in <span className="text-amber-400">{loc}</span>? We Help You Release &amp; Liquidate with Maximum Profit.
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            High compounding interest or overdue notice from <strong>Muthoot Finance, Manappuram, IIFL, Rupeek, SBI, HDFC, or Pawnbrokers</strong> risking your gold to auction? Akshaya Gold Buyers assists you by clearing the loan balance directly with the lender, safely retrieving your ornaments, and paying you the surplus cash on the spot.
          </p>

          <div className="pt-2">
            <Link
              href="/pledged-gold-calculator"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-bold transition"
            >
              <span>Calculate Your Loan Surplus Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>We pay outstanding bank loan amount directly</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Executive accompanies you to lender branch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full legal transparency &amp; signed receipts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant balance payout to you in minutes</span>
            </div>
          </div>
        </div>

        <div className="lg:w-80 bg-slate-950 border border-slate-800 rounded-xl p-5 shrink-0 flex flex-col justify-between space-y-4 shadow-sm">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Immediate Assistance Desk
            </span>
            <div className="text-lg font-bold text-white">Release Pledged Gold Today</div>
            <p className="text-xs text-slate-400 mt-1">
              Send your pledge receipt photo on WhatsApp for instant surplus value calculation.
            </p>
          </div>

          <div className="space-y-2">
            <LiveRateCTA
              variant="primary"
              className="w-full flex items-center justify-center gap-2 !py-3 !px-4 !text-xs sm:!text-sm"
              locationName={locationName}
              serviceName="Pledged Gold Release"
            />

            <a
              id="pledged-gold-call-btn"
              href={`tel:${BRAND.phone1Raw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs sm:text-sm rounded-xl uppercase tracking-wider transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BRAND.phone1Display}</span>
            </a>
          </div>

          <div className="text-[11px] text-slate-400 text-center font-medium">
            Zero upfront payment required from customer.
          </div>
        </div>
      </div>
    </div>
  );
}
