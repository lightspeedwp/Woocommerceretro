# Audit -- Routing and 404/Page Not Loading Issues

**What this is:** Subprompt audit (React Router)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/04_audit_routing_404s/YYYY-MM-DD_04_audit_routing_404s.md`

---

## Objective

Find and explain route config mismatches, broken links, missing route elements producing "page not loading", and route ordering bugs.

---

## Prerequisites

1. Read: `/guidelines/ROUTING_GUIDE.md`
2. Read: `/guidelines/NAVIGATION_QUICK_REFERENCE.md`
3. Verify: Agreed URL patterns are:
   - `/product/:slug` for products
   - `/category/:slug` for product categories
   - `/tag/:slug` for product tags
   - `/blog/:slug` for blog posts

---

## Execution Steps

### Phase 1: Route Configuration Audit

**Duration:** 10 min

- [ ] Read all router configuration files (routes.ts, any route constants)
- [ ] Verify route ordering (specific routes before generic catch-alls)
- [ ] Check for duplicate route paths
- [ ] Verify all route components exist and are correctly imported
- [ ] Check 404/catch-all route implementation

### Phase 2: Link Integrity

**Duration:** 10 min

- [ ] Audit navigation components (header, footer, mega menus) for correct paths
- [ ] Check sitemap data against actual route definitions
- [ ] Verify all `<Link>` and `<NavLink>` components use correct `to` props
- [ ] Search for hardcoded URLs that should be dynamic (`:slug` params)
- [ ] Check for `useParams()` usage matching route param names

---

## Output (in report)

- Table of broken routes/links: "from" component, "to" path, reason, fix
- Route ordering issues (specific before generic)
- Missing route components or lazy-load failures
- Recommended route naming conventions and link helpers
- Proposed canonical route map (all routes in one table)
- At least 10 link/route checks documented

---

## Done Criteria

- [ ] Report includes at least 10 link/route checks with pass/fail
- [ ] A proposed canonical route map is included
- [ ] Route ordering is verified (no shadowed routes)
- [ ] All navigation components are checked for link accuracy
- [ ] 404 page behaviour is verified

---

## Guidelines Referenced

- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md`
- `/guidelines/PATH_ALIAS_STRATEGY.md`
