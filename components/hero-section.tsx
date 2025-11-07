
'use client'

import { Button } from "@/components/ui/button"
import { Shield, Zap, Home } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order-section')
    orderSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-20 pb-16 px-4 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-600 font-medium">
              <Shield className="w-5 h-5" />
              <span>Revolutionary EMF Protection Technology</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Home Into An{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
                EMF-Safe Zone
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Protect your family from harmful electromagnetic radiation with the EMF Safe Haven. 
              Our proprietary Frequency Technology creates a 50,000 sq ft protective field through 
              your home's electrical wiring system.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50,000</div>
              <div className="text-sm text-gray-600">Sq Ft Coverage</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Protection</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Instant</div>
              <div className="text-sm text-gray-600">Activation</div>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button 
              onClick={scrollToOrder}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get EMF Safe Haven Now - $297
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 text-lg"
            >
              See How It Works
            </Button>
          </motion.div>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Free Shipping</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Made in USA</span>
          </div>
        </motion.div>

        <motion.div 
          className="relative mt-6 mr-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl shadow-2xl overflow-hidden">
            {/* Hero Protection Image */}
            <div className="relative aspect-video bg-white">
              <Image
                src="/hero-house-image.jpg"
                alt="EMF Protected House - Blue house with protective energy field"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Product Image Below Hero */}
            <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-green-50 p-8 border-t-2 border-blue-200">
              <Image
                src="https://www.buytfp.com/wp-content/uploads/2021/04/EMF-Safe-Haven-4-Web.png"
                alt="EMF Safe Haven Device - Home EMF Protection"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <motion.div 
              className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Limited Offer!
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
