import { locationHierarchy as hierarchyData } from './location-data';
import { BRAND, BranchHub, getBranchByDistrict, getBranchesByState } from './brand';
import { SERVICES } from './services';
import { buildCanonicalUrl } from './site-url';
import { generateSeoTitle } from './seo-title-engine';

export interface LocationDetail {
  slug: string;
  fullPath: string;
  canonicalUrl: string;
  isCoverage: boolean;
  stateSlug: 'andhra-pradesh' | 'telangana';
  stateName: string;
  districtSlug?: string;
  districtName?: string;
  mandalSlug?: string;
  mandalName?: string;
  localitySlug?: string;
  localityName?: string;
  displayName: string;
  level: 'state' | 'district' | 'mandal' | 'locality';
  locationType?: 'state' | 'district' | 'city' | 'town' | 'mandal' | 'locality' | 'neighbourhood' | 'village';
  isVillage?: boolean;
  isNeighbourhood?: boolean;
  physicalBranchHub?: BranchHub;
  nearestBranchHub?: BranchHub;
  breadcrumbs: { name: string; url: string }[];
  nearbyLocations: { name: string; url: string; distanceInfo?: string }[];
  parentLocation?: { name: string; url: string };
  childVillages?: { name: string; url: string; count?: number }[];
  childNeighbourhoods?: { name: string; url: string; count?: number }[];
  childLocations?: { name: string; url: string; count?: number }[];
  pageTitle: string;
  metaDescription: string;
  h1: string;
  introSnippet: string;
  serviceOverview: string;
  faqList: { q: string; a: string }[];
  structuredData: Record<string, any>;
}

export interface DistrictSummary {
  slug: string;
  name: string;
  stateSlug: 'andhra-pradesh' | 'telangana';
  stateName: string;
  url: string;
  coverageUrl: string;
  mandalCount: number;
  localityCount: number;
  popularTowns: string[];
}

export interface StateSummary {
  slug: 'andhra-pradesh' | 'telangana';
  name: string;
  url: string;
  coverageUrl: string;
  districtCount: number;
  totalLocations: number;
  districts: DistrictSummary[];
}

// Helper: convert slug to natural capitalized name
export function formatSlugToName(slug: string): string {
  if (!slug) return '';
  const overrides: Record<string, string> = {
    'ysr-kadapa': 'YSR Kadapa',
    'ntr': 'NTR (Vijayawada)',
    'alluri-sitharama-raju': 'Alluri Sitharama Raju',
    'sri-sathya-sai': 'Sri Sathya Sai (Puttaparthi)',
    'parvathipuram-manyam': 'Parvathipuram Manyam',
    'dr-br-ambedkar-konaseema': 'Dr. B.R. Ambedkar Konaseema',
    'konaseema': 'Dr. B.R. Ambedkar Konaseema',
    'ranga-reddy': 'Ranga Reddy',
    'medchal-malkajgiri': 'Medchal-Malkajgiri',
    'rajanna-sircilla': 'Rajanna Sircilla',
    'komaram-bheem-asifabad': 'Komaram Bheem Asifabad',
    'jayashankar-bhupalpally': 'Jayashankar Bhupalpally',
    'jogulamba-gadwal': 'Jogulamba Gadwal',
    'bhadradri-kothagudem': 'Bhadradri Kothagudem',
    'yadadri-bhuvanagiri': 'Yadadri Bhuvanagiri',
    'andhra-pradesh': 'Andhra Pradesh',
    'telangana': 'Telangana',
    'kphb-colony': 'KPHB Colony',
    'as-rao-nagar': 'AS Rao Nagar',
    'sr-nagar': 'SR Nagar',
    'ecil': 'ECIL',
    'mvp-colony': 'MVP Colony',
    'nad-kotha-road': 'NAD Kotha Road',
    'bhel-township': 'BHEL Township',
    'kt-road': 'KT Road',
    'mg-road': 'MG Road',
    'pg-road': 'PG Road',
    'rr-pet': 'RR Pet',
    'ngo-colony': 'NGO Colony',
    'vrc-center': 'VRC Center',
    'hitec-city': 'HITEC City',
    'lb-nagar': 'LB Nagar',
    'c-camp': 'C-Camp',
    'b-camp': 'B-Camp',
    'a-camp': 'A-Camp',
    'sbi-colony': 'SBI Colony',
    'rk-nagar': 'RK Nagar',
    'svn-colony': 'SVN Colony',
    'p-p-road': 'PP Road',
    'j-p-road': 'JP Road',
    'k-n-road': 'KN Road',
    'd-b-colony': 'DB Colony',
    'ct-m-road': 'CTM Road',
    'mfk-road': 'MFK Road',
    'p-n-colony': 'PN Colony',
    'ntpc-township': 'NTPC Township',
    'ccc-naspur': 'CCC Naspur',
    'b-k-reddy-colony': 'BK Reddy Colony'
  };

  if (overrides[slug.toLowerCase()]) {
    return overrides[slug.toLowerCase()];
  }

  return slug
    .split('-')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Get all states summary
export function getAllStates(): StateSummary[] {
  const statesList: StateSummary[] = [];

  for (const sKey of ['andhra-pradesh', 'telangana'] as const) {
    const st = hierarchyData.states[sKey];
    if (!st) continue;

    const districtSummaries: DistrictSummary[] = [];
    let stateLocalityCount = 0;

    for (const dKey in st.districts) {
      const dist = (st.districts as Record<string, any>)[dKey];
      const mandalKeys = Object.keys(dist.mandals || {});
      let locCount = 0;
      const popularTowns: string[] = [];

      mandalKeys.forEach((mKey, idx) => {
        const m = dist.mandals[mKey];
        const locs = m.localities || [];
        locCount += locs.length + 1;
        if (idx < 6 && mKey !== 'main') {
          popularTowns.push(formatSlugToName(mKey));
        }
      });

      stateLocalityCount += locCount;

      districtSummaries.push({
        slug: dKey,
        name: dist.name || formatSlugToName(dKey),
        stateSlug: sKey,
        stateName: st.name,
        url: `/${sKey}/${dKey}`,
        coverageUrl: `/${sKey}/${dKey}`,
        mandalCount: mandalKeys.length,
        localityCount: locCount,
        popularTowns
      });
    }

    statesList.push({
      slug: sKey,
      name: st.name,
      url: `/${sKey}`,
      coverageUrl: `/${sKey}`,
      districtCount: districtSummaries.length,
      totalLocations: sKey === 'andhra-pradesh' ? hierarchyData.stats.totalApUrls : hierarchyData.stats.totalTgUrls,
      districts: districtSummaries.sort((a, b) => a.name.localeCompare(b.name))
    });
  }

  return statesList;
}

// Get all districts list
export function getAllDistricts(): DistrictSummary[] {
  const states = getAllStates();
  return states.flatMap(s => s.districts);
}

// Resolve any incoming URL path into structured location detail
export function resolveLocationPath(segments: string[]): LocationDetail | null {
  if (!segments || segments.length === 0) return null;

  let effectiveSegments = [...segments];
  let isCoverage = false;

  if (effectiveSegments[0] === 'coverage') {
    isCoverage = true;
    effectiveSegments.shift();
  } else if (effectiveSegments[0] === 'gold-buyers') {
    effectiveSegments.shift();
  }

  if (effectiveSegments.length === 0) return null;

  const rawStateSlug = effectiveSegments[0]?.toLowerCase();
  let stateSlug: 'andhra-pradesh' | 'telangana';

  if (rawStateSlug === 'andhra-pradesh' || rawStateSlug === 'ap') {
    stateSlug = 'andhra-pradesh';
  } else if (rawStateSlug === 'telangana' || rawStateSlug === 'tg') {
    stateSlug = 'telangana';
  } else {
    // If first segment is a known district slug, find its state
    const allDistricts = getAllDistricts();
    const match = allDistricts.find(d => d.slug === rawStateSlug);
    if (match) {
      stateSlug = match.stateSlug;
      effectiveSegments.unshift(stateSlug);
    } else {
      return null;
    }
  }

  const stateData = hierarchyData.states[stateSlug];
  if (!stateData) return null;

  const stateName = stateData.name;
  const districtSlug = effectiveSegments[1]?.toLowerCase();

  // LEVEL 1: STATE LEVEL PAGE (e.g. /andhra-pradesh or /telangana)
  if (!districtSlug || effectiveSegments.length === 1) {
    const allDistrictsInState = (getAllStates().find(s => s.slug === stateSlug)?.districts || []);
    const childLocations = allDistrictsInState.map(d => ({
      name: d.name,
      url: d.url,
      count: d.mandalCount + d.localityCount
    }));

    const nearbyLocations = allDistrictsInState.slice(0, 16).map(d => ({
      name: `Gold Buyers in ${d.name}`,
      url: d.url
    }));

    const pageTitle = generateSeoTitle({
      searchIntent: 'Gold Buyers',
      location: stateName
    });
    const metaDescription = `Looking to sell gold in ${stateName}? Contact ${BRAND.name} for gold buying, purity testing, and pledged gold release services across all areas. Call or WhatsApp for assistance.`;
    const h1 = `Gold Buyers in ${stateName}`;

    const stBranches = getBranchesByState(stateSlug);
    const stateHub = stBranches.find(b => b.isFlagship) || stBranches[0];

    return {
      slug: stateSlug,
      fullPath: stateSlug,
      canonicalUrl: buildCanonicalUrl(stateSlug),
      isCoverage,
      stateSlug,
      stateName,
      displayName: stateName,
      level: 'state',
      physicalBranchHub: stateHub,
      nearestBranchHub: stateHub,
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: stateName, url: `/${stateSlug}` }
      ],
      nearbyLocations,
      childLocations,
      pageTitle,
      metaDescription,
      h1,
      introSnippet: `Looking to sell gold in ${stateName}? ${BRAND.name} provides trusted gold buying, transparent non-destructive German XRF laser purity evaluation (0% melting loss), and immediate payment via bank transfer (IMPS/UPI) or cash. We serve individuals, families, and businesses across all regions of ${stateName}.`,
      serviceOverview: `Our services in ${stateName} include instant evaluation for hallmarked 916 jewellery, 24K pure gold coins and bars, antique gold, broken ornaments, silver articles, and pledged gold loan closure assistance.`,
      faqList: [
        {
          q: `Where can I sell gold in ${stateName}?`,
          a: `${BRAND.name} provides certified gold buying services across ${stateName}. Call our valuation helpline at ${BRAND.phone1Display} or ${BRAND.phone2Display} or message us on WhatsApp for assistance.`
        },
        {
          q: `How is gold purity verified in ${stateName}?`,
          a: `We use German XRF laser spectrometry to test the exact elemental purity of your gold in front of you without melting, cutting, or acid damage. Net weight is measured on Class II digital balances.`
        },
        {
          q: `How do I get a gold valuation in ${stateName}?`,
          a: `Contact ${BRAND.name} directly via call or WhatsApp. Share your jewellery or coin details for immediate assistance and current live market valuation.`
        },
        {
          q: `Can ${BRAND.name} assist in releasing pledged gold loans across ${stateName}?`,
          a: `Yes. We provide assistance to clear outstanding loan amounts at banks or NBFCs (Muthoot, Manappuram, IIFL, etc.), retrieve your jewellery safely, and disburse the remaining surplus cash directly to you.`
        }
      ],
      structuredData: generateSchemaMarkup(stateName, stateSlug, stateName, 'state')
    };
  }

  // LEVEL 2+: DISTRICT / MANDAL / LOCALITY
  const districtObj = (stateData.districts as Record<string, any>)[districtSlug];
  const districtName = districtObj?.name || formatSlugToName(districtSlug);

  let mandalSlug = '';
  let localitySlug = '';

  if (effectiveSegments.length >= 3) {
    if (effectiveSegments[2] === 'main') {
      mandalSlug = effectiveSegments[3] || '';
      localitySlug = effectiveSegments[4] || '';
    } else {
      mandalSlug = effectiveSegments[2] || '';
      localitySlug = effectiveSegments[3] || '';
    }
  }

  const mandalName = mandalSlug ? formatSlugToName(mandalSlug) : '';
  const localityName = localitySlug ? formatSlugToName(localitySlug) : '';

  let level: 'district' | 'mandal' | 'locality' = 'district';
  let cleanLeafName = districtName;

  if (localityName) {
    cleanLeafName = localityName;
    level = 'locality';
  } else if (mandalName) {
    cleanLeafName = mandalName;
    level = 'mandal';
  } else {
    cleanLeafName = districtName;
    level = 'district';
  }

  const displayName = cleanLeafName;

  // Build natural breadcrumbs without administrative prefixes
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: stateName, url: `/${stateSlug}` },
    { name: districtName, url: `/${stateSlug}/${districtSlug}` }
  ];

  if (mandalName && level !== 'district') {
    const mandalUrl = mandalSlug === 'main' ? `/${stateSlug}/${districtSlug}/main` : `/${stateSlug}/${districtSlug}/${mandalSlug}`;
    breadcrumbs.push({
      name: mandalName,
      url: mandalUrl
    });
  }

  if (localityName && level === 'locality') {
    const localityUrl = mandalSlug === 'main' ? `/${stateSlug}/${districtSlug}/main/${localitySlug}` : `/${stateSlug}/${districtSlug}/${mandalSlug}/${localitySlug}`;
    breadcrumbs.push({
      name: localityName,
      url: localityUrl
    });
  }

  // Gather nearby locations and child locations
  const nearbyLocations: { name: string; url: string; distanceInfo?: string }[] = [];
  const childLocations: { name: string; url: string; count?: number }[] = [];
  const childVillages: { name: string; url: string; count?: number }[] = [];
  const childNeighbourhoods: { name: string; url: string; count?: number }[] = [];
  let isVillage = false;
  let isNeighbourhood = false;

  if (districtObj) {
    const mandalKeys = Object.keys(districtObj.mandals || {});

    if (level === 'district') {
      // If the main city has urban neighbourhoods, place it prominently at the beginning of childLocations
      const rawCityNeighbourhoods = districtObj.mandals?.main?.neighbourhoods || districtObj.mandals?.main?.localities || [];
      if (rawCityNeighbourhoods.length > 0) {
        childLocations.push({
          name: `${districtName} City & Prime Localities (${rawCityNeighbourhoods.length} Neighbourhoods)`,
          url: `/${stateSlug}/${districtSlug}/main`,
          count: rawCityNeighbourhoods.length
        });
        rawCityNeighbourhoods.forEach((loc: string) => {
          childNeighbourhoods.push({
            name: formatSlugToName(loc),
            url: `/${stateSlug}/${districtSlug}/main/${loc}`
          });
        });
      }

      // Child locations are towns / mandals
      mandalKeys.slice(0, 48).forEach(mKey => {
        const m = districtObj.mandals[mKey];
        if (mKey !== 'main') {
          childLocations.push({
            name: m.name || formatSlugToName(mKey),
            url: `/${stateSlug}/${districtSlug}/${mKey}`,
            count: (m.villages || m.localities || []).length
          });
        }
      });

      // Nearby are neighboring districts
      const otherDistricts = getAllDistricts()
        .filter(d => d.stateSlug === stateSlug && d.slug !== districtSlug)
        .slice(0, 12);

      otherDistricts.forEach(od => {
        nearbyLocations.push({
          name: `Gold Buyers in ${od.name}`,
          url: od.url,
          distanceInfo: 'Nearby Area'
        });
      });
    } else if (level === 'mandal') {
      const currentMandal = districtObj.mandals[mandalSlug];
      const rawVillages = currentMandal?.villages || [];
      const rawNeighbourhoods = currentMandal?.neighbourhoods || [];

      // Urban neighbourhoods under this town / mandal
      rawNeighbourhoods.forEach((loc: string) => {
        const item = {
          name: formatSlugToName(loc),
          url: `/${stateSlug}/${districtSlug}/${mandalSlug}/${loc}`
        };
        childNeighbourhoods.push(item);
        childLocations.push(item);
      });

      // Rural revenue villages under this mandal
      rawVillages.forEach((loc: string) => {
        const item = {
          name: formatSlugToName(loc),
          url: `/${stateSlug}/${districtSlug}/${mandalSlug}/${loc}`
        };
        childVillages.push(item);
        childLocations.push(item);
      });

      // Fallback: if neither is set, use localities
      if (childNeighbourhoods.length === 0 && childVillages.length === 0 && currentMandal?.localities) {
        currentMandal.localities.forEach((loc: string) => {
          childLocations.push({
            name: formatSlugToName(loc),
            url: `/${stateSlug}/${districtSlug}/${mandalSlug}/${loc}`
          });
        });
      }

      // Nearby are other mandals in same area
      mandalKeys
        .filter(k => k !== mandalSlug && k !== 'main')
        .slice(0, 10)
        .forEach(k => {
          nearbyLocations.push({
            name: `Gold Buyers in ${formatSlugToName(k)}`,
            url: `/${stateSlug}/${districtSlug}/${k}`,
            distanceInfo: `Nearby`
          });
        });
    } else {
      // Locality level: check whether leaf is village or neighbourhood
      const currentMandal = districtObj.mandals[mandalSlug];
      const rawVillages = currentMandal?.villages || [];
      const rawNeighbourhoods = currentMandal?.neighbourhoods || (mandalSlug === 'main' ? (currentMandal?.localities || []) : []);

      isVillage = rawVillages.includes(localitySlug);
      isNeighbourhood = !isVillage && (rawNeighbourhoods.includes(localitySlug) || mandalSlug === 'main' || currentMandal?.isUrbanCenter);

      // Separate sibling villages and neighbourhoods
      rawVillages
        .filter((l: string) => l !== localitySlug)
        .forEach((loc: string) => {
          childVillages.push({
            name: formatSlugToName(loc),
            url: `/${stateSlug}/${districtSlug}/${mandalSlug}/${loc}`
          });
        });

      rawNeighbourhoods
        .filter((l: string) => l !== localitySlug)
        .forEach((loc: string) => {
          childNeighbourhoods.push({
            name: formatSlugToName(loc),
            url: mandalSlug === 'main' ? `/${stateSlug}/${districtSlug}/main/${loc}` : `/${stateSlug}/${districtSlug}/${mandalSlug}/${loc}`
          });
        });

      // Nearby locations: prioritize matching locality type
      if (isVillage) {
        rawVillages
          .filter((l: string) => l !== localitySlug)
          .slice(0, 10)
          .forEach((loc: string) => {
            nearbyLocations.push({
              name: `Gold Buyers in ${formatSlugToName(loc)} (Village)`,
              url: `/${stateSlug}/${districtSlug}/${mandalSlug}/${loc}`,
              distanceInfo: `Nearby Village`
            });
          });
      } else {
        rawNeighbourhoods
          .filter((l: string) => l !== localitySlug)
          .slice(0, 10)
          .forEach((loc: string) => {
            nearbyLocations.push({
              name: `Gold Buyers in ${formatSlugToName(loc)}`,
              url: mandalSlug === 'main' ? `/${stateSlug}/${districtSlug}/main/${loc}` : `/${stateSlug}/${districtSlug}/${mandalSlug}/${loc}`,
              distanceInfo: `Nearby Area`
            });
          });
      }

      if (mandalSlug && mandalSlug !== 'main') {
        nearbyLocations.unshift({
          name: `Gold Buyers in ${mandalName}`,
          url: `/${stateSlug}/${districtSlug}/${mandalSlug}`,
          distanceInfo: 'Area Center'
        });
      }
    }
  }

  const canonicalPath = effectiveSegments.join('/');
  const canonicalUrl = buildCanonicalUrl(canonicalPath);

  // Title: [BRAND NAME] | [PRIMARY PHONE NUMBER] | [SECONDARY PHONE NUMBER] - [SEARCH INTENT] in [LOCATION]
  const pageTitle = generateSeoTitle({
    searchIntent: 'Gold Buyers',
    location: cleanLeafName
  });
  // Meta description: Looking to sell gold in [LOCATION]? Contact Akshaya Gold Buyers for gold buying and jewellery-related services. Call or WhatsApp for assistance.
  const metaDescription = `Looking to sell gold in ${cleanLeafName}? Contact ${BRAND.name} for gold buying and jewellery-related services. Call or WhatsApp for assistance.`;
  // H1: Gold Buyers in [LOCATION]
  const h1 = `Gold Buyers in ${cleanLeafName}`;

  const introSnippet = `Looking to sell gold in ${cleanLeafName}? Contact ${BRAND.name} for immediate gold buying, jewellery evaluation, and precious metal services. We provide non-destructive German XRF laser purity testing (0% melting loss), certified digital weighing, and instant payout via bank transfer (IMPS/UPI) or cash.`;

  const serviceOverview = `Residents in ${cleanLeafName} can liquidate old gold jewellery, 916 hallmark ornaments, broken gold pieces, bank gold coins, silver articles, or receive assistance with pledged gold loan releases.`;

  const faqList = [
    {
      q: `Where can I sell gold in ${cleanLeafName}?`,
      a: `You can sell gold through ${BRAND.name}'s service network covering ${cleanLeafName}. Contact our customer desk at ${BRAND.phone1Display} or ${BRAND.phone2Display} or message us on WhatsApp for assistance.`
    },
    {
      q: `How is gold purity verified in ${cleanLeafName}?`,
      a: `Gold purity is tested using German XRF laser spectrometry in front of you with 0% melting loss. Net weight is measured on Class II digital balances with 0.001g precision.`
    },
    {
      q: `What documents do I need to sell gold in ${cleanLeafName}?`,
      a: `In accordance with statutory KYC norms, you will need a valid Government photo ID (Aadhaar Card, PAN Card, Voter ID, or Passport) and bank account details for instant electronic transfer.`
    },
    {
      q: `Can I sell broken, damaged, or unhallmarked gold in ${cleanLeafName}?`,
      a: `Yes. ${BRAND.name} accepts broken chains, single earrings, bent bangles, and unhallmarked antique gold with zero damage penalties. Payout is determined purely on verified fine metal content.`
    },
    {
      q: `How can I release pledged gold from a bank or pawnbroker in ${cleanLeafName}?`,
      a: `Contact ${BRAND.name} with your pledge receipt details. We assist by clearing your pending loan balance with the lender, retrieving your gold safely, and paying you the remaining cash surplus immediately.`
    }
  ];

  const branchHub = districtSlug ? getBranchByDistrict(districtSlug) : undefined;
  const nearestHub = branchHub || (getBranchesByState(stateSlug).find(b => b.isFlagship) || getBranchesByState(stateSlug)[0]);

  return {
    slug: cleanLeafName.toLowerCase().replace(/\s+/g, '-'),
    fullPath: canonicalPath,
    canonicalUrl,
    isCoverage,
    stateSlug,
    stateName,
    districtSlug,
    districtName,
    mandalSlug,
    mandalName,
    localitySlug,
    localityName,
    displayName,
    level,
    locationType: isVillage ? 'village' : isNeighbourhood ? 'neighbourhood' : level,
    isVillage,
    isNeighbourhood,
    physicalBranchHub: branchHub,
    nearestBranchHub: nearestHub,
    breadcrumbs,
    nearbyLocations,
    parentLocation: level !== 'district' ? { name: districtName, url: `/${stateSlug}/${districtSlug}` } : undefined,
    childVillages,
    childNeighbourhoods,
    childLocations,
    pageTitle,
    metaDescription,
    h1,
    introSnippet,
    serviceOverview,
    faqList,
    structuredData: generateSchemaMarkup(cleanLeafName, canonicalPath, `${districtName}, ${stateName}`, level, breadcrumbs, faqList)
  };
}

// Generate JSON-LD Schema markup without fake ratings or prices
function generateSchemaMarkup(
  locationName: string,
  path: string,
  areaServed: string,
  level: string,
  breadcrumbs: { name: string; url: string }[] = [],
  faqList: { q: string; a: string }[] = []
) {
  const pageUrl = buildCanonicalUrl(path);
  const graph: Record<string, any>[] = [
    {
      '@type': 'LocalBusiness',
      '@id': `${pageUrl}#business`,
      name: `${BRAND.name} - ${locationName}`,
      alternateName: BRAND.legalName,
      description: `Gold buying and precious metal evaluation services in ${locationName}, offering precision XRF testing, direct bank payout, and pledged gold loan closure assistance.`,
      url: pageUrl,
      telephone: [BRAND.phone1, BRAND.phone2],
      email: BRAND.email,
      currenciesAccepted: 'INR',
      paymentAccepted: 'Bank Transfer, UPI, Cash',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: areaServed
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '20:30'
        }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Gold & Precious Metal Buying Services',
        itemListElement: SERVICES.map(s => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${s.name} in ${locationName}`,
            description: s.summary
          }
        }))
      }
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: `Gold Buyers in ${locationName} | ${BRAND.name}`,
      description: `Looking to sell gold in ${locationName}? Contact ${BRAND.name} for gold buying and valuation assistance.`
    }
  ];

  // Add BreadcrumbList structured data
  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumbs`,
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: buildCanonicalUrl(crumb.url)
      }))
    });
  }

  // Add FAQPage structured data
  if (faqList && faqList.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqList.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
}

// Search locations for the autocomplete search bar
export function searchLocations(query: string, limit = 10): { name: string; url: string; type: string; state: string }[] {
  if (!query || query.trim().length < 2) return [];

  const q = query.toLowerCase().trim();
  const results: { name: string; url: string; type: string; state: string }[] = [];

  // 1. Search states
  for (const sKey of ['andhra-pradesh', 'telangana'] as const) {
    const sName = sKey === 'andhra-pradesh' ? 'Andhra Pradesh' : 'Telangana';
    if (sName.toLowerCase().includes(q) || sKey.includes(q)) {
      results.push({
        name: sName,
        url: `/${sKey}`,
        type: 'State',
        state: sName
      });
    }
  }

  // 2. Search districts
  const allDistricts = getAllDistricts();
  for (const dist of allDistricts) {
    if (dist.name.toLowerCase().includes(q) || dist.slug.includes(q)) {
      results.push({
        name: dist.name,
        url: dist.url,
        type: 'District',
        state: dist.stateName
      });
      if (results.length >= limit) return results;
    }
  }

  // 3. Search mandals and towns
  for (const sKey of ['andhra-pradesh', 'telangana'] as const) {
    const st = hierarchyData.states[sKey];
    if (!st) continue;

    for (const dKey in st.districts) {
      const dist = (st.districts as Record<string, any>)[dKey];
      const distName = dist.name || formatSlugToName(dKey);

      for (const mKey in dist.mandals) {
        const m = dist.mandals[mKey];
        const mName = m.name || formatSlugToName(mKey);

        if (mKey === 'main') {
          // Search city neighbourhoods of the district headquarter
          const cityNeighbourhoods = m.neighbourhoods || m.localities || [];
          for (const loc of cityNeighbourhoods) {
            const locName = formatSlugToName(loc);
            if (locName.toLowerCase().includes(q) || loc.includes(q)) {
              results.push({
                name: `${locName}, ${distName} City`,
                url: `/${sKey}/${dKey}/main/${loc}`,
                type: 'City Neighbourhood',
                state: st.name
              });
              if (results.length >= limit) return results;
            }
          }
          continue;
        }

        if (mName.toLowerCase().includes(q) || mKey.includes(q)) {
          results.push({
            name: `${mName}, ${distName}`,
            url: `/${sKey}/${dKey}/${mKey}`,
            type: m.isUrbanCenter ? 'City / Town' : 'Town / Mandal',
            state: st.name
          });
          if (results.length >= limit) return results;
        }

        // Search urban neighbourhoods under this mandal / town (never merged with villages!)
        if (m.neighbourhoods && m.neighbourhoods.length > 0) {
          for (const loc of m.neighbourhoods) {
            const locName = formatSlugToName(loc);
            if (locName.toLowerCase().includes(q) || loc.includes(q)) {
              results.push({
                name: `${locName}, ${mName} (Neighbourhood)`,
                url: `/${sKey}/${dKey}/${mKey}/${loc}`,
                type: 'Neighbourhood',
                state: st.name
              });
              if (results.length >= limit) return results;
            }
          }
        }

        // Search rural villages under this mandal (never merged with neighbourhoods!)
        if (m.villages && m.villages.length > 0) {
          for (const loc of m.villages) {
            const locName = formatSlugToName(loc);
            if (locName.toLowerCase().includes(q) || loc.includes(q)) {
              results.push({
                name: `${locName}, ${mName} (Village)`,
                url: `/${sKey}/${dKey}/${mKey}/${loc}`,
                type: 'Village',
                state: st.name
              });
              if (results.length >= limit) return results;
            }
          }
        }

        // Fallback: legacy localities if neither villages nor neighbourhoods array is present
        if (!m.neighbourhoods?.length && !m.villages?.length && m.localities) {
          for (const loc of m.localities) {
            const locName = formatSlugToName(loc);
            if (locName.toLowerCase().includes(q) || loc.includes(q)) {
              results.push({
                name: `${locName}, ${mName}`,
                url: `/${sKey}/${dKey}/${mKey}/${loc}`,
                type: 'Locality',
                state: st.name
              });
              if (results.length >= limit) return results;
            }
          }
        }
      }
    }
  }

  return results.slice(0, limit);
}
