import { Logo } from './Logo'
import { hero } from '@/data/content'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--color-surface)] pt-14 pb-16 md:pt-20 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,77,46,0.13),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:grid-cols-2 md:gap-10 md:px-8">
        <div>
          <Logo className="mb-8 h-11 md:h-12" />
          <span className="mb-4 inline-block rounded-full bg-[var(--color-accent-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-dark)]">
            {hero.eyebrow}
          </span>
          <h1 className="max-w-xl text-[2.125rem] text-balance font-extrabold uppercase leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-5xl">
            Gia Nhập <span className="text-[var(--color-accent)]">KOC Việt</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg font-normal leading-relaxed text-[var(--color-muted)] md:text-xl">
            {hero.description}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]/70">
            {hero.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#final-cta"
              className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[var(--color-accent)]/25 transition-colors hover:bg-[var(--color-accent-light)]"
            >
              {hero.cta}
            </a>
            <span className="text-sm font-semibold text-[var(--color-muted)]">
              {hero.brand}
            </span>
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
