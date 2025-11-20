
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Check, Gift, Shield, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ValueStackingSection() {
  const valueItems = [
    {
      icon: Shield,
      title: "EMF Safe Haven Device",
      description: "Professional-grade EMF protection for your entire home",
      value: "$297.00",
      highlight: true
    },
    {
      icon: Smartphone,
      title: "2 EMF Phone Stickers",
      description: "Protect your mobile devices wherever you go",
      value: "$59.82",
      bonus: true,
      image: "https://b2512938.smushcdn.com/2512938/wp-content/uploads/2022/04/EMF-Chip-Sticker-300x300.jpg"
    },
    {
      icon: Gift,
      title: "2 Silicone Bands",
      description: "Wearable EMF protection with stylish design",
      value: "$59.98",
      bonus: true,
      image: "/silicone-band.png"
    },
    {
      icon: Check,
      title: "Free Express Shipping",
      description: "Fast delivery to your door, no extra cost",
      value: "$15.00",
      bonus: true
    },
    {
      icon: Shield,
      title: "30-Day Money Back Guarantee",
      description: "Risk-free trial with full refund protection",
      value: "$297.00",
      bonus: true
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything Included in Your Package
          </h2>
          <p className="text-xl text-gray-600">
            Get <span className="font-bold text-green-600">$431.80 in FREE bonuses</span> with your $297 purchase today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {valueItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                    item.highlight ? 'border-2 border-green-500' : 
                    item.bonus ? 'border-2 border-orange-200 bg-orange-50' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {item.image ? (
                          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-white border-2 border-gray-200">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={80}
                              height={80}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ) : (
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                            item.highlight ? 'bg-green-100' :
                            item.bonus ? 'bg-orange-100' : 'bg-blue-100'
                          }`}>
                            <IconComponent className={`w-6 h-6 ${
                              item.highlight ? 'text-green-600' :
                              item.bonus ? 'text-orange-600' : 'text-blue-600'
                            }`} />
                          </div>
                        )}
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <div className="text-right">
                              {item.bonus && (
                                <div className="text-sm font-bold text-orange-600 mb-1">FREE BONUS</div>
                              )}
                              <div className={`font-bold text-lg ${
                                item.highlight ? 'text-green-600' : 'text-gray-900'
                              }`}>
                                {item.value}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
            <div className="relative">
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square mb-6">
                  <Image
                    src="https://b2512938.smushcdn.com/2512938/wp-content/uploads/2021/07/Safe-Haven-Insert-Pic-scaled.jpeg"
                    alt="Complete EMF Safe Haven Package"
                    fill
                    className="object-contain rounded-2xl"
                    sizes="400px"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 mb-4">
                    <div className="text-sm text-green-800 font-bold mb-2">🎁 FREE BONUSES INCLUDED</div>
                    <div className="text-2xl font-bold text-green-700">$431.80 Value</div>
                    <div className="text-xs text-green-600 mt-1">Phone Stickers + Silicone Bands + Free Shipping</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Your Price Today</div>
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
                    $297
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold">
                    Includes Everything + Free Shipping
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10"
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                59% OFF!
              </motion.div>
            </div>

            <motion.p 
              className="mt-8 text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              🎯 <strong>Limited Time:</strong> This complete package deal won't last long!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}