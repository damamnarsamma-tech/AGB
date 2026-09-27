import { BRAND } from './brand';

export interface ContactConfig {
  phone1Raw: string;
  phone1Display: string;
  phone1Tel: string;
  phone2Raw: string;
  phone2Display: string;
  phone2Tel: string;
  whatsapp1Number: string;
  whatsapp2Number: string;
  email: string;
  address: string;
  operatingHours: string;
}

export const CONTACT_CONFIG: ContactConfig = {
  phone1Raw: '7997433993',
  phone1Display: '+91 79974 33993',
  phone1Tel: 'tel:7997433993',
  phone2Raw: '8885288817',
  phone2Display: '+91 88852 88817',
  phone2Tel: 'tel:8885288817',
  whatsapp1Number: '917997433993',
  whatsapp2Number: '918885288817',
  email: 'info@akshayagoldbuyers.com',
  address: 'Somajiguda & Punjagutta Main Road, Hyderabad, Telangana 500082',
  operatingHours: '9:00 AM – 8:30 PM (Mon – Sun, 365 Days Open)'
};

/**
 * Builds a context-aware WhatsApp link with customized message
 */
export function buildWhatsAppLink(options?: {
  location?: string;
  service?: string;
  metal?: string;
  weightGrams?: number;
  useAlternateNumber?: boolean;
}): string {
  const number = options?.useAlternateNumber ? CONTACT_CONFIG.whatsapp2Number : CONTACT_CONFIG.whatsapp1Number;

  let msg = 'Hello Akshaya Gold Buyers, ';

  if (options?.service && options?.location) {
    msg += `I am looking for ${options.service} in ${options.location}. `;
  } else if (options?.location) {
    msg += `I want to sell gold / enquire about gold valuation in ${options.location}. `;
  } else if (options?.service) {
    msg += `I need assistance with ${options.service}. `;
  } else {
    msg += `I would like to enquire about gold buying and live spot valuation. `;
  }

  if (options?.metal) {
    msg += `Metal: ${options.metal}. `;
  }

  if (options?.weightGrams && options.weightGrams > 0) {
    msg += `Approx Weight: ${options.weightGrams} grams. `;
  }

  msg += `Please provide today's live rate and branch/doorstep valuation details.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

/**
 * Derives contextual heading and default location/service based on current pathname
 */
export function derivePageContext(pathname: string = ''): {
  headline: string;
  subheadline: string;
  locationName: string;
  serviceName: string;
} {
  const clean = pathname.replace(/^\/+|\/+$/g, '');

  if (!clean) {
    return {
      headline: 'How can we help you?',
      subheadline: 'Get instant spot valuation, German XRF testing, or pledged gold loan release across AP & Telangana.',
      locationName: 'Hyderabad / Andhra Pradesh & Telangana',
      serviceName: 'Gold Buying & Pledged Gold Release'
    };
  }

  const parts = clean.split('/');

  // 1. Services
  if (parts[0] === 'services' && parts[1]) {
    const sName = parts[1]
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return {
      headline: `Need help with ${sName}?`,
      subheadline: `Get immediate assistance, live bullion pricing, and instant payment for ${sName}.`,
      locationName: 'AP & Telangana',
      serviceName: sName
    };
  }

  // 2. Metals
  if (parts[0] === 'metals' && parts[1]) {
    const mName = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    return {
      headline: `Need help selling ${mName}?`,
      subheadline: `Get the highest spot price for ${mName} with zero melting loss and instant bank transfer.`,
      locationName: 'AP & Telangana',
      serviceName: `${mName} Valuation & Selling`
    };
  }

  // 3. States & Locations
  if (parts[0] === 'andhra-pradesh' || parts[0] === 'telangana') {
    const leaf = parts[parts.length - 1];
    const locName = leaf
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    const stateName = parts[0] === 'andhra-pradesh' ? 'Andhra Pradesh' : 'Telangana';

    return {
      headline: `Need help with Gold Buyers in ${locName}?`,
      subheadline: `Connect directly with our gold valuation and pledged loan closure team serving ${locName} (${stateName}).`,
      locationName: `${locName}, ${stateName}`,
      serviceName: 'Instant Cash for Gold / Pledged Gold Release'
    };
  }

  // 4. Gold Rate / Calculator / About / Contact / FAQ
  if (parts[0] === 'gold-rate') {
    return {
      headline: 'Need live gold rate & purity verification?',
      subheadline: 'Call our valuation desk for real-time benchmark rates for 24K, 22K 916 Hallmark, and 18K gold.',
      locationName: 'AP & Telangana',
      serviceName: 'Live Gold Rate Enquiry'
    };
  }

  if (parts[0] === 'gold-valuation-calculator') {
    return {
      headline: 'Need a free gold appraisal?',
      subheadline: 'Bring your jewellery or coins for 100% transparent German XRF laser testing with zero obligations.',
      locationName: 'AP & Telangana',
      serviceName: 'Gold Valuation & Appraisal'
    };
  }

  return {
    headline: 'How can we help you?',
    subheadline: 'Speak directly with our precious metals specialists in Andhra Pradesh and Telangana.',
    locationName: 'AP & Telangana',
    serviceName: 'Gold Buying Services'
  };
}

/**
 * Generates a dynamic, context-aware WhatsApp message for check live rate.
 */
export function generateLiveRateMessage(context: {
  locationName?: string;
  serviceName?: string;
  materialName?: string;
  jewelleryName?: string;
}): string {
  const loc = context.locationName && !context.locationName.includes('&') && !context.locationName.includes('AP') ? context.locationName.trim() : '';
  const srv = context.serviceName ? context.serviceName.trim() : '';
  const mat = context.materialName ? context.materialName.trim() : '';
  const jew = context.jewelleryName ? context.jewelleryName.trim() : '';

  let metal = 'gold'; // default
  let isSilver = false;
  let isPlatinum = false;

  const checkText = (text: string) => {
    if (text.toLowerCase().includes('silver')) {
      isSilver = true;
    } else if (text.toLowerCase().includes('platinum')) {
      isPlatinum = true;
    }
  };

  checkText(srv);
  checkText(mat);
  checkText(jew);

  if (isSilver) {
    metal = 'silver';
  } else if (isPlatinum) {
    metal = 'platinum';
  }

  let msg = 'Hello, I want to know the current';

  if (metal === 'silver') {
    msg += ' silver rate';
  } else if (metal === 'platinum') {
    msg += ' platinum rate';
  } else if (jew && jew.toLowerCase().includes('jewellery')) {
    msg += ' applicable gold jewellery rate';
  } else if (srv && srv.toLowerCase().includes('jewellery')) {
    msg += ' applicable gold jewellery rate';
  } else {
    msg += ' applicable gold rate';
  }

  // Include specific services when relevant (exclude general terms)
  if (srv && !isSilver && !isPlatinum && !srv.toLowerCase().includes('gold rate') && !srv.toLowerCase().includes('cash for gold') && !srv.toLowerCase().includes('gold buyers') && !srv.toLowerCase().includes('gold buying')) {
    msg += ` for ${srv.toLowerCase()}`;
  }

  if (loc) {
    msg += ` in ${loc}`;
  }

  msg += '.';
  return msg;
}

/**
 * Generates the full WhatsApp URL with a dynamic context-aware message.
 */
export function generateWhatsAppUrl(context: {
  locationName?: string;
  serviceName?: string;
  materialName?: string;
  jewelleryName?: string;
}, useAlternate: boolean = false): string {
  const message = generateLiveRateMessage(context);
  const number = useAlternate ? CONTACT_CONFIG.whatsapp2Number : CONTACT_CONFIG.whatsapp1Number;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

