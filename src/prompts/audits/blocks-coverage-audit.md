# Audit Prompt A4: Blocks Coverage Audit

**Version:** 1.0  
**Created:** February 21, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-21-blocks-coverage-audit.md`  
**Task Output:** `/tasks/blocks-guidelines-gaps.md`

---

## Objective

Verify every block component in `/src/app/components/blocks/` has a corresponding guideline document in `/guidelines/blocks/`. Identify coverage gaps and dead documentation.

## Pre-Read (Required)

```
/guidelines/overview-blocks.md         — Block architecture overview
/guidelines/WRITING_GUIDELINES.md      — Standards for writing guidelines
/guidelines/Guidelines.md              — Section 7.1 (Component Architecture)
```

## Procedure

### Step 1: Component Inventory

List ALL component files in `/src/app/components/blocks/` recursively across all 21 subdirectories:
- `archive/`, `blog/`, `cart/`, `checkout/`, `design/`, `display/`
- `feedback/`, `forms/`, `forms-advanced/`, `interactive/`, `layout/`
- `media/`, `navigation/`, `order/`, `overlay/`, `product/`
- `search/`, `single-product/`, `theme/`, `ui/`
- Plus `index.ts` barrel file

For each `.tsx` file, record:
- Full path
- Component name (from export)
- Approximate size/complexity

### Step 2: Guideline Inventory

List ALL files in `/guidelines/blocks/` recursively, including subdirectories:
- `design/`, `embed/`, `media/`, `text/`, `theme/`, `widgets/`, `woocommerce/`
- Plus top-level files like `EnquiryModal.md`, `feedback.md`, `forms.md`, `layout.md`

### Step 3: Cross-Reference

Create a coverage matrix:
- For each component, does a matching guideline exist?
- For each guideline, does a matching component exist?
- Flag: COVERED (both exist), MISSING_GUIDELINE (component exists, no guideline), DEAD_GUIDELINE (guideline exists, no component)

### Step 4: Guideline Quality Check

For each existing guideline, verify:
- References correct file path for the component
- Follows WRITING_GUIDELINES.md template
- Includes: Overview, Props, Usage, Accessibility, Dark Mode sections
- Does not reference deprecated paths or Tailwind

### Step 5: Priority Assessment

Prioritise missing guidelines by component importance:
- P0: Cart, checkout, product blocks (revenue-critical)
- P1: Navigation, search, form blocks (UX-critical)
- P2: Design, layout, display blocks (architecture)
- P3: UI primitives, feedback, media (supporting)

### Step 6: Generate Outputs

Save report with coverage matrix and gap analysis.
Save task list with prioritised list of guidelines to create.

## Success Criteria

- 100% of block components catalogued
- Coverage percentage calculated
- Priority-ordered task list for missing guidelines
- Dead guidelines identified for cleanup
