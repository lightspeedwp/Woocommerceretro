# Expand Styles — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand styles`
**Duration:** 15-30 minutes

---

## Objective

Analyse CSS coverage across the project. Identify components without dedicated CSS files, missing section presets, incomplete dark mode styles, gaps in responsive breakpoints, and opportunities to consolidate or add CSS custom properties. This is the styling counterpart to `expand blocks` / `expand patterns`.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — CSS architecture (Section 4.3)
2. Read `/guidelines/development/css-optimization-guidelines.md`
3. Read `/guidelines/styles/section-styles.md` — section presets
4. Read `/guidelines/components/SectionPresets.md` — preset class patterns
5. Read `/guidelines/design-tokens/Dark-Mode.md` — dark mode CSS vars
6. Scan `/src/styles/` directory structure

---

## Execution Steps

### Phase 1: Map CSS coverage (5-10 min)

Cross-reference components with CSS files:

**Blocks:** `/src/app/components/blocks/` ↔ `/src/styles/blocks/`
**Patterns:** `/src/app/components/patterns/` ↔ `/src/styles/sections/`
**Parts:** `/src/app/components/parts/` ↔ `/src/styles/parts/`

| Component | Has CSS File | Dark Mode | Responsive | @imported |
|-----------|-------------|-----------|------------|-----------|
| ProductCard.tsx | ✅ product-card.css | ✅ | ✅ | ✅ |
| NewComponent.tsx | ❌ | — | — | — |

### Phase 2: Audit CSS quality (5-10 min)

For existing CSS files, check:

1. **Missing dark mode** — `.dark` selector with CSS variable overrides?
2. **Missing responsive** — mobile breakpoint `@media (max-width: 768px)`?
3. **Missing reduced motion** — `@media (prefers-reduced-motion: reduce)` where animations exist?
4. **Hardcoded values** — colours, font sizes, spacing not using `--wp--preset--*` variables?
5. **Missing @import** — CSS file exists but not imported in globals.css?
6. **Over 200 lines** — needs splitting per Guidelines.md 6.2?
7. **Orphaned CSS** — CSS file exists but no component uses these class names?

### Phase 3: Identify missing CSS categories (3-5 min)

Check directory structure completeness:

```
/src/styles/
├── blocks/           ← [N] files — matches [M] block components?
│   ├── commerce/     ← product, cart, checkout blocks
│   ├── content/      ← blog, page content blocks
│   ├── forms/        ← form field blocks
│   ├── navigation/   ← menu, breadcrumb blocks
│   └── ui/           ← button, badge, modal blocks
├── sections/         ← [N] files — matches [M] pattern components?
├── parts/            ← exists? header, footer, sidebar parts
├── templates/        ← exists? template-specific layout styles
└── pages/            ← exists? page-specific overrides
```

### Phase 4: Recommend CSS additions (5-10 min)

```markdown
### Style [N]: [css-file-name].css

**Path:** `/src/styles/[category]/[file-name].css`
**Component:** [Which component this styles]
**Type:** New file / Add dark mode / Add responsive / Add reduced motion / Split file
**Priority:** P0 (component unstyled) / P1 (missing dark mode/responsive) / P2 (optimisation)
**BEM block:** `.wp-block-[name]`
```

### Phase 5: Summary (2 min)

```
Style expansion analysis complete.
- Components: [X] total, [Y] with CSS, [Z] missing CSS
- CSS files: [N] total, [M] @imported
- Dark mode coverage: [A]% of CSS files
- Responsive coverage: [B]% of CSS files
- Recommendations: P0: [N] | P1: [N] | P2: [N]

→ Next: Say "continue" to create the highest-priority CSS file.
→ Or: Say "audit css" for a detailed CSS health report.
→ Or: Say "audit styles" to detect hardcoded styles in components.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/development/css-optimization-guidelines.md`
- `/guidelines/styles/section-styles.md`
- `/guidelines/components/SectionPresets.md`
- `/guidelines/design-tokens/Dark-Mode.md`

---

**Version:** 1.0
**Trigger Word:** `expand styles`
