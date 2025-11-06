
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Home, Zap, Clock, Heart, Brain } from "lucide-react"
import { motion } from "framer-motion"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Complete EMF Protection",
      description: "Neutralizes harmful electromagnetic radiation throughout your entire home's electrical system",
      color: "blue"
    },
    {
      icon: Home,
      title: "Massive Coverage Area", 
      description: "Protects up to 50,000 sq ft - perfect for homes, offices, and even large commercial facilities",
      color: "green"
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Simply plug into any grounded outlet and experience immediate EMF protection benefits",
      color: "orange"
    },
    {
      icon: Clock,
      title: "24/7 Continuous Protection",
      description: "Works around the clock without any maintenance or user intervention required",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Better Sleep Quality",
      description: "Customers report deeper, more restful sleep and waking up naturally refreshed",
      color: "red"
    },
    {
      icon: Brain,
      title: "Enhanced Well-being",
      description: "Experience improved energy levels, reduced stress, and better overall health",
      color: "teal"
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose EMF Safe Haven?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proprietary Frequency Technology provides comprehensive EMF protection 
            that goes beyond simple blocking - it actively neutralizes harmful radiation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            const colors = getColorClasses(benefit.color)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className={`h-full shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${colors.border}`}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center mb-4 mx-auto`}>
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 text-center leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Proven Technology, Real Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-600">200,000+</div>
              <div className="text-gray-600">Sq Ft Tested</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-green-600">5,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-orange-600">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
