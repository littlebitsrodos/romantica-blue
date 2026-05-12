# Workspace

## 2026-05-10 — PWA asset cache contract

- Goal: make favicon/logo/cache updates hard to forget for the minimal logo work.
- Direction: add a small static check in the existing test path and document the cache-version rule beside `CACHE_NAME`.
- Status: closed as lightweight architecture candidate 1.
- Result: keep `scripts/check_pwa_cache_contract.mjs` / `assertPwaCacheContract()` as the cache contract seam; no git-aware bump enforcement or runtime SW test for v1.
- Next architecture candidate: Contact/Booking Contact Surface Cleanup.

## 2026-05-10 — Agent Context Module

- Goal: make `PROJECT_CONTEXT.md`, `AGENTS.md`, `CLAUDE.md`, and `.agent/` roles explicit and non-contradictory.
- Status: closed as architecture candidate 2.
- Result: root harness files are adapters (`AGENTS.md` for Codex, `CLAUDE.md` for Claude Code); `.agent/` is the shared portable brain; gstack paths are intentionally harness-specific.

## 2026-05-10 — Sea Tree design direction workshop

- Goal: clarify the next design direction for the Sea Tree static site before implementation.
- Confirmed direction: personal and story-led, centered on sea, calm, white light, real-home warmth, safe booking, and the tactile character of kourasani surfaces.
- Story hierarchy: lead with the present-day feeling of a calm seaside home; reveal the former Romantica disco bar history as a second layer, not the primary first impression.
- Audience strategy: optimize for high-quality repeat guests who can imagine staying 2-5 weeks and returning yearly; consciously de-emphasize cheap, fast, party-oriented short stays.
- Booking strategy: Airbnb and Booking.com remain secondary trust/booking channels, but the primary site conversion should be direct contact for long-stay inquiries.
- Long-stay inquiry should collect desired dates, duration, guest count, remote-work intent, and the kind of stay the guest is imagining so the owner can assess fit, not only price/date availability.
- Contact hierarchy: primary CTA should be a structured long-stay inquiry/contact form ("Tell us about your longer stay") with WhatsApp to Antonis as the secondary direct option for people who prefer immediate contact.
- Business goal: optimize for 2-3 high-quality repeaters who return enthusiastically and ideally build a friendly relationship with the owners, not for high lead volume. The site should select for taste, respect, time, and fit.
- Aliki positioning check: public sources support describing Aliki as a quiet seaside village with enough everyday basics for longer stays (supermarket, bakery, pharmacy, tavernas/cafes, bus links, beaches nearby), but wording should stay honest: village-scale daily life, not full urban convenience.
- Owner phrasing for the Aliki promise: "You hear the waves, see the traditional boats, and are on the quiet side of Aliki beach." Use this as sensory proof for the long-stay/village-rhythm positioning.
- Location truth: the property is directly by the water, but the shore in front is rocky and not for swimming. This should be stated clearly and framed honestly as the reason the immediate frontage stays quiet; the sandy swimming beach, tavernas, and daily essentials are about a 2-minute walk away.
- Pricing stance: long-stay positioning should not imply monthly/extended-stay discounts. Price is the same regardless of stay length; the site should frame longer stays as fit and rhythm, not bargain-seeking.
- Year-round truth from owner: the house is made for all seasons, including fireplace etc. Position long stays beyond summer where appropriate, especially for quiet work/rest seasons.
- Owner rhythm video: dusk/evening at Aliki beach shows calm shallow water, traditional/small boats across the bay, sandy shoreline, soft light, and village buildings close by without a busy resort feeling. Use as evidence for "the product is the rhythm": evening walks, quiet bay, village beside the sea.

## 2026-05-11 — Focused QA for redesign pass

- Goal: verify the restored Sea Tree redesign pass on mobile/desktop before preparing final commit.
- Recall applied: before structural HTML changes, check CSS selectors targeting old elements and update HTML/CSS together.
- Current step: user chose to commit the current dirty redesign/context state before QA so any QA fixes can be isolated in later atomic commits.
- Scope to verify: mobile overflow, calendar columns, gallery carousel alignment, contact form layout/behavior, accessibility, and long Greek/French copy in hero/form areas.
- Result: automated QA passed (`12/12` focused mobile layout; full Playwright `24 passed, 18 intentionally skipped`). Manual visual QA found no fixable bugs.
- Remaining decision: whether to replace the current `mailto:antocosto@gmail.com` inquiry form with a real Formspree endpoint before shipping.

## 2026-05-12 — Privacy policy controller details

- User provided the Sea Tree legal/data-controller details for privacy pages and future project reference.
- Legal entity: `ΑΚΤΑΙ ΠΑΡΟΥ ΙΔΙΩΤΙΚΗ ΚΕΦΑΛΑΙΟΥΧΙΚΗ ΕΤΑΙΡΕΙΑ`; distinctive title: `ΑΚΤΑΙ ΠΑΡΟΥ Ι.Κ.Ε.`
- Registered office: `Γρηγορίου Λαμπράκη 69, Γλυφάδα Αττικής, Ελλάδα`; VAT/tax office: `Α.Φ.Μ. 802416469 / Δ.Ο.Υ. ΚΕΦΟΔΕ Αττικής`.
- Public contact details remain `antocosto@gmail.com` and `+30 697 3286 811`.

## 2026-05-12 — VacationRental schema validator cleanup

- Added a static schema contract check for `VacationRental` JSON-LD before changing implementation.
- Fixed validator-facing shape issues by making `identifier` a string and adding `occupancy.value` on the rental and each room in `containsPlace`.
- Bumped `sw.js` cache version so returning visitors do not keep stale structured data.
