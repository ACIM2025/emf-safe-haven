
'use client'

import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function StickyHeader() {
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 0.95])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10])

  const scrollToOrder = () => {
    const orderSection = document.getElementById('order-section')
    orderSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-50 border-b border-slate-100"
      style={{ 
        backdropFilter: `blur(${headerBlur}px)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-blue-600" />
          <span className="font-bold text-gray-900">EMF Safe Haven</span>
        </div>
        
        <Button 
          onClick={scrollToOrder}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Protected Now
        </Button>
      </div>
    </motion.header>
  )
}
