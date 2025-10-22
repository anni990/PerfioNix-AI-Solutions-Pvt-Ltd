import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram, Sparkles, ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 group">
              <div className="relative w-14 h-14 mr-4 rounded-xl overflow-hidden border-2 border-primary-500/50 group-hover:border-primary-400 transition-all neon-glow">
                <Image
                  src="/perfionix-logo.jpg"
                  alt="Perfionix AI Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <span className="font-bold text-2xl font-space">Perfionix AI</span>
                <div className="flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3 text-primary-400" />
                  <span className="text-xs text-primary-400 font-medium">Next-Gen Solutions</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering Industries with <span className="text-primary-400 font-semibold">Intelligent Innovation</span>. 
              We provide AI consulting and solutions that drive measurable business impact across multiple sectors.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-space">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Industries', 'Our Team'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-space">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 hover:text-white transition-colors group">
                <Mail size={18} className="mr-3 mt-0.5 text-primary-400 group-hover:text-primary-300" />
                <span className="text-sm">perfionixaisolutions@gmail.com</span>
              </li>
              <li className="flex items-start text-gray-400 hover:text-white transition-colors group">
                <Phone size={18} className="mr-3 mt-0.5 text-primary-400 group-hover:text-primary-300" />
                <span className="text-sm">+91 6261330148</span>
              </li>
              <li className="flex items-start text-gray-400 hover:text-white transition-colors group">
                <MapPin size={18} className="mr-3 mt-0.5 text-primary-400 group-hover:text-primary-300" />
                <span className="text-sm">Nagpur, Maharashtra, India</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex mt-6 gap-3">
              <a
                href="https://www.linkedin.com/company/perfionix-ai-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-primary-500/30 hover:border-primary-400 transition-all hover:scale-110"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
              </a>
              <a
                href="https://www.instagram.com/perfionix_ai.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-accent-500/30 hover:border-accent-400 transition-all hover:scale-110"
              >
                <Instagram size={20} className="text-gray-400 group-hover:text-accent-400 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-12 pt-8 border-t border-slate-800">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 <span className="text-primary-400 font-semibold">Perfionix AI</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
