---
title: "BEM Inline Styles Refactoring"
created: "2026-03-17"
source_report: "/reports/bem/2026-03-17_bem-compliance-audit.md"
priority: "P0"
estimated_effort: "4-6 hours"
status: "Complete"
---

# BEM Inline Styles Refactoring Task List

**Source:** BEM Compliance Audit (March 17, 2026)  
**Trigger:** `apply bem`  
**Priority:** P0 - Critical  
**Scope:** Remove excessive inline styles from 2 dev tools pages

---

## Overview

This task list addresses P0 violations found in the BEM compliance audit. Two dev tools pages (PageShowcase.tsx and PageStyleGuide.tsx) contain 140+ inline `style={{}}` objects that should be moved to CSS files following WordPress BEM methodology.

**Guideline Reference:**
> "No inline `style={{}}` attributes (rare exceptions for animation/dynamic values)."  
> — `/guidelines/Guidelines.md` Section 2.1

---

## Tasks

### ✅ Phase 1: Audit Complete
- [x] Run BEM compliance audit
- [x] Generate audit report
- [x] Create task list

### ✅ Phase 2: PageShowcase Refactoring

#### Task 2.1: Create CSS File
- [x] Create `/src/styles/sections/devtools-showcase.css`
- [x] Add `@import` to `/styles/globals.css`:
  ```css
  @import "../src/styles/sections/devtools-showcase.css";
  ```
- [x] Define base BEM blocks:
  - `.retro-showcase` (page container)
  - `.retro-showcase__header` (header section)
  - `.retro-showcase__stats` (stats grid)
  - `.retro-showcase__categories` (template categories)
  - `.retro-showcase__directory` (component directory)

**Estimated Time:** 30 min
**Status:** ✅ COMPLETE

---

#### Task 2.2: Refactor Header Section (Lines 92-114)
- [x] Move section padding/border to `.retro-showcase__header`
- [x] Move background pattern to `.retro-showcase__header--pattern` modifier
- [x] Move title box to `.retro-showcase__title-box`
- [x] Remove all inline styles from section

**Target:**
```tsx
<section className="retro-showcase__header retro-showcase__header--pattern">
  <Container>
    <div className="retro-showcase__title-box">
      <Heading level={1} className="retro-font-display retro-bold retro-showcase__title">
```

**Estimated Time:** 45 min
**Status:** ✅ COMPLETE

---

#### Task 2.3: Refactor Stats Grid (Lines 117-135)
- [x] Move grid layout to `.retro-showcase__stats`
- [x] Create `.retro-showcase__stat-card` for individual cards
- [x] Move card styling (border, shadow, padding) to CSS
- [x] Remove all inline styles from stat cards

**Target:**
```tsx
<div className="retro-showcase__stats">
  {stats.map((stat, index) => (
    <div key={index} className="retro-showcase__stat-card">
```

**Estimated Time:** 30 min
**Status:** ✅ COMPLETE

---

#### Task 2.4: Refactor Template Categories (Lines 140-166)
- [x] Move section styles to `.retro-showcase__categories`
- [x] Create `.retro-showcase__category-grid`
- [x] Create `.retro-showcase__category-card`
- [x] Move header/badge/icon styles to BEM elements
- [x] Remove all inline styles

**Target:**
```tsx
<div className="retro-showcase__category-grid">
  {templateCategories.map((category, index) => (
    <div key={index} className="retro-showcase__category-card">
```

**Estimated Time:** 45 min
**Status:** ✅ COMPLETE

---

#### Task 2.5: Refactor Component Directory (Lines 171-300)
- [x] Move search/filter container to `.retro-showcase__search`
- [x] Create `.retro-showcase__filter-chips`
- [x] Create `.retro-showcase__results`
- [x] Create `.retro-showcase__component-card`
- [x] Move empty state to `.retro-showcase__empty`
- [x] Remove all inline styles (60+ objects)

**Target:**
```tsx
<div className="retro-showcase__search">
  <div className="retro-showcase__search-input-wrapper">
    <input className="retro-showcase__search-input retro-font-display retro-bold" />
  </div>
  <div className="retro-showcase__filter-chips">
    {categories.map((cat) => (
      <button className={cn('retro-showcase__chip', isActive && 'retro-showcase__chip--active')}>
```

**Estimated Time:** 90 min
**Status:** ✅ COMPLETE

---

#### Task 2.6: Final Cleanup PageShowcase
- [x] Verify all inline styles removed (except dynamic values)
- [x] Test light/dark mode switching
- [x] Verify responsive behavior
- [x] Update component imports if needed
- [x] Test all interactive elements (search, filters)

**Estimated Time:** 30 min
**Status:** ✅ COMPLETE

**Total PageShowcase:** ~4 hours ✅ **COMPLETE**

---

### ✅ Phase 3: PageStyleGuide Refactoring

#### Task 3.1: Create CSS File
- [x] Create `/src/styles/sections/devtools-style-guide.css`
- [x] Add `@import` to `/styles/globals.css`:
  ```css
  @import "../src/styles/sections/devtools-style-guide.css";
  ```
- [x] Define base BEM blocks:
  - `.retro-style-guide` (page container)
  - `.retro-color-card` (color swatch cards)
  - `.retro-type-sample` (typography samples)
  - `.retro-style-grid` (grid layouts)

**Estimated Time:** 30 min
**Status:** ✅ COMPLETE

---

#### Task 3.2: Refactor ColorCard Component (Lines 24-58)
- [x] Create `.retro-color-card` block
- [x] Create `.retro-color-card__swatch` element
- [x] Create `.retro-color-card__info` element
- [x] Move all static styles to CSS
- [x] Keep ONLY `backgroundColor: bgColor` inline (dynamic)

**Current (Lines 24-58):**
```tsx
<button style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  backgroundColor: 'var(--color-paper)',
  border: '4px solid var(--color-ink)',
  padding: 0,
  cursor: 'pointer',
  transition: 'transform 0.1s, box-shadow 0.1s',
  boxShadow: '4px 4px 0 var(--color-ink)'
}}>
  <div style={{ height: '100px', width: '100%', backgroundColor: bgColor }} />
  <div style={{ padding: '1rem' }}>
```

**Target:**
```tsx
<button className="retro-color-card" onClick={() => handleCopyColor(value)}>
  <div className="retro-color-card__swatch" style={{ backgroundColor: bgColor }} />
  <div className="retro-color-card__info">
```

**Estimated Time:** 45 min
**Status:** ✅ COMPLETE

---

#### Task 3.3: Refactor Page Structure (Lines 95-150)
- [x] Move page container styles to `.retro-style-guide`
- [x] Move section styles to `.retro-style-guide__section`
- [x] Move grid layouts to BEM classes
- [x] Remove all layout inline styles

**Current (Lines 95-146):**
```tsx
<div style={{ backgroundColor: 'var(--color-paper)', minHeight: '100vh', paddingBottom: '4rem' }}>
  <section style={{ padding: '3rem 0', borderBottom: '4px solid' }}>
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>
```

**Target:**
```tsx
<div className="retro-style-guide">
  <section className="retro-style-guide__section retro-style-guide__section--header">
    <div className="retro-style-guide__section-header">
      <Heading level={2} className="retro-style-guide__section-title">
```

**Estimated Time:** 60 min
**Status:** ✅ COMPLETE

---

#### Task 3.4: Refactor Color Grid & Type Samples
- [x] Create `.retro-style-guide__color-grid`
- [x] Create `.retro-style-guide__type-grid`
- [x] Move all grid/layout styles to CSS
- [x] Ensure consistent spacing with design tokens

**Estimated Time:** 45 min
**Status:** ✅ COMPLETE

---

#### Task 3.5: Final Cleanup PageStyleGuide
- [x] Verify all inline styles removed (except dynamic colors)
- [x] Test color copying functionality
- [x] Test light/dark mode
- [x] Verify all typography samples display correctly

**Estimated Time:** 30 min
**Status:** ✅ COMPLETE

**Total PageStyleGuide:** ~3.5 hours ✅ **COMPLETE**

---

### ✅ Phase 4: Documentation & Testing

#### Task 4.1: Update IMPORTS_GUIDELINES.md
- [x] Add section on Figma import exemptions
- [x] Document that `/imports/` files may contain Tailwind classes
- [x] Add instructions for converting Figma imports to BEM

**Sample Text:**
```markdown
## Figma Import Exemptions

Figma imports in `/imports/` directory may contain Tailwind classes from auto-generation. These files are exempt from BEM requirements.

**When extracting components for use:**
1. Copy component to appropriate `/src/app/components/` directory
2. Replace all Tailwind classes with WordPress BEM classes
3. Move styles to corresponding CSS file in `/src/styles/`
4. Follow standard BEM naming conventions
```

**Estimated Time:** 15 min
**Status:** ✅ COMPLETE

---

#### Task 4.2: Final Testing
- [x] Test PageShowcase in light/dark mode
- [x] Test PageStyleGuide in light/dark mode
- [x] Test all interactive elements
- [x] Verify no visual regressions
- [x] Test responsive behavior on mobile/tablet/desktop
- [x] Run Lighthouse accessibility audit on both pages

**Estimated Time:** 30 min
**Status:** ✅ COMPLETE

---

#### Task 4.3: Update BEM Audit Report
- [x] Mark P0 violations as resolved
- [x] Update compliance score
- [x] Add "Fixes Applied" section to report
- [x] Document any remaining exceptions

**Estimated Time:** 15 min
**Status:** ✅ COMPLETE

---

## Summary

| Phase | Tasks | Estimated Time | Status |
|-------|-------|----------------|--------|
| Phase 1: Audit | 3 | Completed | ✅ Done |
| Phase 2: PageShowcase | 6 | ~4 hours | ✅ COMPLETE |
| Phase 3: PageStyleGuide | 5 | ~3.5 hours | ✅ COMPLETE |
| Phase 4: Documentation | 3 | ~1 hour | ✅ COMPLETE |
| **Total** | **17** | **~8.5 hours** | **100% Complete** |

---

## Priority Order

1. **Task 2.1-2.6:** PageShowcase refactoring (P0 - Critical)
2. **Task 3.1-3.5:** PageStyleGuide refactoring (P0 - Critical)
3. **Task 4.1-4.3:** Documentation & testing (P1 - High)

---

## Success Criteria

- ✅ All inline styles removed from PageShowcase.tsx (except dynamic values)
- ✅ All inline styles removed from PageStyleGuide.tsx (except dynamic bgColor)
- ✅ All styles moved to `/src/styles/sections/devtools-*.css`
- ✅ All styling uses WordPress BEM class names
- ✅ Light/dark mode works correctly
- ✅ No visual regressions
- ✅ Responsive behavior maintained
- ✅ BEM compliance score: 100%

---

## Notes

- Dev tools pages are user-facing and should follow same standards as main site
- PageShowcase has ~80 inline style objects
- PageStyleGuide has ~60 inline style objects
- Both files currently have 0% BEM compliance for styles
- Target: 100% BEM compliance with proper CSS architecture

---

**Created:** March 17, 2026  
**Source Report:** `/reports/bem/2026-03-17_bem-compliance-audit.md`  
**Next Action:** Start Phase 2 - PageShowcase refactoring  
**Responsible:** Development Team