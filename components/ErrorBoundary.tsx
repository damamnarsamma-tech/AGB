'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  widgetName?: string;
  fallbackMessage?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error cleanly in development or diagnostic telemetry
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[ErrorBoundary - ${this.props.widgetName || 'Widget'}]`, error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const widgetLabel = this.props.widgetName || 'This section';

      return (
        <div className="w-full my-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center shadow-xs">
          <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-3">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-800">
            {widgetLabel} is temporarily unavailable
          </h4>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            {this.props.fallbackMessage ||
              'A temporary display issue occurred while rendering this widget. All customer assistance, live phones, and WhatsApp channels remain active.'}
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={this.handleRetry}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-colors shadow-2xs"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
