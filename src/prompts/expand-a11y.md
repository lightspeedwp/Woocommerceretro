# Expand Accessibility — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand a11y`
**Duration:** 20-40 minutes

---

## Objective

Go beyond the basic WCAG AA checklist and identify advanced accessibility patterns not yet implemented. Focus on keyboard navigation flows, screen reader announcements for dynamic content, focus management in modals/drawers, skip links, live regions, and reduced motion compliance.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — accessibility rules (Section 2.4)
2. Read `/guidelines/REDUCED_MOTION_GUIDELINES.md`
3. Read `/guidelines/interactions/focus-management.md`
4. Read `/guidelines/mobile/buttons.md` — touch targets

---

## Execution Steps

### Phase 1: Audit current a11y features (5-10 min)

Check which accessibility patterns exist:

**Keyboard navigation:**
- [ ] Skip to main content link
- [ ] Focus visible indicator on all interactive elements
- [ ] Tab order follows visual order
- [ ] Arrow key navigation in menus
- [ ] Escape key closes modals/drawers/dropdowns
- [ ] Enter/Space activates buttons and links
- [ ] Home/End keys in lists and menus

**Focus management:**
- [ ] Focus trap in modals and drawers
- [ ] Focus returns to trigger element when modal closes
- [ ] Focus moves to new content when route changes
- [ ] Focus moves to error message on form validation
- [ ] No focus loss when content is dynamically added/removed

**Screen reader support:**
- [ ] `aria-live` regions for dynamic content (cart updates, notifications, search results)
- [ ] `aria-expanded` on all toggle triggers (menus, accordions, filters)
- [ ] `aria-current="page"` on active navigation links
- [ ] `aria-label` on icon-only buttons
- [ ] `aria-describedby` linking form fields to error messages
- [ ] `role="alert"` on form validation errors
- [ ] `aria-busy` on loading states
- [ ] Visually hidden text for context (`sr-only` / `.screen-reader-text`)
- [ ] Meaningful image alt text (not "image" or "photo")
- [ ] `aria-hidden="true"` on decorative elements

**Reduced motion:**
- [ ] `prefers-reduced-motion` media query on all CSS animations
- [ ] JavaScript animation gating via `useReducedMotion` hook
- [ ] Carousel auto-play disabled when reduced motion preferred
- [ ] No parallax effects when reduced motion preferred

**Colour and contrast:**
- [ ] 4.5:1 contrast ratio on all text (AA minimum)
- [ ] 3:1 contrast ratio on UI components and borders
- [ ] Information not conveyed by colour alone (icons, patterns, text labels)
- [ ] Focus indicator meets 3:1 contrast against adjacent colours
- [ ] Dark mode maintains contrast ratios

**Forms:**
- [ ] All inputs have visible labels (not just placeholders)
- [ ] Error messages are programmatically associated with fields
- [ ] Required fields indicated with more than just colour
- [ ] Autocomplete attributes on address/payment fields
- [ ] Form submission confirmation announced to screen readers

Mark each as: ✅ IMPLEMENTED | ⚠️ PARTIAL | ❌ MISSING

### Phase 2: Identify high-impact gaps (5-10 min)

Prioritise by user impact:

| Priority | Criteria | Examples |
|----------|----------|---------|
| P0 | Blocks task completion for assistive tech users | Missing focus trap, no skip link, form errors not announced |
| P1 | Degrades experience significantly | Missing aria-live on cart, no keyboard nav in menus |
| P2 | Polish and best practice | aria-current, aria-busy, optimised screen reader text |

### Phase 3: Recommend a11y additions (5-10 min)

For each recommendation:

```markdown
### A11y [N]: [Feature]

**Type:** Keyboard / Focus / Screen Reader / Motion / Contrast / Form
**Priority:** P0 / P1 / P2
**Affected components:** [list]
**Implementation:** [Brief approach — hook, CSS, aria attribute, component change]
**WCAG criterion:** [e.g., 2.4.3 Focus Order, 4.1.3 Status Messages]
**Estimated effort:** S / M / L
```

### Phase 4: Summary (2 min)

```
Accessibility expansion analysis complete.
- Features audited: [X]
- ✅ Implemented: [A] | ⚠️ Partial: [B] | ❌ Missing: [C]
- Recommendations:
  - P0 (task-blocking): [N]
  - P1 (experience-degrading): [N]
  - P2 (polish): [N]

→ Next: Say "continue" to implement the highest-priority a11y improvement.
→ Or: Say "audit a11y" for a detailed compliance audit report.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/REDUCED_MOTION_GUIDELINES.md`
- `/guidelines/interactions/focus-management.md`
- `/guidelines/mobile/buttons.md`

---

**Version:** 1.0
**Trigger Word:** `expand a11y`
