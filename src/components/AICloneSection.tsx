import { Video, ShieldCheck, BarChart3, RefreshCw } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { aiClone } from '@/data/content'

const itemIcons = [Video, ShieldCheck, BarChart3, RefreshCw]

export function AICloneSection() {
  return (
    <section id="ai-clone" className="bg-[var(--color-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading eyebrow="Điểm nổi bật" heading={aiClone.heading} align="center" />

        {/* Không đặt items-start ở đây: để lưới kéo giãn mặc định thì thẻ bên
            phải cao bằng đúng ảnh bên trái. */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:gap-12">
          <SectionImage
            src={aiClone.image}
            alt="Công nghệ AI Clone Avatar tái tạo hình ảnh và giọng nói của nhà sáng tạo KOC Việt"
            width={1308}
            height={1202}
            wrapperClassName="order-2 md:order-1"
          />

          <div className="order-1 flex h-full flex-col justify-center rounded-2xl border border-[var(--color-border)] bg-white p-6 md:order-2 md:p-8">
            <ul className="flex flex-col gap-3">
              {aiClone.items.map((item, i) => {
                const Icon = itemIcons[i]
                return (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-[var(--color-surface)] p-3.5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)]">
                      <Icon className="h-5 w-5 text-[var(--color-accent)]" strokeWidth={2} />
                    </span>
                    <span className="h-9 w-px shrink-0 bg-[var(--color-border)]" />
                    <span className="leading-relaxed text-[var(--color-text)]">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
