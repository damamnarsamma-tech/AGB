'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { resolvePageContext } from '@/lib/universal-engine';
import { generateWhatsAppUrl } from '@/lib/contact-config';

interface LiveRateCTAProps {
  className?: string;
  useAlternateNumber?: boolean;
  locationName?: string;
  serviceName?: string;
  materialName?: string;
  jewelleryName?: string;
  variant?: 'primary' | 'secondary' | 'navbar' | 'footer' | 'inline';
  label?: string;
  children?: React.ReactNode;
}

export default function LiveRateCTA({
  className = '',
  useAlternateNumber = false,
  locationName,
  serviceName,
  materialName,
  jewelleryName,
  variant = 'primary',
  label,
  children
}: LiveRateCTAProps) {
  const pathname = usePathname() || '';

  // 1. Resolve page-level context dynamically
  const resolved = resolvePageContext({ pathname });

  // 2. Select details from props or default to resolved context
  const activeLocation = locationName || resolved.location?.displayName;
  const activeService = serviceName || resolved.service?.name || resolved.service?.shortTitle;
  const activeMaterial = materialName || resolved.material?.name;
  const activeJewellery = jewelleryName || resolved.jewellery?.name;

  // 3. Build context-aware link
  const waUrl = generateWhatsAppUrl(
    {
      locationName: activeLocation,
      serviceName: activeService,
      materialName: activeMaterial,
      jewelleryName: activeJewellery
    },
    useAlternateNumber
  );

  // 4. Style variants
  let defaultStyle = 'inline-flex items-center justify-center gap-2 font-bold transition-all shadow-xs rounded-full uppercase tracking-wider cursor-pointer';
  
  if (variant === 'primary') {
    defaultStyle += ' px-6 py-3.5 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm shadow-md';
  } else if (variant === 'secondary') {
    defaultStyle += ' px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs border border-emerald-200';
  } else if (variant === 'navbar') {
    defaultStyle += ' px-3.5 py-2 bg-green-600 hover:bg-green-700 text-white text-xs rounded-xl';
  } else if (variant === 'footer') {
    defaultStyle = 'text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer';
  } else if (variant === 'inline') {
    defaultStyle = 'text-green-600 hover:text-green-700 font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5';
  }

  return (
    <a
      id={variant === 'navbar' ? 'header-whatsapp-btn' : (useAlternateNumber ? 'live-rate-cta-btn-alt' : 'live-rate-cta-btn')}
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${defaultStyle} ${className}`}
    >
      {variant !== 'footer' && (
        <MessageCircle className={variant === 'inline' ? 'w-4 h-4 fill-green-600' : 'w-4 h-4 fill-white'} />
      )}
      <span>{children || label || 'CHECK LIVE RATE'}</span>
    </a>
  );
}
