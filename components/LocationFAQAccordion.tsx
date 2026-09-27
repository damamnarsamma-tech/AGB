'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import LiveRateCTA from './LiveRateCTA';


interface FAQItem {
  q: string;
  a: string;
}

interface LocationFAQAccordionProps {
  locationName: string;
  faqs: FAQItem[];
}

export default function LocationFAQAccordion({ locationName, faqs }: LocationFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions in {locationName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Everything you need to know about purity testing, pricing, and documents.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`loc-faq-answer-${idx}`}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div id={`loc-faq-answer-${idx}`} className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact help prompt */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-2xs">
          <div className="text-slate-700 font-medium">
            Still have a question or need home valuation in <strong>{locationName}</strong>?
          </div>
          <div className="flex items-center gap-2">
            <a
              id="faq-call-btn"
              href={`tel:${BRAND.phone1Raw}`}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold uppercase tracking-wider text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Support</span>
            </a>
            <LiveRateCTA
              variant="primary"
              className="!px-4 !py-2 !text-xs !rounded-full shadow-2xs"
              locationName={locationName}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
