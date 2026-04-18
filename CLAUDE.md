# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Development Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run lint    # ESLint (flat config, eslint v9)
```

No test runner is configured yet.

---

## Codebase Architecture

**Stack:** Next.js 16.2.4 · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 · ESLint 9

> **IMPORTANT — Next.js 16 has breaking changes.** Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`. APIs, file conventions, and data-fetching patterns may differ from your training data. Heed all deprecation notices.

### App Router layout

```
app/
  layout.tsx                    # root layout — fonts, metadata, Header/Footer wrappers
  page.tsx                      # home (/)
  globals.css                   # @import "tailwindcss" + @theme tokens
  about/page.tsx
  pricing/page.tsx
  contact/page.tsx
  services/page.tsx             # services overview
  services/web-development/
  services/digital-marketing/
  services/graphic-design/
  services/video-editing/
  portfolio/page.tsx            # filterable grid
  portfolio/[slug]/page.tsx     # case study
components/
  layout/Header.tsx             # fixed nav, mobile hamburger ("use client")
  layout/Footer.tsx
  ui/Button.tsx                 # primary/secondary variants, sm/md/lg sizes, href→Link
  ui/SectionLabel.tsx           # eyebrow label (orange, uppercase, tracked)
public/
  logo12.png                    # Devzoo logo
```

### Tailwind v4 configuration

Tailwind v4 has **no `tailwind.config.js`**. All customization lives in `app/globals.css` inside the `@theme` block. Available tokens usable directly as Tailwind classes:

| Token class | Value |
|---|---|
| `bg-brand` / `text-brand` | `#E8470A` |
| `bg-brand-hover` | `#FF6B2B` |
| `bg-surface-dark` | `#1A1C22` |
| `bg-surface-dark-2` | `#252830` |
| `bg-surface-dark-3` | `#2F3340` |
| `bg-surface-light` | `#FFFFFF` |
| `bg-surface-warm` | `#F5F4F0` |
| `text-text-muted` | `#8A8F9E` |
| `font-heading` | Syne |
| `font-body` | DM Sans |
| `font-mono` | JetBrains Mono |
| `rounded-chip` | 8px |
| `rounded-btn` | 10px |
| `rounded-card` | 16px |
| `rounded-section` | 24px |

PostCSS plugin: `@tailwindcss/postcss`.

### TypeScript paths

`@/*` resolves to the repo root (`./`). Use `@/components/...`, `@/app/...`, etc.

---

## Project Overview — Devzoo Agency

**Devzoo** is a modern digital agency building its own website and brand system.

- **Domain:** www.thedevzoo.com
- **Founder:** Ehtasham ul Haq (CEO)
- **Co-Founder & CTO:** Muhammad Umar Malik (COO)
- **Co-Founder:** Awais Hassan (COO)
- **Primary email:** info@thedevzoo.com
- **Stage:** Pre-launch / brand and website build phase

**Services sold:** Website Development · Digital Marketing (SEO, PPC, social, content) · Graphic Design · Video Editing

**Target clients:** Startups, creators, and small businesses — primarily in Pakistan, USA, UK, and UAE.

**Positioning statement:**
> "Devzoo delivers clean, fast, and reliable digital solutions for startups, creators, and small businesses — with zero jargon and zero shortcuts."

---

## Brand System (Non-Negotiable)

### Colors

| Token               | Hex       | Use                          |
| ------------------- | --------- | ---------------------------- |
| Brand Primary       | `#E8470A` | CTAs, accents, active states |
| Brand Primary Hover | `#FF6B2B` | Hover only                   |
| Surface Dark        | `#1A1C22` | Primary dark background      |
| Surface Dark 2      | `#252830` | Cards on dark                |
| Surface Dark 3      | `#2F3340` | Elevated surfaces            |
| Surface Light       | `#FFFFFF` | Primary light background     |
| Surface Warm        | `#F5F4F0` | Alternate light sections     |
| Text Muted          | `#8A8F9E` | Secondary text               |

**Rules:**
- Orange is for action and emphasis only — never body text, never large surfaces.
- One orange element per viewport fold (logo excluded).
- Sections alternate dark ↔ light for rhythm.

### Typography

- **Headings:** Syne — `font-heading font-bold/extrabold`
- **Body / UI:** DM Sans — `font-body`
- **Code / data:** JetBrains Mono — `font-mono` (sparingly)

Scale (desktop → mobile):
- H1: 64px → 40px, Syne 800, line-height 1.05
- H2: 44px → 30px, Syne 700, line-height 1.15
- H3: 28px → 22px, Syne 700
- Body: 16px → 15px, DM Sans 400, line-height 1.7
- Eyebrow label: 12px uppercase, 0.12em tracking — use `<SectionLabel>`

### Spacing (8px base)

Scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
Section vertical padding: 96px desktop / 64px mobile (`py-24 md:py-32`).

### Interaction

- All transitions: 200ms ease (`transition-all duration-200`)
- Orange borders/accents appear on hover, not rest
- One animated element per viewport fold, max

---

## Brand Voice

**Tone:** Confident, plain-spoken, client-first, warm but not corporate.

**Always:**
- Plain English. Say "fast website," not "optimized latency."
- "You" comes before "we" in headlines.
- Story-driven where possible (the Kate shoe analogy is a signature hook).

**Never:**
- No "we try to," "we strive to." Only "we deliver."
- No jargon: "synergy," "ecosystem," "cutting-edge," "solutions" (overused).
- No emojis in formal copy.
- No fake stats.
- No stock phrases: "digital transformation," "unlock potential," "next-level."

---

## File Output Conventions

- HTML: semantic tags, no div soup
- React: functional components, Tailwind classes using brand tokens from `globals.css`
- Breakpoints: 480 / 768 / 1024 / 1280px

---

## Website Structure (Source of Truth)

1. **Home** — Hero → trust bar → services → process → stats → testimonials → CTA
2. **About** — Hero → Kate story → mission/vision/values → team → why Devzoo → CTA
3. **Services** — overview + sub-pages: Web Dev, Marketing, Design, Video
4. **Portfolio** — filterable grid + case study pages
5. **Pricing** — Starter $300+, Growth $800+, Enterprise custom + FAQ
6. **Contact** — form + Calendly embed

---

## Existing Assets

Do not rewrite or contradict these without being asked:
- `devzoo_strategy.html` — full agency strategy
- `Devzoo_Website_Content.docx` — finalized website copy
- `Devzoo_Logo.pdf` — logo files
- `Devzoo_Rules_Regulations_SOPs.pdf` — internal SOPs

---

## Do Not

- Design with gradients unless explicitly requested
- Use more than 2 fonts on any surface
- Invent client names, testimonials, or stats
- Expand scope without asking — small ask = deliver exactly that

---

_Last updated: April 2026._
