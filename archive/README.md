# Archive

This folder holds historical, non-runtime project artifacts.

Nothing in `archive/` should be treated as part of the live site surface.

## Structure

- `reports/`: Saved audits, analysis outputs, and one-off diagnostic artifacts.
- `local-docs/`: Local-only working notes and reference docs that should not ship with the repo.
- `local-tools/`: Local-only helper tooling, browser state, and audit scripts.
- `operations/`: Miscellaneous operational exports and admin-side artifacts.
- `site-captures/`: Screenshots, exported captures, and related review material.

## Guidelines

- Prefer putting temporary diagnostics here instead of cluttering the repo root.
- Keep filenames descriptive and date-scoped when possible.
- Do not link archive files from production HTML, CSS, metadata, or scripts.
- Treat `local-docs/` and `local-tools/` as machine-local storage unless `.gitignore` rules change.
