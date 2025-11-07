
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Plug, Zap, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Plug,
      title: "Plug Into Any Grounded Outlet",
      description: "Simply plug the EMF Safe Haven into any grounded electrical outlet in your home or office",
      step: 1
    },
    {
      icon: Zap,
      title: "Earth Frequency Activation",
      description: "Our proprietary Frequency Technology immediately begins resonating Earth's natural frequency through your building's wiring",
      step: 2
    },
    {
      icon: Shield,
      title: "EMF Neutralization",
      description: "The Earth frequency spreads throughout your electrical system, neutralizing harmful EMF effects on all connected systems",
      step: 3
    },
    {
      icon: CheckCircle,
      title: "24/7 Protection Active",
      description: "Your entire home becomes an EMF-safe zone with continuous protection up to 50,000 sq ft",
      step: 4
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How EMF Safe Haven Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our revolutionary Frequency Technology transforms your home's electrical wiring 
            into a protective EMF shield using Earth's natural frequency
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="mt-2 text-center">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center justify-center mx-auto">
                              {step.step}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 -bottom-4 w-0.5 h-8 bg-blue-300"></div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative mt-6 mr-6">
              <div className="bg-white rounded-3xl p-8 shadow-2xl overflow-visible">
                {/* See It In Action Title */}
                <motion.div 
                  className="space-y-4 mb-8"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <h3 className="text-3xl font-bold text-gray-900">See It In Action!</h3>
                  <p className="text-gray-600">
                    Watch how EMF Safe Haven instantly creates a protective field throughout your entire home
                  </p>
                </motion.div>

                {/* Visual Demonstration Grid */}
                <div className="space-y-6">
                  {/* Step 1: Device Demonstration Video */}
                  <motion.div 
                    className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-xl"
                    >
                      <source src="/hero-protection-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      💡 Live EMF Protection Demo
                    </div>
                  </motion.div>

                  {/* Step 2: Visual Process Flow */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Device Plugged In */}
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden border-2 border-blue-200">
                        <Image
                          src="https://cdn.abacus.ai/images/f8f8f371-8d9c-4987-8182-a6afc285b837.jpg"
                          alt="EMF Safe Haven device with electrical energy effects - Step 1: Plug into any grounded outlet"
                          fill
                          className="object-contain p-4 rounded-xl"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          STEP 1
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-600 mt-2 font-medium">
                        🔌 Plug into any grounded outlet
                      </p>
                    </motion.div>

                    {/* Home Protection Field */}
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-green-50 to-blue-50 rounded-xl overflow-hidden border-2 border-green-200">
                        <Image
                          src="/electric-house.png"
                          alt="House protected by EMF Safe Haven energy field"
                          fill
                          className="object-contain p-4 rounded-xl"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          STEP 2
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-600 mt-2 font-medium">
                        🏡 Instant 50,000 sq ft protection
                      </p>
                    </motion.div>
                  </div>

                  {/* Results Banner */}
                  <motion.div 
                    className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 border-2 border-green-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center space-x-2 text-green-800">
                      <Shield className="w-5 h-5" />
                      <span className="font-bold text-lg">✅ Your Entire Home is Now EMF-Protected!</span>
                      <Shield className="w-5 h-5" />
                    </div>
                    <p className="text-center text-sm text-green-700 mt-2">
                      24/7 automatic protection using Earth's natural frequency
                    </p>
                  </motion.div>
                </div>
              </div>

              <motion.div 
                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10"
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Patented Tech!
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind EMF Safe Haven</h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Our device leverages the Earth's natural Schumann resonance (7.83 Hz) to neutralize harmful EMF radiation. 
              By conducting this beneficial frequency through your home's electrical wiring, we create a protective field 
              that harmonizes with your body's natural biorhythms while counteracting artificial electromagnetic interference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">7.83 Hz</div>
              <div className="text-sm text-gray-600">Earth's Natural Frequency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">50,000</div>
              <div className="text-sm text-gray-600">Sq Ft Protection Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Instant</div>
              <div className="text-sm text-gray-600">Activation Time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
