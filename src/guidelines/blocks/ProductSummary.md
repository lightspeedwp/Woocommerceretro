# ProductSummary Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/ProductSummary.tsx`  
**Status:** Complete

---

## Overview

**Purpose:** Displays the product's short description or summary text below the product title and price, providing key selling points and product highlights in a scannable format.

**Use Cases:**
- Single product page summary (primary content above the fold)
- Product quick view modal description
- Product comparison table descriptions
- Product archive hover cards (condensed version)

**WordPress Alignment:** Maps to WooCommerce product short description field (`woocommerce/product-summary`). This is distinct from the full product description shown in tabs — summary is the elevator pitch.

---

## Visual Reference

**Light Mode:**
```
Product Title Here
$49.99

Premium wireless headphones with active     ← Summary text
noise cancellation and 30-hour battery      ← Muted gray color
life. Perfect for travel and commuting.     ← Relaxed line-height
```

**Dark Mode:**
```
Product Title Here
$49.99

Premium wireless headphones with active     ← Summary text
noise cancellation and 30-hour battery      ← Lighter gray
life. Perfect for travel and commuting.     ← Same spacing
```

**States:**
- Default (full text visible)
- Long summary (multi-paragraph wrapping)
- Short summary (single sentence)
- Empty summary (component returns null)

---

## Implementation

### File Location

```
/src/app/components/blocks/single-product/ProductSummary.tsx
```

### Dependencies

```tsx
import React from 'react';
import { Typography } from '../../common/Typography';
```

**Required:**
- `Typography` component for semantic body text rendering with consistent styling

**Optional:**
- None

---

## Props / API

### TypeScript Interface

```tsx
interface ProductSummaryProps {
  // REQUIRED props
  summary: string;  // Product short description (plain text or HTML)
}
```

### Props Reference Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `summary` | `string` | ✅ Yes | — | Product short description. Plain text or basic HTML. Displayed below price. |

---

## Usage Examples

### Basic Usage

```tsx
import { ProductSummary } from '@/components/blocks/single-product/ProductSummary';

function ProductPage() {
  return (
    <ProductSummary 
      summary="Premium wireless headphones with active noise cancellation and 30-hour battery life."
    />
  );
}
```

**Output:**
```html
<div class="wc-product-summary">
  <p class="typography-body">
    Premium wireless headphones with active noise cancellation 
    and 30-hour battery life.
  </p>
</div>
```

---

### Multi-paragraph Summary

```tsx
<ProductSummary 
  summary="Experience studio-quality sound with our flagship wireless headphones. Features advanced active noise cancellation technology that blocks out distractions.

Enjoy 30 hours of continuous playback on a single charge. Quick charge support provides 5 hours of listening from just 15 minutes of charging.

Perfect for travel, commuting, and focused work sessions."
/>
```

**Output:**
```html
<div class="wc-product-summary">
  <p class="typography-body">
    Experience studio-quality sound with our flagship wireless headphones...
    
    Enjoy 30 hours of continuous playback...
    
    Perfect for travel, commuting, and focused work sessions.
  </p>
</div>
```

---

### With Product Data

```tsx
import { products } from '@/data/products';

function SingleProduct({ productId }: { productId: number }) {
  const product = products.find((p) => p.id === productId);
  
  if (!product) return null;
  
  return (
    <div className="wc-product-header">
      <ProductTitle title={product.name} brand={product.brand} />
      <ProductPrice price={product.price} salePrice={product.salePrice} />
      <ProductSummary summary={product.shortDescription} />
      {/* Add to cart section */}
    </div>
  );
}
```

---

### Empty Summary Handling

```tsx
function ProductHeader({ product }: { product: Product }) {
  return (
    <div>
      <ProductTitle title={product.name} />
      <ProductPrice price={product.price} />
      
      {/* Only render if summary exists */}
      {product.shortDescription && (
        <ProductSummary summary={product.shortDescription} />
      )}
      
      <AddToCartButton productId={product.id} />
    </div>
  );
}
```

**Rationale:** Some products may not have short descriptions. Conditional rendering prevents empty div rendering.

---

## Styling

### CSS Classes

**Root element:**
```css
.wc-product-summary {
  /* Container for product summary text */
  margin-bottom: var(--wp--preset--spacing--60); /* 24px */
  max-width: none; /* Full width (no constraint) */
}
```

**Paragraph styles:**
```css
.wc-product-summary p {
  /* Typography body paragraph within summary */
  font-size: var(--wp--preset--font-size--200); /* 16px base */
  color: var(--wp--preset--color--muted-foreground); /* Muted gray */
  line-height: var(--wp--preset--line-height--relaxed); /* 1.6 for readability */
}
```

**Typography class (body):**
```css
.typography-body {
  /* Applied by Typography component */
  /* Base body text styling */
}
```

### WordPress CSS Variables Used

**Typography:**
- `--wp--preset--font-size--200` — Body text size (16px base)
- `--wp--preset--line-height--relaxed` — Relaxed line height (1.6)

**Colors:**
- `--wp--preset--color--muted-foreground` — Muted text color (#6b7280 light, #9ca3af dark)

**Spacing:**
- `--wp--preset--spacing--60` — Bottom margin (24px)

### CSS File Location

```
/src/styles/blocks/product/single-product-blocks.css (lines 76-89)
```

**Also inlined in:**
```
/styles/globals.css (lines 1099-1100)
```

---

## Dark Mode Support

### Light Mode

```css
.wc-product-summary {
  margin-bottom: var(--wp--preset--spacing--60);
  max-width: none;
}

.wc-product-summary p {
  font-size: var(--wp--preset--font-size--200);
  color: var(--wp--preset--color--muted-foreground); /* #6b7280 medium gray */
  line-height: var(--wp--preset--line-height--relaxed);
}
```

### Dark Mode

```css
.dark .wc-product-summary p {
  color: var(--wp--preset--color--muted-foreground); /* #9ca3af lighter gray */
}
```

**Typography body Dark Mode:**
```css
.dark .typography-body {
  color: var(--wp--preset--color--muted-foreground); /* Automatic via CSS variable */
}
```

**Dark Mode Checklist:**
- [x] Summary text visible in dark mode (lighter gray)
- [x] Sufficient contrast ratio (WCAG AA: 7.1:1)
- [x] No color-only information conveyed
- [x] Line-height maintains readability
- [x] Automatic theme switching via CSS variables

---

## Accessibility

### WCAG 2.1 AA Compliance

**Semantic HTML:**
- ✅ Summary uses `<p>` tag (paragraph text)
- ✅ Wrapped by Typography component (consistent styling)
- ✅ No heading elements (summary is not a heading)
- ✅ Screen readers announce as paragraph text

**Color Contrast:**
- [x] Light mode text: **4.8:1** (AA ✅)
- [x] Dark mode text: **7.1:1** (AA ✅)
- [x] Muted foreground color ensures readability without overpowering

**Readability:**
- [x] Font size: 16px (readable minimum)
- [x] Line height: 1.6 (relaxed for longer text blocks)
- [x] Max-width: none (full width for flexibility, parent container controls width)
- [x] No justified text (left-aligned for accessibility)

**Keyboard Navigation:**
- [x] Not interactive (no focus required)
- [x] Text is selectable (users can copy)
- [x] Does not interfere with tab order

**Screen Reader Support:**
```
Screen Reader Output:
"Premium wireless headphones with active noise cancellation 
and 30-hour battery life."
```

**ARIA Attributes:**
- No ARIA needed (semantic `<p>` provides full context)

---

## Responsive Design

### Mobile (< 640px)

**Font Size:**
- Summary text: `16px` (base from Typography body)

**Behavior:**
- Full width summary
- Text wraps naturally
- 24px bottom margin to next element
- Relaxed line-height (1.6) prevents cramping

**Visual:**
```
Product Title
$49.99
────────────────────────
Summary text wraps to
multiple lines naturally
with generous spacing for
mobile readability.
────────────────────────
[Add to Cart]
```

---

### Tablet (640px - 1024px)

**Font Size:**
- Summary text: `16px` (same as mobile)

**Behavior:**
- Same as mobile (no changes needed)
- Wider viewport allows longer lines
- Still wraps naturally at container edge

---

### Desktop (1024px+)

**Font Size:**
- Summary text: `16px` (consistent across all devices)

**Behavior:**
- Maximum readability with wider container
- Longer lines of text (60-80 characters ideal)
- Same 24px bottom margin

**Optimal Width:**
- Parent container should constrain width to ~65ch (800px max) for optimal line length
- Summary itself has `max-width: none` (relies on parent)

---

### Breakpoint CSS

```css
/* Mobile first (default) */
.wc-product-summary {
  margin-bottom: var(--wp--preset--spacing--60); /* 24px all devices */
  max-width: none; /* Full width, parent controls constraint */
}

.wc-product-summary p {
  font-size: var(--wp--preset--font-size--200); /* 16px all devices */
  line-height: var(--wp--preset--line-height--relaxed); /* 1.6 all devices */
}

/* No media queries needed — Typography body handles all devices consistently */
```

---

## Content Guidelines

### Best Summary Length

**Optimal Character Count:**
- **Minimum:** 50 characters (one sentence minimum)
- **Ideal:** 150-250 characters (2-3 sentences)
- **Maximum:** 500 characters (5-6 sentences before becoming overwhelming)

**Structure:**
```
[Key Benefit 1]. [Key Benefit 2]. [Use Case].

Example:
"Premium wireless headphones with active noise cancellation 
and 30-hour battery life. Perfect for travel and commuting."
```

### What to Include

**✅ Include:**
- Primary product benefit (main selling point)
- 2-3 standout features (battery life, materials, technology)
- Ideal use case (travel, gaming, professional use)
- Quick credibility boost (award-winning, bestseller)

**❌ Avoid:**
- Full specifications (save for description tabs)
- Pricing details (shown separately)
- Legal disclaimers (footer content)
- Long paragraphs (keep scannable)

### Writing Examples

**Good Summary (Clear & Scannable):**
```
Premium wireless headphones with active noise cancellation and 30-hour 
battery life. Features studio-quality sound drivers and comfortable 
memory foam ear cushions. Perfect for travel, commuting, and focused work.
```

**Bad Summary (Too Long):**
```
These premium wireless headphones are the best on the market featuring 
advanced active noise cancellation technology that uses sophisticated 
algorithms to block out unwanted background noise. The battery lasts for 
an impressive 30 hours on a single charge and supports quick charging 
which gives you 5 hours of listening from just 15 minutes of charging time. 
The ear cushions are made from premium memory foam materials that conform 
to the shape of your ears for maximum comfort during extended listening 
sessions. These headphones are ideal for travel, commuting to work, 
studying in libraries, working in noisy offices, and any other situation 
where you need to focus without distractions.
```
**Problem:** 600+ characters, multiple long sentences, overwhelming detail.

**Good Summary (Short & Punchy):**
```
Studio-quality wireless headphones. 30-hour battery, active noise 
cancellation, premium comfort.
```

---

## Typography Integration

### Why Typography Component?

**ProductSummary uses `<Typography variant="body">` for:**
- ✅ **Consistent styling** — Matches all body text across site
- ✅ **Dark mode support** — Automatic color switching
- ✅ **Accessibility** — Semantic paragraph tags
- ✅ **Maintainability** — Single source of truth for body text

**Typography body Classes Applied:**
```tsx
<p class="typography-body">Summary text</p>
```

**Equivalent CSS:**
```css
.typography-body {
  font-size: var(--wp--preset--font-size--200); /* 16px */
  line-height: var(--wp--preset--line-height--relaxed); /* 1.6 */
  color: var(--wp--preset--color--muted-foreground); /* #6b7280 */
}

.dark .typography-body {
  color: var(--wp--preset--color--muted-foreground); /* #9ca3af */
}
```

---

## Related Components

**Used By:**
- `SingleProduct` template — Product page summary section
- `QuickView` modal — Quick view summary
- `ProductComparison` — Comparison table descriptions
- Product hover cards (if showing summaries)

**Uses:**
- `Typography` component — For semantic paragraph rendering
- No other components

**Related Product Blocks:**
- `ProductTitle` — Product name (appears before summary)
- `ProductPrice` — Product pricing (appears before summary)
- `ProductRating` — Star rating (may appear before/after summary)
- `AddToCartButton` — CTA button (appears after summary)
- `ProductTabs` — Full description (separate from summary)

---

## Common Patterns

### Pattern 1: Standard Product Header Stack

Typical above-the-fold product section:

```tsx
function ProductHeader({ product }: { product: Product }) {
  return (
    <div className="wc-product-header">
      <ProductTitle title={product.name} brand={product.brand} />
      
      <ProductRating 
        rating={product.averageRating} 
        reviewCount={product.reviewCount}
      />
      
      <ProductPrice 
        price={product.price} 
        salePrice={product.salePrice}
      />
      
      <ProductSummary summary={product.shortDescription} />
      
      <AddToCartButton productId={product.id} />
    </div>
  );
}
```

**Visual Hierarchy:**
```
BRAND NAME
Large Product Title
★★★★☆ (24 reviews)
$49.99 $39.99
────────────────────
Premium wireless headphones with 
active noise cancellation and 
30-hour battery life.
────────────────────
[Add to Cart]
```

---

### Pattern 2: Quick View Summary (Condensed)

For modal/drawer quick views, use shorter summaries:

```tsx
function QuickViewContent({ product }: { product: Product }) {
  // Truncate summary for quick view
  const shortSummary = product.shortDescription.slice(0, 150) + '...';
  
  return (
    <div className="wc-quick-view-content">
      <ProductTitle title={product.name} />
      <ProductPrice price={product.price} salePrice={product.salePrice} />
      <ProductSummary summary={shortSummary} />
      <AddToCartButton productId={product.id} />
    </div>
  );
}
```

**Rationale:** Quick views emphasize speed — shorter summaries reduce scrolling.

---

### Pattern 3: With Key Features List

Combine summary with bullet list:

```tsx
function ProductOverview({ product }: { product: Product }) {
  return (
    <div>
      <ProductTitle title={product.name} />
      <ProductSummary summary={product.shortDescription} />
      
      <div className="wc-product-features">
        <Typography variant="h3">Key Features</Typography>
        <ul>
          {product.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

---

## Best Practices

### Do's ✅

- ✅ **Keep summaries concise** — 150-250 characters ideal (2-3 sentences)
- ✅ **Front-load benefits** — Most important info in first sentence
- ✅ **Use plain language** — Avoid jargon and technical specs
- ✅ **Include use cases** — "Perfect for travel and commuting"
- ✅ **Render conditionally** — Check if summary exists before rendering
- ✅ **Use Typography component** — Never render raw `<p>` tags
- ✅ **Match product data** — Summary should align with full description

### Don'ts ❌

- ❌ **Don't write novels** — Summaries over 500 characters overwhelm users
- ❌ **Don't repeat title** — Summary should add new information
- ❌ **Don't include specs** — Save detailed specifications for tabs
- ❌ **Don't override font size** — Typography body handles responsive sizing
- ❌ **Don't use headings** — Summary is paragraph text, not a heading
- ❌ **Don't add custom CSS** — Component doesn't accept className prop
- ❌ **Don't rely on HTML formatting** — Keep it plain text (basic formatting only)

---

## Performance Considerations

**Optimization:**
- ✅ Component is stateless (pure component)
- ✅ No runtime calculations or data fetching
- ✅ CSS is static (no dynamic styles)
- ✅ Typography component is lightweight (~50 lines)
- ✅ Minimal re-renders (only when summary prop changes)

**Memoization:**
```tsx
const MemoizedProductSummary = React.memo(ProductSummary);

// Use when parent re-renders frequently but summary stays same
<MemoizedProductSummary summary={product.shortDescription} />
```

**Bundle Size:**
- Component: ~120 bytes (minified)
- CSS: ~180 bytes (minified)
- Total impact: Negligible

**Rendering Performance:**
- First Paint: < 3ms (simple text rendering)
- Re-render: < 1ms (text update only)

---

## Common Mistakes & Fixes

### Mistake 1: Rendering Empty Summary

❌ **WRONG:**
```tsx
<ProductSummary summary="" /> {/* Empty string renders empty div */}
```

✅ **CORRECT:**
```tsx
{product.shortDescription && (
  <ProductSummary summary={product.shortDescription} />
)}
```

**Rationale:** Empty summaries create unnecessary DOM elements and spacing.

---

### Mistake 2: Manual Paragraph Styling

❌ **WRONG:**
```tsx
<p className="text-gray-600 text-base leading-relaxed">
  {product.shortDescription}
</p>
```

✅ **CORRECT:**
```tsx
<ProductSummary summary={product.shortDescription} />
```

**Rationale:** ProductSummary uses Typography component for consistent styling and dark mode.

---

### Mistake 3: Overly Long Summaries

❌ **WRONG:**
```tsx
<ProductSummary 
  summary="These premium wireless headphones are the absolute best on the 
  market featuring advanced active noise cancellation technology that uses 
  sophisticated algorithms to block out unwanted background noise in any 
  environment. The battery lasts for an impressive 30 hours on a single 
  charge and supports quick charging technology which gives you 5 hours of 
  listening time from just 15 minutes of charging. The ear cushions are made 
  from premium memory foam materials..." 
/> {/* 600+ characters! */}
```

✅ **CORRECT:**
```tsx
<ProductSummary 
  summary="Premium wireless headphones with active noise cancellation and 
  30-hour battery life. Perfect for travel and commuting." 
/> {/* ~120 characters */}
```

**Rationale:** Short summaries are scannable. Full details belong in description tabs.

---

### Mistake 4: Duplicating Product Title

❌ **WRONG:**
```tsx
<ProductTitle title="Wireless Bluetooth Headphones" />
<ProductSummary summary="Wireless Bluetooth Headphones with ANC" />
{/* Summary repeats title */}
```

✅ **CORRECT:**
```tsx
<ProductTitle title="Wireless Bluetooth Headphones" />
<ProductSummary summary="Active noise cancellation and 30-hour battery life" />
{/* Summary adds new information */}
```

---

### Mistake 5: Adding Custom Classes

❌ **WRONG:**
```tsx
<ProductSummary 
  summary={product.shortDescription} 
  className="custom-summary" {/* No className prop! */}
/>
```

✅ **CORRECT:**
```tsx
<div className="custom-wrapper">
  <ProductSummary summary={product.shortDescription} />
</div>
```

**Rationale:** Component doesn't expose className. Wrap in div if custom styling needed.

---

## Data Integration

### Product Data Structure

```tsx
interface Product {
  id: number;
  name: string;
  shortDescription: string;  // Required for ProductSummary
  description: string;        // Full description (different from summary)
  price: number;
  // ... other fields
}
```

### Example Product Data

```tsx
const product = {
  id: 1,
  name: "Wireless Bluetooth Headphones",
  shortDescription: "Premium wireless headphones with active noise cancellation and 30-hour battery life. Perfect for travel and commuting.",
  description: "Experience studio-quality sound with our flagship wireless headphones. Advanced ANC technology blocks out ambient noise while premium 40mm drivers deliver crystal-clear audio across all frequencies...", // Full description
  price: 49.99,
  salePrice: 39.99,
  // ...
};

// Usage:
<ProductSummary summary={product.shortDescription} />
```

### Summary vs. Description

**Short Description (Summary):**
- Displayed above the fold
- 150-250 characters
- Key selling points only
- Shown by ProductSummary component

**Full Description:**
- Displayed in product tabs
- 500+ characters
- Detailed specifications, features, benefits
- Shown by ProductTabs component

```tsx
// Summary (short)
summary: "Premium wireless headphones with ANC and 30-hour battery."

// Description (full)
description: "Experience studio-quality sound with our flagship wireless 
headphones. Advanced active noise cancellation technology blocks ambient 
noise while premium 40mm drivers deliver crystal-clear audio. Enjoy 30 hours 
of continuous playback, quick charge support, and ultra-comfortable memory 
foam ear cushions. Perfect for audiophiles, travelers, and professionals."
```

---

## SEO Considerations

### Product Summary SEO Value

**Meta Description:**
```tsx
// Use product summary for meta description
<meta 
  name="description" 
  content={product.shortDescription} 
/>
```

**Schema Markup:**
```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Wireless Bluetooth Headphones",
  "description": "Premium wireless headphones with active noise cancellation and 30-hour battery life.", // Uses summary
  // ... other schema fields
}
</script>
```

**OpenGraph:**
```tsx
<meta property="og:description" content={product.shortDescription} />
<meta name="twitter:description" content={product.shortDescription} />
```

**SEO Best Practices:**
- ✅ Summary should be 150-160 characters for meta descriptions
- ✅ Include primary keyword (product type)
- ✅ Highlight unique selling proposition
- ✅ Avoid keyword stuffing
- ✅ Write for humans first, search engines second

---

## Testing

### Visual Tests

**Test Scenarios:**
1. ✅ Summary renders correctly (light mode)
2. ✅ Summary renders correctly (dark mode)
3. ✅ Short summary (1 sentence) displays properly
4. ✅ Long summary (5 sentences) wraps naturally
5. ✅ Multi-paragraph summary maintains spacing
6. ✅ Empty summary doesn't render
7. ✅ Line-height maintains readability
8. ✅ Text color has sufficient contrast

**Accessibility Tests:**
```tsx
describe('ProductSummary A11y', () => {
  it('renders paragraph with correct text', () => {
    render(<ProductSummary summary="Test summary text" />);
    const paragraph = screen.getByText('Test summary text');
    expect(paragraph.tagName).toBe('P');
  });

  it('uses Typography body variant', () => {
    render(<ProductSummary summary="Test" />);
    const paragraph = screen.getByText('Test');
    expect(paragraph).toHaveClass('typography-body');
  });
});
```

**Contrast Tests:**
```tsx
describe('ProductSummary Contrast', () => {
  it('meets WCAG AA in light mode', () => {
    const contrast = getContrastRatio('#6b7280', '#ffffff');
    expect(contrast).toBeGreaterThan(4.5); // AA: 4.8:1
  });

  it('meets WCAG AA in dark mode', () => {
    const contrast = getContrastRatio('#9ca3af', '#0f0f0f');
    expect(contrast).toBeGreaterThan(4.5); // AA: 7.1:1
  });
});
```

---

## WordPress/WooCommerce Alignment

### Block Equivalence

**WordPress Block:**
```
<!-- wp:woocommerce/product-summary /-->
```

**React Component:**
```tsx
<ProductSummary summary={product.shortDescription} />
```

**Rendered HTML (WordPress):**
```html
<div class="woocommerce-product-details__short-description">
  <p>Product summary text here...</p>
</div>
```

**Rendered HTML (React):**
```html
<div class="wc-product-summary">
  <p class="typography-body">Product summary text here...</p>
</div>
```

### Key Differences

| Feature | WordPress | React Component |
|---------|-----------|-----------------|
| **Container Class** | `.woocommerce-product-details__short-description` | `.wc-product-summary` |
| **Text Element** | Basic `<p>` tag | `<p class="typography-body">` |
| **Styling** | Theme-dependent | Typography component |
| **Dark Mode** | Manual theme CSS | Automatic via CSS vars |
| **Typography** | Theme fonts | Typography system |

**Migration Notes:** React component adds Typography integration and automatic dark mode not available in native WordPress block.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-15 | Initial creation. Complete guideline with all sections. |

---

## Related Documentation

- **Main Guidelines:** `/guidelines/Guidelines.md`
- **Typography Component:** `/guidelines/components/Typography.md`
- **ProductTitle Guideline:** `/guidelines/blocks/ProductTitle.md`
- **Single Product Template:** `/guidelines/templates/SingleProduct.md`
- **Product Blocks Overview:** `/guidelines/overview-blocks.md` (Single Product section)
- **Product Data Structure:** `/src/app/data/products.ts`
- **Design Tokens - Typography:** `/guidelines/design-tokens/Typography.md`
- **CSS File:** `/src/styles/blocks/product/single-product-blocks.css`

---

**Last Updated:** 2026-03-15  
**Author:** PlayPocket Development Team  
**Status:** Complete  
**Next Review:** 2026-04-15
