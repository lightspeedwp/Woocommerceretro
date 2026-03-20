# Expand Animations — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand animations`
**Duration:** 15-25 minutes

---

## Objective

Identify pages and components that would benefit from scroll-triggered animations, micro-interactions, hover effects, page transitions, and CSS transitions. All recommendations must respect `prefers-reduced-motion` and align with the PlayPocket retro gaming aesthetic.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — critical rules
2. Read `/guidelines/interactions/animations.md` — animation standards, duration, easing
3. Read `/guidelines/REDUCED_MOTION_GUIDELINES.md` — motion preferences
4. Read `/guidelines/mobile/animations.md` — mobile animation performance
5. Read `/guidelines/design-tokens/Dark-Mode.md` — ensure animations work in both modes

---

## Execution Steps

### Phase 1: Inventory existing animations (5 min)

Scan CSS and component files for current animation usage:

| Component/CSS | Animation Type | Duration | Easing | Reduced Motion? |
|--------------|---------------|----------|--------|----------------|
| FloatingInvaders.tsx | CSS keyframe | ∞ loop | linear | ? |
| ... | ... | ... | ... | ... |

### Phase 2: Identify animation opportunities (5-10 min)

**Scroll-triggered reveals:**
- [ ] Hero section entrance (fade-up, slide-in)
- [ ] Product grid staggered reveal
- [ ] Stats counter number animation
- [ ] Testimonial card entrance
- [ ] Feature card staggered entrance
- [ ] Section headings fade-in
- [ ] Image lazy-load fade-in

**Micro-interactions:**
- [ ] Add to cart button feedback (pulse, checkmark)
- [ ] Wishlist heart toggle (fill animation)
- [ ] Quantity +/- button press feedback
- [ ] Star rating hover preview
- [ ] Filter chip add/remove
- [ ] Toast notification slide-in/out
- [ ] Accordion expand/collapse
- [ ] Tab switch crossfade
- [ ] Search input focus expand
- [ ] Mobile menu slide-in

**Hover effects:**
- [ ] Product card image zoom or overlay
- [ ] Navigation link underline slide
- [ ] Button scale/glow on hover
- [ ] Card lift/shadow on hover
- [ ] Category tile overlay reveal

**Page transitions:**
- [ ] Route change crossfade
- [ ] Page load skeleton-to-content

**Retro-themed animations (PlayPocket specific):**
- [ ] Pixel-art loading spinner
- [ ] CRT screen flicker on page load
- [ ] Scanline overlay pulse
- [ ] Pixel dissolve transitions
- [ ] 8-bit bounce easing on reveals
- [ ] "Power on" animation for hero sections

### Phase 3: Assess reduced motion compliance (3-5 min)

For every existing and proposed animation:
1. Does it have a `prefers-reduced-motion: reduce` fallback?
2. Is the fallback an instant state (no motion) or a simple opacity fade?
3. Are infinite-loop animations paused when reduced motion is preferred?
4. Is auto-playing content (carousels) stopped?

### Phase 4: Recommend animations (5-10 min)

```markdown
### Animation [N]: [Description]

**Component:** [file path]
**Type:** Scroll reveal / Micro-interaction / Hover / Transition / Retro
**CSS or JS:** CSS transition/keyframe / IntersectionObserver + class toggle
**Duration:** [e.g., 300ms]
**Easing:** [e.g., cubic-bezier(0.16, 1, 0.3, 1)]
**Reduced motion fallback:** [instant / opacity only / none]
**Priority:** P0 (key UX feedback) / P1 (polish) / P2 (delight)
**Performance:** [CPU/GPU impact — avoid layout-triggering properties]
```

### Phase 5: Summary (2 min)

```
Animation expansion analysis complete.
- Existing animations: [X]
- Reduced motion compliant: [Y] of [X]
- Recommendations:
  - Scroll reveals: [N]
  - Micro-interactions: [N]
  - Hover effects: [N]
  - Retro-themed: [N]
  - P0: [N] | P1: [N] | P2: [N]

→ Next: Say "continue" to implement the highest-priority animations.
→ Or: Say "audit a11y" to verify reduced motion compliance.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/interactions/animations.md`
- `/guidelines/REDUCED_MOTION_GUIDELINES.md`
- `/guidelines/mobile/animations.md`

---

**Version:** 1.0
**Trigger Word:** `expand animations`
