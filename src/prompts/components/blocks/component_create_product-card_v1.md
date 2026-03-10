# Create ProductCard Block Component

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Component  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Block Component |
| **Target** | ProductCard.tsx |
| **Complexity** | Medium |
| **Estimated Time** | 45 minutes |
| **Prerequisites** | Guidelines.md, blocks/ProductCard.md guideline |
| **Output Files** | ProductCard.tsx, ProductCard.test.tsx |

---

## 🎯 Objective

Create a reusable ProductCard block component that displays product information in grid layouts with full WordPress alignment, dark mode support, and WCAG AA accessibility compliance.

### What This Prompt Does:
- ✅ Creates ProductCard component with TypeScript
- ✅ Implements WordPress WooCommerce block class naming
- ✅ Adds complete dark mode support
- ✅ Ensures WCAG AA compliance (4.5:1 contrast)
- ✅ Generates corresponding Jest test file
- ✅ Includes hover states and animations

### What This Prompt Does NOT Do:
- ❌ Create product detail page
- ❌ Implement shopping cart logic
- ❌ Handle product state management
- ❌ Include add to cart functionality

---

## 📚 Context & Background

### Project Architecture:
- **Location:** `/src/app/components/blocks/ProductCard.tsx`
- **Type:** WordPress WooCommerce Block (product card)
- **Usage:** Product grids, archives, related products, featured sections
- **Block Mapping:** Maps to WooCommerce `woocommerce/product-card` block

### Related Guidelines:
- `/guidelines/Guidelines.md` - Main project guidelines
- `/guidelines/blocks/ProductCard.md` - Component-specific guideline
- `/guidelines/overview-blocks.md` - Block architecture overview
- `/guidelines/design-tokens/colors.md` - Color system

### Related Components:
- `PriceDisplay` - For formatted price rendering
- `Badge` - For sale/featured badges
- `Button` - For add to cart actions
- `Star` (lucide-react) - For rating display

---

## 📋 Requirements

### Functional Requirements:
1. Display product image with lazy loading
2. Display product title as semantic h3 heading
3. Display formatted price with sale price support
4. Show "Sale" badge when product is on sale
5. Display 5-star rating system
6. Link entire card to product detail page
7. Support hover state with scale animation
8. Display product category

### Technical Requirements:
1. TypeScript with complete interface definitions
2. WordPress class naming: `.woocommerce-product-card`
3. Import from `@/components/blocks/ProductCard`
4. Use React Router `Link` for navigation
5. Lazy load images with `loading="lazy"`
6. Use WordPress CSS variables for all styling
7. Props validation with PropTypes or TypeScript

### Accessibility Requirements:
1. **WCAG AA color contrast** (4.5:1 minimum for text)
2. **Alt text** for all product images
3. **Semantic HTML** - h3 for title, proper structure
4. **Focus states** on interactive elements (2px purple ring)
5. **ARIA labels** where appropriate
6. **Keyboard accessible** - full keyboard navigation

### Dark Mode Requirements:
1. Background: `dark:bg-[#1a1a1a]`
2. Text: `dark:text-gray-50`
3. Borders: `dark:border-gray-700`
4. All hover states work in dark mode
5. Sale badge visible in dark mode
6. Rating stars visible in dark mode

---

## 🔧 Implementation Instructions

### Step 1: Create Component File

**Action:** Create `/src/app/components/blocks/ProductCard.tsx`

**Details:**
- Create new file in blocks directory
- Import necessary dependencies
- Define TypeScript interface
- Implement component with all features

**Code Example:**
```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from '@phosphor-icons/react';

/**
 * ProductCard Component
 * 
 * WordPress WooCommerce Product Card Block
 * Displays product preview in grid layouts
 * 
 * @example
 * <ProductCard product={productData} />
 */
interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    title: string;
    image: string;
    price: number;
    salePrice?: number;
    rating: number;
    reviewCount: number;
    category: string;
    onSale: boolean;
    featured?: boolean;
  };
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className = '' 
}) => {
  return (
    <Link 
      to={`/product/${product.slug}`}
      className={`woocommerce-product-card ${className}`}
      aria-label={`View ${product.title}`}
    >
      {/* Image Container */}
      <div className="woocommerce-product-card__image-wrapper">
        <img 
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="woocommerce-product-card__image"
        />
        
        {/* Sale Badge */}
        {product.onSale && (
          <span 
            className="woocommerce-product-card__badge woocommerce-product-card__badge--sale"
            aria-label="On sale"
          >
            Sale
          </span>
        )}
        
        {/* Featured Badge */}
        {product.featured && (
          <span 
            className="woocommerce-product-card__badge woocommerce-product-card__badge--featured"
            aria-label="Featured product"
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="woocommerce-product-card__content">
        {/* Category */}
        <span className="woocommerce-product-card__category">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="woocommerce-product-card__title">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="woocommerce-product-card__rating" aria-label={`Rated ${product.rating} out of 5`}>
          <div className="woocommerce-product-card__stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < product.rating 
                    ? 'woocommerce-product-card__star woocommerce-product-card__star--filled' 
                    : 'woocommerce-product-card__star woocommerce-product-card__star--empty'
                }
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="woocommerce-product-card__review-count">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="woocommerce-product-card__price">
          {product.salePrice ? (
            <>
              <span className="woocommerce-product-card__price--sale">
                ${product.salePrice.toFixed(2)}
              </span>
              <span className="woocommerce-product-card__price--original">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="woocommerce-product-card__price--regular">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
```

**Success Criteria:**
- ✅ File created at `/src/app/components/blocks/ProductCard.tsx`
- ✅ TypeScript interface completely defined
- ✅ All required props included
- ✅ WordPress class names used throughout
- ✅ Component exported correctly

---

### Step 2: Add CSS Styles

**Action:** Add styles to `/src/styles/globals.css`

**Details:**
- Add all component styles to global stylesheet
- Use WordPress CSS variables
- Include dark mode variants
- Define hover states and animations

**Code:**
```css
/* ============================================
   PRODUCT CARD BLOCK
   ============================================ */

.woocommerce-product-card {
  display: block;
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--lg);
  overflow: hidden;
  transition: all var(--wp--preset--transition--base) ease;
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.woocommerce-product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--wp--preset--shadow--lg);
  border-color: var(--wp--preset--color--primary);
}

.woocommerce-product-card:focus-visible {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
}

/* Image Container */
.woocommerce-product-card__image-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--wp--preset--color--background);
}

.woocommerce-product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--wp--preset--transition--base) ease;
}

.woocommerce-product-card:hover .woocommerce-product-card__image {
  transform: scale(1.05);
}

/* Badges */
.woocommerce-product-card__badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 12px;
  border-radius: var(--wp--preset--border-radius--sm);
  font-size: var(--wp--preset--font-size--xs);
  font-weight: var(--wp--preset--font-weight--semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.woocommerce-product-card__badge--sale {
  background: var(--wp--preset--color--error);
  color: white;
}

.woocommerce-product-card__badge--featured {
  background: var(--wp--preset--color--primary);
  color: white;
  top: 12px;
  left: 12px;
  right: auto;
}

/* Content */
.woocommerce-product-card__content {
  padding: var(--wp--preset--spacing--md);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--xs);
}

.woocommerce-product-card__category {
  font-size: var(--wp--preset--font-size--xs);
  color: var(--wp--preset--color--foreground-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: var(--wp--preset--font-weight--medium);
}

.woocommerce-product-card__title {
  font-size: var(--wp--preset--font-size--base);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Rating */
.woocommerce-product-card__rating {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--xs);
  margin-top: auto;
}

.woocommerce-product-card__stars {
  display: flex;
  gap: 2px;
}

.woocommerce-product-card__star--filled {
  fill: var(--wp--preset--color--foreground);
  color: var(--wp--preset--color--foreground);
}

.woocommerce-product-card__star--empty {
  fill: none;
  color: var(--wp--preset--color--border-strong);
}

.woocommerce-product-card__review-count {
  font-size: var(--wp--preset--font-size--xs);
  color: var(--wp--preset--color--foreground-tertiary);
}

/* Price */
.woocommerce-product-card__price {
  display: flex;
  align-items: baseline;
  gap: var(--wp--preset--spacing--xs);
  font-weight: var(--wp--preset--font-weight--semibold);
  margin-top: var(--wp--preset--spacing--xs);
}

.woocommerce-product-card__price--regular,
.woocommerce-product-card__price--sale {
  font-size: var(--wp--preset--font-size--lg);
  color: var(--wp--preset--color--foreground);
}

.woocommerce-product-card__price--sale {
  color: var(--wp--preset--color--error);
}

.woocommerce-product-card__price--original {
  font-size: var(--wp--preset--font-size--sm);
  font-weight: var(--wp--preset--font-weight--normal);
  color: var(--wp--preset--color--foreground-tertiary);
  text-decoration: line-through;
}

/* Dark Mode */
[data-theme="dark"] .woocommerce-product-card {
  background: var(--wp--preset--color--surface);
  border-color: var(--wp--preset--color--border);
}

[data-theme="dark"] .woocommerce-product-card:hover {
  border-color: var(--wp--preset--color--primary);
}

/* Responsive */
@media (min-width: 1024px) {
  .woocommerce-product-card__content {
    padding: var(--wp--preset--spacing--lg);
  }
  
  .woocommerce-product-card__title {
    font-size: var(--wp--preset--font-size--lg);
  }
}
```

**Success Criteria:**
- ✅ CSS added to `/src/styles/globals.css`
- ✅ WordPress CSS variables used
- ✅ Dark mode handled via `[data-theme="dark"]`
- ✅ Hover states defined
- ✅ Responsive styles included

---

### Step 3: Create Test File

**Action:** Create `/src/app/components/blocks/ProductCard.test.tsx`

**Details:**
- Create comprehensive test file
- Test all rendering scenarios
- Test accessibility features
- Test interactions

**Code:**
```tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from './ProductCard';

const mockProduct = {
  id: '1',
  slug: 'test-product',
  title: 'Test Product',
  image: '/test.jpg',
  price: 99.99,
  rating: 4,
  reviewCount: 25,
  category: 'Electronics',
  onSale: false,
};

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    renderWithRouter(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('(25)')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

  it('displays sale badge and sale price when on sale', () => {
    const saleProduct = { ...mockProduct, onSale: true, salePrice: 79.99 };
    
    renderWithRouter(<ProductCard product={saleProduct} />);

    expect(screen.getByText('Sale')).toBeInTheDocument();
    expect(screen.getByText('$79.99')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toHaveClass('woocommerce-product-card__price--original');
  });

  it('displays featured badge when featured', () => {
    const featuredProduct = { ...mockProduct, featured: true };
    
    renderWithRouter(<ProductCard product={featuredProduct} />);

    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('links to correct product detail page', () => {
    renderWithRouter(<ProductCard product={mockProduct} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/test-product');
  });

  it('has proper accessibility attributes', () => {
    renderWithRouter(<ProductCard product={mockProduct} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', 'View Test Product');
    
    const rating = screen.getByLabelText(/Rated 4 out of 5/);
    expect(rating).toBeInTheDocument();
  });

  it('renders correct number of filled and empty stars', () => {
    renderWithRouter(<ProductCard product={mockProduct} />);

    const stars = screen.getAllByRole('img', { hidden: true });
    expect(stars).toHaveLength(5);
    
    // 4 filled, 1 empty
    const filledStars = stars.filter(star => 
      star.classList.contains('woocommerce-product-card__star--filled')
    );
    expect(filledStars).toHaveLength(4);
  });

  it('applies custom className when provided', () => {
    const { container } = renderWithRouter(
      <ProductCard product={mockProduct} className="custom-class" />
    );

    const card = container.querySelector('.woocommerce-product-card');
    expect(card).toHaveClass('custom-class');
  });

  it('image has lazy loading attribute', () => {
    renderWithRouter(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText('Test Product');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});
```

**Success Criteria:**
- ✅ Test file created at `/src/app/components/blocks/ProductCard.test.tsx`
- ✅ All render tests pass
- ✅ Sale badge test passes
- ✅ Featured badge test passes
- ✅ Link navigation test passes
- ✅ Accessibility tests pass
- ✅ Rating stars test passes

---

### Step 4: Export Component

**Action:** Add export to blocks index file (if it exists)

**Details:**
- Check if `/src/app/components/blocks/index.ts` exists
- If yes, add export
- If no, component can be imported directly

**Code:**
```tsx
// In /src/app/components/blocks/index.ts (if it exists)
export { ProductCard } from './ProductCard';
```

**Success Criteria:**
- ✅ Component can be imported via `@/components/blocks/ProductCard`
- ✅ No TypeScript errors

---

## ✅ Verification Checklist

Before considering the component complete, verify:

### Code Quality:
- [ ] TypeScript interfaces completely defined
- [ ] No ESLint errors or warnings
- [ ] WordPress class naming used throughout
- [ ] Component properly exported
- [ ] All imports resolve correctly
- [ ] Code follows project conventions

### Functionality:
- [ ] Product displays correctly in grid
- [ ] Link navigates to detail page
- [ ] Sale badge shows when `onSale` is true
- [ ] Featured badge shows when `featured` is true
- [ ] Rating displays correct number of stars
- [ ] Price formatting is correct
- [ ] Image loads with lazy loading

### Accessibility:
- [ ] Image has descriptive alt text
- [ ] Link has aria-label
- [ ] Focus states are visible (purple ring)
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Semantic HTML structure (h3 for title)
- [ ] Keyboard navigation works
- [ ] Rating has proper ARIA label

### Dark Mode:
- [ ] Background adapts to dark mode
- [ ] Text is readable in dark mode
- [ ] Borders are visible in dark mode
- [ ] Hover states work in dark mode
- [ ] Sale badge visible in dark mode
- [ ] Rating stars visible in dark mode

### Testing:
- [ ] All Jest tests pass
- [ ] Test coverage ≥ 80%
- [ ] Edge cases tested (no sale price, 0 rating, etc.)
- [ ] Accessibility tests pass

### Responsive Design:
- [ ] Card looks good on mobile (< 768px)
- [ ] Card looks good on tablet (768px - 1023px)
- [ ] Card looks good on desktop (≥ 1024px)
- [ ] Image aspect ratio maintained
- [ ] No content overflow

---

## 🧪 Testing Instructions

### Manual Testing:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to product grid:**
   - Go to `/shop` or homepage
   - Verify product cards display

3. **Test interactions:**
   - Hover over card (should lift and show shadow)
   - Click card (should navigate to product page)
   - Tab to card (should show focus ring)

4. **Toggle dark mode:**
   - Click theme switcher
   - Verify card looks good in dark mode
   - Check hover states in dark mode

5. **Test responsive:**
   - Resize to mobile (375px)
   - Resize to tablet (768px)
   - Resize to desktop (1440px)
   - Verify layout adapts

### Automated Testing:
```bash
# Run component tests
npm test ProductCard.test.tsx

# Run with coverage
npm test -- --coverage ProductCard.test.tsx

# Expected: All tests pass, coverage ≥ 80%
```

### Accessibility Testing:
```bash
# Run Lighthouse audit
npm run lighthouse

# Check accessibility score (should be 100)
```

---

## 📖 Related Documentation

- `/guidelines/Guidelines.md` - Main project guidelines (Section 7: Component Architecture)
- `/guidelines/blocks/ProductCard.md` - Complete ProductCard guideline
- `/guidelines/overview-blocks.md` - Block component architecture
- `/guidelines/design-tokens/colors.md` - Color system and contrast standards
- `/guidelines/design-tokens/typography.md` - Typography system
- `/guidelines/design-tokens/spacing.md` - Spacing scale

---

## 🔄 Version History

### v1.0 (2026-01-10)
- Initial version
- Complete TypeScript implementation
- Full dark mode support
- WCAG AA compliance
- Jest tests included
- Hover animations
- Lazy loading images
- WordPress block alignment

---

## 📝 Notes & Tips

### Common Issues:

⚠️ **Issue:** Images not loading
**Solution:** Verify image path is correct, check if using placeholder images

⚠️ **Issue:** Link not navigating
**Solution:** Ensure React Router is set up, check slug format

⚠️ **Issue:** Stars not displaying
**Solution:** Install lucide-react: `npm install lucide-react`

⚠️ **Issue:** Dark mode not working
**Solution:** Verify `[data-theme="dark"]` attribute on html element

### Best Practices:

💡 **Tip 1:** Always use semantic HTML (h3 for titles, not div)

💡 **Tip 2:** Test with real product data early to catch layout issues

💡 **Tip 3:** Use placeholder images during development (unsplash.com)

💡 **Tip 4:** Verify contrast ratios with WebAIM Contrast Checker

💡 **Tip 5:** Test keyboard navigation thoroughly (tab, enter, escape)

---

**Created By:** Development Team  
**Reviewed By:** Architecture Team  
**Status:** ✅ Active  
**Production Ready:** Yes