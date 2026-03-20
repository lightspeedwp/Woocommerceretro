# Expand Pages — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand pages`
**Duration:** 15-30 minutes

---

## Objective

Analyse the current route structure and sitemap to identify missing pages that a complete WooCommerce store would need. Generate a prioritised list of new page recommendations with wireframe-level descriptions. Approved pages are built using the `new pages` trigger.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — project structure
2. Read `/guidelines/overview-templates.md` — template architecture
3. Read `/guidelines/ROUTING_GUIDE.md` — route conventions
4. Read `/routes.ts` — current route definitions
5. Scan `/src/app/templates/` — existing template files

---

## Execution Steps

### Phase 1: Map existing pages (5 min)

Build a complete page inventory from routes and templates:

```
Route path → Template component → Page type (commerce / content / utility / account)
```

### Phase 2: Identify missing pages (5-10 min)

Compare against a complete WooCommerce store checklist:

**Commerce pages:**
- [ ] Shop / product archive (main, by category, by tag)
- [ ] Single product detail
- [ ] Cart
- [ ] Checkout
- [ ] Order confirmation / thank you
- [ ] Order tracking
- [ ] Product comparison

**Account pages:**
- [ ] Login
- [ ] Register
- [ ] My account dashboard
- [ ] Order history
- [ ] Order detail
- [ ] Addresses
- [ ] Payment methods
- [ ] Account settings
- [ ] Wishlist / saved items

**Content pages:**
- [ ] Home
- [ ] About us
- [ ] Contact
- [ ] Blog archive
- [ ] Blog single post
- [ ] FAQ
- [ ] Shipping & returns
- [ ] Privacy policy
- [ ] Terms & conditions
- [ ] Sitemap
- [ ] 404 not found

**Marketing pages:**
- [ ] Sale / promotions
- [ ] Gift cards
- [ ] Lookbook / collection showcase
- [ ] Brand story / our story
- [ ] Store locator
- [ ] Affiliate / referral

Mark each as: ✅ EXISTS | ❌ MISSING

### Phase 3: Recommend new pages (5-10 min)

For each missing page, provide:

```markdown
### Page [N]: [Page Name]

**Route:** `/[path]`
**Template:** `[TemplateName].tsx`
**Type:** Commerce / Content / Account / Utility
**Priority:** P0 (core flow) / P1 (expected) / P2 (enhanced)
**Sections:** [List the pattern sections this page would use]
  - Hero variant: [which hero pattern]
  - Content sections: [list 3-6 patterns needed]
  - CTA: [which CTA pattern]
**Data file:** `/src/app/data/[page]-data.ts`
**Depends on:** [Existing components it reuses, new components it needs]
```

### Phase 4: Create build plan (3-5 min)

For each approved page:

1. Add a task to `/tasks/task-list.md`:
   ```
   - [ ] Create [PageName] page → run: `new pages`
     - Route: /[path]
     - Template: [TemplateName].tsx
     - Sections: [list]
     - Data: [data file]
   ```
2. Note which existing patterns can be reused vs which need creating first (→ `new patterns`)
3. Note which data files need creating (→ `update data`)

### Phase 5: Summary (2 min)

```
Page expansion analysis complete.
- Existing pages: [X]
- Missing pages identified: [Y]
- Recommendations:
  - P0 Core: [N] pages
  - P1 Expected: [N] pages
  - P2 Enhanced: [N] pages

→ Next: Say "new pages" to scaffold the first approved page.
→ Or: Say "expand patterns" to identify patterns needed for new pages.
→ Or: Say "continue" to build the highest-priority page.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-templates.md`
- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md`

---

**Version:** 1.0
**Trigger Word:** `expand pages`
