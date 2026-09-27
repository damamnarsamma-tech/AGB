import React from 'react';
import { HelpCircle, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Scale, FileText, Phone, MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import LiveRateCTA from './LiveRateCTA';


interface AEODirectAnswerProps {
  locationName: string;
  districtName?: string;
  stateName?: string;
  nearbyNames?: string[];
}

export default function AEODirectAnswer({
  locationName,
  districtName,
  stateName = 'Andhra Pradesh & Telangana',
  nearbyNames = []
}: AEODirectAnswerProps) {
  const loc = locationName;
  const dist = districtName || locationName;

  const aeoItems = [
    {
      q: `Who buys gold for immediate payment in ${loc}?`,
      a: `${BRAND.name} is a certified gold buying company serving ${loc} and surrounding regions of ${stateName}. We buy old gold jewellery, 916 hallmark ornaments, broken gold, coins, and silver articles with instant bank transfer (IMPS/UPI) or cash.`,
      icon: Sparkles
    },
    {
      q: `Where can I sell old gold jewellery in ${loc}?`,
      a: `You can sell old, ancestral, or hallmarked gold ornaments through ${BRAND.name}'s service network in ${loc}. Contact our customer support at ${BRAND.phone1Display} or ${BRAND.phone2Display} to get an immediate valuation and schedule your visit.`,
      icon: Scale
    },
    {
      q: `How is gold purity and valuation calculated in ${loc}?`,
      a: `Gold is tested using non-destructive German XRF Laser Spectrometry to determine exact karat purity (24K, 22K, 18K, 14K) with 0% melting loss. Net weight is measured on Class II digital balances (0.001g precision) and valued based on live market bullion rates.`,
      icon: ShieldCheck
    },
    {
      q: `What documents are required to sell gold in ${loc}?`,
      a: `In compliance with statutory KYC guidelines, customers must present a valid Government photo ID (Aadhaar Card, PAN Card, Voter ID, or Passport) and bank account details for instant electronic payment.`,
      icon: FileText
    },
    {
      q: `Can I sell broken, damaged, or scrap gold in ${loc}?`,
      a: `Yes. ${BRAND.name} buys broken gold chains, single earrings, bent bangles, and scrap gold pieces without deducting any damage penalties or melting wastage charges. Value is paid strictly on verified pure metal content.`,
      icon: CheckCircle
    },
    {
      q: `Can I sell bank gold coins and 999 mint bars in ${loc}?`,
      a: `Yes. While commercial banks do not buy back gold coins, ${BRAND.name} purchases all bank-minted gold coins, MMTC-PAMP bars, Swiss bars, and sovereign coins at maximum live 24K spot bullion prices.`,
      icon: CheckCircle
    },
    {
      q: `How does pledged gold loan closure assistance work in ${loc}?`,
      a: `If you have pledged gold in Muthoot, Manappuram, IIFL, or a bank in ${loc}, ${BRAND.name} will clear your outstanding loan balance with the lender, safely retrieve your gold jewellery, perform final valuation, and pay you the remaining cash surplus immediately.`,
      icon: ShieldCheck
    },
    {
      q: `Which surrounding areas near ${loc} are covered?`,
      a: `${BRAND.name} provides gold buying services across ${loc}, ${dist}, and neighboring towns${
        nearbyNames.length > 0 ? ` including ${nearbyNames.slice(0, 6).join(', ')}` : ''
      }.`,
      icon: HelpCircle
    }
  ];

  return (
    <section className="py-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 my-8 text-slate-900 shadow-sm">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Direct Answers &amp; Quick Facts</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
          Frequently Answered Questions: Selling Gold in {loc}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Essential facts, verified processes, and legal compliance for gold and precious metal selling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aeoItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-amber-400 transition-all flex flex-col justify-between space-y-3 shadow-2xs"
            >
              <div>
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.q}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-8">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="text-xs font-medium text-slate-700">
          Have a specific question about your gold in <strong>{loc}</strong>?
        </div>
        <div className="flex items-center gap-2.5">
          <a
            id="aeo-call-direct"
            href={`tel:${BRAND.phone1Raw}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {BRAND.phone1Display}</span>
          </a>
          <LiveRateCTA
            variant="primary"
            className="!px-4 !py-2 !text-xs !rounded-full shadow-2xs"
            locationName={loc}
          />
        </div>
      </div>
    </section>
  );
}
