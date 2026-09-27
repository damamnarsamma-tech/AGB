'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { BRAND } from '@/lib/brand';
import LiveRateCTA from './LiveRateCTA';

interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

interface CategoryGroup {
  categoryName: string;
  items: FAQItem[];
}

interface CategorizedFAQAccordionProps {
  locationName: string;
  categories: Record<string, CategoryGroup>;
}

export default function CategorizedFAQAccordion({ locationName, categories }: CategorizedFAQAccordionProps) {
  // We'll store open accordion indices as "categoryKey-itemIndex" strings to manage active states independently
  const [openId, setOpenId] = useState<string | null>('general-0');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-14 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Structured FAQ Base</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions &amp; Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Categorized knowledge base covering valuation, pledged gold release, and regional services in {locationName}.
          </p>
        </div>

        <div className="space-y-10">
          {Object.entries(categories).map(([catKey, group]) => (
            <div key={catKey} className="space-y-4">
              <h3 className="font-extrabold text-base sm:text-lg text-amber-800 border-l-4 border-amber-500 pl-3 uppercase tracking-wider">
                {group.categoryName}
              </h3>
              
              <div className="space-y-3">
                {group.items.map((item, idx) => {
                  const uniqueId = `${catKey}-${idx}`;
                  const isOpen = openId === uniqueId;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-2xs"
                    >
                      <button
                        onClick={() => toggle(uniqueId)}
                        aria-expanded={isOpen}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-sm sm:text-base leading-snug">{item.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-amber-700 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact help prompt */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-2xs">
          <div className="text-slate-700 font-medium">
            Still have a custom enquiry or need instant home evaluation in <strong>{locationName}</strong>?
          </div>
          <div className="flex items-center gap-2">
            <a
              id="faq-categorized-call-btn"
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
