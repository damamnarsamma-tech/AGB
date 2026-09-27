import { BRAND } from './brand';

export interface SeoTitleOptions {
  brandName?: string | null;
  primaryPhone?: string | null;
  secondaryPhone?: string | null;
  searchIntent?: string | null;
  location?: string | null;
}

/**
 * Sanitizes a string fragment for inclusion in SEO titles:
 * - Removes placeholder tokens like [LOCATION], undefined, null, etc.
 * - Collapses repeated whitespace.
 * - Trims edges.
 */
function sanitizeField(value: string | null | undefined): string | null {
  if (!value) return null;
  
  const trimmed = value.trim();
  if (!trimmed) return null;

  // Filter out literal placeholder strings or javascript artifacts
  const lower = trimmed.toLowerCase();
  if (
    lower === 'undefined' ||
    lower === 'null' ||
    lower === 'nan' ||
    lower === '[location]' ||
    lower === '[brand name]' ||
    lower === '[primary phone number]' ||
    lower === '[secondary phone number]' ||
    lower === '[search intent]' ||
    lower === 'n/a'
  ) {
    return null;
  }

  // Remove any bracketed tokens or excess whitespace
  const sanitized = trimmed
    .replace(/\[(?:brand name|primary phone number|secondary phone number|search intent|location)\]/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  return sanitized || null;
}

/**
 * Generates an automated, scalable SEO <title> following the strict pattern:
 * [BRAND NAME] | [PRIMARY PHONE NUMBER] | [SECONDARY PHONE NUMBER] - [SEARCH INTENT] in [LOCATION]
 *
 * Automatically removes unavailable/empty fields while preserving correct delimiters.
 */
export function generateSeoTitle(options: SeoTitleOptions): string {
  const brand = sanitizeField(options.brandName !== undefined ? options.brandName : BRAND.name);
  const phone1 = sanitizeField(options.primaryPhone !== undefined ? options.primaryPhone : BRAND.phone1Display);
  const phone2 = sanitizeField(options.secondaryPhone !== undefined ? options.secondaryPhone : BRAND.phone2Display);
  const intent = sanitizeField(options.searchIntent);
  const location = sanitizeField(options.location);

  // 1. Build prefix: [BRAND NAME] | [PRIMARY PHONE NUMBER] | [SECONDARY PHONE NUMBER]
  const prefixParts: string[] = [];
  if (brand) prefixParts.push(brand);
  if (phone1) prefixParts.push(phone1);
  if (phone2) prefixParts.push(phone2);
  const prefix = prefixParts.join(' | ');

  // 2. Build suffix: [SEARCH INTENT] in [LOCATION]
  let suffix = '';
  if (intent && location) {
    suffix = `${intent} in ${location}`;
  } else if (intent) {
    suffix = intent;
  } else if (location) {
    suffix = location;
  }

  // 3. Combine with ' - ' separator
  if (prefix && suffix) {
    return `${prefix} - ${suffix}`;
  }
  if (prefix) {
    return prefix;
  }
  return suffix || BRAND.name;
}
