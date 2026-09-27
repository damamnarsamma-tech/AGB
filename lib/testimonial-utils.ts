import { TESTIMONIALS_DATA, Testimonial } from './testimonials';
import { locationHierarchy } from './location-data';

export interface TestimonialUrls {
  stateSlug: 'andhra-pradesh' | 'telangana';
  districtSlug: string;
  mandalSlug?: string;
  locationUrl: string;
  serviceSlug: string;
  serviceUrl: string;
  locationServiceUrl: string;
}

/**
 * Derives exact location and service URLs for any testimonial.
 * Maps testimonials to specific mandal/city pages or district pages.
 */
export function getTestimonialUrls(t: Testimonial): TestimonialUrls {
  const stateSlug: 'andhra-pradesh' | 'telangana' = t.state === 'Andhra Pradesh' ? 'andhra-pradesh' : 'telangana';
  const distSlug = t.district ? t.district.toLowerCase().trim() : '';

  let mandalSlug: string | undefined;
  const stateObj = locationHierarchy.states[stateSlug];
  const distObj = stateObj?.districts[distSlug];

  if (distObj && distObj.mandals) {
    const locText = t.location.toLowerCase();
    for (const [mSlug, mData] of Object.entries(distObj.mandals)) {
      if (mSlug !== 'main' && (locText.includes(mData.name.toLowerCase()) || locText.includes(mSlug.replace(/-/g, ' ')))) {
        mandalSlug = mSlug;
        break;
      }
    }
  }

  const locationUrl = mandalSlug ? `/${stateSlug}/${distSlug}/${mandalSlug}` : `/${stateSlug}/${distSlug}`;

  let serviceSlug = 'sell-gold';
  if (t.category === 'pledged-gold') serviceSlug = 'pledged-gold-release';
  else if (t.category === 'scrap-gold') serviceSlug = 'broken-scrap-gold';
  else if (t.category === 'silver-diamond') serviceSlug = 'silver-buyers';

  const serviceUrl = `/services/${serviceSlug}`;
  const locationServiceUrl = `${locationUrl}/services/${serviceSlug}`;

  return {
    stateSlug,
    districtSlug: distSlug,
    mandalSlug,
    locationUrl,
    serviceSlug,
    serviceUrl,
    locationServiceUrl
  };
}

/**
 * Filter testimonials for a specific location page (State, District, or Mandal).
 */
export function getTestimonialsForLocation(options: {
  stateSlug?: string;
  districtSlug?: string;
  mandalSlug?: string;
  limit?: number;
}): Testimonial[] {
  const { stateSlug, districtSlug, mandalSlug, limit = 6 } = options;

  const matches = TESTIMONIALS_DATA.filter(t => {
    const urls = getTestimonialUrls(t);
    if (stateSlug && urls.stateSlug !== stateSlug) return false;
    if (districtSlug && urls.districtSlug !== districtSlug) return false;
    if (mandalSlug && urls.mandalSlug && urls.mandalSlug !== mandalSlug) return false;
    return true;
  });

  if (matches.length > 0) {
    return matches.slice(0, limit);
  }

  // Fallback to state or general if district has fewer stories
  if (districtSlug || mandalSlug) {
    const stateMatches = TESTIMONIALS_DATA.filter(t => {
      const urls = getTestimonialUrls(t);
      return !stateSlug || urls.stateSlug === stateSlug;
    });
    return stateMatches.slice(0, limit);
  }

  return TESTIMONIALS_DATA.slice(0, limit);
}
