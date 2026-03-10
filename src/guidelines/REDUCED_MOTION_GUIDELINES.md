# Reduced Motion Accessibility Guidelines

**Type:** Process / Coding Standard  
**Category:** Accessibility  
**Status:** Complete  
**Version:** 1.0  
**Last Updated:** 2026-02-22

---

## Overview

The `prefers-reduced-motion` CSS media feature detects whether a user has enabled an operating-system setting that requests the interface minimise non-essential motion. This guideline defines **mandatory** coding standards for honouring that preference across all CSS, JavaScript, and React code in the WooCommerce prototype.

**WCAG References:**

| Success Criterion | Level | Title |
|---|---|---|
| [2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) | A | Three Flashes or Below Threshold |
| [2.3.3](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html) | AAA | Animation from Interactions |

---

## Purpose & Accessibility Significance

On-screen movement is more than a stylistic choice; for many users it is a **health concern**. Respecting `prefers-reduced-motion` specifically helps individuals with:

| Condition | Why Motion is Harmful |
|---|---|
| **Vestibular Disorders** | Large-scale motion, parallax scrolling, and zooming effects can trigger dizziness, nausea, and vertigo. |
| **Photosensitive Epilepsy** | Rapid flashing or high-contrast movement patterns can provoke seizures. |
| **ADHD / Cognitive Conditions** | Continuous or looping animations are highly distracting, making it difficult to focus on content. |
| **Migraines** | Animated content can trigger or intensify migraine episodes. |
| **Low-End Devices / Battery** | Reducing animation work saves CPU/GPU cycles and extends battery life on mobile devices. |

**This is not optional.** WCAG 2.1 Success Criterion 2.3.3 (AAA) requires that motion triggered by interaction can be disabled unless it is essential to the functionality.

---

## CSS Usage & Syntax

The `prefers-reduced-motion` media query accepts two values:

| Value | Meaning |
|---|---|
| `reduce` | The user has explicitly requested that the interface minimise motion. |
| `no-preference` | The user has made no motion preference known (the default). |

### Operating System Settings That Trigger `reduce`

| OS | Setting Location |
|---|---|
| **macOS / iOS** | System Settings > Accessibility > Display > Reduce Motion |
| **Windows** | Settings > Ease of Access > Display > Show animations in Windows |
| **Android** | Settings > Accessibility > Remove animations |
| **Linux (GNOME)** | Settings > Accessibility > Seeing > Reduced Animation |

---

### Strategy 1: The "Override" Approach (Recommended Default)

Define your animations normally, then use the `reduce` media query to remove or simplify them. This is the most common pattern and the one used throughout this project.

```css
/* Standard animation */
.blog-post-card {
  transition: transform 300ms ease, box-shadow 300ms ease;
}

.blog-post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Override for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .blog-post-card {
    transition: none;
  }
  .blog-post-card:hover {
    transform: none;
  }
}
```

**When to use:** Most components. Write the full animation experience first, then add the guard block. This is the prevailing pattern in every `*-funky.css` file in the project.

---

### Strategy 2: The "Opt-In" Approach (Progressive Enhancement)

Define the static state first, then only add animations for users who have **not** expressed a preference. This is considered progressive enhancement — motion is an upgrade, not the baseline.

```css
/* Static state is the default — works for everyone */
.blog-post-card {
  /* No transition defined here */
}

/* Only add motion if the user has not requested reduced motion */
@media (prefers-reduced-motion: no-preference) {
  .blog-post-card {
    transition: transform 300ms ease, box-shadow 300ms ease;
  }
  .blog-post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}
```

**When to use:** New components where you want to start from a motion-free baseline. This strategy is inherently safer because motion is opt-in rather than opt-out.

---

### Strategy Comparison

| Aspect | Override (`reduce`) | Opt-In (`no-preference`) |
|---|---|---|
| Default state | Animated | Static |
| Philosophy | Animations first, remove for a11y | Static first, add motion as upgrade |
| Risk of missing a guard | Higher (you must remember to add override) | Lower (motion only exists inside the query) |
| Browser support gap behaviour | Animations play (old browsers lack the query) | No animations play (safer fallback) |
| Project convention | Current standard (Strategies 1 used across all funky CSS) | Encouraged for new work |

**Project Rule:** Either strategy is acceptable. Whichever you choose, **every CSS file with animations MUST have a reduced-motion guard**. The guard block MUST be placed at the end of the file under the standard section comment:

```css
/* ========================================
   REDUCED MOTION GUARD
   ======================================== */

@media (prefers-reduced-motion: reduce) {
  /* ... */
}
```

---

## What to Remove vs. What to Keep

**Not all animation is harmful.** The goal is to remove _non-essential decorative motion_ while preserving _functional state communication_.

### Essential vs. Non-Essential Motion

| Category | Examples | Action Under `reduce` |
|---|---|---|
| **Non-Essential (REMOVE)** | Floating orbs, parallax backgrounds, decorative glow pulses, hover lift/scale, stagger entrance animations, shimmer effects, infinite loops | `animation: none` / `transition: none` / `transform: none` |
| **Functional but Adjustable (SIMPLIFY)** | Accordion expand/collapse, modal open/close, drawer slide, tab transitions, progress bar fill | Replace with instant state change or simple opacity fade |
| **Essential (KEEP)** | Loading spinner (indicates system working), progress indicator (shows completion), focus ring (keyboard navigation), scroll position (browser-native) | Keep but optionally reduce duration to near-instant |

### Decision Tree

```
Is the animation purely decorative?
  YES  remove it entirely (animation: none)
  NO   Is the animation communicating a state change?
         YES  Can the state change be understood without motion?
                YES  remove the animation
                NO   simplify to a crossfade or instant swap
         NO   Is the animation showing system status (loading)?
                YES  keep it, but consider reducing speed
                NO   remove it
```

---

### Recommended Reduced Alternatives

| Full Motion | Reduced Alternative |
|---|---|
| Slide in from right (drawer) | Instant appear / opacity fade (150ms) |
| Scale up + fade (modal) | Opacity fade only (150ms) |
| Parallax scroll | Static positioning |
| Floating orbs (infinite) | Static orbs, no animation |
| Hover translateY lift | No transform; keep colour/opacity change |
| Stagger children entrance | All items visible immediately |
| Skeleton shimmer | Static grey placeholder |
| Marquee / auto-scroll | Static content, manual scroll |

---

## CSS Implementation Patterns

### Pattern 1: Global Nuclear Guard

The project includes a global catch-all in `/src/styles/globals.css` and `/guidelines/interactions/animations.md`:

```css
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

**Purpose:** Safety net that catches any animation a component-level guard might have missed.

**Why `0.01ms` instead of `0`?** Setting duration to `0` can cause `animationend` and `transitionend` events to never fire, breaking JavaScript that listens for them. Using `0.01ms` fires the events near-instantly without visible motion.

**Why `!important`?** This is one of the [two acceptable uses of `!important`](/guidelines/audits/CSS_DATA_INTEGRITY_GUIDELINES.md) in the project — it must override any component-level duration to guarantee the user's preference is honoured.

---

### Pattern 2: Component-Level Guard (Standard)

Every CSS file that defines animations MUST include its own guard block for clarity and self-documentation, even though the global guard exists as a safety net.

```css
/* ========================================
   REDUCED MOTION GUARD
   ======================================== */

@media (prefers-reduced-motion: reduce) {
  .blog-post-card { transition: none; }
  .blog-post-card:hover { transform: none; }
  .blog-post-card__glow { transition: none; }
  .blog-post-card__image { transition: none; }
  .blog-post-card:hover .blog-post-card__image { transform: none; }
}
```

**Source:** `/src/styles/sections/blog-funky.css` (line ~496)

---

### Pattern 3: Infinite Animations (Orbs, Floats, Pulses)

Infinite animations are the **highest priority** to disable — they consume resources continuously and are the most likely to cause vestibular discomfort.

```css
@keyframes floatOrb {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

.front-page__hero-orb--1 {
  animation: floatOrb 8s ease-in-out infinite;
}

/* REDUCED MOTION GUARD */
@media (prefers-reduced-motion: reduce) {
  .front-page__hero-orb--1,
  .front-page__hero-orb--2,
  .front-page__hero-orb--3 {
    animation: none;
  }
}
```

**Source:** `/src/styles/sections/front-page-funky.css` (line ~756)

---

### Pattern 4: Hover Transitions

Hover transitions (lift, scale, glow) are non-essential decorative motion. Remove the `transform` and `transition` under `reduce`, but **keep colour changes** since those are functional state communication.

```css
.funky-section__card {
  transition: transform 300ms ease, box-shadow 300ms ease;
}

.funky-section__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

@media (prefers-reduced-motion: reduce) {
  .funky-section__card:hover {
    transform: none;
    /* box-shadow change is acceptable — not spatial motion */
  }
}
```

**Source:** `/src/styles/sections/funky-sections.css` (line ~329)

---

### Pattern 5: Skeleton / Shimmer Loaders

Skeleton loaders communicate "content is loading" and are borderline essential. Replace the shimmer animation with a static placeholder colour.

```css
@keyframes skeleton-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.blog-skeleton__bar {
  animation: skeleton-pulse 1.5s ease-in-out infinite;
  background: var(--wp--preset--color--neutral-200);
}

@media (prefers-reduced-motion: reduce) {
  .blog-skeleton__bar {
    animation: none;
    opacity: 0.5;
  }
}
```

**Source:** `/src/styles/sections/blog-funky.css` (line ~1755)

---

### Pattern 6: Focus Ring Transitions

Focus rings are **essential for accessibility** — they MUST remain visible. Remove the transition but keep the ring.

```css
.skip-link {
  transition: top 200ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .skip-link {
    transition: none;
    /* Focus ring itself still renders — only the slide animation is removed */
  }
}
```

**Source:** `/src/app/components/common/SkipNavigation.tsx` (line ~134)

---

## JavaScript Detection

### `window.matchMedia` API

Use `window.matchMedia()` to programmatically detect the user's motion preference in JavaScript.

```typescript
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// One-time check
const prefersReduced = mediaQuery.matches; // true or false

// Live listener — responds if the user toggles the OS setting
mediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    // User just enabled "Reduce Motion"
    cancelAllAnimations();
  } else {
    // User just disabled "Reduce Motion"
    restoreAnimations();
  }
});
```

**Key properties:**

| Property / Method | Description |
|---|---|
| `mediaQuery.matches` | `boolean` — `true` if the user currently prefers reduced motion |
| `mediaQuery.addEventListener('change', cb)` | Fires when the OS setting changes at runtime |
| `mediaQuery.removeEventListener('change', cb)` | Clean up the listener (required in React `useEffect` teardown) |

---

### Project Utility Functions

The project provides two utility functions:

#### `/src/app/utils/animations.ts`

```typescript
/**
 * Check if user prefers reduced motion.
 * SSR-safe — returns false on the server.
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Returns 0 if user prefers reduced motion, otherwise the supplied duration.
 */
export const getAnimationDuration = (duration: number): number => {
  return prefersReducedMotion() ? 0 : duration;
};

/**
 * Returns reduced animation variants if user prefers reduced motion.
 */
export const safeAnimate = <T extends Record<string, any>>(
  variants: T,
  reducedVariants?: T
): T => {
  return prefersReducedMotion()
    ? (reducedVariants || { hidden: {}, visible: {} }) as T
    : variants;
};
```

#### `/src/app/utils/performance.ts`

```typescript
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
```

---

### React Hook: `usePrefersReducedMotion`

A custom hook that reactively tracks the user's motion preference. Use this in any component that needs to conditionally render or configure animations in JSX.

```tsx
import { useEffect, useState } from 'react';

/**
 * usePrefersReducedMotion
 *
 * Returns `true` when the user's OS has "Reduce Motion" enabled.
 * Reacts live to changes — if the user toggles the setting while
 * the page is open, the hook updates immediately.
 *
 * @example
 * const prefersReduced = usePrefersReducedMotion();
 * // Use to skip Motion animations or swap CSS classes
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    // SSR guard — default to true (safer) when window is unavailable
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}
```

**Usage example:**

```tsx
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function AnimatedHero() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section className="front-page__hero">
      {/* Only render floating orbs if motion is allowed */}
      {!prefersReduced && (
        <>
          <div className="front-page__hero-orb--1" />
          <div className="front-page__hero-orb--2" />
          <div className="front-page__hero-orb--3" />
        </>
      )}
      <h1>Welcome to Our Store</h1>
    </section>
  );
}
```

---

### Motion Library (`motion/react`)

The Motion library (formerly Framer Motion) provides its own `useReducedMotion` hook:

```tsx
import { motion, useReducedMotion } from 'motion/react';

export function AnimatedModal({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.3,
        ease: [0, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
```

**Key points:**
- `useReducedMotion()` returns `true` when the OS preference is active.
- When `true`, set `duration` to `0.01` (not `0`, to ensure `onAnimationComplete` fires).
- Remove spatial transforms (`x`, `y`, `scale`, `rotate`) — keep opacity for functional fade.

---

## Integration with the Funky Design System

The funky redesign is heavily animated (glassmorphism, floating orbs, neon glows, spring hovers). Every funky CSS file follows this convention:

### Standard Funky Guard Block

```css
/* ========================================
   REDUCED MOTION GUARD
   ======================================== */

@media (prefers-reduced-motion: reduce) {
  /* 1. Kill all infinite animations (orbs, floats, shimmers) */
  .page__orb--1,
  .page__orb--2 {
    animation: none;
  }

  /* 2. Remove hover transforms (lifts, scales) */
  .page__card:hover {
    transform: none;
  }

  /* 3. Remove transitions */
  .page__card {
    transition: none;
  }

  /* 4. Remove decorative pseudo-element animations */
  .page__card::before {
    transition: none;
    opacity: 0;
  }
}
```

### Current Funky Files with Guards

| File | Line | What It Guards |
|---|---|---|
| `/src/styles/theme-funky.css` | ~78, ~394 | Global funky utilities (float, glow, shimmer, spring) |
| `/src/styles/sections/funky-sections.css` | ~329 | Section card hovers, icon animations |
| `/src/styles/sections/front-page-funky.css` | ~756 | Hero orbs, brand story orbs, all homepage motion |
| `/src/styles/sections/shop-funky.css` | ~819 | Archive product orbs, card transitions |
| `/src/styles/sections/cart-checkout-funky.css` | ~985 | Cart item animations, checkout step transitions |
| `/src/styles/sections/account-auth-funky.css` | ~1684 | Dashboard card hovers, wishlist animations |
| `/src/styles/sections/blog-funky.css` | ~496, ~1685, ~1755 | Post card hover, index orbs, skeleton shimmer |
| `/src/styles/blocks/theme/parts-funky.css` | ~500 | Header nav link underlines, mini-cart animations |

**Rule:** When creating a new funky CSS file for a phase (e.g., Phase 7 Information Pages), the reduced-motion guard section is **mandatory** before the file is considered complete.

---

## Testing

### Browser DevTools

All major browsers let you emulate `prefers-reduced-motion` without changing your OS setting:

| Browser | How to Emulate |
|---|---|
| **Chrome / Edge** | DevTools > Rendering tab (triple-dot menu > More tools > Rendering) > "Emulate CSS media feature prefers-reduced-motion" > `reduce` |
| **Firefox** | `about:config` > search `ui.prefersReducedMotion` > set to `1` (reduce) or `0` (no-preference) |
| **Safari** | System Preferences > Accessibility > Display > Reduce Motion (no DevTools toggle) |

### Manual Testing Checklist

When testing a component or page with `prefers-reduced-motion: reduce` emulated:

- [ ] No infinite animations are running (orbs, floats, pulses, shimmers)
- [ ] No elements move on hover (translateY lifts, scale transforms)
- [ ] Functional state changes still communicate visually (accordion open/close, modal appear/disappear)
- [ ] Loading indicators are visible (spinner OR static placeholder)
- [ ] Focus rings are fully visible and not animated
- [ ] Scroll behaviour is instant (no smooth scrolling)
- [ ] No content is hidden or inaccessible due to missing animation
- [ ] Page load does not trigger entrance animations
- [ ] Skeleton loaders show a static placeholder colour

### Automated Testing

```typescript
// Jest / Vitest — Mock the media query
beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('does not render decorative orbs when reduced motion is preferred', () => {
  render(<AnimatedHero />);
  expect(screen.queryByTestId('hero-orb-1')).not.toBeInTheDocument();
});

test('animation duration is near-zero when reduced motion is preferred', () => {
  const duration = getAnimationDuration(300);
  expect(duration).toBe(0);
});
```

### CSS Audit Script

Run this in the browser console to find animations that may lack a reduced-motion guard:

```javascript
// Lists all elements with active CSS animations
const animated = document.querySelectorAll('*');
const active = [];
animated.forEach(el => {
  const style = getComputedStyle(el);
  if (style.animationName !== 'none' && style.animationDuration !== '0.01ms') {
    active.push({ element: el, animation: style.animationName, duration: style.animationDuration });
  }
});
console.table(active);
```

Enable `prefers-reduced-motion: reduce` in DevTools first. If the table is not empty, those elements are missing guards.

---

## Best Practices

### DO

- Always place the `REDUCED MOTION GUARD` section at the **end** of each CSS file.
- Use `animation: none` for infinite/looping animations.
- Use `transition: none` for hover/focus transitions.
- Use `transform: none` to cancel spatial motion on hover.
- Keep opacity-based fades (crossfade) as reduced alternatives for functional transitions.
- Keep focus rings visible — only remove the ring's **transition**, not the ring itself.
- Default to `true` (reduced) for SSR/server-side rendering safety.
- Use `0.01ms` duration (not `0`) to preserve `animationend` / `transitionend` events.
- Test with DevTools emulation before every PR.
- Use the `usePrefersReducedMotion` hook for conditional JSX rendering.
- Use Motion's `useReducedMotion` hook when working with the `motion` library.

### DO NOT

- Do not "nuke everything" without understanding what is functional vs. decorative.
- Do not hide content that was revealed by animation — make it visible immediately.
- Do not assume `prefers-reduced-motion` means "no visual feedback" — it means "no spatial motion".
- Do not use `display: none` to hide animated elements — use `animation: none` instead.
- Do not use `transition: all 0s` — use `transition: none` (more explicit, better performance).
- Do not forget to clean up `addEventListener('change', ...)` in React hooks.
- Do not set `animation-duration: 0` — use `0.01ms` to fire completion events.
- Do not apply `will-change` when reduced motion is active — it wastes GPU memory for no benefit.

---

## Common Mistakes

### Mistake 1: Removing Functional Feedback

```css
/* BAD — Loading spinner disappears entirely */
@media (prefers-reduced-motion: reduce) {
  .loading-spinner {
    display: none;
  }
}

/* GOOD — Spinner stops rotating but remains visible */
@media (prefers-reduced-motion: reduce) {
  .loading-spinner {
    animation: none;
    /* Element is still visible as a static icon */
  }
}
```

### Mistake 2: Forgetting `scroll-behavior`

```css
html {
  scroll-behavior: smooth;
}

/* BAD — smooth scroll is motion, and many users find it disorienting */
/* Missing guard */

/* GOOD */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

### Mistake 3: Content Invisible Without Animation

```css
/* BAD — Content starts at opacity: 0 and never becomes visible */
.entrance-card {
  opacity: 0;
  animation: fadeIn 500ms ease-out forwards;
}

@media (prefers-reduced-motion: reduce) {
  .entrance-card {
    animation: none;
    /* opacity is still 0 — content is invisible! */
  }
}

/* GOOD — Reset to visible state */
@media (prefers-reduced-motion: reduce) {
  .entrance-card {
    animation: none;
    opacity: 1; /* Content is immediately visible */
  }
}
```

### Mistake 4: Not Guarding `@keyframes` Used in Multiple Places

If a `@keyframes` animation (e.g., `floatOrb`) is used by multiple selectors, make sure the guard lists **all** selectors that reference it.

```css
/* GOOD — Guards every element that uses the animation */
@media (prefers-reduced-motion: reduce) {
  .front-page__hero-orb--1,
  .front-page__hero-orb--2,
  .front-page__hero-orb--3,
  .brand-story__orb--1,
  .brand-story__orb--2 {
    animation: none;
  }
}
```

### Mistake 5: Guarding Colour-Only Changes

```css
/* UNNECESSARY — Colour transitions are not spatial motion */
@media (prefers-reduced-motion: reduce) {
  a:hover {
    transition: none; /* Not needed — colour change is not harmful */
  }
}
```

Colour changes, `opacity` fades under ~200ms, and `background-color` shifts are generally considered **safe** for vestibular users. Only guard spatial motion (`transform`, `translate`, `scale`, `rotate`) and temporal motion (looping animations, parallax).

---

## Quick Reference Card

### CSS — Add to End of Every File with Animations

```css
/* ========================================
   REDUCED MOTION GUARD
   ======================================== */

@media (prefers-reduced-motion: reduce) {
  /* List all animated selectors */
  .component__animated-element {
    animation: none;
    transition: none;
  }
  .component__animated-element:hover {
    transform: none;
  }
}
```

### JavaScript — One-Time Check

```typescript
import { prefersReducedMotion } from '@/utils/animations';

if (prefersReducedMotion()) {
  // Skip animation setup
}
```

### React Hook — Live Tracking

```tsx
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const prefersReduced = usePrefersReducedMotion();
// true = user wants reduced motion
```

### Motion Library

```tsx
import { useReducedMotion } from 'motion/react';

const shouldReduce = useReducedMotion();
// true = user wants reduced motion
```

---

## File Audit Checklist

Before marking any CSS file or component as complete, verify:

- [ ] Every `animation:` declaration has a corresponding `prefers-reduced-motion: reduce` guard
- [ ] Every `transition:` on `transform` properties has a guard
- [ ] Every `@keyframes` with `infinite` iteration has its selectors guarded
- [ ] Hover `transform` effects (translateY, scale) are set to `none` under `reduce`
- [ ] Content that starts at `opacity: 0` is reset to `opacity: 1` under `reduce`
- [ ] `scroll-behavior: smooth` is overridden to `auto` under `reduce`
- [ ] Focus rings remain visible (only their transition is removed, not the ring)
- [ ] Loading indicators remain visible (animation is removed but element stays)
- [ ] The guard section uses the standard comment header: `REDUCED MOTION GUARD`
- [ ] JavaScript animations use `prefersReducedMotion()` or the React hook
- [ ] Motion library animations use `useReducedMotion()` with near-zero duration

---

## Related Documentation

- [Animation Guidelines](/guidelines/interactions/animations.md) — Duration standards, easing functions, performance
- [Mobile Animations](/guidelines/mobile/animations.md) — Mobile-specific animation patterns, `usePrefersReducedMotion` hook
- [Focus Management](/guidelines/interactions/focus-management.md) — Focus ring behaviour during animations
- [Dark Mode Styles](/guidelines/design-tokens/dark-mode-styles.md) — Dark mode animation considerations
- [Funky Design System](/guidelines/design-tokens/funky-woocommerce-design-system.md) — Funky phase-specific guard requirements
- [CSS Data Integrity](/guidelines/audits/CSS_DATA_INTEGRITY_GUIDELINES.md) — Acceptable `!important` usage for motion guards
- [Performance Utilities](/src/app/utils/performance.ts) — `prefersReducedMotion()` utility
- [Animation Utilities](/src/app/utils/animations.ts) — `safeAnimate()`, `getAnimationDuration()`

---

## Changelog

### v1.0 — 2026-02-22
- Initial documentation
- Complete CSS strategy documentation (Override and Opt-In approaches)
- JavaScript `window.matchMedia` detection guide
- React hook implementation (`usePrefersReducedMotion`)
- Motion library integration (`useReducedMotion`)
- Project-specific patterns (6 CSS patterns from funky redesign)
- Testing procedures (DevTools, manual checklist, automated tests, audit script)
- Decision tree for essential vs. non-essential motion
- Funky file guard inventory (8 files catalogued)
- Best practices, common mistakes, and quick reference card

---

**Status:** Complete  
**Maintainer:** Development Team  
**Last Review:** February 22, 2026
