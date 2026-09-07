import { useEffect } from 'react'
import { Home, RotateCcw } from 'lucide-react'
import { contactSection as c } from '@/data/content'

/**
 * Lớp xác nhận đăng ký thành công, phủ lên trang chứ không thay thế trang.
 * Trang đăng ký vẫn nguyên vẹn phía sau, chỉ bị làm mờ và tối nhẹ.
 */
export function SuccessModal({
  onBackToForm,
  onGoHome,
}: {
  onBackToForm: () => void
  onGoHome: () => void
}) {
  useEffect(() => {
    const body = document.body
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight
    // Bù đúng bề rộng thanh cuộn: khoá cuộn làm thanh cuộn biến mất, không bù
    // thì cả trang phía sau nhích ngang một cái thấy rõ.
    const gap = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${gap}px`
    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
    }
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
      // z cao hơn 9999 của cụm nút liên hệ nổi để lớp này luôn nằm trên cùng.
      className="koc-anim-fade fixed inset-0 flex items-center justify-center overflow-y-auto overscroll-contain bg-[rgba(15,23,42,0.25)] px-3 py-6 backdrop-blur-[8px] sm:px-5 sm:py-10"
      style={{ zIndex: 10000, WebkitBackdropFilter: 'blur(8px)' }}
    >
      <div className="koc-anim-card relative my-auto w-full max-w-[960px] overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white px-6 py-10 text-center shadow-[0_32px_80px_rgba(16,20,38,0.22)] sm:px-10 md:px-14 md:py-14">
        {/* Quầng sáng cam rất nhạt sau linh vật, không cản chuột. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,_rgba(255,77,46,0.10),_transparent_70%)]"
        />

        <div className="relative">
          {c.mascot.image && (
            <img
              src={c.mascot.image}
              alt=""
              aria-hidden="true"
              width={c.mascot.imageWidth}
              height={c.mascot.imageHeight}
              className="koc-anim-rise mx-auto h-32 w-auto object-contain sm:h-40 md:h-48"
            />
          )}

          <h2
            id="success-title"
            className="mt-6 text-2xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-3xl md:text-4xl"
          >
            {c.form.successTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-[var(--color-muted)] sm:text-lg md:text-xl">
            {c.form.successText}
          </p>

          {/* Hộp thương hiệu — dùng lại đúng nội dung linh vật đã có. */}
          <div className="mx-auto mt-8 max-w-[700px] rounded-[20px] bg-[var(--color-accent-soft)] px-5 py-5 sm:px-6 sm:py-6">
            <p className="font-bold text-[var(--color-text)]">{c.mascot.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              {c.mascot.text}
            </p>
            <p className="mt-2 font-semibold text-[var(--color-accent)]">{c.mascot.tags}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <button
              type="button"
              onClick={onGoHome}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--color-accent)] px-8 py-4 font-bold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-all duration-200 hover:bg-[var(--color-accent-light)] hover:shadow-xl motion-reduce:transition-none"
            >
              <Home className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden="true" />
              {c.form.successHome}
            </button>

            <button
              type="button"
              onClick={onBackToForm}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[var(--color-accent)] bg-white px-8 py-4 font-bold text-[var(--color-accent)] transition-colors duration-200 hover:bg-[var(--color-accent-soft)] motion-reduce:transition-none"
            >
              <RotateCcw className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden="true" />
              {c.form.successBack}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
