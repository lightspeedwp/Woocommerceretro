# Complete Feature Development Workflow

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Workflow  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | End-to-End Workflow |
| **Target** | Complete feature from design to deployment |
| **Complexity** | High |
| **Estimated Time** | 4-8 hours (full feature) |
| **Prerequisites** | All component/testing prompts available |
| **Output Files** | Multiple: components, tests, docs, reports |

---

## 🎯 Objective

Execute a complete feature development workflow from initial planning through deployment, including components, patterns, tests, documentation, and quality assurance.

### What This Workflow Does:
- ✅ Guides complete feature development
- ✅ Ensures all quality standards met
- ✅ Includes testing at every step
- ✅ Generates comprehensive documentation
- ✅ Performs accessibility audits
- ✅ Creates deployment checklist

### What This Workflow Does NOT Do:
- ❌ Replace human decision-making
- ❌ Automatically deploy code
- ❌ Handle backend/server logic
- ❌ Manage version control directly

---

## 📚 Context & Background

### Feature Development Lifecycle:

```
Planning → Design → Implementation → Testing → Documentation → Review → Deploy
```

This workflow provides a systematic approach to:
1. Plan feature requirements
2. Design component architecture
3. Implement with quality standards
4. Test comprehensively
5. Document thoroughly
6. Review for compliance
7. Prepare for deployment

---

## 📋 Requirements

### Phase 1: Planning
- Clear feature requirements
- User stories defined
- Acceptance criteria documented
- Design mockups/wireframes

### Phase 2: Architecture
- Component breakdown
- Data flow mapping
- State management plan
- Integration points identified

### Phase 3: Implementation
- All components built
- WordPress/WooCommerce aligned
- Dark mode support
- Responsive design

### Phase 4: Testing
- Unit tests (≥70% coverage)
- Integration tests
- Accessibility tests
- Manual QA

### Phase 5: Documentation
- Component guidelines
- Usage examples
- API documentation
- Testing instructions

### Phase 6: Quality Assurance
- WCAG audit
- Performance review
- Code review checklist
- Visual regression testing

---

## 🔧 Workflow Steps

### **Phase 1: Planning & Requirements** (30-60 min)

#### Step 1.1: Define Feature Requirements

**Action:** Document complete feature spec

**Template:**
```markdown
# Feature: [Feature Name]

## Overview
[Brief description of feature]

## User Stories
- As a [user type], I want to [action] so that [benefit]
- As a [user type], I want to [action] so that [benefit]

## Acceptance Criteria
- [ ] User can [action]
- [ ] System displays [behavior]
- [ ] Error state shows [message]
- [ ] Success state shows [message]

## Out of Scope
- [What this feature does NOT include]

## Dependencies
- [Other features/components needed]

## Technical Requirements
- WordPress alignment
- WooCommerce integration
- Dark mode support
- WCAG AA compliance
- Mobile responsive
```

---

#### Step 1.2: Create Component Breakdown

**Action:** List all components needed

**Template:**
```markdown
## Component Architecture

### New Components
1. **ComponentName** (Block)
   - Purpose: [description]
   - Props: [list]
   - State: [list]

2. **PatternName** (Pattern)
   - Purpose: [description]
   - Composes: [components]

### Modified Components
1. **ExistingComponent**
   - Changes needed: [list]

### Data/Context Changes
- [ ] New context needed: [name]
- [ ] Modify existing context: [name]
- [ ] New data structures: [list]
```

---

#### Step 1.3: Design Data Flow

**Action:** Map data flow and state

**Template:**
```markdown
## Data Flow

### State Management
- **Context:** [CartContext]
  - State: [items, total, count]
  - Actions: [addItem, removeItem]

### API Calls
- **Endpoint:** GET /api/products
  - Response: [shape]
  - Error handling: [approach]

### Component Communication
ParentComponent
  → ChildComponent (props: data, onChange)
    → GrandchildComponent (props: item, onDelete)
```

---

### **Phase 2: Implementation** (2-4 hours)

#### Step 2.1: Set Up Component Structure

**Action:** Create component files with boilerplate

**Checklist:**
- [ ] Create `/src/app/components/blocks/[ComponentName].tsx`
- [ ] Create `/src/app/components/patterns/[PatternName].tsx`
- [ ] Add to component index
- [ ] Set up proper imports

---

#### Step 2.2: Implement Block Components

**Action:** Use ProductCard prompt as template

**Refer to:** `/prompts/components/blocks/component_create_product-card_v1.md`

**For each block component:**
1. Define TypeScript interfaces
2. Implement component logic
3. Add WordPress class names
4. Style in global CSS
5. Include dark mode
6. Add accessibility features
7. Write JSDoc comments

---

#### Step 2.3: Implement Pattern Components

**Action:** Use Hero prompt as template

**Refer to:** `/prompts/components/patterns/component_create_hero_v1.md`

**For each pattern:**
1. Compose block components
2. Define pattern-specific props
3. Handle responsive layout
4. Add section styling
5. Include CTA integration
6. Ensure accessibility

---

#### Step 2.4: Add Global Styles

**Action:** Write CSS in `/src/styles/globals.css`

**Refer to:** `/prompts/refactoring/css-migration/refactor_css_tailwind-to-wordpress_v1.md`

**CSS Requirements:**
```css
/* Component CSS */
.woocommerce-feature-name {
  /* Base styles with WordPress variables */
  background: var(--wp--preset--color--surface);
  padding: var(--wp--preset--spacing--lg);
}

/* Dark mode */
body.dark-mode .woocommerce-feature-name {
  background: var(--wp--preset--color--surface);
}

/* Responsive */
@media (min-width: 768px) {
  .woocommerce-feature-name {
    padding: var(--wp--preset--spacing--xl);
  }
}
```

---

### **Phase 3: Testing** (1-2 hours)

#### Step 3.1: Write Unit Tests

**Action:** Use Unit Test prompt

**Refer to:** `/prompts/testing/unit-tests/test_write_unit-tests_component_v1.md`

**For each component:**
```tsx
describe('ComponentName', () => {
  it('renders with required props', () => {
    // Test
  });

  it('handles user interaction', () => {
    // Test
  });

  it('displays error state', () => {
    // Test
  });

  it('is accessible', () => {
    // Test with axe
  });
});
```

**Target:** ≥70% code coverage

---

#### Step 3.2: Write Integration Tests

**Action:** Use Integration Test prompt

**Refer to:** `/prompts/testing/integration-tests/test_write_integration-tests_v1.md`

**For complete feature:**
```tsx
describe('Feature Integration', () => {
  it('completes full user flow', () => {
    // Test end-to-end workflow
  });

  it('handles error cases', () => {
    // Test failure scenarios
  });

  it('updates state correctly', () => {
    // Test context/state management
  });
});
```

---

#### Step 3.3: Run Accessibility Tests

**Action:** Test with axe-core

**Checklist:**
- [ ] No violations found
- [ ] Color contrast verified
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Touch targets adequate

---

### **Phase 4: Documentation** (45-90 min)

#### Step 4.1: Write Component Guidelines

**Action:** Use Component Guideline prompt

**Refer to:** `/prompts/documentation/components/docs_write_component-guideline_v1.md`

**For each major component:**
1. Overview and purpose
2. When to use/not use
3. Complete props reference
4. Usage examples
5. Accessibility requirements
6. Dark mode implementation
7. Testing guidelines

**Location:** `/guidelines/blocks/[ComponentName].md`

---

#### Step 4.2: Update Architecture Docs

**Action:** Document in architecture overview

**Files to update:**
- `/guidelines/overview-components.md` (add new components)
- `/guidelines/COMPONENT_INDEX.md` (add to index)
- `/ARCHITECTURE.md` (if architecture changes)

---

#### Step 4.3: Write Feature Documentation

**Action:** Create feature guide

**Template:**
```markdown
# Feature: [Name]

## Overview
[Description]

## Components
- [List all components]

## Usage
\`\`\`tsx
// Example usage
\`\`\`

## Data Flow
[Diagram or description]

## Testing
[How to test]

## Known Issues
[Any limitations]

## Future Enhancements
[Planned improvements]
```

**Location:** `/docs/features/[feature-name].md`

---

### **Phase 5: Quality Assurance** (1-2 hours)

#### Step 5.1: Run WCAG Audit

**Action:** Use WCAG Audit prompt

**Refer to:** `/prompts/audits/accessibility/audit_wcag_color-contrast_v1.md`

**Audit all new color combinations:**
- [ ] All text meets AA (4.5:1)
- [ ] Buttons meet AA
- [ ] Links meet AA
- [ ] Document any exceptions

---

#### Step 5.2: Performance Review

**Action:** Check performance metrics

**Checklist:**
- [ ] No unnecessary re-renders
- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Lazy loading where appropriate
- [ ] Bundle size impact < 50KB

**Tools:**
- React DevTools Profiler
- Chrome DevTools Performance
- Bundle analyzer

---

#### Step 5.3: Code Review Checklist

**Action:** Self-review against standards

**Checklist:**

**Code Quality:**
- [ ] TypeScript types complete
- [ ] No `any` types
- [ ] JSDoc comments on exports
- [ ] No console.log statements
- [ ] Proper error handling

**Standards Compliance:**
- [ ] WordPress class names used
- [ ] No Tailwind classes
- [ ] CSS in global stylesheet
- [ ] Dark mode support complete
- [ ] Responsive design implemented

**Accessibility:**
- [ ] Semantic HTML
- [ ] ARIA labels where needed
- [ ] Keyboard accessible
- [ ] Focus indicators visible
- [ ] Alt text on images

**Testing:**
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] ≥70% code coverage
- [ ] No console errors

**Documentation:**
- [ ] Component guidelines written
- [ ] Usage examples provided
- [ ] Props documented
- [ ] Accessibility notes included

---

### **Phase 6: Review & Deployment** (30-60 min)

#### Step 6.1: Create Pull Request

**Action:** Prepare PR with complete information

**PR Template:**
```markdown
# Feature: [Name]

## Description
[What this feature does]

## Components Added
- ComponentName.tsx
- PatternName.tsx

## Tests Added
- ComponentName.test.tsx
- FeatureName.integration.test.tsx

## Documentation
- /guidelines/blocks/ComponentName.md
- /docs/features/feature-name.md

## Checklist
- [ ] All tests passing
- [ ] WCAG AA compliant
- [ ] Documentation complete
- [ ] Dark mode support
- [ ] Mobile responsive
- [ ] Code reviewed

## Screenshots
[Before/after images]

## Testing Instructions
1. [How to test manually]

## Related Issues
- Closes #[issue number]
```

---

#### Step 6.2: Generate Deployment Checklist

**Action:** Create deployment checklist

**Template:**
```markdown
# Deployment Checklist: [Feature Name]

## Pre-Deployment
- [ ] All tests passing (unit + integration)
- [ ] Code coverage ≥70%
- [ ] WCAG audit complete (AA compliant)
- [ ] Performance review complete
- [ ] Documentation complete
- [ ] Peer review approved

## Deployment Steps
- [ ] Merge feature branch to develop
- [ ] Run full test suite
- [ ] Build production bundle
- [ ] Verify bundle size acceptable
- [ ] Deploy to staging
- [ ] QA test on staging
- [ ] Deploy to production

## Post-Deployment
- [ ] Verify feature works in production
- [ ] Monitor for errors (24 hours)
- [ ] Gather user feedback
- [ ] Update documentation if needed

## Rollback Plan
- [ ] Previous version tagged
- [ ] Rollback script tested
- [ ] Database migrations reversible
- [ ] Feature flag can disable feature
```

---

## ✅ Complete Workflow Checklist

Use this checklist to track progress through entire workflow:

### Planning Phase
- [ ] Feature requirements documented
- [ ] Component breakdown complete
- [ ] Data flow designed
- [ ] Dependencies identified
- [ ] Timeline estimated

### Implementation Phase
- [ ] All components created
- [ ] Patterns implemented
- [ ] CSS styles added
- [ ] Dark mode support complete
- [ ] Responsive design verified

### Testing Phase
- [ ] Unit tests written (≥70% coverage)
- [ ] Integration tests written
- [ ] Accessibility tests passing
- [ ] Manual QA complete
- [ ] Edge cases tested

### Documentation Phase
- [ ] Component guidelines written
- [ ] Feature documentation created
- [ ] Architecture docs updated
- [ ] Usage examples provided
- [ ] API documentation complete

### Quality Assurance Phase
- [ ] WCAG audit complete (AA compliant)
- [ ] Performance review passed
- [ ] Code review checklist complete
- [ ] Visual regression tested
- [ ] Cross-browser tested

### Deployment Phase
- [ ] Pull request created
- [ ] Peer review approved
- [ ] Deployment checklist prepared
- [ ] Staging deployment successful
- [ ] Production deployment ready

---

## 📝 Example: Complete Feature Walkthrough

### **Feature:** Product Wishlist

**Timeline:** 6 hours

**Phase 1: Planning (45 min)**

1. **Requirements:**
   - Users can add products to wishlist
   - Wishlist persists across sessions
   - Users can view/manage wishlist
   - Wishlist accessible from header

2. **Components:**
   - `WishlistButton` (Block) - Add/remove button on product cards
   - `WishlistDrawer` (Part) - Slide-out wishlist view
   - `WishlistItem` (Block) - Individual wishlist item
   - `WishlistContext` (Context) - State management

3. **Data Flow:**
   - Context stores wishlist items
   - LocalStorage for persistence
   - Product cards use WishlistButton
   - Header shows wishlist count

**Phase 2: Implementation (2.5 hours)**

1. Created `WishlistContext.tsx` (30 min)
2. Built `WishlistButton.tsx` (45 min)
3. Built `WishlistItem.tsx` (30 min)
4. Built `WishlistDrawer.tsx` (45 min)
5. Added CSS styles (30 min)

**Phase 3: Testing (1 hour)**

1. Unit tests for all components (40 min)
2. Integration test for add/remove flow (20 min)
3. Coverage: 78%

**Phase 4: Documentation (45 min)**

1. WishlistButton guideline (20 min)
2. WishlistContext documentation (15 min)
3. Feature overview doc (10 min)

**Phase 5: QA (45 min)**

1. WCAG audit - all colors AA compliant (20 min)
2. Performance check - bundle +12KB (10 min)
3. Code review checklist complete (15 min)

**Phase 6: Deployment (15 min)**

1. PR created with screenshots
2. Deployment checklist prepared
3. Ready for peer review

**Result:** Complete, production-ready feature in 6 hours!

---

## 📖 Related Prompts

**Use these prompts during workflow:**

- [ProductCard Component](/prompts/components/blocks/component_create_product-card_v1.md)
- [Hero Pattern](/prompts/components/patterns/component_create_hero_v1.md)
- [Unit Tests](/prompts/testing/unit-tests/test_write_unit-tests_component_v1.md)
- [Integration Tests](/prompts/testing/integration-tests/test_write_integration-tests_v1.md)
- [WCAG Audit](/prompts/audits/accessibility/audit_wcag_color-contrast_v1.md)
- [CSS Migration](/prompts/refactoring/css-migration/refactor_css_tailwind-to-wordpress_v1.md)
- [Component Guidelines](/prompts/documentation/components/docs_write_component-guideline_v1.md)

---

## 📝 Notes & Tips

### Best Practices:

💡 **Plan before coding** - 30 minutes of planning saves 2 hours of refactoring

💡 **Test as you go** - Write tests immediately after components

💡 **Document early** - Write guidelines while implementation is fresh

💡 **Review incrementally** - Don't wait until end to do QA

💡 **Use prompts** - Follow established patterns for consistency

### Common Pitfalls:

⚠️ **Skipping planning** - Leads to scope creep and rework

⚠️ **Forgetting dark mode** - Hard to add later

⚠️ **No accessibility testing** - Fails WCAG audit at end

⚠️ **Poor documentation** - Team can't use feature

⚠️ **No testing strategy** - Bugs discovered in production

---

**Status:** ✅ Active  
**Created:** 2026-01-10
