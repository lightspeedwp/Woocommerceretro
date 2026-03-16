# Audit Styles — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit styles`  
**Duration:** 5-10 min  
**Report:** `/reports/audits/YYYY-MM-DD_styles-audit.md`

---

## Scope

Detect hardcoded styling in component files that should use CSS variables, BEM classes, or design tokens.

## Files to Read

- `/guidelines/Guidelines.md` Section 2.1 (No Tailwind), 2.5 (WordPress CSS Variables)
- `/guidelines/development/modern-react-coding-standards.md` Section 9
- Sample 20-30 component files from `/src/app/components/`

## Checks

1. **Inline styles** — `style={{}}` attributes (exceptions: dynamic values, animations)
2. **Hardcoded colors** — hex (`#fff`), rgb(`rgb(0,0,0)`), hsl values in className or style
3. **Hardcoded spacing** — pixel values (`margin: 16px`) that should use `--wp--preset--spacing--*`
4. **Tailwind classes** — any utility classes (`flex`, `p-4`, `text-center`, `gap-2`) in className
5. **Missing BEM** — unstyled elements that should have BEM class names
6. **!important in JSX** — inline `!important` in style attributes
7. **className string concatenation** — should use `cn()` utility or template literals
8. **Font overrides** — hardcoded `fontSize`, `fontWeight`, `lineHeight` in style attributes

## Output

Write report to `/reports/audits/YYYY-MM-DD_styles-audit.md` with `Status: Unprocessed`.  
Do NOT create task lists.

---

**Trigger:** `audit styles`
