import { Logo } from './Logo'
import { finalCta } from '@/data/content'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 px-5 text-center md:px-8">
        <Logo className="h-10" />
        <p className="text-sm font-semibold text-[var(--color-muted)]">{finalCta.brandRepeat}</p>
        <p className="text-xs text-[var(--color-muted)]/70">
          © {new Date().getFullYear()} KOC Việt. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
