import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { aiClone } from '@/data/content'

export function AICloneSection() {
  return (
    <section id="ai-clone" className="bg-[var(--color-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading eyebrow="Điểm nổi bật" heading={aiClone.heading} align="center" />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
          <SectionImage
            src={aiClone.image}
            alt="Công nghệ AI Clone Avatar tái tạo hình ảnh và giọng nói của nhà sáng tạo KOC Việt"
            width={1308}
            height={1202}
            wrapperClassName="order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            <ul className="flex flex-col gap-4">
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
