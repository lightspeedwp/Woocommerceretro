# Update Routes — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `update routes`
**Duration:** 20-40 minutes

---

## Objective

Validate and repair all routes, links, and navigation data. Ensure every template has a route, every route has a valid component, and all navigation menus reference valid paths. This is the same workflow as `fix routes` — both triggers execute this prompt.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/ROUTING_GUIDE.md` — route structure and conventions
3. Read `/guidelines/NAVIGATION_QUICK_REFERENCE.md` — navigation architecture

---

## Execution Steps

### Phase 1: Route inventory (5 min)

1. Read `/routes.ts` — extract all route definitions
2. List all template files in `/src/app/templates/`
3. Cross-reference:
   - Templates without routes → need route entries
   - Routes without templates → need template files or removal

### Phase 2: Import validation (5 min)

For each route in `/routes.ts`:
1. Verify the `Component` import resolves to an existing file
2. Verify the component has a default or named export matching the import
3. Fix broken imports

### Phase 3: Navigation data sync (5-10 min)

1. Read all navigation data files (`nav-data.ts`, `header-nav.ts`, `footer-nav.ts`, etc.)
2. Verify every navigation link `path` matches a valid route
3. Fix dead links — update paths or remove entries
4. Ensure labels match current page titles (sentence case)

### Phase 4: Link audit (5-10 min)

1. Search all `.tsx` files for `<Link to="..."` and `href="..."` patterns
2. Verify internal links point to valid routes
3. Fix or flag broken internal links

### Phase 5: Apply fixes (3-5 min)

1. Add missing route entries
2. Fix broken imports
3. Update navigation data
4. Fix broken links in components

### Phase 6: Summary (2 min)

```
Routes updated.
- Routes in routes.ts: [X]
- Templates on disk: [Y]
- Routes added: [A]
- Routes fixed: [B]
- Navigation links fixed: [C]
- Internal links fixed: [D]

→ Next: Say "audit routes" to verify route compliance.
→ Or: Say "update sitemap" to sync the sitemap component.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md`

---

**Version:** 1.0
**Trigger Word:** `update routes`
