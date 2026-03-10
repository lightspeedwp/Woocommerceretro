# BrandLogoGrid Pattern

**Version:** 1.0  
**Type:** Pattern (Reusable Section)  
**WordPress Mapping:** Logo Grid Block Pattern  
**File:** `/components/patterns/BrandLogoGrid.tsx`

---

## Overview

The BrandLogoGrid pattern displays a responsive grid of brand logos, typically used to showcase partner brands, featured brands, or trust signals. It handles image loading, responsive layouts, and optional linking to brand pages.

**Purpose:**
- Display brand/partner logos in grid format
- Provide social proof and trust signals
- Link to brand landing pages
- Handle responsive image display

**WordPress Equivalent:**
- Logo Grid Block Pattern
- Image Grid Block
- Brand Showcase Pattern
- Partner Logo Section

---

## Component Structure

### Hierarchy

```
BrandLogoGrid (Pattern)
└── Grid Container
    └── Brand Logo Item × N
        ├── Image (with fallback)
        ├── Brand Name (alt text)
        └── Optional Link
```

### Architecture Type

- **Pattern:** Reusable section for brand displays
- **FSE Alignment:** Maps to WordPress Logo Grid Pattern
- **Composability:** Medium - used in homepage, about page
- **Reusability:** High - consistent brand display across site

---

## Props Interface

```typescript
interface BrandLogoGridProps {
  /**
   * Array of brand logo objects
   */
  brands: Brand[];

  /**
   * Grid columns configuration
   * @default { mobile: 2, tablet: 3, desktop: 4, wide: 6 }
   */
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    wide?: number;
  };

  /**
   * Whether brand logos should link to brand pages
   * @default true
   */
  linkable?: boolean;

  /**
   * Logo display mode
   * @default 'contain'
   */
  imageMode?: 'contain' | 'cover';

  /**
   * Background color for logo containers
   * @default 'transparent'
   */
  backgroundColor?: 'transparent' | 'muted' | 'white';

  /**
   * Logo size variant
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Optional heading above grid
   */
  heading?: string;

  /**
   * Optional description below heading
   */
  description?: string;

  /**
   * Grayscale logos (hover to color)
   * @default false
   */
  grayscale?: boolean;
}

interface Brand {
  id: string;
  name: string;
  logo: string;
  slug?: string;
  description?: string;
}
```

---

## Usage Examples

### Example 1: Basic Brand Grid (Homepage)

```tsx
import { BrandLogoGrid } from '@/components/patterns/BrandLogoGrid';
import { brands } from '@/data/brands';

export function HomePage() {
  return (
    <Layout>
      <Hero />
      
      <BrandLogoGrid
        brands={brands}
        heading="Trusted Brands"
        description="Shop from the world's leading brands"
      />
      
      <ProductCollection />
    </Layout>
  );
}
```

### Example 2: Partner Logos (About Page)

```tsx
import { BrandLogoGrid } from '@/components/patterns/BrandLogoGrid';

const partners = [
  { id: '1', name: 'Partner A', logo: '/logos/partner-a.svg' },
  { id: '2', name: 'Partner B', logo: '/logos/partner-b.svg' },
  { id: '3', name: 'Partner C', logo: '/logos/partner-c.svg' },
];

export function AboutPage() {
  return (
    <Layout>
      <PageContent />
      
      <BrandLogoGrid
        brands={partners}
        heading="Our Partners"
        linkable={false}
        backgroundColor="muted"
        grayscale={true}
      />
    </Layout>
  );
}
```

### Example 3: Custom Column Configuration

```tsx
<BrandLogoGrid
  brands={brands}
  columns={{
    mobile: 2,
    tablet: 4,
    desktop: 6,
    wide: 8
  }}
  size="small"
/>
```

### Example 4: Featured Brands with Links

```tsx
import { shopBrands } from '@/data/shopBrands';

<BrandLogoGrid
  brands={shopBrands}
  heading="Shop by Brand"
  description="Explore our curated collection from top brands"
  linkable={true}
  size="large"
/>
```

### Example 5: Trust Badge Style (Footer)

```tsx
const trustLogos = [
  { id: '1', name: 'Secure Payment', logo: '/trust/secure.svg' },
  { id: '2', name: 'Free Shipping', logo: '/trust/shipping.svg' },
  { id: '3', name: 'Easy Returns', logo: '/trust/returns.svg' },
];

<BrandLogoGrid
  brands={trustLogos}
  linkable={false}
  backgroundColor="transparent"
  size="small"
  columns={{ mobile: 3, tablet: 3, desktop: 3 }}
/>
```

### Example 6: Grayscale with Color on Hover

```tsx
<BrandLogoGrid
  brands={brands}
  grayscale={true}
  imageMode="contain"
  backgroundColor="white"
/>
```

---

## Features & Capabilities

### Responsive Grid
- **Mobile:** 2 columns (default)
- **Tablet:** 3-4 columns
- **Desktop:** 4-6 columns
- **Wide:** 6-8 columns
- Fully configurable per viewport

### Image Handling
- Lazy loading for performance
- Alt text from brand names
- Fallback for missing images
- Support for SVG and raster images
- Object-fit options (contain/cover)

### Link Behavior
- Optional linking to brand pages
- Dynamic slug-based URLs
- No-follow for external brands (optional)
- Keyboard accessible links

### Visual States
- **Default:** Full color logos
- **Grayscale:** Desaturated with color on hover
- **Background:** Transparent, muted, or white
- **Hover:** Scale/lift effect (optional)

### Accessibility
- Semantic HTML structure
- Proper alt text for all logos
- Keyboard navigation for links
- Focus indicators
- Screen reader friendly

---

## WordPress FSE Mapping

### Block Equivalent
```html
<!-- wp:group {"className":"brand-logo-grid"} -->
<div class="wp-block-group brand-logo-grid">
  
  <!-- wp:heading -->
  <h2>Trusted Brands</h2>
  <!-- /wp:heading -->
  
  <!-- wp:columns {"columns":6} -->
  <div class="wp-block-columns">
    
    <!-- wp:column -->
    <div class="wp-block-column">
      <!-- wp:image -->
      <figure class="wp-block-image">
        <img src="brand-1.svg" alt="Brand A" />
      </figure>
      <!-- /wp:image -->
    </div>
    <!-- /wp:column -->
    
    <!-- Repeat for each brand -->
    
  </div>
  <!-- /wp:columns -->
  
</div>
<!-- /wp:group -->
```

### Pattern Registration
```php
register_block_pattern(
  'woo/brand-logo-grid',
  array(
    'title'       => __( 'Brand Logo Grid', 'woo' ),
    'description' => __( 'Display brand logos in a responsive grid', 'woo' ),
    'categories'  => array( 'featured', 'branding' ),
    'content'     => '<!-- Pattern content -->'
  )
);
```

---

## Used In

### Templates
- **FrontPage:** Homepage brand showcase
- **PageAbout:** Partner/certification logos
- **Footer:** Trust badges and payment logos

### Patterns
- **TrustBand:** Trust indicator section
- **FeaturesSection:** Feature/benefit icons
- **SocialProof:** Partner logos section

### Pages
- **/brands:** Brand directory landing
- **/about/partners:** Partner showcase
- **/company/awards:** Award/certification logos

---

## Styling & Design Tokens

### Spacing
```css
.brand-logo-grid {
  padding: var(--spacing-section); /* 3rem - 5rem fluid */
  gap: var(--spacing-lg); /* 2rem */
}

.brand-logo-item {
  padding: var(--spacing-md); /* 1rem */
}
```

### Grid Configuration
```css
.brand-logo-grid {
  display: grid;
  
  /* Mobile: 2 columns */
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  
  /* Tablet: 3-4 columns */
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
  
  /* Desktop: 4-6 columns */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

### Logo Styling
```css
.brand-logo-item img {
  width: 100%;
  height: auto;
  max-height: 80px;
  object-fit: contain;
  
  /* Grayscale variant */
  &.grayscale {
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
    
    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
}
```

### Dark Mode
```css
.dark .brand-logo-item {
  /* Invert logos for dark mode if needed */
  img.invert-dark {
    filter: invert(1);
  }
  
  /* Background for logo containers */
  &.with-background {
    background: var(--color-bg-muted-dark);
  }
}
```

---

## Responsive Behavior

### Mobile (< 640px)
- 2 columns grid
- Smaller logo size
- Reduced padding
- Touch-friendly tap targets

### Tablet (640px - 1024px)
- 3-4 columns grid
- Medium logo size
- Balanced spacing

### Desktop (1024px - 1280px)
- 4-6 columns grid
- Full logo size
- Optimal spacing

### Wide (> 1280px)
- 6-8 columns grid
- Maximum logo size
- Generous spacing

---

## Dark Mode Support

### Automatic Adaptation
- Logos with transparent backgrounds: No changes needed
- White logos: Invert filter applied
- Color logos: Maintain original colors
- Backgrounds: Use muted dark mode variants

### Manual Control
```tsx
<BrandLogoGrid
  brands={brands}
  // Logos will auto-adapt for dark mode
/>
```

### Custom Dark Mode Logic
```tsx
const adaptedBrands = brands.map(brand => ({
  ...brand,
  logo: isDark ? brand.logoDark : brand.logoLight
}));

<BrandLogoGrid brands={adaptedBrands} />
```

---

## Accessibility

### ARIA Labels
```tsx
<section aria-label="Trusted Brands">
  <h2>Trusted Brands</h2>
  <div role="list" className="brand-logo-grid">
    <div role="listitem">
      <img src="..." alt="Brand A" />
    </div>
  </div>
</section>
```

### Keyboard Navigation
- Links are focusable with Tab
- Focus indicators visible
- Skip links provided
- Logical tab order

### Screen Readers
- Descriptive alt text for all logos
- Optional aria-label for grid
- Proper heading hierarchy
- List semantics (role="list")

### Color Contrast
- WCAG 2.1 AA compliance
- Sufficient contrast for logos
- Focus indicators meet 3:1 ratio

---

## Testing

### Unit Tests
```typescript
describe('BrandLogoGrid', () => {
  it('renders all brand logos', () => {
    render(<BrandLogoGrid brands={mockBrands} />);
    expect(screen.getAllByRole('img')).toHaveLength(mockBrands.length);
  });

  it('applies correct grid columns', () => {
    const { container } = render(
      <BrandLogoGrid brands={mockBrands} columns={{ mobile: 3 }} />
    );
    const grid = container.querySelector('.brand-logo-grid');
    expect(grid).toHaveStyle({ gridTemplateColumns: 'repeat(3, 1fr)' });
  });

  it('links to brand pages when linkable', () => {
    render(<BrandLogoGrid brands={mockBrands} linkable={true} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockBrands.length);
  });

  it('applies grayscale filter when enabled', () => {
    const { container } = render(
      <BrandLogoGrid brands={mockBrands} grayscale={true} />
    );
    const images = container.querySelectorAll('img');
    images.forEach(img => {
      expect(img).toHaveClass('grayscale');
    });
  });
});
```

### Integration Tests
```typescript
it('renders in homepage context', () => {
  render(<HomePage />);
  expect(screen.getByText('Trusted Brands')).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(expectedBrandCount);
});
```

---

## Performance Considerations

### Image Optimization
- Use SVG for logos when possible (smaller file size)
- Lazy load images below the fold
- Provide width/height attributes
- Use next-gen formats (WebP) for raster images

### Rendering Performance
- Use React.memo for brand items
- Virtualize for very large brand lists (100+)
- Debounce hover effects
- CSS transforms for animations (GPU accelerated)

### Loading Strategy
```tsx
<img
  src={brand.logo}
  alt={brand.name}
  loading="lazy"
  width={120}
  height={60}
/>
```

---

## Common Patterns

### Homepage Trust Section
```tsx
<Section variant="muted">
  <Container>
    <BrandLogoGrid
      brands={topBrands}
      heading="Trusted by Leading Brands"
      description="Join thousands of satisfied customers"
      grayscale={true}
    />
  </Container>
</Section>
```

### Footer Trust Badges
```tsx
<Footer>
  <BrandLogoGrid
    brands={trustBadges}
    columns={{ mobile: 3, tablet: 3, desktop: 3 }}
    linkable={false}
    size="small"
  />
</Footer>
```

### Brand Directory
```tsx
<BrandLogoGrid
  brands={allBrands}
  heading="All Brands"
  linkable={true}
  columns={{ mobile: 2, tablet: 4, desktop: 6, wide: 8 }}
/>
```

---

## Related Components

### Patterns
- **TrustBand:** Social proof pattern using logo grid
- **FeaturesGrid:** Similar grid layout for features
- **ProductGrid:** Similar responsive grid structure

### Blocks
- **ProductCard:** Similar card-based grid item
- **TestimonialCard:** Similar content card pattern

### UI Components
- **Badge:** For brand tags/labels
- **Link:** For brand page navigation
- **Image:** Base image component with fallback

---

## Migration Notes (WordPress → React)

### From WordPress
```html
<!-- WordPress Block Pattern -->
[brand-grid brands="brand-a,brand-b,brand-c" columns="6"]
```

### To React
```tsx
<BrandLogoGrid
  brands={[
    { id: '1', name: 'Brand A', logo: '/brands/a.svg' },
    { id: '2', name: 'Brand B', logo: '/brands/b.svg' },
    { id: '3', name: 'Brand C', logo: '/brands/c.svg' },
  ]}
  columns={{ desktop: 6 }}
/>
```

### Key Differences
- Props-based configuration vs shortcode attributes
- TypeScript types for brand objects
- Dynamic column configuration
- Client-side rendering with lazy loading

---

## Best Practices

### Do's ✅
- ✅ Use SVG format for logos when possible
- ✅ Provide descriptive alt text
- ✅ Use grayscale for non-primary brand displays
- ✅ Link to brand pages for better navigation
- ✅ Use consistent logo sizes across grid
- ✅ Optimize images before upload
- ✅ Test in dark mode

### Don'ts ❌
- ❌ Don't mix SVG and raster images
- ❌ Don't use overly large image files
- ❌ Don't forget alt text
- ❌ Don't use too many columns on mobile
- ❌ Don't link to external sites without rel="nofollow"
- ❌ Don't ignore aspect ratios

---

## FAQ

### Q: How many brands should I display?
**A:** Aim for 6-12 brands for optimal visual impact. Too few looks sparse, too many overwhelms.

### Q: Should logos be grayscale or color?
**A:** Use grayscale for secondary displays (footer, about page) and color for primary brand showcases (homepage).

### Q: What's the recommended logo size?
**A:** SVG: No size limit. Raster: 240x120px @ 2x (480x240px actual).

### Q: How do I handle brands without logos?
**A:** Filter them out or display brand name as text with consistent styling.

### Q: Can I add descriptions to each brand?
**A:** Yes, but consider using a different pattern (like BrandShowcaseGrid with cards) for better UX.

### Q: How do I make logos accessible?
**A:** Use proper alt text, maintain sufficient contrast, ensure keyboard navigation works, and provide focus indicators.

### Q: Should I lazy load brand logos?
**A:** Yes, if they're below the fold. Above-the-fold logos should load immediately.

---

## Version History

### Version 1.0 (December 2024)
- Initial implementation
- Responsive grid system
- Grayscale variant
- Link support
- Dark mode support
- Accessibility improvements

---

## See Also

- [ProductGrid Pattern](/guidelines/components/ProductGrid.md)
- [TrustBand Pattern](/guidelines/patterns/TrustBand.md)
- [FeaturesGrid Pattern](/guidelines/patterns/FeaturesComparisonTable.md)
- [Design Tokens: Spacing](/guidelines/design-tokens/spacing.md)
- [Responsive Guidelines](/guidelines/mobile/images.md)
