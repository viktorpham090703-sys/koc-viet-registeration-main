import { SectionHeading } from './SectionHeading'
import { comparison } from '@/data/content'

export function ComparisonTable() {
  return (
    <section id="comparison" className="bg-[var(--color-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHeading heading={comparison.heading} align="center" />

        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm shadow-[rgba(16,20,38,0.04)] sm:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="w-1/4 border-b border-[var(--color-border-strong)] bg-[var(--color-surface-strong)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-[var(--color-text)]">
                  {comparison.columns[0]}
                </th>
                <th className="border-b border-[var(--color-border-strong)] bg-[var(--color-surface-strong)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-[var(--color-muted)]">
                  {comparison.columns[1]}
                </th>
                <th className="border-b border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-[var(--color-accent-dark)]">
                  {comparison.columns[2]}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-surface)]'}>
                  <td className="px-6 py-4 align-top font-bold text-[var(--color-text)]">{row[0]}</td>
                  <td className="px-6 py-4 align-top text-[var(--color-muted)]">{row[1]}</td>
                  <td className="border-l-4 border-[var(--color-accent)] bg-[var(--color-accent)]/[0.06] px-6 py-4 align-top font-semibold text-[var(--color-text)]">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-col gap-5 sm:hidden">
          {comparison.rows.map((row) => (
            <div key={row[0]} className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <p className="text-lg font-bold text-[var(--color-text)]">{row[0]}</p>
              <div className="mt-4 rounded-lg bg-[var(--color-surface-strong)] p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                  {comparison.columns[1]}
                </p>
                <p className="mt-1 text-[var(--color-muted)]">{row[1]}</p>
              </div>
              <div className="mt-3 rounded-lg border-l-4 border-[var(--color-accent)] bg-[var(--color-accent)]/[0.06] p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">
                  {comparison.columns[2]}
                </p>
                <p className="mt-1 font-semibold text-[var(--color-text)]">{row[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
