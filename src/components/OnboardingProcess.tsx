import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { process } from '@/data/content'

export function OnboardingProcess() {
  return (
    <section id="process" className="bg-[var(--veil-white)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={process.heading} align="center" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <ol className="flex flex-col gap-4">
            {process.steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-shadow hover:shadow-md hover:shadow-[rgba(16,20,38,0.06)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <p className="mt-1 leading-relaxed whitespace-normal text-[var(--color-muted)] md:whitespace-pre-line">{step}</p>
              </li>
            ))}
          </ol>

          <SectionImage
            src={process.image}
            alt="Quy trình tham gia onboard nền tảng KOC Việt từng bước"
            width={1748}
            height={900}
          />
        </div>
      </div>
    </section>
  )
}
