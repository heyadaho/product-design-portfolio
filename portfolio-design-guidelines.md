# Portfolio visual style & design guidelines

*Based on reference screenshots from Homepage and Casestudy folders. Edit this document as the project progresses.*

---

## 1. Visual style summary

### 1.1 Overall direction (from references)

- **Aesthetic:** Clean, minimalist, professional. Content-first; avoid decorative clutter.
- **Whitespace:** Generous padding and margins; let content breathe. Used consistently across Anton Sten, Bethany Heck, Ed Chao, Morgan Bathe, Naomi Creates, Matt Fredette.
- **Contrast:** Strong hierarchy via size, weight, and color. Many references use high-contrast base (black/white or dark/light) with accent color for CTAs and highlights.
- **Readability:** Comfortable line height, clear type scale, scannable sections.

### 1.2 Color palette (guidelines to define)

| Use | Recurring pattern in references | Recommendation |
|-----|----------------------------------|----------------|
| **Background** | Off-white / cream (#F7F6F3, #F8F8F8, #F9F7EF), pure white, or black for dark sections | Pick one primary: light (warm off-white) or dark; optional alternating sections (e.g. Bethany Heck). |
| **Primary text** | Dark grey / charcoal (#2B2B2B, #333) or white on dark | Ensure WCAG contrast. |
| **Secondary text** | Lighter grey for captions, metadata, footer | One step down from primary. |
| **Accent** | Single strong accent (e.g. green #53B880, pink #FF4081, orange, brand green) for links, buttons, key sections | One primary accent; use sparingly for CTAs and highlights. |
| **Section contrast** | Some portfolios use full-width blocks (dark grey, accent color) to break sections (Anton Sten newsletter; Bethany Heck black sections) | Optional: alternate background for hero, CTA, or footer. |

*Action: Lock in hex values and document in Tailwind theme.*

### 1.3 Typography

- **Font family:** Sans-serif throughout (e.g. Inter, Lato, Montserrat, system UI). One family with weight scale is enough; optional second for headings.
- **Hierarchy:**
  - **Hero / page title:** Large, bold (e.g. 2.5rem–3rem).
  - **Section titles:** Bold, clear step down (e.g. 1.5rem–2rem).
  - **Subheadings:** Medium/semibold, smaller (e.g. 1.125rem–1.25rem).
  - **Body:** Regular, readable size (1rem), generous line-height (1.5–1.7).
  - **Captions / metadata:** Smaller, lighter weight or lighter color.
- **Consistency:** Same scale across site and case studies.

*Action: Choose 1–2 font families and define a type scale (e.g. in Tailwind).*

### 1.4 Layout & spacing

- **Content width:** Constrained (e.g. max-width 800–1000px for body text); full-bleed for hero images or key visuals.
- **Grid:** Underlying grid (e.g. 12-col) for alignment; two-column where needed (text + image, or metadata + description).
- **Sections:** Clear vertical rhythm; consistent section spacing (e.g. 4rem–6rem between major sections).
- **Alignment:** Consistent (e.g. left-aligned body; centered hero text where used).

### 1.5 Imagery & media

- **Quality:** High-resolution; no blurry or stretched assets.
- **Context:** Show work in context (device mockups for mobile/web) where it helps (Morgan Bathe, Naomi, Matt Fredette, Burger King).
- **Consistency:** Similar treatment for all project cards (e.g. same mockup style or aspect ratio).
- **Hero:** One strong hero per case study; can be multi-device or single key screen.
- **Captions:** Use when they add context (e.g. "Onboarding flow", "Design system components").

### 1.6 Components (from references)

- **Header:** Name/logo left; nav right (About, Work, Contact; optional Writing, Newsletter). Minimal.
- **Buttons / CTAs:** One primary style (e.g. filled accent, rounded corners); optional secondary (outline or text link with underline). Clear label (e.g. "View case study", "Get in touch").
- **Cards (project list):** Title, optional tagline/category, year/client, featured image; link to case study.
- **Footer:** Minimal (e.g. copyright, contact, social links). Optional: short line on privacy/cookies (Anton Sten).

### 1.7 Component library (shadcn/ui)

- **Library:** [shadcn/ui](https://ui.shadcn.com) (New York style) is integrated so you own and customize the component code.
- **Location:** React components live in `src/components/ui/` (e.g. `button.tsx`). Utilities: `src/lib/utils.ts` (`cn()`).
- **Theming:** Edit CSS variables in `src/styles/global.css` (`:root` and `.dark`) to change colors. `--primary` / `--accent` are aligned with the portfolio accent (#53B880); `--background` matches surface.
- **Usage in Astro:** Import React components and use with a client directive, e.g. `import { Button } from '@/components/ui/button'` then `<Button client:load />` (or `client:visible`) so they hydrate.
- **Adding components:** Run `npx shadcn@latest add <name>` (e.g. `card`, `input`, `dialog`). Config: `components.json`.

---

## 2. Homepage structure & content

### 2.1 Recommended sections (in order)

1. **Header**  
   Name/logo + nav (Work, About, Contact at minimum).

2. **Hero**  
   - Short value statement (e.g. "I work with teams who need clarity in product design" – Anton Sten).  
   - Optional tagline (e.g. "Thoughtful and visually stunning digital experiences" – Naomi).  
   - One clear CTA (e.g. "See how I work", "View projects").  
   - Optional: subtle background (gradient blob, pattern) without overpowering text.

3. **Featured work**  
   - 2–4 projects (or "latest 3").  
   - Per project: **title**, **one-line summary or category**, **featured image**, **link** to case study.  
   - Layout: grid or list; optional alternating text-left / text-right (Naomi).

4. **About (teaser)**  
   - Short intro and/or link to About page.  
   - Optional: testimonials or "What people say" (Anton Sten) with photo, quote, name, role.

5. **Optional: Thought leadership**  
   - Newsletter, book, or writing CTA in a distinct block (accent or dark background).

6. **Footer**  
   - Contact, social (LinkedIn, etc.), optional copyright/privacy note.

### 2.2 Homepage content checklist

- [ ] Clear value proposition in hero (who you are / what you do).
- [ ] 2–4 project cards with image, title, summary, link.
- [ ] Primary CTA above the fold (e.g. View work / View projects).
- [ ] Way to reach you (Contact link or visible email).
- [ ] Consistent with case study visual style (same fonts, colors, spacing).

---

## 3. Case study structure & content

### 3.1 Recommended sections (narrative order)

1. **Hero / project header**  
   - **Title** (project or product name).  
   - **Tagline** or one-line summary.  
   - **Metadata:** Role, timeline, team, client, platform, tools (e.g. in a grid or two-column).  
   - **Hero visual:** Key screen(s) or product in context (device mockups preferred).

2. **Overview / introduction**  
   - Brief context: client, product, goal.  
   - 1–2 short paragraphs.

3. **Problem / opportunity**  
   - What challenge or user need the project addressed.  
   - Optional: stats, quote, or research snippet.

4. **Approach / process**  
   - How you tackled it (e.g. research → ideation → design → test).  
   - Optional: process diagram or numbered steps (Morgan Bathe, DemocracyOS, Rightover).  
   - Show *how* you work, not only final UI.

5. **Discovery / research**  
   - Methods (e.g. interviews, surveys, audit).  
   - Key findings; optional: personas, journey snippets, insight cards (DemocracyOS, Rightover).

6. **Design**  
   - From early concepts to final UI: wireframes, key flows, high-fidelity screens.  
   - Optional: design system (colors, type, components) if relevant (Burger King, Morgan Bathe).

7. **Solution / outcome**  
   - What was shipped; main features or flows.  
   - **Impact:** metrics, quotes, or qualitative results (e.g. "faster to work with, easier to maintain" – Anton Sten/Loom).

8. **Learnings & next steps**  
   - Short reflection; what you'd do differently or what's next.

9. **CTA**  
   - "Let's work together" / Contact, or "Next project" link.

### 3.2 Case study content checklist

- [ ] Clear title and one-line summary.
- [ ] Role, timeline, (optional) client, platform, tools.
- [ ] Problem or opportunity stated early.
- [ ] Process visible (research, ideation, iteration).
- [ ] Both early work (wireframes/sketches) and final UI.
- [ ] Outcome/impact (metric or quote when possible).
- [ ] Consistent imagery (mockups, quality, captions).
- [ ] Scannable: headings, short paragraphs, clear sections.
- [ ] Contact or next-project CTA at end.

### 3.3 Mapping to Markdown (frontmatter + body)

- **Frontmatter:** title, tagline, client, year, role, team, featuredImage, link, metaDescription (and any platform/tools if you add them).
- **Body:** Use `##` for the sections above (Overview, Problem, Process, Discovery, Design, Solution, Outcomes, Learnings). Use normal paragraphs, lists, and images.  
- **Images:** Store in `public/images/work/`; reference in Markdown; use alt text and optional caption convention.

---

## 4. Best practices (what to include)

### 4.1 Universal

- **Clarity:** One main idea per section; short paragraphs.
- **Hierarchy:** Headings and spacing so readers can skim.
- **Outcome-focused:** Lead with impact where you can (results, quotes, before/after).
- **Personal voice:** About and case study intros should sound like you.
- **Accessibility:** Semantic HTML, contrast, focus states, alt text for images.
- **Performance:** Optimize images; fast load.

### 4.2 Homepage

- Lead with value (what you do / who you help).
- Make "Work" and "Contact" obvious.
- Use strong project imagery; avoid generic placeholders.
- Optional: testimonials or one line from a client/colleague.

### 4.3 Case studies

- Tell a story: context → problem → process → solution → impact.
- Show process (research, sketches, wireframes), not only final screens.
- Include at least one outcome (metric or quote).
- Use consistent structure across case studies so the site feels coherent.

---

## 5. Reference notes by source

*Use this section to add or edit notes as you revisit the screenshots.*

### Homepage references

| Source | Style notes | Use for |
|-------|-------------|--------|
| **Anton Sten** | Off-white bg, green accent, testimonials, newsletter block, "See how I work" CTA | Value-led hero; social proof; optional newsletter |
| **Matt Fredette** | TikTok case study: pink accent, role/time/platform/tools block, clear sections (Problem, Research, Ideation, Solution, Outcomes) | Case study sectioning; metadata block |
| **Bethany Heck** | Black/white alternating sections, strong type, grid galleries, "CASE STUDY —" label, two-column intro | Dark/light rhythm; case study hero pattern |
| **Ed Chao** | Dark theme, two-column work list (title + category + year + preview image) | Work page layout; project list pattern |
| **Morgan Bathe** | Light bg, orange "bb." logo, project grid with strong UI screens, clear categories | Project grid; header simplicity |
| **Naomi Creates** | Gradient blob hero, category tags (e.g. "END-TO-END APPLICATION"), alternating text/image rows, "View case study →" | Hero treatment; project card layout; CTAs |

### Case study references

| Source | Style notes | Use for |
|-------|-------------|--------|
| **Burger King (Andrew Couldwell)** | Design system: color/type/iconography docs, component library, device mockups, "OVERVIEW" / "ROLES", "HELLO / LET'S WORK TOGETHER" CTA | Design-system case study structure; CTA block |
| **DemocracyOS (Jesse Warren)** | Numbered phases (Discovery, Design), two-column (label left, content right), colored insight cards, wireframes + high-fidelity | Process narrative; layout pattern; research cards |
| **Bethany Heck (Medium)** | Black hero, "CASE STUDY —", two-column intro (summary + role/timeline/team), long-form with clear headings | Case study hero; metadata layout |
| **Spotify (Morgan Bathe)** | Green accent, "The Problem." / "Visual Design." sections, UX process chart, personas, UI component showcase | Section titles; process viz; component showcase |
| **Rightover (chofichang)** | Warm beige, dark green sections, persona cards, process grid, branding (color/type/iconography), full-width dark for mockups | Personas; branding section; full-width contrast |
| **Anton Sten (Loom)** | Minimal; client logo + short context; problem–process–result in prose; one big visual; comments/testimonials | Concise case study; social proof on project |

---

## 6. To-do (edit as you progress)

- [ ] Finalize color palette (hex) and add to Tailwind config.
- [ ] Choose and add font family/type scale.
- [ ] Define spacing scale (sections, cards, padding).
- [ ] Build header + footer components to match references.
- [ ] Build project card component (image, title, tagline, link).
- [ ] Build case study template (hero, sections, CTA).
- [ ] Add 1–2 real case studies using the Markdown frontmatter + body structure.
- [ ] Revisit reference screenshots and add any new notes to section 5.

---

*Document created from Portfolio Reference screenshots (Homepage + Casestudy). Update this file as the portfolio project evolves.*
