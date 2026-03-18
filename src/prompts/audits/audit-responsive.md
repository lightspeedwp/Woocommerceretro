# Audit Responsive — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit responsive`  
**Duration:** 5-10 min  
**Report:** `/reports/audits/YYYY-MM-DD_responsive-audit.md`

---

## Scope

Audit responsive design patterns across templates, patterns, and key blocks.

## Files to Read

- `/guidelines/responsive/breakpoints.md` — breakpoint strategy
- `/guidelines/responsive/navigation.md` — responsive navigation
- `/guidelines/mobile/` — all mobile guidelines
- Sample 10-15 template/pattern files

## Checks

1. **Missing breakpoints** — components with desktop-only layout (no mobile adaptation)
2. **Fixed widths** — hardcoded pixel widths that should be fluid (`%`, `vw`, `clamp()`)
3. **Text overflow** — long text without `overflow-wrap`, `word-break`, or truncation
4. **Image sizing** — images without `max-width: 100%` or responsive attributes
5. **Touch targets** — buttons/links below 44x44px at mobile breakpoints
6. **Navigation** — desktop nav patterns that don't collapse for mobile
7. **Grid/flex issues** — multi-column layouts that don't stack on mobile
8. **Font scaling** — fixed font sizes that should use fluid `clamp()` or relative units
9. **Horizontal scroll** — elements causing horizontal scrollbar on mobile

## Guidelines Referenced

- `/guidelines/responsive/breakpoints.md`
- `/guidelines/responsive/navigation.md`
- `/guidelines/mobile/buttons.md`
- `/guidelines/mobile/spacing.md`
- `/guidelines/mobile/typography.md`
- `/guidelines/mobile/images.md`

---

**Trigger:** `audit responsive`