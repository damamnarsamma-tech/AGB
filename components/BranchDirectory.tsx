'use client';

import React, { useState, useMemo } from 'react';
import { Search, Building2, Phone, X } from 'lucide-react';
import { BranchHub } from '@/lib/brand';

interface BranchDirectoryProps {
  apBranches: BranchHub[];
  tgBranches: BranchHub[];
}

export default function BranchDirectory({ apBranches, tgBranches }: BranchDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAP = useMemo(() => {
    if (!searchQuery.trim()) return apBranches;
    const query = searchQuery.toLowerCase().trim();
    return apBranches.filter(b => 
      b.district.toLowerCase().includes(query) ||
      b.city.toLowerCase().includes(query) ||
      b.name.toLowerCase().includes(query) ||
      b.address.toLowerCase().includes(query)
    );
  }, [apBranches, searchQuery]);

  const filteredTG = useMemo(() => {
    if (!searchQuery.trim()) return tgBranches;
    const query = searchQuery.toLowerCase().trim();
    return tgBranches.filter(b => 
      b.district.toLowerCase().includes(query) ||
      b.city.toLowerCase().includes(query) ||
      b.name.toLowerCase().includes(query) ||
      b.address.toLowerCase().includes(query)
    );
  }, [tgBranches, searchQuery]);

  const hasResults = filteredAP.length > 0 || filteredTG.length > 0;

  return (
    <div className="space-y-8">
      {/* Search Input Container */}
      <div className="max-w-xl mx-auto mb-10 sticky top-20 z-30 pt-2">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search by District, City or Branch name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        {searchQuery && (
          <div className="mt-2 text-center">
            <p className="text-xs font-bold text-amber-800 bg-amber-50 inline-block px-3 py-1 rounded-full border border-amber-200">
              Found {filteredAP.length + filteredTG.length} branch locations matching &quot;{searchQuery}&quot;
            </p>
          </div>
        )}
      </div>

      {/* No Results State */}
      {!hasResults && (
        <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl shadow-2xs">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
            <Search className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No branches found</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-xs mx-auto">
            We couldn&apos;t find any branch matching &quot;{searchQuery}&quot;. Try searching for a district or city name.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-6 text-amber-700 font-bold text-xs uppercase tracking-wider hover:underline"
          >
            Clear Search Filter
          </button>
        </div>
      )}

      {/* Andhra Pradesh District Hubs */}
      {filteredAP.length > 0 && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Andhra Pradesh Branch Hubs ({filteredAP.length})
              </h2>
            </div>
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
              AP Regional Coverage
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAP.map(b => (
              <BranchCard key={b.id} branch={b} />
            ))}
          </div>
        </div>
      )}

      {/* Telangana District Hubs */}
      {filteredTG.length > 0 && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Telangana Branch Hubs ({filteredTG.length})
              </h2>
            </div>
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
              TG Regional Coverage
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTG.map(b => (
              <BranchCard key={b.id} branch={b} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BranchCard({ branch }: { branch: BranchHub }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-2 hover:border-amber-400 hover:shadow-md transition-all group overflow-hidden relative">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-amber-900 font-bold uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200 group-hover:bg-amber-100 transition-colors">
          {branch.district} {branch.isFlagship ? '• Flagship' : ''}
        </span>
        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
          XRF Assayer On Site
        </span>
      </div>
      <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-700 transition-colors">{branch.name}</h3>
      <p className="text-xs text-slate-600 leading-relaxed min-h-[3rem]">{branch.address}</p>
      <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 flex items-center justify-between">
        <a 
          href={`tel:${branch.phone.replace(/[^0-9]/g, '')}`} 
          className="text-amber-700 font-bold hover:underline flex items-center gap-1"
        >
          <Phone className="w-3 h-3" />
          {branch.phone}
        </a>
        <span className="text-slate-500 text-[11px] font-medium">{branch.timings.split('(')[0]}</span>
      </div>
    </div>
  );
}
