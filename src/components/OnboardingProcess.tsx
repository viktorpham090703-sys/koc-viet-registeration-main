import { SectionHeading } from './SectionHeading'
import { process } from '@/data/content'

export function OnboardingProcess() {
  return (
    <section id="process" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={process.heading} align="center" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <ol className="flex flex-col gap-4">
            {process.steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-shadow hover:shadow-md hover:shadow-[rgba(16,20,38,0.06)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <p className="mt-1 leading-relaxed text-[var(--color-muted)]">{step}</p>
              </li>
            ))}
          </ol>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-xl shadow-[rgba(16,20,38,0.08)]">
            <img
              src={process.image}
              alt="Quy trình tham gia onboard nền tảng KOC Việt từng bước"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1004}
              height={518}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
