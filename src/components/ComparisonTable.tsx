import { Check, Star, X } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { comparison } from '@/data/content'

/** Một dòng tiêu chí trong thẻ so sánh. Cùng khuôn cho cả hai thẻ, chỉ khác
 *  biểu tượng và màu chữ nên hai bên luôn cùng nhịp. */
function Criterion({
  label,
  value,
  highlight,
}: {
  label: string
  value: string
  highlight: boolean
}) {
  const Icon = highlight ? Check : X
  return (
    <li className="flex gap-3">
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          highlight
            ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
            : 'bg-[rgba(16,20,38,0.06)] text-[var(--color-muted)]'
        }`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
      </span>
      <div>
        <p
          className={`text-[13px] font-bold uppercase tracking-[0.06em] ${
            highlight ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)]'
          }`}
        >
          {label}
        </p>
        <p
          className={`mt-1 leading-relaxed ${
            highlight
              ? 'font-semibold text-[var(--color-text)]'
              : 'text-[var(--color-muted)]'
          }`}
        >
          {value}
        </p>
      </div>
    </li>
  )
}

export function ComparisonTable() {
  return (
    <section id="comparison" className="bg-[var(--veil-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={comparison.heading} align="center" />

        {/* items-stretch mặc định của grid: hai thẻ luôn cao bằng nhau dù nội
            dung dài ngắn khác nhau. */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Thẻ trái — cách cũ. Nền xám rất nhạt, chữ xám, viền mảnh: tương
              phản thấp để mắt tự trôi sang thẻ bên phải. */}
          <div className="flex flex-col rounded-2xl border border-[var(--color-border-strong)] bg-[rgba(16,20,38,0.03)] p-6 md:p-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(16,20,38,0.06)] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                <X className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                {comparison.badges.old}
              </span>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-[var(--color-muted)] md:text-2xl">
                {comparison.columns[1]}
              </h3>
            </div>

            <ul className="mt-8 flex flex-col gap-6 text-left">
              {comparison.rows.map((row) => (
                <Criterion key={row[0]} label={row[0]} value={row[1]} highlight={false} />
              ))}
            </ul>
          </div>

          {/* Thẻ phải — KOC Việt. Nền trắng, viền cam dày, đổ bóng: điểm nhìn
              chính của cả section. */}
          <div className="flex flex-col rounded-2xl border-2 border-[var(--color-accent)] bg-white p-6 shadow-xl shadow-[rgba(255,77,46,0.12)] md:p-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                <Star className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                {comparison.badges.new}
              </span>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-[var(--color-accent)] md:text-2xl">
                {comparison.columns[2]}
              </h3>
            </div>

            <ul className="mt-8 flex flex-col gap-6 text-left">
              {comparison.rows.map((row) => (
                <Criterion key={row[0]} label={row[0]} value={row[2]} highlight />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
