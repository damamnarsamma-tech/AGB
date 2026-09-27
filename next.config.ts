import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  allowedDevOrigins: [
    'localhost:3000',
    '*.run.app',
    '*.asia-east1.run.app',
    '*.asia-southeast1.run.app',
    'ais-dev-g5jmczybj2uzijcsmjfvwe-596191883642.asia-southeast1.run.app',
    'ais-pre-g5jmczybj2uzijcsmjfvwe-596191883642.asia-southeast1.run.app',
  ],
  turbopack: {},
  typescript: {
    ignoreBuildErrors: false,
  },
  // Image optimization for modern WebP/AVIF formats and responsive sizing
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['motion'],
  async redirects() {
    return [
      // Fix legacy backlink routes with /main/ segment
      {
        source: '/:state/:district/main/:mandal/:locality*',
        destination: '/:state/:district/:mandal/:locality*',
        permanent: true,
      },
      {
        source: '/:state/:district/main/:mandal',
        destination: '/:state/:district/:mandal',
        permanent: true,
      },
      // Fix common legacy service backlink aliases
      {
        source: '/services/sell-gold-for-cash',
        destination: '/services/sell-gold',
        permanent: true,
      },
      {
        source: '/services/cash-for-gold',
        destination: '/services/sell-gold',
        permanent: true,
      },
      {
        source: '/services/release-gold-loan',
        destination: '/services/pledged-gold-release',
        permanent: true,
      },
      {
        source: '/services/gold-loan-transfer',
        destination: '/services/loan-transfer',
        permanent: true,
      },
      {
        source: '/calculator',
        destination: '/gold-valuation-calculator',
        permanent: true,
      },
      {
        source: '/rates',
        destination: '/gold-rate',
        permanent: true,
      },
      {
        source: '/today-gold-rate',
        destination: '/gold-rate',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/jewellery/jewellery',
        destination: '/jewellery',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
