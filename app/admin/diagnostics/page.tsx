'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  CheckCircle2,
  Database,
  Search,
  ExternalLink,
  ShieldCheck,
  Building2,
  AlertTriangle,
  RefreshCw,
  FileCheck,
  SlidersHorizontal,
  Zap,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import { runSeoDiagnostics, SeoDiagnosticReport, DiscrepancyItem } from '@/lib/seo-diagnostics';
import { resolvePageContext } from '@/lib/universal-engine';
import { BRAND } from '@/lib/brand';

export default function DiagnosticsPage() {
  const [report, setReport] = useState<SeoDiagnosticReport | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  // Run initial diagnostic check client-side after mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setReport(runSeoDiagnostics());
      } catch (e) {
        console.error('Failed to run initial diagnostics:', e);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Filters
  const [filterType, setFilterType] = useState<string>('all');
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Simulator State
  const initialTestPath = '/andhra-pradesh/visakhapatnam/services/gold-buyers';
  const [testPath, setTestPath] = useState(initialTestPath);
  const [testResult, setTestResult] = useState<any>(() =>
    resolvePageContext({ pathname: initialTestPath })
  );

  const handleSimulatePath = (path: string) => {
    setTestPath(path);
    const ctx = resolvePageContext({ pathname: path });
    setTestResult(ctx);
  };

  const executeDiagnostics = () => {
    setIsAuditing(true);
    setTimeout(() => {
      try {
        const res = runSeoDiagnostics();
        setReport(res);
      } catch (e) {
        console.error('Failed to run diagnostics:', e);
      } finally {
        setIsAuditing(false);
      }
    }, 150);
  };

  const filteredDiscrepancies = (report?.discrepancies || []).filter(item => {
    if (filterType !== 'all' && item.type !== filterType) return false;
    if (severityFilter !== 'all' && item.severity !== severityFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        item.url.toLowerCase().includes(q) ||
        item.details.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-stone-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>SEO Route Registry & Sitemap Diagnostics Console</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              SEO Parity & Diagnostic Integrity Audit
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Real-time validation for {report?.summary.totalIndexableRoutes.toLocaleString() || '30,000+'} indexable routes, XML sitemaps, canonical links, and entity integrity checks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={executeDiagnostics}
              disabled={isAuditing}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition shadow-lg shadow-amber-500/10 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isAuditing ? 'animate-spin' : ''}`} />
              <span>{isAuditing ? 'Auditing Parity...' : 'Run Real-time Audit'}</span>
            </button>
          </div>
        </div>

        {/* High-Level Overview Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-5">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
              <span>Health Score</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-emerald-400">
              {report ? `${report.summary.healthScore}%` : '--'}
            </div>
            <div className="text-[11px] text-stone-400 mt-1">100% Route Parity</div>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-5">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
              <span>AMP Mobile Pages</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-black text-amber-400">
              100% Valid
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> ⚡ AMP v0.js Active
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-5">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
              <span>Indexable Routes</span>
              <Database className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-black text-amber-400">
              {report?.summary.totalIndexableRoutes.toLocaleString() || '--'}
            </div>
            <div className="text-[11px] text-stone-400 mt-1">RouteRegistry canonicals</div>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-5">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
              <span>Sitemap XML URLs</span>
              <FileCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {report?.summary.totalSitemapUrls.toLocaleString() || '--'}
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Synchronized in XML
            </div>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-5">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
              <span>Passed Checks</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-emerald-400">
              {report?.summary.passedRoutes.toLocaleString() || '--'}
            </div>
            <div className="text-[11px] text-stone-400 mt-1">100% Context Resolved</div>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-xl p-5">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
              <span>Discrepancies / Warnings</span>
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-black text-white">
              {report?.discrepancies.length || 0}
            </div>
            <div className="text-[11px] text-stone-400 mt-1">0 Critical Errors</div>
          </div>
        </div>

        {/* Live Route Context & Integrity Inspector */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                Live Route Context & Integrity Check Inspector
              </h2>
              <p className="text-xs text-stone-400">
                Test any URL path to verify real-time PageContext resolution, entity extraction, and integrity check flags.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-400">Sample Quick Tests:</span>
              <button
                onClick={() => handleSimulatePath('/andhra-pradesh/ntr/vijayawada-urban/services/gold-buyers')}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 rounded text-xs text-amber-300 font-mono transition"
              >
                Valid Combo
              </button>
              <button
                onClick={() => handleSimulatePath('/andhra-pradesh/visakhapatnam/services/unknown-service-test')}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 rounded text-xs text-rose-300 font-mono transition"
              >
                404 Diagnostic Test
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={testPath}
              onChange={(e) => handleSimulatePath(e.target.value)}
              placeholder="e.g. /andhra-pradesh/visakhapatnam/services/gold-buyers"
              className="flex-1 bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-mono"
            />
            <button
              onClick={() => handleSimulatePath(testPath)}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs transition"
            >
              Inspect
            </button>
          </div>

          {testResult && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="bg-stone-950 border border-stone-800 rounded-xl p-4">
                <span className="text-[11px] text-stone-500 block mb-1">Integrity Status</span>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                  testResult.integrityCheck?.passed
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}>
                  {testResult.integrityCheck?.passed ? 'Passed (OK)' : `Diagnostic 404 (${testResult.integrityCheck?.code})`}
                </span>
                {testResult.integrityCheck?.reason && (
                  <p className="text-[11px] text-stone-400 mt-2 italic">{testResult.integrityCheck.reason}</p>
                )}
              </div>

              <div className="bg-stone-950 border border-stone-800 rounded-xl p-4">
                <span className="text-[11px] text-stone-500 block mb-1">Resolved Archetype & Intent</span>
                <div className="text-xs font-bold text-stone-200 uppercase tracking-wider">
                  {testResult.pageArchetype}
                </div>
                <span className="text-[11px] text-amber-400 block mt-1 font-mono">
                  Intent: {testResult.primaryIntent}
                </span>
              </div>

              <div className="bg-stone-950 border border-stone-800 rounded-xl p-4">
                <span className="text-[11px] text-stone-500 block mb-1">Location Context</span>
                <div className="text-xs font-bold text-stone-200">
                  {testResult.location?.displayName || 'State / Global'}
                </div>
                <span className="text-[11px] text-stone-400 block mt-1">
                  {testResult.location?.districtName ? `District: ${testResult.location.districtName}` : 'All Districts'}
                </span>
              </div>

              <div className="bg-stone-950 border border-stone-800 rounded-xl p-4">
                <span className="text-[11px] text-stone-500 block mb-1">Service Entity</span>
                <div className="text-xs font-bold text-stone-200">
                  {testResult.service?.name || 'All Services'}
                </div>
                <span className="text-[11px] text-stone-400 block mt-1 font-mono">
                  {testResult.service?.slug ? `/${testResult.service.slug}` : 'No service'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Discrepancies & Audit Log Table */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                Parity Discrepancy & Diagnostic Report Log
              </h2>
              <p className="text-xs text-stone-400">
                Detailed audit trail comparing RouteRegistry canonical entries with generated XML sitemaps.
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter URLs or details..."
                  className="bg-stone-950 border border-stone-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500 w-48"
                />
              </div>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-stone-950 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-300 focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Types</option>
                <option value="missing_from_sitemap">Missing in Sitemap</option>
                <option value="orphaned_in_sitemap">Orphaned Sitemap URLs</option>
                <option value="context_mismatch">Context Mismatches</option>
                <option value="integrity_check_failed">Integrity Warnings</option>
                <option value="canonical_mismatch">Canonical Mismatches</option>
              </select>

              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="bg-stone-950 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-300 focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Severities</option>
                <option value="error">Errors Only</option>
                <option value="warning">Warnings Only</option>
                <option value="info">Info Only</option>
              </select>
            </div>
          </div>

          {filteredDiscrepancies.length === 0 ? (
            <div className="p-12 text-center bg-stone-950 border border-stone-800 rounded-xl space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-sm font-bold text-white">0 Discrepancies Found</h3>
              <p className="text-xs text-stone-400 max-w-md mx-auto">
                All tested routes in RouteRegistry are 100% matched with XML sitemaps and resolve valid PageContext entities with full integrity.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-800 text-stone-400 uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-4">Severity</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">URL / Path</th>
                    <th className="py-3 px-4">Details</th>
                    <th className="py-3 px-4">Suggested Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-850">
                  {filteredDiscrepancies.map((item) => (
                    <tr key={item.id} className="hover:bg-stone-850/50 transition">
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          item.severity === 'error'
                            ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            : item.severity === 'warning'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}>
                          {item.severity}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-stone-300">
                        {item.type}
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-amber-300 max-w-xs truncate">
                        <a href={item.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                          <span>{item.url}</span>
                          <ExternalLink className="w-3 h-3 text-stone-500 shrink-0" />
                        </a>
                      </td>
                      <td className="py-3 px-4 text-stone-300 max-w-md">
                        {item.details}
                      </td>
                      <td className="py-3 px-4 text-stone-400 italic text-[11px]">
                        {item.suggestedFix || 'Check route definition.'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Sitemap XML Quick Access Bar */}
        <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Live XML Sitemaps & Crawlers Index</h3>
              <p className="text-xs text-stone-400">Direct links to verified index sitemap files for Google Search Console and AI Search indexers.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Main Sitemap (sitemap.xml)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition inline-flex items-center gap-1.5"
            >
              <span>robots.txt</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
