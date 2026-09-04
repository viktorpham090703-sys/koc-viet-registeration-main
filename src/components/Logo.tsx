import { logo } from '@/data/content'

export function Logo({
  className = '',
  variant = 'dark',
}: {
  className?: string
  /** 'light' = bản chữ trắng, dùng khi đặt trên nền tối */
  variant?: 'dark' | 'light'
}) {
  return (
    <img
      src={variant === 'light' ? logo.srcLight : logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={`w-auto object-contain ${className}`}
    />
  )
}
