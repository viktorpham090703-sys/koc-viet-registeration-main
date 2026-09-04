import { Landmark, ShieldCheck, QrCode, Phone, Mail } from 'lucide-react'
import { Logo } from './Logo'
import { footer, nav } from '@/data/content'

const legalIcons = { accent: Landmark, green: ShieldCheck }
const legalColor = { accent: 'text-[var(--color-accent)]', green: 'text-[#34d399]' }

export function Footer() {
  return (
    <footer className="bg-[#0a0e1a] text-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-[1.45fr_0.8fr_1.15fr] lg:gap-14">
        {/* Cột 1 — thương hiệu & liên hệ */}
        <div>
          <Logo variant="light" className="h-10" />

          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-white/55">
            {footer.description}
          </p>

          <dl className="mt-5 flex flex-col gap-2 text-[13px] leading-relaxed">
            {footer.details.map((item) => (
              <div key={item.label}>
                <dt className="inline font-bold text-white">{item.label}: </dt>
                <dd className="inline text-white/65">{item.value}</dd>
              </div>
            ))}
          </dl>

          {/* Zalo OA */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 text-[13px]">
            <span className="font-bold text-white">{footer.zalo.label}:</span>
            <a
              href={footer.zalo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a6bff]/15 px-3 py-1 font-semibold text-[#4d94ff] ring-1 ring-[#1a6bff]/40 transition-colors hover:bg-[#1a6bff]/25 hover:text-white"
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
              className="inline-flex items-center gap-1.5 rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12] hover:text-white"
            >
              <QrCode className="h-4 w-4" strokeWidth={2} />
              {footer.zalo.qr}
            </a>
          </div>

          <p className="mt-4 text-[13px]">
            <span className="font-bold text-white">{footer.hotline.label}: </span>
            <a
              href={footer.hotline.href}
              className="inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-[var(--color-accent)]"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2} />
              {footer.hotline.value}
            </a>
            <span className="text-white/45"> {footer.hotline.note}</span>
          </p>

          <p className="mt-2 text-[13px]">
            <span className="font-bold text-white">{footer.email.label}: </span>
            <a
              href={footer.email.href}
              className="inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-[var(--color-accent)]"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={2} />
              {footer.email.value}
            </a>
          </p>
        </div>

        {/* Cột 2 — điều hướng nhanh */}
        <nav aria-label="Điều hướng chân trang">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-white">
            {footer.navHeading}
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-white/60 transition-colors hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cột 3 — pháp lý & tuân thủ */}
        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-white">
            {footer.legalHeading}
          </h3>
          <ul className="mt-5 flex flex-col gap-4">
            {footer.legal.map((item) => {
              const Icon = legalIcons[item.tone]
              return (
                <li
                  key={item.title}
                  className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10"
                >
                  <p className={`flex items-center gap-2.5 text-sm font-bold ${legalColor[item.tone]}`}>
                    <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={2} />
                    {item.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55">{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Thanh đáy */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {footer.copyrightSuffix}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {footer.policies.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs text-white/60 transition-colors hover:text-[var(--color-accent)]"
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
