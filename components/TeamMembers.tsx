'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'Shubham Rahangdale',
      role: 'Founder & CEO',
      expertise: 'AI Systems, Machine Learning, Product Innovation',
      image: '/Shubham.jpg'
    }
  ]

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative max-w-sm w-full"
            >
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur" />
              
              {/* Card Content */}
              <div className="relative glass-card rounded-2xl p-8 h-full hover-lift border border-slate-700/50 group-hover:border-primary-500/50 transition-all">
                {/* Profile Image */}
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-500/40 group-hover:border-primary-400 transition-all shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 transition-all font-space">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {member.expertise}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a href="#" className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-primary-500/30 hover:border-primary-400 transition-all hover:scale-110 group/icon">
                      <Linkedin className="text-gray-400 group-hover/icon:text-primary-400 transition-colors" size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-secondary-500/30 hover:border-secondary-400 transition-all hover:scale-110 group/icon">
                      <Twitter className="text-gray-400 group-hover/icon:text-secondary-400 transition-colors" size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-accent-500/30 hover:border-accent-400 transition-all hover:scale-110 group/icon">
                      <Github className="text-gray-400 group-hover/icon:text-accent-400 transition-colors" size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
