"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export function FreeReportOptin() {
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
            'event_label': 'Free Report Opt-in'
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
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white border-2 border-green-300 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Success! Check your inbox</h3>
                <p className="text-lg text-gray-600">Your free EMF Protection Report is on its way!</p>
                <p className="text-sm text-gray-500 mt-2">Please check your spam folder if you don't see it within a few minutes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not ready to buy yet? Get our Free EMF Protection Report
            </h2>
            
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Discover the hidden dangers of EMF radiation</span> in your home and learn proven strategies to protect your family. This comprehensive report includes:
              </p>
              
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Scientific research on EMF health effects and what you need to know</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>5 simple steps to reduce EMF exposure in your home today (free methods!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Expert recommendations for complete EMF protection solutions</span>
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-4 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap text-base"
              >
                {isSubmitting ? 'Sending...' : 'Get The Free Report'}
              </Button>
            </div>
            
            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 pt-2">
              <span className="flex items-center space-x-1">
                <span>🔒</span>
                <span>100% Privacy Guaranteed</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>📧</span>
                <span>No Spam Ever</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>✓</span>
                <span>Instant Access</span>
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
