import { ShieldCheck, Lock, Wallet, UserCheck } from 'lucide-react'
import { SectionImage } from './SectionImage'
import { SectionHeading } from './SectionHeading'
import { protection } from '@/data/content'

const icons = [ShieldCheck, Lock, Wallet, UserCheck]
const tiles = [
  'var(--tile-peach)',
  'var(--tile-rose)',
  'var(--tile-lilac)',
  'var(--tile-mint)',
]

export function ProtectionSection() {
  return (
    <section id="protection" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={protection.heading} align="center" />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
          <SectionImage
            src={protection.image}
            alt="Cam kết bảo vệ dữ liệu, thu nhập và hình ảnh của KOC trên nền tảng KOC Việt"
            width={1748}
            height={900}
          />

          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {protection.items.map((item, i) => {
                const Icon = icons[i]
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-md hover:shadow-[rgba(16,20,38,0.06)]"
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: tiles[i] }}
                    >
                      <Icon className="h-6 w-6 text-[var(--color-accent)]" strokeWidth={2} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-[var(--color-muted)]">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
