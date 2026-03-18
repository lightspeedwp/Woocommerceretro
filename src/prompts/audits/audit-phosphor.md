# Audit Phosphor — Sub-Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Trigger:** `audit phosphor`
**Duration:** 10-20 min
**Report:** `/reports/audits/YYYY-MM-DD_phosphor-audit.md`

---

## Purpose

Audit the codebase for Phosphor Icons migration completeness. Identify any remaining Lucide React imports, direct `@phosphor-icons/react` imports that bypass the compatibility layer, deprecated/renamed Phosphor icon names, and unused icon exports.

## Files to Read

- `/src/app/utils/phosphor-compat.ts` — canonical icon barrel file (single source of truth)
- `/guidelines/overview-icons.md` — icon system guidelines
- `/tasks/phosphor-migration-task-list.md` — migration history (reference only)

## Checks

### Phase 1 — Legacy icon detection

1. **Lucide imports** — Search all `.tsx` files for `from 'lucide-react'` or `from "lucide-react"`. Should be zero.
2. **Other icon libraries** — Search for `react-icons`, `heroicons`, `@mui/icons-material`, `ionicons`. Should be zero.
3. **Inline SVG icons** — Search for `<svg` elements that could be replaced with Phosphor equivalents (exempt: brand logos, custom illustrations, decorative SVGs in `/imports/`).

### Phase 2 — Import path compliance

4. **Direct Phosphor imports** — Search for `from '@phosphor-icons/react'` or `from "@phosphor-icons/react"` in all `.tsx` files. All imports MUST go through `phosphor-compat.ts` unless there is a documented exception (e.g., the compat file itself).
5. **Incorrect import paths** — Search for typos like `phosphor-compat`, `phosphorCompat`, `../phosphor-compat` at wrong depth, `@/utils/phosphor-compat` alias misuse.

### Phase 3 — Icon name health

6. **Deprecated icon names** — Cross-reference all exports in `phosphor-compat.ts` against the current `@phosphor-icons/react` package API. Flag any icon names that have been renamed or removed in recent versions.
7. **Unused exports** — For each icon exported from `phosphor-compat.ts`, search the codebase for at least one consumer. Flag exports with zero consumers as candidates for removal.
8. **Missing exports** — Search all `.tsx` files for icon imports from `phosphor-compat` and verify every imported name exists in the barrel file.

### Phase 4 — Usage consistency

9. **Weight consistency** — Audit `weight` prop usage. Project standard is `"duotone"` for decorative icons, `"bold"` for UI/action icons. Flag files using `"thin"`, `"light"`, or `"regular"` without justification.
10. **Size consistency** — Flag icons without explicit `size` prop (relies on default 32px which is usually wrong). Standard sizes: 16 (inline), 20 (buttons), 24 (navigation), 32 (features), 48 (heroes).
11. **Accessibility** — Icon-only buttons must have `aria-label`. Decorative icons should have `aria-hidden="true"`.

### Phase 5 — Alias hygiene

12. **Alias conflicts** — Verify aliases in `phosphor-compat.ts` (`Spinner`, `Bag`, `Tote`, `Link`) don't shadow React/router exports in consumer files.
13. **Stale aliases** — If an alias has zero consumers, flag for removal.

## Severity Classification

| Priority | Description |
|----------|-------------|
| P0 | Lucide or other legacy icon library still imported |
| P0 | Direct `@phosphor-icons/react` import bypassing compat layer |
| P1 | Deprecated/renamed icon name (will break on upgrade) |
| P1 | Missing export in compat file (import error) |
| P2 | Unused exports bloating barrel file |
| P2 | Inconsistent weight/size usage |
| P3 | Stale aliases, minor naming inconsistencies |

## Output

Write report to `/reports/audits/YYYY-MM-DD_phosphor-audit.md` with `Status: Unprocessed`.
Do NOT create task lists.

---

## Guidelines Referenced

- `/guidelines/overview-icons.md`
- `/guidelines/Guidelines.md` Section 2.4 (accessibility)
- `/guidelines/development/modern-react-coding-standards.md`

---