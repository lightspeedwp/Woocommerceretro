# ProductTabs Block

**Component:** `ProductTabs`  
**Path:** `/src/app/components/blocks/single-product/ProductTabs.tsx`  
**Category:** Single Product Blocks  
**Used In:** Single Product templates (SingleProduct, VariableProduct)  
**Pattern Wrapper:** `ProductTabsSection` (`/src/app/components/patterns/ProductTabsSection.tsx`)

---

## Overview

The ProductTabs block provides a responsive tabbed interface for organizing product detail content into separate sections (Description, Additional Information, Reviews). On desktop, it renders as horizontal tabs with panels. On mobile, it transforms into an accordion for better touch interaction and vertical space efficiency.

**Core Features:**
- Desktop: Horizontal tab navigation with content panels
- Mobile: Accordion layout with collapsible sections
- Automatic active state management
- Keyboard accessible (arrow keys, tab, enter/space)
- Retro design with gradient underlines and glass panels
- Dark mode support throughout
- Smooth transitions between tabs

---

## Component Structure

```tsx
ProductTabs
├── Desktop Layout (.wc-product-tabs__desktop)
│   ├── Tab Navigation (.wc-product-tabs__nav)
│   │   └── Tab Buttons (.wc-product-tabs__tab)
│   │       └── Active state (.wc-product-tabs__tab--active)
│   └── Tab Panels (.wc-product-tabs__panels)
│       └── Panel (.wc-product-tabs__panel)
│           └── Active state (.wc-product-tabs__panel--active)
└── Mobile Layout (.wc-product-tabs__mobile)
    └── Accordion Items (.wc-product-tabs__accordion-item)
        ├── Accordion Trigger (.wc-product-tabs__accordion-trigger)
        │   └── Chevron Icon (.wc-product-tabs__accordion-icon)
        └── Accordion Content (.wc-product-tabs__accordion-content)
            └── Active state (.wc-product-tabs__accordion-content--active)
```

---

## Props Interface

```tsx
interface Tab {
  label: string;
  content: React.ReactNode;
}

interface ProductTabsProps {
  tabs: Tab[];
}
```

---

## Usage Examples

### Basic Product Tabs (3 Tabs)

```tsx
import { ProductTabs } from '@/components/blocks/single-product/ProductTabs';

<ProductTabs
  tabs={[
    {
      label: 'Description',
      content: <p>This premium wireless headphone features...</p>
    },
    {
      label: 'Additional Information',
      content: (
        <table>
          <tr><td>Weight</td><td>250g</td></tr>
          <tr><td>Dimensions</td><td>18 x 16 x 8 cm</td></tr>
        </table>
      )
    },
    {
      label: 'Reviews (24)',
      content: <ReviewsList reviews={reviews} />
    }
  ]}
/>
```

---

### Two Tabs (Description + Reviews)

```tsx
<ProductTabs
  tabs={[
    {
      label: 'Description',
      content: <ProductDescription text={product.description} />
    },
    {
      label: 'Reviews (0)',
      content: <div>No reviews yet. Be the first to review!</div>
    }
  ]}
/>
```

---

### Four Tabs (Extended Information)

```tsx
<ProductTabs
  tabs={[
    {
      label: 'Description',
      content: <ProductDescription />
    },
    {
      label: 'Specifications',
      content: <SpecTable specs={product.specs} />
    },
    {
      label: 'Shipping',
      content: <ShippingInfo />
    },
    {
      label: 'Reviews (142)',
      content: <ReviewsList />
    }
  ]}
/>
```

---

## BEM Class Structure

### Base Component

```css
.wc-product-tabs {
  width: 100%;
  margin-top: var(--wp--preset--spacing--80); /* ~48px */
}
```

---

### Desktop Layout

```css
/* Desktop container - visible on md+ screens */
.wc-product-tabs__desktop {
  display: none; /* Hidden by default */
}

@media (min-width: 768px) {
  .wc-product-tabs__desktop {
    display: block;
  }
}

/* Tab navigation bar */
.wc-product-tabs__nav {
  display: flex;
  gap: var(--wp--preset--spacing--40); /* 16px between tabs */
  border-bottom: 2px solid var(--wp--preset--color--border);
  margin-bottom: var(--wp--preset--spacing--60); /* 32px */
}

/* Individual tab button */
.wc-product-tabs__tab {
  position: relative;
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--40); /* 12px 16px */
  font-size: var(--wp--preset--font-size--normal);
  font-weight: var(--wp--preset--font-weight--medium);
  color: var(--wp--preset--color--muted-foreground);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color var(--wp--preset--transition--base) ease;
  white-space: nowrap;
}

.wc-product-tabs__tab:hover {
  color: var(--wp--preset--color--foreground);
}

.wc-product-tabs__tab:focus-visible {
  outline: 2px solid var(--wp--preset--color--accent);
  outline-offset: 2px;
}

/* Active tab - RETRO GRADIENT UNDERLINE */
.wc-product-tabs__tab--active {
  color: var(--wp--preset--color--foreground);
  font-weight: var(--wp--preset--font-weight--semibold);
}

.wc-product-tabs__tab--active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ec4899 0%, #06b6d4 100%); /* Pink → Cyan gradient */
  border-radius: 2px 2px 0 0;
}
```

**Retro Design Note:** The active tab uses a vibrant pink-to-cyan gradient underline, creating a retro gaming aesthetic.

---

### Tab Panels

```css
/* Panels container */
.wc-product-tabs__panels {
  position: relative;
}

/* Individual panel - RETRO GLASS EFFECT */
.wc-product-tabs__panel {
  display: none;
  padding: var(--wp--preset--spacing--60); /* 32px */
  background: rgba(255, 255, 255, 0.05); /* Glass effect */
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--lg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.wc-product-tabs__panel--active {
  display: block;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Retro Design Note:** Tab panels use a glass morphism effect with subtle background blur, creating depth and a modern retro feel.

---

### Mobile Accordion

```css
/* Mobile container - visible on sm screens */
.wc-product-tabs__mobile {
  display: block;
}

@media (min-width: 768px) {
  .wc-product-tabs__mobile {
    display: none; /* Hidden on desktop */
  }
}

/* Accordion item */
.wc-product-tabs__accordion-item {
  border-bottom: 1px solid var(--wp--preset--color--border);
}

.wc-product-tabs__accordion-item:first-child {
  border-top: 1px solid var(--wp--preset--color--border);
}

/* Accordion trigger button */
.wc-product-tabs__accordion-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--wp--preset--spacing--50); /* 24px */
  font-size: var(--wp--preset--font-size--normal);
  font-weight: var(--wp--preset--font-weight--medium);
  color: var(--wp--preset--color--foreground);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color var(--wp--preset--transition--base) ease;
}

.wc-product-tabs__accordion-trigger:hover {
  background-color: var(--wp--preset--color--surface);
}

.wc-product-tabs__accordion-trigger:focus-visible {
  outline: 2px solid var(--wp--preset--color--accent);
  outline-offset: -2px;
}

/* Chevron icon */
.wc-product-tabs__accordion-icon {
  transition: transform var(--wp--preset--transition--base) ease;
  color: var(--wp--preset--color--muted-foreground);
}

.wc-product-tabs__accordion-icon--expanded {
  transform: rotate(180deg);
}

/* Accordion content */
.wc-product-tabs__accordion-content {
  display: none;
  padding: 0 var(--wp--preset--spacing--50) var(--wp--preset--spacing--50);
  background: rgba(255, 255, 255, 0.03);
}

.wc-product-tabs__accordion-content--active {
  display: block;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    padding-bottom: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
    padding-bottom: var(--wp--preset--spacing--50);
  }
}
```

---

## Retro Design System Integration

### Gradient Active Tab Underline

**Light Mode:**
```css
.wc-product-tabs__tab--active::after {
  background: linear-gradient(90deg, #ec4899 0%, #06b6d4 100%);
  /* Pink (#ec4899) → Cyan (#06b6d4) */
}
```

**Dark Mode:**
```css
.dark .wc-product-tabs__tab--active::after {
  background: linear-gradient(90deg, #f472b6 0%, #22d3ee 100%);
  /* Lighter pink → Lighter cyan for better contrast */
}
```

**Visual Example:**
```
Active Tab
───────────
▓▓▓▓▓▓▓▓▓▓▓  ← Gradient underline (pink → cyan)
```

---

### Glass Panel Effect

**Desktop Panel Styling:**
```css
.wc-product-tabs__panel {
  background: rgba(255, 255, 255, 0.05); /* Light mode */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .wc-product-tabs__panel {
  background: rgba(0, 0, 0, 0.2); /* Dark mode */
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

**Visual Effect:**
- Semi-transparent background
- Backdrop blur (10px) for glass effect
- Subtle border for definition
- Content appears to float over background

---

### Tab Hover Effects

```css
/* Subtle glow on hover (retro accent) */
.wc-product-tabs__tab:hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(236, 72, 153, 0.05); /* Pink tint */
  border-radius: var(--wp--preset--border-radius--md) var(--wp--preset--border-radius--md) 0 0;
}

.dark .wc-product-tabs__tab:hover::before {
  background: rgba(244, 114, 182, 0.08); /* Lighter pink for dark mode */
}
```

---

## Dark Mode Support

### Dark Mode Color Overrides

```css
/* Tab navigation border */
.dark .wc-product-tabs__nav {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

/* Inactive tab text */
.dark .wc-product-tabs__tab {
  color: var(--wp--preset--color--muted-foreground); /* #9ca3af */
}

/* Active tab text */
.dark .wc-product-tabs__tab--active {
  color: var(--wp--preset--color--foreground); /* #f9fafb */
}

/* Panel background (glass) */
.dark .wc-product-tabs__panel {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.05);
}

/* Accordion trigger hover */
.dark .wc-product-tabs__accordion-trigger:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

/* Accordion content background */
.dark .wc-product-tabs__accordion-content {
  background: rgba(0, 0, 0, 0.1);
}
```

---

### Dark Mode Color Mapping

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Tab (inactive)** | `#6b7280` (gray-500) | `#9ca3af` (gray-400) |
| **Tab (active)** | `#1a1a1a` | `#f9fafb` |
| **Tab gradient** | Pink → Cyan | Lighter Pink → Lighter Cyan |
| **Nav border** | `#e5e7eb` | `rgba(255,255,255,0.1)` |
| **Panel background** | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.2)` |
| **Panel border** | `rgba(255,255,255,0.1)` | `rgba(255,255,255,0.05)` |
| **Accordion hover** | `#f9f9f9` | `rgba(255,255,255,0.05)` |

---

## Accessibility

### Semantic HTML

```tsx
// Tab navigation uses nav landmark
<nav className="wc-product-tabs__nav" aria-label="Tabs">
  {/* Tab buttons */}
</nav>

// Active tab uses aria-current
<button
  className="wc-product-tabs__tab wc-product-tabs__tab--active"
  aria-current="page"
>
  Description
</button>

// Tab panels use tabpanel role
<div
  className="wc-product-tabs__panel wc-product-tabs__panel--active"
  role="tabpanel"
>
  {/* Panel content */}
</div>

// Accordion uses aria-expanded
<button
  className="wc-product-tabs__accordion-trigger"
  aria-expanded={isActive}
>
  Description
</button>
```

---

### Keyboard Navigation

**Desktop Tabs:**
- **Tab:** Move between tab buttons
- **Enter/Space:** Activate focused tab
- **Arrow Left/Right:** Navigate between tabs (optional enhancement)
- **Home/End:** Jump to first/last tab (optional enhancement)

**Mobile Accordion:**
- **Tab:** Move between accordion triggers
- **Enter/Space:** Toggle accordion section
- **Arrow Up/Down:** Navigate between sections (optional enhancement)

---

### Focus States

```css
/* Visible focus ring (WCAG AA) */
.wc-product-tabs__tab:focus-visible,
.wc-product-tabs__accordion-trigger:focus-visible {
  outline: 2px solid var(--wp--preset--color--accent);
  outline-offset: 2px;
  border-radius: var(--wp--preset--border-radius--sm);
}

/* Dark mode focus ring (higher contrast) */
.dark .wc-product-tabs__tab:focus-visible,
.dark .wc-product-tabs__accordion-trigger:focus-visible {
  outline-color: var(--wp--preset--color--accent-light);
}
```

---

### Screen Reader Announcements

**Best Practice:**
```tsx
// Announce tab changes to screen readers
<div
  className="wc-product-tabs__panel wc-product-tabs__panel--active"
  role="tabpanel"
  aria-labelledby={`tab-${index}`}
  aria-hidden={!isActive}
>
  {tab.content}
</div>

// Associate tab with panel
<button
  id={`tab-${index}`}
  aria-controls={`panel-${index}`}
  aria-selected={isActive}
>
  {tab.label}
</button>
```

---

## Responsive Behavior

### Breakpoint Strategy

| Screen Size | Layout | Behavior |
|-------------|--------|----------|
| **< 768px** | Accordion | Vertical stack, collapsible sections |
| **≥ 768px** | Tabs | Horizontal tabs, side-by-side panels |

---

### Mobile Accordion (< 768px)

**Features:**
- Full-width trigger buttons
- Chevron icon indicates expand/collapse state
- One section open at a time (accordion pattern)
- Smooth slide-down animation
- Tap-friendly 24px padding

**Layout:**
```
┌─────────────────────────────┐
│ ▼ Description               │
├─────────────────────────────┤
│ Product description text... │
└─────────────────────────────┘
┌─────────────────────────────┐
│ ▸ Additional Information    │
└─────────────────────────────┘
┌─────────────────────────────┐
│ ▸ Reviews (24)              │
└─────────────────────────────┘
```

---

### Desktop Tabs (≥ 768px)

**Features:**
- Horizontal tab navigation
- Active tab highlighted with gradient underline
- Glass panel for content
- Fade-in animation when switching tabs
- Mouse-friendly hover states

**Layout:**
```
Description  Additional Information  Reviews (24)
───────────  ─────────────────────  ────────────
            ▓▓▓▓▓▓▓▓▓▓▓ (gradient underline)

┌──────────────────────────────────────────────┐
│                                              │
│  Product description text in glass panel... │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Content Guidelines

### Tab Labels

**Best Practices:**
- ✅ Short, descriptive labels (1-3 words)
- ✅ Use sentence case ("Description" not "DESCRIPTION")
- ✅ Include count for reviews ("Reviews (24)")
- ✅ Keep consistent capitalization
- ❌ Avoid verbose labels ("Product Description and Details")

**Standard Labels:**
- "Description" (not "Product Description")
- "Additional Information" (or "Specifications")
- "Reviews (X)" where X = review count
- "Shipping" (if needed)

---

### Tab Order

**Recommended Order:**
1. **Description** - Primary product information
2. **Additional Information** - Specs, dimensions, materials
3. **Reviews** - Social proof and customer feedback
4. **Shipping** (optional) - Delivery details

**Why This Order:**
- Users expect description first
- Specs are secondary to main description
- Reviews come after understanding the product
- Shipping is least critical (often in FAQ/footer)

---

### Review Count Display

**Format:** `Reviews (X)` where X is the count

**Examples:**
- `Reviews (0)` - No reviews yet
- `Reviews (1)` - Single review
- `Reviews (24)` - Multiple reviews
- `Reviews (1,234)` - Large number (use comma separator)

**Dynamic Update:**
```tsx
{
  label: `Reviews (${reviews.length})`,
  content: <ReviewsList reviews={reviews} />
}
```

---

## Integration Examples

### SingleProduct Template

```tsx
import { ProductTabs } from '@/components/blocks/single-product/ProductTabs';

export const SingleProduct = () => {
  const product = useProduct(productId);
  
  return (
    <div className="product-page">
      {/* Product info, images, add to cart */}
      
      <ProductTabs
        tabs={[
          {
            label: 'Description',
            content: (
              <div className="product-description">
                <p>{product.description}</p>
              </div>
            )
          },
          {
            label: 'Additional Information',
            content: (
              <table className="product-attributes">
                {product.attributes.map(attr => (
                  <tr key={attr.name}>
                    <td>{attr.name}</td>
                    <td>{attr.value}</td>
                  </tr>
                ))}
              </table>
            )
          },
          {
            label: `Reviews (${product.reviews.length})`,
            content: <ReviewsList reviews={product.reviews} />
          }
        ]}
      />
    </div>
  );
};
```

---

### ProductTabsSection Pattern (Extended)

**File:** `/src/app/components/patterns/ProductTabsSection.tsx`

This pattern wrapper provides pre-built tab content for Description, Additional Info, and Reviews:

```tsx
import { ProductTabsSection } from '@/components/patterns/ProductTabsSection';

<ProductTabsSection
  description={product.description}
  attributes={product.attributes}
  reviews={product.reviews}
  reviewRating={userReviewRating}
  setReviewRating={setUserReviewRating}
  reviewText={userReviewText}
  setReviewText={setUserReviewText}
  handleReviewSubmit={submitReview}
/>
```

**Pattern Includes:**
- Pre-formatted description tab
- Attribute table for additional info
- Complete reviews section with:
  - Existing reviews display
  - Star ratings
  - Verified badge
  - Review submission form

---

## State Variations

### No Tabs (Empty Array)

```tsx
<ProductTabs tabs={[]} />
```

**Renders:** `null` (component returns early)

---

### Single Tab

```tsx
<ProductTabs
  tabs={[
    {
      label: 'Description',
      content: <p>Product description</p>
    }
  ]}
/>
```

**Renders:** Tab interface with only one tab (still functional, but consider using a simple `<div>` instead)

---

### Many Tabs (5+)

```tsx
<ProductTabs
  tabs={[
    { label: 'Description', content: <Description /> },
    { label: 'Specifications', content: <Specs /> },
    { label: 'Reviews', content: <Reviews /> },
    { label: 'Shipping', content: <Shipping /> },
    { label: 'Returns', content: <Returns /> },
    { label: 'FAQ', content: <FAQ /> }
  ]}
/>
```

**Desktop:** Tabs may wrap to second row if too many  
**Mobile:** Accordion handles many tabs naturally (vertical scroll)

---

## Testing Checklist

### Visual Testing

- [ ] Desktop: Tabs display horizontally
- [ ] Desktop: Active tab has pink→cyan gradient underline
- [ ] Desktop: Panel has glass effect (subtle background)
- [ ] Desktop: Hover states work on tabs
- [ ] Mobile: Accordion items stack vertically
- [ ] Mobile: Chevron rotates when expanded
- [ ] Mobile: Smooth slide-down animation
- [ ] Dark mode: Gradient colors adjust for contrast
- [ ] Dark mode: Glass panels visible with border

---

### Interaction Testing

- [ ] Clicking tab switches content (desktop)
- [ ] Only one panel visible at a time (desktop)
- [ ] Clicking accordion expands section (mobile)
- [ ] Clicking expanded accordion collapses it (mobile)
- [ ] Keyboard: Tab key navigates through buttons
- [ ] Keyboard: Enter/Space activates tab/accordion
- [ ] Focus ring visible on keyboard navigation

---

### Responsive Testing

- [ ] Mobile (320px): Accordion displays correctly
- [ ] Mobile (375px): No horizontal scroll
- [ ] Tablet (768px): Switches to desktop tabs
- [ ] Desktop (1024px+): Tabs layout stable
- [ ] Breakpoint transition (768px): No layout jump

---

### Edge Cases

- [ ] Empty tabs array (renders null)
- [ ] Single tab (still functional)
- [ ] Very long tab labels (truncate or wrap)
- [ ] Very long content (scrollable panel)
- [ ] 5+ tabs (wrapping behavior)
- [ ] Review count updates dynamically
- [ ] Tab labels with special characters

---

## Common Mistakes

### ❌ Mistake 1: Missing Glass Panel Background

```css
/* WRONG - no retro glass effect */
.wc-product-tabs__panel {
  background: white;
  padding: 32px;
}
```

✅ **Correct:**
```css
.wc-product-tabs__panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: var(--wp--preset--spacing--60);
  border: 1px solid var(--wp--preset--color--border);
}
```

**Why:** Glass effect is a signature retro design element.

---

### ❌ Mistake 2: Missing Gradient Underline

```css
/* WRONG - plain underline */
.wc-product-tabs__tab--active {
  border-bottom: 2px solid black;
}
```

✅ **Correct:**
```css
.wc-product-tabs__tab--active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ec4899 0%, #06b6d4 100%);
}
```

**Why:** Gradient underline is the defining retro visual feature.

---

### ❌ Mistake 3: No Mobile Accordion

```tsx
// WRONG - desktop-only layout
<div className="tabs-desktop">
  <nav>{/* tabs */}</nav>
  <div>{/* panels */}</div>
</div>
```

✅ **Correct:**
```tsx
<div className="wc-product-tabs">
  {/* Desktop tabs */}
  <div className="wc-product-tabs__desktop">...</div>
  
  {/* Mobile accordion */}
  <div className="wc-product-tabs__mobile">...</div>
</div>
```

**Why:** Mobile users need touch-friendly accordion interface.

---

### ❌ Mistake 4: Missing aria-current

```tsx
// WRONG - no accessibility attribute
<button className="wc-product-tabs__tab wc-product-tabs__tab--active">
  Description
</button>
```

✅ **Correct:**
```tsx
<button
  className={`wc-product-tabs__tab ${isActive ? 'wc-product-tabs__tab--active' : ''}`}
  aria-current={isActive ? 'page' : undefined}
>
  Description
</button>
```

**Why:** Screen readers need to know which tab is active.

---

## CSS File Location

**Primary Styling:** Should be created at `/src/styles/blocks/product/tabs.css`

**Additional Review Styles:** `/src/styles/blocks/sweep-cleanup.css` (lines 193-250)

**Imports in:** `/styles/globals-minimal.css` (Batch 6 - Product blocks)

---

## Related Components

- **ProductTabsSection** - Pattern wrapper with pre-built tab content
- **ProductInfo** - Product title, rating, price (appears above tabs)
- **ProductAddToCart** - Add to cart controls (appears above tabs)
- **ReviewsList** - Reviews content for Reviews tab
- **ProductMeta** - SKU, categories (may appear in Additional Info tab)

---

## Related WooCommerce Blocks

| Block Name | Description | Tab Location |
|------------|-------------|--------------|
| `woocommerce/product-description` | Full product description | Description tab |
| `woocommerce/product-details` | Product specifications | Additional Information tab |
| `woocommerce/product-reviews` | Customer reviews | Reviews tab |
| `woocommerce/product-review-template` | Single review layout | Reviews tab |

---

## Animation Specifications

### Tab Switch Animation (Desktop)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px); /* Subtle upward slide */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.wc-product-tabs__panel--active {
  animation: fadeIn 0.3s ease-in-out;
}
```

**Duration:** 300ms  
**Easing:** ease-in-out  
**Effect:** Fade + slide up

---

### Accordion Expand Animation (Mobile)

```css
@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    padding-bottom: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px; /* Large enough for any content */
    padding-bottom: var(--wp--preset--spacing--50);
  }
}

.wc-product-tabs__accordion-content--active {
  animation: slideDown 0.3s ease-out;
}
```

**Duration:** 300ms  
**Easing:** ease-out  
**Effect:** Fade + vertical expand

---

### Chevron Rotation (Mobile)

```css
.wc-product-tabs__accordion-icon {
  transition: transform 0.2s ease;
}

.wc-product-tabs__accordion-icon--expanded {
  transform: rotate(180deg);
}
```

**Duration:** 200ms  
**Easing:** ease  
**Effect:** Rotate 180° (▼ → ▲)

---

## Performance Considerations

### Conditional Rendering

```tsx
// ❌ INEFFICIENT - All panels rendered, hidden with CSS
{tabs.map((tab, index) => (
  <div className={activeTabIndex === index ? 'active' : 'hidden'}>
    {tab.content}
  </div>
))}

// ✅ EFFICIENT - Only active panel rendered
{tabs.map((tab, index) => (
  activeTabIndex === index && (
    <div key={index}>{tab.content}</div>
  )
))}
```

**Current Implementation:** Uses CSS `display: none` (all panels in DOM)  
**Alternative:** Conditional render (only active panel in DOM)  
**Trade-off:** CSS approach allows animations; conditional render saves memory

---

### Lazy Loading Tab Content

For heavy tab content (e.g., many reviews):

```tsx
const [loadedTabs, setLoadedTabs] = useState([0]); // Load first tab

const handleTabClick = (index: number) => {
  setActiveTabIndex(index);
  if (!loadedTabs.includes(index)) {
    setLoadedTabs([...loadedTabs, index]);
  }
};

// Render
{tabs.map((tab, index) => (
  <div className={activeTabIndex === index ? 'active' : ''}>
    {loadedTabs.includes(index) ? tab.content : <Skeleton />}
  </div>
))}
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-13 | Initial comprehensive guideline created with retro design specifications |

---

**Status:** ✅ Complete  
**Priority:** P0 (Critical)  
**Guidelines Version:** 2.12  
**Last Updated:** March 13, 2026
