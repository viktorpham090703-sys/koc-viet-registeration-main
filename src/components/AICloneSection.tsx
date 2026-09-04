import { SectionHeading } from './SectionHeading'
import { aiClone } from '@/data/content'

export function AICloneSection() {
  return (
    <section id="ai-clone" className="bg-[var(--color-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-xl shadow-[rgba(16,20,38,0.08)] md:order-1">
            <img
              src={aiClone.image}
              alt="Công nghệ AI Clone Avatar tái tạo hình ảnh và giọng nói của nhà sáng tạo KOC Việt"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1138}
              height={1047}
            />
          </div>

          <div className="order-1 md:order-2">
            <SectionHeading eyebrow="Điểm nổi bật" heading={aiClone.heading} />
            <ul className="mt-8 flex flex-col gap-4">
              {aiClone.items.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span className="text-lg leading-relaxed text-[var(--color-text)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
