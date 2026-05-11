---
name: new-site-checklist
version: 2026-04-28
triggers: ["new site", "new website", "νέα ιστοσελίδα", "νέο site", "bootstrap site", "site template", "launch checklist"]
tools: [bash]
constraints: ["adapt to project context — not every item applies", "treat as a menu, not a sequence", "decisions about deliberate non-features are project-specific"]
category: engineering
---

# New Site Checklist — bootstrap template για νέα project

Distilled από το ιστορικό commits του Sea Tree (Ιαν 2026 → Απρ 2026).
Λειτουργεί ως μενού: όχι όλα ισχύουν παντού. Σήμανε ως skip ό,τι δεν
ταιριάζει στο project (π.χ. PWA σε purely-API site).

## Πώς να το χρησιμοποιείς
1. Αντίγραψε αυτό το αρχείο σε νέο repo ή κράτησέ το ως αναφορά.
2. Πέρασε τα items κατά φάση· κάθε φάση παράγει deployable κατάσταση.
3. Φάση = milestone. Μην ανοίγεις δύο φάσεις παράλληλα.

---

## Φάση 1 — Foundation
- [ ] Initial scaffold (HTML/CSS/JS ή framework choice)
- [ ] Repo + `.gitignore` (`.DS_Store`, build artifacts, secrets)
- [ ] `CLAUDE.md` με stack, file map, conventions, deliberate non-features
- [ ] `.agent/` portable brain (αν είναι agentic project)
- [ ] Custom domain: `CNAME` + DNS records
- [ ] Deployment workflow (GitHub Pages / Vercel / Netlify / Fly)
- [ ] Service Worker + `manifest.json` + `offline.html` (αν PWA)
- [ ] `robots.txt` + `sitemap.xml`
- [ ] Custom **404.html**

## Φάση 2 — Security baseline
- [ ] Strict Content Security Policy (CSP)
- [ ] `Referrer-Policy`, `X-Content-Type-Options`, `Permissions-Policy` (μέσω meta αν static host)
- [ ] `rel="noopener noreferrer"` σε όλα τα external links
- [ ] Honeypot ή captcha στις φόρμες
- [ ] Subresource Integrity (SRI) σε third-party scripts
- [ ] Self-host fonts (επιτρέπει αυστηρότερο CSP)

## Φάση 3 — Νομικά / Συμμόρφωση
- [ ] Privacy Policy σελίδα (όλες οι γλώσσες)
- [ ] Cookie Policy (αν υπάρχουν analytics/tracking)
- [ ] Terms of Service (αν εμπορική)
- [ ] Imprint / στοιχεία επιχείρησης (ΑΦΜ, διεύθυνση — απαίτηση EU)
- [ ] GDPR data-deletion contact

## Φάση 4 — Φωτογραφίες & Media
- [ ] Image pipeline: source → optimized (`.jpg` + `.webp`, ιδανικά + AVIF)
- [ ] `<img>` με ρητά `width` + `height` (CLS = 0)
- [ ] Hero σε `<picture>` με mobile variant + preload (LCP)
- [ ] Lazy loading σε non-critical εικόνες
- [ ] Descriptive filenames (όχι `IMG_4823.jpg`)
- [ ] EXIF strip σε δημόσιες εικόνες

## Φάση 5 — Content
- [ ] Hero / above-the-fold copy
- [ ] About / Our Story
- [ ] FAQ (crawlable, όχι behind JS)
- [ ] Footer (contact, legal links, language switcher)
- [ ] Όχι placeholder reviews/quotes σε production

## Φάση 6 — SEO
- [ ] Schema.org JSON-LD (relevant types)
- [ ] Open Graph + Twitter meta
- [ ] Canonical URL σε κάθε σελίδα
- [ ] Auto-bump `<lastmod>` στο sitemap
- [ ] Disallow internal data files
- [ ] Schema validator step στο CI
- [ ] Search Console verification + sitemap submission
- [ ] Translated **alt text** per locale
- [ ] Local listings (Google Business Profile, TripAdvisor κ.λπ.)

## Φάση 7 — i18n (αν multilingual)
- [ ] `translations.js` ή equivalent — single source of truth
- [ ] Per-locale URLs (`/`, `/es/`, `/el/`, `/fr/`) — όχι μόνο client-side swap
- [ ] Build script που γεννά locale HTMLs
- [ ] `hreflang` cluster + `x-default`
- [ ] Language switcher: navigation μεταξύ URLs με preserved `#anchor`
- [ ] Init γλώσσας από `document.documentElement.lang`
- [ ] Font subsets per script (Greek, Cyrillic κ.λπ. αν λείπει)

## Φάση 8 — Performance
- [ ] WebP / AVIF
- [ ] `srcset` για responsive images
- [ ] Preload critical fonts (woff2)
- [ ] Inline `@font-face` declarations
- [ ] `<script defer>` στο `<head>`
- [ ] Service Worker cache-first με version bumps
- [ ] Resource hints: `preconnect` / `dns-prefetch` σε third-party origins
- [ ] Critical CSS inlining
- [ ] Performance budget στο CI (Lighthouse CI ή Playwright assertion)
- [ ] Real-user Web Vitals (`web-vitals` package)

## Φάση 9 — Accessibility (WCAG 2.2 AA)
- [ ] Skip link
- [ ] `:focus-visible` styles
- [ ] `prefers-reduced-motion`
- [ ] Tap targets ≥ 44×44px (mobile)
- [ ] Contrast ratios σε όλο το copy
- [ ] Heading hierarchy χωρίς skips
- [ ] axe-core στο test suite

## Φάση 10 — Favicons & PWA assets
- [ ] `favicon.svg` (modern browsers)
- [ ] `favicon-32.png`, `favicon-16.png` (fallback)
- [ ] `apple-touch-icon-180.png` (iOS — δεν διαβάζει SVG)
- [ ] Maskable PNG στο manifest (Android)
- [ ] Theme color στο manifest

## Φάση 11 — Business logic (αν εφαρμόζει)
- [ ] Πραγματικά τηλέφωνα/links (`tel:`, `wa.me/`, partner platforms)
- [ ] Sticky mobile CTA bar (≤768px)
- [ ] Calendar / date selection με form auto-fill (αν booking)
- [ ] Pricing logic (seasonal, multi-currency)
- [ ] Payment integration (Stripe Payment Links, Viva, etc.)
- [ ] Booking confirmation flow με ICS attachment
- [ ] Server-side data sync (iCal feeds, inventory)

## Φάση 12 — Forms & Επικοινωνία
- [ ] Form action URL **πραγματικό**, όχι placeholder
- [ ] Fallback σε `mailto:` / WhatsApp αν δεν υπάρχει hosted form
- [ ] Email infrastructure: MX records + forwarding rules
- [ ] SPF / DKIM / DMARC αν στέλνει mail από domain
- [ ] Newsletter backend integration (όχι μόνο opt-in field)

## Φάση 13 — Analytics & Privacy
- [ ] GA4 με Consent Mode v2
- [ ] Cookie banner (consent-aware, localized)
- [ ] Ιδιοκτησία λογαριασμού στον πελάτη, όχι σε εμάς
- [ ] Privacy policy linked από banner

## Φάση 14 — Testing
- [ ] Playwright + axe-core suite
- [ ] Mobile regression specs σε όλα τα locales
- [ ] Common bug classes ως assertions: navbar edges, calendar overflow,
      gallery half-slides, heading selector mismatch, contrast
- [ ] Schema validator run

## Φάση 15 — CI/CD
- [ ] Single workflow: test → build → deploy (gated)
- [ ] Cache test browsers (Playwright)
- [ ] Cron jobs για periodic data refresh (αν υπάρχει)
- [ ] Service Worker cache version bump σε κάθε change cached asset
- [ ] Tagged releases για easy rollback

## Φάση 16 — Monitoring & Ops
- [ ] Uptime check (UptimeRobot / HealthChecks.io)
- [ ] Error tracking (`window.onerror` logger ή Sentry)
- [ ] Backup των content sources εκτός repo
- [ ] Documented rollback command (pre-typed)

## Φάση 17 — Deliberate non-features
Πάντα γράψε σε `CLAUDE.md` τι **δεν** θα κάνεις και γιατί. Αποτρέπει
re-proposals από future agents/contributors. Παραδείγματα:
- Hero video (κόστος LCP > όφελος)
- `llms.txt` (low signal — bot logs δείχνουν ότι δεν fetch-άρεται)
- AI chat widget (selection-bias στα vendor data)
- `Review` JSON-LD σε first-party (Google rule του 2019)

---

## Self-rewrite hook
Όταν κάνεις launch νέο site και χρειαστεί βήμα που λείπει από εδώ —
πρόσθεσέ το. Όταν ένα βήμα αποδεικνύεται περιττό σε ≥ 2 sites — μετακίνησέ
το στα Deliberate non-features ή σήμανέ το ως optional.
