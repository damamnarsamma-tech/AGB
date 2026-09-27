'use client';

import React, { useState, useSyncExternalStore, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  Navigation,
  MapPin,
  Loader2,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle2,
  Compass,
  AlertCircle
} from 'lucide-react';
import { findNearestLocation, NearestLocationMatch } from '@/lib/geo-locator';
import GPSAutoLocationDetector from './GPSAutoLocationDetector';

function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('akshaya:location-updated', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('akshaya:location-updated', callback);
  };
}

function getSavedLocationSnapshot(): string | null {
  try {
    return localStorage.getItem('akshaya_detected_location');
  } catch {
    return null;
  }
}

function getServerSavedLocationSnapshot(): string | null {
  return null;
}

export default function GPSHeroBanner() {
  const router = useRouter();
  const [showFullModal, setShowFullModal] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [manuallyDetected, setManuallyDetected] = useState<NearestLocationMatch | null>(null);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const savedLocationRaw = useSyncExternalStore(
    subscribeToStorage,
    getSavedLocationSnapshot,
    getServerSavedLocationSnapshot
  );

  const detectedLocation = useMemo<NearestLocationMatch | null>(() => {
    if (manuallyDetected) return manuallyDetected;
    if (!savedLocationRaw) return null;
    try {
      const parsed = JSON.parse(savedLocationRaw);
      return parsed?.match || null;
    } catch {
      return null;
    }
  }, [manuallyDetected, savedLocationRaw]);

  const handleQuickDetect = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      setShowFullModal(true);
      return;
    }

    setIsDetecting(true);
    setErrorNotice(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        try {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const match = findNearestLocation(lat, lng);
          setManuallyDetected(match);
          setIsDetecting(false);

          // Save to localStorage
          try {
            localStorage.setItem(
              'akshaya_detected_location',
              JSON.stringify({
                match,
                detectedAt: new Date().toISOString()
              })
            );
            window.dispatchEvent(new Event('akshaya:location-updated'));
          } catch {
            // ignore
          }

          // Immediate navigation after 500ms
          setTimeout(() => {
            router.push(match.location.url);
          }, 600);
        } catch {
          setIsDetecting(false);
          setShowFullModal(true);
        }
      },
      (err) => {
        setIsDetecting(false);
        if (err.code === err.PERMISSION_DENIED) {
          setErrorNotice('Location permission was denied. Click to select manually or configure browser GPS permissions.');
        } else {
          setShowFullModal(true);
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  return (
    <div
      id="gps-hero-banner"
      className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-y sm:border sm:rounded-2xl border-amber-300/80 p-4 sm:p-5 my-4 backdrop-blur-xs transition-all shadow-xs"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left info */}
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
            {isDetecting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Navigation className="w-5 h-5 animate-pulse" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                Smart GPS Auto-Location
              </span>
              <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                Serving Andhra Pradesh &amp; Telangana
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
              {detectedLocation ? (
                <span>
                  Previously Detected: <strong className="text-amber-800">{detectedLocation.location.name}</strong> ({detectedLocation.location.districtName})
                </span>
              ) : (
                <span>Find Your Closest Akshaya Gold Buyers Branch &amp; Live Rates</span>
              )}
            </h3>
            <p className="text-xs text-slate-600">
              One click locates your mandal or town across Andhra Pradesh &amp; Telangana.
            </p>
          </div>
        </div>

        {/* Right CTA buttons */}
        <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
          {detectedLocation ? (
            <button
              type="button"
              id="gps-load-saved-btn"
              onClick={() => router.push(detectedLocation.location.url)}
              className="flex-1 md:flex-initial px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Go to {detectedLocation.location.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : null}

          <button
            type="button"
            id="gps-auto-detect-cta-btn"
            onClick={handleQuickDetect}
            disabled={isDetecting}
            className="flex-1 md:flex-initial px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {isDetecting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                <span>Locating GPS...</span>
              </>
            ) : (
              <>
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>{detectedLocation ? 'Update GPS' : 'Auto-Load My Location'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {errorNotice && (
        <div className="mt-3 text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded-lg p-2.5 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{errorNotice}</span>
        </div>
      )}

      {showFullModal && (
        <GPSAutoLocationDetector
          showModalOnly={true}
          onClose={() => setShowFullModal(false)}
        />
      )}
    </div>
  );
}
