'use client'

import { motion } from 'framer-motion'
import { 
  Cpu, 
  Sprout, 
  Heart, 
  Zap, 
  Utensils, 
  CreditCard,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const KeyHighlights = () => {
  const highlights = [
    {
      icon: Cpu,
      title: 'AI Consulting & Product Development',
      description: 'Transform your business with cutting-edge AI solutions',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Sprout,
      title: 'Smart AgriTech Systems',
      description: 'Revolutionize agriculture with intelligent automation',
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: Heart,
      title: 'Next-Gen HealthTech Solutions',
      description: 'Enhance healthcare delivery with AI precision',
      gradient: 'from-red-500 to-pink-500',
      iconBg: 'bg-gradient-to-br from-red-500/20 to-pink-500/20',
      iconColor: 'text-red-400'
    },
    {
      icon: Zap,
      title: 'AI in Renewable Energy',
      description: 'Optimize energy systems for sustainable future',
      gradient: 'from-yellow-500 to-orange-500',
      iconBg: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Utensils,
      title: 'AI for Food Quality & Safety',
      description: 'Ensure food safety with intelligent monitoring',
      gradient: 'from-orange-500 to-red-500',
      iconBg: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400'
    },
    {
      icon: CreditCard,
      title: 'Banking & FinTech Intelligence',
      description: 'Secure financial operations with AI analytics',
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    }
  ]

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 particle-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-primary-500/30">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Highlights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive AI solutions across multiple industries, 
            powered by cutting-edge technology and innovation
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Animated Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                />
                
                {/* Card Content */}
                <div className="relative glass-card rounded-2xl p-8 h-full hover-lift cursor-pointer border border-slate-700/50 group-hover:border-primary-500/50 transition-all duration-300">
                  {/* Icon Container */}
                  <div className={`relative w-16 h-16 ${highlight.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${highlight.iconColor} group-hover:animate-pulse`} size={32} />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 transition-all duration-300 font-space">
                    {highlight.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-primary-400 font-semibold group-hover:text-primary-300 transition-colors">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} />
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-2xl" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KeyHighlights
