# Expand Templates — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand templates`
**Duration:** 15-30 minutes

---

## Objective

Analyse the current template inventory and identify missing template variations that WordPress Full Site Editing (FSE) would provide. In WordPress FSE, templates define the overall page structure — this prompt identifies missing template types, variations, and template parts. Approved templates are built using the `new templates` trigger.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — project structure
2. Read `/guidelines/overview-templates.md` — template architecture and naming
3. Read `/guidelines/overview-parts.md` — template parts (header, footer, etc.)
4. Scan `/src/app/templates/` — existing templates
5. Scan `/src/app/components/parts/` — existing template parts

---

## Execution Steps

### Phase 1: Inventory existing templates (5 min)

List all templates with their type classification:

| Template File | WordPress Equivalent | Type | Patterns Used |
|--------------|---------------------|------|---------------|
| `Home.tsx` | `front-page.html` | Commerce | Hero, FeaturedProducts, etc. |
| ... | ... | ... | ... |

### Phase 2: Compare against WordPress FSE template hierarchy (5-10 min)

WordPress FSE provides these standard templates — check which exist:

**Core templates:**
- [ ] `front-page` — Home page
- [ ] `index` — Blog/post archive fallback
- [ ] `single` — Single blog post
- [ ] `page` — Generic page
- [ ] `archive` — Archive listing
- [ ] `search` — Search results
- [ ] `404` — Not found

**WooCommerce templates:**
- [ ] `archive-product` — Shop / product archive
- [ ] `single-product` — Product detail
- [ ] `taxonomy-product_cat` — Product category archive
- [ ] `taxonomy-product_tag` — Product tag archive

**Account templates:**
- [ ] `page-my-account` — Account dashboard
- [ ] `page-checkout` — Checkout flow
- [ ] `page-cart` — Shopping cart

**Template variations:**
- [ ] Alternative hero layouts (minimal, full-bleed, split, video)
- [ ] Alternative product archive layouts (grid, list, masonry)
- [ ] Alternative header variations (transparent, sticky, minimal)
- [ ] Alternative footer variations (mega, minimal, newsletter)

**Template parts:**
- [ ] Header (main, minimal, transparent, checkout)
- [ ] Footer (main, minimal, checkout)
- [ ] Sidebar (shop filters, blog, account navigation)
- [ ] Mini cart
- [ ] Breadcrumbs

### Phase 3: Recommend new templates (5-10 min)

For each missing template:

```markdown
### Template [N]: [Template Name]

**WordPress equivalent:** `[wp-template-name].html`
**File:** `/src/app/templates/[TemplateName].tsx`
**Type:** Core / Commerce / Account / Variation
**Priority:** P0 (blocks user flow) / P1 (standard WP template) / P2 (variation)
**Layout:**
  - Header: [which header part/variant]
  - Sections: [ordered list of patterns]
  - Footer: [which footer part/variant]
**Data dependencies:** [data files needed]
**Pattern dependencies:** [new patterns needed — create via "new patterns"]
```

### Phase 4: Create build plan (3-5 min)

For each approved template:

1. Add a task to `/tasks/task-list.md`:
   ```
   - [ ] Create [TemplateName] template → run: `new templates`
     - WordPress equivalent: [wp-template]
     - Patterns needed: [list — create first via "new patterns" if missing]
     - Data file: [data file path]
     - Route: [route path to add]
   ```
2. Order by dependency — patterns before templates, templates before pages
3. Flag templates that need new patterns created first

### Phase 5: Summary (2 min)

```
Template expansion analysis complete.
- Existing templates: [X]
- Missing templates identified: [Y]
- Missing template parts: [Z]
- Recommendations:
  - P0 Core: [N]
  - P1 Standard: [N]
  - P2 Variations: [N]

→ Next: Say "new templates" to scaffold the first approved template.
→ Or: Say "expand patterns" to identify patterns needed for new templates.
→ Or: Say "continue" to build the highest-priority template.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-templates.md`
- `/guidelines/overview-parts.md`
- `/guidelines/overview-sections.md`

---

**Version:** 1.0
**Trigger Word:** `expand templates`
