# Mobile Animation Guidelines

**Category**: Mobile Design  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Overview

Animations enhance user experience by providing visual feedback, guiding attention, and creating smooth transitions. On mobile devices, animations must be performant, purposeful, and respect user preferences for reduced motion.

---

## CSS vs JavaScript Animations

### When to Use CSS Animations

**✅ Use CSS for:**
- Simple property transitions (opacity, transform)
- Hover effects
- Loading spinners
- Fade in/out
- Scale/rotate effects
- GPU-accelerated animations

**Why CSS:**
- Hardware accelerated (runs on GPU)
- Runs on compositor thread (doesn't block main thread)
- Better performance on mobile
- Simpler to implement
- Browser-optimized

```css
/* ✅ CSS Animation - GPU accelerated */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* ✅ CSS Transition - Performant */
.button {
  transform: scale(1);
  transition: transform 0.2s ease;
}

.button:hover {
  transform: scale(1.05);
}
```

### When to Use JavaScript Animations

**✅ Use JavaScript for:**
- Complex sequences and choreography
- Physics-based animations
- Scroll-triggered animations
- Interactive gestures (drag, swipe)
- Dynamic values based on user input
- Animations requiring precise control

**Why JavaScript:**
- Full programmatic control
- Complex timing and sequencing
- Conditional logic
- Better for scroll effects
- Can respond to user input

```tsx
// ✅ JavaScript Animation - Complex sequence
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

---

## Performance Rules

### 1. Only Animate These Properties (GPU Accelerated)

**Safe Properties (60fps):**
- `transform` (translate, scale, rotate)
- `opacity`

```css
/* ✅ DO: GPU accelerated */
.animate-safe {
  transform: translateX(100px);
  opacity: 0.5;
  transition: transform 0.3s, opacity 0.3s;
}
```

### 2. Avoid Animating These Properties (CPU Intensive)

**Expensive Properties (causes layout/paint):**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `border`
- `font-size`

```css
/* ❌ DON'T: Causes layout thrashing */
.animate-expensive {
  width: 100px;
  height: 100px;
  transition: width 0.3s, height 0.3s;
}

/* ✅ DO: Use transform instead */
.animate-safe {
  transform: scale(1.5);
  transition: transform 0.3s;
}
```

### 3. Use `will-change` Sparingly

```css
/* ✅ DO: Only during animation */
.animating {
  will-change: transform;
}

.animating.done {
  will-change: auto; /* Remove after animation */
}

/* ❌ DON'T: Apply to everything */
* {
  will-change: transform, opacity; /* Bad performance */
}
```

---

## Animation Duration Guidelines

### Recommended Durations

| Animation Type | Duration | Usage |
|----------------|----------|-------|
| **Micro-interaction** | 100-200ms | Button press, toggle |
| **Transition** | 200-300ms | Fade in/out, slide |
| **Movement** | 300-500ms | Modal open, drawer slide |
| **Complex** | 500-800ms | Multi-step animations |
| **Loading** | Infinite | Spinners, pulse effects |

```css
:root {
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
}

.button {
  transition: transform var(--duration-fast);
}

.modal {
  transition: opacity var(--duration-normal);
}
```

---

## CSS Animation Patterns

### Pattern 1: Fade In

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in forwards;
}
```

```tsx
// React/Tailwind
<div className="animate-in fade-in duration-300">
  Content
</div>
```

### Pattern 2: Slide In from Bottom

```css
@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in-up {
  animation: slideInUp 0.3s ease-out forwards;
}
```

### Pattern 3: Scale on Hover

```css
.product-card {
  transform: scale(1);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card:active {
  transform: scale(0.98);
}
```

### Pattern 4: Loading Spinner

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

```tsx
<Loader2 className="animate-spin" size={24} />
```

### Pattern 5: Pulse Effect

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

---

## JavaScript Animation Patterns

### Using Motion (Framer Motion)

```tsx
import { motion } from 'motion/react';

// Pattern 1: Fade + Slide
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>

// Pattern 2: Staggered Children
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.name}
    </motion.div>
  ))}
</motion.div>

// Pattern 3: Exit Animation
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Modal Content
    </motion.div>
  )}
</AnimatePresence>

// Pattern 4: Gesture Animations
<motion.div
  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.05 }}
>
  Button
</motion.div>
```

---

## Common Mobile Animations

### 1. Button Press

```tsx
// CSS Version
<button className="active:scale-95 transition-transform duration-100">
  Click Me
</button>

// Motion Version
<motion.button whileTap={{ scale: 0.95 }}>
  Click Me
</motion.button>
```

### 2. Modal/Drawer Slide In

```tsx
// CSS Version
<div className={`
  fixed inset-y-0 right-0 w-full max-w-md
  transform transition-transform duration-300
  ${isOpen ? 'translate-x-0' : 'translate-x-full'}
`}>
  Drawer Content
</div>

// Motion Version
<motion.div
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
  transition={{ type: 'spring', damping: 25 }}
>
  Drawer Content
</motion.div>
```

### 3. Toast Notification

```tsx
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  className="fixed top-4 right-4 bg-green-600 text-white p-4 rounded-lg"
>
  Success! Item added to cart
</motion.div>
```

### 4. Product Card Hover

```css
.product-card {
  position: relative;
  overflow: hidden;
}

.product-card img {
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.1);
}

.product-card .actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product-card:hover .actions {
  transform: translateY(0);
}
```

### 5. Skeleton Loading

```tsx
<div className="animate-pulse">
  <div className="h-48 bg-gray-200 rounded mb-4" />
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
  <div className="h-4 bg-gray-200 rounded w-1/2" />
</div>
```

---

## Scroll Animations

### CSS: Scroll-Triggered Fade In

```css
/* Requires Intersection Observer */
.fade-in-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s, transform 0.5s;
}

.fade-in-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```tsx
import { useEffect, useRef, useState } from 'react';

function FadeInOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
}
```

### Motion: Scroll Animations

```tsx
import { motion, useScroll, useTransform } from 'motion/react';

function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <motion.div style={{ y }}>
      Parallax Content
    </motion.div>
  );
}
```

---

## Reduced Motion

**📖 Comprehensive Guide:** See **[/guidelines/REDUCED_MOTION_GUIDELINES.md](/guidelines/REDUCED_MOTION_GUIDELINES.md)** for complete coding standards, all 6 CSS patterns, the essential-vs-decorative decision tree, React hook, and testing procedures.

### Respect User Preferences

```css
/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### JavaScript Detection

```tsx
import { useEffect, useState } from 'react';

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}

// Usage
function AnimatedComponent() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
    >
      Content
    </motion.div>
  );
}
```

---

## Animation Decision Tree

```
Is the animation simple (fade, scale, rotate)?
├─ YES → Use CSS
│   ├─ Is it triggered by hover/focus?
│   │   └─ YES → CSS transition
│   └─ Is it triggered on mount?
│       └─ YES → CSS animation
│
└─ NO → Is it complex (sequence, physics, gestures)?
    └─ YES → Use JavaScript (Motion)
        ├─ Does it need to respond to scroll?
        │   └─ YES → Use Motion with useScroll
        └─ Does it need gesture control?
            └─ YES → Use Motion gestures (whileTap, drag)
```

---

## Performance Best Practices

### 1. Throttle/Debounce Scroll Listeners

```tsx
import { throttle } from 'lodash-es';

useEffect(() => {
  const handleScroll = throttle(() => {
    // Handle scroll
  }, 100);

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 2. Use `passive` Event Listeners

```tsx
// Improves scroll performance
element.addEventListener('scroll', handler, { passive: true });
element.addEventListener('touchstart', handler, { passive: true });
```

### 3. Limit Concurrent Animations

```tsx
// ❌ DON'T: Animate 100 items simultaneously
{items.map(item => (
  <motion.div animate={{ opacity: 1 }}>
    {item}
  </motion.div>
))}

// ✅ DO: Stagger animations with delay
{items.map((item, i) => (
  <motion.div
    animate={{ opacity: 1 }}
    transition={{ delay: i * 0.05, duration: 0.2 }}
  >
    {item}
  </motion.div>
))}
```

### 4. Remove Animations After Completion

```tsx
const [isAnimating, setIsAnimating] = useState(true);

<motion.div
  animate={{ opacity: 1 }}
  onAnimationComplete={() => setIsAnimating(false)}
  transition={{ duration: 0.3 }}
/>
```

---

## Common Mistakes

❌ Animating `width`, `height`, or layout properties  
❌ Using JavaScript for simple transitions  
❌ Not respecting `prefers-reduced-motion`  
❌ Animation durations too long (> 500ms)  
❌ Applying `will-change` to all elements  
❌ No loading states for async transitions  
❌ Animating too many elements simultaneously  
❌ Using non-performant scroll listeners  
❌ Missing `passive: true` on touch/scroll events  
❌ Animations blocking user interaction

---

## Quick Reference

### CSS Animation Checklist

✅ Only animate `transform` and `opacity`  
✅ Use `transition` for simple state changes  
✅ Use `@keyframes` for complex animations  
✅ Keep durations under 500ms  
✅ Add `@media (prefers-reduced-motion)`  
✅ Use `will-change` only during animation  
✅ Test on actual mobile devices

### JavaScript Animation Checklist

✅ Use for complex sequences  
✅ Use for scroll-triggered animations  
✅ Use for gesture interactions  
✅ Throttle scroll listeners (100ms)  
✅ Use `passive: true` for scroll/touch  
✅ Limit concurrent animations  
✅ Respect `prefers-reduced-motion`

---

## Resources

- [web.dev - Animations](https://web.dev/animations/)
- [CSS Triggers](https://csstriggers.com/) - See what properties trigger layout/paint
- [Motion Documentation](https://motion.dev/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Reduce Motion Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
