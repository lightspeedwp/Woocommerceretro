# Expand Patterns — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand patterns`
**Duration:** 15-30 minutes

---

## Objective

Analyse the current pattern inventory and identify missing reusable section patterns that a complete WooCommerce store would need. Patterns are the building blocks of templates — reusable content sections like hero banners, product grids, testimonial carousels, and CTAs. Approved patterns are built using the `new patterns` trigger.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — project structure
2. Read `/guidelines/overview-patterns.md` — pattern architecture and naming
3. Read `/guidelines/overview-sections.md` — section styling and WordPress alignment
4. Read `/guidelines/components/SectionPresets.md` — section class patterns
5. Scan `/src/app/components/patterns/` — existing pattern inventory
6. Scan `/src/styles/sections/` — existing section CSS files

---

## Execution Steps

### Phase 1: Inventory existing patterns (5 min)

List all patterns with classification:

| Pattern File | Section Type | Used In Templates | Has CSS | Has Data File |
|-------------|-------------|-------------------|---------|---------------|
| `Hero.tsx` | Hero | Home, About | ✅ | ✅ |
| `FAQSection.tsx` | Content | FAQ, Contact | ✅ | ✅ |
| ... | ... | ... | ... | ... |

Count patterns by category:
- Hero variants: [N]
- Product display: [N]
- Content sections: [N]
- CTA / conversion: [N]
- Social proof: [N]
- Navigation: [N]
- Utility: [N]

### Phase 2: Identify missing patterns (5-10 min)

Compare against a comprehensive WooCommerce pattern library:

**Hero patterns:**
- [ ] Standard hero (image + text + CTA)
- [ ] Split hero (50/50 image/content)
- [ ] Video hero
- [ ] Minimal hero (text only)
- [ ] Carousel hero (multiple slides)
- [ ] Product launch hero (countdown + product)

**Product display patterns:**
- [ ] Product grid (standard, with filters)
- [ ] Product carousel / slider
- [ ] Featured product (single highlight)
- [ ] Product comparison table
- [ ] Best sellers row
- [ ] New arrivals row
- [ ] Sale items grid
- [ ] Category showcase grid
- [ ] Quick entry tiles (category icons)

**Content patterns:**
- [ ] About / brand story section
- [ ] Team / staff grid
- [ ] Timeline / history
- [ ] Values / mission grid
- [ ] How it works (steps)
- [ ] FAQ accordion
- [ ] Blog post grid
- [ ] Video gallery
- [ ] Image gallery / lightbox

**Social proof patterns:**
- [ ] Testimonial carousel
- [ ] Customer reviews section
- [ ] Star ratings summary
- [ ] Trust badges / security band
- [ ] Brand logo grid (partners/press)
- [ ] Stats / numbers section
- [ ] Instagram feed
- [ ] Social media feed

**CTA / conversion patterns:**
- [ ] Newsletter signup
- [ ] Newsletter CTA (full-width banner)
- [ ] Promotional banner (sale, discount)
- [ ] Flash sale countdown
- [ ] Free shipping threshold bar
- [ ] Exit intent popup
- [ ] Cookie consent bar
- [ ] Announcement bar

**Commerce utility patterns:**
- [ ] Recently viewed products
- [ ] Related products
- [ ] Cross-sell / upsell section
- [ ] Shipping info section
- [ ] Return policy section
- [ ] Size guide
- [ ] Product tabs (description, reviews, specs)
- [ ] Add to cart form
- [ ] Product gallery

**Navigation patterns:**
- [ ] Breadcrumbs
- [ ] Pagination
- [ ] Category navigation
- [ ] Filter sidebar
- [ ] Search results layout
- [ ] Mega menu panel
- [ ] Back to top button

Mark each as: ✅ EXISTS | ⚠️ PARTIAL | ❌ MISSING

### Phase 3: Recommend new patterns (5-10 min)

For each missing pattern:

```markdown
### Pattern [N]: [Pattern Name]

**Component:** `/src/app/components/patterns/[PatternName].tsx`
**CSS:** `/src/styles/sections/[pattern-name].css`
**Section type:** Hero / Product / Content / Social Proof / CTA / Commerce / Navigation
**Priority:** P0 (needed by existing templates) / P1 (needed by planned pages) / P2 (nice to have)
**Used by:** [Which templates/pages would use this]
**Props:** [Key component props]
**Data file:** `/src/app/data/[pattern]-data.ts`
**Visual description:** [2-3 sentence wireframe-level description of what it looks like]
**Retro adaptation:** [How it fits the PlayPocket retro gaming aesthetic]
```

### Phase 4: Dependency analysis (3-5 min)

For each recommended pattern, check:

1. **Block dependencies** — does it need new block components? (e.g., a review card block for a reviews section)
2. **Data dependencies** — does it need a new data file?
3. **CSS dependencies** — does it need new section CSS?
4. **Icon dependencies** — does it need new Phosphor icons?

Create a build order: blocks → data files → CSS → patterns

### Phase 5: Create build plan (3-5 min)

For each approved pattern:

1. Add a task to `/tasks/task-list.md`:
   ```
   - [ ] Create [PatternName] pattern → run: `new patterns`
     - Component: /src/app/components/patterns/[PatternName].tsx
     - CSS: /src/styles/sections/[pattern-name].css
     - Data: /src/app/data/[pattern]-data.ts
     - Blocks needed: [list any new blocks]
     - Used by: [template list]
   ```
2. Group by section type
3. Order by dependency (blocks before patterns that use them)

### Phase 6: Summary (2 min)

```
Pattern expansion analysis complete.
- Existing patterns: [X] across [Y] categories
- Missing patterns identified: [Z]
- Recommendations:
  - P0 (needed now): [N]
  - P1 (planned pages): [N]
  - P2 (nice to have): [N]
- New blocks needed first: [N]

→ Next: Say "new patterns" to scaffold the first approved pattern.
→ Or: Say "expand functionality" to identify feature gaps.
→ Or: Say "continue" to build the highest-priority pattern.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-patterns.md`
- `/guidelines/overview-sections.md`
- `/guidelines/overview-blocks.md`
- `/guidelines/components/SectionPresets.md`
- `/guidelines/design-tokens/Colors.md`
- `/guidelines/design-tokens/Dark-Mode.md`

---

**Version:** 1.0
**Trigger Word:** `expand patterns`
