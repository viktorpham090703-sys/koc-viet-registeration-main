/** Pixel dùng chung cho cả script nền trong <head> lẫn các event chuyển đổi. */
export const META_PIXEL_ID = '2102457530387519'

declare global {
  interface Window {
    fbq?: (
      action: 'init' | 'track' | 'trackCustom',
      name: string,
      params?: Record<string, unknown>,
    ) => void
  }
}

/**
 * Bắn event chuyển đổi. Không gọi trực tiếp `window.fbq` ở nơi khác: hàm này
 * chịu trách nhiệm cho hai tình huống fbq vắng mặt hợp lệ — lúc render phía
 * server (không có `window`) và khi trình chặn quảng cáo giữ lại fbevents.js.
 * Cả hai đều phải im lặng bỏ qua, tuyệt đối không làm hỏng luồng đăng ký.
 */
export function trackPixelEvent(event: string) {
  if (typeof window === 'undefined') return
  window.fbq?.('track', event)
}
