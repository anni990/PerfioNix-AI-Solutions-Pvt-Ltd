import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic'

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
  title: 'Perfionix AI - Empowering Industries with Intelligent Innovation',
  description: 'Perfionix AI provides intelligent AI consulting and solutions that empower businesses to optimize performance, drive innovation, and achieve sustainable growth.',
  keywords: 'AI consulting, machine learning, artificial intelligence, AgriTech, HealthTech, FinTech, AI solutions',
  authors: [{ name: 'Perfionix AI' }],
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
