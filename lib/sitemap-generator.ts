import { buildCanonicalUrl, SITE_URL } from './site-url';
import { locationHierarchy as hierarchyData } from './location-data';
import { SERVICES } from './services';
import { UNIVERSAL_SERVICES, JEWELLERY_TYPES } from './universal-engine';

export interface SitemapUrlEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
}

const TODAY_ISO = new Date().toISOString().split('T')[0];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrlsetXml(entries: SitemapUrlEntry[]): string {
  const urlNodes = entries
    .map(e => {
      const lastmod = e.lastmod || TODAY_ISO;
      const changefreq = e.changefreq || 'weekly';
      const priority = e.priority || '0.7';
      return `  <url>
    <loc>${escapeXml(e.loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;
}

/** 1. sitemap-core.xml: Core pages, tools, FAQs, About, Contact */
export function generateSitemapCoreXml(): string {
  const entries: SitemapUrlEntry[] = [
    { loc: buildCanonicalUrl(''), changefreq: 'daily', priority: '1.0' },
    { loc: buildCanonicalUrl('gold-rate'), changefreq: 'daily', priority: '0.95' },
    { loc: buildCanonicalUrl('gold-valuation-calculator'), changefreq: 'daily', priority: '0.95' },
    { loc: buildCanonicalUrl('services'), changefreq: 'weekly', priority: '0.90' },
    { loc: buildCanonicalUrl('metals'), changefreq: 'weekly', priority: '0.85' },
    { loc: buildCanonicalUrl('jewellery'), changefreq: 'weekly', priority: '0.85' },
    { loc: buildCanonicalUrl('faq'), changefreq: 'weekly', priority: '0.80' },
    { loc: buildCanonicalUrl('about'), changefreq: 'monthly', priority: '0.75' },
    { loc: buildCanonicalUrl('contact'), changefreq: 'monthly', priority: '0.75' }
  ];
  return buildUrlsetXml(entries);
}

/** 2. sitemap-services.xml: All Core Service Landing Pages */
export function generateSitemapServicesXml(): string {
  const seenSlugs = new Set<string>();
  const entries: SitemapUrlEntry[] = [
    { loc: buildCanonicalUrl('services'), changefreq: 'daily', priority: '0.95' }
  ];

  for (const sKey in UNIVERSAL_SERVICES) {
    const s = UNIVERSAL_SERVICES[sKey];
    if (seenSlugs.has(s.slug)) continue;
    seenSlugs.add(s.slug);

    entries.push({
      loc: buildCanonicalUrl(`services/${s.slug}`),
      changefreq: 'weekly',
      priority: s.slug.includes('pledged') || s.slug === 'sell-gold' ? '0.95' : '0.85'
    });
  }

  return buildUrlsetXml(entries);
}

/** 3. sitemap-metals.xml: Metal Specific Hub Pages */
export function generateSitemapMetalsXml(): string {
  const entries: SitemapUrlEntry[] = [
    { loc: buildCanonicalUrl('metals'), changefreq: 'daily', priority: '0.90' },
    { loc: buildCanonicalUrl('metals/gold'), changefreq: 'daily', priority: '0.90' },
    { loc: buildCanonicalUrl('metals/silver'), changefreq: 'daily', priority: '0.90' },
    { loc: buildCanonicalUrl('metals/platinum'), changefreq: 'weekly', priority: '0.80' },
    { loc: buildCanonicalUrl('metals/diamond'), changefreq: 'weekly', priority: '0.80' }
  ];
  return buildUrlsetXml(entries);
}

/** 3b. sitemap-jewellery.xml: Jewellery Hub & All Jewellery Type Pages */
export function generateSitemapJewelleryXml(): string {
  const seenSlugs = new Set<string>();
  const entries: SitemapUrlEntry[] = [
    { loc: buildCanonicalUrl('jewellery'), changefreq: 'daily', priority: '0.90' }
  ];

  for (const jKey in JEWELLERY_TYPES) {
    const j = JEWELLERY_TYPES[jKey];
    if (j.slug === 'jewellery') continue;
    if (seenSlugs.has(j.slug)) continue;
    seenSlugs.add(j.slug);

    entries.push({
      loc: buildCanonicalUrl(`jewellery/${j.slug}`),
      changefreq: 'weekly',
      priority: '0.85'
    });
  }

  return buildUrlsetXml(entries);
}

/** 4. sitemap-ap-districts.xml: AP State Root & All 26 District URLs */
export function generateSitemapApDistrictsXml(): string {
  const apObj = hierarchyData.states['andhra-pradesh'];
  const entries: SitemapUrlEntry[] = [
    { loc: buildCanonicalUrl('andhra-pradesh'), changefreq: 'daily', priority: '1.0' }
  ];

  if (apObj && apObj.districts) {
    for (const distKey in apObj.districts) {
      entries.push({
        loc: buildCanonicalUrl(`andhra-pradesh/${distKey}`),
        changefreq: 'weekly',
        priority: '0.85'
      });
    }
  }

  return buildUrlsetXml(entries);
}

/** 5. sitemap-ts-districts.xml: TS State Root & All 33 District URLs */
export function generateSitemapTsDistrictsXml(): string {
  const tsObj = hierarchyData.states['telangana'];
  const entries: SitemapUrlEntry[] = [
    { loc: buildCanonicalUrl('telangana'), changefreq: 'daily', priority: '1.0' }
  ];

  if (tsObj && tsObj.districts) {
    for (const distKey in tsObj.districts) {
      entries.push({
        loc: buildCanonicalUrl(`telangana/${distKey}`),
        changefreq: 'weekly',
        priority: '0.85'
      });
    }
  }

  return buildUrlsetXml(entries);
}

/** 6. sitemap-ap-cities.xml: AP Mandals, Cities & Urban Neighbourhoods */
export function generateSitemapApCitiesXml(): string {
  const apObj = hierarchyData.states['andhra-pradesh'];
  const entries: SitemapUrlEntry[] = [];

  if (apObj && apObj.districts) {
    for (const distKey in apObj.districts) {
      const dist = apObj.districts[distKey];
      if (dist.mandals) {
        // 1. Main city neighbourhoods
        if (dist.mandals.main) {
          const mainNeighbourhoods = dist.mandals.main.neighbourhoods || dist.mandals.main.localities || [];
          for (const loc of mainNeighbourhoods) {
            const locSlug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            entries.push({
              loc: buildCanonicalUrl(`andhra-pradesh/${distKey}/${locSlug}`),
              changefreq: 'monthly',
              priority: '0.75'
            });
          }
        }

        // 2. Mandals / Towns and their town neighbourhoods
        for (const mandalKey in dist.mandals) {
          if (mandalKey === 'main') continue;
          const m = dist.mandals[mandalKey];
          entries.push({
            loc: buildCanonicalUrl(`andhra-pradesh/${distKey}/${mandalKey}`),
            changefreq: 'monthly',
            priority: '0.70'
          });

          // Urban town neighbourhoods
          if (m.neighbourhoods) {
            for (const n of m.neighbourhoods) {
              entries.push({
                loc: buildCanonicalUrl(`andhra-pradesh/${distKey}/${mandalKey}/${n}`),
                changefreq: 'monthly',
                priority: '0.65'
              });
            }
          }
        }
      }
    }
  }

  return buildUrlsetXml(entries);
}

/** 7. sitemap-ts-cities.xml: TS Mandals, Cities & Urban Neighbourhoods */
export function generateSitemapTsCitiesXml(): string {
  const tsObj = hierarchyData.states['telangana'];
  const entries: SitemapUrlEntry[] = [];

  if (tsObj && tsObj.districts) {
    for (const distKey in tsObj.districts) {
      const dist = tsObj.districts[distKey];
      if (dist.mandals) {
        // 1. Main city neighbourhoods
        if (dist.mandals.main) {
          const mainNeighbourhoods = dist.mandals.main.neighbourhoods || dist.mandals.main.localities || [];
          for (const loc of mainNeighbourhoods) {
            const locSlug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            entries.push({
              loc: buildCanonicalUrl(`telangana/${distKey}/${locSlug}`),
              changefreq: 'monthly',
              priority: '0.75'
            });
          }
        }

        // 2. Mandals / Towns and their town neighbourhoods
        for (const mandalKey in dist.mandals) {
          if (mandalKey === 'main') continue;
          const m = dist.mandals[mandalKey];
          entries.push({
            loc: buildCanonicalUrl(`telangana/${distKey}/${mandalKey}`),
            changefreq: 'monthly',
            priority: '0.70'
          });

          // Urban town neighbourhoods
          if (m.neighbourhoods) {
            for (const n of m.neighbourhoods) {
              entries.push({
                loc: buildCanonicalUrl(`telangana/${distKey}/${mandalKey}/${n}`),
                changefreq: 'monthly',
                priority: '0.65'
              });
            }
          }
        }
      }
    }
  }

  return buildUrlsetXml(entries);
}

/** 8. sitemap-ap-villages.xml: All AP End Villages & Gram Panchayats (Strictly Rural Villages) */
export function generateSitemapApVillagesXml(): string {
  const apObj = hierarchyData.states['andhra-pradesh'];
  const entries: SitemapUrlEntry[] = [];

  if (apObj && apObj.districts) {
    for (const distKey in apObj.districts) {
      const dist = apObj.districts[distKey];
      if (dist.mandals) {
        for (const mandalKey in dist.mandals) {
          if (mandalKey === 'main') continue;
          const m = dist.mandals[mandalKey];
          const villages = m.villages || [];
          for (const loc of villages) {
            entries.push({
              loc: buildCanonicalUrl(`andhra-pradesh/${distKey}/${mandalKey}/${loc}`),
              changefreq: 'monthly',
              priority: '0.60'
            });
          }
        }
      }
    }
  }

  return buildUrlsetXml(entries);
}

/** 9. sitemap-ts-villages.xml: All TS End Villages & Gram Panchayats (Strictly Rural Villages) */
export function generateSitemapTsVillagesXml(): string {
  const tsObj = hierarchyData.states['telangana'];
  const entries: SitemapUrlEntry[] = [];

  if (tsObj && tsObj.districts) {
    for (const distKey in tsObj.districts) {
      const dist = tsObj.districts[distKey];
      if (dist.mandals) {
        for (const mandalKey in dist.mandals) {
          if (mandalKey === 'main') continue;
          const m = dist.mandals[mandalKey];
          const villages = m.villages || [];
          for (const loc of villages) {
            entries.push({
              loc: buildCanonicalUrl(`telangana/${distKey}/${mandalKey}/${loc}`),
              changefreq: 'monthly',
              priority: '0.60'
            });
          }
        }
      }
    }
  }

  return buildUrlsetXml(entries);
}

/** 10. sitemap-location-services-ap.xml: AP District x Service Combination URLs */
export function generateSitemapLocationServicesApXml(): string {
  const apObj = hierarchyData.states['andhra-pradesh'];
  const entries: SitemapUrlEntry[] = [];
  const topServices = SERVICES.map(s => s.slug);

  if (apObj && apObj.districts) {
    for (const distKey in apObj.districts) {
      for (const srvSlug of topServices) {
        entries.push({
          loc: buildCanonicalUrl(`andhra-pradesh/${distKey}/services/${srvSlug}`),
          changefreq: 'weekly',
          priority: '0.80'
        });
      }
    }
  }

  return buildUrlsetXml(entries);
}

/** 11. sitemap-location-services-ts.xml: TS District x Service Combination URLs */
export function generateSitemapLocationServicesTsXml(): string {
  const tsObj = hierarchyData.states['telangana'];
  const entries: SitemapUrlEntry[] = [];
  const topServices = SERVICES.map(s => s.slug);

  if (tsObj && tsObj.districts) {
    for (const distKey in tsObj.districts) {
      for (const srvSlug of topServices) {
        entries.push({
          loc: buildCanonicalUrl(`telangana/${distKey}/services/${srvSlug}`),
          changefreq: 'weekly',
          priority: '0.80'
        });
      }
    }
  }

  return buildUrlsetXml(entries);
}

/** 12. sitemap-images.xml: Image Metadata Sitemap */
export function generateSitemapImagesXml(): string {
  const siteLogo = escapeXml(buildCanonicalUrl('logo.png'));
  const heroImage = escapeXml(buildCanonicalUrl('og-banner.png'));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(SITE_URL)}</loc>
    <image:image>
      <image:loc>${siteLogo}</image:loc>
      <image:title>Akshaya Gold Buyers Corporate Logo</image:title>
      <image:caption>Akshaya Gold Buyers - Trusted Gold Buyers in Andhra Pradesh and Telangana</image:caption>
    </image:image>
    <image:image>
      <image:loc>${heroImage}</image:loc>
      <image:title>XRF Gold Testing &amp; Pledged Gold Release Desk</image:title>
      <image:caption>Instant cash for gold with German XRF laser purity testing and 0% melting loss</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${escapeXml(buildCanonicalUrl('gold-valuation-calculator'))}</loc>
    <image:image>
      <image:loc>${heroImage}</image:loc>
      <image:title>Live Gold Payout Calculator</image:title>
      <image:caption>Calculate instant spot market payout for 24K, 22K, 18K gold items</image:caption>
    </image:image>
  </url>
</urlset>`;
}

/** Legacy & Backwards Compatibility Exports */
export function generateStateSitemapXml(stateSlug: 'andhra-pradesh' | 'telangana'): string {
  return stateSlug === 'andhra-pradesh' ? generateSitemapApDistrictsXml() : generateSitemapTsDistrictsXml();
}
export const generateServicesSitemapXml = generateSitemapServicesXml;
export const generateSitemapApXml = generateSitemapApDistrictsXml;
export const generateSitemapTelanganaXml = generateSitemapTsDistrictsXml;
export const generateSitemapGoldXml = generateSitemapCoreXml;
export const generateSitemapSilverXml = generateSitemapMetalsXml;
export const generateSitemapOtherMetalsXml = generateSitemapMetalsXml;
export const generateSitemapGoldBuyingXml = generateSitemapServicesXml;
export const generateSitemapGoldSellingXml = generateSitemapServicesXml;
export const generateSitemapGoldExchangeXml = generateSitemapServicesXml;
export const generateSitemapGoldJewelleryBuyersXml = generateSitemapServicesXml;
export const generateSitemapPledgedGoldXml = generateSitemapServicesXml;
export const generateSitemapFaqXml = generateSitemapCoreXml;
export const generateSitemapGuidesXml = generateSitemapCoreXml;

/** Master sitemap.xml Index Generator */
export function generateSitemapIndexXml(): string {
  const childSitemaps = [
    'sitemap-core.xml',
    'sitemap-services.xml',
    'sitemap-metals.xml',
    'sitemap-jewellery.xml',
    'sitemap-ap-districts.xml',
    'sitemap-ts-districts.xml',
    'sitemap-ap-cities.xml',
    'sitemap-ts-cities.xml',
    'sitemap-ap-villages.xml',
    'sitemap-ts-villages.xml',
    'sitemap-location-services-ap.xml',
    'sitemap-location-services-ts.xml',
    'sitemap-images.xml',
    'sitemap-amp.xml'
  ];

  const sitemapNodes = childSitemaps
    .map(sm => {
      const loc = buildCanonicalUrl(sm);
      return `  <sitemap>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${TODAY_ISO}</lastmod>
  </sitemap>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNodes}
</sitemapindex>`;
}
