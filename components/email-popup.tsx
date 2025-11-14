"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasClosedPopup = localStorage.getItem('emf_popup_dismissed')
    const hasSubmittedEmail = localStorage.getItem('emf_popup_submitted')
    
    if (hasClosedPopup || hasSubmittedEmail) {
      return
    }

    // Timer trigger: Show popup after 7 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 7000)

    // Exit intent trigger
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 10 && !exitIntentTriggered && !hasClosedPopup && !hasSubmittedEmail) {
        setExitIntentTriggered(true)
        setIsVisible(true)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [exitIntentTriggered])

  const handleClose = () => {
    setIsVisible(false)
    const date = new Date()
    date.setTime(date.getTime() + (14 * 24 * 60 * 60 * 1000)) // 14 days
    localStorage.setItem('emf_popup_dismissed', 'true')
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
        localStorage.setItem('emf_popup_submitted', 'true')
        
        // Close popup after 3 seconds
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/75 animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div 
        className="relative bg-[#fafafa] border-2 border-dashed border-[#333] max-w-[580px] w-[90%] max-h-[90vh] overflow-y-auto p-8 md:p-10 shadow-2xl animate-in slide-in-from-bottom-12 duration-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#666] hover:text-black transition-colors text-3xl leading-none p-2"
          aria-label="Close popup"
        >
          <X size={28} />
        </button>

        {!isSubmitted ? (
          <div className="text-center">
            {/* Headline */}
            <h2 className="text-2xl md:text-[26px] font-bold text-[#1a1a1a] leading-tight mb-4 tracking-tight">
              Free EMF Protection Research Report
            </h2>
            
            {/* Subheadline */}
            <p className="text-[15px] text-[#555] italic leading-relaxed mb-8">
              Discover Science-Backed Methods to Shield Your Home
            </p>

            {/* Benefits Section */}
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 text-left">
              Inside This Free Report:
            </h3>
            
            <ul className="text-left mb-8 space-y-3">
              {[
                'Latest peer-reviewed research on EMF exposure risks',
                '5 proven shielding techniques used by experts',
                'Room-by-room protection strategies',
                'EMF meter recommendations and measurement tips'
              ].map((benefit, index) => (
                <li key={index} className="text-[15px] text-[#333] leading-relaxed pl-6 relative">
                  <span className="absolute left-0 text-[#2c7a2c] font-bold text-lg">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mb-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3.5 text-base border-2 border-[#ccc] rounded focus:outline-none focus:border-[#333] mb-4 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 text-lg font-bold text-white bg-[#1a1a1a] rounded hover:bg-[#333] transition-all disabled:opacity-50 tracking-wide"
              >
                {isSubmitting ? 'Sending...' : 'Get My Free Report Now'}
              </button>
            </form>

            {/* Trust Elements */}
            <div className="flex justify-center gap-6 md:gap-8 flex-wrap text-[13px] text-[#666]">
              <div className="flex items-center gap-2">
                <span className="text-base">🔒</span>
                <span>100% Privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">📧</span>
                <span>No Spam</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">✓</span>
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-2xl font-semibold text-[#2c7a2c] mb-4">
              ✓ Success!
            </h3>
            <p className="text-base text-[#333] leading-relaxed">
              Check your inbox for your free EMF Protection Report.<br />
              (Don&apos;t forget to check your spam folder!)
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
