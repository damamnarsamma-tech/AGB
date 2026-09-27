import type { Metadata, Viewport } from 'next';
import React, { Suspense } from 'react';
import './globals.css';

import { BRAND } from '@/lib/brand';
import { SITE_URL, buildCanonicalUrl } from '@/lib/site-url';
import ContactPopup from '@/components/ContactPopup';
import TopProgressBar from '@/components/TopProgressBar';
import WebsiteSchema from '@/components/WebsiteSchema';
import { generateSeoTitle } from '@/lib/seo-title-engine';

export const viewport: Viewport = {
  themeColor: '#f59e0b',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: generateSeoTitle({
      searchIntent: 'Gold Buyers',
      location: 'Andhra Pradesh & Telangana'
    }),
    template: '%s'
  },
  description: BRAND.shortDescription,
  authors: [{ name: BRAND.name }],
  icons: {
    icon: '/icon.png',
  },
  alternates: {
    canonical: buildCanonicalUrl('')
  },
  openGraph: {
    title: `${BRAND.name} | Premier Gold Buyers in AP & Telangana`,
    description: BRAND.shortDescription,
    url: SITE_URL,
    siteName: BRAND.name,
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | Premier Gold Buyers`,
    description: BRAND.shortDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'google1a7723d7eae90acd'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <WebsiteSchema />
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        {children}
        <Suspense fallback={null}>
          <ContactPopup />
        </Suspense>
      </body>
    </html>
  );
}
