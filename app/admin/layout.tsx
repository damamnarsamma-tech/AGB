import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Akshaya Gold Buyers - Secure Admin Console',
  description: 'Internal administration and analytics console.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
