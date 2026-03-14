# Component Guideline Compliance Audit

**Version:** 1.0  
**Created:** 2026-03-14  
**Type:** Quality Assurance Audit  
**Scope:** Component implementation vs. guideline specifications  
**Estimated Duration:** 2-4 hours (depending on violations found)

---

## Purpose

This prompt audits all components that have documented guidelines to verify they follow their own specifications. It identifies violations, creates remediation tasks, and ensures consistency between documentation and implementation.

**Why This Matters:**
- Guidelines are only useful if code follows them
- Catch drift between docs and implementation early
- Ensure new developers can trust the guidelines
- Maintain code quality and consistency

---

## Execution Instructions

### Phase 1: Discovery (15 minutes)

1. **Scan `/guidelines/blocks/` for all component guidelines**
   - List all `.md` files in subdirectories
   - Group by category (archive, cart, checkout, design, display, etc.)
   - Count total guidelines to audit

2. **For each guideline file:**
   - Extract component name from filename
   - Note the component location from guideline
   - Check if component exists at that location
   - Mark as FOUND or MISSING

3. **Create audit tracking table:**

```markdown
| Component | Guideline | Location | Status | Priority |
|-----------|-----------|----------|--------|----------|
| AspectRatio | /guidelines/blocks/display/AspectRatio.md | /src/app/components/blocks/display/AspectRatio.tsx | FOUND | P2 |
| Avatar | /guidelines/blocks/display/Avatar.md | /src/app/components/blocks/display/Avatar.tsx | FOUND | P2 |
| Badge | /guidelines/blocks/display/Badge.md | /src/app/components/blocks/display/Badge.tsx | FOUND | P2 |
```

---

### Phase 2: Component-by-Component Audit (1-3 hours)

**For EACH component found in Phase 1, perform this audit:**

#### 2.1 Read the Guideline

Open the guideline file and extract:
- **Component API** (props interface)
- **Required props** vs optional props
- **Variant options** (if applicable)
- **BEM class structure** (expected CSS classes)
- **Dark mode requirements** (CSS variables, class patterns)
- **Accessibility requirements** (ARIA attributes, semantic HTML)
- **Common patterns** (documented usage examples)

#### 2.2 Read the Component Implementation

Open the component `.tsx` file and verify:

**Props Interface:**
```typescript
// Does the actual interface match the guideline?
interface ComponentProps {
  // Check each prop exists
  // Check types match
  // Check required vs optional matches
}
```

**BEM Classes:**
```tsx
// Does the component use the documented class names?
className={['wp-block-component', 'variant-class', className].join(' ')}
```

**Dark Mode:**
```tsx
// Are dark mode classes applied?
// Are CSS variables used?
// Is .dark selector support present in CSS?
```

**Accessibility:**
```tsx
// Are ARIA attributes present?
// Is semantic HTML used?
// Are alt texts required?
```

#### 2.3 Read the Component CSS

Open the CSS file (from guideline "Styles Location" section) and verify:

**BEM Structure:**
```css
/* Do all documented classes exist? */
.wp-block-component { }
.wp-block-component--variant { }
.wp-block-component__element { }
```

**Dark Mode Support:**
```css
/* Is there a .dark selector for each light mode rule? */
.dark .wp-block-component { }
```

**CSS Variables:**
```css
/* Are CSS custom properties used? */
/* Are hardcoded values avoided? */
background: var(--retro-color-bg); /* ✅ */
background: #ffffff; /* ❌ */
```

**Retro Theme Features:**
```css
/* Do documented effects exist? */
/* Glassmorphism? Neon glows? Scanlines? */
```

#### 2.4 Document Violations

For EACH violation found, create an entry:

```markdown
### Violation: [Component Name] - [Issue Type]

**Guideline Says:**
> [Quote from guideline]

**Actual Implementation:**
```tsx
// Show the violating code
```

**Expected Fix:**
```tsx
// Show what it should be
```

**Impact:** [Low/Medium/High]
**Category:** [Props API / BEM Classes / Dark Mode / Accessibility / CSS]
```

---

### Phase 3: CSS File Audit (30 minutes)

For each component audited:

1. **Check CSS file location matches guideline**
   - Guideline: `/src/styles/blocks/display/badge.css`
   - Actual: Does file exist at this path?

2. **Verify CSS is imported in globals.css**
   - Is there an `@import` statement?
   - Is it in the correct batch?

3. **Check for unused CSS classes**
   - Are all CSS classes used in the component?
   - Are there orphaned classes?

4. **Verify dark mode completeness**
   - Every light mode class has dark counterpart?
   - CSS variables used consistently?

---

### Phase 4: Usage Pattern Verification (30 minutes)

For components with "Common Patterns" section:

1. **Find pattern usage in codebase**
   ```bash
   # Search for pattern usage
   grep -r "Pattern 1" --include="*.tsx"
   ```

2. **Verify patterns match guideline**
   - Does actual usage follow documented pattern?
   - Are there variations not documented?

3. **Check for anti-patterns**
   - Usage that violates guideline recommendations
   - Deprecated patterns still in use

---

### Phase 5: Report Generation (30 minutes)

Create comprehensive report: `/reports/audits/YYYY-MM-DD_component-guideline-compliance.md`

**Report Structure:**

```markdown
# Component Guideline Compliance Audit

**Date:** YYYY-MM-DD
**Audited Components:** [count]
**Violations Found:** [count]
**Compliance Rate:** [percentage]

---

## Executive Summary

- Total components audited: X
- Components in full compliance: Y
- Components with violations: Z
- Total violations: N
- High priority violations: H
- Medium priority violations: M
- Low priority violations: L

---

## Compliance By Category

| Category | Components | Violations | Compliance % |
|----------|-----------|------------|--------------|
| Display Blocks | 3 | 5 | 83% |
| Archive Blocks | 4 | 2 | 95% |
| ... | ... | ... | ... |

---

## High Priority Violations (Fix Immediately)

### [Component Name] - [Issue]

**Guideline:** /guidelines/blocks/[category]/[Component].md
**Component:** /src/app/components/blocks/[category]/[Component].tsx
**Severity:** High
**Impact:** [User-facing / Developer-facing / Accessibility]

**Current Code:**
```tsx
// Violating code
```

**Required Fix:**
```tsx
// Corrected code
```

**Rationale:** [Why this matters]

---

## Medium Priority Violations (Fix Soon)

[Same structure as High Priority]

---

## Low Priority Violations (Technical Debt)

[Same structure as High Priority]

---

## Recommendations

1. **Immediate Actions:**
   - [ ] Fix all High priority violations
   - [ ] Update Guidelines.md if patterns changed
   - [ ] Create tasks for Medium priority fixes

2. **Process Improvements:**
   - [ ] Add linting rules to prevent violations
   - [ ] Create component checklist for new components
   - [ ] Add CI step to validate guidelines

3. **Documentation Updates:**
   - [ ] Update guidelines if implementation is correct
   - [ ] Add missing patterns found in codebase
   - [ ] Clarify ambiguous sections

---

## Components In Full Compliance ✅

- [Component Name] - /guidelines/blocks/[category]/[Component].md
- [Component Name] - /guidelines/blocks/[category]/[Component].md

---

## Next Steps

1. Create remediation tasks in `/tasks/component-compliance-fixes.md`
2. Assign priorities (P0/P1/P2/P3)
3. Update master task list
4. Begin fixes starting with High priority violations
```

---

## Audit Checklist (Per Component)

Use this checklist for EACH component audited:

### Props Interface
- [ ] All documented props exist in component
- [ ] All props have correct TypeScript types
- [ ] Required vs optional matches guideline
- [ ] Default values match guideline
- [ ] No undocumented props in component

### BEM Classes
- [ ] Root class matches guideline (wp-block-*)
- [ ] All variant classes exist
- [ ] Element classes follow BEM pattern
- [ ] Retro theme classes present (funky-*)
- [ ] No inline styles used

### Dark Mode
- [ ] Component uses CSS variables
- [ ] All colors have dark mode variants
- [ ] .dark selector used in CSS
- [ ] No hardcoded colors in component
- [ ] Dark mode tested and works

### Accessibility
- [ ] Required ARIA attributes present
- [ ] Semantic HTML used
- [ ] Alt text on images (if applicable)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA

### CSS Architecture
- [ ] CSS file exists at documented location
- [ ] All documented classes exist in CSS
- [ ] CSS imported in globals.css
- [ ] No unused CSS classes
- [ ] Retro theme features implemented

### Responsiveness
- [ ] Mobile behavior matches guideline
- [ ] Breakpoints follow standards
- [ ] Touch targets >= 44x44px (interactive)
- [ ] Layout doesn't break at any width

### Performance
- [ ] No performance anti-patterns
- [ ] Memoization used where documented
- [ ] Lazy loading applied (if documented)
- [ ] No unnecessary re-renders

---

## Violation Severity Guidelines

**High Priority (Fix Immediately):**
- Accessibility violations (WCAG failures)
- Dark mode completely broken
- Props API doesn't match (breaking changes)
- Missing required ARIA attributes
- Security issues
- Performance regressions

**Medium Priority (Fix Soon):**
- BEM class naming inconsistencies
- Missing CSS variables (hardcoded colors)
- Incomplete dark mode (some elements missing)
- Missing optional props
- Minor accessibility issues

**Low Priority (Technical Debt):**
- Documentation outdated but implementation correct
- Extra props not in guideline (backwards compatible)
- Styling variations within acceptable range
- Non-breaking BEM class additions
- Performance optimizations not documented

---

## Special Audit Cases

### Case 1: Guideline Exists, Component Missing

**Action:**
1. Mark as HIGH PRIORITY violation
2. Create task to implement component
3. Verify guideline is still relevant
4. Consider deprecating guideline if component not needed

### Case 2: Component Exists, No Guideline

**Action:**
1. Mark as documentation gap
2. Create task to write guideline
3. Add to appropriate category
4. Include in next guideline writing session

### Case 3: Guideline and Component Both Outdated

**Action:**
1. Determine which is source of truth
2. If component is correct, update guideline
3. If guideline is correct, fix component
4. Document decision in audit report

### Case 4: Multiple Components Match One Guideline

**Action:**
1. Audit EACH component instance
2. Check for divergence between instances
3. Determine canonical implementation
4. Document which component is reference
5. Align other instances to reference

---

## Output Files

This audit creates the following files:

1. **Audit Report:**
   - `/reports/audits/YYYY-MM-DD_component-guideline-compliance.md`
   - Comprehensive findings and recommendations

2. **Task List:**
   - `/tasks/component-compliance-fixes.md`
   - Prioritized list of violations to fix
   - Organized by priority (P0/P1/P2/P3)

3. **Updated Master Task List:**
   - `/tasks/task-list.md`
   - New section for compliance fixes

---

## Automation Opportunities

After first manual audit, consider:

1. **ESLint Rules:**
   - Enforce BEM class naming
   - Require CSS variables (no hardcoded colors)
   - Enforce ARIA attributes on interactive elements

2. **TypeScript Linting:**
   - Validate props interfaces against guidelines
   - Ensure required props are required
   - Type-check variant enums

3. **CSS Linting:**
   - Require .dark selector for every color rule
   - Enforce CSS custom property usage
   - Detect unused classes

4. **CI Integration:**
   - Run compliance audit on every PR
   - Block merges with High priority violations
   - Auto-generate compliance reports

---

## Success Criteria

Audit is complete when:

- [ ] All components with guidelines have been audited
- [ ] All violations documented with severity
- [ ] Audit report generated
- [ ] Task list created
- [ ] Master task list updated
- [ ] High priority violations have tasks assigned
- [ ] Recommendations provided for process improvement

---

## Example Violation Entries

### Example 1: Missing Dark Mode

```markdown
### Violation: Badge - Incomplete Dark Mode Support

**Component:** /src/app/components/blocks/display/Badge.tsx
**CSS:** /src/styles/blocks/display/badge.css
**Severity:** High
**Category:** Dark Mode

**Guideline Says:**
> All badge variants must have .dark selector variants with adjusted transparency

**Actual CSS:**
```css
.wp-block-badge--outline {
  background-color: transparent;
  border-color: var(--wp--preset--color--border);
}

/* Missing .dark variant! */
```

**Expected Fix:**
```css
.wp-block-badge--outline {
  background-color: transparent;
  border-color: var(--wp--preset--color--border);
}

.dark .wp-block-badge--outline {
  border-color: rgba(255, 255, 255, 0.2);
}
```

**Impact:** Badge outline variant is invisible in dark mode

**Estimated Fix Time:** 5 minutes

**Task:** Create P0 task to add dark mode support for outline variant
```

### Example 2: Props Interface Mismatch

```markdown
### Violation: Avatar - Missing onLoadingStatusChange Prop Type

**Component:** /src/app/components/blocks/display/Avatar.tsx
**Severity:** Medium
**Category:** Props API

**Guideline Says:**
```typescript
interface AvatarImageProps {
  onLoadingStatusChange?: (status: AvatarStatus) => void;
}
```

**Actual Implementation:**
```typescript
interface AvatarImageProps {
  onLoadingStatusChange?: (status: string) => void; // Should be AvatarStatus!
}
```

**Expected Fix:**
```typescript
type AvatarStatus = 'loading' | 'loaded' | 'error';

interface AvatarImageProps {
  onLoadingStatusChange?: (status: AvatarStatus) => void;
}
```

**Impact:** Type safety loss, callback receives untyped string

**Estimated Fix Time:** 2 minutes

**Task:** Create P1 task to fix AvatarImage prop type
```

### Example 3: Missing BEM Class

```markdown
### Violation: AspectRatio - Missing Retro Theme Class

**Component:** /src/app/components/blocks/display/AspectRatio.tsx
**Severity:** Low
**Category:** BEM Classes

**Guideline Says:**
> Component should include both `wp-block-aspect-ratio` and `funky-aspect-ratio` classes

**Actual Implementation:**
```tsx
<div className="wp-block-aspect-ratio">
  {/* Missing funky-aspect-ratio class */}
</div>
```

**Expected Fix:**
```tsx
<div className={['wp-block-aspect-ratio', 'funky-aspect-ratio', className].filter(Boolean).join(' ')}>
  {children}
</div>
```

**Impact:** Retro theme hooks may not apply correctly

**Estimated Fix Time:** 1 minute

**Task:** Create P2 task to add funky-aspect-ratio class
```

---

## Related Documents

- **Guidelines Index:** `/guidelines/README.md`
- **Component Overview:** `/guidelines/overview-components.md`
- **Writing Standards:** `/guidelines/WRITING_GUIDELINES.md`
- **Task Management:** `/guidelines/PLANNING_GUIDELINES.md`

---

## Notes

- This audit focuses on **implementation compliance**, not design quality
- If implementation is better than guideline, update guideline
- Some violations may be intentional improvements - document reasoning
- Audit should be re-run quarterly or after major refactors

---

**Version:** 1.0  
**Last Updated:** 2026-03-14  
**Estimated Duration:** 2-4 hours  
**Output:** Audit report + task list + updated master task list
