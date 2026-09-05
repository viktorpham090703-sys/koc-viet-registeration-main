import { useEffect, useRef } from 'react'

/** Góc nghiêng tối đa (độ) khi con trỏ ở mép ảnh. */
const MAX_TILT = 5.5

/** Độ trễ tối đa (px) của quầng sáng so với ảnh khi cuộn. */
const MAX_GLOW_LAG = 12

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
  const glowRef = useRef<HTMLDivElement>(null)

  // Quầng sáng nằm chung một khối với ảnh nên nó tự đi theo ảnh khi cuộn;
  // đăng ký ở đây chỉ để thêm một chút trễ (parallax) so với ảnh.
  useEffect(() => trackGlow(glowRef.current), [])

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
    <div className={`${sticky ? 'lg:sticky lg:top-24' : ''} ${wrapperClassName}`}>
      {/* Ảnh + quầng sáng là một nhóm: mọi thứ định vị theo khối này, không
          theo section, nên quầng sáng không bao giờ tách khỏi ảnh. */}
      <div className="group relative" style={{ perspective: '1200px' }}>
        <div ref={glowRef} className="section-image-glow" aria-hidden="true">
          <span className="section-image-glow__core" />
        </div>
        <div
          ref={cardRef}
          onMouseMove={tilt}
          onMouseLeave={reset}
          className="relative z-[1] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-xl shadow-[rgba(16,20,38,0.08)] transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:shadow-2xl hover:shadow-[rgba(16,20,38,0.16)]"
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
    </div>
  )
}

/* --------------------------------------------------------------------------
   Parallax nhẹ cho quầng sáng.

   Một scroll listener duy nhất cho cả trang (không phải một cái cho mỗi ảnh),
   gộp vào rAF, và chỉ tính toán cho những quầng sáng đang nằm trong khung nhìn.
   Chỉ ghi `transform` nên trình duyệt không phải tính lại layout.
-------------------------------------------------------------------------- */

const onscreen = new Set<HTMLElement>()
let observer: IntersectionObserver | null = null
let tracked = 0
let frame = 0

function paint() {
  frame = 0
  const half = window.innerHeight / 2
  for (const glow of onscreen) {
    const r = glow.getBoundingClientRect()
    // -1 khi khối còn nằm dưới khung nhìn, +1 khi đã trôi lên trên.
    const p = Math.max(-1, Math.min(1, (half - (r.top + r.height / 2)) / half))
    glow.style.transform = `translate3d(0, ${(p * MAX_GLOW_LAG).toFixed(1)}px, 0)`
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(paint)
}

function trackGlow(glow: HTMLDivElement | null) {
  if (!glow || typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            onscreen.add(el)
          } else {
            onscreen.delete(el)
            el.style.transform = ''
          }
        }
        schedule()
      },
      { rootMargin: '25% 0px' },
    )
  }
  observer.observe(glow)

  if (tracked++ === 0) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
  }

  return () => {
    observer?.unobserve(glow)
    onscreen.delete(glow)
    if (--tracked === 0) {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
      frame = 0
      observer?.disconnect()
      observer = null
    }
  }
}
