---
name: optimize-photos
description: Optimize a batch of raw photos (WhatsApp, phone exports, DSLR JPEG) into `images/optimized/` as paired `.jpg` + `.webp`, with semantic filenames and ready-to-paste gallery HTML snippets. Use when: "optimize photos", "process new photos", "add photos to the gallery", or after a new folder lands under `images/<date> - …/`.
---

# Optimize Photos

The Romantica Blue site uses paired `.jpg` + `.webp` images in `images/optimized/`. This skill takes a folder of raw photos and produces the optimized pair plus gallery HTML.

## Inputs

- **Source folder** — defaults to the newest `images/<date> - …/` directory. Accept `$1` as override.
- **Target folder** — always `images/optimized/` relative to the site root.

## Procedure

### 1. Discover

Resolve the source folder. If the user didn't pass one, run:

```bash
ls -dt images/*\ -\ * 2>/dev/null | head -1
```

List every image in the source folder (`.jpg`, `.jpeg`, `.png`, `.heic`).

### 2. Name each photo

For each source image, use the `Read` tool to view it, then propose a semantic kebab-case name that describes the subject and setting — e.g.:

- `terrace-sunset-panorama`
- `daybed-moon-sunset`
- `living-room-sliding-doors`

Follow the existing convention in `images/optimized/` (room → feature → mood/time, no numbers unless disambiguating near-duplicates). Show the user all proposed names in a table and let them edit before proceeding.

Also draft a one-sentence alt text per photo, suitable for `<img alt="…">`. Keep alt text descriptive, not decorative ("Terrace at sunset with daybed, pergola, and sea view" — not "nice sunset photo").

### 3. Run the pipeline

Call `./.claude/skills/optimize-photos/run.sh <source-folder>` with a `names.tsv` file in the source folder containing one line per image:

```
original_filename<TAB>semantic-name<TAB>alt text sentence
```

The script:
- JPG: runs `sips --deleteColorManagementProperties` to strip EXIF, preserving WhatsApp/camera compression (re-encoding inflates already-lossy sources).
- WebP: runs `cwebp -q 82 -metadata none` for ~35% smaller files.
- Emits both files into `images/optimized/`.
- Prints a size report and ready-to-paste HTML snippets.

### 4. Integrate

The script prints two HTML blocks — one for `.gallery-carousel > .carousel-track` and one for `.gallery-grid`. Paste them into `index.html`, preserving the user's preferred order (usually: new photos first, existing photos after).

Portrait photos use `width="960" height="1280"`; landscape uses `width="1280" height="960"`. The grid's `object-fit: cover` handles mixed orientations cleanly — no CSS changes needed (already patched with `grid-auto-rows`).

## Do not

- Re-encode JPGs from already-compressed sources (WhatsApp, phone photos). `sips -s formatOptions 85` on a WhatsApp JPEG **increases** file size because you're padding lossy artifacts. Just strip EXIF and move on.
- Write to `images/<date> - …/` — that's the source archive. Optimized output always goes to `images/optimized/`.
- Skip alt text. Every gallery image needs a real descriptive sentence for a11y and SEO.

## Tools required

- `sips` (macOS built-in)
- `cwebp` — install via `port install webp` or `brew install webp`
