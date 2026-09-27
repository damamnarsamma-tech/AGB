import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';

export default function robots(): MetadataRoute.Robots {
  const adminDisallows = ['/admin/', '/api/'];
  const userAgents = [
    '*',
    'GPTBot',
    'ChatGPT-User',
    'Google-Extended',
    'Anthropic-AI',
    'Claude-Web',
    'ClaudeBot',
    'PerplexityBot',
    'Applebot',
    'cohere-ai'
  ];

  return {
    rules: userAgents.map(ua => ({
      userAgent: ua,
      allow: '/',
      disallow: adminDisallows,
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

