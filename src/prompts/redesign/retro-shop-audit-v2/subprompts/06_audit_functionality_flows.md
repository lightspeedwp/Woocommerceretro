# Audit -- Functional Flows (filters, cart, search, etc.)

**What this is:** Subprompt audit (core UX flows)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/06_audit_functionality_flows/YYYY-MM-DD_06_audit_functionality_flows.md`

---

## Objective

Verify that key ecommerce flows work correctly and are internally consistent: filters, cart add/remove/update, search + autocomplete, checkout progression, wishlist, comparison, and account management.

---

## Prerequisites

1. Read: `/guidelines/overview-components.md`
2. Read: `/guidelines/overview-blocks.md`
3. Read: `/guidelines/overview-patterns.md`
4. Verify: Cart context/state module exists and is functional

---

## Execution Steps

### Phase 1: Core Commerce Flows

**Duration:** 15 min

- [ ] **Cart flow:** Add to cart, update quantity, remove item, view totals, apply coupon
- [ ] **Search flow:** Search input, autocomplete/suggestions, results display, empty state
- [ ] **Filter flow:** Sidebar filters, active filter display, clear filters, URL state sync
- [ ] **Product flow:** Gallery, variant selection, add to cart, related products

### Phase 2: Secondary Flows

**Duration:** 15 min

- [ ] **Checkout flow:** Step progression, form validation, order summary, place order
- [ ] **Account flow:** Login state, order history, profile display
- [ ] **Wishlist flow:** Add/remove items, view wishlist, move to cart
- [ ] **Comparison flow:** Add to compare, side-by-side view, remove from compare
- [ ] **Subscription/Membership flow:** Plan selection via URL slug, plan comparison

---

## Output (in report)

- Pass/fail matrix per flow (each flow broken into sub-steps)
- Bugs with file pointers and suspected root causes
- Missing flow steps (e.g., no empty cart state, no search error handling)
- Data source verification (mock data completeness for each flow)
- Context/state management issues (stale state, missing providers)
- At least 10 functional assertions documented

---

## Done Criteria

- [ ] Report includes a flow checklist with pass/fail per step
- [ ] At least 10 functional assertions are documented
- [ ] Each bug includes: component file, expected behaviour, actual behaviour
- [ ] Mock data completeness is verified for all major flows
- [ ] Context providers are verified as correctly wrapping relevant routes

---

## Guidelines Referenced

- `/guidelines/overview-components.md`
- `/guidelines/overview-blocks.md`
- `/guidelines/overview-patterns.md`
- `/guidelines/overview-parts.md`
