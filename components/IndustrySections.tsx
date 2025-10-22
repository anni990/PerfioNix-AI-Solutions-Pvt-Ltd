'use client'

import { motion } from 'framer-motion'
import { 
  Sprout, 
  Heart, 
  Zap, 
  Utensils, 
  CreditCard,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const IndustrySections = () => {
  const industries = [
    {
      id: 'agritech',
      icon: Sprout,
      title: 'AgriTech Solutions',
      subtitle: 'Empowering farmers and agribusinesses with AI-driven insights.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      solutions: [
        'Crop Health Detection & Yield Prediction',
        'Soil Nutrient Analysis',
        'Smart Irrigation & Resource Optimization',
        'Climate Impact Analysis',
        'Farm Automation Systems'
      ]
    },
    {
      id: 'healthtech',
      icon: Heart,
      title: 'HealthTech Innovations',
      subtitle: 'Transforming healthcare through intelligent, data-driven technologies.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-800',
      solutions: [
        'AI-Based Disease Prediction',
        'Medical Image Analysis',
        'Patient Data Insights',
        'Personalized Health Recommendations',
        'Smart Hospital Automation'
      ]
    },
    {
      id: 'renewable',
      icon: Zap,
      title: 'Renewable Energy Intelligence',
      subtitle: 'Sustainable energy meets smart analytics.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
      solutions: [
        'Power Generation Forecasting',
        'Smart Grid Optimization',
        'Predictive Maintenance',
        'Energy Efficiency Modeling',
        'AI Sustainability Dashboards'
      ]
    },
    {
      id: 'foodtech',
      icon: Utensils,
      title: 'FoodTech AI Solutions',
      subtitle: 'Enhancing quality, nutrition, and supply chain intelligence with AI.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-800',
      solutions: [
        'Food Freshness & Quality Detection (Computer Vision)',
        'Nutritional Content Analysis',
        'Demand Forecasting',
        'AI-based Supply Chain Optimization',
        'Smart Inventory Management'
      ]
    },
    {
      id: 'banking',
      icon: CreditCard,
      title: 'Banking & FinTech AI Solutions',
      subtitle: 'Empowering financial institutions with AI-based automation, fraud detection, and intelligent insights.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800',
      solutions: [
        'Fraud Detection & Risk Scoring',
        'Customer Behavior Analytics',
        'AI Chatbots & Virtual Banking Assistants',
        'Loan Eligibility & Credit Scoring Models',
        'Personalized Financial Recommendations',
        'Real-Time Transaction Anomaly Detection',
        'Document & KYC Automation'
      ],
      description: 'Perfionix AI helps banks and fintech firms leverage AI to improve decision accuracy, reduce operational costs, and enhance customer trust.'
    }
  ]

  return (
    <div className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {industries.map((industry, index) => {
          const Icon = industry.icon
          const isEven = index % 2 === 0
          
          return (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-20 group relative"
            >
              {/* Animated Border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur`} />
              
              <div className="relative glass-card rounded-2xl p-8 border border-slate-700/50 group-hover:border-primary-500/50 transition-all">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  {/* Content Section */}
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${industry.color} text-white text-sm font-medium mb-6`}>
                      <Icon size={16} className="mr-2" />
                      Industry Focus
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {industry.subtitle}
                    </p>
                  
                    {industry.description && (
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {industry.description}
                      </p>
                    )}

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">Solutions Include:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <div key={solutionIndex} className="flex items-start">
                            <CheckCircle className="text-primary-400 mr-3 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-300">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className={`group relative px-6 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${industry.color}`} />
                      <span className="relative flex items-center text-white">
                        Learn More
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                      </span>
                    </button>
                  </div>

                  {/* Visual Section */}
                  <div className={`${isEven ? 'lg:order-2' : ''} glass-effect rounded-2xl p-8 border border-slate-700/30`}>
                    <div className="flex justify-center mb-6">
                      <div className={`w-24 h-24 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center animate-float`}>
                        <Icon className="text-white" size={48} />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4 font-space">
                        {industry.title}
                      </h3>
                      <p className="text-gray-400">
                        Innovative AI solutions for the {industry.title.split(' ')[0]} industry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default IndustrySections
