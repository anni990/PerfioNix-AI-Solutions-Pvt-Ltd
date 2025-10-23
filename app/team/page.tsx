import type { Metadata } from 'next'
import TeamHero from '@/components/TeamHero'
import TeamMembers from '@/components/TeamMembers'
import TeamMessage from '@/components/TeamMessage'
import { SITE_URL } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Meet Perfionix AI Leadership & Experts',
  description: 'Get to know the Perfionix AI leadership and cross-functional experts driving AI innovation across industries.',
  openGraph: {
    title: 'Perfionix AI Team | AI Strategists, Engineers & Researchers',
    description: 'Perfionix AI team of strategists, engineers, and researchers delivers tailored AI solutions for enterprise challenges.',
    url: `${SITE_URL}/team`
  }
}

export default function Team() {
  return (
    <div>
      <TeamHero />
      <TeamMembers />
      <TeamMessage />
    </div>
  )
}
