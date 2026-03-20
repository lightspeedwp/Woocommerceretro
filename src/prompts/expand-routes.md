# Expand Routes — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand routes`
**Duration:** 15-25 minutes

---

## Objective

Analyse the navigation architecture for UX dead-ends, orphaned pages, missing breadcrumbs, and incomplete user journeys. Unlike `update routes` (which fixes broken links) or `audit routes` (which reports compliance), this prompt identifies **structural navigation gaps** — pages users can't easily reach, flows with no back-navigation, and missing cross-linking opportunities.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — project structure
2. Read `/guidelines/ROUTING_GUIDE.md` — route conventions
3. Read `/guidelines/NAVIGATION_QUICK_REFERENCE.md` — navigation architecture
4. Read `/routes.ts` — current routes
5. Scan navigation data files

---

## Execution Steps

### Phase 1: Map navigation graph (5-10 min)

Build a directed graph of page-to-page navigation:

For each route, document:
- **Inbound links:** Which pages link TO this page?
- **Outbound links:** Which pages does this page link TO?
- **Breadcrumb trail:** What is the breadcrumb path?
- **Parent route:** What is the logical parent in the hierarchy?

### Phase 2: Identify dead-ends (5 min)

A dead-end is a page with no clear next action:

1. **Pages with zero outbound links** (except header/footer) → needs CTAs or related content
2. **Pages not linked from any navigation menu** → orphaned, needs menu entry
3. **Pages with no breadcrumbs** → user can't navigate up the hierarchy
4. **Post-action pages with no next step** (e.g., order confirmation with no "continue shopping" link)
5. **Error pages with no recovery path** (404 with no suggestions)

### Phase 3: Analyse user journeys (5-10 min)

Trace critical user flows for completeness:

**Shopping flow:**
```
Home → Category → Product → Cart → Checkout → Confirmation → ???
```
Is there a "continue shopping" link? An "order tracking" link? A "view order history" link?

**Content flow:**
```
Blog archive → Blog post → ??? 
```
Are there "related posts"? "Next/previous" navigation? "Back to blog" links?

**Account flow:**
```
Login → Dashboard → Orders → Order detail → ???
```
Can the user reach all account sub-pages from the dashboard? Is there "reorder" from order detail?

### Phase 4: Recommend navigation improvements (5 min)

```markdown
### Route Gap [N]: [Description]

**Type:** Dead-end / Orphaned / Missing breadcrumb / Missing cross-link / Incomplete flow
**Page:** `/[path]`
**Problem:** [What the user can't do]
**Solution:** [Add link / Add breadcrumb / Add CTA / Add to menu]
**Priority:** P0 (breaks user flow) / P1 (confusing UX) / P2 (missed opportunity)
```

### Phase 5: Summary (2 min)

```
Route expansion analysis complete.
- Routes analysed: [X]
- Dead-end pages: [Y]
- Orphaned pages: [Z]
- Missing breadcrumbs: [W]
- Incomplete flows: [N]
- Recommendations: P0: [N] | P1: [N] | P2: [N]

→ Next: Say "update routes" to fix navigation issues.
→ Or: Say "expand pages" to identify missing pages in the flows.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md`

---

**Version:** 1.0
**Trigger Word:** `expand routes`
