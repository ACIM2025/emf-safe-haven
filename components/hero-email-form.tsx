
"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from 'lucide-react'

export function HeroEmailForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-XXXXX/XXXXX',
            'event_category': 'Lead',
            'event_label': 'Hero Email Form'
          })
        }
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      setError('Network error. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-center space-x-3 text-green-700">
          <CheckCircle className="w-6 h-6" />
          <div>
            <p className="font-semibold text-lg">Success! Check your inbox</p>
            <p className="text-sm text-green-600">Your free EMF Protection Report is on its way!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg mt-1">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Get Your Free EMF Protection Research Report
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Science-backed methods to shield your home • Expert recommendations • Instant access
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              {isSubmitting ? 'Sending...' : 'Get Free Report'}
            </Button>
          </div>
          
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <span>🔒</span>
              <span>100% Privacy</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>📧</span>
              <span>No Spam</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>✓</span>
              <span>Instant Access</span>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
