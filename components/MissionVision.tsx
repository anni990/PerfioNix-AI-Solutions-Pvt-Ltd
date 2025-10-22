'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Sparkles } from 'lucide-react'

const MissionVision = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-primary-500/30">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">
            Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Vision</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Animated Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur" />
            
            <div className="relative glass-card rounded-2xl p-8 h-full border border-slate-700/50 group-hover:border-primary-500/50 transition-all hover-lift">
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Target className="text-primary-400" size={28} />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-space">Mission</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To enable industries to adopt AI <span className="text-primary-400 font-semibold">confidently and responsibly</span> — enhancing productivity, 
                transparency, and sustainability. We are committed to delivering AI solutions that create 
                <span className="text-secondary-400 font-semibold"> real-world impact</span> and drive positive change across communities.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Animated Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur" />
            
            <div className="relative glass-card rounded-2xl p-8 h-full border border-slate-700/50 group-hover:border-secondary-500/50 transition-all hover-lift">
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Eye className="text-secondary-400" size={28} />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400 font-space">Vision</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be India's <span className="text-secondary-400 font-semibold">most trusted AI innovation company</span>, delivering real-world impact across 
                vital sectors through smart, adaptive, and ethical AI. We envision a future where AI 
                empowers every industry to achieve <span className="text-accent-400 font-semibold">unprecedented growth and sustainability</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
