import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import KeyHighlights from '@/components/KeyHighlights'
import TrustedCollaboration from '@/components/TrustedCollaboration'
import { SITE_URL, SITE_DESCRIPTION } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'AI Consulting & Intelligent Solutions for Enterprises',
  description: SITE_DESCRIPTION,
  openGraph: {
    title: 'Perfionix AI | Enterprise AI Consulting & Solutions',
    description: SITE_DESCRIPTION,
    url: SITE_URL
  }
}

export default function Home() {
  return (
    <div>
      <Hero />
      <KeyHighlights />
      <TrustedCollaboration />
    </div>
  )
}
