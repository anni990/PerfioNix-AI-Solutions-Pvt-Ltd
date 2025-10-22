'use client'

import { motion } from 'framer-motion'
import { Quote, Sparkles } from 'lucide-react'

const TeamMessage = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Animated Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur" />
          
          {/* Card Content */}
          <div className="relative glass-card rounded-2xl p-12 border border-slate-700/50 group-hover:border-primary-500/50 transition-all">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-effect rounded-full border border-primary-500/30">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">Our Mission</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-space">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Mission</span>
            </h2>
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center">
                <Quote className="text-primary-400" size={32} />
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-gray-300 leading-relaxed italic mb-8 font-inter">
              "We are a team of <span className="text-primary-400 font-semibold not-italic">passionate innovators</span> on a mission to make Artificial Intelligence 
              <span className="text-accent-400 font-semibold not-italic"> accessible, impactful, and ethical</span> for every sector."
            </blockquote>
            
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
              <div className="pt-8">
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Together, we combine our <span className="text-secondary-400 font-semibold">diverse expertise</span> to create AI solutions that not only solve 
                  complex problems but also create <span className="text-primary-400 font-semibold">lasting positive impact</span> on businesses and communities.
                </p>
              </div>
            </div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamMessage
