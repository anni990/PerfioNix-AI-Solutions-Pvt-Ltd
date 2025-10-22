'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const SYSTEM_PROMPT = `You are Perfionix AI Assistant – a professional AI assistant for company info, website guidance, and content modification.
Provide concise, actionable responses.
Explain step-by-step how to update website content, prompts, or company details.
Always be friendly and professional.
Company Info:
- Name: Perfionix AI
- Services: AI Consulting, AgriTech, HealthTech, Renewable Energy, FoodTech, Banking AI
- Team: Shubham Rahangdale
- Contact: perfionixaisolutions@gmail.com, +91 6261330148
- LinkedIn: https://www.linkedin.com/company/perfionix-ai-solutions
- Instagram: https://www.instagram.com/perfionix_ai.io?igsh=b2xnczB0b2hmaWNs`

const LOCAL_MODEL_SETTINGS = {
  model: 'gpt-oss:120b-cloud',
  num_predict: 700,
  temperature: 0.6
}

const CHAT_ENDPOINT = 'http://localhost:11434/api/chat'

type ChatRole = 'system' | 'user' | 'assistant'

interface ChatMessage {
  role: ChatRole
  content: string
}

interface StreamingChunk {
  message?: {
    content?: string
  }
  error?: string
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([{
    role: 'assistant',
    content: 'Hi! I\'m the Perfionix AI Assistant. Ask me about our services, team, or how to update the site.'
  }])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const controllerRef = useRef<AbortController | null>(null)

  const widgetRef = useRef<HTMLDivElement | null>(null)

  const conversationPayload = useMemo<ChatMessage[]>(() => {
    return [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.filter((message) => message.role !== 'assistant' || message !== messages[0])
    ]
  }, [messages])

  useEffect(() => {
    return () => {
      controllerRef.current?.abort()
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [isOpen])

  const toggleWidget = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: ChatMessage = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage, { role: 'assistant', content: '' }])
    setInput('')
    setIsLoading(true)

    const abortController = new AbortController()
    controllerRef.current = abortController

    try {
      const payload = {
        model: LOCAL_MODEL_SETTINGS.model,
        messages: [...conversationPayload, userMessage],
        stream: true,
        options: {
          num_predict: LOCAL_MODEL_SETTINGS.num_predict,
          temperature: LOCAL_MODEL_SETTINGS.temperature
        }
      }

      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: abortController.signal
      })

      if (!response.ok || !response.body) {
        throw new Error('Unable to reach local chatbot. Ensure the Python service is running on port 11434.')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunkText = decoder.decode(value, { stream: true })
        const lines = chunkText.split('\n')
        lines.forEach((line) => {
          if (!line.trim()) return
          try {
            const parsed: StreamingChunk = JSON.parse(line)
            const content = parsed.message?.content
            if (content) {
              assistantContent += content
              setMessages((prev) => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: 'assistant', content: assistantContent }
                return updated
              })
            }
          } catch (error) {
            // swallow JSON parse errors for partial lines
          }
        })
      }
    } catch (error: any) {
      const errorMessage = error?.message ?? 'Unexpected error while connecting to local chatbot.'
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content: `⚠️ ${errorMessage}\n\nStart the local Python chatbot server (port 11434) and try again.`
        }
        return updated
      })
    } finally {
      setIsLoading(false)
      controllerRef.current = null
    }
  }

  const handleStop = () => {
    controllerRef.current?.abort()
    setIsLoading(false)
  }

  const renderStructuredContent = (content: string) => {
    const blocks = content.split(/\n\n+/).map((block) => block.trim()).filter(Boolean)

    if (blocks.length === 0) {
      return <span>{content}</span>
    }

    return blocks.map((block, index) => {
      const lines = block.split('\n')
      const isBulletList = lines.every((line) => /^[-•]/.test(line.trim()))
      const isNumberedList = lines.every((line) => /^\d+\./.test(line.trim()))

      if (isBulletList) {
        return (
          <ul key={`list-${index}`} className="list-disc pl-5 space-y-1">
            {lines.map((line, lineIndex) => (
              <li key={`list-${index}-item-${lineIndex}`}>{line.replace(/^[-•]\s*/, '')}</li>
            ))}
          </ul>
        )
      }

      if (isNumberedList) {
        return (
          <ol key={`list-${index}`} className="list-decimal pl-5 space-y-1">
            {lines.map((line, lineIndex) => (
              <li key={`list-${index}-item-${lineIndex}`}>{line.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        )
      }

      return (
        <p key={`paragraph-${index}`} className="leading-relaxed">
          {lines.map((line, lineIndex) => (
            <span key={`paragraph-${index}-line-${lineIndex}`}>
              {line}
              {lineIndex !== lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      )
    })
  }

  if (!isOpen) {
    return (
      <button
        onClick={toggleWidget}
        className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Open Perfionix AI Assistant"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 animate-gradient" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        
        {/* Icon */}
        <MessageCircle className="relative text-white drop-shadow-lg" size={32} strokeWidth={2.5} />
        
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping" />
      </button>
    )
  }

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-50 w-96 max-w-[90vw] glass-card rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden flex flex-col backdrop-blur-xl"
    >
      {/* Header with Gradient */}
      <div className="relative bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <MessageCircle size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="font-bold text-sm font-space">Perfionix AI Assistant</h3>
            <p className="text-xs text-white/80 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Online
            </p>
          </div>
        </div>
        <button 
          onClick={toggleWidget} 
          className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors backdrop-blur-sm" 
          aria-label="Close assistant"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto max-h-96 p-4 space-y-3 bg-slate-900 chat-scrollbar">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`text-sm leading-relaxed whitespace-pre-wrap ${
              message.role === 'user' ? 'text-right ml-auto max-w-[85%]' : 'text-left mr-auto max-w-[90%]'
            }`}
          >
            <div
              className={`inline-flex flex-col gap-2 rounded-xl px-4 py-3 text-left shadow-lg ${
                message.role === 'user'
                  ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white'
                  : 'glass-effect text-gray-200 border border-slate-700/50'
              }`}
            >
              {renderStructuredContent(message.content)}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            Generating response...
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="border-t border-slate-700/50 bg-slate-900 p-4">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={2}
          className="w-full resize-none rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 px-4 py-3 text-sm transition-all"
          placeholder="Ask about services, team members, or how to update the site..."
          disabled={isLoading}
        />
        <div className="mt-3 flex justify-between items-center">
          <button
            type="button"
            onClick={handleStop}
            disabled={!isLoading}
            className="text-xs text-gray-400 hover:text-gray-300 disabled:opacity-50 transition-colors"
          >
            Stop
          </button>
          <button
            type="submit"
            className="relative px-6 py-2.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            disabled={isLoading}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500" />
            <span className="relative text-white">Send</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatWidget
