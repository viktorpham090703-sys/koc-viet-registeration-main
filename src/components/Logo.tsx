import { logo } from '@/data/content'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={`w-auto object-contain ${className}`}
    />
  )
}
