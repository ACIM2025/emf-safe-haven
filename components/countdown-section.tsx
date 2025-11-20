
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Gift, Clock } from 'lucide-react'
import Image from 'next/image'

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Get or set session-based countdown
    const getSessionCountdown = () => {
      const sessionKey = 'emf_countdown_session'
      let endTime = sessionStorage.getItem(sessionKey)
      
      if (!endTime) {
        // Set 48 hours from now for new sessions
        const now = new Date().getTime()
        endTime = (now + (48 * 60 * 60 * 1000)).toString()
        sessionStorage.setItem(sessionKey, endTime)
      }
      
      return parseInt(endTime)
    }

    const updateCountdown = () => {
      const endTime = getSessionCountdown()
      const now = new Date().getTime()
      const difference = endTime - now

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section 
      className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          className="flex items-center justify-center space-x-2 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Gift className="w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold">LIMITED TIME BONUS OFFER!</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Get FREE Bonus Items</h3>
            <div className="text-xl opacity-90 mb-2 space-y-1">
              <div>
                <span className="font-bold">2 Phone Stickers</span> <span className="text-yellow-300">($59.82)</span>
              </div>
              <div className="text-lg opacity-75">and</div>
              <div>
                <span className="font-bold">2 Silicone Bands</span> <span className="text-yellow-300">($59.98)</span>
              </div>
            </div>
            <p className="text-lg opacity-90 mt-3">
              Total value: <span className="font-bold text-yellow-300">$431.80</span> - 
              Complete protection for you and your home!
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square w-40 bg-white/10 rounded-2xl p-4">
              <Image
                src="https://b2512938.smushcdn.com/2512938/wp-content/uploads/2022/04/EMF-Chip-Sticker-300x300.jpg"
                alt="FREE EMF Phone Stickers - $59.82 Value"
                fill
                className="object-contain rounded-lg"
                sizes="160px"
              />
            </div>
            <div className="relative aspect-square w-40 bg-white/10 rounded-2xl p-4">
              <Image
                src="/silicone-band.png"
                alt="FREE Silicone Bands - $59.98 Value"
                fill
                className="object-contain rounded-lg"
                sizes="160px"
              />
            </div>
          </motion.div>

          <motion.div 
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center lg:justify-end space-x-2 mb-4">
              <Clock className="w-6 h-6" />
              <span className="text-xl font-semibold">Offer expires in:</span>
            </div>
            
            <div className="flex justify-center lg:justify-end space-x-4">
              <motion.div 
                className="bg-white/20 backdrop-blur rounded-lg p-4 min-w-[80px]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Hours</div>
              </motion.div>
              
              <motion.div 
                className="bg-white/20 backdrop-blur rounded-lg p-4 min-w-[80px]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              >
                <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Minutes</div>
              </motion.div>
              
              <motion.div 
                className="bg-white/20 backdrop-blur rounded-lg p-4 min-w-[80px]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              >
                <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Seconds</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.p 
          className="text-lg mt-6 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          Don't miss out on this incredible <strong>$431.80 value</strong> - Order your EMF Safe Haven now!
        </motion.p>
      </div>
    </motion.section>
  )
}
