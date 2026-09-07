import { SectionHeading } from './SectionHeading'
import { SectionImage } from './SectionImage'
import { ranking } from '@/data/content'

export function KocRanking() {
  return (
    <section id="ranking" className="bg-[var(--veil-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={ranking.heading} align="center" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div>
            <div className="hidden overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm shadow-[rgba(16,20,38,0.04)] sm:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--color-border-strong)] bg-[var(--color-surface-strong)] text-[var(--color-text)]">
                    {/* Hai cột đầu giữ nguyên một dòng; cột "Quyền lợi tiêu biểu"
                        nhận hết phần rộng còn lại và tự ngắt dòng. */}
                    {ranking.columns.map((col, i) => (
                      <th
                        key={col}
                        className={`px-5 py-4 text-center text-sm font-bold uppercase tracking-wide xl:px-6 ${
                          i < 2 ? 'whitespace-nowrap' : ''
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ranking.rows.map((row, i) => (
                    <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-surface)]'}>
                      <td className="whitespace-nowrap border-l-4 border-[var(--color-accent)] px-5 py-4 text-center align-top font-bold text-[var(--color-text)] xl:px-6">
                        {row[0]}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-center align-top text-[var(--color-muted)] xl:px-6">
                        {row[1]}
                      </td>
                      <td className="px-5 py-4 align-top whitespace-pre-line text-[var(--color-muted)] xl:px-6">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4 sm:hidden">
              {ranking.rows.map((row) => (
                <div key={row[0]} className="rounded-xl border border-[var(--color-border)] border-l-4 border-l-[var(--color-accent)] bg-white p-5">
                  <p className="text-lg font-bold text-[var(--color-text)]">{row[0]}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                    {ranking.columns[1]}
                  </p>
                  <p className="mt-1 text-[var(--color-text)]">{row[1]}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                    {ranking.columns[2]}
                  </p>
                  <p className="mt-1 leading-relaxed text-[var(--color-muted)]">{row[2]}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base font-medium leading-relaxed text-[var(--color-text)]">
              {ranking.closing}
            </p>
          </div>

          <SectionImage
            src={ranking.image}
            alt="Nhà sáng tạo KOC theo dõi phân hạng và hiệu quả hoạt động trên nền tảng KOC Việt"
            width={1546}
            height={1017}
          />
        </div>
      </div>
    </section>
  )
}
