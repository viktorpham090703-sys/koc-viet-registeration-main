// Single source of truth for all landing-page copy.
// Content is transcribed verbatim from "KOC-VIET-Gioi-thieu-KOC.pptx.pdf" (11 pages).
// Do not paraphrase, correct, or reword any string in this file.

export const brand = {
  name: 'KOC Việt',
  descriptor: 'KOC Việt — Trusted Creator Platform',
  tagline: 'Trusted Creator Platform',
  positioning:
    'Nền tảng Doanh nghiệp booking trực tiếp KOC, minh bạch, thu nhập bền vững',
}

export const nav = [
  { label: 'KOC Việt', href: '#hero' },
  { label: 'Vì sao KOC Việt', href: '#why-join' },
  { label: 'Kiếm tiền', href: '#money-making' },
  { label: 'AI Clone', href: '#ai-clone' },
  { label: 'Ưu đãi', href: '#onboarding-offer' },
  { label: 'Phân hạng KOC', href: '#ranking' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Bảo vệ', href: '#protection' },
]

// SECTION 01 — HERO (page 1)
export const hero = {
  eyebrow: 'GIA NHẬP KOC VIỆT',
  heading: 'GIA NHẬP KOC VIỆT',
  description:
    'Nền tảng Doanh nghiệp booking trực tiếp KOC, minh bạch, thu nhập bền vững',
  tagline: 'Trusted Creator Platform',
  brand: 'KOC Việt — Trusted Creator Platform',
  cta: 'ĐĂNG KÝ NGAY',
  image: {
    src: '/images/hero-visual.jpg',
    alt: 'Nền tảng booking KOC Việt kết nối doanh nghiệp và nhà sáng tạo trên toàn quốc',
    // Phải khớp kích thước thật của file để trình duyệt giữ đúng chỗ, tránh
    // nhảy layout. Đổi file ảnh thì cập nhật lại hai số này.
    width: 1599,
    height: 984,
  },
}

// SECTION 02 — PAIN POINTS (page 2)
export const painPoints = {
  heading: 'BẠN CÓ ĐANG GẶP NHỮNG VẤN ĐỀ NÀY?',
  items: [
    'Thu nhập bị chia qua nhiều tầng trung gian, phụ thuộc agency?',
    'Không sở hữu dữ liệu khách hàng của chính mình?',
    'Lo bị chậm hoặc quỵt thù lao khi nhận booking?',
    'Mất quá nhiều thời gian sản xuất nội dung?',
  ],
  closing: 'KOC Việt sinh ra để giải quyết tất cả.',
  image: '/images/pain-points.jpg',
}

// SECTION 03 — WHY JOIN KOC VIỆT (page 3)
export const whyJoin = {
  heading: 'VÌ SAO NÊN GIA NHẬP KOC VIỆT?',
  columns: ['Giá trị', 'Ý nghĩa với bạn'],
  rows: [
    [
      'Booking trực tiếp như Grap',
      'Làm việc thẳng với doanh nghiệp, thu nhập tương xứng, không qua trung gian',
    ],
    [
      'Sở hữu dữ liệu khách hàng',
      'Data, network doanh nghiệp là của bạn — tài sản lâu dài, không lệ thuộc nền tảng, agency',
    ],
    [
      'Thanh toán an toàn (escrow)',
      'Tiền được doanh nghiệp ký quỹ trước, xong việc là giải ngân ngay — không lo bị quỵt',
    ],
    [
      'Minh bạch doanh số',
      'Theo dõi click, đơn, doanh số, hoa hồng theo thời gian thực',
    ],
    [
      'AI Clone Avatar',
      'Thu nhập thụ động không giới hạn — AI tạo video thay bạn, bạn chỉ duyệt & đăng',
    ],
    [
      'Chính danh quốc gia',
      'Hồ sơ định danh qua Cổng kol.gov.vn — tăng uy tín, dễ nhận booking',
    ],
    [
      'Được đào tạo & cấp chứng nhận',
      'Nâng kỹ năng livestream, bán hàng; hoạt động hợp pháp, chuyên nghiệp',
    ],
    [
      'Bảo vệ hình ảnh & quyền lợi',
      'Quyền duyệt nội dung, quyền gỡ bỏ; hình ảnh được bảo vệ',
    ],
  ],
  image: '/images/why-join.jpg',
}

// SECTION 04 — WAYS TO MAKE MONEY (page 4)
export const moneyMaking = {
  heading: 'CÁC CÁCH KIẾM TIỀN TRÊN NỀN TẢNG',
  items: [
    {
      title: 'Booking Review',
      text: 'nhận sản phẩm, đánh giá, nhận phí booking.',
    },
    {
      title: 'Booking Quảng cáo',
      text: 'đăng nội dung quảng cáo theo brief, nhận phí cố định.',
    },
    {
      title: 'Booking Affiliate',
      text: 'gắn link/mã cá nhân, nhận hoa hồng theo doanh số.',
    },
    {
      title: 'AI Clone Avatar (thu nhập thụ động)',
      text: 'AI tái tạo hình ảnh/giọng nói của bạn (khi bạn cấp phép) để tạo video; bạn là người duyệt & đăng — kiếm tiền ngay cả khi nghỉ ngơi.',
    },
    {
      title: 'Combo',
      text: 'kết hợp nhiều hình thức để tối đa thu nhập.',
    },
  ],
  image: '/images/money-making.jpg',
}

// SECTION 05 — AI CLONE AVATAR (page 5)
export const aiClone = {
  // \u00A0 = dấu cách không ngắt. Ghép "AI CLONE AVATAR" thành một khối
  // không thể tách, để trình duyệt buộc phải xuống dòng ở dấu gạch ngang.
  // Chữ giữ nguyên, chỉ đổi ký tự khoảng trắng.
  heading: 'ĐIỂM NỔI BẬT: AI\u00A0CLONE\u00A0AVATAR — THU NHẬP THỤ ĐỘNG',
  items: [
    'Không cần bỏ công quay dựng: AI tạo video review/affiliate giống bạn tới 99%.',
    'Bạn giữ toàn quyền duyệt: chỉ đăng khi thấy phù hợp.',
    'Mô hình đã có nhiều KOL/KOC hợp tác và tạo doanh thu lớn.',
    'Nhân nội dung nhiều lần, nhiều nhãn hàng — nguồn thu bền vững, không ảnh hưởng công việc sáng tạo nội dung hiện tại.',
  ],
  image: '/images/ai-clone.jpg',
}

// SECTION 06 — ONBOARDING OFFER (page 6)
export const onboardingOffer = {
  heading: 'CHÍNH SÁCH ƯU ĐÃI ONBOARDING — "ĐỔI REVIEW LẤY ƯU ĐÃI"',
  intro:
    'Làm video review nền tảng đạt chuẩn → miễn phí chiết khấu nền tảng trong 12 - 24 tháng:',
  columns: ['Gói', 'Điều kiện (bạn làm)', 'Quyền lợi'],
  rows: [
    [
      'ĐỒNG (Starter)',
      '01 video review đạt chuẩn',
      'Miễn phí nền tảng / 12 tháng',
    ],
    [
      'BẠC (Growth)',
      '03 video + đạt mốc view',
      'Miễn phí / 18 tháng + ưu tiên nhận điều phối booking',
    ],
    [
      'VÀNG (Ambassador)',
      'Chuỗi review + cam kết đại sứ',
      'Miễn phí / 24 tháng + spotlight + hỗ trợ AI Clone',
    ],
  ],
  highlight:
    'Bạn chỉ "trả" bằng nội dung review và bạn sẽ nhận 100% phí booking từ doanh nghiệp.',
  note: 'Lưu ý, nếu thấy phù hợp hãy đăng ký để KOC Việt duyệt và liên hệ hỗ trợ.',
  image: '/images/onboarding-offer.jpg',
}

// SECTION 07 — KOC RANKING (page 7)
export const ranking = {
  heading: 'PHÂN HẠNG KOC & QUYỀN LỢI',
  columns: ['Hạng', 'Quy mô follower', 'Quyền lợi tiêu biểu'],
  rows: [
    [
      'Nano',
      'Từ 1000 - 10.000',
      'Nhận booking phù hợp, tích lũy uy tín, đào tạo cơ bản',
    ],
    [
      'Micro',
      '10.000 – 50.000',
      'Ưu tiên booking ngành hàng, mở khóa affiliate nâng cao, hỗ trợ AI Clone',
    ],
    [
      'Mid',
      '50.000 – 200.000',
      'Booking giá trị cao, ưu tiên điều phối, hỗ trợ AI Clone',
    ],
    [
      'Macro / KOL',
      'Trên 200.000',
      'spotlight, deal cao cấp, đại sứ thương hiệu, hỗ trợ AI Clone',
    ],
    [
      'Nghệ sĩ nổi tiếng',
      'Trên 200.000',
      'Kênh báo giá kín, spotlight, deal cao cấp, đại sứ thương hiệu',
    ],
  ],
  closing:
    'Hạng được nâng theo hiệu quả hoạt động và độ uy tín — càng hoạt động tốt, quyền lợi càng lớn.',
  image: '/images/ranking.jpg',
}

// SECTION 08 — ONBOARD PROCESS (page 8)
export const process = {
  heading: 'QUY TRÌNH THAM GIA (ONBOARD)',
  steps: [
    'Xem hướng dẫn cài app(không tốn dung lượng điện thoại) / đăng ký tài khoản KOC.',
    'Định danh (eKYC) — để chính danh.',
    'Hoàn thiện hồ sơ năng lực (ngành hàng, kênh, ảnh bìa, số tài khoản nhận thanh toán).',
    'Nhận booking / gắn affiliate / kích hoạt AI Clone Avatar(tuỳ chọn).',
    'Đăng tải nội dung → nhận thanh toán minh bạch qua Ví nội bộ, rút về ngân hàng.',
  ],
  image: '/images/process.jpg',
}

// SECTION 09 — COMPARISON (page 9)
export const comparison = {
  heading: 'SO SÁNH: KOC VIỆT vs CÁCH NHẬN BOOKING CŨ',
  columns: ['Tiêu chí', 'Qua agency / tự do', 'KOC Việt'],
  rows: [
    [
      'Thu nhập',
      'Bị chia nhiều tầng, không tương xứng',
      'Trực tiếp, tương xứng, báo giá do bạn tự thiết lập',
    ],
    [
      'Dữ liệu khách hàng',
      'Không sở hữu, agency nắm',
      'Bạn sở hữu',
    ],
    [
      'Thanh toán',
      'Rủi ro chậm/quỵt /phụ thuộc agency',
      'Escrow, an toàn',
    ],
    [
      'Sản xuất nội dung',
      'Tự làm, tốn công, hiệu suất thấp',
      'AI Clone hỗ trợ, thụ động',
    ],
    [
      'Uy tín/pháp lý',
      'Không chính danh, dễ chịu rủi ro',
      'Định danh cùng cổng quản lý kol quốc gia',
    ],
    [
      'Minh bạch',
      'Thấp',
      'Real-time, rõ ràng',
    ],
  ],
  image: '/images/comparison.jpg',
}

// SECTION 10 — PROTECTION (page 10)
export const protection = {
  heading: 'CAM KẾT BẢO VỆ KOC',
  items: [
    {
      title: 'Bảo vệ hình ảnh',
      text: 'AI Clone chỉ dùng khi bạn cấp phép; bạn có quyền duyệt và gỡ bỏ nội dung sai phạm vi.',
    },
    {
      title: 'Bảo vệ dữ liệu',
      text: 'tuân thủ Nghị định 13/2023, mã hóa dữ liệu, máy chủ tại Việt Nam.',
    },
    {
      title: 'Bảo vệ thu nhập',
      text: 'ký quỹ escrow, đối soát minh bạch, thanh toán đúng hạn.',
    },
    {
      title: 'Quyền chủ động',
      text: 'nhận/từ chối booking; đi lại các bước; kiểm soát nội dung trước khi đăng.',
    },
  ],
  image: '/images/protection.jpg',
}

// SECTION 11 — FINAL CTA (page 11)
export const finalCta = {
  heading: 'ĐĂNG KÝ NGAY',
  body: 'Tham gia KOC Việt hôm nay — miễn phí đăng ký, ưu đãi onboarding có hạn.',
  contact: 'Tải app / đăng ký: [•] · Hotline: [•] · Zalo/Fanpage: [•]',
  brandStatement: 'KOC Việt — Trusted Creator Platform.',
  slogan: 'Thu nhập tương xứng. Minh bạch. Bền vững.',
  brandRepeat: 'KOC Việt — Trusted Creator Platform',
  image: '/images/final-cta.jpg',
}

export const logo = {
  src: '/images/koc-viet-logo.png',
  // Bản chữ trắng, dùng trên nền tối (footer). Sinh ra từ file gốc:
  // chữ đen -> trắng, giữ nguyên dấu play cam.
  srcLight: '/images/koc-viet-logo-light.png',
  alt: 'KOC Việt — Trusted Creator Platform',
  width: 712,
  height: 166,
}

// FOOTER
// Nội dung lấy theo bản thiết kế tham chiếu do khách hàng cung cấp.
export const footer = {
  description:
    'Nền tảng booking KOC/KOL trực tiếp, minh bạch, hiệu quả dành riêng cho Doanh nghiệp Việt. Kết nối hàng trăm nghìn nhà sáng tạo nội dung đã định danh cấp quốc gia.',

  details: [
    { label: 'Slogan', value: 'KOC Việt — Kết nối trực tiếp. Minh bạch. Hiệu quả.' },
    { label: 'Đơn vị phát triển', value: 'NetViet TV (Tập đoàn Truyền thông NetViet)' },
    {
      label: 'Trụ sở',
      value: 'Tầng 2, Tòa nhà Chelsea Park, 116 Trung Kính, P. Yên Hòa, Cầu Giấy, Hà Nội',
    },
  ],

  zalo: {
    label: 'Zalo OA',
    name: 'NetvietTV (Official Account ✓)',
    qr: 'QR',
    href: 'https://zalo.me/3746623500051373789',
  },
  hotline: {
    label: 'Hotline',
    value: '0813 487 686',
    note: '(Hải Đức — Phòng Kinh doanh)',
    href: 'tel:0813487686',
  },
  email: {
    label: 'Email',
    value: 'kocviet@netviettv.com.vn',
    href: 'mailto:kocviet@netviettv.com.vn',
  },

  navHeading: 'ĐIỀU HƯỚNG NHANH',

  legalHeading: 'PHÁP LÝ & TUÂN THỦ',
  legal: [
    {
      title: 'Cổng quản lý KOL/KOC quốc gia',
      text: 'Tích hợp hệ thống dữ liệu định danh theo chuẩn kol.gov.vn, hỗ trợ đối soát thuế và chứng từ minh bạch.',
      tone: 'accent' as const,
    },
    {
      title: 'Nghị định 13/2023/NĐ-CP',
      text: 'Tuân thủ toàn diện quy định về bảo vệ dữ liệu cá nhân, hạ tầng máy chủ lưu trữ 100% tại Việt Nam.',
      tone: 'green' as const,
    },
  ],

  copyrightSuffix:
    'KOC VIỆT. Phát triển và bảo chứng bởi NetViet TV & Cổng Quản Lý KOL Quốc Gia.',

  // Chưa có URL thật cho 3 mục này.
  policies: [
    { label: 'Cổng Doanh Nghiệp', href: '#' },
    { label: 'Chính sách bảo mật', href: '#' },
    { label: 'Điều khoản dịch vụ', href: '#' },
  ],
}

// SECTION LIÊN HỆ / ĐĂNG KÝ (thay cho khối "Đăng ký ngay" cũ)
// Nội dung lấy theo bản thiết kế tham chiếu do khách hàng cung cấp.
export const contactSection = {
  badge: 'KẾT NỐI TRỰC TIẾP',
  headingLead: 'Liên Hệ Trực Tiếp',
  headingAccent: 'KOC VIỆT',
  description:
    'Đăng ký tài khoản Doanh nghiệp hoặc nhận tư vấn chiến dịch trực tiếp từ đội ngũ chuyên gia hàng đầu.',

  mascot: {
    image: '/images/mascot.png' as string | null,
    imageWidth: 360,
    imageHeight: 569,
    title: 'Mascot KOC VIỆT',
    text: 'Đồng hành cùng hàng nghìn doanh nghiệp Việt chinh phục thị trường creator',
    tags: '#ChinhDanh #MinhBach #HieuQua',
  },

  zalo: {
    logo: '/images/zalo-logo.svg',
    name: 'NetvietTV',
    badge: 'Official Account',
    meta: 'Truyền thông & Giải trí • Đã xác thực',
    cta: 'Nhắn OA',
    href: 'https://zalo.me/3746623500051373789',
  },

  channels: [
    {
      icon: 'phone' as const,
      label: 'Hotline tư vấn doanh nghiệp',
      value: '0813 487 686',
      note: '(Hải Đức — Phòng Kinh doanh)',
      href: 'tel:0813487686',
    },
    {
      icon: 'mail' as const,
      label: 'Email tiếp nhận yêu cầu',
      value: 'kocviet@netviettv.com.vn',
      href: 'mailto:kocviet@netviettv.com.vn',
    },
    {
      icon: 'globe' as const,
      label: 'Cổng đăng ký doanh nghiệp trực tuyến',
      value: 'https://kocviet.com/doanh-nghiep',
      href: 'https://kocviet.com/doanh-nghiep',
      external: true,
    },
  ],

  chips: [
    'Đúng giọng địa phương',
    'Gửi mẫu trong ngày',
    'Quay video trong 24h',
    'Chi phí Nano/Micro',
    'Đã xác minh danh tính',
    'Đang nhận booking',
  ],

  form: {
    title: 'Đăng Ký Tài Khoản Doanh Nghiệp',
    subtitle:
      'Nhận tư vấn chiến dịch miễn phí và mở tài khoản Portal Doanh nghiệp trong ngày.',
    company: { label: 'Tên Doanh Nghiệp / Nhãn Hàng', placeholder: 'VD: Tân Hiệp Phát, Vinamilk...' },
    person: { label: 'Họ & Tên Người Phụ Trách', placeholder: 'VD: Nguyễn Văn A (Brand Manager)' },
    phone: { label: 'Số Điện Thoại (Zalo)', placeholder: 'VD: 0987654321' },
    email: { label: 'Email Doanh Nghiệp', placeholder: 'VD: marketing@congty.com' },
    industry: { label: 'Ngành Hàng Kinh Doanh' },
    budget: { label: 'Ngân Sách Dự Kiến' },
    message: {
      label: 'Yêu Cầu Cụ Thể Hoặc Kế Hoạch Đã Dự Toán',
      placeholder:
        'Mô tả sản phẩm cần quảng bá, số lượng KOC mong muốn, hoặc cấu hình đã tính ở bộ ROI Calculator...',
    },
    submit: 'Gửi Yêu Cầu & Nhận Tư Vấn Miễn Phí',
    privacy: 'Thông tin được bảo mật 100% theo Nghị định 13/2023/NĐ-CP',
    sending: 'Đang gửi...',
    successTitle: 'Đã nhận yêu cầu của bạn!',
    successText: 'Đội ngũ KOC Việt sẽ liên hệ lại trong thời gian sớm nhất.',
    errorText: 'Gửi không thành công. Vui lòng gọi 0813 487 686 hoặc email kocviet@netviettv.com.vn.',
  },

  // Ảnh tham chiếu chỉ hiện 1 lựa chọn cho mỗi ô chọn; các mục còn lại là
  // danh sách gợi ý thông dụng — cần khách hàng xác nhận lại.
  industries: [
    'F&B / Đồ uống / Thực phẩm',
    'Mỹ phẩm / Làm đẹp',
    'Thời trang / Phụ kiện',
    'Mẹ & Bé',
    'Công nghệ / Điện tử',
    'Sức khỏe / Dược phẩm',
    'Gia dụng / Nội thất',
    'Du lịch / Dịch vụ',
    'Giáo dục',
    'Khác',
  ],
  budgets: [
    'Dưới 50 Triệu VND',
    '50 – 200 Triệu VND',
    '200 – 500 Triệu VND',
    '500 Triệu – 1 Tỷ VND',
    'Trên 1 Tỷ VND',
    'Chưa xác định',
  ],
}
