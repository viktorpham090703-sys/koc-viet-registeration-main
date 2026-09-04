import { useRef } from 'react'

/** Góc nghiêng tối đa (độ) khi con trỏ ở mép ảnh. */
const MAX_TILT = 5.5

export function SectionImage({
  src,
  alt,
  width,
  height,
  sticky = true,
  wrapperClassName = '',
}: {
  src: string
  alt: string
  width: number
  height: number
  /** Dính lại khi cuộn, giống ảnh ở section 2. */
  sticky?: boolean
  wrapperClassName?: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Ghi thẳng vào style của DOM thay vì qua state: mousemove bắn liên tục,
  // nếu set state mỗi lần thì React render lại hàng chục lần mỗi giây.
  function tilt(event: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    // Bỏ qua trên thiết bị cảm ứng và khi người dùng đã tắt hiệu ứng chuyển động.
    if (
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }
    const r = card.getBoundingClientRect()
    const x = (event.clientX - r.left) / r.width - 0.5
    const y = (event.clientY - r.top) / r.height - 0.5
    card.style.transform = `rotateX(${(-y * MAX_TILT).toFixed(2)}deg) rotateY(${(
      x * MAX_TILT
    ).toFixed(2)}deg) scale(1.02)`
  }

  function reset() {
    const card = cardRef.current
    if (card) card.style.transform = ''
  }

  return (
    <div
      className={`${sticky ? 'lg:sticky lg:top-24' : ''} ${wrapperClassName}`}
      style={{ perspective: '1200px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={tilt}
        onMouseLeave={reset}
        className="overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-xl shadow-[rgba(16,20,38,0.08)] transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:shadow-2xl hover:shadow-[rgba(16,20,38,0.16)]"
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
    </div>
  )
}
