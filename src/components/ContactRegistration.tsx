import { useRef, useState } from 'react'
import {
  Phone,
  Mail,
  Globe,
  QrCode,
  Send,
  ShieldCheck,
  Check,
  ChevronDown,
  ExternalLink,
} from 'lucide-react'
import { MultiSelect } from './MultiSelect'
import { SuccessModal } from './SuccessModal'
import { contactSection as c } from '@/data/content'
import { trackPixelEvent } from '@/lib/metaPixel'

const channelIcons = { phone: Phone, mail: Mail, globe: Globe }
const channelTiles = {
  phone: 'bg-[var(--tile-peach)] text-[var(--color-accent)]',
  mail: 'bg-[var(--tile-rose)] text-[var(--color-accent)]',
  globe: 'bg-[var(--tile-lilac)] text-[#4d6bff]',
}

// Không kèm mt-2: khoảng cách với nhãn do thẻ bọc bên ngoài lo, nhờ vậy mũi
// tên chevron căn giữa được theo đúng chiều cao ô.
const FIELD =
  'w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)]/60 focus:border-[var(--color-accent)] focus:bg-white'
const INPUT = `${FIELD} mt-2`
const LABEL = 'block text-sm font-semibold text-[var(--color-text)]'

/** Web App của Google Apps Script, ghi thẳng vào Google Sheet. */
const SHEET_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyoKsdG8epgr_xbk-LRpNHeZnNYL6lLQ0VUzbtmV9vlOfTLz8QZhFW4PQkbwWmGKgo9/exec'

/** 9 - 11 chữ số, cho phép +84, dấu cách, chấm, gạch và ngoặc khi gõ. */
function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  return /^[\d+().\s-]+$/.test(value) && digits.length >= 9 && digits.length <= 11
}

/** Chấp nhận cả link không có http:// vì phần lớn người dùng dán "tiktok.com/@a". */
function isValidUrl(value: string) {
  return /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(value)
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

/** Nguồn lead lấy từ UTM trên URL, không có thì coi như khách vào thẳng.
 *  Đọc ngay lúc submit: mọi liên kết trong trang đều là anchor (#...) nên
 *  query string của phiên truy cập vẫn còn nguyên trên thanh địa chỉ. */
function readLeadSource() {
  const params = new URLSearchParams(window.location.search)
  const pick = (key: string) => params.get(key)?.trim() || 'direct'
  return {
    utmSource: pick('utm_source'),
    utmMedium: pick('utm_medium'),
    utmCampaign: pick('utm_campaign'),
  }
}

function Required() {
  return <span className="text-[var(--color-accent)]"> *</span>
}

/** Ô chọn một giá trị. Chevron tự vẽ để mọi ô chọn trong form — kể cả ô chọn
 *  nhiều — dùng chung một mũi tên ở đúng một vị trí. */
function SelectField({
  id,
  label,
  options,
}: {
  id: string
  label: string
  options: readonly string[]
}) {
  return (
    <div>
      <label className={LABEL} htmlFor={id}>
        {label}
      </label>
      <div className="relative mt-2">
        <select id={id} name={id} className={`${FIELD} appearance-none pr-10`} defaultValue="">
          <option value="">{c.form.selectPlaceholder}</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]"
          strokeWidth={2}
        />
      </div>
    </div>
  )
}

/** Ô đồng ý bắt buộc. */
function Consent({ name, label }: { name: string; label: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--color-text)]">
      <input
        type="checkbox"
        name={name}
        required
        value="Có"
        className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
      />
      <span>
        {label}
        <Required />
      </span>
    </label>
  )
}

export function ContactRegistration() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errorText, setErrorText] = useState(c.form.errorText)
  const [platforms, setPlatforms] = useState<string[]>([])
  const [topics, setTopics] = useState<string[]>([])
  const [platformOther, setPlatformOther] = useState('')
  // Đóng lớp thành công sẽ đưa state về 'idle' nên biểu mẫu gửi lại được;
  // cờ này giữ cho mỗi lượt tải trang chỉ báo tối đa một chuyển đổi, trong
  // khi Sheet vẫn nhận đủ mọi lần gửi. Dùng ref để không kích hoạt render.
  const conversionReported = useRef(false)
  const otherPlatform = platforms.includes('Khác')

  function togglePlatform(option: string) {
    setPlatforms((prev) =>
      prev.includes(option) ? prev.filter((v) => v !== option) : [...prev, option],
    )
    // Bỏ chọn "Khác" thì xoá luôn ô đã gõ, không để giá trị cũ lặng lẽ được
    // gửi đi cùng biểu mẫu.
    if (option === 'Khác' && otherPlatform) setPlatformOther('')
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Chốt chặn thứ hai bên cạnh nút bị vô hiệu hoá: phím Enter vẫn có thể
    // kích hoạt submit khi đang gửi, dễ sinh dòng trùng trong Sheet.
    if (state === 'sending') return

    const form = event.currentTarget
    const data = new FormData(form)
    const text = (key: string) => String(data.get(key) ?? '').trim()

    function fail(message: string) {
      setErrorText(message)
      setState('error')
    }

    // Các ô trống đã được thuộc tính required của trình duyệt chặn từ trước;
    // ở đây chỉ kiểm tra định dạng.
    const phone = text('phone')
    if (!isValidPhone(phone)) return fail(c.form.errors.phone)

    const channel = text('channelUrl')
    if (!isValidUrl(channel)) return fail(c.form.errors.channelUrl)

    const email = text('email')
    if (email && !isValidEmail(email)) return fail(c.form.errors.email)

    const consentReview = data.get('agreeTerms') !== null
    const consentContact = data.get('agreeContact') !== null
    if (!consentReview || !consentContact) return fail(c.form.errors.consent)

    // "Khác" được ghép thêm nội dung người dùng gõ để Sheet không mất dữ liệu.
    const selectedPlatforms = data.getAll('platforms').map(String)
    const other = text('platformOther')
    const platformList = other
      ? selectedPlatforms.map((p) => (p === 'Khác' ? `Khác: ${other}` : p))
      : selectedPlatforms

    const payload = {
      name: text('fullName'),
      phone,
      email,
      channel,
      followers: text('followers'),
      region: text('region'),
      platforms: platformList.join(', '),
      content: data.getAll('topics').map(String).join(', '),
      source: text('source'),
      message: text('message'),
      consentReview,
      consentContact,
      // Ba khoá bổ sung cho cột Nguồn / Loại nguồn / Chiến dịch trong Sheet.
      ...readLeadSource(),
    }

    setState('sending')
    try {
      const res = await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        // text/plain là kiểu nội dung "đơn giản" theo chuẩn CORS nên trình duyệt
        // không gửi preflight OPTIONS — Apps Script không trả lời OPTIONS, dùng
        // application/json là request sẽ hỏng. Apps Script vẫn đọc được chuỗi
        // JSON này qua e.postData.contents.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        credentials: 'omit',
        redirect: 'follow',
      })
      const result = (await res.json().catch(() => null)) as { success?: boolean } | null

      if (res.ok && result?.success) {
        form.reset()
        setPlatforms([])
        setTopics([])
        setPlatformOther('')
        setState('done')
        // Chỉ tới đây backend mới xác nhận ghi thành công, nên đây là điểm
        // duy nhất được phép báo chuyển đổi.
        if (!conversionReported.current) {
          conversionReported.current = true
          trackPixelEvent('CompleteRegistration')
        }
      } else {
        // Không reset form: dữ liệu người dùng vừa gõ được giữ nguyên.
        setErrorText(c.form.errorText)
        setState('error')
      }
    } catch {
      setErrorText(c.form.errorText)
      setState('error')
    }
  }

  return (
    <>
    <section id="final-cta" className="bg-[var(--veil-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Tiêu đề dùng đúng khuôn của SectionHeading: nhãn, tiêu đề, gạch cam,
            tất cả căn giữa phía trên lưới. Nhờ vậy hai cột bên dưới bắt đầu
            cùng một mốc, không còn khoảng trắng ở đầu cột form. */}
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent-dark)]">
            <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
            {c.badge}
          </span>

          <h2 className="text-[1.75rem] font-extrabold uppercase leading-[1.15] tracking-tight text-balance text-[var(--color-text)] sm:text-3xl md:text-[2rem] lg:text-4xl xl:text-[2.5rem]">
            {c.headingLead} <span className="text-[var(--color-accent)]">{c.headingAccent}</span>
          </h2>

          <span className="mx-auto mt-5 block h-1.5 w-16 rounded-full bg-[var(--color-accent)]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            {c.description}
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Cột trái — mascot & kênh liên hệ */}
          <div>
            {/* Thẻ mascot */}
            <div className="flex items-center gap-5 rounded-2xl border border-[var(--color-border)] bg-white p-5">
            {c.mascot.image ? (
              <img
                src={c.mascot.image}
                alt={c.mascot.title}
                width={c.mascot.imageWidth}
                height={c.mascot.imageHeight}
                className="h-28 w-auto shrink-0 object-contain"
              />
            ) : (
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface-strong)] text-center text-[10px] font-semibold leading-tight text-[var(--color-muted)]">
                Ảnh
                <br />
                mascot
              </div>
            )}
            <div>
              <p className="font-bold text-[var(--color-text)]">{c.mascot.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                {c.mascot.text}
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--color-accent)]">
                {c.mascot.tags}
              </p>
            </div>
          </div>

          {/* Thẻ kênh liên hệ */}
          <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-white p-5">
            {/* Zalo OA */}
            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#1a6bff]/[0.06] p-3 ring-1 ring-[#1a6bff]/20">
              <img
                src={c.zalo.logo}
                alt="Zalo"
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-lg"
              />
              <div className="min-w-0 flex-1">
                <p className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-[var(--color-text)]">{c.zalo.name}</span>
                  <span className="rounded bg-[#1a6bff]/12 px-2 py-0.5 text-[11px] font-semibold text-[#1a6bff]">
                    {c.zalo.badge}
                  </span>
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-muted)]">{c.zalo.meta}</p>
              </div>
              <a
                href={c.zalo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Mã QR Zalo OA ${c.zalo.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[var(--color-muted)] ring-1 ring-[var(--color-border)] transition-colors hover:text-[#1a6bff]"
              >
                <QrCode className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href={c.zalo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#1a6bff] px-3.5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#1558d6]"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/25 text-[9px] font-extrabold">
                  Z
                </span>
                {c.zalo.cta}
              </a>
            </div>

            {/* Hotline / Email / Cổng đăng ký */}
            <ul className="mt-4 flex flex-col gap-4">
              {c.channels.map((ch) => {
                const Icon = channelIcons[ch.icon]
                return (
                  <li key={ch.label} className="flex items-center gap-4">
                    {/* Ô icon cũng là link: bấm icon điện thoại là quay số ngay,
                        không bắt người dùng nhắm đúng dòng chữ bên cạnh. */}
                    <a
                      href={ch.href}
                      {...('external' in ch && ch.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      aria-label={`${ch.label}: ${ch.value}`}
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 ${channelTiles[ch.icon]}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </a>
                    <div className="min-w-0">
                      <p className="text-xs text-[var(--color-muted)]">{ch.label}</p>
                      <a
                        href={ch.href}
                        {...('external' in ch && ch.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className={`inline-flex items-center gap-1.5 break-all font-bold transition-colors hover:text-[var(--color-accent)] ${
                          'external' in ch && ch.external
                            ? 'text-sm text-[#4d6bff]'
                            : 'text-[var(--color-text)]'
                        }`}
                      >
                        {ch.value}
                        {'external' in ch && ch.external && (
                          <ExternalLink className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                        )}
                      </a>
                      {'note' in ch && ch.note && (
                        <p className="text-xs font-semibold text-[var(--color-accent)]">
                          {ch.note}
                        </p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Chip cam kết */}
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {c.chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-xs font-semibold text-[var(--color-text)]"
              >
                <Check className="h-3.5 w-3.5 text-[var(--color-accent)]" strokeWidth={3} />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Cột phải — form đăng ký */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-xl shadow-[rgba(16,20,38,0.06)] md:p-9">
          <h3 className="text-xl font-extrabold tracking-tight text-[var(--color-text)] md:text-2xl">
            {c.form.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
            {c.form.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="mt-7" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={LABEL} htmlFor="fullName">
                    {c.form.fullName.label}
                    <Required />
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    placeholder={c.form.fullName.placeholder}
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className={LABEL} htmlFor="phone">
                    {c.form.phone.label}
                    <Required />
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={c.form.phone.placeholder}
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className={LABEL} htmlFor="email">
                    {c.form.email.label}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={c.form.email.placeholder}
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className={LABEL} htmlFor="channelUrl">
                    {c.form.channelUrl.label}
                    <Required />
                  </label>
                  {/* type="url" bắt buộc có scheme; nhiều người dán "tiktok.com/@a"
                      nên để type text và chỉ kiểm tra bằng pattern rộng. */}
                  <input
                    id="channelUrl"
                    name="channelUrl"
                    required
                    inputMode="url"
                    placeholder={c.form.channelUrl.placeholder}
                    className={INPUT}
                  />
                </div>
                <SelectField
                  id="followers"
                  label={c.form.followers.label}
                  options={c.followerRanges}
                />
                <SelectField id="region" label={c.form.region.label} options={c.regions} />
              </div>

              {/* Hai ô chọn nhiều nằm cùng một hàng, mỗi ô nửa bề ngang. Nhãn
                  và dòng gợi ý của hai bên khớp nhau vì cùng khuôn. */}
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <MultiSelect
                    name="platforms"
                    label={c.form.platforms.label}
                    hint={c.form.platforms.hint}
                    placeholder={c.form.selectPlaceholder}
                    options={c.platforms}
                    value={platforms}
                    onToggle={togglePlatform}
                    fieldClassName={FIELD}
                    labelClassName={LABEL}
                  />

                  {otherPlatform && (
                    <div className="mt-4">
                      <label className={LABEL} htmlFor="platformOther">
                        {c.form.platformOther.label}
                        <Required />
                      </label>
                      <input
                        id="platformOther"
                        name="platformOther"
                        required
                        value={platformOther}
                        onChange={(e) => setPlatformOther(e.target.value)}
                        placeholder={c.form.platformOther.placeholder}
                        className={INPUT}
                      />
                    </div>
                  )}
                </div>

                <MultiSelect
                  name="topics"
                  label={c.form.topics.label}
                  hint={c.form.topics.hint}
                  placeholder={c.form.selectPlaceholder}
                  options={c.topics}
                  value={topics}
                  onToggle={(option) =>
                    setTopics((prev) =>
                      prev.includes(option)
                        ? prev.filter((v) => v !== option)
                        : [...prev, option],
                    )
                  }
                  fieldClassName={FIELD}
                  labelClassName={LABEL}
                />
              </div>

              <div className="mt-5">
                <SelectField id="source" label={c.form.source.label} options={c.sources} />
              </div>

              {/* Ô nhiều dòng, chiếm trọn bề ngang lưới hai cột. Dùng chung khuôn
                  INPUT với các ô một dòng nên viền, bo góc, cỡ chữ và trạng thái
                  focus giống hệt; resize-y để chỉ kéo giãn theo chiều dọc. */}
              <div className="mt-5">
                <label className={LABEL} htmlFor="message">
                  {c.form.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={c.form.message.placeholder}
                  className={`${INPUT} min-h-[140px] resize-y`}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Consent name="agreeTerms" label={c.form.agreeTerms} />
                <Consent name="agreeContact" label={c.form.agreeContact} />
              </div>

              <button
                type="submit"
                disabled={state === 'sending'}
                className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[var(--color-accent)] px-6 py-4 font-bold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-colors hover:bg-[var(--color-accent-light)] disabled:opacity-70"
              >
                {state === 'sending' ? c.form.sending : c.form.submit}
                {state !== 'sending' && <Send className="h-4 w-4" strokeWidth={2.5} />}
              </button>

              {state === 'error' && (
                <p className="mt-3 text-center text-sm font-semibold text-[var(--color-accent-dark)]">
                  {errorText}
                </p>
              )}

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-[var(--color-muted)]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#34d399]" strokeWidth={2} />
                {c.form.privacy}
              </p>
            </form>
        </div>
        </div>
      </div>
    </section>

      {/* Lớp thành công nằm ngoài <section>: position: fixed sẽ hỏng nếu tổ
          tiên có transform/filter, để ngoài là chắc chắn phủ đúng viewport. */}
      {state === 'done' && (
        <SuccessModal
          onBackToForm={() => setState('idle')}
          onGoHome={() => {
            setState('idle')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      )}
    </>
  )
}
