#!/bin/bash
# Optimize a batch of raw photos into paired JPG + WebP in images/optimized/.
# Usage: run.sh <source-folder>
# Expects <source-folder>/names.tsv with lines: original_filename<TAB>semantic-name<TAB>alt text

set -euo pipefail

SRC="${1:-}"
if [[ -z "$SRC" || ! -d "$SRC" ]]; then
  echo "usage: $0 <source-folder>" >&2
  echo "  (folder must contain a names.tsv file)" >&2
  exit 1
fi

NAMES_TSV="$SRC/names.tsv"
if [[ ! -f "$NAMES_TSV" ]]; then
  echo "missing $NAMES_TSV" >&2
  echo "each line: original_filename<TAB>semantic-name<TAB>alt text" >&2
  exit 1
fi

# Find the site root by walking up until we see index.html.
SITE_ROOT="$PWD"
while [[ "$SITE_ROOT" != "/" && ! -f "$SITE_ROOT/index.html" ]]; do
  SITE_ROOT="$(dirname "$SITE_ROOT")"
done
if [[ ! -f "$SITE_ROOT/index.html" ]]; then
  echo "could not find site root (no index.html ancestor of $PWD)" >&2
  exit 1
fi

OUT="$SITE_ROOT/images/optimized"
mkdir -p "$OUT"

command -v sips  >/dev/null || { echo "sips not found (macOS only)" >&2; exit 1; }
command -v cwebp >/dev/null || { echo "cwebp not found — install via 'brew install webp' or 'port install webp'" >&2; exit 1; }

declare -a CAROUSEL_LINES GRID_LINES

echo ""
echo "Optimizing photos from: $SRC"
echo "Writing to:             $OUT"
echo ""
printf "%-36s  %8s  %8s  %s\n" "name" "jpg" "webp" "dims"
printf "%-36s  %8s  %8s  %s\n" "----" "---" "----" "----"

total_jpg=0
total_webp=0

# Read TSV, skipping blank lines and comments.
while IFS=$'\t' read -r orig name alt || [[ -n "${orig:-}" ]]; do
  [[ -z "${orig// /}" || "${orig:0:1}" == "#" ]] && continue
  src_path="$SRC/$orig"
  if [[ ! -f "$src_path" ]]; then
    echo "  [skip] $orig — file not found" >&2
    continue
  fi

  # Get dimensions for width/height attrs.
  dims=$(sips -g pixelWidth -g pixelHeight "$src_path" | awk '/pixelWidth/{w=$2} /pixelHeight/{h=$2} END{print w"x"h}')
  w="${dims%x*}"
  h="${dims#*x}"

  # JPG: just strip EXIF (no quality change — re-encoding lossy sources inflates size).
  sips --deleteColorManagementProperties "$src_path" --out "$OUT/${name}.jpg" >/dev/null

  # WebP: q82, no metadata.
  cwebp -q 82 -metadata none "$src_path" -o "$OUT/${name}.webp" 2>/dev/null

  jpg_size=$(stat -f%z "$OUT/${name}.jpg")
  webp_size=$(stat -f%z "$OUT/${name}.webp")
  total_jpg=$((total_jpg + jpg_size))
  total_webp=$((total_webp + webp_size))

  printf "%-36s  %7sK  %7sK  %s\n" "$name" $((jpg_size/1024)) $((webp_size/1024)) "$dims"

  # Default alt to the name if user left it blank.
  alt="${alt:-$name}"

  CAROUSEL_LINES+=("          <div class=\"carousel-slide\">
            <img src=\"images/optimized/${name}.webp\" alt=\"${alt}\" loading=\"lazy\" width=\"${w}\" height=\"${h}\">
          </div>")
  GRID_LINES+=("        <div class=\"gallery-item\">
          <img src=\"images/optimized/${name}.webp\" alt=\"${alt}\" loading=\"lazy\" width=\"${w}\" height=\"${h}\">
        </div>")
done < "$NAMES_TSV"

echo ""
printf "  totals:  jpg=%dK  webp=%dK  (webp saves %d%%)\n" \
  $((total_jpg/1024)) $((total_webp/1024)) \
  $(( (total_jpg - total_webp) * 100 / (total_jpg > 0 ? total_jpg : 1) ))
echo ""

snippet_file="$SRC/snippets.html"
{
  echo "<!-- Paste into .gallery-carousel > .carousel-track -->"
  printf "%s\n" "${CAROUSEL_LINES[@]}"
  echo ""
  echo "<!-- Paste into .gallery-grid -->"
  printf "%s\n" "${GRID_LINES[@]}"
} > "$snippet_file"

echo "HTML snippets written to: $snippet_file"
echo ""
