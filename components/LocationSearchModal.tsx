'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, MapPin, X, ArrowRight, Building2, Navigation, Compass } from 'lucide-react';
import { resolvePageContext } from '@/lib/universal-engine';
import { generateCanonicalRoute } from '@/lib/route-registry';
import GPSAutoLocationDetector from './GPSAutoLocationDetector';

interface SearchResult {
  name: string;
  url: string;
  type: string;
  state: string;
}

interface LocationSearchModalProps {
  onClose: () => void;
}

export default function LocationSearchModal({ onClose }: LocationSearchModalProps) {
  const pathname = usePathname() || '';
  const currentContext = resolvePageContext({ pathname });

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [showGPSModal, setShowGPSModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const getCombinedUrl = (targetLocUrl: string) => {
    const targetContext = resolvePageContext({ pathname: targetLocUrl });
    if (!targetContext.location) return targetLocUrl;
    return generateCanonicalRoute({
      location: targetContext.location,
      service: currentContext.service,
      metal: currentContext.material,
      item: currentContext.jewellery
    });
  };

  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/locations/search?q=${encodeURIComponent(query)}&limit=15`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.results || []);
        }
      } catch (e) {
        console.error('Search error', e);
      } finally {
        setLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Featured top hubs for quick tap
  const popularHubs = [
    { name: 'Hyderabad', url: '/telangana/hyderabad', state: 'Telangana' },
    { name: 'Visakhapatnam', url: '/andhra-pradesh/visakhapatnam', state: 'Andhra Pradesh' },
    { name: 'Vijayawada (NTR)', url: '/andhra-pradesh/ntr', state: 'Andhra Pradesh' },
    { name: 'Guntur', url: '/andhra-pradesh/guntur', state: 'Andhra Pradesh' },
    { name: 'Warangal', url: '/telangana/warangal', state: 'Telangana' },
    { name: 'Tirupati', url: '/andhra-pradesh/tirupati', state: 'Andhra Pradesh' },
    { name: 'Karimnagar', url: '/telangana/karimnagar', state: 'Telangana' },
    { name: 'Rajahmundry', url: '/andhra-pradesh/east-godavari', state: 'Andhra Pradesh' },
    { name: 'Kurnool', url: '/andhra-pradesh/kurnool', state: 'Andhra Pradesh' },
    { name: 'Nizamabad', url: '/telangana/nizamabad', state: 'Telangana' }
  ];

  return (
    <div
      id="location-search-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-search-input"
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-150 font-sans"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[85vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-amber-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            id="location-search-input"
            aria-label="Search town, mandal, or district"
            value={query}
            onChange={e => {
              const val = e.target.value;
              setQuery(val);
              if (val.trim().length < 2) {
                setResults([]);
                setLoading(false);
              }
            }}
            placeholder="Type your Town, Mandal, Locality, or District (e.g. Tirupati, Ameerpet, Guntur)..."
            className="w-full bg-transparent border-none text-slate-900 placeholder-slate-500 text-base sm:text-lg focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setResults([]);
                setLoading(false);
              }}
              className="p-1 text-slate-500 hover:text-slate-900 rounded"
              aria-label="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-500 hover:text-slate-900 rounded ml-1"
            aria-label="Close location search"
          >
            <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-700 font-mono">ESC</span>
          </button>
        </div>

        {/* Search Results Area */}
        <div className="overflow-y-auto p-4 space-y-3 flex-1 bg-white">
          {/* Quick GPS Auto-Detect Button */}
          <button
            type="button"
            id="modal-gps-detect-btn"
            onClick={() => setShowGPSModal(true)}
            className="w-full p-3 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl flex items-center justify-between group transition-all text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
                <Navigation className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5">
                  <span>Auto-Detect My Nearest Branch via GPS</span>
                  <span className="bg-amber-200 text-amber-900 text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                    INSTANT
                  </span>
                </div>
                <div className="text-[11px] text-slate-600">
                  Find closest valuation desk in Andhra Pradesh or Telangana automatically
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          {showGPSModal && (
            <GPSAutoLocationDetector
              showModalOnly={true}
              onClose={() => {
                setShowGPSModal(false);
                onClose();
              }}
            />
          )}

          {loading && (
            <div className="text-center py-8 text-slate-500 text-sm flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Searching locations across Andhra Pradesh &amp; Telangana...</span>
            </div>
          )}

          {!loading && query.trim().length >= 2 && results.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              <p className="text-slate-800 font-bold">No direct location matched &ldquo;{query}&rdquo;.</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching the parent district name or town name. Akshaya Gold Buyers serves customers across Andhra Pradesh &amp; Telangana.
              </p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-1.5">
              <div className="text-xs font-bold uppercase text-slate-400 px-2 pb-1">
                Matching Locations
              </div>
              {results.map((r, idx) => (
                <Link
                  key={`${r.url}-${idx}`}
                  href={getCombinedUrl(r.url)}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-amber-50 border border-transparent hover:border-amber-300 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      r.type === 'Village'
                        ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white'
                        : r.type.includes('Neighbourhood')
                        ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white'
                        : 'bg-slate-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950'
                    }`}>
                      {r.type === 'Village' ? (
                        <Compass className="w-4 h-4" />
                      ) : r.type.includes('Neighbourhood') ? (
                        <Building2 className="w-4 h-4" />
                      ) : (
                        <MapPin className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                        {r.name}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                        <span>{r.state}</span>
                        <span>•</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                          r.type === 'Village'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : r.type.includes('Neighbourhood')
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : 'bg-amber-50 text-amber-900 border-amber-200'
                        }`}>
                          {r.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          )}

          {(!query || query.trim().length < 2) && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400 mb-2 px-1">
                <span>Popular Search Locations</span>
                <span className="text-amber-700">Andhra Pradesh &amp; Telangana</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {popularHubs.map(hub => (
                  <Link
                    key={hub.url}
                    href={getCombinedUrl(hub.url)}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 group transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-amber-600" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-amber-800">
                        {hub.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">{hub.state}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Search covering every mandal, town, and locality in AP &amp; TG</span>
          <span className="text-amber-700 font-bold">100% Machine-Parsed Index</span>
        </div>
      </div>
    </div>
  );
}
