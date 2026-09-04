import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { painPoints } from '@/data/content'

export function PainPoints() {
  return (
    <section id="pain-points" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={painPoints.heading} align="center" />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <ul className="flex flex-col gap-4">
              {painPoints.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-xl border border-[var(--color-border)] border-l-4 border-l-[var(--color-accent)] bg-[var(--color-surface)] p-5 transition-shadow hover:shadow-md hover:shadow-[rgba(16,20,38,0.06)]"
                >
                  <span className="text-lg font-medium leading-relaxed text-[var(--color-text)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl border border-[var(--color-accent-soft-strong)] bg-[var(--color-accent-soft)] px-6 py-5 text-center text-lg font-bold text-[var(--color-text)]">
              {painPoints.closing}
            </p>
          </div>

          <SectionImage
            src={painPoints.image}
            alt="Chủ doanh nghiệp căng thẳng vì quản lý booking KOC thủ công, rời rạc"
            width={1748}
            height={900}
          />
        </div>
      </div>
    </section>
  )
}
