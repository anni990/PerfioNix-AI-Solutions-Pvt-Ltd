'use client'

import { motion } from 'framer-motion'
import { Building2, Sparkles, Zap } from 'lucide-react'

const IndustriesHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 particle-bg" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-24 h-24 glass-card rounded-2xl flex items-center justify-center border border-primary-500/50 neon-glow animate-float">
              <Building2 className="text-primary-400" size={48} />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl" />
            </div>
          </motion.div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-primary-500/30">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">Our Expertise</span>
            <Zap className="w-4 h-4 text-accent-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-space">
            <span className="text-white">Industries We </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 neon-text">
              Transform
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how Perfionix AI <span className="text-primary-400 font-semibold">revolutionizes key industries</span> with intelligent, 
            data-driven solutions that drive <span className="text-accent-400 font-semibold">innovation and sustainable growth</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesHero
