'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, TrendingUp } from 'lucide-react'

const CompanyOverview = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-slate-950 overflow-hidden">
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
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-effect rounded-full border border-primary-500/30">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">About Us</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-space">
            <span className="text-white">Company </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 neon-text">
              Overview
            </span>
          </h1>

          {/* Content Cards */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-slate-700/50 hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary-400" size={24} />
                </div>
                <p className="text-gray-300 text-left">
                  Perfionix AI is an <span className="text-primary-400 font-semibold">AI consulting and solutions company</span> driven by innovation, ethics, and technology. 
                  We empower businesses through data intelligence, automation, and smart decision-making systems across 
                  key sectors like <span className="text-secondary-400 font-semibold">Agriculture, Healthcare, Energy, Food, and Banking</span>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-slate-700/50 hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-accent-400" size={24} />
                </div>
                <p className="text-gray-300 text-left">
                  We blend <span className="text-accent-400 font-semibold">technical excellence</span> with human-centric innovation to create AI solutions that deliver 
                  measurable value and sustainable growth. Our team of passionate innovators is on a mission to make 
                  Artificial Intelligence <span className="text-primary-400 font-semibold">accessible, impactful, and ethical</span> for every sector.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 mt-16"
          >
            {[
              { value: '5+', label: 'Industries Served' },
              { value: '100%', label: 'Ethical AI' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 border border-primary-500/20 hover-lift">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyOverview
