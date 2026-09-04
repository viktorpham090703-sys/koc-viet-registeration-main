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

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
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
    </>
  )
}
