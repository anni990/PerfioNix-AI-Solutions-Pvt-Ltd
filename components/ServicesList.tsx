'use client'

import { motion } from 'framer-motion'
import { 
  Route,
  TrendingUp,
  MessageSquare,
  Eye,
  Cog,
  Database,
  Cloud,
  Code,
  Layers
} from 'lucide-react'

const ServicesList = () => {
  const services = [
    {
      icon: Route,
      title: 'AI Roadmap Design',
      description: 'Strategic planning and roadmap development for successful AI implementation across your organization.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced analytics solutions that help predict trends, optimize operations, and drive data-driven decisions.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing (NLP)',
      description: 'Intelligent text and speech processing solutions for chatbots, sentiment analysis, and content understanding.'
    },
    {
      icon: Eye,
      title: 'Computer Vision & Image Recognition',
      description: 'Cutting-edge visual AI solutions for object detection, image classification, and automated visual inspection.'
    },
    {
      icon: Cog,
      title: 'AI Automation Systems',
      description: 'Streamline workflows and reduce manual tasks with intelligent automation and robotic process automation.'
    },
    {
      icon: Database,
      title: 'Generative AI Integration',
      description: 'Harness the power of generative AI for content creation, design assistance, and innovative applications.'
    },
    {
      icon: Cloud,
      title: 'Cloud AI Deployment',
      description: 'Seamless deployment of AI solutions on cloud platforms with scalability, security, and performance optimization.'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications tailored to your brand with seamless integrations and optimized performance.'
    },
    {
      icon: Layers,
      title: 'Software Development',
      description: 'End-to-end software engineering services from architecture to deployment across web, desktop, and mobile platforms.'
    }
  ]

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Animated Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur" />
                
                {/* Card Content */}
                <div className="relative glass-card rounded-2xl p-6 h-full hover-lift border border-slate-700/50 group-hover:border-primary-500/50 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-primary-400 group-hover:animate-pulse" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 transition-all font-space">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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

export default ServicesList
