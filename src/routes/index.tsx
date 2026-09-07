import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PainPoints } from '@/components/PainPoints'
import { BenefitsTable } from '@/components/BenefitsTable'
import { MoneyMakingMethods } from '@/components/MoneyMakingMethods'
import { AICloneSection } from '@/components/AICloneSection'
import { OnboardingOffer } from '@/components/OnboardingOffer'
import { KocRanking } from '@/components/KocRanking'
import { OnboardingProcess } from '@/components/OnboardingProcess'
import { ComparisonTable } from '@/components/ComparisonTable'
import { ProtectionSection } from '@/components/ProtectionSection'
import { ContactRegistration } from '@/components/ContactRegistration'
import { Footer } from '@/components/Footer'
import { FloatingContact } from '@/components/FloatingContact'
import { GlobalBackgroundEffects } from '@/components/GlobalBackgroundEffects'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
      {/* Lớp trang trí nền nằm dưới cùng (z-0); toàn bộ nội dung bên dưới nằm
          trong một khối `relative z-10` nên luôn ở phía trên lớp này. */}
      <GlobalBackgroundEffects />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <PainPoints />
          <BenefitsTable />
          <MoneyMakingMethods />
          <AICloneSection />
          <OnboardingOffer />
          <KocRanking />
          <OnboardingProcess />
          <ComparisonTable />
          <ProtectionSection />
          <ContactRegistration />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  )
}
