# Product Requirements Document (PRD) — Product Designer Portfolio

**Purpose:** Single source of truth for product and technical decisions. Update this document as the site evolves so it always reflects what's live and what we've learnt.

---

## 1. Best-practice standards (what we aim for)

| Principle               | Why it matters                                                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| **Clear narrative**     | Each case study tells a story: context → problem → process → solution → impact/learnings.             |
| **Scannable structure** | Headings, short paragraphs, clear sections so readers can skim and dive where interested.            |
| **Outcome-focused**     | Lead with results (metrics, quotes, before/after) where possible; show impact, not only deliverables. |
| **3–5 strong projects** | Quality over quantity. Fewer, deeper case studies beat many thin ones.                                |
| **Fast and responsive**  | Performance and mobile experience affect perception of your craft.                                    |
| **Accessible**           | Semantic HTML, contrast, focus states, alt text.                                                      |
| **Simple navigation**   | Home, Work, Stack, About, Contact. No clutter.                                                       |
| **Personal voice**      | About and case study intros sound like you, not generic.                                              |

---

## 2. What's live on the portfolio

*This section reflects the current implementation. Edit it whenever you ship changes so the PRD stays accurate.*

### 2.1 Tech stack

- **Framework:** Astro 4 with React (islands for interactive components).
- **Styling:** Tailwind CSS; `@tailwindcss/typography` for prose.
- **Content:** Markdown in repo, no CMS. Astro Content Collections for case studies.
- **Component library:** shadcn/ui (New York style) in `src/components/ui/`; design-system React components in `src/components/ds/`; Astro components in `src/components/` for layout and pages.
- **Contact:** Formspree; endpoint via `PUBLIC_FORMSPREE_ENDPOINT`.
- **Hosting:** Static build (`dist/`); deploy to Vercel, Netlify, or similar.

### 2.2 Information architecture

- **Home** — Intro ("Design Leader. Hands-on Maker."), London-based, featured work cards, CTA.
- **Work** — Grid of case study cards (from Markdown).
- **Work / [slug]** — Single case study (e.g. Travel Corporation PO1, Design System, Sample App).
- **Stack** — Tools and apps (name, description, platforms); data in `src/data/stack.ts`; icons via domain favicon or full URL.
- **About** — Bio and positioning.
- **Contact** — Form (Formspree) and contact details.

### 2.3 Content model (case studies)

- **Location:** `src/content/case-studies/*.md`.
- **Frontmatter:** title, tagline, client, year, role, team, featuredImage, link, metaDescription (and any schema fields).
- **Body:** Markdown sections (Overview, Process, Solution, Outcomes, etc.). Images in `public/images/work/`; reference as `![Alt](/images/work/photo.jpg)`.
- **Routing:** Slug from filename → `/work/[slug]` (e.g. `travel-corporation-po1.md` → `/work/travel-corporation-po1`).

### 2.4 Theme and design tokens

- **Light/Dark:** Class-based (`dark` on `<html>`). Toggle in header (circle, top-left); preference stored in `localStorage`, re-applied on every navigation (including View Transitions) so theme persists across pages.
- **Colors (live):** Surface/background aligned with #F7F6F3 (light); accent/primary #53B880 (green). Dark mode uses CSS variables in `.dark` for contrast-compliant primary/accent and background/card/border.
- **Tokens:** `src/styles/global.css` — `:root` and `.dark` define `--background`, `--foreground`, `--primary`, `--accent`, `--card`, `--border`, `--ring`, etc. Tailwind theme in `tailwind.config.mjs` extends with these and `maxWidth.content`, `fontFamily.sans` (Inter).
- **Typography:** Inter (preload + `display=optional`), prose via `@tailwindcss/typography` with `dark:prose-invert`.

### 2.5 Layout and components (live)

- **Layout:** `src/layouts/Layout.astro` — meta, OG/Twitter, theme script in head, skip link, Header, main slot, Footer, View Transitions, scroll-animation init and `applyThemeFromStorage()` on `astro:page-load`.
- **Header:** `Header.astro` — border-bottom, theme toggle, "Portfolio" link, nav (Work, Stack, About, Contact), mobile hamburger + overlay menu. Uses theme tokens (`bg-card`, `border-border` in dark).
- **Footer:** `Footer.astro` — border-top, copyright "© 2026 Ed Lake", Contact + LinkedIn (edlakedesign@gmail.com, linkedin.com/in/edwardcellanlake). Uses theme tokens in dark.
- **Page components:** `Section.astro`, `Button.astro`, `Card.astro`, `ContactForm.astro`, `ImageCaption.astro`. These are what the live site uses; design-system React components in `ds/` are for Storybook and future reuse.

### 2.6 UX and performance (live)

- **View Transitions:** Astro View Transitions for client-side navigation; theme is re-applied on `astro:page-load` so dark mode doesn't reset.
- **Animations:** Scroll-triggered fade-in only (no translateY); run after `document.fonts.ready` to avoid layout shift; headings on own layer; `data-animate` / `data-animate-stagger` in `global.css`.
- **Focus:** Visible focus ring only for `:focus-visible`; tap highlight off; scrollbar-gutter for stable layout.

### 2.7 Design system and Storybook

- **Storybook 8** (React + Vite): run `npm run storybook` from project root (script in `package.json`); open http://localhost:6006.
- **Config:** `.storybook/main.cjs` (CommonJS to avoid ESM/require issues); `@` alias to `src`; dedicated Vite cache dir and `optimizeDeps` tweaks so preview renders components correctly. `.storybook/preview.ts` imports `global.css` and exposes `React` on `globalThis` for pre-bundled code.
- **Stories:** `src/components/ds/Button.stories.tsx`, `Card.stories.tsx`, `Foundation.stories.tsx`; components in `src/components/ds/Button.tsx`, `Card.tsx`. shadcn components in `src/components/ui/` (e.g. `button.tsx`); add more with `npx shadcn@latest add <name>`.
- **Workflow:** Add or edit React components in `ds/` or `ui/` → add or update `.stories.tsx` → use Storybook to design and document. To reflect changes on the live site, update the corresponding Astro components (e.g. `Button.astro`, `Card.astro`) or switch pages to use React components with `client:load` / `client:visible`.

### 2.8 Getting changes live (deploy)

- **Build:** `npm run build` (Astro) → output in `dist/`.
- **Deploy:** Point the host (Vercel, Netlify, etc.) at the repo; build command `npm run build`, publish directory `dist`. Pushes to the configured branch trigger rebuild and publish. No need to run Storybook on the server for the portfolio to go live.

---

## 3. Content: Markdown in repo (chosen approach)

- **Edit in:** VS Code, Cursor, or any editor. No CMS.
- **Workflow:** Add or edit `.md` in `src/content/case-studies/` → commit → site rebuilds on deploy.
- **Pros:** Version control, no API limits, works offline.

---

## 4. Inspiration and visual direction

- **Reference:** `portfolio-design-guidelines.md` — visual style, color palette, typography, layout, components, and case study structure from reference portfolios.
- **When you add new references:** Update that doc and, if needed, Tailwind theme and CSS variables in `global.css`.

---

## 5. File structure (current)

```
src/
  content/
    case-studies/     # *.md per case study
  pages/
    index.astro       # Home
    work/index.astro  # Work list
    work/[slug].astro # Case study
    stack.astro       # Stack / tools
    about.astro
    contact.astro
  data/
    stack.ts          # Stack page data (name, description, platforms, icon)
  layouts/
    Layout.astro
  components/
    Header.astro, Footer.astro, Section.astro, Button.astro, Card.astro,
    ContactForm.astro, ImageCaption.astro
    ds/               # React design-system components + *.stories.tsx
    ui/               # shadcn React components
  styles/
    global.css
  lib/
    utils.ts          # cn() for shadcn
public/
  images/work/        # case study images
.storybook/
  main.cjs
  preview.ts
```

---

## 6. Implementation phases (reference)

- **Phase 1 — Setup and content model:** Done (Astro, Tailwind, Content Collections, case study schema and template).
- **Phase 2 — Layout and design system:** Done (layout, header, footer, theme, components, shadcn, Storybook).
- **Phase 3 — Pages:** Done (Home, Work, case study template, About, Contact).
- **Phase 4 — Content and polish:** Ongoing (case studies, meta/OG, images, a11y).
- **Phase 5 — Launch:** Connect repo to host, configure build and env; optional domain and analytics.

---

## 7. Keeping this PRD up to date

- When you ship a change that affects structure, stack, theme, or workflows, update **Section 2 (What's live on the portfolio)** and any file-structure or phase notes above.
- Use this doc and `portfolio-design-guidelines.md` together: PRD = product and technical decisions; guidelines = visual and content direction.
