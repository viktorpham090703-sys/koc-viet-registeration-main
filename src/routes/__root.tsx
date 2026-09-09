import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

// Loaded from <head> rather than via `@import` in styles.css: Tailwind inlines
// ~900 lines at its own @import site, so a font @import in the CSS can end up
// after other statements and be silently dropped by the browser — which is what
// made Vietnamese diacritics fall back to a serif face in production builds.
const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap'

const META_PIXEL_ID = '2102457530387519'

const META_PIXEL_SCRIPT = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'KOC Việt - Trusted Creator Platform',
      },
      {
        name: 'description',
        content:
          'Nền tảng Doanh nghiệp booking trực tiếp KOC, minh bạch, thu nhập bền vững.',
      },
    ],
    links: [
      // Khai báo hẳn thay vì để trình duyệt tự mò /favicon.ico, kèm ?v= để lần
      // đổi icon nào cũng vượt được cache favicon vốn rất lì của trình duyệt.
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: FONT_HREF },
    ],
    scripts: [{ children: META_PIXEL_SCRIPT }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Ảnh fallback của Meta Pixel: `head()` chỉ nhận meta/link/script nên
            thẻ <noscript> phải đặt thẳng trong body. */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
