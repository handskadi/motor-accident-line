import type { MetadataRoute } from 'next';
import { brand } from '@/lib/brand';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${brand.domain}`;
  const now = new Date();
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${base}/privacy/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/terms/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/complaints/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/cookies/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
