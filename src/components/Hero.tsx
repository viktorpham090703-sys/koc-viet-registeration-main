import { hero } from '@/data/content'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--color-surface)] pt-12 pb-14 md:pt-16 md:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,77,46,0.13),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto grid max-w-[1520px] items-center gap-12 px-4 md:grid-cols-[1fr_1.2fr] md:gap-10 md:px-6">
        <div>
          {/* Không lặp lại logo ở đây: thanh header phía trên đã có sẵn. */}
          <span className="mb-3.5 inline-block rounded-full bg-[var(--color-accent-soft)] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-dark)]">
            {hero.eyebrow}
          </span>
          {/* Tiêu đề dài hơn bản cũ nhiều nên thang chữ hạ xuống một bậc, đủ để
              vẫn là chữ to nhất trang mà không tràn thành năm dòng. */}
          <h1 className="max-w-[34rem] text-[1.5rem] text-balance font-extrabold uppercase leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem]">
            {hero.headingLead}{' '}
            <span className="text-[var(--color-accent)]">{hero.headingBrand}</span>
            {hero.headingTail}
          </h1>
          <p className="mt-5 max-w-[30rem] text-base font-normal leading-relaxed text-[var(--color-muted)] md:text-lg">
            {hero.description}
          </p>

          {/* Căn trái cho thẳng trục với badge, tiêu đề và đoạn mô tả. */}
          <div className="mt-8 flex flex-col items-start gap-2.5">
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
