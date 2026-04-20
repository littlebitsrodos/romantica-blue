# CLAUDE.md — Romantica Blue

Static vacation-rental site for Romantica Blue, Aliki Beach, Paros. No build step — HTML/CSS/vanilla JS with a PWA shell.

## Stack

- Plain HTML / CSS / ES modules, served statically.
- Google Fonts loaded with `media=print` swap trick (non-blocking).
- Formspree for contact form. Stripe Payment Links for booking.
- Service Worker with cache-first strategy (`sw.js`); `offline.html` fallback.
- Schema.org `VacationRental` JSON-LD in `<head>`.
- Strict CSP: `default-src 'self'`, no inline scripts, Formspree + Google Maps iframe allow-listed.

## File map

| Path | Purpose |
|---|---|
| `index.html` | Single-page site. Hero, gallery, amenities, neighborhood, contact. |
| `styles.css` | Full design system. CSS custom properties, mobile-first breakpoints at 768 / 1024. |
| `script.js` | Language switcher, gallery carousel, calendar, form handling, SW registration. |
| `script.min.js` | Minified bundle (stale — dev edits go in `script.js`). |
| `translations.js` | EN / ES / EL / FR copy. Keyed by `data-translate` attributes. |
| `sw.js` | Service worker, cache-first. Bump version string on asset changes. |
| `manifest.json` | PWA manifest. |
| `offline.html` | Offline fallback page. |
| `images/` | Raw / source photos. Do not link these from HTML. |
| `images/optimized/` | Public images, both `.jpg` and `.webp` per asset. Always link from here. |
| `lighthouse-*.json` | Historical audit reports (Jan 2026 optimization pass). |

## Image pipeline

1. New photos land in `images/<date> - description/`.
2. For each source image, produce two variants in `images/optimized/`:
   - `name.jpg` — strip EXIF, keep original JPEG compression (WhatsApp exports already at ~q80).
   - `name.webp` — `cwebp -q 82 -metadata none`.
3. Use `<img>` with `width` and `height` attributes matching intrinsic dimensions to reserve layout space (CLS = 0).
4. Point hero-critical images at the WebP; keep `.jpg` as graceful fallback.
5. Mobile uses `.gallery-carousel`, desktop uses `.gallery-grid` (auto-rows at 250px desktop / 200px tablet+mobile).

## Conventions

- **Layout stability:** Every `<img>` needs explicit `width` + `height`. Non-critical images use `loading="lazy"`.
- **Scripts:** `<script defer>` in `<head>`, not at end of `<body>`.
- **Fonts:** `<link rel="stylesheet" media="print" onload="this.media='all'">` pattern for Google Fonts.
- **Interactive polish:** Buttons get a consistent `transform: translateY(-2px)` on hover.
- **Palette:** Aegean blue, terracotta, sand, olive — grounded, hospitality-appropriate.
- **Translations:** New user-facing copy needs a `data-translate` key + entries in all 4 languages.
- **Service worker:** If you touch a cached asset, bump the cache version in `sw.js` — otherwise returning users see stale content.

## Working on the site

- Serve locally: `python3 -m http.server 8000` then open `http://localhost:8000`.
- The browse skill (`/browse`) is the preferred way to dogfood changes in a real browser.
- Lighthouse runs: `npx lighthouse https://romanticablue.com --output json`.

## Agent assets

- `.agent/workflows/` — custom workflow definitions.
- `.antigravity/skills/` — Skill Squad audit personas:
  - **Performance Engineer** — Web Vitals, PWA, SEO
  - **Boutique Architect** — Schema.org, semantic HTML, data structures
  - **Vibe Designer** — Aesthetics, animations, micro-interactions
  - **Local Guide** — Paros content, authentic recommendations

## Known quirks

- Project dir was renamed from `romantica-blue/` to `sea-tree-paros/` (local path change). The brand name in `index.html`, schema, OG tags, and `romanticablue.com` domain remains **Romantica Blue**.
- Files in the repo are a mix of `yorgos:staff` and `littlebits:staff` ownership. If git complains about dubious ownership, add the path via `git config --global --add safe.directory`.
- `.DS_Store` files keep reappearing — `.gitignore` already excludes them.
