'use client';

import React, { useState, useMemo } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MapPin, Phone, Clock, Navigation, Building2, Search, MessageCircle } from 'lucide-react';
import { BRAND, BranchHub } from '@/lib/brand';

export default function BranchMap() {
  const API_KEY = (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string) ?? '';
  const branches = BRAND.branches;

  const [activeStateTab, setActiveStateTab] = useState<'all' | 'andhra-pradesh' | 'telangana'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranchId, setSelectedBranchId] = useState<string>(branches[0].id);

  const filteredBranches = useMemo(() => {
    return branches.filter(b => {
      const matchState = activeStateTab === 'all' || b.stateSlug === activeStateTab;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q ||
        b.district.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.name.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q);
      return matchState && matchQuery;
    });
  }, [branches, activeStateTab, searchQuery]);

  const activeBranch: BranchHub = useMemo(() => {
    return branches.find(b => b.id === selectedBranchId) || filteredBranches[0] || branches[0];
  }, [branches, selectedBranchId, filteredBranches]);

  const position = { lat: activeBranch.lat, lng: activeBranch.lng };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
      {/* Header with state tabs and search */}
      <div className="p-6 border-b border-slate-100 bg-slate-50 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded mb-1">
              <Building2 className="w-3.5 h-3.5 text-amber-700" />
              <span>All 59 District Physical Branch Hubs</span>
            </div>
            <h3 className="font-black text-slate-900 text-xl sm:text-2xl">{activeBranch.name}</h3>
            <p className="text-xs text-slate-600 mt-0.5">{activeBranch.address}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Directions</span>
            </a>
            <a
              href={`https://wa.me/${activeBranch.phone.replace(/[^0-9]/g, '')}?text=Hello%20Akshaya%20Gold%20Buyers,%20I%20am%20inquiring%20about%20gold%20valuation%20at%20your%20${encodeURIComponent(activeBranch.district)}%20Branch%20Hub.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {/* State Filter Buttons */}
          <div className="inline-flex bg-slate-200/80 p-1 rounded-xl shrink-0">
            <button
              onClick={() => setActiveStateTab('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeStateTab === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Hubs (59)
            </button>
            <button
              onClick={() => setActiveStateTab('andhra-pradesh')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeStateTab === 'andhra-pradesh' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Andhra Pradesh (26)
            </button>
            <button
              onClick={() => setActiveStateTab('telangana')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeStateTab === 'telangana' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Telangana (33)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search district or city branch hub (e.g., Guntur, Warangal, Tirupati)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>
        </div>

        {/* District Branch Chips Carousel */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {filteredBranches.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedBranchId(b.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                activeBranch.id === b.id
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {b.district} {b.isFlagship ? '★' : ''}
            </button>
          ))}
          {filteredBranches.length === 0 && (
            <span className="text-xs text-slate-500 py-1">No district branches match your search.</span>
          )}
        </div>
      </div>

      {/* Map Display */}
      <div className="h-[380px] w-full relative">
        {API_KEY ? (
          <APIProvider apiKey={API_KEY}>
            <Map
              key={activeBranch.id}
              mapId="DEMO_MAP_ID"
              defaultZoom={14}
              defaultCenter={position}
              gestureHandling="greedy"
              disableDefaultUI={false}
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            >
              <AdvancedMarker position={position} title={activeBranch.name}>
                <Pin background="#f59e0b" borderColor="#d97706" glyphColor="#78350f" scale={1.2}>
                  🪙
                </Pin>
              </AdvancedMarker>
            </Map>
          </APIProvider>
        ) : (
          <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <MapPin className="w-8 h-8 text-amber-500" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Interactive Map Unavailable</h4>
            <p className="text-xs text-slate-500 max-w-xs mb-6">
              The interactive branch map is currently disabled. You can still find the exact location of our {activeBranch.district} hub using the button below.
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              Open in Google Maps
            </a>
          </div>
        )}
      </div>

      {/* Footer Info Strip */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Direct Desk: <a href={`tel:${activeBranch.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-slate-900 hover:underline">{activeBranch.phone}</a></span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Operating Hours: <strong className="text-slate-900">{activeBranch.timings}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Assay: <strong className="text-emerald-700">German XRF Laser on site (0% Loss)</strong></span>
        </div>
      </div>
    </div>
  );
}
