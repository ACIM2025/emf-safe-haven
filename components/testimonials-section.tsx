
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialsProps {
  placement: 'after-pricing' | 'after-benefits' | 'after-trust'
}

const testimonials = [
  {
    customer_name: "Sarah Johnson",
    review_text: "After using EMF Safe Haven for just two weeks, my sleep quality improved dramatically. I wake up feeling more refreshed and energized than I have in years.",
    rating: 5,
    location: "California, USA",
    specific_results: "Dramatically improved sleep quality in 2 weeks, increased energy and refreshment",
    verified_purchase: "EMF Safe Haven"
  },
  {
    customer_name: "Michael Chen",
    review_text: "As someone who works with technology all day, I was concerned about EMF exposure. This product gives me peace of mind and I notice less fatigue.",
    rating: 5,
    location: "New York, USA",
    specific_results: "Reduced fatigue from daily tech exposure, increased peace of mind",
    verified_purchase: "EMF Safe Haven Mobile"
  },
  {
    customer_name: "Lisa Rodriguez",
    review_text: "The cell phone stickers are amazing! I can actually feel the difference when talking on the phone. No more headaches after long calls.",
    rating: 5,
    location: "Texas, USA", 
    specific_results: "Eliminated phone call headaches, noticeable difference during calls",
    verified_purchase: "Cell Phone Protection Sticker"
  }
]

export function TestimonialsSection({ placement }: TestimonialsProps) {
  const getTestimonialsForPlacement = () => {
    switch (placement) {
      case 'after-pricing':
        return testimonials.slice(0, 2) // Sarah & Michael
      case 'after-benefits':
        return testimonials.slice(1, 3) // Michael & Lisa
      case 'after-trust':
        return [testimonials[0], testimonials[2]] // Sarah & Lisa
      default:
        return testimonials.slice(0, 2)
    }
  }

  const currentTestimonials = getTestimonialsForPlacement()

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Customers
          </h2>
          <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-xl text-gray-600 ml-2">4.9/5 ⭐ Verified Customer Reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${placement}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.review_text}"
                  </blockquote>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.customer_name}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-blue-600">Verified Purchase ✓</div>
                        <div className="text-xs text-blue-500">{testimonial.verified_purchase}</div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-l-green-500 p-3 rounded">
                      <div className="text-sm font-medium text-green-800">Key Results:</div>
                      <div className="text-sm text-green-700">{testimonial.specific_results}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
