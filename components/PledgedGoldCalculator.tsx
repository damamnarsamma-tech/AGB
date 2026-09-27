'use client';

import React, { useState, useMemo } from 'react';
import {
  Scale,
  Building2,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { PURITY_STANDARDS } from '@/lib/gold-rates';
import { LENDER_DATABASE } from '@/lib/competitor-data';

interface PledgedGoldCalculatorProps {
  locationName?: string;
  defaultLenderId?: string;
}

export default function PledgedGoldCalculator({
  locationName = 'Andhra Pradesh & Telangana',
  defaultLenderId = 'muthoot-finance'
}: PledgedGoldCalculatorProps) {
  // Calculator Inputs
  const [selectedLenderId, setSelectedLenderId] = useState<string>(defaultLenderId);
  const [weightGrams, setWeightGrams] = useState<number>(30);
  const [karatKey, setKaratKey] = useState<string>('22k');
  const [loanPrincipal, setLoanPrincipal] = useState<number>(120000);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState<number>(1.75); // 1.75% per month typical NBFC
  const [monthsPending, setMonthsPending] = useState<number>(6);
  const [stoneWeightDeduction, setStoneWeightDeduction] = useState<number>(0);
  const [teluguToggle, setTeluguToggle] = useState<boolean>(false);

  // Reference Benchmark Gold Rates (per gram)
  const current22kRate = 7850;
  const current24kRate = 8560;
  const current18kRate = 6420;

  const currentRatePerGram = useMemo(() => {
    switch (karatKey) {
      case '24k':
        return current24kRate;
      case '22k':
        return current22kRate;
      case '18k':
        return current18kRate;
      case '14k':
        return 4990;
      default:
        return current22kRate;
    }
  }, [karatKey]);

  // Handle lender switch with smart defaults
  const handleLenderChange = (lenderId: string) => {
    setSelectedLenderId(lenderId);
    if (lenderId === 'muthoot-finance' || lenderId === 'manappuram-finance') {
      setMonthlyInterestRate(1.75);
    } else if (lenderId === 'iifl-finance') {
      setMonthlyInterestRate(1.5);
    } else if (lenderId === 'nationalized-banks') {
      setMonthlyInterestRate(0.85); // Bank agricultural/standard gold loan
    } else if (lenderId === 'grameena-banks') {
      setMonthlyInterestRate(0.95);
    }
  };

  // Calculations
  const netGoldWeight = Math.max(0, weightGrams - stoneWeightDeduction);
  const estimatedGoldValue = Math.round(netGoldWeight * currentRatePerGram);

  // Accrued simple/compounding interest approximation
  const totalAccruedInterest = Math.round(loanPrincipal * (monthlyInterestRate / 100) * monthsPending);
  const estimatedTotalLoanPayoff = loanPrincipal + totalAccruedInterest;

  // Surplus cash to customer
  const estimatedCustomerSurplus = estimatedGoldValue - estimatedTotalLoanPayoff;

  // LTV (Loan-To-Value) percentage
  const ltvPercent = estimatedGoldValue > 0 ? Math.round((estimatedTotalLoanPayoff / estimatedGoldValue) * 100) : 0;
  const isAuctionRisk = ltvPercent >= 75;

  const selectedLender = LENDER_DATABASE.find(l => l.id === selectedLenderId) || LENDER_DATABASE[0];

  const waMessage = encodeURIComponent(
    `Hello Akshaya Gold Buyers, I would like assistance releasing my pledged gold.\n` +
    `Lender: ${selectedLender.name}\n` +
    `Est. Gold Weight: ${weightGrams}g (${karatKey.toUpperCase()})\n` +
    `Loan Principal: ₹${loanPrincipal.toLocaleString('en-IN')}\n` +
    `Est. Surplus Payout: ₹${estimatedCustomerSurplus.toLocaleString('en-IN')}\n` +
    `Location: ${locationName}`
  );

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg space-y-8">
      {/* Header & Language Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5 text-amber-600" />
            <span>Pledged Gold &amp; Loan Settlement Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {teluguToggle ? 'బంగారు లోన్ విడిపించే క్యాలిక్యులేటర్' : 'Pledged Gold Release & Net Cash Surplus Calculator'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {teluguToggle
              ? 'మీ బ్యాంక్/ఫైనాన్స్ లోన్ మొత్తం, వడ్డీ లెక్కించి మీ మిగులు క్యాష్ ఎంతో వెంటనే తెలుసుకోండి.'
              : `Calculate exact bank payoff dues, current market valuation, and your instant cash surplus for ${locationName}.`}
          </p>
        </div>

        <button
          onClick={() => setTeluguToggle(!teluguToggle)}
          className="self-start sm:self-center px-3.5 py-1.5 rounded-lg border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
        >
          <span>🌐</span>
          <span>{teluguToggle ? 'View in English' : 'తెలుగులో చూడండి'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Financier / Lender */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. {teluguToggle ? 'బంగారం తాకట్టు పెట్టిన సంస్థను ఎంచుకోండి' : 'Select Pledged Financier / Bank'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {LENDER_DATABASE.map(lender => (
                <button
                  key={lender.id}
                  type="button"
                  onClick={() => handleLenderChange(lender.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedLenderId === lender.id
                      ? 'border-amber-500 bg-amber-50/70 text-slate-950 font-bold ring-1 ring-amber-500 shadow-xs'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold truncate">{lender.name}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 truncate">{lender.category}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Weight & Karat Purity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                2. {teluguToggle ? 'బంగారం బరువు (గ్రాములలో)' : 'Gross Gold Weight (Grams)'}
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="5000"
                  step="0.1"
                  value={weightGrams || ''}
                  onChange={e => setWeightGrams(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="e.g. 30"
                />
                <span className="absolute right-3.5 top-2.5 text-xs text-slate-500 font-medium">grams</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                3. {teluguToggle ? 'బంగారం క్యారెట్ నాణ్యత' : 'Purity / Karat Grade'}
              </label>
              <select
                value={karatKey}
                onChange={e => setKaratKey(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="22k">22 Karat (916 Hallmarked Jewellery) - ₹{current22kRate}/g</option>
                <option value="24k">24 Karat (999 Minted Bullion) - ₹{current24kRate}/g</option>
                <option value="18k">18 Karat (750 Studded Jewellery) - ₹{current18kRate}/g</option>
                <option value="14k">14 Karat (585 Jewellery) - ₹4,990/g</option>
              </select>
            </div>
          </div>

          {/* Step 3: Loan Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                4. {teluguToggle ? 'అసలు లోన్ మొత్తం (₹)' : 'Principal Loan (₹)'}
              </label>
              <input
                type="number"
                min="5000"
                max="5000000"
                step="1000"
                value={loanPrincipal || ''}
                onChange={e => setLoanPrincipal(parseInt(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                placeholder="120000"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                5. {teluguToggle ? 'నెలవారీ వడ్డీ శాతం (%)' : 'Monthly Interest %'}
              </label>
              <input
                type="number"
                min="0.5"
                max="5"
                step="0.05"
                value={monthlyInterestRate || ''}
                onChange={e => setMonthlyInterestRate(parseFloat(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                placeholder="1.75"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                6. {teluguToggle ? 'వడ్డీ చెల్లించని నెలలు' : 'Months Unpaid'}
              </label>
              <input
                type="number"
                min="0"
                max="36"
                step="1"
                value={monthsPending || ''}
                onChange={e => setMonthsPending(parseInt(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                placeholder="6"
              />
            </div>
          </div>

          {/* Stone Weight Deduction Slider / Input */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-slate-700 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-600" />
                {teluguToggle ? 'రాళ్ళు లేదా ఎనామెల్ బరువు మినహాయింపు' : 'Stone / Wax / Enamel Deduction (Grams)'}
              </span>
              <span className="font-bold text-amber-800">{stoneWeightDeduction} grams deducted</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-2">
              {teluguToggle
                ? 'హర్ష గోల్డ్ బయర్స్ వద్ద 0% కరుగుదల నష్టం (Zero Melting Loss). కేవలం రాళ్ళు మరియు లక్క బరువు మాత్రమే నిజాయితీగా తీసివేయబడుతుంది.'
                : 'Akshaya Gold Buyers never charges melting loss. We only deduct actual non-gold stone or wax weight.'}
            </p>
            <input
              type="range"
              min="0"
              max={Math.min(25, weightGrams * 0.4)}
              step="0.5"
              value={stoneWeightDeduction}
              onChange={e => setStoneWeightDeduction(parseFloat(e.target.value) || 0)}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Output Valuation Breakdown */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-amber-500/20 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider pb-3 border-b border-stone-800">
              <span>{teluguToggle ? 'విలువ విశ్లేషణ నివేదిక' : 'Settlement Estimation Summary'}</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                Live MCX Benchmark
              </span>
            </div>

            {/* Total Gold Value */}
            <div className="space-y-1">
              <div className="text-xs text-stone-400">
                {teluguToggle ? 'మొత్తం బంగారం ప్రస్తుత మార్కెట్ విలువ' : 'Current Market Gold Valuation'} ({netGoldWeight.toFixed(2)}g @ ₹{currentRatePerGram}/g):
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                ₹{estimatedGoldValue.toLocaleString('en-IN')}
              </div>
            </div>

            {/* Total Loan Payoff Due */}
            <div className="space-y-1 pt-2 border-t border-stone-800">
              <div className="text-xs text-stone-400 flex items-center justify-between">
                <span>{teluguToggle ? 'బ్యాంక్/సంస్థకు చెల్లించాల్సిన మొత్తం' : 'Total Payoff Dues to Lender'}</span>
                <span className="text-rose-400 font-bold">Principal + Interest</span>
              </div>
              <div className="text-xl font-bold text-rose-300">
                - ₹{estimatedTotalLoanPayoff.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-stone-400">
                (Principal: ₹{loanPrincipal.toLocaleString('en-IN')} + Accrued Interest: ₹{totalAccruedInterest.toLocaleString('en-IN')})
              </div>
            </div>

            {/* NET CASH SURPLUS TO CUSTOMER */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
              <div className="text-xs uppercase font-extrabold tracking-wider text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{teluguToggle ? 'మీకు లభించే నికర నగదు మిగులు' : 'Estimated Net Cash Surplus to You'}</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white">
                ₹{Math.max(0, estimatedCustomerSurplus).toLocaleString('en-IN')}
              </div>
              <p className="text-[11px] text-amber-200/80 leading-relaxed">
                {teluguToggle
                  ? 'హర్ష గోల్డ్ బయర్స్ మీ బ్యాంకుకు వెళ్లి పూర్తి లోన్ చెల్లించి, నగలను విడిపించి, ఈ మిగులు మొత్తాన్ని మీకు స్పాట్‌లోనే అందజేస్తుంది.'
                  : 'Akshaya Gold Buyers clears the loan at your lender branch counter and pays you this surplus immediately.'}
              </p>
            </div>

            {/* Auction Risk Warning if LTV high */}
            {isAuctionRisk && (
              <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-rose-300 uppercase">
                    {teluguToggle ? 'హెచ్చరిక: వేలం ప్రమాదం!' : 'High Auction Risk Notice:'}
                  </span>{' '}
                  {teluguToggle
                    ? `మీ లోన్ బకాయిలు బంగారం విలువలో ${ltvPercent}% కి చేరాయి. ఫైనాన్స్ సంస్థ వేలం వేయకముందే విడిపించుకోండి.`
                    : `Outstanding dues are at ${ltvPercent}% of gold value. Lenders initiate auction notices when dues reach 75-80%. Act immediately to preserve your equity.`}
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <a
              href={`https://wa.me/${BRAND.whatsapp1}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>{teluguToggle ? 'వాట్సాప్‌లో అసిస్టెన్స్ పొందండి' : 'WhatsApp Settlement Desk'}</span>
            </a>

            <a
              href={`tel:${BRAND.phone1Raw}`}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>{teluguToggle ? 'హర్ష గోల్డ్ హెల్ప్‌లైన్: కాల్ చేయండి' : `Call Desk: ${BRAND.phone1Display}`}</span>
            </a>

            <p className="text-[10px] text-stone-400 text-center">
              * Final valuation depends on physical verification, exact bank foreclosure slip, and certified XRF laser purity test.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
