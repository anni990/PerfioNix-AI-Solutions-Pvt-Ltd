'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Paperclip, X } from 'lucide-react'

const collaborationOptions = [
  { id: 'ai-consulting', label: 'AI Consulting' },
  { id: 'data-analytics', label: 'Data Analytics Solutions' },
  { id: 'product-development', label: 'Product Development Partnership' },
  { id: 'research-collaboration', label: 'Research Collaboration' },
  { id: 'technology-integration', label: 'Technology Integration' },
  { id: 'investment-funding', label: 'Investment / Funding' },
  { id: 'other', label: 'Other (Please specify)' }
]

const initialState = {
  fullName: '',
  companyName: '',
  role: '',
  email: '',
  phone: '',
  website: '',
  collaborationTypes: [] as string[],
  otherCollaboration: '',
  idea: '',
  objective: '',
  timeline: '',
  attachment: null as File | null
}

const CollaborationForm = () => {
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fileName, setFileName] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleCheckboxChange = (optionId: string) => {
    setFormData((previous) => {
      const selected = new Set(previous.collaborationTypes)
      if (selected.has(optionId)) {
        selected.delete(optionId)
      } else {
        selected.add(optionId)
      }
      return { ...previous, collaborationTypes: Array.from(selected) }
    })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Limit file size to 10MB
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('File size must be less than 10MB')
        setStatus('error')
        return
      }
      setFormData((previous) => ({ ...previous, attachment: file }))
      setFileName(file.name)
    }
  }

  const removeFile = () => {
    setFormData((previous) => ({ ...previous, attachment: null }))
    setFileName('')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData.fullName || !formData.email || !formData.role || !formData.companyName || !formData.phone) {
      setErrorMessage('Please complete all required fields.')
      setStatus('error')
      return
    }
    if (formData.collaborationTypes.length === 0) {
      setErrorMessage('Select at least one collaboration type.')
      setStatus('error')
      return
    }

    try {
      setStatus('loading')
      setErrorMessage('')
      
      // Create FormData to handle file upload
      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'collaborationTypes') {
          submitData.append(key, JSON.stringify(value))
        } else if (key === 'attachment' && value) {
          submitData.append('attachment', value as File)
        } else if (value !== null) {
          submitData.append(key, value as string)
        }
      })
      
      const response = await fetch('/api/collaboration', {
        method: 'POST',
        body: submitData
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error ?? 'Unable to send your request. Please try again later.')
      }

      setStatus('success')
      setFormData(initialState)
      setFileName('')
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error.message ?? 'Unexpected error occurred.')
    }
  }

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 particle-bg" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl border border-slate-800/60 backdrop-blur-xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                Collaboration Request
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-space font-semibold text-white leading-tight">
                  Build the future with Perfionix AI
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Share your vision for partnership and our team will connect within 48 hours to explore opportunities.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5 text-sm text-gray-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Response time</span>
                  <span className="text-primary-300 font-medium">24-48 hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Preferred channel</span>
                  <span className="text-primary-300 font-medium">Email</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Partnership focus</span>
                  <span className="text-primary-300 font-medium">Strategic AI initiatives</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white font-space">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-300">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-gray-300">Company / Organization *</label>
                    <input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="role" className="text-sm font-medium text-gray-300">Designation / Role *</label>
                    <input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      placeholder="e.g., CEO, CTO, Product Manager"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Business email preferred"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Include country code"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium text-gray-300">Company Website / LinkedIn</label>
                    <input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Optional"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white font-space">Collaboration Details</h3>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">Type of Collaboration *</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {collaborationOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition cursor-pointer ${
                          formData.collaborationTypes.includes(option.id)
                            ? 'border-primary-500 bg-primary-500/10 text-primary-200'
                            : 'border-slate-700 bg-slate-900/50 text-gray-300 hover:border-primary-500/60'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="rounded border-slate-600 text-primary-500 focus:ring-primary-500"
                          checked={formData.collaborationTypes.includes(option.id)}
                          onChange={() => handleCheckboxChange(option.id)}
                        />
                        <span className="text-sm font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {formData.collaborationTypes.includes('other') && (
                    <div className="space-y-2">
                      <label htmlFor="otherCollaboration" className="text-sm font-medium text-gray-300">Please specify</label>
                      <input
                        id="otherCollaboration"
                        name="otherCollaboration"
                        value={formData.otherCollaboration}
                        onChange={handleChange}
                        placeholder="Describe your collaboration type"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                      />
                    </div>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="idea" className="text-sm font-medium text-gray-300">Briefly describe your idea / proposal *</label>
                    <textarea
                      id="idea"
                      name="idea"
                      value={formData.idea}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Explain your vision or area of collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Attach Document (Optional)</label>
                    <div className="relative">
                      <input
                        type="file"
                        id="attachment"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                        className="hidden"
                      />
                      {!fileName ? (
                        <label
                          htmlFor="attachment"
                          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 border-dashed text-gray-400 hover:border-primary-500 hover:text-primary-400 transition cursor-pointer"
                        >
                          <Paperclip size={18} />
                          <span className="text-sm">Click to attach file (Max 10MB)</span>
                        </label>
                      ) : (
                        <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-primary-500/10 border border-primary-500/30">
                          <div className="flex items-center gap-2 text-primary-300">
                            <Paperclip size={18} />
                            <span className="text-sm font-medium truncate">{fileName}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-1 hover:bg-red-500/20 rounded-lg transition"
                          >
                            <X size={18} className="text-red-400" />
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">Supported formats: PDF, DOC, DOCX, TXT, PNG, JPG</p>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="objective" className="text-sm font-medium text-gray-300">Objective of collaboration *</label>
                    <textarea
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="e.g., Co-develop AI solutions, automate operations, enhance product features"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium text-gray-300">Expected timeline or duration</label>
                    <input
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="Share any target dates or phases"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {status === 'error' && (
                  <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {errorMessage}
                  </div>
                )}
                {status === 'success' && (
                  <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                    Thank you for reaching out. Our team will connect with you shortly.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative w-full px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2 text-white">
                    {status === 'loading' ? 'Sending...' : 'Submit collaboration request'}
                    <Send className="transition-transform group-hover:translate-x-1" size={20} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollaborationForm
