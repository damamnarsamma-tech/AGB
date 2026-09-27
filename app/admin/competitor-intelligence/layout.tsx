import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Competitor Intelligence Console | Akshaya Gold Buyers',
  description: 'Akshaya Gold Buyers internal market gap analysis and competitor intelligence dashboard.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CompetitorIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
