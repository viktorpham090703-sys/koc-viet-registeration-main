import { hero } from '@/data/content'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--veil-surface)] pt-12 pb-14 md:pt-16 md:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,77,46,0.13),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto grid max-w-[1520px] items-center gap-12 px-4 md:grid-cols-[1fr_1.2fr] md:gap-10 md:px-6">
        {/* Khối chữ giới hạn bề ngang bằng đúng tiêu đề: cụm CTA lấy chính khối
            này làm trục để căn giữa; badge, tiêu đề và sapo cùng căn trái. */}
        <div className="w-full max-w-[34rem]">
          {/* Không lặp lại logo ở đây: thanh header phía trên đã có sẵn. */}
          <div className="mb-3.5 flex justify-start">
            <span className="inline-block rounded-full bg-[var(--color-accent-soft)] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-dark)]">
              {hero.eyebrow}
            </span>
          </div>
          {/* Tiêu đề dài hơn bản cũ nhiều nên thang chữ hạ xuống một bậc, đủ để
              vẫn là chữ to nhất trang mà không tràn thành năm dòng. */}
          <h1 className="text-[1.5rem] font-extrabold uppercase leading-[1.5] tracking-tight text-[var(--color-text)] sm:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem]">
            <span className="block">
              {hero.headingLead}{' '}
              <span className="text-[var(--color-accent)]">{hero.headingBrand}</span>
            </span>
            {hero.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[30rem] text-base font-normal leading-relaxed text-[var(--color-muted)] md:text-lg">
            {hero.description}
          </p>

          {/* Căn giữa theo trục của tiêu đề và sapo. */}
          <div className="mt-8 flex flex-col items-center gap-2.5 text-center">
            <a
              href="#final-cta"
              className="inline-block rounded-full bg-[var(--color-accent)] px-7 py-3 text-[13px] font-bold uppercase tracking-wide text-white shadow-lg shadow-[var(--color-accent)]/25 transition-colors hover:bg-[var(--color-accent-light)]"
            >
              {hero.ctaPrimary}
            </a>
            <p className="max-w-md text-[13px] leading-relaxed text-[var(--color-muted)]">
              {hero.ctaNote}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-xl shadow-[rgba(16,20,38,0.10)]">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              /* h-auto: ảnh giữ đúng tỉ lệ gốc dù thay file kích thước khác,
                 không bị cắt hay bóp méo. */
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
