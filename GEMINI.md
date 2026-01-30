# GEMINI.md - Romantica Blue

## Project Overview
A vacation rental website for Aliki Beach, Paros, Greece. Static HTML/CSS/JS site with PWA capabilities.

---

## Session Learnings (2026-01-18 → 2026-01-30)

### Performance Engineering
- **CLS Prevention**: Always add explicit `width` and `height` attributes to `<img>` tags to reserve space and prevent layout shifts.
- **Script Loading**: Move scripts to `<head>` with `defer` attribute instead of placing at end of `<body>`. This allows parallel download while maintaining execution order.
- **Font Loading**: Use `media="print" onload="this.media='all'"` pattern for non-blocking Google Fonts.
- **PWA Icons**: SVG favicons work for most cases, but dedicated PNGs (192x192, 512x512) recommended for maximum Android compatibility.

### Design Polish (Vibe)
- **Micro-interactions**: Ensure all interactive elements (buttons) have consistent hover effects (e.g., `transform: translateY(-2px)`).
- **Color Palette**: Earthy, grounded palette works well for vacation/hospitality: Terracotta, Sand, Olive, Aegean blues.

### Skill Squad Architecture
The project uses a "Skill Squad" model for audits:
1. **Performance Engineer** - Web Vitals, PWA, SEO optimization
2. **Boutique Architect** - Schema.org, semantic HTML, data structures
3. **Vibe Designer** - Aesthetics, animations, micro-interactions
4. **Local Guide** - Location content, authentic local recommendations

---

## File Structure Notes
- `styles.css` - Full design system with CSS variables
- `script.js` - All JS in one file (language switcher, calendar, gallery, forms)
- `sw.js` - Service Worker with cache-first strategy
- `translations.js` - Multi-language support (EN, ES, EL, FR)
- `.antigravity/skills/` - Skill definitions for audits

---

## Commands & Workflows
- **Audit**: Run Performance Engineer checklist against the site
- **Compound**: Extract learnings and update this file
