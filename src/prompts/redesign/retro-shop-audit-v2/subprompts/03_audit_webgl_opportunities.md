# Audit -- WebGL Usage and Integration Recommendations

**What this is:** Subprompt audit (WebGL)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/03_audit_webgl_opportunities/YYYY-MM-DD_03_audit_webgl_opportunities.md`

---

## Objective

Recommend where WebGL adds real value (not gimmick), and define guardrails for performance, reduced motion, and progressive enhancement.

---

## Prerequisites

1. Read: `/prompts/redesign/PROMPT_RETRO_CONVERSION_v2.md` (WebGL plan, Sections 3.1-3.5)
2. Read: `/guidelines/REDUCED_MOTION_GUIDELINES.md`
3. Read: `/guidelines/interactions/animations.md`
4. Read: `/guidelines/mobile/performance.md`

---

## Execution Steps

### Phase 1: Current State

**Duration:** 10 min

- [ ] Identify existing canvas/WebGL components (if any) and how they load
- [ ] Check for any Three.js or @react-three imports in the codebase
- [ ] Review routes/sections where interactive retro effects are planned or exist
- [ ] Assess any performance tooling already present

### Phase 2: Opportunity Assessment

**Duration:** 10 min

- [ ] Rank potential WebGL placements by ROI (user delight vs implementation cost)
- [ ] Define technical constraints per placement (lazy load, device capability checks)
- [ ] Identify anti-patterns (WebGL where CSS would suffice)
- [ ] Document fallback requirements for each placement

---

## Output (in report)

- Current WebGL state (what exists, what's planned, what's missing)
- Recommended WebGL placements ranked by ROI (at least 3)
- Technical constraints per placement (lazy loading, capability detection)
- At least 3 concrete integration patterns with code sketches
- At least 3 anti-patterns to avoid
- Accessibility requirements: reduced motion fallbacks, ARIA labels for 3D content
- Performance budgets: draw calls, polygon count, texture memory

---

## Done Criteria

- [ ] Report includes at least 3 concrete integration patterns
- [ ] Report includes at least 3 anti-patterns
- [ ] Each recommendation includes a fallback strategy (no WebGL available)
- [ ] Reduced motion compliance is addressed for every recommendation
- [ ] Performance budget is specified per component

---

## Guidelines Referenced

- `/guidelines/REDUCED_MOTION_GUIDELINES.md`
- `/guidelines/interactions/animations.md`
- `/guidelines/mobile/performance.md`
- `/guidelines/mobile/animations.md`
