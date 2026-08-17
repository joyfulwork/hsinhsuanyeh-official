# hsinhsuanyeh.com

Portfolio site for animation director **Hsin-Hsuan Yeh** (葉信萱), rebuilt from the original [Wix Studio site](https://www.hsinhsuanyeh.com/) as a **Vite + React** SPA (architecture aligned with `tekuei-official`).

## Stack

- Vite 6 + React 19 + React Router 7
- Pure CSS (Wix layout & animations preserved)
- Bilingual routes: `/` (English) and `/zh/` (繁體中文)
- SEO: per-page meta, Open Graph, canonical, hreflang, `robots.txt`, build-time `sitemap.xml`, JSON-LD on About

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/

## Build & deploy

```bash
npm run build
npm run preview
```

Output goes to `dist/`. For Cloudflare Pages (like tekuei-official), `public/_redirects` provides SPA fallback.

## Structure

```
public/assets/images/   # Wix originals (media IDs kept)
public/assets/videos/   # e.g. son-teaser.mp4
src/
  App.jsx               # Routes (trailing-slash URLs)
  components/           # Sidebar, Marquee, PageLayout
  data/                 # Site config, page meta, project content
  hooks/                # usePageMeta, useAvatarFlip
  pages/                # One component per page
  styles/style.css      # Full Wix replica styles
```

## Routes

| English | 中文 |
|---------|------|
| `/` | `/zh/` |
| `/animation/` | `/zh/animation/` |
| `/animation/ashes/` | `/zh/animation/ashes/` |
| `/animation/doitagain/` | `/zh/animation/doitagain/` |
| `/vr/` | `/zh/vr/` |
| `/vr-son/` | `/zh/vr-son/` |
| `/illustration/` | `/zh/illustration/` |
| `/illustration/summer-secrets/` | `/zh/illustration/summer-secrets/` |
| `/comics/` | `/zh/comics/` |
| `/comics/comeout/` | `/zh/comics/comeout/` |
| `/about-contact/` | `/zh/about-contact/` |

## Notes

- Fonts: Google Fonts (Jost, Syne 800, Jura) as Wix substitutes.
- Images are original resolution (~180 MB). Compress before production deploy.
- Missing Wix assets can be dropped into `public/assets/images/` using the same filenames.
