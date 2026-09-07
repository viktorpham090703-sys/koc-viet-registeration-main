import { ArrowRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { painPoints } from '@/data/content'

export function PainPoints() {
  return (
    <section id="pain-points" className="bg-[var(--veil-white)] py-16 md:py-24">
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
            {/* Viền giữ lại (đổi sang cùng màu nền) để hộp không đổi kích thước
                so với bản trước — chỉ đổi màu, chữ và thêm nút. */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-xl border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-5 text-center">
              {/* Câu chốt luôn nằm gọn một dòng nên nút xuống hàng dưới: đặt
                  cạnh nhau thì cột này không đủ rộng cho cả hai. Dưới sm thì bỏ
                  nowrap, màn hình hẹp quá không tránh được việc ngắt dòng. */}
              <p className="text-lg font-extrabold text-white sm:whitespace-nowrap">
                {painPoints.closing}
              </p>
              <a
                href={painPoints.closingCta.href}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold whitespace-nowrap text-[var(--color-accent)] shadow-sm transition-colors hover:bg-[var(--color-accent-soft)]"
              >
                {painPoints.closingCta.label}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
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
