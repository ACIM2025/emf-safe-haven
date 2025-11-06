
'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function FAQSection() {
  const faqs = [
    {
      question: "How does EMF Safe Haven protect my home from electromagnetic radiation?",
      answer: "EMF Safe Haven uses proprietary Frequency Technology to resonate Earth's natural 7.83 Hz Schumann frequency through your building's electrical wiring system. This creates a protective field that neutralizes harmful EMF effects throughout your entire home or office, covering up to 50,000 sq ft per device."
    },
    {
      question: "How quickly will I notice the benefits?",
      answer: "Many customers report feeling benefits immediately or within the first night of use. The most common early benefits include better sleep quality, increased energy levels, and a general sense of well-being. The device activates instantly when plugged in, providing 24/7 continuous protection."
    },
    {
      question: "Will this work in my home/office setup?",
      answer: "EMF Safe Haven works in any wired structure with grounded electrical outlets. It's been successfully tested on facilities up to 200,000 sq ft, including homes, offices, and large commercial buildings. One device covers up to 50,000 sq ft - perfect for most residential and small commercial spaces."
    },
    {
      question: "What's included with my purchase?",
      answer: "Your complete package includes: 1x EMF Safe Haven device, 4x FREE EMF phone stickers ($119.80 value), free express shipping, and a 30-day money-back guarantee. Total value over $728, yours for just $297."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a comprehensive 30-day money-back guarantee. If you're not completely satisfied with your EMF Safe Haven for any reason, simply return it within 30 days for a full refund. We're confident you'll experience the benefits, but we want you to feel completely secure in your investment."
    },
    {
      question: "How do I install and use the device?",
      answer: "Installation is incredibly simple - just plug the EMF Safe Haven into any grounded electrical outlet in your home or office. That's it! The device immediately begins working, creating an EMF-safe zone throughout your building's electrical system. No maintenance, batteries, or ongoing intervention required."
    },
    {
      question: "How long do the FREE bonus phone stickers last?",
      answer: "The EMF phone stickers are designed for long-term use and don't have an expiration date. They use the same proprietary frequency technology as the main device. You can easily transfer them when you upgrade your phone, or apply them permanently to any electronic device that emits EMF radiation."
    },
    {
      question: "What makes this different from other EMF protection products?",
      answer: "Unlike EMF blocking products that simply deflect radiation, EMF Safe Haven actively neutralizes harmful EMF effects using Earth's natural frequency. Our proprietary technology works through your building's wiring to create comprehensive protection throughout the entire structure, not just in one room or area."
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about EMF Safe Haven
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="mt-12 text-center bg-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our customer success team is here to help! Contact us anytime for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="font-semibold text-gray-900">📧 Email Support</div>
              <div className="text-gray-600">support@earthwisegrounding.com</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">📞 Phone Support</div>
              <div className="text-gray-600">1-800-EMF-SAFE</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
