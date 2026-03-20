# Expand Functionality — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand functionality`
**Duration:** 20-40 minutes

---

## Objective

Analyse the current codebase and conversation history to identify missing WooCommerce functionality, incomplete user flows, and feature gaps. Recommend new blocks, hooks, contexts, or utilities that would make the shop experience more complete. Prioritise features that a production WooCommerce store would need.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure and component hierarchy
2. Read `/guidelines/overview-components.md` — current component inventory
3. Read `/guidelines/overview-blocks.md` — existing block components
4. Scan `/src/app/components/blocks/` — current block inventory
5. Scan `/src/app/contexts/` — current context inventory
6. Scan `/src/app/hooks/` — current hook inventory

---

## Execution Steps

### Phase 1: Audit current functionality (5-10 min)

Map all existing user flows and functional capabilities:

**Commerce flows:**
- [ ] Product discovery (search, filter, browse, categories)
- [ ] Product detail (gallery, variants, reviews, related products)
- [ ] Cart management (add, remove, update quantity, empty state)
- [ ] Checkout (form, payment, shipping, order summary)
- [ ] Order confirmation / thank you page
- [ ] Account (login, register, profile, order history, addresses)
- [ ] Wishlist / favourites
- [ ] Compare products

**Content flows:**
- [ ] Blog / news (archive, single post, categories, tags)
- [ ] About / company info
- [ ] Contact / support
- [ ] FAQ
- [ ] Terms / privacy / legal pages

**Shop features:**
- [ ] Flash sales / promotions
- [ ] Coupons / discount codes
- [ ] Product reviews / ratings
- [ ] Stock indicators (in stock, low stock, out of stock)
- [ ] Size / variant selectors
- [ ] Recently viewed
- [ ] Recommendations engine
- [ ] Quick view

**Technical capabilities:**
- [ ] Responsive navigation (mobile menu, mega menu)
- [ ] Search with autocomplete
- [ ] Pagination / infinite scroll
- [ ] Toast notifications
- [ ] Loading skeletons
- [ ] Error boundaries
- [ ] 404 handling

Mark each as: ✅ EXISTS | ⚠️ PARTIAL | ❌ MISSING

### Phase 2: Identify gaps (5-10 min)

From the audit above, prioritise missing features:

| Priority | Criteria |
|----------|----------|
| **P0 — Essential** | Core commerce flow is broken without it (e.g., missing checkout step) |
| **P1 — Expected** | Standard WooCommerce feature users expect (e.g., coupon codes, order tracking) |
| **P2 — Enhanced** | Differentiating feature that improves UX (e.g., compare products, wishlists) |
| **P3 — Nice to have** | Polish feature that adds delight (e.g., animations, micro-interactions) |

### Phase 3: Analyse conversation history (5-10 min)

Review the current session for:

1. Features the user mentioned wanting but hasn't built yet
2. User flows that were discussed but not implemented
3. Components that were planned but deferred
4. Pain points in the current shopping experience

### Phase 4: Generate recommendations (5-10 min)

For each recommendation:

```markdown
### Recommendation [N]: [Feature Name]

**Type:** Block / Pattern / Hook / Context / Utility
**Priority:** P0 / P1 / P2 / P3
**Problem:** [What gap this fills]
**Implementation:** [Brief technical approach — which files, which patterns]
**Dependencies:** [Other components/data this needs]
**Estimated effort:** [S/M/L]
**Related trigger:** [Which existing trigger would build this, or suggest `continue`]
```

### Phase 5: Create task list (5 min)

For recommendations the user approves:

1. Create tasks in `/tasks/task-list.md` or a new domain task list
2. Group by priority (P0 first)
3. Include file paths, component names, and data file references
4. Tag each task with the trigger that would execute it (e.g., `→ run: new patterns`)

### Phase 6: Summary (2 min)

```
Functionality expansion analysis complete.
- Features audited: [X] across [Y] categories
- Existing: [A] ✅ | Partial: [B] ⚠️ | Missing: [C] ❌
- Recommendations: [D]
  - P0 Essential: [N]
  - P1 Expected: [N]
  - P2 Enhanced: [N]
  - P3 Nice to have: [N]

→ Next: Say "continue" to implement the highest-priority recommendation.
→ Or: Say "new patterns" / "new pages" / "new templates" to scaffold specific items.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-components.md`
- `/guidelines/overview-blocks.md`
- `/guidelines/overview-patterns.md`
- `/guidelines/overview-templates.md`

---

**Version:** 1.0
**Trigger Word:** `expand functionality`
