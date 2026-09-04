import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

// Loaded from <head> rather than via `@import` in styles.css: Tailwind inlines
// ~900 lines at its own @import site, so a font @import in the CSS can end up
// after other statements and be silently dropped by the browser — which is what
// made Vietnamese diacritics fall back to a serif face in production builds.
const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap'

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
        title: 'KOC Việt — Trusted Creator Platform',
      },
      {
        name: 'description',
        content:
          'Nền tảng Doanh nghiệp booking trực tiếp KOC, minh bạch, thu nhập bền vững.',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: FONT_HREF },
    ],
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
        {children}
        <Scripts />
      </body>
    </html>
  )
}
