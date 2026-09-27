'use client';

import React, { useState } from 'react';
import {
  Globe,
  Radio,
  CheckCircle2,
  AlertCircle,
  Clock,
  ExternalLink,
  RefreshCw,
  Copy,
  Check,
  Search,
  FileCode,
  ShieldCheck
} from 'lucide-react';
import { SITE_URL } from '@/lib/site-url';

export interface PingEngineResult {
  engine: string;
  endpoint: string;
  status: number;
  statusText: string;
  latencyMs: number;
  success: boolean;
  message: string;
  timestamp: string;
}

export interface PingResponse {
  success: boolean;
  timestamp: string;
  sitemapUrl: string;
  results: {
    google: PingEngineResult;
    bing: PingEngineResult;
  };
  summary: string;
  error?: string;
}

interface SitemapPingDiagnosticProps {
  onPingComplete?: (res: PingResponse) => void;
  compact?: boolean;
}

export default function SitemapPingDiagnostic({ onPingComplete, compact = false }: SitemapPingDiagnosticProps) {
  const [sitemapUrl, setSitemapUrl] = useState<string>(`${SITE_URL}/sitemap.xml`);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handlePing = React.useCallback(async (overrideUrl?: string) => {
    setLoading(true);
    setError(null);
    const targetUrl = (overrideUrl || sitemapUrl || `${SITE_URL}/sitemap.xml`).trim();

    try {
      const response = await fetch('/api/admin/ping-search-engines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sitemapUrl: targetUrl })
      });

      const data: PingResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to ping search engines');
      }

      setResult(data);
      if (onPingComplete) {
        onPingComplete(data);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred during search engine ping');
    } finally {
      setLoading(false);
    }
  }, [sitemapUrl, onPingComplete]);

  React.useEffect(() => {
    // Automatically trigger a search engine sitemap ping to Google/Bing upon mounting
    const timer = setTimeout(() => {
      handlePing(`${SITE_URL}/sitemap.xml`);
    }, 0);
    return () => clearTimeout(timer);
  }, [handlePing]);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(sitemapUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="sitemap-ping-diagnostic-container" className="space-y-6">
      {/* Action Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <Radio className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                Search Engine Sitemap Ping Diagnostic
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-2xl">
              Manually trigger immediate ping requests to Google and Bing crawler endpoints whenever sitemaps, regional landing pages, or valuation guides are updated.
            </p>
          </div>

          <button
            id="trigger-sitemap-ping-btn"
            onClick={() => handlePing()}
            disabled={loading}
            className="self-start sm:self-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Pinging Search Engines...' : 'Trigger Sitemap Ping'}</span>
          </button>
        </div>

        {/* Sitemap URL Input & Quick Select */}
        <div className="space-y-2">
          <label htmlFor="sitemap-url-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Target Sitemap Index URL
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <input
                id="sitemap-url-input"
                type="url"
                value={sitemapUrl}
                onChange={(e) => setSitemapUrl(e.target.value)}
                placeholder="https://akshaya-gold-buyers.ai.studio/sitemap.xml"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="copy-sitemap-url-btn"
                onClick={handleCopyUrl}
                className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy Sitemap URL"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <a
                href={sitemapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 flex items-center gap-1.5 transition-colors"
                title="View Sitemap XML"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Inspect XML</span>
              </a>
            </div>
          </div>

          {/* Quick preset sub-sitemaps */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-400">Presets:</span>
            {[
              { label: 'Full Index', path: '/sitemap.xml' },
              { label: 'AP Locations', path: '/sitemap-ap.xml' },
              { label: 'Telangana Locations', path: '/sitemap-telangana.xml' },
              { label: 'Services', path: '/sitemap-services.xml' },
              { label: 'Metals', path: '/sitemap-metals.xml' },
              { label: 'Pledged Gold', path: '/sitemap-pledged-gold.xml' }
            ].map((p) => {
              const full = `${SITE_URL}${p.path}`;
              const isActive = sitemapUrl === full;
              return (
                <button
                  key={p.path}
                  type="button"
                  onClick={() => {
                    setSitemapUrl(full);
                    handlePing(full);
                  }}
                  className={`text-[11px] px-2.5 py-1 rounded-md transition-colors cursor-pointer font-medium ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-800 border border-indigo-200 font-bold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
            <div>
              <p className="font-bold">Ping Error</p>
              <p className="mt-0.5 text-rose-700">{error}</p>
            </div>
          </div>
        )}

        {/* Result Panel */}
        {result && (
          <div id="sitemap-ping-results" className="space-y-4 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Diagnostic Execution Report
                </span>
              </div>
              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                <Clock className="w-3 h-3" />
                {new Date(result.timestamp).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Google Result Card */}
              <div id="google-ping-card" className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-blue-600">
                      G
                    </div>
                    <span className="font-bold text-xs text-slate-900">Google Search</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                      result.results.google.status === 200
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}
                  >
                    HTTP {result.results.google.status} ({result.results.google.latencyMs}ms)
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {result.results.google.message}
                </p>

                <div className="pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-500 break-all">
                  <span className="font-bold text-slate-700">Endpoint: </span>
                  {result.results.google.endpoint}
                </div>
              </div>

              {/* Bing Result Card */}
              <div id="bing-ping-card" className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-teal-600">
                      B
                    </div>
                    <span className="font-bold text-xs text-slate-900">Bing Search</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                      result.results.bing.status === 200
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}
                  >
                    HTTP {result.results.bing.status} ({result.results.bing.latencyMs}ms)
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {result.results.bing.message}
                </p>

                <div className="pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-500 break-all">
                  <span className="font-bold text-slate-700">Endpoint: </span>
                  {result.results.bing.endpoint}
                </div>
              </div>
            </div>

            {/* Explanatory Technical Note */}
            <div className="p-3.5 bg-indigo-50/60 border border-indigo-100 rounded-xl text-xs text-indigo-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div className="space-y-1 leading-relaxed">
                <span className="font-bold block">Search Engine Crawl Pipeline Verified</span>
                <p className="text-indigo-800 text-[11px]">
                  Your sitemap index (<code className="font-mono text-indigo-950 font-bold">{result.sitemapUrl}</code>) is also actively advertised in <code className="font-mono font-bold">/robots.txt</code>. Both Googlebot and Bingbot read this configuration during scheduled index cycles.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
