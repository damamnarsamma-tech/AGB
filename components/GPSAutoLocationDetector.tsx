'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  MapPin,
  Navigation,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  X,
  Compass,
  Building2,
  Sparkles
} from 'lucide-react';
import { findNearestLocation, NearestLocationMatch } from '@/lib/geo-locator';
import { resolvePageContext, resolveRoute } from '@/lib/universal-engine';

interface GPSAutoLocationDetectorProps {
  autoTriggerOnMount?: boolean;
  onLocationDetected?: (match: NearestLocationMatch) => void;
  showModalOnly?: boolean;
  onClose?: () => void;
}

export default function GPSAutoLocationDetector({
  autoTriggerOnMount = false,
  onLocationDetected,
  showModalOnly = false,
  onClose
}: GPSAutoLocationDetectorProps) {
  const router = useRouter();
  const pathname = usePathname() || '';

  const [status, setStatus] = useState<'idle' | 'detecting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [detectedMatch, setDetectedMatch] = useState<NearestLocationMatch | null>(null);
  const [countdown, setCountdown] = useState<number>(3);
  const [isOpen, setIsOpen] = useState<boolean>(showModalOnly);

  const startGPSDetection = useCallback(() => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      setStatus('error');
      setErrorMessage('Geolocation is not supported by your browser.');
      setIsOpen(true);
      return;
    }

    setStatus('detecting');
    setIsOpen(true);
    setErrorMessage('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Local instant Haversine match
          const match = findNearestLocation(lat, lng);
          setDetectedMatch(match);
          setStatus('success');

          // Save to local storage for persistence
          try {
            localStorage.setItem(
              'akshaya_detected_location',
              JSON.stringify({
                match,
                detectedAt: new Date().toISOString()
              })
            );
          } catch (e) {
            console.error('Failed to save location to localStorage', e);
          }

          if (onLocationDetected) {
            onLocationDetected(match);
          }
        } catch (err) {
          console.error('GPS calculation error:', err);
          setStatus('error');
          setErrorMessage('Could not pinpoint nearest branch. Please select manually.');
        }
      },
      (error) => {
        setStatus('error');
        if (error.code === error.PERMISSION_DENIED) {
          setErrorMessage('Location permission was denied. Please allow GPS access in your browser or select your town manually.');
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setErrorMessage('GPS position is currently unavailable. Please try again or search your district.');
        } else if (error.code === error.TIMEOUT) {
          setErrorMessage('Location request timed out. Please retry.');
        } else {
          setErrorMessage('An unexpected error occurred while fetching your GPS location.');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  }, [onLocationDetected]);

  const getDestinationUrl = useCallback((locUrl: string) => {
    const currentContext = resolvePageContext({ pathname: pathname || '' });
    const targetContext = resolvePageContext({ pathname: locUrl });
    if (!targetContext.location) return locUrl;
    return resolveRoute({
      newLocation: targetContext.location,
      currentService: currentContext.service,
      currentMaterial: currentContext.material,
      currentJewellery: currentContext.jewellery
    });
  }, [pathname]);

  // Handle auto countdown & redirection on success
  useEffect(() => {
    if (status !== 'success' || !detectedMatch) return;
    const destUrl = getDestinationUrl(detectedMatch.location.url);
    if (pathname === destUrl) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push(destUrl);
          setIsOpen(false);
          if (onClose) onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status, detectedMatch, pathname, router, onClose, getDestinationUrl]);

  // Auto-detect on homepage if requested and not dismissed
  useEffect(() => {
    if (autoTriggerOnMount && pathname === '/') {
      const alreadyChecked = sessionStorage.getItem('akshaya_gps_auto_prompted');
      if (!alreadyChecked) {
        sessionStorage.setItem('akshaya_gps_auto_prompted', 'true');
        // Check if permission already granted
        if (navigator.permissions && navigator.permissions.query) {
          navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            if (result.state === 'granted') {
              startGPSDetection();
            }
          }).catch(() => {
            // ignore
          });
        }
      }
    }
  }, [autoTriggerOnMount, pathname, startGPSDetection]);

  const handleManualGo = () => {
    if (detectedMatch) {
      router.push(getDestinationUrl(detectedMatch.location.url));
      setIsOpen(false);
      if (onClose) onClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen && !showModalOnly) {
    return null;
  }

  return (
    <div
      id="gps-location-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gps-modal-title"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        id="gps-location-modal-card"
        className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 animate-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Navigation className="w-5 h-5 animate-pulse text-amber-400" />
            </div>
            <div>
              <h3 id="gps-modal-title" className="text-base font-bold leading-tight">GPS Location Detection</h3>
              <p className="text-xs text-slate-400">Locating closest Akshaya Gold Buyers Gold branch</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close GPS location modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {status === 'idle' && (
            <div className="text-center space-y-4 py-2">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
                <Compass className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">Auto-Detect Your Nearest Branch</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use your device&apos;s GPS to load your local district gold rate, valuation desk address, and doorstep service coverage in Andhra Pradesh &amp; Telangana.
                </p>
              </div>
              <button
                type="button"
                id="start-gps-btn"
                onClick={startGPSDetection}
                className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Allow GPS &amp; Auto-Load Location</span>
              </button>
            </div>
          )}

          {status === 'detecting' && (
            <div className="text-center space-y-4 py-6">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping" />
                <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg relative">
                  <Loader2 className="w-7 h-7 animate-spin" />
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">Acquiring GPS Coordinates...</h4>
                <p className="text-xs text-slate-500">
                  Calculating nearest branch in AP &amp; Telangana. Please approve the browser location prompt if requested.
                </p>
              </div>
            </div>
          )}

          {status === 'success' && detectedMatch && (
            <div className="space-y-5">
              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                      Nearest Branch Detected
                    </span>
                    <h4 className="text-base font-black text-slate-900 mt-0.5">
                      {detectedMatch.location.name}
                    </h4>
                    <div className="text-xs text-slate-600 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{detectedMatch.location.districtName}, {detectedMatch.location.stateName}</span>
                      <span className="text-slate-400">•</span>
                      <span className="font-semibold text-emerald-700">~{detectedMatch.distanceKm} km away</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-900">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-amber-700" />
                    <span>Instant Valuation &amp; Testing Available</span>
                  </span>
                  <span className="font-bold text-emerald-800">Open Today</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  id="gps-confirm-go-btn"
                  onClick={handleManualGo}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Load {detectedMatch.location.name} Page</span>
                  {countdown > 0 && (
                    <span className="bg-slate-950/10 px-1.5 py-0.5 rounded text-xs">
                      ({countdown}s)
                    </span>
                  )}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Stay on Current Page
                </button>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-4">
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-900">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <h4 className="font-bold">Location Detection Issue</h4>
                  <p className="text-rose-700 leading-relaxed">{errorMessage}</p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={startGPSDetection}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Try GPS Again</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Select Location Manually
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
