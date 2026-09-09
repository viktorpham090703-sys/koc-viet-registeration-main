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
 * Danh sách đóng các sự kiện được phép bắn. Tên sự kiện là hằng số biên dịch,
 * không bao giờ được lấy từ dữ liệu người dùng hay biến có thể rỗng.
 */
export type PixelEvent = 'PageView' | 'Lead' | 'CompleteRegistration'

/**
 * Bắn event chuyển đổi. Không gọi trực tiếp `window.fbq` ở nơi khác: hàm này
 * chịu trách nhiệm cho hai tình huống fbq vắng mặt hợp lệ — lúc render phía
 * server (không có `window`) và khi trình chặn quảng cáo giữ lại fbevents.js.
 * Cả hai đều phải im lặng bỏ qua, tuyệt đối không làm hỏng luồng đăng ký.
 */
export function trackPixelEvent(event: PixelEvent) {
  if (typeof window === 'undefined') return
  // Chốt chặn lúc chạy, phòng khi có JS chưa qua kiểm tra kiểu gọi vào: một
  // tên rỗng sẽ tới Meta dưới dạng sự kiện không tên và làm hỏng ghi nhận
  // chuyển đổi. Thà không bắn còn hơn bắn một sự kiện vô danh.
  const name = typeof event === 'string' ? event.trim() : ''
  if (!name) return
  window.fbq?.('track', name)
}
