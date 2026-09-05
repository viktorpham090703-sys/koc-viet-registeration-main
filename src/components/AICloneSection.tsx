import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { aiClone } from '@/data/content'

export function AICloneSection() {
  return (
    <section id="ai-clone" className="bg-[var(--color-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading eyebrow="Điểm nổi bật" heading={aiClone.heading} align="center" />

        {/* items-start để thẻ bên phải cao theo nội dung của nó thay vì bị kéo
            bằng ảnh: có chênh lệch chiều cao thì lg:sticky của ảnh mới có quãng
            để trôi khi cuộn, giống ảnh ở mọi section khác. */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start lg:gap-12">
          <SectionImage
            src={aiClone.image}
            alt="Công nghệ AI Clone Avatar tái tạo hình ảnh và giọng nói của nhà sáng tạo KOC Việt"
            width={1308}
            height={1202}
            wrapperClassName="order-2 md:order-1"
          />

          <div className="order-1 flex flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 md:order-2 md:p-10">
            <ul className="flex flex-col gap-4 md:gap-6">
              {aiClone.items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl bg-[var(--color-surface)] px-5 py-4 md:px-6 md:py-7"
                >
                  <h3 className="font-bold leading-snug text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed whitespace-pre-line text-[var(--color-muted)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
