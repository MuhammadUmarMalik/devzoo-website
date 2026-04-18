# CLAUDE.md — Devzoo Agency Project

This file gives Claude (or any AI assistant) the context needed to work on the Devzoo project consistently. Read this first before making decisions or writing code.

---

## 1. Project Overview

**Devzoo** is a modern digital agency building its own website, brand system, and operational assets.

- **Domain:** www.thedevzoo.com
- **Founder:** Ehtasham ul Haq (CEO)
- **Co-Founder & CTO:** Muhammad Umar Malik (COO)
- **Co-Founder:** Awais Hassan (COO)
- **Primary email:** info@thedevzoo.com
- **Stage:** Pre-launch / brand and website build phase

**What Devzoo sells:**

1. Website Development
2. Digital Marketing (SEO, PPC, social media, content)
3. Graphic Design (logos, brand identity, social graphics)
4. Video Editing (reels, ads, YouTube, explainers)

**Target clients:** Startups, creators, and small businesses — primarily in Pakistan, USA, UK, and UAE.

**Positioning statement:**

> "Devzoo delivers clean, fast, and reliable digital solutions for startups, creators, and small businesses — with zero jargon and zero shortcuts."

---

## 2. Brand System (Non-Negotiable)

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

- **Headings:** Syne (600, 700, 800)
- **Body / UI:** DM Sans (300, 400, 500, 600)
- **Code / data:** JetBrains Mono (sparingly, for technical credibility)

Scale (desktop → mobile):

- H1: 64px → 40px, Syne 800, line-height 1.05
- H2: 44px → 30px, Syne 700, line-height 1.15
- H3: 28px → 22px, Syne 700
- Body: 16px → 15px, DM Sans 400, line-height 1.7
- Eyebrow label: 12px uppercase, 0.12em tracking, Syne/DM Sans 600

### Logo

- Orange fox head inside a "D" mark
- Must always appear in a readable size with clear space around it
- Dark variant (white/orange on dark) and light variant (dark/orange on light) both exist
- Icon-only version used for favicons and small profile images

### Spacing (8px base)

Scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
Section vertical padding: 96px desktop / 64px mobile.

### Radius

- Chips/tags: 8px
- Buttons/inputs: 10px
- Cards: 16px
- Feature sections: 24px

### Interaction

- All transitions: 200ms ease
- Orange borders/accents appear on hover, not rest
- One animated element per viewport fold, max

---

## 3. Brand Voice

**Tone:** Confident, plain-spoken, client-first, warm but not corporate.

**Rules — always:**

- Plain English. Say "fast website," not "optimized latency."
- "You" comes before "we" in headlines.
- Story-driven where possible (the Kate shoe analogy is a signature hook).
- Use the fox personality subtly: clever, agile, sharp, reliable.

**Rules — never:**

- No "we try to," "we strive to," or other hedge words. Only "we deliver."
- No corporate jargon: "synergy," "ecosystem," "cutting-edge," "solutions" (overused).
- No emojis in formal copy. Allowed sparingly in social posts (1–2 max).
- No fake stats. Never inflate numbers.

---

## 4. Tech Stack & Tools

### Website (current plan)

- **Primary CMS:** WordPress with Elementor or Bricks Builder
- **Alternative:** Webflow for design-heavy pages
- **Custom builds:** React / Next.js for app-style products
- **Hosting:** TBD (recommend Cloudways, SiteGround, or Vercel depending on stack)
- **Forms:** Built-in CMS or Formspree
- **Booking:** Calendly embed
- **Analytics:** Google Analytics 4 + Meta Pixel

### Design & content

- **UI design:** Figma
- **Graphics:** Adobe Illustrator, Canva Pro
- **Video:** Adobe Premiere, CapCut

### Operations

- **CRM:** HubSpot Free tier
- **Project management:** ClickUp or Notion
- **Contracts:** PandaDoc or HelloSign
- **Payments:** Payoneer, Wise (international), local bank transfer
- **Client comms:** WhatsApp Business + email

---

## 5. Working With This Project — Rules for AI Assistants

### 5.1 Always reference the design system

Before writing any HTML, CSS, React, or design mockup, check section 2 of this file. Colors must use the token hex codes exactly. Typography must use Syne + DM Sans. Never invent new brand colors or fonts.

### 5.2 Stay in brand voice

Every piece of written output — web copy, social posts, emails, proposals — must match section 3. If a user asks for copy that breaks the voice rules (e.g. jargon-heavy enterprise language), flag it and propose a brand-consistent alternative.

### 5.3 Respect existing assets

The project already contains:

- `devzoo_strategy.html` — full agency strategy
- `Devzoo_Website_Content.docx` — finalized website copy
- `Digital_Magic_Web_Wonders_Design_Dreams.pdf` — original content library (older, secondary reference)
- `Devzoo_Logo.pdf` — logo files
- `Devzoo_Rules_Regulations_SOPs.pdf` — internal SOPs

Do not rewrite or contradict these unless explicitly asked. If updating, keep the changes minimal and flag what changed.

### 5.4 Scope discipline

When given a small ask, deliver exactly what was asked. Do not expand scope unprompted. Example: "rewrite this prompt" means rewrite the prompt, not redesign the project. Ask before going bigger.

### 5.5 Practical over theoretical

This is a real agency launching with real deadlines. Avoid generic advice. Every recommendation should be actionable, specific, and shippable within 1–2 weeks.

### 5.6 File output conventions

- Markdown docs: sentence-case headings, no over-formatting
- HTML: semantic tags, no div soup, CSS custom properties for all colors
- React: functional components, Tailwind if a design system is defined in the task
- Always include mobile responsive considerations (breakpoints at 480/768/1024/1280)

### 5.7 When in doubt, ask

Before making non-obvious product decisions (pricing, new service lines, hiring), ask the founders rather than guessing. Brand and design decisions can follow this doc; business decisions need human sign-off.

---

## 6. Website Structure (Source of Truth)

Six core pages, each with a specific job:

1. **Home** — conversion-first. Hero → trust bar → services → process → stats → testimonials → CTA
2. **About** — trust-building. Hero → Kate story → mission/vision/values → team → why Devzoo → CTA
3. **Services** — one overview + four sub-pages (Web Dev, Marketing, Design, Video)
4. **Portfolio** — filterable grid + individual case study pages
5. **Pricing** — three tiers (Starter $300+, Growth $800+, Enterprise custom) + referral program + FAQ
6. **Contact** — form + direct info + Calendly embed

Full section-by-section wireframes live in the strategy discussion and the website content doc.

---

## 7. Growth & Business Context

**Revenue targets (first year):**

- Q1 (Months 1–3): $1,000–$2,000/month
- Q2 (Months 4–6): $3,000–$5,000/month
- Q3 (Months 7–9): $6,000–$10,000/month
- Q4 (Months 10–12): $10,000–$20,000/month

**Lead sources (in priority order):**

1. Upwork agency profile
2. Cold outreach (LinkedIn + email)
3. Referrals (10% commission program)
4. Content marketing (LinkedIn primary, Instagram secondary)

**Client workflow:**
Lead → Discovery call → Research & proposal → Contract + 50% deposit → Mockup phase → Build (weekly updates) → Delivery (50% final) → Follow-up survey + upsell

---

## 8. Common Tasks & Expected Approach

| Task                         | Approach                                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| "Write a social post"        | Match voice rules (§3), keep under 150 words, single CTA, relevant hashtags at end                 |
| "Build a page"               | Use design system tokens (§2), follow wireframe structure (§6), responsive by default              |
| "Create a proposal"          | Use Devzoo-branded template, include: problem → approach → deliverables → timeline → price → terms |
| "Review copy"                | Check against voice rules, flag jargon, suggest concrete rewrites                                  |
| "Design a graphic"           | Orange + dark palette, Syne headlines, leave generous whitespace, fox motif optional but welcome   |
| "Write an email to a client" | Warm opener, clear status update, specific next step, no corporate filler                          |

---

## 9. Do Not

- Do not use stock agency phrases like "digital transformation," "unlock potential," "next-level"
- Do not design with gradients unless explicitly requested (flat + single accent color is the look)
- Do not use more than 2 fonts on any surface
- Do not invent client names, testimonials, or stats
- Do not suggest hiring, pricing, or partnership decisions without founder input
- Do not reproduce copyrighted content (logos, imagery, other agencies' copy)

---

## 10. Quick Reference

- **Domain:** thedevzoo.com
- **Email:** info@thedevzoo.com (primary) · hello@thedevzoo.com (marketing)
- **Brand colors:** #E8470A orange · #1A1C22 dark · #FFFFFF white
- **Fonts:** Syne (heads) · DM Sans (body)
- **Tagline:** "Digital Magic. Web Wonders. Design Dreams."
- **Short positioning:** Clean, fast, reliable digital work. No jargon, no shortcuts.

---

_Last updated: April 2026. Update this file whenever brand, tech stack, or process decisions change._

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
