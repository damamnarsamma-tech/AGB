'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Phone,
  X,
  Sparkles,
  ShieldCheck,
  FileText,
  Check
} from 'lucide-react';
import { BRAND } from '@/lib/brand';
import { CONTACT_CONFIG, buildWhatsAppLink } from '@/lib/contact-config';
import { resolvePageContext } from '@/lib/universal-engine';
import LiveRateCTA from './LiveRateCTA';

export default function ContactPopup() {
  const pathname = usePathname() || '';
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // 1. Resolve current page context dynamically
  const resolved = resolvePageContext({ pathname });
  const loc = resolved.location;
  const locationSlug = loc?.localitySlug || loc?.mandalSlug || loc?.districtSlug || loc?.stateSlug || 'global';
  const locationName = loc?.displayName || 'AP & Telangana';
  const serviceName = resolved.service?.name || 'Gold Valuation';

  // 2. Setup automatic page-load popup per location session
  useEffect(() => {
    // Check session storage
    try {
      const seen = sessionStorage.getItem(`akshaya_popup_seen_${locationSlug}`);
      if (!seen) {
        // Trigger popup with 1.5s delay
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsOpen(false);
        }, 0);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // fallback
    }
  }, [pathname, locationSlug]);

  // 3. Listen to global enquiry form events
  useEffect(() => {
    const handleOpenEnquiry = () => {
      setIsOpen(false);
      setIsEnquiryModalOpen(true);
    };

    window.addEventListener('kgb:open-enquiry', handleOpenEnquiry);
    return () => {
      window.removeEventListener('kgb:open-enquiry', handleOpenEnquiry);
    };
  }, []);

  const handleClosePopup = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(`akshaya_popup_seen_${locationSlug}`, 'true');
    } catch (e) {}
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setSubmitted(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message || '',
          location: locationName,
          service: serviceName,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry via API');
      }
    } catch (err) {
      console.error("Error saving enquiry:", err);
      // Fallback to direct Firestore if API fails (optional, but keep it simple for now)
    }

    // Direct WhatsApp redirect after submit
    const customWaLink = buildWhatsAppLink({
      location: locationName,
      service: serviceName
    });

    setTimeout(() => {
      window.open(customWaLink, '_blank');
      handleCloseEnquiry();
    }, 1200);
  };

  // Popup titles
  const headline = loc
    ? `Looking to Sell Gold in ${locationName}?`
    : `Precious Metals Valuation Desk`;
  
  const subheadline = loc
    ? `Get instant spot market valuation in ${locationName} with 100% transparent German XRF laser purity testing and direct bank payout.`
    : `Connect with our evaluation desk for spot valuation, non-destructive purity testing, and direct IMPS settlement.`;

  return (
    <>
      {/* 1. Page-Load Contact Popup */}
      {isOpen && (
        <div
          id="contact-popup-container"
          className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-sm w-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-5 text-slate-900 animate-in fade-in slide-in-from-bottom-5 duration-300 font-sans"
          role="dialog"
          aria-labelledby="contact-popup-title"
        >
          {/* Close Button */}
          <button
            id="contact-popup-close-btn"
            onClick={handleClosePopup}
            className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Dismiss help popup"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon & Title */}
          <div className="flex items-start gap-3 mb-3 pr-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shrink-0 shadow-xs text-slate-950 font-black">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                Akshaya Gold Buyers Desk
              </span>
              <h3 id="contact-popup-title" className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                {headline}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            {subheadline}
          </p>

          {/* Actions */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {/* Call Button */}
              <a
                id="contact-popup-call-btn"
                href={CONTACT_CONFIG.phone1Tel}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call Desk</span>
              </a>

              {/* Dynamic LiveRateCTA Button */}
              <LiveRateCTA
                variant="primary"
                className="!py-2.5 !px-3 !rounded-xl !text-xs shadow-xs text-center !w-full"
                locationName={locationName}
                serviceName={serviceName}
              />
            </div>

            {/* Request Callback Trigger */}
            <button
              id="contact-popup-callback-btn"
              onClick={() => {
                setIsOpen(false);
                setIsEnquiryModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>Request Callback</span>
            </button>
          </div>

          {/* Footer Assurances */}
          <div className="mt-3.5 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-600">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              0% Melting Loss • Certified Assaying
            </span>
            <button
              onClick={handleClosePopup}
              className="text-slate-600 hover:text-slate-900 underline font-medium cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* 2. Global Enquiry Form Modal */}
      {isEnquiryModalOpen && (
        <div
          id="enquiry-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200 font-sans"
        >
          <div
            id="enquiry-modal-card"
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 text-slate-900 relative my-8 animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              id="enquiry-modal-close-btn"
              onClick={handleCloseEnquiry}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close Enquiry Form"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="enquiry-modal-title" className="text-xl font-black text-slate-900">
                      Request Gold Valuation &amp; Callback
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Get immediate callback &amp; live rates for {locationName}.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                  {/* Name */}
                  <div>
                    <label htmlFor="enquiry-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="enquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="enquiry-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Message / Enquiry Details
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. I have 24g of 22K gold jewellery to evaluate"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="enquiry-submit-btn"
                    type="submit"
                    className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit &amp; Open WhatsApp</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Enquiry Submitted Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Connecting you directly with our valuation desk on WhatsApp. Please stand by...
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
