export function SectionHeading({
  eyebrow,
  heading,
  align = 'left',
}: {
  eyebrow?: string
  heading: string
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-[var(--color-accent-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-dark)]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      <span
        className={`mt-5 block h-1.5 w-16 rounded-full bg-[var(--color-accent)] ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  )
}
