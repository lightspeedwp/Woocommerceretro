# Animation Guidelines

**Component Type:** Interaction Pattern  
**Scope:** Cross-Device (Mobile, Tablet, Desktop)  
**Related:** [/guidelines/interactions/transitions.md], [/guidelines/performance/animations.md], [/guidelines/mobile/animations.md]

---

## Overview

This document defines animation standards for the WooCommerce prototype across all devices. Animations enhance user experience by providing visual feedback, guiding attention, and creating smooth transitions between states.

**Philosophy:** Animations should be purposeful, performant, and accessible. They must respect user preferences (`prefers-reduced-motion`) and device capabilities.

---

## Duration Standards

### By Device Type

Animation durations scale with device capabilities and user expectations:

| Device Type | Viewport Width | Duration Range | Rationale |
|-------------|----------------|----------------|-----------|
| **Mobile** | < 640px | 150ms - 300ms | Snappier feel for touch interactions |
| **Tablet** | 640px - 1024px | 200ms - 400ms | Balanced between mobile and desktop |
| **Desktop** | > 1024px | 200ms - 500ms | Smoother, more refined animations |

**Why different durations?**
- Mobile users expect immediate feedback from touch interactions
- Desktop users perceive subtle animations better with mouse precision
- Tablet sits between both interaction models

---

### By Animation Type

| Animation Type | Mobile | Tablet | Desktop | Use Case |
|----------------|--------|--------|---------|----------|
| **Micro** | 150ms | 175ms | 200ms | Button hover, focus ring, checkbox toggle |
| **Short** | 200ms | 250ms | 300ms | Fade in/out, tooltip show/hide |
| **Medium** | 300ms | 350ms | 400ms | Drawer slide, modal open, dropdown expand |
| **Long** | 400ms | 450ms | 500ms | Page transitions, multi-step animations |

**Implementation:**

```css
/* Micro animations - Button hover */
.wp-block-button__link {
  transition: background-color 150ms ease-out;
}

@media (min-width: 640px) {
  .wp-block-button__link {
    transition: background-color 175ms ease-out;
  }
}

@media (min-width: 1024px) {
  .wp-block-button__link {
    transition: background-color 200ms ease-out;
  }
}

/* Short animations - Fade in */
.fade-in {
  animation: fadeIn 200ms ease-out;
}

@media (min-width: 640px) {
  .fade-in {
    animation: fadeIn 250ms ease-out;
  }
}

@media (min-width: 1024px) {
  .fade-in {
    animation: fadeIn 300ms ease-out;
  }
}

/* Medium animations - Drawer */
.wc-block-mini-cart__drawer {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 640px) {
  .wc-block-mini-cart__drawer {
    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
}

@media (min-width: 1024px) {
  .wc-block-mini-cart__drawer {
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
}
```

---

## Easing Functions

Easing functions control the acceleration curve of animations.

### Standard Easing Curves

| Easing | CSS Value | Use Case |
|--------|-----------|----------|
| **Ease Out** | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the screen |
| **Ease In** | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting the screen |
| **Ease In-Out** | `cubic-bezier(0.4, 0, 0.2, 1)` | State changes (expand/collapse) |
| **Linear** | `linear` | Progress indicators, loaders |
| **Bounce** | `cubic-bezier(0.68, -0.55, 0.27, 1.55)` | Success feedback, CTAs (use sparingly) |

**Implementation:**

```css
/* Enter animations - Ease Out */
.modal-enter {
  animation: slideIn 300ms cubic-bezier(0, 0, 0.2, 1);
}

/* Exit animations - Ease In */
.modal-exit {
  animation: slideOut 300ms cubic-bezier(0.4, 0, 1, 1);
}

/* State changes - Ease In-Out */
.accordion-toggle {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Loading indicators - Linear */
.progress-bar {
  transition: width 200ms linear;
}

/* Success feedback - Bounce (sparingly) */
.add-to-cart-success {
  animation: bounce 400ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

### When to Use Each Easing

**Ease Out (Elements Entering):**
- Modal appearing
- Dropdown expanding
- Toast notification sliding in
- Product card appearing on scroll

**Ease In (Elements Exiting):**
- Modal closing
- Dropdown collapsing
- Toast notification sliding out
- Off-screen menu hiding

**Ease In-Out (State Changes):**
- Accordion expand/collapse
- Tab switching
- Filter panel toggle
- Product image zoom

**Linear (Continuous Progress):**
- Loading spinners
- Progress bars
- Skeleton loaders
- Countdown timers

---

## Performance Optimization

### Mobile-Specific Optimizations

Mobile devices have limited processing power and battery. Follow these rules:

#### ✅ DO (Mobile)

1. **Only animate `transform` and `opacity`**
   ```css
   /* ✅ GOOD - Hardware accelerated */
   .slide-in {
     transform: translateX(0);
     opacity: 1;
     transition: transform 300ms, opacity 300ms;
   }
   ```

2. **Use `will-change` sparingly**
   ```css
   /* ✅ GOOD - Only for active animations */
   .drawer.is-opening {
     will-change: transform;
   }
   
   .drawer.is-open {
     will-change: auto; /* Remove after animation */
   }
   ```

3. **Limit simultaneous animations**
   ```css
   /* ✅ GOOD - Animate one element at a time */
   .modal-enter {
     animation: fadeIn 300ms ease-out;
   }
   
   .modal-enter .modal-content {
     animation: slideUp 300ms ease-out 100ms; /* Stagger by 100ms */
   }
   ```

#### ❌ DON'T (Mobile)

1. **Don't animate layout properties**
   ```css
   /* ❌ BAD - Triggers layout recalculation */
   .expand {
     transition: width 300ms, height 300ms, padding 300ms;
   }
   
   /* ✅ GOOD - Use transform instead */
   .expand {
     transform: scaleX(1.2) scaleY(1.2);
     transition: transform 300ms;
   }
   ```

2. **Don't use `will-change` globally**
   ```css
   /* ❌ BAD - Wastes memory */
   * {
     will-change: transform;
   }
   ```

3. **Don't animate box-shadow**
   ```css
   /* ❌ BAD - Expensive on mobile */
   .card:hover {
     transition: box-shadow 300ms;
     box-shadow: 0 10px 30px rgba(0,0,0,0.2);
   }
   
   /* ✅ GOOD - Use pseudo-element */
   .card::after {
     content: '';
     position: absolute;
     box-shadow: 0 10px 30px rgba(0,0,0,0.2);
     opacity: 0;
     transition: opacity 300ms;
   }
   
   .card:hover::after {
     opacity: 1;
   }
   ```

---

### Desktop-Specific Optimizations

Desktop devices can handle more complex animations:

#### ✅ Acceptable on Desktop

1. **Parallax effects**
   ```css
   @media (min-width: 1024px) {
     .hero-background {
       transform: translateY(var(--scroll-y));
       transition: transform 100ms linear;
     }
   }
   ```

2. **Multi-layer animations**
   ```css
   @media (min-width: 1024px) {
     .product-card:hover .product-card__image {
       transform: scale(1.05);
       transition: transform 400ms ease-out;
     }
     
     .product-card:hover .product-card__overlay {
       opacity: 1;
       transition: opacity 400ms ease-out 100ms; /* Stagger */
     }
   }
   ```

3. **SVG path animations**
   ```css
   @media (min-width: 1024px) {
     .animated-icon path {
       stroke-dasharray: 100;
       stroke-dashoffset: 100;
       animation: drawPath 1000ms ease-out forwards;
     }
   }
   ```

---

### Performance Checklist

Before deploying an animation:

- [ ] Uses `transform` or `opacity` (not `width`, `height`, `top`, `left`)
- [ ] Duration ≤ 500ms (no long animations)
- [ ] `will-change` removed after animation completes
- [ ] Tested on mobile device (not just DevTools)
- [ ] No jank (maintains 60fps)
- [ ] Respects `prefers-reduced-motion`
- [ ] No simultaneous animations of >3 elements
- [ ] Box-shadow animated via pseudo-element (if needed)

---

## Accessibility

### Reduced Motion (ALL DEVICES)

**CRITICAL:** All animations MUST respect `prefers-reduced-motion` preference.

**📖 Comprehensive Guide:** See **[/guidelines/REDUCED_MOTION_GUIDELINES.md](/guidelines/REDUCED_MOTION_GUIDELINES.md)** for complete coding standards including CSS patterns (6 patterns), JavaScript detection, the `usePrefersReducedMotion` React hook, essential-vs-decorative decision tree, testing procedures, and common mistakes.

#### Implementation

```css
/* Default: Animations enabled */
.fade-in {
  animation: fadeIn 300ms ease-out;
}

.slide-in {
  animation: slideIn 400ms cubic-bezier(0, 0, 0.2, 1);
}

/* Reduced motion: Disable animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

#### Why This Matters

Users with:
- Vestibular disorders (motion sickness)
- ADHD (distracted by movement)
- Cognitive disabilities (overwhelmed by animations)
- Migraine triggers (flashing or moving content)
- Low battery (want to conserve power)

All these users enable `prefers-reduced-motion`, and we MUST respect it.

---

### Focus Management During Animations

When animating focus states, ensure:

1. **Focus ring is always visible**
   ```css
   .button:focus-visible {
     outline: 2px solid var(--wp--preset--color--primary);
     outline-offset: 2px;
     transition: outline-offset 200ms ease-out;
   }
   
   /* Even during reduced motion */
   @media (prefers-reduced-motion: reduce) {
     .button:focus-visible {
       transition: none;
       outline-offset: 2px; /* Still visible */
     }
   }
   ```

2. **Focus doesn't shift during animations**
   ```javascript
   // ❌ BAD - Focus shifts during animation
   const openModal = () => {
     modal.classList.add('is-opening');
     setTimeout(() => {
       modal.querySelector('.modal-close').focus(); // Too early!
     }, 0);
   };
   
   // ✅ GOOD - Focus after animation completes
   const openModal = () => {
     modal.classList.add('is-opening');
     modal.addEventListener('animationend', () => {
       modal.querySelector('.modal-close').focus();
     }, { once: true });
   };
   ```

---

## Common Animation Patterns

### 1. Fade In/Out

**Use for:** Tooltips, toasts, modal overlays

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-in {
  animation: fadeIn 300ms ease-out forwards;
}

.fade-out {
  animation: fadeOut 300ms ease-in forwards;
}
```

---

### 2. Slide In/Out

**Use for:** Drawers, side panels, mobile menus

```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.wc-block-mini-cart__drawer {
  animation: slideInRight 400ms cubic-bezier(0, 0, 0.2, 1);
}

.wc-block-mini-cart__drawer.is-closing {
  animation: slideOutRight 400ms cubic-bezier(0.4, 0, 1, 1);
}
```

---

### 3. Scale In/Out

**Use for:** Modals, popovers, quick view

```css
@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scaleOut {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}

.modal {
  animation: scaleIn 300ms cubic-bezier(0, 0, 0.2, 1);
}

.modal.is-closing {
  animation: scaleOut 300ms cubic-bezier(0.4, 0, 1, 1);
}
```

---

### 4. Expand/Collapse

**Use for:** Accordions, FAQs, filter panels

```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-content.is-open {
  max-height: 1000px; /* Large enough for content */
}

/* Better: Use grid for height animation */
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-content.is-open {
  grid-template-rows: 1fr;
}

.accordion-content > div {
  overflow: hidden;
}
```

---

### 5. Skeleton Loader

**Use for:** Loading states, content placeholders

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--wp--preset--color--neutral-100) 0%,
    var(--wp--preset--color--neutral-200) 50%,
    var(--wp--preset--color--neutral-100) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2000ms linear infinite;
}

/* Reduced motion: Static gradient */
@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
    background: var(--wp--preset--color--neutral-100);
  }
}
```

---

### 6. Button Press

**Use for:** Touch feedback, button clicks

```css
.wp-block-button__link {
  transition: transform 150ms ease-out;
}

.wp-block-button__link:active {
  transform: scale(0.95);
}

/* Desktop: Subtle lift on hover */
@media (min-width: 1024px) and (hover: hover) {
  .wp-block-button__link:hover {
    transform: translateY(-2px);
  }
}
```

---

## React/JavaScript Implementation

### Using CSS Classes

```tsx
import { useState } from 'react';

export const AnimatedModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match CSS animation duration
  };
  
  return isOpen ? (
    <div className={`modal ${isClosing ? 'is-closing' : ''}`}>
      {children}
      <button onClick={closeModal}>Close</button>
    </div>
  ) : null;
};
```

---

### Using Motion Libraries

For complex animations, use **motion** (formerly Framer Motion):

```tsx
import { motion } from 'motion/react';

export const AnimatedDrawer = ({ isOpen, children }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{
        duration: 0.4,
        ease: [0, 0, 0.2, 1] // cubic-bezier(0, 0, 0.2, 1)
      }}
      className="wc-block-mini-cart__drawer"
    >
      {children}
    </motion.div>
  );
};
```

**Respect reduced motion:**

```tsx
import { motion, useReducedMotion } from 'motion/react';

export const AnimatedElement = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.3
      }}
    >
      Content
    </motion.div>
  );
};
```

---

## Testing Animations

### Visual Testing

1. **Test at different viewport sizes**
   - Mobile (375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1280px, 1920px)

2. **Test animation smoothness**
   - Open DevTools Performance tab
   - Record animation
   - Verify 60fps (no dropped frames)

3. **Test reduced motion**
   ```css
   /* In DevTools: Rendering → Emulate CSS media feature prefers-reduced-motion */
   ```

---

### Automated Testing

```javascript
// Jest + React Testing Library
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

test('animation respects reduced motion', async () => {
  // Mock reduced motion preference
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
  }));
  
  render(<AnimatedComponent />);
  
  const element = screen.getByRole('dialog');
  const styles = window.getComputedStyle(element);
  
  expect(styles.animationDuration).toBe('0.01ms');
});
```

---

## WordPress Block Editor Integration

Animations in the block editor should be minimal to avoid distraction:

```javascript
// block.json
{
  "supports": {
    "animations": {
      "fadeIn": true,
      "slideIn": true,
      "scaleIn": true
    }
  }
}

// block.js
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit({ attributes }) {
  const blockProps = useBlockProps({
    className: attributes.animation ? `animate-${attributes.animation}` : '',
  });
  
  return <div {...blockProps}>Block content</div>;
}
```

---

## Common Mistakes

### ❌ Mistake 1: Animating Width/Height

```css
/* ❌ BAD - Triggers layout */
.expand {
  width: 100px;
  transition: width 300ms;
}

.expand:hover {
  width: 200px;
}

/* ✅ GOOD - Use transform */
.expand {
  transform: scaleX(1);
  transition: transform 300ms;
}

.expand:hover {
  transform: scaleX(2);
}
```

---

### ❌ Mistake 2: Too Many Simultaneous Animations

```css
/* ❌ BAD - 5 elements animating at once */
.hero-enter .hero-title,
.hero-enter .hero-subtitle,
.hero-enter .hero-image,
.hero-enter .hero-cta,
.hero-enter .hero-background {
  animation: fadeIn 300ms ease-out;
}

/* ✅ GOOD - Staggered animations */
.hero-enter .hero-title {
  animation: fadeIn 300ms ease-out;
}

.hero-enter .hero-subtitle {
  animation: fadeIn 300ms ease-out 100ms; /* 100ms delay */
}

.hero-enter .hero-cta {
  animation: fadeIn 300ms ease-out 200ms; /* 200ms delay */
}
```

---

### ❌ Mistake 3: Ignoring Reduced Motion

```css
/* ❌ BAD - No reduced motion support */
.button {
  transition: all 300ms ease-out;
}

/* ✅ GOOD - Respects user preference */
.button {
  transition: all 300ms ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}
```

---

## Related Documentation

- [Transitions](./transitions.md) - State transition patterns
- [Gestures](./gestures.md) - Touch vs mouse interaction patterns
- [Mobile Animations](../mobile/animations.md) - Mobile-specific animation optimizations
- [Performance - Animations](../performance/animations.md) - Animation performance optimization
- [Focus Management](./focus-management.md) - Keyboard navigation and focus patterns

---

## Summary

### ✅ Animation Best Practices

1. **Duration:** 150-500ms depending on device and animation type
2. **Easing:** Ease-out for entering, ease-in for exiting, ease-in-out for state changes
3. **Performance:** Only animate `transform` and `opacity` on mobile
4. **Accessibility:** Always respect `prefers-reduced-motion`
5. **Focus:** Manage focus after animations complete
6. **Testing:** Test on real devices, verify 60fps, check reduced motion

### 📊 Quick Reference

| Animation | Mobile | Desktop | Easing | Use Case |
|-----------|--------|---------|--------|----------|
| Button hover | 150ms | 200ms | ease-out | Micro-interaction |
| Fade in | 200ms | 300ms | ease-out | Tooltip, toast |
| Drawer slide | 300ms | 400ms | ease-in-out | MiniCart, filters |
| Modal open | 300ms | 400ms | ease-out | Quick view, dialog |
| Page transition | 400ms | 500ms | ease-in-out | Route change |

---

**Version:** 1.0  
**Last Updated:** January 12, 2026  
**Maintained By:** Development Team
