import { BadgeCheck, Lock, Wallet } from 'lucide-react'
import { Logo } from './Logo'
import { footer, nav } from '@/data/content'

const badgeIcons = [BadgeCheck, Lock, Wallet]
const badgeTiles = ['var(--tile-peach)', 'var(--tile-lilac)', 'var(--tile-mint)']

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[1.3fr_0.9fr_1.4fr]">
        {/* Cột 1 — thương hiệu, bản quyền & chính sách */}
        <div>
          <Logo className="h-11" />
          <p className="mt-5 max-w-sm leading-relaxed text-[var(--color-muted)]">
            {footer.positioning}
          </p>
          <p className="mt-3 font-bold text-[var(--color-accent)]">{footer.slogan}</p>

          <p className="mt-8 text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} KOC Việt. All rights reserved.
          </p>
          <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            {footer.policies.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 2 — danh mục điều hướng */}
        <nav aria-label="Điều hướng chân trang">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
            {footer.navHeading}
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cột 3 — thẻ chứng nhận pháp lý & bảo mật */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
            {footer.trustHeading}
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {footer.badges.map((badge, i) => {
              const Icon = badgeIcons[i]
              return (
                <li
                  key={badge.title}
                  className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: badgeTiles[i] }}
                  >
                    <Icon className="h-5 w-5 text-[var(--color-accent)]" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text)]">{badge.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                      {badge.text}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
