# Expand Parts — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand parts`
**Duration:** 15-30 minutes

---

## Objective

Analyse the current template parts inventory and identify missing global shared parts. In WordPress FSE, template parts are site-wide structural elements — Header, Footer, Sidebar, Breadcrumbs, Mobile Menu — that are shared across many templates. Each part can have multiple pattern variants (e.g., a standard header vs. a checkout distraction-free header). Approved parts are built via `continue`.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — critical rules
2. Read `/guidelines/overview-parts.md` — template part architecture
3. Read `/guidelines/overview-templates.md` — how parts are used in templates
4. Scan `/src/app/components/parts/` — existing parts inventory

---

## Execution Steps

### Phase 1: Inventory existing parts (5 min)

List all parts with their variants and usage:

| Part | Variants | Used In Templates | Pattern Files |
|------|----------|-------------------|---------------|
| Header | Main, Checkout, Transparent | All templates | HeaderRetroPattern.tsx, etc. |
| Footer | Main, Minimal | All templates | FooterRetroPattern.tsx |
| ... | ... | ... | ... |

### Phase 2: Compare against WordPress FSE template parts (5-10 min)

Standard template parts a complete theme provides:

**Structural parts:**
- [ ] Header (main site header)
  - Variants: Default, Transparent/overlay, Minimal/checkout, Sticky, Mobile
- [ ] Footer (main site footer)
  - Variants: Default/mega, Minimal, Checkout, Newsletter-focused
- [ ] Mobile menu (off-canvas navigation)
- [ ] Sidebar (shop filters, blog, account nav)
  - Variants: Shop filter, Blog, Account navigation
- [ ] Breadcrumbs

**Content parts:**
- [ ] Hero (shared hero template part that swaps patterns per page)
  - Variants: Standard, Split, Minimal, Video, Product launch
- [ ] Post meta (author, date, categories, reading time)
- [ ] Social sharing (share buttons bar)
- [ ] Comments section
- [ ] Pagination (shared across archives)
- [ ] Author bio box

**Commerce parts:**
- [ ] Mini cart (header cart flyout/dropdown)
- [ ] Search modal / search overlay
- [ ] Announcement bar (site-wide top bar)
- [ ] Cookie consent bar
- [ ] Back to top button
- [ ] Quick view modal

Mark each as: ✅ EXISTS (with variants) | ⚠️ PARTIAL (missing variants) | ❌ MISSING

### Phase 3: Analyse variant gaps (5 min)

For existing parts, check if all needed variants exist:

Example:
```
Header: ✅ Main, ❌ Checkout/distraction-free, ❌ Transparent/overlay
Footer: ✅ Main, ❌ Minimal/checkout
Hero:   ✅ Retro, ❌ Legal, ❌ DevTools, ❌ Blog archive, ❌ Blog single
```

### Phase 4: Recommend new parts and variants (5-10 min)

For each missing part or variant:

```markdown
### Part [N]: [Part Name] — [Variant]

**Component:** `/src/app/components/parts/[PartName].tsx` (or variant file)
**CSS:** `/src/styles/parts/[part-name].css`
**Type:** Structural / Content / Commerce
**Priority:** P0 (blocks page builds) / P1 (expected in theme) / P2 (enhanced)
**Used by:** [Template list]
**Pattern integration:** [Which patterns plug into this part]
**WordPress equivalent:** `parts/[part-name].html`
```

### Phase 5: Create build plan (3 min)

Add approved items to `/tasks/task-list.md`.

### Phase 6: Summary (2 min)

```
Parts expansion analysis complete.
- Existing parts: [X] with [Y] total variants
- Missing parts: [Z]
- Missing variants for existing parts: [W]
- Recommendations:
  - P0: [N] | P1: [N] | P2: [N]

→ Next: Say "continue" to build the highest-priority part.
→ Or: Say "expand templates" to see which templates need these parts.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-parts.md`
- `/guidelines/overview-templates.md`

---

**Version:** 1.0
**Trigger Word:** `expand parts`
