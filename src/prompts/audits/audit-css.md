# Audit CSS — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit css`  
**Duration:** 5-10 min  
**Report:** `/reports/audits/YYYY-MM-DD_css-audit.md`

---

## Scope

Audit CSS architecture, file health, import chains, and naming conventions.

## Files to Read

- `/styles/globals.css` — main entry point with all @imports
- `/src/styles/` — directory listing of all CSS source files
- `/guidelines/development/css-optimization-guidelines.md`
- `/guidelines/development/css-optimization-quick-reference.md`
- `/guidelines/development/bem-methodology.md` — BEM naming rules
- `/guidelines/Guidelines.md` Section 2.1 (No Tailwind)

## Checks

1. **Broken imports** — @import paths in globals.css that don't resolve to actual files
2. **Missing imports** — CSS files in `/src/styles/` not imported by globals.css
3. **File size violations** — CSS files exceeding 200-line limit (Rule 6)
4. **BEM naming** — inconsistent prefixes (`.wp-block-*` vs `.wc-*` vs `.retro-*`)
5. **Duplicate rules** — same selector defined in multiple files
6. **Tailwind remnants** — any Tailwind utility classes still in CSS files
7. **`!important` usage** — count and document all `!important` declarations
8. **Legacy files** — identify CSS files prefixed with `legacy-` and assess if still needed
9. **Empty files** — CSS files with no meaningful rules

## Output

Write report to `/reports/audits/YYYY-MM-DD_css-audit.md` with `Status: Unprocessed`.  
Do NOT create task lists.

---

**Trigger:** `audit css`

## Guidelines Referenced

- `/guidelines/development/css-optimization-guidelines.md`
- `/guidelines/development/css-optimization-quick-reference.md`
- `/guidelines/development/bem-methodology.md`
- `/guidelines/Guidelines.md` Section 2.1

---

**Trigger:** `audit css`