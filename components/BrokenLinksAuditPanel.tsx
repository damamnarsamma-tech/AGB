'use client';

import React, { useState, useEffect } from 'react';
import {
  Link2,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Filter,
  Search,
  Globe
} from 'lucide-react';

interface LinkCheckResult {
  url: string;
  path: string;
  status: number;
  statusText: string;
  category: 'Core' | 'State' | 'District' | 'Location' | 'Service' | 'Sitemap';
  suggestedFix?: string;
  checkedAt: string;
}

interface AuditSummary {
  totalChecked: number;
  validCount: number;
  redirectCount: number;
  brokenCount: number;
}

export default function BrokenLinksAuditPanel() {
  const [loading, setLoading] = useState(false);
  const [initialLoaded, setInitialLoaded] = useState(false);
  const [results, setResults] = useState<LinkCheckResult[]>([]);
  const [summary, setSummary] = useState<AuditSummary | null>(null);
  const [filter, setFilter] = useState<'all' | 'broken' | 'redirects' | 'valid'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastChecked, setLastChecked] = useState<string | null>(null);

  const runAudit = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/check-links', { method: 'GET' });
      const data = await res.json();
      if (data.success) {
        setResults(data.results || []);
        setSummary(data.summary || null);
        setLastChecked(new Date().toLocaleTimeString());
        setInitialLoaded(true);
      }
    } catch (err) {
      console.error('Failed to run broken links audit:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    fetch('/api/check-links', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        if (active && data.success) {
          setResults(data.results || []);
          setSummary(data.summary || null);
          setLastChecked(new Date().toLocaleTimeString());
          setInitialLoaded(true);
        }
      })
      .catch(err => {
        console.error('Failed to run initial broken links audit:', err);
        if (active) setInitialLoaded(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredResults = results.filter(item => {
    if (filter === 'broken' && item.status < 400) return false;
    if (filter === 'redirects' && (item.status < 300 || item.status >= 400)) return false;
    if (filter === 'valid' && item.status !== 200) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.path.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.statusText.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return (
    <div className="space-y-6 font-sans">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-indigo-50 text-indigo-700 rounded-xl border border-indigo-200">
              <Link2 className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-black text-slate-900">Broken &amp; Orphaned Links Audit</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Automated crawler testing core landing pages, sitemaps, services, state hubs, and location paths.
            {lastChecked && <span> Last run at {lastChecked}.</span>}
          </p>
        </div>

        <button
          onClick={runAudit}
          disabled={loading}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          <span>{loading ? 'Auditing Routes...' : 'Re-run Crawl Audit'}</span>
        </button>
      </div>

      {/* Summary Metrics */}
      {summary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Total Checked</span>
            <div className="text-3xl font-black text-slate-900">{summary.totalChecked}</div>
            <span className="text-[10px] text-slate-400 block mt-1">Sitemaps, hubs, core routes</span>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Clean Routes (200 OK)</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-black text-emerald-700">{summary.validCount}</div>
            <span className="text-[10px] text-emerald-600 block mt-1">Properly resolving &amp; indexable</span>
          </div>

          <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-amber-800 font-bold uppercase tracking-wider">301 Redirects</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-3xl font-black text-amber-700">{summary.redirectCount}</div>
            <span className="text-[10px] text-amber-600 block mt-1">Clean canonical rewrites</span>
          </div>

          <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-rose-800 font-bold uppercase tracking-wider">Broken (404/5xx)</span>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-3xl font-black text-rose-700">{summary.brokenCount}</div>
            <span className="text-[10px] text-rose-600 block mt-1">Requires immediate remediation</span>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({results.length})
          </button>
          <button
            onClick={() => setFilter('broken')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              filter === 'broken'
                ? 'bg-rose-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Broken ({summary?.brokenCount || 0})
          </button>
          <button
            onClick={() => setFilter('redirects')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              filter === 'redirects'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Redirects ({summary?.redirectCount || 0})
          </button>
          <button
            onClick={() => setFilter('valid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              filter === 'valid'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Healthy ({summary?.validCount || 0})
          </button>
        </div>

        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Filter paths or status..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {(!initialLoaded || loading) && results.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-xs font-semibold flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
            <span>Running initial diagnostic link crawler...</span>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-xs font-semibold">
            No routes matching current filter.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold text-[10px]">
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Route Path</th>
                  <th className="py-3 px-4">Suggested Fix / Resolution</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredResults.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      {item.status === 200 ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          200 OK
                        </span>
                      ) : item.status >= 300 && item.status < 400 ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          <ArrowRight className="w-3 h-3" />
                          {item.statusText}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                          <AlertTriangle className="w-3 h-3" />
                          {item.statusText}
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-semibold uppercase">
                        {item.category}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-mono text-[11px] text-slate-800 break-all">
                      {item.path}
                    </td>

                    <td className="py-3 px-4 text-slate-600">
                      {item.suggestedFix ? (
                        <div className="flex items-center gap-1 text-amber-800 bg-amber-50/70 px-2 py-1 rounded border border-amber-200 font-mono text-[10px]">
                          <span>Redirect to:</span>
                          <span className="font-bold">{item.suggestedFix}</span>
                        </div>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-bold text-[11px] hover:underline"
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
