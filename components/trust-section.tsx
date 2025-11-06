
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function TrustSection() {
  const trustElements = [
    {
      icon: Shield,
      title: "30-Day Money Back Guarantee",
      description: "Try EMF Safe Haven risk-free. If you're not completely satisfied, get a full refund.",
      color: "green"
    },
    {
      icon: Award,
      title: "Tested & Proven Technology",
      description: "Rigorously tested on facilities up to 200,000 sq ft with documented results.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Thousands of Happy Customers",
      description: "Join thousands of families already protected with our EMF Safe Haven device.",
      color: "purple"
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Our team is always here to help with installation questions or concerns.",
      color: "orange"
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
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
            Your Trust Is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand behind our EMF Safe Haven with industry-leading guarantees and proven results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustElements.map((element, index) => {
            const IconComponent = element.icon
            const colors = getColorClasses(element.color)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className={`h-full shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${colors.border}`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center mb-4 mx-auto`}>
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {element.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {element.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission: Creating EMF-Safe Spaces for Everyone
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At EarthWise Grounding, we believe everyone deserves to live and work in a space free from harmful 
              electromagnetic radiation. Our EMF Safe Haven represents years of research and development to bring 
              you the most effective, easy-to-use EMF protection solution available today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div 
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900">Safety First</h4>
              <p className="text-gray-600 text-sm">
                Every product is rigorously tested for safety and effectiveness before reaching customers
              </p>
            </motion.div>

            <motion.div 
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900">Quality Guarantee</h4>
              <p className="text-gray-600 text-sm">
                Made with premium materials and backed by our comprehensive warranty program
              </p>
            </motion.div>

            <motion.div 
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900">Customer Success</h4>
              <p className="text-gray-600 text-sm">
                Your satisfaction and health improvement are our primary measures of success
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
