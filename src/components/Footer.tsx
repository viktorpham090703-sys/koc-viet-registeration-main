import { Landmark, ShieldCheck, QrCode } from 'lucide-react'
import { Logo } from './Logo'
import { footer, nav } from '@/data/content'

const legalIcons = { accent: Landmark, green: ShieldCheck }
const legalColor = { accent: 'text-[var(--color-accent)]', green: 'text-[#0f9d63]' }

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white text-[var(--color-text)]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[1.45fr_0.8fr_1.15fr] lg:gap-14">
        {/* Cột 1 — thương hiệu & liên hệ */}
        <div>
          <Logo className="h-10" />

          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-[var(--color-muted)]">
            {footer.description}
          </p>

          <dl className="mt-5 flex flex-col gap-2 text-[13px] leading-relaxed">
            {footer.details.map((item) => (
              <div key={item.label}>
                <dt className="inline font-bold text-[var(--color-text)]">{item.label}: </dt>
                <dd className="inline text-[var(--color-muted)]">{item.value}</dd>
              </div>
            ))}
          </dl>

          {/* Zalo OA */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 text-[13px]">
            <span className="font-bold text-[var(--color-text)]">{footer.zalo.label}:</span>
            <a
              href={footer.zalo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a6bff]/[0.08] px-3 py-1 font-semibold text-[#1a6bff] ring-1 ring-[#1a6bff]/25 transition-colors hover:bg-[#1a6bff]/[0.15]"
            >
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#1a6bff] text-[10px] font-extrabold text-white">
                Z
              </span>
              {footer.zalo.name}
            </a>
            <a
              href={footer.zalo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Mã QR Zalo OA ${footer.zalo.name}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <QrCode className="h-4 w-4" strokeWidth={2} />
              {footer.zalo.qr}
            </a>
          </div>

          <p className="mt-4 text-[13px]">
            <span className="font-bold text-[var(--color-text)]">{footer.hotline.label}: </span>
            <a
              href={footer.hotline.href}
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {footer.hotline.value}
            </a>
            <span className="text-[var(--color-muted)]"> {footer.hotline.note}</span>
          </p>

          <p className="mt-2 text-[13px]">
            <span className="font-bold text-[var(--color-text)]">{footer.email.label}: </span>
            <a
              href={footer.email.href}
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {footer.email.value}
            </a>
          </p>
        </div>

        {/* Cột 2 — điều hướng nhanh */}
        <nav aria-label="Điều hướng chân trang">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--color-text)]">
            {footer.navHeading}
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cột 3 — pháp lý & tuân thủ */}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--color-text)]">
            {footer.legalHeading}
          </h3>
          <ul className="mt-5 flex flex-col gap-4">
            {footer.legal.map((item) => {
              const Icon = legalIcons[item.tone]
              return (
                <li
                  key={item.title}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                >
                  <p className={`flex items-center gap-2.5 text-sm font-bold ${legalColor[item.tone]}`}>
                    <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={2} />
                    {item.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-muted)]">
                    {item.text}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Thanh đáy */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col items-center gap-4 border-t border-[var(--color-border)] py-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} {footer.copyrightSuffix}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {footer.policies.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
