# Audit Accessibility — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit a11y`  
**Duration:** 10-20 min  
**Report:** `/reports/audits/YYYY-MM-DD_a11y-audit.md`

---

## Scope

Audit WCAG AA 2.2 compliance across interactive components, forms, navigation, and media.

## Files to Read

- `/guidelines/Guidelines.md` Section 2.4 (Accessibility rules)
- `/guidelines/REDUCED_MOTION_GUIDELINES.md`
- `/guidelines/interactions/focus-management.md`
- `/guidelines/mobile/buttons.md` (touch targets)
- Sample 15-20 component files from `/src/app/components/blocks/`, `/parts/`, `/patterns/`

## Checks

### P0: Critical

1. **Missing aria-label** — icon-only buttons without accessible names
2. **Color contrast** — text/background combinations below 4.5:1 (sample key components)
3. **Touch targets** — interactive elements below 44x44px at mobile breakpoints

### P1: High

4. **Heading hierarchy** — skipped heading levels (h1 → h3) on any template
5. **Form labels** — inputs without associated `<label>` via `htmlFor`/`id`
6. **Focus trapping** — modals/drawers without focus trap (Dialog, Drawer, Sheet, MobileFilterDrawer)
7. **aria-expanded** — toggle buttons without `aria-expanded` attribute

### P2: Medium

8. **prefers-reduced-motion** — animations that don't respect the media query
9. **Alt text** — images with empty or missing `alt` attributes
10. **Keyboard navigation** — components only accessible via mouse (click without keydown)
11. **Live regions** — dynamic content updates without `aria-live` announcements

### P3: Low

12. **Semantic HTML** — `<div>` used where `<nav>`, `<main>`, `<article>`, `<section>` is appropriate
13. **Skip navigation** — verify skip link target exists on all templates
14. **Language attribute** — verify `<html lang="en">` is set

## Output

Write report to `/reports/audits/YYYY-MM-DD_a11y-audit.md` with `Status: Unprocessed`.  
Do NOT create task lists.

---

**Trigger:** `audit a11y`
