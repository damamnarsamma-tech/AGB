'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MapPin, Phone, Home, ArrowRight, Calculator, Coins, Navigation } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BRAND } from '@/lib/brand';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-lg w-full text-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
          <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <MapPin className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
              404 — Page Not Found
            </span>
            <h1 className="text-3xl font-black text-slate-900">Looking for Gold Buyers?</h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              The page or location you requested could not be located. You will be automatically redirected to our homepage in{' '}
              <span className="font-bold text-amber-600">{countdown} seconds</span>.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Popular Quick Links</p>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <Link
                href="/andhra-pradesh"
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:text-amber-700 transition flex items-center justify-between"
              >
                <span>Andhra Pradesh</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/telangana"
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:text-amber-700 transition flex items-center justify-between"
              >
                <span>Telangana Hub</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/gold-rate"
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:text-amber-700 transition flex items-center justify-between"
              >
                <span>Today&apos;s Gold Rate</span>
                <Coins className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="/gold-valuation-calculator"
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:text-amber-700 transition flex items-center justify-between"
              >
                <span>Payout Calculator</span>
                <Calculator className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
            >
              <Home className="w-4 h-4" />
              <span>Return Home Now</span>
            </Link>
            <a
              href={`tel:${BRAND.phone1Raw}`}
              className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
