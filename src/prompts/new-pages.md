# New Pages — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt (Reusable Scaffold)
**Trigger Word:** `new pages`
**Duration:** 20-40 minutes per page

---

## Objective

Scaffold and build a new page template from a task list entry or user description. This is the reusable builder prompt that `expand pages` feeds into. It creates the template component, route entry, data file, and connects existing patterns into a complete page.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — critical rules (no Tailwind, BEM, dark mode, sentence case)
2. Read `/guidelines/overview-templates.md` — template architecture
3. Read `/guidelines/ROUTING_GUIDE.md` — route conventions
4. Read `/guidelines/design-tokens/Colors.md` — colour tokens
5. Read `/guidelines/design-tokens/Dark-Mode.md` — dark mode implementation
6. Read `/guidelines/design-tokens/Typography.md` — heading/typography components

---

## Parameters

The user provides (or a task list entry specifies):

| Parameter | Required | Example |
|-----------|----------|---------|
| **Page name** | ✅ | "Order tracking" |
| **Route path** | ✅ | `/account/order-tracking` |
| **Page type** | ✅ | Commerce / Content / Account / Utility |
| **Sections** | Recommended | Hero, OrderTrackingForm, FAQSection |
| **Data needs** | Optional | Order tracking mock data |

If parameters are missing, ask the user before proceeding.

---

## Execution Steps

### Phase 1: Plan the page (3-5 min)

1. Determine the template file name: `/src/app/templates/[PageName].tsx`
2. Determine the data file: `/src/app/data/[page-name]-data.ts`
3. List which existing patterns to reuse (check `/src/app/components/patterns/`)
4. List which new patterns are needed (flag for `new patterns` first)
5. Determine which header/footer variant to use

### Phase 2: Create the data file (3-5 min)

1. Create `/src/app/data/[page-name]-data.ts`
2. Define TypeScript interfaces for all page content
3. Export named constants with realistic mock data
4. ALL display text lives here — zero hardcoded strings in the template
5. Keep under 250 lines

### Phase 3: Create the template component (10-20 min)

1. Create `/src/app/templates/[PageName].tsx`
2. Follow these rules:
   - Import data from the data file
   - Import existing patterns — never duplicate pattern code
   - Use `<SiteLayout>` wrapper (or the project's layout system)
   - Use `<Heading level="N">` for all headings
   - All styling via BEM class names — zero Tailwind, zero inline styles
   - Full dark mode support via CSS variables
   - Semantic HTML (`<main>`, `<article>`, `<section>`, `<nav>`, etc.)
   - Sentence case for all headings
   - WCAG AA minimum: 44px touch targets, aria-labels on icon buttons, 4.5:1 contrast
   - `prefers-reduced-motion` respected on any animations
3. Keep under 300 lines — split into sub-components if needed

### Phase 4: Create CSS (3-5 min)

1. Create section CSS in `/src/styles/sections/[page-name].css` if page-specific styles are needed
2. Use WordPress CSS variables (`--wp--preset--*`)
3. BEM naming: `.wp-block-[page-name]`, `.wp-block-[page-name]__[element]`
4. Include dark mode via `.dark` selector and CSS variables
5. Add `@import` to `/styles/globals.css` (or the active CSS entry point)

### Phase 5: Add route (2-3 min)

1. Add import to `/routes.ts`
2. Add route entry with correct path and Component
3. Place in the correct route group (commerce, account, content, utility)

### Phase 6: Update navigation (2-3 min)

1. Add to relevant navigation data file if the page should appear in menus
2. Update sitemap data if applicable
3. Add breadcrumb data if the page is nested

### Phase 7: Verify (2-3 min)

1. Verify all imports resolve
2. Verify data file exports match template imports
3. Verify BEM class names match CSS file
4. Verify dark mode works (CSS variables defined for both modes)
5. Verify heading sentence case

### Phase 8: Summary (1 min)

```
Page created: [Page Name]
- Template: /src/app/templates/[PageName].tsx
- Data: /src/app/data/[page-name]-data.ts
- CSS: /src/styles/sections/[page-name].css
- Route: /[path]
- Patterns reused: [list]
- Patterns needed: [list — run "new patterns" to create]

→ Next: Say "new pages" again to scaffold the next page.
→ Or: Say "continue" to work on the next task.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-templates.md`
- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/design-tokens/Colors.md`
- `/guidelines/design-tokens/Typography.md`
- `/guidelines/design-tokens/Dark-Mode.md`
- `/guidelines/design-tokens/Spacing.md`
- `/guidelines/development/modern-react-coding-standards.md`

---

**Version:** 1.0
**Trigger Word:** `new pages`
