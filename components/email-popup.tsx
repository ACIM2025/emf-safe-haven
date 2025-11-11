"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has already closed the popup
    const hasClosedPopup = localStorage.getItem('emailPopupClosed')
    const hasSubmittedEmail = localStorage.getItem('emailPopupSubmitted')
    
    if (hasClosedPopup || hasSubmittedEmail) {
      return
    }

    // Show popup after 6 seconds (middle ground between 5-8 seconds)
    const delay = 6000 // 6000ms = 6 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('emailPopupClosed', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to newsletter API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        localStorage.setItem('emailPopupSubmitted', 'true')
        
        // Close popup after 2 seconds
        setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      }
    } catch (error) {
      console.error('Error submitting email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 animate-in zoom-in-95 duration-300">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          {!isSubmitted ? (
            <div className="space-y-4">
              {/* Icon/Image */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                Get Exclusive EMF Protection Tips! 🛡️
              </h3>

              {/* Description */}
              <p className="text-center text-gray-600 dark:text-gray-300">
                Join our community and receive expert tips on EMF protection, special offers, and health insights delivered to your inbox.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-base"
                  disabled={isSubmitting}
                />
                
                <Button
                  type="submit"
                  className="w-full py-3 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Get Free Tips Now'}
                </Button>
              </form>

              {/* Privacy note */}
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          ) : (
            <div className="text-center py-4">
              {/* Success icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Success message */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Thank You! ✨
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You&apos;re all set! Check your inbox for exclusive EMF protection tips.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
