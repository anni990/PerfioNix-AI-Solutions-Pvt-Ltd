"use client"

import CollaborationForm from '@/components/CollaborationForm'
import TrustedCollaboration from '@/components/TrustedCollaboration'
import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Strategic AI Partnerships',
    description: 'Co-create scalable AI platforms with our experienced product and research teams.'
  },
  {
    title: 'Enterprise Integration',
    description: 'Seamless deployment across your data infrastructure and business workflows.'
  },
  {
    title: 'Innovation Sprints',
    description: 'Rapid prototyping with clear success metrics and dedicated collaboration pods.'
  }
]

export default function CollaborationPage() {
  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="absolute inset-0 particle-bg" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-primary-500/30 text-primary-300 text-sm font-medium">
              Let’s Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-space font-bold text-white leading-tight">
              Collaborate with Perfionix AI
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Perfionix AI teams up with forward-thinking organizations to drive intelligent innovation.
              Share your partnership proposal and we will connect within 48 hours.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="glass-card rounded-2xl border border-slate-800/70 p-5">
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-3xl border border-slate-800/60 p-8 backdrop-blur-xl"
          >
            <h3 className="text-white text-xl font-semibold mb-4 font-space">Need a quick call?</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Email us at <span className="text-primary-300 font-medium">rahangdaleshubham2003@gmail.com</span> or
              schedule a discovery call after submitting the form.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <p><span className="text-primary-300 font-medium">•</span> NDA-ready engagement for enterprise partners</p>
              <p><span className="text-primary-300 font-medium">•</span> Dedicated solution architects assigned</p>
              <p><span className="text-primary-300 font-medium">•</span> Custom AI roadmap within 10 business days</p>
            </div>
          </motion.div>
        </div>
      </section>

      <CollaborationForm />
      <TrustedCollaboration />
    </div>
  )
}
