# Update Sitemap — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `update sitemap`
**Duration:** 10-20 minutes

---

## Objective

Synchronise the Sitemap component and any sitemap data files with the current route configuration in `/routes.ts`. Ensure every route appears in the correct section, statistics are accurate, and no dead links exist.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/ROUTING_GUIDE.md` — route naming conventions
3. Read `/guidelines/NAVIGATION_QUICK_REFERENCE.md` — navigation architecture

---

## Execution Steps

### Phase 1: Extract current routes (3 min)

1. Read `/routes.ts` (or `/routes.minimal.ts` if active)
2. Build a complete route list: `{ path, Component, label }`
3. Count totals: static routes, dynamic routes, total routes

### Phase 2: Compare with sitemap (3 min)

1. Read the Sitemap component (likely `/src/app/components/pages/Sitemap.tsx` or `/src/app/templates/Sitemap.tsx`)
2. Read any sitemap data file (e.g., `/src/app/data/sitemap-data.ts`)
3. Cross-reference: find routes missing from the sitemap, and sitemap entries with no matching route

### Phase 3: Update sitemap (5-10 min)

1. Add missing routes to the correct sitemap section
2. Remove dead sitemap entries (routes that no longer exist)
3. Update route count statistics
4. Verify section groupings match the route structure
5. Update labels to match current page titles (sentence case per Guidelines.md 2.6)

### Phase 4: Verify navigation data (3 min)

1. Check that navigation data files (`nav-data.ts`, `header-nav.ts`, etc.) match the sitemap
2. Flag any navigation links pointing to non-existent routes
3. Fix broken navigation links if safe to do so

### Phase 5: Summary (2 min)

```
Sitemap updated.
- Routes in routes.ts: [X]
- Routes in sitemap: [Y] (was [Z])
- Added: [A] routes
- Removed: [B] dead entries
- Statistics updated: total [X], static [Y], dynamic [Z]

→ Next: Say "audit sitemap" to verify full sitemap compliance.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md`

---

**Version:** 1.0
**Trigger Word:** `update sitemap`
