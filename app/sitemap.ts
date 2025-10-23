import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/siteConfig'

const routes = ['/', '/services', '/team', '/collaboration'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8
  }))
}
