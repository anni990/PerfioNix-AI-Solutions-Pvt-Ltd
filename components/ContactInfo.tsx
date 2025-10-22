'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Instagram, Sparkles, ExternalLink } from 'lucide-react'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'perfionixaisolutions@gmail.com',
      href: 'mailto:perfionixaisolutions@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6261330148',
      href: 'tel:+916261330148',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Nagpur, Maharashtra, India',
      href: '#',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: '#',
      label: 'Perfionix AI Solutions',
      color: 'primary'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      href: '#',
      label: '@perfionix_ai.io',
      color: 'accent'
    }
  ]

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-primary-500/30">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-300">Contact Information</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-space">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Touch</span>
            </h2>
            
            <div className="space-y-4">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="glass-card rounded-xl p-6 border border-slate-700/50 hover:border-primary-500/50 transition-all hover-lift">
                      <div className="flex items-start">
                        {/* Enhanced Icon Container */}
                        <div className="relative mr-4 flex-shrink-0">
                          <div className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                          <div className={`relative w-16 h-16 bg-gradient-to-br ${detail.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                            <Icon className="text-white drop-shadow-lg" size={28} strokeWidth={2.5} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">{detail.title}</h3>
                          <a 
                            href={detail.href} 
                            className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group/link"
                          >
                            <span>{detail.value}</span>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`group relative flex-1 glass-card rounded-xl p-4 border border-slate-700/50 hover:border-${social.color}-500/50 transition-all hover-lift`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br from-${social.color}-500/20 to-${social.color}-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className={`text-${social.color}-400`} size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{social.title}</p>
                          <p className="text-xs text-gray-400 truncate">{social.label}</p>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur" />
            
            <div className="relative glass-card rounded-2xl h-full min-h-[500px] border border-slate-700/50 group-hover:border-primary-500/50 transition-all overflow-hidden">
              <iframe
                title="Perfionix AI location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.857707917566!2d79.96204309999999!3d21.422731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b55154bef6f21%3A0x2c0783102d5015e4!2sTiroda%2C%20Maharashtra%20441714!5e0!3m2!1sen!2sin!4v1729151100000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary-300" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold font-space">Perfionix AI HQ</p>
                    <p className="text-sm text-gray-300">Tiroda, Maharashtra 441714, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
