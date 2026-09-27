'use client';

import React, { useEffect, useState, useRef, useCallback, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function SearchParamsListener({ onChange }: { onChange: () => void }) {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams ? searchParams.toString() : '';

  useEffect(() => {
    onChange();
  }, [searchParamsString, onChange]);

  return null;
}

export default function TopProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleRouteChange = useCallback(() => {
    if (visible) {
      const frame = requestAnimationFrame(() => {
        setProgress(100);
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        resetTimerRef.current = setTimeout(() => {
          setVisible(false);
          setProgress(0);
        }, 300);
      });
      return () => {
        cancelAnimationFrame(frame);
      };
    }
  }, [visible]);

  useEffect(() => {
    handleRouteChange();
  }, [pathname, handleRouteChange]);

  // Intercept click on links for instant NProgress-style visual feedback
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const targetAttr = anchor.getAttribute('target');

      // Ignore external, download, mailto, tel, hash, or target="_blank" links
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('javascript:') ||
        targetAttr === '_blank' ||
        anchor.hasAttribute('download')
      ) {
        return;
      }

      // Check if same origin and different URL
      try {
        const url = new URL(href, window.location.href);
        if (url.origin === window.location.origin) {
          const currentUrl = window.location.pathname + window.location.search;
          const targetUrl = url.pathname + url.search;

          if (currentUrl !== targetUrl) {
            // Start progress bar
            if (timerRef.current) clearInterval(timerRef.current);
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

            setVisible(true);
            setProgress(15);

            // Progressive trickle
            let current = 15;
            timerRef.current = setInterval(() => {
              current += Math.random() * 12;
              if (current > 85) {
                current = 85;
                if (timerRef.current) clearInterval(timerRef.current);
              }
              setProgress(current);
            }, 180);
          }
        }
      } catch {
        // Ignore invalid URL
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      if (timerRef.current) clearInterval(timerRef.current);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsListener onChange={handleRouteChange} />
      </Suspense>
      {visible || progress > 0 ? (
        <div
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none h-[3px] bg-transparent"
        >
          <div
            className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 transition-all duration-200 ease-out shadow-[0_0_10px_rgba(245,158,11,0.8),0_0_4px_rgba(245,158,11,0.9)]"
            style={{
              width: `${progress}%`,
              opacity: visible ? 1 : 0,
              transitionProperty: 'width, opacity',
              transitionDuration: progress === 100 ? '200ms' : '250ms'
            }}
          >
            {/* Glow head */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-white/60 -skew-x-12" />
          </div>
        </div>
      ) : null}
    </>
  );
}
