# AGENTS.md

This document orients AI agents and developers working on this codebase.

## Project Overview

A single-page marketing landing page for **KOC Việt — Trusted Creator Platform**, a creator-booking platform connecting businesses directly with KOC/KOL creators in Vietnam. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes + CSS custom properties as design tokens) |
| Icons | lucide-react |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   └── images/            # All imagery extracted from the source PDF + the official logo
├── src
│   ├── components/         # One component per landing-page section (see below)
│   ├── data
│   │   └── content.ts     # SINGLE SOURCE OF TRUTH for all page copy/tables/images
│   ├── routes
│   │   ├── __root.tsx      # Root HTML shell, global <head> metadata
│   │   └── index.tsx       # Assembles every section into the one-page layout
│   ├── router.tsx
│   └── styles.css          # Tailwind import, Montserrat font import, CSS design tokens
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Content Model — Important

This site was built by transcribing an 11-page source PDF ("KOC-VIET-Gioi-thieu-KOC.pptx.pdf") into a web experience under a strict content-preservation rule: **every string in `src/data/content.ts` is verbatim source content and must not be paraphrased, corrected, or reworded**, even where it looks unusual (e.g. "Grap" instead of "Grab" is intentional and must stay that way). If copy needs to change, it must be an explicit, deliberate content decision — not a "fix."

Each exported object in `content.ts` maps 1:1 to a PDF page / landing-page section:

| Export | Section / PDF page |
|---|---|
| `hero` | Page 1 — Hero |
| `painPoints` | Page 2 — Pain points |
| `whyJoin` | Page 3 — Benefits table |
| `moneyMaking` | Page 4 — Ways to make money |
| `aiClone` | Page 5 — AI Clone Avatar |
| `onboardingOffer` | Page 6 — Onboarding offer tiers |
| `ranking` | Page 7 — KOC ranking table |
| `process` | Page 8 — Onboarding steps |
| `comparison` | Page 9 — Old booking vs KOC Việt |
| `protection` | Page 10 — Protection commitments |
| `finalCta` | Page 11 — Final CTA / footer statement |

## Components

One React component per section in `src/components/`, each importing only its own slice of `content.ts`: `Header`, `Hero`, `PainPoints`, `BenefitsTable`, `MoneyMakingMethods`, `AICloneSection`, `OnboardingOffer`, `KocRanking`, `OnboardingProcess`, `ComparisonTable`, `ProtectionSection`, `FinalCTA`, `Footer`, plus shared `Logo` and `SectionHeading` helpers.

Tables (`BenefitsTable`, `KocRanking`, `ComparisonTable`) render as real `<table>` elements from `sm:` breakpoint up, and as stacked cards below it, so no table content is hidden or abbreviated on mobile.

## Design Tokens

Defined as CSS custom properties in `src/styles.css`:

- `--color-primary` — dark navy/near-black (backgrounds, dark sections)
- `--color-accent` — KOC Việt red-orange (CTAs, accent bars, highlighted terms)
- `--color-background` / `--color-surface` — white / light gray content surfaces
- `--color-text` / `--color-text-light` / `--color-muted`
- `--font-primary` — Montserrat, loaded via Google Fonts `@import` in `styles.css`

## Logo & Imagery

- `public/images/koc-viet-logo.png` is the **official** attached brand logo — used as-is in `Logo.tsx`. It is an image asset, not recreated with the web font; never re-typeset the logo wordmark in Montserrat.
- All other images in `public/images/` were extracted directly from the source PDF's embedded assets and re-compressed as JPEG for page performance. They are section-specific supporting imagery, not stock substitutes.

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

## Conventions

- Components: PascalCase, one per section, no cross-section state.
- Content lives in `src/data/content.ts` only — components should never hardcode copy.
- Colors always via the CSS variables above — never hardcode hex values in components.
- Routes: file-based via TanStack Router (`src/routes/`); this is currently a single route (`/`).
