
import { HeroSection } from '@/components/hero-section'
import { PricingSection } from '@/components/pricing-section'
import { CountdownSection } from '@/components/countdown-section'
import { ValueStackingSection } from '@/components/value-stacking-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { BenefitsSection } from '@/components/benefits-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TrustSection } from '@/components/trust-section'
import { FAQSection } from '@/components/faq-section'
import { OrderSection } from '@/components/order-section'
import { StickyHeader } from '@/components/sticky-header'
import { EmailPopup } from '@/components/email-popup'
import { FreeReportOptin } from '@/components/free-report-optin'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <StickyHeader />
      <main>
        <HeroSection />
        <CountdownSection />
        <PricingSection />
        <TestimonialsSection placement="after-pricing" />
        <ValueStackingSection />
        <BenefitsSection />
        <FreeReportOptin />
        <TestimonialsSection placement="after-benefits" />
        <HowItWorksSection />
        <TrustSection />
        <TestimonialsSection placement="after-trust" />
        <FAQSection />
        <OrderSection />
      </main>
      <EmailPopup />
    </div>
  )
}