import React from 'react';
import { BRAND } from '@/lib/brand';
import { SITE_URL } from '@/lib/site-url';

export default function WebsiteSchema() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND.name,
        description: BRAND.shortDescription,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/andhra-pradesh?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        },
        inLanguage: 'en-IN'
      },
      {
        '@type': ['LocalBusiness', 'FinancialService', 'Organization'],
        '@id': `${SITE_URL}/#organization`,
        name: BRAND.name,
        legalName: BRAND.legalName,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/icon.png`,
          width: 512,
          height: 512
        },
        image: `${SITE_URL}/icon.png`,
        telephone: [BRAND.phone1, BRAND.phone2],
        email: BRAND.email,
        priceRange: '₹₹₹',
        paymentAccepted: BRAND.paymentModes,
        currenciesAccepted: 'INR',
        address: {
          '@type': 'PostalAddress',
          streetAddress: BRAND.headOffice.street,
          addressLocality: BRAND.headOffice.city,
          addressRegion: BRAND.headOffice.state,
          postalCode: BRAND.headOffice.postalCode,
          addressCountry: BRAND.headOffice.country
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 17.4265,
          longitude: 78.4528
        },
        openingHours: BRAND.operatingHours,
        department: BRAND.branches.map(branch => ({
          '@type': 'LocalBusiness',
          name: branch.name,
          address: branch.address,
          telephone: branch.phone,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: branch.lat,
            longitude: branch.lng
          }
        })),
        areaServed: [
          {
            '@type': 'State',
            name: 'Andhra Pradesh'
          },
          {
            '@type': 'State',
            name: 'Telangana'
          }
        ],
        sameAs: [
          'https://www.facebook.com/akshayagoldbuyers',
          'https://www.instagram.com/akshayagoldbuyers',
          'https://twitter.com/akshayagold',
          'https://www.youtube.com/@akshayagoldbuyers'
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How does Akshaya Gold Buyers calculate the gold value?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Akshaya Gold Buyers calculates gold value using live bullion spot market benchmarks and laboratory-grade, non-destructive German XRF laser spectrometers to determine exact karat purity and fine weight with 0% melting loss and no acid damage.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does Akshaya Gold Buyers release pledged gold from banks and NBFCs?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We evaluate your gold loan statement, accompany you to your lender branch (such as Muthoot, Manappuram, IIFL, or nationalized banks), clear the complete outstanding dues on the spot, safely retrieve your gold ornaments, and pay you the remaining cash surplus immediately.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Where are Akshaya Gold Buyers branches located?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Akshaya Gold Buyers operates official physical customer branches in Hyderabad (Somajiguda / Punjagutta), Kurnool (Park Road near Raj Vihar), and Nandyal (Sanjeeva Nagar near Gandhi Chowk), alongside mobile bank-escort coordinators across Andhra Pradesh and Telangana.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What documents are required to sell gold at Akshaya Gold Buyers?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'To comply with statutory RBI and PMLA KYC regulations, sellers must provide one valid Government-issued photo ID (Aadhaar Card, PAN Card, Voter ID, or Passport) and bank account details for instant electronic transfer.'
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      id="website-org-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
