import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { nav, hero } from '@/data/content'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#hero" className="flex shrink-0 items-center" aria-label="KOC Việt">
          <Logo className="h-10 md:h-11" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Điều hướng chính">
          {nav.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#final-cta"
          className="hidden shrink-0 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm shadow-[var(--color-accent)]/25 transition-colors hover:bg-[var(--color-accent-light)] lg:inline-block"
        >
          {hero.cta}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-text)] lg:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-[var(--color-border)] bg-white px-5 py-4 lg:hidden"
          aria-label="Điều hướng di động"
        >
          <ul className="flex flex-col gap-3">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold text-[var(--color-text)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#final-cta"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
              >
                {hero.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
