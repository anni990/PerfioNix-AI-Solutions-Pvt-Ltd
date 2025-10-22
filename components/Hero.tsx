'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

const videoSrc = encodeURI('/BG Video.mp4')

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Background Video - Optimized */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={(e) => console.error('Video failed to load:', e)}
      />

      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Clean Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-block px-6 py-2 mb-8 glass-effect rounded-full border border-primary-500/30"
        >
          <span className="text-sm font-medium text-primary-400">Next-Gen AI Solutions</span>
        </motion.div>

        {/* Main Heading - Simplified */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-space"
        >
          Engineering Tomorrow with
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">
            Intelligent AI Today
          </span>
        </motion.h1>

        {/* Simplified Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Intelligent AI consulting and solutions that empower businesses to optimize performance and achieve sustainable growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/industries"
            className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="relative flex items-center text-white">
              Explore Our Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 rounded-xl font-semibold glass-effect border border-primary-500/50 hover:border-primary-400 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center text-white">
              <MessageCircle className="mr-2" size={20} />
              Talk to Experts
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
