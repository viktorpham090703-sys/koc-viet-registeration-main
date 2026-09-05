import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { onboardingOffer } from '@/data/content'

/** Tách "ĐỒNG Starter" thành tên hạng tiếng Việt và nhãn tiếng Anh, để xuống
 *  dòng riêng và tô màu riêng. Chuỗi trong content.ts giữ nguyên. */
function splitTierName(name: string): [string, string] {
  const i = name.indexOf(' ')
  return i === -1 ? [name, ''] : [name.slice(0, i), name.slice(i + 1)]
}

/** Màu nhãn hạng, cùng thứ tự với onboardingOffer.rows. */
const tierColors = ['var(--tier-bronze)', 'var(--tier-silver)', 'var(--tier-gold)']

export function OnboardingOffer() {
  return (
    <section id="onboarding-offer" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={onboardingOffer.heading} align="center" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-[var(--color-muted)]">
          {onboardingOffer.intro}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div>
            <div className="grid gap-5 sm:grid-cols-3">
              {onboardingOffer.rows.map((row, i) => {
                const [tierVi, tierEn] = splitTierName(row[0])
                return (
                <div
                  key={row[0]}
                  className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-md hover:shadow-[rgba(16,20,38,0.06)]"
                >
                  <h3 className="text-center text-lg font-extrabold uppercase tracking-tight text-[var(--color-accent)]">
                    <span className="block">{tierVi}</span>
                    {tierEn && (
                      <span className="block" style={{ color: tierColors[i] }}>
                        {tierEn}
                      </span>
                    )}
                  </h3>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                    {onboardingOffer.columns[1]}
                  </p>
                  <p className="mt-1 leading-relaxed text-[var(--color-text)]">{row[1]}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                    {onboardingOffer.columns[2]}
                  </p>
                  <p className="mt-1 leading-relaxed text-[var(--color-text)]">{row[2]}</p>
                </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col gap-2 rounded-xl border border-[var(--color-accent-soft-strong)] bg-[var(--color-accent-soft)] px-6 py-5">
              <p className="text-lg font-bold leading-snug text-[var(--color-text)]">
                {onboardingOffer.highlight}
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {onboardingOffer.highlightNote}
              </p>
            </div>
          </div>

          <SectionImage
            src={onboardingOffer.image}
            alt="Chính sách ưu đãi onboarding đổi review lấy ưu đãi của KOC Việt"
            width={1495}
            height={1052}
          />
        </div>
      </div>
    </section>
  )
}
