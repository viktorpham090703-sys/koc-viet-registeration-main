import { useEffect, useId, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

/**
 * Ô chọn nhiều, trông y hệt <select> của form nhưng mở ra danh sách có ô tick
 * và không đóng lại sau mỗi lần chọn.
 *
 * `<select multiple>` gốc không dùng được: nó hiện thành hộp danh sách cao
 * nhiều dòng, phá bố cục hàng ngang, và trên mobile gần như không thao tác nổi.
 *
 * Giá trị gửi lên server bằng các input ẩn cùng tên — mỗi lựa chọn một input,
 * nên FormData nhận về đúng dạng mảng.
 */
export function MultiSelect({
  name,
  label,
  hint,
  placeholder,
  options,
  value,
  onToggle,
  fieldClassName,
  labelClassName,
}: {
  name: string
  label: string
  hint: string
  placeholder: string
  options: readonly string[]
  value: string[]
  /** Bật/tắt một lựa chọn. Trả về từng mục thay vì cả mảng để bên gọi cập
   *  nhật state theo dạng hàm, không đọc trúng giá trị cũ khi hai lần bấm rơi
   *  vào cùng một nhịp render. */
  onToggle: (option: string) => void
  fieldClassName: string
  labelClassName: string
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const id = useId()
  const listId = `${id}-list`

  // Bấm ra ngoài thì đóng. Dùng pointerdown để đóng ngay khi nhấn, không đợi
  // nhả chuột — nếu không, cú bấm vào ô khác sẽ bị hụt một nhịp.
  useEffect(() => {
    if (!open) return
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  function openList(index = 0) {
    setOpen(true)
    // Đợi danh sách hiện xong mới chuyển focus vào nó.
    requestAnimationFrame(() => {
      listRef.current?.querySelectorAll('li')[index]?.focus()
    })
  }

  function close(focusButton = true) {
    setOpen(false)
    if (focusButton) buttonRef.current?.focus()
  }

  /** Mục đang được thao tác luôn lấy từ phần tử đang focus, không giữ thêm
   *  state riêng: giữ state thì khi phím đến dồn dập, lần nhấn sau vẫn đọc
   *  trúng chỉ số cũ và tick nhầm dòng. */
  function onListKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    const items = [...(listRef.current?.querySelectorAll('li') ?? [])]
    if (items.length === 0) return
    const current = items.indexOf(document.activeElement as HTMLLIElement)

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const step = event.key === 'ArrowDown' ? 1 : -1
      items[(current + step + items.length) % items.length]?.focus()
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      items[event.key === 'Home' ? 0 : items.length - 1]?.focus()
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (current >= 0) onToggle(options[current])
    } else if (event.key === 'Tab') {
      setOpen(false)
    }
  }

  // "TikTok, Facebook +2" — luôn gói trong một dòng để ô không cao lên.
  const summary =
    value.length === 0
      ? placeholder
      : value.slice(0, 2).join(', ') + (value.length > 2 ? ` +${value.length - 2}` : '')

  return (
    <div>
      <span className={labelClassName} id={`${id}-label`}>
        {label}
      </span>
      <p className="mt-0.5 text-xs text-[var(--color-muted)]">{hint}</p>

      <div
        className="relative mt-2"
        ref={rootRef}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            event.stopPropagation()
            close()
          }
        }}
      >
        <button
          ref={buttonRef}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={`${id}-label`}
          onClick={() => (open ? close(false) : openList())}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              openList()
            }
          }}
          className={`${fieldClassName} flex items-center justify-between gap-2 text-left`}
        >
          <span
            className={`truncate ${value.length === 0 ? 'text-[var(--color-muted)]/60' : ''}`}
          >
            {summary}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-[var(--color-muted)] transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
            strokeWidth={2}
          />
        </button>

        {/* Giữ trong DOM và ẩn bằng invisible thay vì gỡ hẳn: có vậy mới chạy
            được hiệu ứng đóng, mà vẫn không lọt vào tab order khi đang đóng. */}
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-multiselectable="true"
          aria-labelledby={`${id}-label`}
          onKeyDown={onListKeyDown}
          className={`absolute left-0 right-0 top-[calc(100%+0.375rem)] z-20 max-h-60 overflow-auto rounded-xl border border-[var(--color-border)] bg-white p-1.5 shadow-xl shadow-[rgba(16,20,38,0.10)] transition duration-150 ease-out ${
            open
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-1 opacity-0'
          }`}
        >
          {options.map((option) => {
            const selected = value.includes(option)
            return (
              <li
                key={option}
                role="option"
                aria-selected={selected}
                tabIndex={-1}
                onClick={() => onToggle(option)}
                className={`flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-[var(--color-text)] outline-none transition-colors hover:bg-[var(--color-surface)] focus-visible:bg-[var(--color-surface)] ${
                  selected ? 'bg-[var(--color-accent-soft)]' : ''
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border text-white transition-colors ${
                    selected
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                      : 'border-[var(--color-border-strong)] bg-white'
                  }`}
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {option}
              </li>
            )
          })}
        </ul>
      </div>

      {value.map((v) => (
        <input key={v} type="hidden" name={name} value={v} />
      ))}
    </div>
  )
}
