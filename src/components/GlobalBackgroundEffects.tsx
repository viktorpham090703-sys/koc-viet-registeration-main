import { useEffect, useRef } from 'react'

/**
 * Lớp trang trí nền dùng chung cho cả trang: đường cong nét vẽ tay, lục giác
 * mờ, cụm chấm nhỏ và quầng sáng cam nhạt.
 *
 * Cách hoạt động:
 * - Layer đặt `fixed inset-0` ở z-0, nằm dưới toàn bộ nội dung (nội dung được
 *   bọc trong khối `relative z-10` ở route trang chủ) nên không bao giờ che
 *   chữ, ảnh, nút hay form. `pointer-events: none` + `aria-hidden` để chuột và
 *   trình đọc màn hình bỏ qua hoàn toàn.
 * - Vì layer `fixed`, trang trí chạy liên tục qua mọi section, không bị cắt
 *   hay reset ở ranh giới section.
 * - Parallax: JS chỉ ghi một biến CSS `--koc-scroll` (0 → 1 theo tiến độ cuộn
 *   toàn trang) trên đúng một phần tử, mỗi layer tự dịch một quãng khác nhau
 *   bằng `translate3d`. Không đụng tới React state nên không re-render.
 *
 * Muốn chỉnh nhanh: sửa FX bên dưới (độ mờ, kích thước, vị trí) và các biến
 * `--koc-parallax-*` / thời lượng animation trong styles.css.
 */

// Bảng cấu hình gom một chỗ — đổi số ở đây là đổi toàn bộ diện mạo của lớp nền.
// Lưu ý khi chỉnh: nền section là lớp voan (--veil-*) chỉ cho ~45% lớp này lọt
// qua, nên độ mờ thực tế nhìn thấy bằng khoảng một nửa số ghi ở đây.
const FX = {
  curve: { opacity: 0.62, stroke: 'var(--color-accent)', width: 2 },
  hex: { opacity: 0.34, blur: '2px' },
  dots: { opacity: 0.8, size: 20 },
  glow: { opacity: 0.5, blur: '70px' },
}

/** Lục giác mờ. `size` nhận giá trị CSS bất kỳ (clamp/vw/px). */
function Hexagon({
  className,
  size,
  from,
  to,
  delay = 0,
  duration = 9,
}: {
  className: string
  size: string
  from: string
  to: string
  delay?: number
  duration?: number
}) {
  return (
    <div
      className={`koc-fx-hex koc-fx-float ${className}`}
      style={{
        width: size,
        height: size,
        opacity: FX.hex.opacity,
        filter: `blur(${FX.hex.blur})`,
        background: `linear-gradient(150deg, ${from}, ${to})`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

/** Cụm chấm nhỏ, vẽ bằng background-image nên chỉ tốn một phần tử. */
function DotCluster({
  className,
  width,
  height,
  color,
  delay = 0,
  duration = 11,
}: {
  className: string
  width: string
  height: string
  color: string
  delay?: number
  duration?: number
}) {
  return (
    <div
      className={`koc-fx-dots koc-fx-float ${className}`}
      style={{
        width,
        height,
        opacity: FX.dots.opacity,
        backgroundImage: `radial-gradient(${color} 1.6px, transparent 1.7px)`,
        backgroundSize: `${FX.dots.size}px ${FX.dots.size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

/** Quầng sáng lớn, blur mạnh, độ mờ thấp — chỉ để hâm nóng nền. */
function Glow({
  className,
  size,
  color,
  opacity = FX.glow.opacity,
}: {
  className: string
  size: string
  color: string
  opacity?: number
}) {
  return (
    <div
      className={`koc-fx-glow ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        filter: `blur(${FX.glow.blur})`,
        background: `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 68%)`,
      }}
    />
  )
}

/**
 * Đường cong kiểu nét vẽ tay. Path cố tình méo, không phải ellipse hoàn hảo,
 * và hai bên trái/phải dùng hai path khác nhau để bố cục không đối xứng.
 */
function HandDrawnCurve({
  className,
  side,
  delay = 0,
  duration = 14,
}: {
  className: string
  side: 'left' | 'right'
  delay?: number
  duration?: number
}) {
  const path =
    side === 'left'
      ? 'M126 8C58 62 14 168 8 292c-6 128 34 246 92 318 40 50 92 74 130 60'
      : 'M40 14c72 44 118 150 128 274 10 130-24 250-84 326-34 44-84 68-120 58'
  const tail =
    side === 'left'
      ? 'M150 26c-30 6-58 26-80 56'
      : 'M18 30c32 2 62 20 86 50'

  return (
    <svg
      className={`koc-fx-curve koc-fx-sway ${className}`}
      viewBox="0 0 240 700"
      fill="none"
      preserveAspectRatio="none"
      style={{
        opacity: FX.curve.opacity,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <path
        d={path}
        stroke={FX.curve.stroke}
        strokeWidth={FX.curve.width}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={tail}
        stroke={FX.curve.stroke}
        strokeWidth={FX.curve.width}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function GlobalBackgroundEffects() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    // Tôn trọng prefers-reduced-motion: không gắn listener, --koc-scroll giữ 0
    // nên các layer đứng yên (animation cũng bị tắt bằng CSS).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      root.style.setProperty('--koc-scroll', progress.toFixed(4))
    }
    // Gộp mọi sự kiện cuộn vào một frame: listener chỉ đặt cờ, rAF mới ghi CSS.
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={rootRef} className="koc-fx" aria-hidden="true">
      {/* --- Lớp sâu nhất: quầng sáng, dịch chuyển chậm nhất ---------------- */}
      <div className="koc-fx-layer koc-fx-layer--back">
        <Glow
          className="left-[-18vw] top-[4vh]"
          size="min(58vw, 720px)"
          color="var(--color-accent-light)"
          opacity={0.34}
        />
        <Glow
          className="right-[-22vw] top-[38vh]"
          size="min(64vw, 780px)"
          color="var(--color-accent)"
          opacity={0.22}
        />
        <Glow
          className="left-[-14vw] top-[74vh] hidden md:block"
          size="min(46vw, 560px)"
          color="var(--color-accent-light)"
          opacity={0.26}
        />
      </div>

      {/* --- Lớp giữa: lục giác + chấm ------------------------------------- */}
      <div className="koc-fx-layer koc-fx-layer--mid">
        <Hexagon
          className="left-[-3vw] top-[16vh]"
          size="clamp(72px, 13vw, 190px)"
          from="#ffd8c2"
          to="#ffb28c"
          duration={9}
        />
        <Hexagon
          className="left-[5vw] top-[40vh] hidden sm:block"
          size="clamp(56px, 9vw, 140px)"
          from="#ffe6d6"
          to="#ffc4a6"
          delay={1.4}
          duration={11}
        />
        <Hexagon
          className="left-[-1vw] top-[66vh] hidden lg:block"
          size="clamp(60px, 10vw, 152px)"
          from="#ffdcc8"
          to="#ffb694"
          delay={2.6}
          duration={8}
        />
        <Hexagon
          className="right-[-4vw] top-[8vh] hidden sm:block"
          size="clamp(64px, 11vw, 168px)"
          from="#ffe3d3"
          to="#ffbd9c"
          delay={0.8}
          duration={10}
        />
        <Hexagon
          className="right-[4vw] top-[56vh]"
          size="clamp(52px, 8vw, 124px)"
          from="#ffd5c0"
          to="#ffab84"
          delay={2}
          duration={12}
        />
        <Hexagon
          className="right-[-2vw] top-[82vh] hidden lg:block"
          size="clamp(48px, 7vw, 108px)"
          from="#ffe9dc"
          to="#ffc6a8"
          delay={3.2}
          duration={9.5}
        />

        <DotCluster
          className="left-[3vw] top-[6vh] hidden md:block"
          width="clamp(90px, 11vw, 170px)"
          height="clamp(90px, 11vw, 170px)"
          color="var(--color-accent-light)"
          delay={0.5}
        />
        <DotCluster
          className="right-[5vw] top-[26vh] hidden md:block"
          width="clamp(110px, 13vw, 210px)"
          height="clamp(110px, 13vw, 210px)"
          color="var(--color-accent)"
          delay={1.8}
          duration={13}
        />
        <DotCluster
          className="left-[7vw] top-[86vh] hidden lg:block"
          width="clamp(90px, 10vw, 160px)"
          height="clamp(90px, 10vw, 160px)"
          color="var(--color-accent-light)"
          delay={3}
          duration={12}
        />
      </div>

      {/* --- Lớp trên cùng của phần trang trí: nét vẽ tay ------------------- */}
      <div className="koc-fx-layer koc-fx-layer--front">
        <HandDrawnCurve
          className="left-[-6vw] top-[6vh] h-[70vh] w-[26vw] max-w-[300px]"
          side="left"
          duration={15}
        />
        <HandDrawnCurve
          className="right-[-7vw] top-[24vh] hidden h-[76vh] w-[28vw] max-w-[320px] sm:block"
          side="right"
          delay={2.5}
          duration={18}
        />
      </div>
    </div>
  )
}
