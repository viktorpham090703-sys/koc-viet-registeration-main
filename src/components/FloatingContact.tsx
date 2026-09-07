import { Phone } from 'lucide-react'
import { floatingContact } from '@/data/content'

/**
 * Cụm nút liên hệ nổi ở góc dưới bên phải. Dùng position: fixed nên nằm ngoài
 * dòng chảy bố cục — không đẩy hay chiếm chỗ của bất kỳ phần nào trên trang.
 */
const BUTTON =
  'group flex h-[54px] w-[54px] cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 ease-out hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:h-16 sm:w-16'

export function FloatingContact() {
  return (
    <div
      className="fixed flex flex-col gap-[15px]"
      style={{ right: 24, bottom: 24, zIndex: 9999 }}
    >
      <a
        href={floatingContact.zalo.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={floatingContact.zalo.label}
        title={floatingContact.zalo.label}
        className={`${BUTTON} border border-[#1a6bff]/25 shadow-[0_4px_14px_rgba(26,107,255,0.18)] hover:border-[#1a6bff]/45 hover:shadow-[0_8px_22px_rgba(26,107,255,0.34)]`}
      >
        {/* Đúng tệp logo đang dùng ở khối Zalo OA phần Kết nối trực tiếp, nên
            hai nơi luôn hiển thị cùng một nhãn hiệu. */}
        <img
          src={floatingContact.zalo.logo}
          alt=""
          aria-hidden="true"
          width={50}
          height={50}
          className="h-8 w-8 rounded-lg sm:h-9 sm:w-9"
        />
      </a>

      <a
        href={floatingContact.phone.href}
        aria-label={floatingContact.phone.label}
        title={floatingContact.phone.label}
        className={`${BUTTON} border border-[var(--color-accent)]/25 shadow-[0_4px_14px_rgba(255,77,46,0.18)] hover:border-[var(--color-accent)]/45 hover:shadow-[0_8px_22px_rgba(255,77,46,0.34)]`}
      >
        <Phone
          className="h-5 w-5 text-[var(--color-accent)] sm:h-6 sm:w-6"
          strokeWidth={2}
          aria-hidden="true"
        />
      </a>
    </div>
  )
}
