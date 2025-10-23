import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT_EMAIL, SITE_LOGO, SEO_KEYWORDS } from '@/lib/siteConfig'

// Lazy load ChatWidget for better performance
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { 
  ssr: false,
  loading: () => null 
})

// Navigation loader
const NavigationLoader = dynamic(() => import('@/components/NavigationLoader'), {
  ssr: false
})

// Optimize font loading with display swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Perfionix AI - Empowering Industries with Intelligent Innovation',
    template: '%s | Perfionix AI'
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Technology',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/'
    }
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Perfionix AI - Empowering Industries with Intelligent Innovation',
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: 'en_US',
    emails: [CONTACT_EMAIL],
    images: [
      {
        url: SITE_LOGO,
        width: 512,
        height: 512,
        alt: 'Perfionix AI logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfionix AI - Empowering Industries with Intelligent Innovation',
    description: SITE_DESCRIPTION,
    images: [SITE_LOGO],
    creator: '@PerfionixAI'
  },
  icons: {
    icon: [
      { url: '/Gemini_Generated_Image_c8hi16c8hi16c8hi.png', sizes: '32x32', type: 'image/png' },
      { url: '/Gemini_Generated_Image_c8hi16c8hi16c8hi.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/Gemini_Generated_Image_c8hi16c8hi16c8hi.png',
    shortcut: '/Gemini_Generated_Image_c8hi16c8hi16c8hi.png'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              url: SITE_URL,
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              email: CONTACT_EMAIL,
              logo: SITE_URL + SITE_LOGO,
              sameAs: [
                'https://www.linkedin.com/company/perfionix-ai/',
                'https://x.com/PerfionixAI'
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  email: CONTACT_EMAIL,
                  contactType: 'sales',
                  areaServed: 'Global',
                  availableLanguage: 'English'
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Perfionix AI',
              image: SITE_URL + SITE_LOGO,
              telephone: '',
              email: CONTACT_EMAIL,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Global',
                addressCountry: 'IN'
              },
              sameAs: [
                'https://www.linkedin.com/company/perfionix-ai/',
                'https://x.com/PerfionixAI'
              ],
              serviceType: [
                'AI Consulting',
                'Machine Learning Solutions',
                'Predictive Analytics',
                'AI Automation',
                'Generative AI Integration',
                'Digital Transformation'
              ],
              areaServed: {
                '@type': 'Place',
                name: 'Global'
              }
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <NavigationLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
