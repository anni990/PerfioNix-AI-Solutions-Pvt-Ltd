import type { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import { SITE_URL } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'AI Services & Automation Solutions | Perfionix AI',
  description: 'Discover Perfionix AI services including AI automation, predictive analytics, NLP, computer vision, and generative AI integration tailored for enterprise transformation.',
  openGraph: {
    title: 'Perfionix AI Services | Enterprise AI & Automation Experts',
    description: 'From AI automation to cloud deployment, explore Perfionix AI services designed to accelerate digital innovation.',
    url: `${SITE_URL}/services`
  }
}

export default function Services() {
  return (
    <div>
      <ServicesHero />
      <ServicesList />
    </div>
  )
}
