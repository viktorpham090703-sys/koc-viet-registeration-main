import { Logo } from './Logo'
import { finalCta } from '@/data/content'

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,77,46,0.16),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-5 text-center md:px-8">
        <Logo className="mb-8 h-12 md:h-14" />

        <h2 className="text-4xl font-extrabold uppercase leading-tight text-[var(--color-text)] sm:text-5xl">
          <span className="text-[var(--color-accent)]">{finalCta.heading}</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg font-normal leading-relaxed text-[var(--color-muted)]">
          {finalCta.body}
        </p>

        <a
          href="#final-cta"
          className="mt-9 inline-block rounded-full bg-[var(--color-accent)] px-10 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-[var(--color-accent)]/25 transition-colors hover:bg-[var(--color-accent-light)]"
        >
          {finalCta.heading}
        </a>

        <p className="mt-8 text-base font-semibold text-[var(--color-muted)]">{finalCta.contact}</p>

        <div className="mt-12 w-full border-t border-[var(--color-border)] pt-8">
          <p className="text-lg font-bold text-[var(--color-text)]">{finalCta.brandStatement}</p>
          <p className="mt-2 text-base font-semibold text-[var(--color-accent)]">{finalCta.slogan}</p>
        </div>
      </div>
    </section>
  )
}
