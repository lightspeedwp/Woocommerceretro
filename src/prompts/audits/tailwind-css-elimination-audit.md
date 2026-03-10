# Audit Prompt A12: Tailwind CSS Elimination Audit

**Version:** 1.0  
**Created:** February 24, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-24_tailwind-css-elimination-audit.md`  
**Task Output:** `/tasks/tailwind-css-elimination-tasks.md`  
**Context:** Guidelines v2.5 declares "Tailwind CSS Completely Removed" but instances remain

---

## Objective

Conduct a comprehensive, zero-tolerance audit of ALL TypeScript, CSS, and configuration files to identify and document EVERY remaining Tailwind CSS utility class, configuration reference, and styling guideline violation. This audit must achieve 100% WordPress theme.json alignment as mandated by Guidelines v2.5.

## Pre-Read (Required)

```
/guidelines/Guidelines.md                    — Section 4.1: NO TAILWIND CSS
/guidelines/design-tokens/colors.md          — WordPress color system
/guidelines/design-tokens/typography.md      — WordPress typography system
/guidelines/design-tokens/spacing.md         — WordPress spacing system
/src/styles/theme-variables.css              — Canonical WordPress tokens
/src/styles/globals.css                      — WordPress utility classes
/guidelines/blocks/woocommerce/ProductCard.md — v3.0 migration example
```

---

## Scope

### Files to Audit

**TypeScript Files (Priority 1):**
```
/src/app/components/**/*.tsx
/src/app/templates/**/*.tsx
/src/app/parts/**/*.tsx
/src/app/pages/**/*.tsx
/App.tsx
```

**CSS Files (Priority 2):**
```
/src/styles/**/*.css
/styles/*.css (Figma flat file)
```

**Configuration Files (Priority 3):**
```
package.json
tailwind.config.js (should not exist)
postcss.config.js
vite.config.ts
```

**Documentation Files (Priority 4):**
```
/guidelines/**/*.md
/prompts/**/*.md
/reports/**/*.md
```

---

## Procedure

### Part A: Tailwind Utility Class Detection

#### A.1: Direct Utility Classes

Search ALL `.tsx` files for `className` strings containing:

**Layout & Display:**
```regex
\b(flex|inline-flex|grid|inline-grid|block|inline-block|inline|hidden)\b
\b(flex-row|flex-col|flex-wrap|flex-nowrap)\b
\b(grid-cols-\d+|grid-rows-\d+)\b
\b(items-start|items-center|items-end|items-stretch)\b
\b(justify-start|justify-center|justify-end|justify-between|justify-around)\b
\b(gap-\d+|gap-x-\d+|gap-y-\d+)\b
```

**Spacing:**
```regex
\b(p-\d+|px-\d+|py-\d+|pt-\d+|pr-\d+|pb-\d+|pl-\d+)\b
\b(m-\d+|mx-\d+|my-\d+|mt-\d+|mr-\d+|mb-\d+|ml-\d+)\b
\b(space-x-\d+|space-y-\d+)\b
\b(-m\d+|-mx-\d+|-my-\d+)\b
\b(mx-auto)\b
```

**Typography:**
```regex
\b(text-xs|text-sm|text-base|text-lg|text-xl|text-2xl|text-3xl|text-4xl|text-5xl|text-6xl)\b
\b(font-thin|font-light|font-normal|font-medium|font-semibold|font-bold|font-black)\b
\b(italic|not-italic)\b
\b(uppercase|lowercase|capitalize|normal-case)\b
\b(leading-\w+|tracking-\w+)\b
\b(text-left|text-center|text-right|text-justify)\b
```

**Colors:**
```regex
\b(text-gray-\d+|text-white|text-black)\b
\b(bg-gray-\d+|bg-white|bg-black)\b
\b(border-gray-\d+|border-white|border-black)\b
\b(text-red-\d+|text-blue-\d+|text-green-\d+)\b
\b(bg-red-\d+|bg-blue-\d+|bg-green-\d+)\b
```

**Borders & Radius:**
```regex
\b(border|border-\d+|border-t|border-r|border-b|border-l)\b
\b(rounded|rounded-\w+)\b
```

**Sizing:**
```regex
\b(w-\d+|w-full|w-screen|w-1/\d+)\b
\b(h-\d+|h-full|h-screen|h-auto)\b
\b(min-w-\d+|max-w-\w+)\b
\b(min-h-\d+|max-h-\d+)\b
```

**Effects:**
```regex
\b(shadow|shadow-\w+)\b
\b(opacity-\d+)\b
\b(transition|transition-\w+)\b
\b(duration-\d+)\b
```

**Dark Mode:**
```regex
\bdark:[a-z-]+\b
```

**Hover/Focus States:**
```regex
\bhover:[a-z-]+\b
\bfocus:[a-z-]+\b
```

#### A.2: Component-Specific Patterns

Search for files using common Tailwind patterns:

**Pagination Buttons:**
```tsx
className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
```

**Grid Layouts:**
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

**Flex Containers:**
```tsx
className="flex flex-col gap-4"
className="flex items-center justify-between"
```

**Text Styles:**
```tsx
className="text-sm text-gray-600"
className="text-lg font-bold"
```

---

### Part B: WordPress Alignment Violations

#### B.1: Hardcoded Values

Search for hardcoded values that should use WordPress CSS variables:

**Colors:**
```typescript
// ❌ WRONG
style={{ color: '#6b7280' }}
className with: text-gray-500, bg-gray-900

// ✅ CORRECT
var(--wp--preset--color--text-secondary)
var(--wp--preset--color--surface)
```

**Spacing:**
```typescript
// ❌ WRONG  
style={{ padding: '16px' }}
className with: p-4, mx-auto

// ✅ CORRECT
var(--wp--preset--spacing--40)
.wp-mx-auto
```

**Typography:**
```typescript
// ❌ WRONG
className="text-xl font-bold"

// ✅ CORRECT
var(--wp--preset--font-size--x-large)
var(--wp--preset--font-weight--bold)
```

#### B.2: Inline Styles

Search for inline `style={{}}` attributes:

```tsx
// ❌ VIOLATIONS
<div style={{ width: '220px' }}>
<div style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
<img style={{ maxWidth: '100%' }} />
```

**Exceptions Allowed:**
- CSS-in-JS animation libraries (Framer Motion)
- Dynamic runtime values using CSS variables
- Canvas/WebGL elements

#### B.3: Missing Dark Mode Support

Search for components with light mode only colors:

```tsx
// ❌ MISSING DARK MODE
<div className="bg-white text-gray-900">

// ✅ HAS DARK MODE
<div className="wp-surface-panel">
// (CSS handles: .wp-surface-panel { background: var(--wp--preset--color--surface); })
```

---

### Part C: Configuration Audit

#### C.1: Package Dependencies

Check `package.json` for:

```json
// ❌ MUST NOT EXIST
"tailwindcss": "*",
"@tailwindcss/*": "*",
"autoprefixer": "*" (if only for Tailwind)
```

#### C.2: Configuration Files

Verify these files DO NOT EXIST:

```
tailwind.config.js
tailwind.config.ts
tailwind.config.cjs
postcss.config.js (with Tailwind plugin)
```

If found, document their contents and mark for deletion.

#### C.3: Import Statements

Search for:

```typescript
import 'tailwindcss/base'
import 'tailwindcss/components'
import 'tailwindcss/utilities'
```

---

### Part D: Documentation Audit

#### D.1: Guideline References

Search `/guidelines/**/*.md` for:

- Outdated Tailwind class examples
- Migration instructions that reference Tailwind
- Code examples using Tailwind utilities

#### D.2: Prompt References

Search `/prompts/**/*.md` for:

- Audit prompts mentioning Tailwind
- Migration prompts
- Testing prompts with Tailwind examples

#### D.3: Report References

Search `/reports/**/*.md` for:

- Historical mentions of Tailwind
- Migration progress reports
- Incomplete migration documentation

---

### Part E: CSS Architecture Review

#### E.1: Utility Class Inventory

Document ALL utility classes in:

```
/src/styles/globals.css
/src/styles/utilities.css
/src/styles/layout-grid.css
```

Compare against WordPress equivalents:

| Utility Class | Purpose | WordPress Equivalent | Status |
|---------------|---------|---------------------|--------|
| `.flex` | Flex display | `.wp-flex` | ✅ |
| `.grid` | Grid display | `.wp-grid` | ✅ |
| `.mx-auto` | Center horizontally | `.wp-mx-auto` | ✅ |

#### E.2: BEM Class Audit

Verify ALL component classes follow BEM convention:

```css
/* ✅ CORRECT */
.wc-block-product-card { }
.wc-block-product-card__image { }
.wc-block-product-card--featured { }

/* ❌ WRONG */
.product-card { }
.card-image { }
```

#### E.3: CSS Variable Usage

Verify components use WordPress tokens:

```css
/* ✅ CORRECT */
.component {
  color: var(--wp--preset--color--foreground);
  padding: var(--wp--preset--spacing--40);
  font-size: var(--wp--preset--font-size--normal);
}

/* ❌ WRONG */
.component {
  color: #1a1a1a;
  padding: 16px;
  font-size: 1rem;
}
```

---

## Output Requirements

### Report Structure

Create `/reports/audits/2026-02-24_tailwind-css-elimination-audit.md` with:

1. **Executive Summary**
   - Total violations found
   - Files affected
   - Severity breakdown
   - Estimated remediation time

2. **Violation Inventory**
   - Component-by-component listing
   - Line numbers and exact code
   - WordPress-aligned replacement
   - Priority level (P0/P1/P2)

3. **Pattern Analysis**
   - Common violation patterns
   - Hotspot components (most violations)
   - Systematic issues

4. **WordPress Alignment Matrix**
   - Current state vs. target state
   - Token usage coverage
   - Dark mode coverage
   - BEM convention adherence

5. **Remediation Roadmap**
   - Phase 1: Critical (P0) - 0 Tailwind references
   - Phase 2: Important (P1) - WordPress tokens
   - Phase 3: Polish (P2) - Optimization

### Task List Structure

Create `/tasks/tailwind-css-elimination-tasks.md` with:

1. **P0: Tailwind Class Removal** (Blocking)
   - File-by-file task list
   - Estimated time per file
   - Replacement patterns

2. **P1: WordPress Token Migration** (High Priority)
   - Hardcoded value replacement
   - Dark mode implementation
   - BEM class alignment

3. **P2: Configuration Cleanup** (Cleanup)
   - Delete unused config files
   - Remove dependencies
   - Update documentation

4. **P3: Documentation Updates** (Polish)
   - Update guidelines
   - Create migration guides
   - Update examples

---

## Success Criteria

**Audit is complete when:**

- [x] ALL `.tsx` files scanned for Tailwind classes
- [x] ALL CSS files reviewed for violations
- [x] Configuration files audited
- [x] Documentation checked
- [x] Comprehensive report generated
- [x] Prioritized task list created
- [x] Replacement patterns documented
- [x] Estimated timeline provided

**Remediation is complete when:**

- [ ] Zero Tailwind utility classes in codebase
- [ ] 100% WordPress token usage
- [ ] 100% dark mode coverage
- [ ] 100% BEM convention adherence
- [ ] All configuration files removed
- [ ] Documentation updated
- [ ] Guidelines v2.5 compliance verified

---

## Quality Assurance

### Audit Validation

**Before submitting report:**

1. Run automated search:
```bash
# Search for Tailwind utilities
grep -r "className=\"[^\"]*\(text-\|bg-\|p-\|m-\|flex\|grid\)" src/
grep -r "text-gray-\|bg-gray-\|border-gray-" src/
grep -r "px-\d\|py-\d\|mx-\d\|my-\d" src/
```

2. Verify zero false positives:
   - Exclude comments
   - Exclude JSDoc examples
   - Exclude historical documentation

3. Cross-reference with Guidelines v2.5:
   - All violations documented
   - WordPress replacements specified
   - Migration path clear

### Report Quality Check

- [ ] Executive summary clear
- [ ] All violations documented with line numbers
- [ ] Replacement patterns provided
- [ ] Priority levels assigned
- [ ] Realistic timeline estimates
- [ ] No ambiguous findings

---

## Timeline Estimates

**Audit Execution:**
- Part A (Utility Detection): 30 minutes
- Part B (Violations): 20 minutes  
- Part C (Configuration): 10 minutes
- Part D (Documentation): 15 minutes
- Part E (CSS Review): 25 minutes
- **Total Audit:** 100 minutes (1.67 hours)

**Report Writing:**
- Executive summary: 15 minutes
- Violation inventory: 45 minutes
- Pattern analysis: 20 minutes
- Matrix creation: 15 minutes
- Roadmap: 15 minutes
- **Total Report:** 110 minutes (1.83 hours)

**Task List Creation:**
- P0 tasks: 20 minutes
- P1 tasks: 20 minutes
- P2/P3 tasks: 10 minutes
- Time estimates: 10 minutes
- **Total Tasks:** 60 minutes (1 hour)

**Grand Total:** 270 minutes (4.5 hours)

---

## Notes

**Audit Philosophy:**
- **Zero tolerance** for Tailwind utilities
- **100% WordPress alignment** required
- **Dark mode mandatory** for all components
- **BEM convention enforced** across all CSS

**Migration Strategy:**
- Batch process similar violations
- Use automated find/replace where safe
- Manual review for complex components
- Test after each batch

**Risk Management:**
- No breaking changes allowed
- Visual regression testing required
- Performance impact assessment
- Rollback plan documented

---

**Status:** Ready to Execute  
**Next Action:** Begin Part A: Tailwind Utility Class Detection  
**Output:** Comprehensive audit report + prioritized task list

---

**End of Audit Prompt A12**
