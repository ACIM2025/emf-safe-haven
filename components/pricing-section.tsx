
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Star, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order-section')
    orderSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Special Launch Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Transform your home into an EMF-safe zone for less than $1 per day over the first year
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden shadow-2xl border-2 border-green-200 max-w-2xl mx-auto">
            <motion.div 
              className="absolute -top-2 -right-2 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -2, 2, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Save $431.80 (59% OFF)
            </motion.div>
            
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">(Verified Customer Reviews)</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">EMF Safe Haven Complete Package</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-4">
                    <div className="text-sm text-green-800 font-semibold mb-1">🎁 You Get $431.80 in FREE Bonuses!</div>
                    <div className="text-xs text-green-700">2 Phone Stickers + 2 Silicone Bands + Free Shipping</div>
                  </div>
                  
                  <motion.div 
                    className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    $297
                  </motion.div>
                  
                  <div className="text-lg text-gray-600">
                    <strong>Your Price Today</strong>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-base font-semibold text-blue-600">
                    <span className="text-2xl">🚚</span>
                    <span>FREE EXPRESS SHIPPING INCLUDED</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>1x EMF Safe Haven Device</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>50,000 sq ft Coverage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>24/7 Automatic Protection</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-green-700 font-semibold">2 FREE Phone Stickers ($59.82)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-green-700 font-semibold">2 FREE Silicone Bands ($59.98)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>30-Day Money Back Guarantee</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={scrollToOrder}
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-6 px-8 text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Get Protected Now - Only $297
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-500 mt-4">
                  ⚡ <strong>Instant Protection:</strong> Simply plug in and activate immediately
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600">
            💡 <strong>That's less than $0.81 per day</strong> to protect your entire home for the first year!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
