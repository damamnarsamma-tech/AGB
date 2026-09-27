'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Something went wrong</h2>
        <p className="text-sm text-slate-600">{error?.message || 'An unexpected error occurred.'}</p>
        {reset && (
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
