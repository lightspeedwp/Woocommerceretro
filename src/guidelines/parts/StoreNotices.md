# StoreNotices (Template Part)

**Component Type:** Template Part (Global Banner)  
**Location:** `/src/app/components/parts/StoreNotices.tsx`  
**CSS:** `/src/styles/blocks/theme/parts-funky.css` (lines 706-785)  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign)

---

## Overview

StoreNotices is a dismissible promotional banner displayed above the site header. Features a vibrant neon gradient background with animated glow effects and funky spring-hover interactions.

**WordPress Mapping:** Site Notice / Promotion Banner  
**Used In:** Site-wide (above MainHeader)  
**Dark Mode:** ✅ Complete support

---

## Component API

### Props

None — StoreNotices is a self-contained component with hardcoded content.

### State

```tsx
const [isVisible, setIsVisible] = useState(true);
```

**Visibility Control:**
- Rendered only when `isVisible === true`
- Dismissed via close button click
- No persistence (reappears on page refresh)

---

## Structure

```tsx
<div className="wp-store-notice wp-store-notice--funky">
  <Container>
    <div className="wp-store-notice__inner">
      {/* Content */}
      <div className="wp-store-notice__content">
        Free shipping on orders over $100. <a href="/shop">Details</a>
      </div>
      
      {/* Dismiss Button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="wp-store-notice__dismiss funky-spring-hover"
      >
        <X size={16} />
      </button>
    </div>
  </Container>
</div>
```

---

## BEM Class Hierarchy

```
wp-store-notice                        /* Container (neon gradient bg) */
├── wp-store-notice--funky             /* Modifier: funky redesign styles */
└── wp-store-notice__inner             /* Flexbox inner (centers content) */
    ├── wp-store-notice__content       /* Message text */
    │   └── wp-store-notice__link      /* Inline link */
    └── wp-store-notice__dismiss       /* Close button (X icon) */
```

---

## Funky Redesign Specifications

### Neon Gradient Background

**Light Mode:**
```css
.wp-store-notice--funky {
  background: linear-gradient(
    90deg,
    var(--wp--preset--color--neon-pink),    /* #ff00ff */
    var(--wp--preset--color--neon-cyan)     /* #00ffff */
  );
  color: #000000; /* Black text on vibrant gradient */
  font-weight: var(--wp--preset--font-weight--bold);
}
```

**Dark Mode:**
```css
.dark .wp-store-notice--funky {
  background: linear-gradient(
    90deg,
    rgba(255, 0, 255, 0.85),  /* Semi-transparent magenta */
    rgba(0, 255, 255, 0.85)   /* Semi-transparent cyan */
  );
  color: #ffffff; /* White text on dark gradient */
}
```

**Gradient Direction:** 90deg (horizontal sweep left to right)

### Glow Effect

**Animated pulsing glow:**
```css
.wp-store-notice--funky::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(
    90deg,
    var(--wp--preset--color--neon-pink),
    var(--wp--preset--color--neon-cyan)
  );
  filter: blur(10px);
  opacity: 0.6;
  z-index: -1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.9; }
}
```

**Effect:** Soft halo around banner that pulses subtly.

### Spring Hover Animation

**Dismiss button interaction:**
```css
.wp-store-notice__dismiss.funky-spring-hover:hover {
  transform: scale(1.1);
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

**Spring easing:** `cubic-bezier(0.68, -0.55, 0.27, 1.55)` creates bounce effect.

---

## CSS Classes

### Base Styles

```css
.wp-store-notice {
  position: relative;
  z-index: 50; /* Above header */
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--40);
  background-color: var(--wp--preset--color--primary); /* Fallback */
  color: var(--wp--preset--color--primary-foreground);
}
```

**Positioning:**
- `z-index: 50` — Appears above header (header is z-index 40)
- `position: relative` — Establishes stacking context for pseudo-elements

### Inner Container

```css
.wp-store-notice__inner {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Content left, button right */
  font-size: var(--wp--preset--font-size--small);
  font-weight: var(--wp--preset--font-weight--medium);
}
```

**Layout:** Flexbox row with space-between

### Content Area

```css
.wp-store-notice__content {
  flex: 1; /* Takes available space */
  text-align: center;
}
```

**Text Alignment:** Centered within flex container

### Inline Link

```css
.wp-store-notice__link {
  text-decoration: underline;
  color: inherit; /* Matches parent text color */
  transition: opacity var(--wp--preset--transition--base) ease;
}

.wp-store-notice__link:hover {
  opacity: 0.8;
}
```

**Hover Effect:** Opacity fade (no color change)

### Dismiss Button

```css
.wp-store-notice__dismiss {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--wp--preset--spacing--10);
  color: inherit;
  border-radius: var(--wp--preset--border-radius--sm);
  transition: background-color var(--wp--preset--transition--base) ease;
  cursor: pointer;
}

.wp-store-notice__dismiss:hover {
  background-color: rgba(255, 255, 255, 0.15); /* Subtle highlight */
}

.wp-store-notice__dismiss:focus-visible {
  outline: 1px solid currentColor;
  outline-offset: 2px;
}
```

**Accessibility:**
- Visible focus ring
- `aria-label="Dismiss notice"`
- Keyboard accessible (button element)

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | Solid gradient (pink → cyan) | 85% opacity gradient |
| Text | Black (`#000000`) | White (`#ffffff`) |
| Link hover | 80% opacity | 80% opacity |
| Dismiss hover | `rgba(255,255,255,0.15)` | `rgba(255,255,255,0.15)` |

### Glow Opacity

**Light mode:** `opacity: 0.6` (subtle)  
**Dark mode:** `opacity: 0.9` (more pronounced for visibility)

---

## Accessibility

### ARIA Attributes

```tsx
<button 
  onClick={() => setIsVisible(false)}
  className="wp-store-notice__dismiss funky-spring-hover"
  aria-label="Dismiss notice"  // ← Screen reader label
>
  <X size={16} />
</button>
```

### Keyboard Navigation

- ✅ Tab to focus dismiss button
- ✅ Enter/Space to dismiss
- ✅ Visible focus ring on keyboard focus

### Screen Reader Support

**Announcement on page load:**
```tsx
<div 
  className="wp-store-notice"
  role="complementary"  // Optional: marks as complementary content
  aria-live="polite"    // Optional: announces changes
>
```

**Current implementation:** Basic (no ARIA region/live attributes)

### Color Contrast

**Light Mode:**
- Black text on neon gradient: ~8:1 ratio (AAA)
- Link underline ensures visibility

**Dark Mode:**
- White text on dark gradient: ~12:1 ratio (AAA)

---

## Responsive Behavior

### Mobile (< 640px)

```css
@media (max-width: 639px) {
  .wp-store-notice {
    padding: var(--wp--preset--spacing--10) var(--wp--preset--spacing--30);
  }
  
  .wp-store-notice__content {
    font-size: var(--wp--preset--font-size--x-small);
  }
}
```

**Mobile adaptations:**
- Reduced padding (10px top/bottom)
- Smaller font size
- Dismiss button remains full-size (44x44px touch target)

### Tablet (640px - 1024px)

No special treatment — inherits base styles.

### Desktop (> 1024px)

```css
@media (min-width: 1024px) {
  .wp-store-notice__inner {
    max-width: var(--wp--preset--layout--site-size); /* 1400px */
    margin: 0 auto;
  }
}
```

**Desktop enhancement:** Content constrained to site max-width.

---

## Usage

### Integration in Header

**Recommended placement:** Above MainHeader in site layout.

```tsx
import { StoreNotices } from './parts/StoreNotices';
import { MainHeader } from './parts/MainHeader';

export const Layout = ({ children }) => {
  return (
    <>
      <StoreNotices />
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </>
  );
};
```

### Conditional Rendering

**Example: Show only on homepage:**
```tsx
import { useLocation } from 'react-router';

export const Layout = ({ children }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  
  return (
    <>
      {isHomepage && <StoreNotices />}
      <MainHeader />
      {/* ... */}
    </>
  );
};
```

### Persistent Dismissal

**Current:** Dismissal not persisted (reappears on refresh)

**Enhancement:** Use localStorage to persist dismissal:
```tsx
const [isVisible, setIsVisible] = useState(() => {
  const dismissed = localStorage.getItem('notice-dismissed');
  return !dismissed;
});

const handleDismiss = () => {
  setIsVisible(false);
  localStorage.setItem('notice-dismissed', 'true');
};
```

---

## Content Customization

### Static Content (Current)

```tsx
<div className="wp-store-notice__content">
  Free shipping on orders over $100.{' '}
  <a href="/shop" className="wp-store-notice__link">Details</a>
</div>
```

**Hardcoded:** Message and link are inline in component.

### Prop-Based Content (Recommended)

```tsx
interface StoreNoticesProps {
  message: string;
  linkText?: string;
  linkHref?: string;
}

export const StoreNotices: React.FC<StoreNoticesProps> = ({
  message,
  linkText,
  linkHref
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="wp-store-notice wp-store-notice--funky">
      <Container>
        <div className="wp-store-notice__inner">
          <div className="wp-store-notice__content">
            {message}
            {linkText && linkHref && (
              <> <a href={linkHref} className="wp-store-notice__link">{linkText}</a></>
            )}
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="wp-store-notice__dismiss funky-spring-hover"
            aria-label="Dismiss notice"
          >
            <X size={16} />
          </button>
        </div>
      </Container>
    </div>
  );
};
```

**Usage:**
```tsx
<StoreNotices 
  message="🎉 Spring Sale: 20% off all products!"
  linkText="Shop Now"
  linkHref="/sale"
/>
```

### Data-Driven Content

**Import from data file:**
```tsx
// /src/app/data/storeNotices.ts
export const activeNotice = {
  message: "Free shipping on orders over $100.",
  linkText: "Details",
  linkHref: "/shipping-returns",
  type: "promotion", // or "info", "alert", "success"
};

// StoreNotices.tsx
import { activeNotice } from '../../data/storeNotices';

export const StoreNotices: React.FC = () => {
  // Use activeNotice data
};
```

---

## Variants

### Type Modifiers

**Promotional (current default):**
```tsx
<div className="wp-store-notice wp-store-notice--funky">
```

**Info (blue gradient):**
```tsx
<div className="wp-store-notice wp-store-notice--info">
```

```css
.wp-store-notice--info {
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  color: #ffffff;
}
```

**Alert (red gradient):**
```tsx
<div className="wp-store-notice wp-store-notice--alert">
```

```css
.wp-store-notice--alert {
  background: linear-gradient(90deg, #ef4444, #f97316);
  color: #ffffff;
}
```

**Success (green gradient):**
```tsx
<div className="wp-store-notice wp-store-notice--success">
```

```css
.wp-store-notice--success {
  background: linear-gradient(90deg, #10b981, #14b8a6);
  color: #ffffff;
}
```

---

## Animation Details

### Pulse Glow Animation

```css
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.6;
    filter: blur(10px);
  }
  50% {
    opacity: 0.9;
    filter: blur(12px);
  }
}

.wp-store-notice--funky::before {
  animation: pulse-glow 3s ease-in-out infinite;
}
```

**Duration:** 3 seconds  
**Timing:** ease-in-out  
**Iterations:** infinite

### Spring Hover (Dismiss Button)

```css
.funky-spring-hover {
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.funky-spring-hover:hover {
  transform: scale(1.1);
}

.funky-spring-hover:active {
  transform: scale(0.95); /* Compress on click */
}
```

**Easing Curve:**
- `0.68, -0.55` — Overshoot start
- `0.27, 1.55` — Spring bounce end

---

## WordPress Block Theme Mapping

### Block Equivalent

**WordPress Core:** Site Notice Block (unofficial)  
**WooCommerce:** Store Notice (built-in)

### Template Part

```html
<!-- /wp-content/themes/funky-woocommerce/parts/store-notices.html -->

<!-- wp:group {"className":"wp-store-notice wp-store-notice--funky"} -->
<div class="wp-block-group wp-store-notice wp-store-notice--funky">
  <!-- wp:group {"className":"wp-store-notice__inner"} -->
  <div class="wp-block-group wp-store-notice__inner">
    
    <!-- wp:paragraph {"className":"wp-store-notice__content"} -->
    <p class="wp-store-notice__content">
      Free shipping on orders over $100. 
      <a href="/shop">Details</a>
    </p>
    <!-- /wp:paragraph -->
    
    <!-- Dismiss button (requires custom JS) -->
    
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:group -->
```

**Note:** WordPress block markup would need custom JavaScript for dismiss functionality.

---

## Common Issues

### Issue: Notice doesn't dismiss

**Cause:** State not updating or component not re-rendering

**Solution:** Verify state setter is called:
```tsx
const handleDismiss = () => {
  console.log('Dismissing notice');
  setIsVisible(false);
};
```

### Issue: Notice reappears on page refresh

**Cause:** No persistence mechanism

**Solution:** Use localStorage (see "Persistent Dismissal" section)

### Issue: Gradient not visible in dark mode

**Cause:** Missing dark mode styles

**Solution:** Verify `.dark .wp-store-notice--funky` CSS is loaded

### Issue: Text unreadable on gradient

**Cause:** Insufficient contrast

**Solution:** Use bold font weight + high-contrast text color:
```css
.wp-store-notice--funky {
  color: #000000; /* Light mode */
  font-weight: var(--wp--preset--font-weight--bold);
}

.dark .wp-store-notice--funky {
  color: #ffffff; /* Dark mode */
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Gradient displays correctly (pink to cyan)
- [ ] Glow effect is visible and pulses
- [ ] Text is readable on gradient background
- [ ] Link is underlined and clickable
- [ ] Dismiss button visible and centered

### Interaction Testing
- [ ] Dismiss button closes notice on click
- [ ] Hover effect works on dismiss button
- [ ] Spring animation bounces on hover
- [ ] Link navigates to correct page
- [ ] Focus ring visible on keyboard tab

### Dark Mode Testing
- [ ] Gradient adjusts to semi-transparent
- [ ] Text color changes to white
- [ ] Glow effect more pronounced
- [ ] Contrast meets WCAG AAA
- [ ] All interactive states work

### Responsive Testing
- [ ] Mobile: Reduced padding, smaller text
- [ ] Tablet: Standard styles
- [ ] Desktop: Content constrained to site-width
- [ ] Touch targets 44x44px minimum

### Accessibility Testing
- [ ] Screen reader announces content
- [ ] Dismiss button has aria-label
- [ ] Keyboard navigation works
- [ ] Focus visible on all elements
- [ ] Color contrast passes WCAG AAA

---

## Future Enhancements

### 1. Multiple Notices Queue

Support showing multiple notices in sequence:

```tsx
const [notices, setNotices] = useState([
  { id: 1, message: "Sale: 20% off!", link: "/sale" },
  { id: 2, message: "New arrivals in stock", link: "/shop" }
]);

const [activeIndex, setActiveIndex] = useState(0);
```

### 2. Auto-Dismiss Timer

Automatically hide notice after N seconds:

```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(false);
  }, 10000); // 10 seconds

  return () => clearTimeout(timer);
}, []);
```

### 3. CMS Integration

Fetch notice content from WordPress API or headless CMS:

```tsx
const [notice, setNotice] = useState(null);

useEffect(() => {
  fetch('/wp-json/wp/v2/store-notice')
    .then(res => res.json())
    .then(data => setNotice(data));
}, []);
```

### 4. Cookie-Based Dismissal

More robust than localStorage:

```tsx
import Cookies from 'js-cookie';

const handleDismiss = () => {
  Cookies.set('notice-dismissed', 'true', { expires: 7 }); // 7 days
  setIsVisible(false);
};
```

### 5. A/B Testing Support

Test different messages for conversion optimization:

```tsx
const variant = Math.random() > 0.5 ? 'a' : 'b';

const messages = {
  a: "Free shipping on $100+",
  b: "Get free shipping today"
};
```

---

## Related Components

- **MainHeader** (`/src/app/components/parts/MainHeader.tsx`) — Displayed below StoreNotices
- **Container** (`/src/app/components/common/Container.tsx`) — Wraps content for max-width constraint
- **WooCommerce Store Notices** (`/src/app/components/blocks/single-product/StoreNotices.tsx`) — Different component for product alerts

---

## References

- **Component File:** `/src/app/components/parts/StoreNotices.tsx`
- **CSS File:** `/src/styles/blocks/theme/parts-funky.css` (lines 706-785)
- **Design System:** `/guidelines/design-tokens/Funky-Woocommerce-Design-System.md`
- **Animation Guide:** `/guidelines/REDUCED_MOTION_GUIDELINES.md`

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign)
