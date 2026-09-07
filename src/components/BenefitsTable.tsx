import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { whyJoin } from '@/data/content'

export function BenefitsTable() {
  return (
    <section id="why-join" className="bg-[var(--veil-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={whyJoin.heading} align="center" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div>
            {/* Desktop / tablet table */}
            <div className="hidden overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm shadow-[rgba(16,20,38,0.04)] sm:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--color-border-strong)] bg-[var(--color-surface-strong)] text-[var(--color-text)]">
                    {/* Bỏ bề rộng cố định: cột "Giá trị" nay tự lấy đúng bề
                        rộng của dòng dài nhất, phần còn lại thuộc về cột kia. */}
                    <th className="px-5 py-4 text-center text-sm font-bold uppercase tracking-wide xl:px-6">
                      {whyJoin.columns[0]}
                    </th>
                    <th className="px-5 py-4 text-center text-sm font-bold uppercase tracking-wide xl:px-6">
                      {whyJoin.columns[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {whyJoin.rows.map((row, i) => (
                    <tr
                      key={row[0]}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-surface)]'}
                    >
                      <td className="border-l-4 border-[var(--color-accent)] px-5 py-4 text-center align-top font-bold whitespace-nowrap text-[var(--color-text)] xl:px-6">
                        {row[0]}
                      </td>
                      <td className="px-5 py-4 align-top whitespace-pre-line text-[var(--color-muted)] xl:px-6">
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="flex flex-col gap-4 sm:hidden">
              {whyJoin.rows.map((row) => (
                <div
                  key={row[0]}
                  className="rounded-xl border border-[var(--color-border)] border-l-4 border-l-[var(--color-accent)] bg-white p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">
                    {whyJoin.columns[0]}
                  </p>
                  <p className="mt-1 text-lg font-bold text-[var(--color-text)]">{row[0]}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                    {whyJoin.columns[1]}
                  </p>
                  <p className="mt-1 leading-relaxed text-[var(--color-muted)]">{row[1]}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionImage
            src={whyJoin.image}
            alt="Ứng dụng KOC Việt trên điện thoại hiển thị danh sách KOC theo ngành hàng và hạng"
            width={1439}
            height={1093}
          />
        </div>
      </div>
    </section>
  )
}
