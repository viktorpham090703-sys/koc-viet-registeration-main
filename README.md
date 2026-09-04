# KOC Việt — Trusted Creator Platform

A responsive marketing landing page for **KOC Việt**, a platform for direct, transparent, and sustainable booking between businesses and KOC/KOL creators in Vietnam.

The page is a premium web rebuild of the official KOC Việt introduction deck ("KOC-VIET-Gioi-thieu-KOC.pptx.pdf") — every one of its 11 pages is represented as its own section, with all copy, tables, and figures preserved verbatim from the source material.

## Sections

Hero · Pain points · Why join KOC Việt (benefits table) · Ways to make money · AI Clone Avatar · Onboarding offer · KOC ranking · Onboarding process · Comparison vs. old booking methods · Protection commitments · Final CTA.

## Tech stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) — file-based routing, React 19
- [Vite 7](https://vite.dev/) — build tooling
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling, with brand colors and typography defined as CSS custom properties
- [lucide-react](https://lucide.dev/) — icons
- Montserrat (Google Fonts) — primary typeface across all UI text
- Deployed on [Netlify](https://www.netlify.com/)

## Running locally

```bash
npm install
npm run dev
```

The dev server runs on port 3000 by default (`npm run dev` runs `vite dev --port 3000`).

## Building for production

```bash
npm run build
```

Output is written to `dist/` per the TanStack Start / Netlify build configuration in `netlify.toml`.

## Editing content

All page copy, table data, and image references live in one file: `src/data/content.ts`. Each exported object corresponds to a single section/PDF page — update values there rather than editing JSX directly. See `AGENTS.md` for the full content model and section-to-file mapping.
