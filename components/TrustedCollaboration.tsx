'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Sparkles, CheckCircle, Users, Building2, Lightbulb } from 'lucide-react'

const TrustedCollaboration = () => {
  const collaborationFeatures = [
    {
      icon: Users,
      title: 'Co-Creation',
      description: 'We work alongside your team to build solutions that truly fit your needs'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Bringing cutting-edge AI technology to solve your unique challenges'
    },
    {
      icon: CheckCircle,
      title: 'Commitment',
      description: 'Dedicated support from ideation to deployment and beyond'
    }
  ]

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-primary-500/30">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-gray-300">Partnership & Collaboration</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space">
            Building the Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Together</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            At Perfionix AI, we believe in the power of collaboration. We partner with <span className="text-primary-400 font-semibold">startups, enterprises, and researchers</span> to transform ideas into intelligent solutions that drive real impact.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Partnership Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur" />
            
            <div className="relative glass-card rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center">
                  <Heart className="text-primary-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white font-space">Our Approach</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                We don't just deliver solutions—we build lasting partnerships. Our collaborative approach ensures that every project is tailored to your unique goals, challenges, and vision for the future.
              </p>

              <div className="space-y-4">
                {collaborationFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 glass-effect rounded-lg border border-slate-700/30 hover:border-primary-500/50 transition-all"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur" />
            
            <div className="relative glass-card rounded-2xl p-10 border border-slate-700/50 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
                <Building2 className="text-secondary-400" size={40} />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 font-space">
                Ready to Collaborate?
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're a startup looking to integrate AI or an enterprise seeking to scale your operations, we're here to partner with you every step of the way.
              </p>

              <Link
                href="/collaboration"
                className="group/btn relative block px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
                <span className="relative flex items-center justify-center text-white">
                  <Heart className="mr-2" size={20} />
                  Start Your Journey
                </span>
              </Link>

              <p className="text-sm text-gray-500 mt-4">
                Join our growing network of successful partnerships
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrustedCollaboration
