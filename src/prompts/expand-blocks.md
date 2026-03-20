# Expand Blocks — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand blocks`
**Duration:** 20-40 minutes

---

## Objective

Analyse the current block component inventory and identify missing atomic block components. Blocks are the smallest composable units — ProductCard, PriceTag, StarRating, AddToCartButton, Badge, etc. Patterns compose blocks; blocks do not compose other blocks. Approved blocks are built via `continue`.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — critical rules
2. Read `/guidelines/overview-blocks.md` — block architecture
3. Read `/guidelines/overview-components.md` — component hierarchy
4. Scan `/src/app/components/blocks/` — existing block inventory
5. Scan `/src/app/components/patterns/` — see which blocks patterns currently inline (extraction candidates)

---

## Execution Steps

### Phase 1: Inventory existing blocks (5 min)

List all blocks with classification:

| Block File | Category | Used By (Patterns) | Has CSS | Has Data |
|-----------|----------|---------------------|---------|----------|

Count by category:
- Product blocks: [N]
- Cart/commerce blocks: [N]
- Content blocks: [N]
- Navigation blocks: [N]
- Form blocks: [N]
- UI utility blocks: [N]

### Phase 2: Scan patterns for inline block code (5-10 min)

Many patterns contain markup that should be extracted into reusable blocks. Scan `/src/app/components/patterns/` for:

1. **Repeated card markup** across 2+ patterns → extract to a shared block
2. **Inline product display code** → extract to ProductCard, PriceTag, etc.
3. **Inline button variations** → extract to Button block with variants
4. **Inline badge/tag markup** → extract to Badge block
5. **Inline rating displays** → extract to StarRating block
6. **Inline form fields** → extract to FormField block

### Phase 3: Compare against WooCommerce block library (5-10 min)

WordPress/WooCommerce provides these standard blocks — check which exist:

**Product blocks:**
- [ ] ProductCard (image, title, price, rating, add-to-cart)
- [ ] ProductImage / ProductGallery
- [ ] ProductTitle
- [ ] ProductPrice / PriceTag
- [ ] ProductRating / StarRating
- [ ] AddToCartButton
- [ ] ProductBadge (sale, new, out of stock)
- [ ] ProductMeta (SKU, categories, tags)
- [ ] QuantitySelector
- [ ] VariantSelector (size, colour)

**Cart blocks:**
- [ ] CartItem (image, title, quantity, price, remove)
- [ ] CartSummary (subtotal, shipping, tax, total)
- [ ] CouponInput
- [ ] CartNotice (stock warnings, shipping thresholds)

**Content blocks:**
- [ ] Card (generic: image, title, description, CTA)
- [ ] FeatureCard (icon, title, description)
- [ ] TestimonialCard (quote, author, avatar, rating)
- [ ] BlogCard (image, title, excerpt, date, author)
- [ ] TeamMemberCard (photo, name, role, bio, social links)
- [ ] TimelineItem (date, title, description)
- [ ] StatCard (number, label, icon)

**UI blocks:**
- [ ] Button (primary, secondary, ghost, link variants)
- [ ] Badge / Tag
- [ ] Breadcrumb / BreadcrumbItem
- [ ] Accordion / AccordionItem
- [ ] Tab / TabPanel
- [ ] Modal / Dialog
- [ ] Toast / Notification
- [ ] Skeleton / LoadingPlaceholder
- [ ] EmptyState
- [ ] Pagination
- [ ] SearchInput
- [ ] FilterChip
- [ ] AnnouncementBar
- [ ] Tooltip

**Form blocks:**
- [ ] FormField (label, input, error message)
- [ ] SelectField
- [ ] CheckboxField
- [ ] RadioGroup
- [ ] TextareaField

Mark each as: ✅ EXISTS | ⚠️ INLINE (in pattern, needs extraction) | ❌ MISSING

### Phase 4: Recommend new blocks (5-10 min)

For each missing or inline block:

```markdown
### Block [N]: [Block Name]

**Component:** `/src/app/components/blocks/[BlockName].tsx`
**CSS:** `/src/styles/blocks/[category]/[block-name].css`
**Category:** Product / Cart / Content / UI / Form
**Priority:** P0 (used in 3+ patterns) / P1 (used in 1-2 patterns) / P2 (future use)
**Currently inlined in:** [Pattern list, if extracting]
**Props:** [Key props and variants]
**WordPress equivalent:** `wp:woocommerce/[block-name]` or `wp:group`
```

### Phase 5: Create build plan (3-5 min)

For approved blocks, add tasks to `/tasks/task-list.md`:
```
- [ ] Create [BlockName] block
  - Component: /src/app/components/blocks/[BlockName].tsx
  - CSS: /src/styles/blocks/[category]/[block-name].css
  - Extract from: [pattern list if applicable]
  - Used by: [pattern list]
```

### Phase 6: Summary (2 min)

```
Block expansion analysis complete.
- Existing blocks: [X]
- Inline blocks (need extraction): [Y]
- Missing blocks: [Z]
- Recommendations:
  - P0 (multi-pattern): [N]
  - P1 (single-pattern): [N]
  - P2 (future): [N]

→ Next: Say "continue" to build the highest-priority block.
→ Or: Say "expand patterns" to see which patterns need these blocks.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-blocks.md`
- `/guidelines/overview-components.md`
- `/guidelines/development/bem-methodology.md`

---

**Version:** 1.0
**Trigger Word:** `expand blocks`
