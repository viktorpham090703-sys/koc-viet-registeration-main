import { SectionHeading } from './SectionHeading'
import { moneyMaking } from '@/data/content'

export function MoneyMakingMethods() {
  return (
    <section id="money-making" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={moneyMaking.heading} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-xl shadow-[rgba(16,20,38,0.08)]">
            <img
              src={moneyMaking.image}
              alt="Nhà sáng tạo KOC Việt livestream review sản phẩm"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1105}
              height={496}
            />
          </div>

          <ol className="flex flex-col gap-4">
            {moneyMaking.items.map((item, i) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-shadow hover:shadow-md hover:shadow-[rgba(16,20,38,0.06)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-[var(--color-muted)]">
                  <span className="font-bold text-[var(--color-text)]">{item.title}: </span>
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
