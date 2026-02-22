# Product Design Portfolio

A minimal, best-practice product designer portfolio built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and Markdown-based case studies (no external CMS).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command        | Action                                      |
|----------------|---------------------------------------------|
| `npm run dev`  | Start dev server at `localhost:4321`        |
| `npm run build`| Build for production (output in `dist/`)     |
| `npm run preview` | Preview the production build locally     |

## Project structure

- `src/pages/` — Routes: Home, Work, About, Contact, and dynamic case study `[slug]`
- `src/layouts/` — Main layout (header, footer, meta)
- `src/components/` — Header, Footer, Button, Card, Section, ImageCaption
- `src/content/case-studies/` — Markdown case studies (content collection)
- `public/` — Static assets (favicon, images)

## Adding case studies

1. Create a new `.md` file in `src/content/case-studies/` (e.g. `my-project.md`). The filename becomes the URL slug: `/work/my-project`.

2. Add frontmatter and body:

```yaml
---
title: "Project title"
tagline: "One-line summary for cards and meta"
client: "Client or context"   # optional
year: "2024"
role: "Lead product designer"
team: "With eng, research…"   # optional
featuredImage: "/images/work/hero.jpg"
link: "https://…"            # optional
metaDescription: "Short description for SEO"
featured: true                # optional, show on homepage
---

## Overview
Your content in Markdown...
```

3. Put images in `public/images/work/` and reference them in the body: `![Alt text](/images/work/photo.jpg)`.

See `PORTFOLIO-PLAN.md` and `portfolio-design-guidelines.md` in this folder for the full build plan and visual guidelines.

## Deploy

- **Vercel:** Connect the repo; build and output directory are set in `vercel.json`.
- **Netlify:** Connect the repo; build command and publish directory are in `netlify.toml`.

Update `site` in `astro.config.mjs` to your production URL for correct canonical and OG URLs.
