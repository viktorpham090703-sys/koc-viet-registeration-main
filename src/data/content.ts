// Single source of truth for all landing-page copy.
// Content is transcribed verbatim from "KOC-VIET-Gioi-thieu-KOC.pptx.pdf" (11 pages).
// Do not paraphrase, correct, or reword any string in this file.

export const brand = {
  name: 'KOC Việt',
  descriptor: 'KOC Việt, Trusted Creator Platform',
  tagline: 'Trusted Creator Platform',
  positioning:
    'Nền tảng Doanh nghiệp booking trực tiếp KOC, minh bạch, thu nhập bền vững',
}

export const nav = [
  { label: 'KOC Việt', href: '#hero' },
  { label: 'Vì sao chọn KOC Việt', href: '#why-join' },
  { label: 'Kiếm tiền', href: '#money-making' },
  { label: 'AI Clone', href: '#ai-clone' },
  { label: 'Phân hạng KOC', href: '#ranking' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Bảo vệ', href: '#protection' },
]

// SECTION 01 — HERO (page 1)
// Ngoại lệ có chủ đích với quy tắc "verbatim theo PDF" ở đầu file: phần chào
// của hero được viết lại cho web (nói thẳng quyền lợi thay vì chỉ nêu định vị).
// Mọi section còn lại vẫn giữ nguyên chữ của PDF.
export const hero = {
  eyebrow: 'DÀNH RIÊNG CHO CREATOR & KOC',
  // Tiêu đề tách mảnh để tô màu đúng phần thương hiệu ở dòng đầu; hai dòng
  // sau là chỗ ngắt dòng do người viết chỉ định, không để trình duyệt tự ngắt.
  headingLead: 'GIA NHẬP',
  headingBrand: 'KOC VIỆT',
  headingLines: ['BOOKING TRỰC TIẾP,', 'THU NHẬP TƯƠNG XỨNG'],
  heading: 'GIA NHẬP KOC VIỆT BOOKING TRỰC TIẾP, THU NHẬP TƯƠNG XỨNG',
  description:
    'Nền tảng kết nối trực tiếp KOC với hàng ngàn nhãn hàng. Tự do thiết lập báo giá, nhận thanh toán an toàn qua Escrow, không qua trung gian.',
  tagline: 'Trusted Creator Platform',
  brand: 'KOC Việt, Trusted Creator Platform',
  // `cta` là nhãn nút gọn dùng ở thanh header; hero dùng bản dài bên dưới.
  cta: 'ĐĂNG KÝ NGAY',
  ctaPrimary: 'ĐĂNG KÝ NHẬN JOB NGAY',
  ctaNote:
    'Miễn phí đăng ký • Nhận ưu đãi Onboarding miễn phí phí nền tảng đến 24 tháng',
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
    // \u00A0 giữ "phụ thuộc" liền khối nên dòng luôn ngắt sau dấu phẩy,
    // không để rơi mỗi chữ "phụ" xuống cuối dòng trên. Chữ giữ nguyên.
    'Thu nhập bị chia qua nhiều tầng trung gian, phụ\u00A0thuộc agency?',
    'Không sở hữu dữ liệu khách hàng của chính mình?',
    'Lo bị chậm hoặc "quỵt" thù lao khi nhận booking?',
    'Mất quá nhiều thời gian sản xuất nội dung?',
  ],
  closing: 'KOC Việt sinh ra để giải quyết tất cả.',
  // Mũi tên vẽ bằng icon nên nhãn giữ nguyên chữ, trình đọc màn hình không
  // phải đọc ký tự \u2192.
  closingCta: { label: 'Khám phá giải pháp ngay', href: '#why-join' },
  image: '/images/pain-points.jpg',
}

// SECTION 03 — WHY JOIN KOC VIỆT (page 3)
// Vài ô có \n: chỗ ngắt dòng do người viết chỉ định, bảng render chúng bằng
// `whitespace-pre-line` từ breakpoint sm trở lên. Chữ không đổi, chỉ thêm chỗ
// xuống dòng; bản thẻ trên mobile bỏ qua \n vì cột ở đó quá hẹp.
export const whyJoin = {
  heading: 'VÌ SAO NÊN GIA NHẬP KOC VIỆT?',
  columns: ['Giá trị', 'Ý nghĩa với bạn'],
  rows: [
    [
      'Booking trực tiếp như Grap',
      'Làm việc thẳng với doanh nghiệp,\nthu nhập tương xứng,\nkhông qua trung gian',
    ],
    [
      'Sở hữu dữ liệu\nkhách hàng',
      'Data, network doanh nghiệp là của bạn,\ntài sản lâu dài, không lệ thuộc nền tảng, agency',
    ],
    [
      'Thanh toán an toàn (escrow)',
      'Tiền được doanh nghiệp ký quỹ trước, xong việc là giải ngân ngay, không lo bị quỵt',
    ],
    [
      'Minh bạch doanh số',
      'Theo dõi click, đơn, doanh số,\nhoa hồng theo thời gian thực',
    ],
    [
      'AI Clone Avatar',
      'Thu nhập thụ động không giới hạn,\nAI tạo video thay bạn, bạn chỉ duyệt & đăng',
    ],
    [
      'Chính danh quốc gia',
      'Hồ sơ định danh qua Cổng kol.gov.vn,\ntăng uy tín, dễ nhận booking',
    ],
    [
      'Được đào tạo &\ncấp chứng nhận',
      'Nâng kỹ năng livestream, bán hàng;\nhoạt động hợp pháp, chuyên nghiệp',
    ],
    [
      'Bảo vệ hình ảnh & quyền lợi',
      'Quyền duyệt nội dung, quyền gỡ bỏ;\nhình ảnh được bảo vệ',
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
      text: 'đăng nội dung quảng cáo theo brief,\nnhận phí cố định.',
    },
    {
      title: 'Booking Affiliate',
      text: 'gắn link/mã cá nhân, nhận hoa hồng theo doanh số.',
    },
    {
      title: 'AI Clone Avatar (thu nhập thụ động)',
      text: 'AI tái tạo hình ảnh/giọng nói của bạn (khi bạn cấp phép) để tạo video; bạn là người duyệt & đăng,\nkiếm tiền ngay cả khi nghỉ ngơi.',
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
  // "Điểm nổi bật" đã nằm ở eyebrow phía trên nên bỏ khỏi tiêu đề, tránh lặp.
  heading: 'AI\u00A0CLONE\u00A0AVATAR - THU NHẬP THỤ ĐỘNG',
  // Câu phụ tách làm hai vế theo dấu phẩy. Mỗi vế được render trong một span
  // không cho ngắt dòng, nên từ màn hình vừa trở lên dòng luôn xuống đúng ở
  // dấu phẩy, không bao giờ cắt ngang giữa cụm.
  subheadingParts: [
    'Công nghệ AI tái tạo hình ảnh & giọng nói giống bạn tới 99%,',
    'giúp bạn nhận nhiều chiến dịch cùng lúc mà không mất thời gian quay dựng',
  ],
  // Bốn ý của PDF được viết lại thành cặp tiêu đề + diễn giải cho web.
  items: [
    {
      title: 'Không Tốn Công Quay Dựng',
      body: 'AI tự động tạo video review & affiliate chuẩn xác giống bạn tới 99%, tối ưu 100% thời gian sản xuất nội dung',
    },
    {
      title: 'Giữ Toàn Quyền Duyệt & Gỡ Bỏ',
      body: 'Nội dung chỉ được xuất bản khi bạn bấm \u201CApproved\u201D.\nCam kết bảo vệ quyền sở hữu hình ảnh cá nhân tuyệt đối',
    },
    {
      title: 'Nhân Bản Doanh Thu Thụ Động',
      body: 'Nhận hợp đồng từ nhiều nhãn hàng cùng lúc. Kiếm tiền đều đặn từ lượt click và hoa hồng affiliate ngay cả khi đang nghỉ ngơi',
    },
    {
      title: 'Không Ảnh Hưởng Kênh Cá Nhân',
      body: 'Duy trì nhịp sống và công việc sáng tạo riêng, mở rộng thêm một dòng tiền bền vững mà không bị kiệt sức',
    },
  ],
  image: '/images/ai-clone.jpg',
}

// SECTION 07 — KOC RANKING (page 7)
export const ranking = {
  heading: 'PHÂN HẠNG KOC & QUYỀN LỢI',
  columns: ['Hạng', 'Quy mô follower', 'Quyền lợi tiêu biểu'],
  rows: [
    [
      'Nano',
      'Từ 1000 - 10.000',
      'Nhận booking phù hợp,\ntích lũy uy tín, đào tạo cơ bản',
    ],
    [
      'Micro',
      '10.000 – 50.000',
      'Ưu tiên booking ngành hàng, mở khóa affiliate nâng cao, hỗ trợ AI Clone',
    ],
    [
      'Mid',
      '50.000 – 200.000',
      'Booking giá trị cao, ưu tiên điều phối,\nhỗ trợ AI Clone',
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
    'Hạng được nâng theo hiệu quả hoạt động và độ uy tín, càng hoạt động tốt, quyền lợi càng lớn.',
  image: '/images/ranking.jpg',
}

// SECTION 08 — ONBOARD PROCESS (page 8)
export const process = {
  heading: 'QUY TRÌNH THAM GIA (ONBOARD)',
  steps: [
    'Xem hướng dẫn cài app(không tốn dung lượng điện thoại) /\nđăng ký tài khoản KOC.',
    'Định danh (eKYC), để chính danh.',
    'Hoàn thiện hồ sơ năng lực (ngành hàng, kênh, ảnh bìa, số tài khoản nhận thanh toán).',
    'Nhận booking / gắn affiliate / kích hoạt AI Clone Avatar(tuỳ chọn).',
    'Đăng tải nội dung → nhận thanh toán minh bạch qua Ví nội bộ,\nrút về ngân hàng.',
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
  // Nhãn huy hiệu trên đầu hai thẻ so sánh (không có trong bản PDF gốc).
  badges: { old: 'Hạn chế', new: 'Giải pháp toàn diện' },
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
  body: 'Tham gia KOC Việt hôm nay, miễn phí đăng ký, ưu đãi onboarding có hạn.',
  contact: 'Tải app / đăng ký: [•] · Hotline: [•] · Zalo/Fanpage: [•]',
  brandStatement: 'KOC Việt, Trusted Creator Platform.',
  slogan: 'Thu nhập tương xứng. Minh bạch. Bền vững.',
  brandRepeat: 'KOC Việt, Trusted Creator Platform',
  image: '/images/final-cta.jpg',
}

export const logo = {
  src: '/images/koc-viet-logo.png',
  // Bản chữ trắng, dùng trên nền tối (footer). Sinh ra từ file gốc:
  // chữ đen -> trắng, giữ nguyên dấu play cam.
  srcLight: '/images/koc-viet-logo-light.png',
  alt: 'KOC Việt, Trusted Creator Platform',
  width: 712,
  height: 166,
}

// FOOTER
// Nội dung lấy theo bản thiết kế tham chiếu do khách hàng cung cấp.
export const footer = {
  description:
    'Nền tảng booking KOC/KOL trực tiếp, minh bạch, hiệu quả dành riêng cho Doanh nghiệp Việt. Kết nối hàng trăm nghìn nhà sáng tạo nội dung đã định danh cấp quốc gia.',

  details: [
    { label: 'Slogan', value: 'KOC Việt, Kết nối trực tiếp. Minh bạch. Hiệu quả.' },
    { label: 'Đơn vị phát triển', value: 'NetViet TV (Tập đoàn Truyền thông NetViet)' },
    {
      label: 'Trụ sở',
      value: 'Tầng 2, Tòa Nhà Chelsea Park, 116 Trung Kính, P. Yên Hòa, Hà Nội',
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
    note: '(Hải Đức, Phòng Kinh doanh)',
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
      note: '(Hải Đức, Phòng Kinh doanh)',
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
      label: 'Cổng đăng ký KOC trực tuyến',
      value: 'https://kocviet.com/koc',
      href: 'https://kocviet.com/koc',
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

  // Form onboard KOC/KOL — đặc tả trường (tên, loại, bắt buộc, option) lấy từ
  // brief "FORM ONBOARD — KOC/KOL". Đổi trường ở đây thì phải sửa cả
  // public/__forms.html cho khớp, nếu không Netlify sẽ bỏ dữ liệu của trường mới.
  form: {
    title: 'Đăng Ký Tham Gia KOC Việt',
    subtitle:
      'Điền thông tin để KOC Việt xét duyệt hồ sơ và liên hệ hỗ trợ onboarding.',
    fullName: { label: 'Họ và tên', placeholder: 'VD: Nguyễn Thị A' },
    phone: { label: 'Số điện thoại (Zalo)', placeholder: 'VD: 09xx xxx xxx' },
    email: { label: 'Email', placeholder: 'VD: ban@email.com' },
    channelUrl: {
      label: 'Link kênh/trang cá nhân chính',
      placeholder: 'VD: link TikTok/Facebook',
    },
    followers: { label: 'Số lượng người theo dõi' },
    region: { label: 'Khu vực' },
    platforms: { label: 'Nền tảng hoạt động chính', hint: 'Chọn nhiều nền tảng' },
    topics: { label: 'Lĩnh vực nội dung sở trường', hint: 'Chọn nhiều lĩnh vực' },
    platformOther: { label: 'Khác', placeholder: 'Nhập nền tảng khác' },
    source: { label: 'Biết đến KOC Việt qua đâu?' },
    message: { label: 'Tin nhắn', placeholder: 'Nhập nội dung tin nhắn' },
    agreeTerms: 'Tôi đồng ý điều khoản & chính sách đổi review',
    agreeContact: 'Tôi đồng ý được liên hệ tư vấn qua Zalo/điện thoại',
    selectPlaceholder: '- Chọn -',
    submit: 'Gửi Đăng Ký & Nhận Job',
    privacy: 'Thông tin được bảo mật 100% theo Nghị định 13/2023/NĐ-CP',
    sending: 'Đang gửi...',
    successTitle: 'Đăng ký thành công!',
    successHome: 'Về Trang Chủ',
    successBack: 'Quay Lại Form Đăng Ký',
    successText:
      'Thông tin của bạn đã được gửi tới KOC Việt. Chúng tôi sẽ liên hệ với bạn sớm.',
    errorText: 'Đã xảy ra lỗi. Vui lòng thử lại hoặc liên hệ KOC Việt qua Zalo/điện thoại.',
    // Thông báo cho từng lỗi nhập liệu, hiện ở đúng chỗ dòng lỗi chung nên
    // không phát sinh thành phần giao diện mới.
    errors: {
      phone: 'Số điện thoại chưa đúng định dạng. Vui lòng nhập 9 - 11 chữ số.',
      channelUrl: 'Link kênh chưa hợp lệ. Ví dụ: tiktok.com/@tenkenh',
      email: 'Email chưa đúng định dạng.',
      consent: 'Vui lòng tích chọn cả hai ô đồng ý trước khi gửi.',
    },
  },

  followerRanges: [
    'Dưới 10.000 (Nano)',
    '10.000 – 50.000 (Micro)',
    '50.000 – 200.000 (Mid)',
    '200.000 – 1.000.000 (Macro)',
    'Trên 1.000.000 (Mega)',
  ],
  regions: ['TP.HCM', 'Hà Nội', 'Tỉnh/thành khác'],
  platforms: ['TikTok', 'Facebook', 'YouTube', 'Instagram', 'Livestream', 'Khác'],
  topics: [
    'Làm đẹp',
    'Ẩm thực',
    'Mẹ & bé',
    'Công nghệ',
    'Thời trang',
    'Du lịch',
    'Đời sống',
    'Khác',
  ],
  sources: [
    'Mạng xã hội',
    'Webinar',
    'Hội nghị/sự kiện',
    'Bạn bè/KOC giới thiệu',
    'Khác',
  ],
}

// NÚT LIÊN HỆ NỔI (góc dưới bên phải, cố định khi cuộn)
// Không lặp lại số/link: lấy thẳng từ cấu hình đã có để không bị lệch nhau.
export const floatingContact = {
  zalo: {
    label: 'Nhắn Zalo OA NetvietTV',
    href: contactSection.zalo.href,
    logo: contactSection.zalo.logo,
  },
  phone: { label: `Gọi hotline ${footer.hotline.value}`, href: footer.hotline.href },
  // Nút dẫn xuống form đăng ký ở cuối trang (section id="final-cta").
  register: { label: 'Đăng Ký Tư Vấn', href: '#final-cta' },
}
