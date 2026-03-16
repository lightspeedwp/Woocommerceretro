# Audit -- Performance (loading, rendering, bundle hotspots)

**What this is:** Subprompt audit (perf)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/09_audit_performance/YYYY-MM-DD_09_audit_performance.md`

---

## Objective

Identify slow-loading or rendering hotspots and recommend fixes that do not regress UX or retro aesthetic quality.

---

## Prerequisites

1. Read: `/guidelines/development/css-optimization-guidelines.md`
2. Read: `/guidelines/mobile/performance.md`
3. Read: `/guidelines/mobile/images.md`
4. Read: `/guidelines/mobile/animations.md`

---

## Execution Steps

### Phase 1: CSS & Bundle Analysis

**Duration:** 10 min

- [ ] Measure the CSS entrypoint size (`/styles/globals.css` import chain)
- [ ] Identify the largest CSS files and whether they can be split
- [ ] Check for unused CSS imports (files imported but their classes unused)
- [ ] Look for duplicated styles across section CSS files
- [ ] Check component file sizes against the 300-line limit

### Phase 2: Asset & Rendering Analysis

**Duration:** 10 min

- [ ] Identify un-lazy-loaded route components (all routes should lazy-load)
- [ ] Check for heavy image assets without optimisation (missing srcset, no compression)
- [ ] Review animation-heavy sections for GPU compositing issues
- [ ] Check WebGL/canvas components (if present) for lazy loading and capability detection
- [ ] Identify components that re-render excessively (missing memo/useCallback)
- [ ] Check for large data files loaded on initial render

---

## Output (in report)

- Largest likely bottlenecks ranked by impact
- CSS splitting recommendations with estimated savings
- Lazy loading opportunities (routes and heavy components)
- Asset optimisation recommendations (images, 3D models)
- Re-render hotspots with memoisation recommendations
- Performance budget compliance check:
  - CSS entrypoint target: reasonable split strategy
  - Component file size: under 300 lines each
  - Route lazy loading: all non-critical routes deferred
- Prioritised performance backlog with measurable outcomes

---

## Done Criteria

- [ ] Report includes a prioritised performance backlog
- [ ] Each recommendation includes a measurable outcome (e.g., "split X.css saves ~Y KB")
- [ ] CSS file size analysis is complete for the top 10 largest files
- [ ] Lazy loading status is documented for all route components
- [ ] At least 5 concrete performance improvements are identified
- [ ] Retro effects are preserved (recommendations keep the aesthetic)

---

## Guidelines Referenced

- `/guidelines/development/css-optimization-guidelines.md`
- `/guidelines/development/css-optimization-quick-reference.md`
- `/guidelines/mobile/performance.md`
- `/guidelines/mobile/images.md`
- `/guidelines/mobile/animations.md`
