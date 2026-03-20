# Expand Contexts — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand contexts`
**Duration:** 15-30 minutes

---

## Objective

Analyse the current React context inventory and identify missing contexts that would provide shared state management across components. Contexts avoid prop-drilling and centralise state for features like wishlists, product comparison, notifications, and recently viewed items. Approved contexts are built via `continue`.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — project structure
2. Read `/guidelines/overview-components.md` — component hierarchy
3. Scan `/src/app/contexts/` — existing context files
4. Scan `/src/app/components/` — find prop-drilling patterns and local state that should be global

---

## Execution Steps

### Phase 1: Inventory existing contexts (3 min)

| Context | File | Provides | Used By |
|---------|------|----------|---------|
| CartContext | cart-context.tsx | Cart items, add/remove/update | CartPage, MiniCart, ProductCard |
| ... | ... | ... | ... |

### Phase 2: Identify missing contexts (5-10 min)

Standard WooCommerce store contexts:

**Commerce:**
- [ ] CartContext — cart state, add/remove/update quantity, totals
- [ ] WishlistContext — saved items, add/remove, persistence
- [ ] CompareContext — compare list, add/remove, max items
- [ ] RecentlyViewedContext — view history tracking, max items
- [ ] CheckoutContext — checkout form state, step tracking, validation

**UI/UX:**
- [ ] ThemeContext — dark mode toggle, theme preferences
- [ ] SiteLayoutContext — header/footer variant, sidebar visibility
- [ ] NotificationContext — toast queue, add/dismiss, auto-dismiss timers
- [ ] ModalContext — modal stack, open/close, focus trapping
- [ ] SearchContext — search query, results, filters, suggestions

**User:**
- [ ] AuthContext — login state, user profile, permissions
- [ ] PreferencesContext — currency, language, accessibility settings

**Content:**
- [ ] NavigationContext — breadcrumbs, active menu item, mobile menu state

### Phase 3: Scan for prop-drilling (5-10 min)

Search components for patterns that indicate a missing context:

1. **Same prop passed through 3+ component levels** → needs context
2. **Local state duplicated in sibling components** → needs shared context
3. **Event handlers passed as props through intermediaries** → needs context
4. **localStorage reads/writes scattered across components** → needs context with persistence

### Phase 4: Recommend new contexts (5-10 min)

For each recommendation:

```markdown
### Context [N]: [ContextName]

**File:** `/src/app/contexts/[context-name].tsx`
**Provides:** [State shape and actions]
**Priority:** P0 (blocks features) / P1 (improves architecture) / P2 (future)
**Consumers:** [Component list that would use this]
**Persistence:** None / localStorage / sessionStorage
**Problem it solves:** [What prop-drilling or duplication this eliminates]
```

### Phase 5: Summary (2 min)

```
Context expansion analysis complete.
- Existing contexts: [X]
- Missing contexts: [Y]
- Prop-drilling patterns found: [Z]
- Recommendations: P0: [N] | P1: [N] | P2: [N]

→ Next: Say "continue" to build the highest-priority context.
→ Or: Say "expand hooks" to identify companion hooks.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-components.md`
- `/guidelines/development/modern-react-coding-standards.md`

---

**Version:** 1.0
**Trigger Word:** `expand contexts`
