# ProductAddToCart Block

**Component:** `ProductAddToCart`  
**Path:** `/src/app/components/blocks/single-product/ProductAddToCart.tsx`  
**Category:** Single Product Blocks  
**Used In:** Single Product templates (SingleProduct, VariableProduct)

---

## Overview

The ProductAddToCart block is the primary conversion point on product pages, combining quantity selection, variation/option selection, subscription toggle, add-to-cart functionality, and trust badges into a cohesive, conversion-optimized component.

**Core Features:**
- Quantity selector with +/- buttons
- Variation/option selector (for variable products)
- Subscription toggle (when available)
- Primary "Add to Cart" button
- Loading and out-of-stock states
- Trust badges (shipping, returns, security)
- Retro design with neon accents and glass effects

---

## Component Structure

```tsx
ProductAddToCart
├── Variation selector (conditional - variable products only)
│   ├── Variation label
│   └── Variation option buttons
├── Subscription toggle (conditional - subscription available)
│   ├── Checkbox/switch
│   └── "Subscribe & Save 10%" label
├── Quantity + Button controls
│   ├── Quantity selector (-, input, +)
│   └── Add to Cart button
└── Trust badges row
    ├── Free shipping badge
    ├── Easy returns badge
    └── Secure checkout badge
```

---

## Props Interface

```tsx
interface ProductAddToCartProps {
  // Stock status
  inStock: boolean;
  
  // Add to cart handler
  onAddToCart: (
    quantity: number, 
    isSubscription: boolean, 
    variationId?: string
  ) => void;
  
  // Loading state
  isLoading?: boolean;
  
  // Subscription
  isSubscriptionAvailable?: boolean;
  
  // Variations (for variable products)
  variations?: Variation[];
  selectedVariation?: Variation;
  onVariationChange?: (variation: Variation) => void;
  variationLabel?: string;
}

interface Variation {
  id: string;
  name: string;
  price: number;
}
```

---

## Usage Examples

### Basic Product (Simple)

```tsx
<ProductAddToCart
  inStock={true}
  onAddToCart={(qty, isSub) => {
    console.log(`Adding ${qty} to cart, subscription: ${isSub}`);
  }}
/>
```

---

### Variable Product (with Variations)

```tsx
const [selectedVariation, setSelectedVariation] = useState(variations[0]);

<ProductAddToCart
  inStock={product.stock > 0}
  onAddToCart={(qty, isSub, varId) => {
    addToCart(product.id, qty, varId, isSub);
  }}
  variations={[
    { id: 'v1', name: 'Small', price: 29.99 },
    { id: 'v2', name: 'Medium', price: 34.99 },
    { id: 'v3', name: 'Large', price: 39.99 }
  ]}
  selectedVariation={selectedVariation}
  onVariationChange={setSelectedVariation}
  variationLabel="Size"
/>
```

---

### Subscription Product

```tsx
<ProductAddToCart
  inStock={true}
  isSubscriptionAvailable={true}
  onAddToCart={(qty, isSub) => {
    if (isSub) {
      createSubscription(product.id, qty);
    } else {
      addToCart(product.id, qty);
    }
  }}
/>
```

---

### Out of Stock

```tsx
<ProductAddToCart
  inStock={false}
  onAddToCart={() => {}}
/>
```

**Renders:** Disabled button with "Out of Stock" text, disabled quantity controls.

---

### Loading State

```tsx
<ProductAddToCart
  inStock={true}
  isLoading={true}
  onAddToCart={() => {}}
/>
```

**Renders:** Disabled button with "Processing..." text, active quantity controls.

---

## Retro Design Specifications

### Container

**CSS Classes:**
- `.wc-product-add-to-cart` - Main container
- `.funky-card-glow` - Glass card with neon glow border

**Styling:**
```css
.wc-product-add-to-cart {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(12px);
}

.dark .wc-product-add-to-cart {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
}

.funky-card-glow {
  box-shadow: 
    0 0 20px rgba(0, 212, 255, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.1);
}
```

---

### Variation Selector

**CSS Classes:**
- `.wc-product-add-to-cart__variations`
- `.wc-product-add-to-cart__variation-label`
- `.wc-product-add-to-cart__variation-options`
- `.wc-product-add-to-cart__variation-button`
- `.wc-product-add-to-cart__variation-button--selected`

**Retro Styling:**
```css
.wc-product-add-to-cart__variation-button {
  background: rgba(255, 255, 255, 0.05);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  color: var(--retro-text-primary);
  padding: 12px 20px;
  font-family: 'VT323', monospace;
  font-size: 18px;
  transition: all 0.3s ease;
}

.wc-product-add-to-cart__variation-button:hover {
  border-color: var(--retro-neon-cyan);
  box-shadow: 0 0 12px var(--retro-neon-cyan);
}

.wc-product-add-to-cart__variation-button--selected {
  background: linear-gradient(135deg, 
    var(--retro-neon-cyan) 0%, 
    var(--retro-neon-pink) 100%
  );
  border: 2px solid var(--retro-neon-cyan);
  color: #000;
  box-shadow: 
    0 0 20px var(--retro-neon-cyan),
    inset 0 0 10px rgba(255, 255, 255, 0.3);
}
```

**Behavior:**
- Hover: Neon cyan glow
- Selected: Gradient background (cyan → pink), strong glow
- Focus: Keyboard navigation with visible ring

---

### Subscription Toggle

**CSS Classes:**
- `.wc-product-add-to-cart__subscription`
- `.wc-product-add-to-cart__subscription-toggle`
- `.wc-product-add-to-cart__subscription-checkbox` (hidden)
- `.wc-product-add-to-cart__subscription-switch`
- `.wc-product-add-to-cart__subscription-switch--checked`
- `.wc-product-add-to-cart__subscription-label`

**Retro Styling:**
```css
.wc-product-add-to-cart__subscription-switch {
  width: 48px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
}

.wc-product-add-to-cart__subscription-switch::before {
  content: '';
  width: 16px;
  height: 16px;
  background: var(--retro-text-muted);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wc-product-add-to-cart__subscription-switch--checked {
  background: var(--retro-neon-green);
  border-color: var(--retro-neon-green);
  box-shadow: 0 0 16px var(--retro-neon-green);
}

.wc-product-add-to-cart__subscription-switch--checked::before {
  left: 26px;
  background: #000;
}
```

**Behavior:**
- Unchecked: Gray dot, subtle border
- Checked: Neon green background with glow, black dot slides right
- Animation: Spring easing on toggle

---

### Quantity Selector

**CSS Classes:**
- `.wc-product-add-to-cart__quantity`
- `.wc-product-add-to-cart__quantity-button`
- `.wc-product-add-to-cart__quantity-button--decrement`
- `.wc-product-add-to-cart__quantity-button--increment`
- `.wc-product-add-to-cart__quantity-input`

**Retro Styling:**
```css
.wc-product-add-to-cart__quantity-button {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px dashed var(--retro-neon-cyan);
  color: var(--retro-neon-cyan);
  font-family: 'Press Start 2P', monospace;
  font-size: 20px;
  transition: all 0.2s ease;
}

.wc-product-add-to-cart__quantity-button:hover:not(:disabled) {
  background: var(--retro-neon-cyan);
  color: #000;
  box-shadow: 0 0 16px var(--retro-neon-cyan);
  transform: scale(1.1);
}

.wc-product-add-to-cart__quantity-input {
  width: 60px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: var(--retro-text-primary);
  font-family: 'VT323', monospace;
  font-size: 24px;
  text-align: center;
}
```

**Behavior:**
- Hover: Buttons glow and scale up
- Active: Brief scale-down on click
- Disabled: Reduced opacity, no hover effects

---

### Add to Cart Button

**CSS Classes:**
- `.wc-product-add-to-cart__button`
- `.wc-product-add-to-cart__button-content`
- `.funky-spring-hover`

**Retro Styling:**
```css
.wc-product-add-to-cart__button {
  background: linear-gradient(135deg, 
    var(--retro-neon-green) 0%, 
    var(--retro-neon-cyan) 100%
  );
  border: 3px dashed var(--retro-neon-green);
  color: #000;
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  padding: 16px 32px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
}

.wc-product-add-to-cart__button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.5s ease, height 0.5s ease;
}

.wc-product-add-to-cart__button:hover::before {
  width: 300%;
  height: 300%;
}

.funky-spring-hover:active {
  transform: scale(0.95);
  transition: transform 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**Success Animation (on add to cart):**
```css
@keyframes neon-pulse {
  0%, 100% {
    box-shadow: 
      0 0 20px var(--retro-neon-green),
      0 0 40px var(--retro-neon-cyan);
  }
  50% {
    box-shadow: 
      0 0 40px var(--retro-neon-green),
      0 0 80px var(--retro-neon-cyan);
  }
}

.wc-product-add-to-cart__button--success {
  animation: neon-pulse 0.6s ease-out;
}
```

**States:**
- Default: Gradient background (green → cyan), dashed border
- Hover: Expanding white circle overlay
- Active: Spring scale down
- Success: Brief neon pulse animation
- Disabled (out of stock): Gray, no glow, text: "Out of Stock"
- Loading: Text: "Processing...", disabled state

---

### Trust Badges

**CSS Classes:**
- `.wc-product-add-to-cart__trust-badges`
- `.wc-product-add-to-cart__trust-badge`
- `.wc-product-add-to-cart__trust-icon`

**Retro Styling:**
```css
.wc-product-add-to-cart__trust-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--retro-text-muted);
  font-family: 'VT323', monospace;
  font-size: 16px;
}

.wc-product-add-to-cart__trust-icon {
  color: var(--retro-neon-cyan);
  filter: drop-shadow(0 0 4px var(--retro-neon-cyan));
}
```

**Badges:**
1. **Free shipping over R500** - Truck icon, cyan glow
2. **Easy returns** - Refresh icon, cyan glow
3. **Secure checkout** - Lock icon, cyan glow

---

## Accessibility

### Keyboard Navigation

**Tab Order:**
1. Variation buttons (if present)
2. Subscription toggle (if present)
3. Quantity decrease button
4. Quantity input (read-only, skipped)
5. Quantity increase button
6. Add to Cart button

**Keyboard Shortcuts:**
- `Tab` - Navigate through interactive elements
- `Enter` / `Space` - Activate button
- Arrow keys - Navigate variation options (optional enhancement)

---

### ARIA Attributes

```tsx
// Quantity controls
<button
  aria-label="Decrease quantity"
  disabled={!inStock}
>
  -
</button>

<input
  type="number"
  aria-label="Quantity"
  readOnly
/>

<button
  aria-label="Increase quantity"
  disabled={!inStock}
>
  +
</button>

// Add to cart button
<Button
  aria-disabled={isLoading || !inStock}
  aria-busy={isLoading}
>
  {/* ... */}
</Button>

// Subscription toggle
<input
  type="checkbox"
  aria-label="Subscribe and save 10%"
  checked={isSubscription}
/>
```

---

### Screen Reader Announcements

**On successful add to cart:**
```tsx
// Use live region
<div role="status" aria-live="polite" aria-atomic="true">
  {successMessage && `${quantity} items added to cart`}
</div>
```

**Stock status:**
```tsx
{!inStock && (
  <div role="alert" aria-live="assertive">
    This product is currently out of stock
  </div>
)}
```

---

## State Management

### Internal State

```tsx
const [quantity, setQuantity] = useState(1);
const [isSubscription, setIsSubscription] = useState(false);
```

**Quantity Management:**
- Minimum: 1
- Maximum: Unlimited (could add stock limit validation)
- Increment/decrement by 1

**Subscription State:**
- Boolean toggle
- Defaults to false
- Passed to onAddToCart handler

---

### External State (Props)

**Required:**
- `inStock` - Controls button disabled state and text
- `onAddToCart` - Handler receives quantity, subscription flag, variation ID

**Optional:**
- `isLoading` - Shows loading state
- `isSubscriptionAvailable` - Shows/hides subscription toggle
- `variations` - Shows variation selector
- `selectedVariation` - Controlled variation state
- `onVariationChange` - Variation selection handler

---

## Integration Examples

### With Cart Context

```tsx
import { useCart } from '@/contexts/CartContext';

function SingleProduct() {
  const { addItem, isAdding } = useCart();
  
  return (
    <ProductAddToCart
      inStock={product.stock > 0}
      isLoading={isAdding}
      onAddToCart={(qty, isSub, varId) => {
        addItem({
          productId: product.id,
          quantity: qty,
          variationId: varId,
          isSubscription: isSub
        });
      }}
    />
  );
}
```

---

### With Success Toast

```tsx
import { toast } from 'sonner@2.0.3';

<ProductAddToCart
  inStock={product.stock > 0}
  onAddToCart={(qty, isSub, varId) => {
    addToCart(product.id, qty, varId, isSub);
    
    toast.success(`Added ${qty} ${qty > 1 ? 'items' : 'item'} to cart`, {
      description: isSub ? 'Subscription created' : undefined
    });
  }}
/>
```

---

### With Analytics

```tsx
<ProductAddToCart
  inStock={product.stock > 0}
  onAddToCart={(qty, isSub, varId) => {
    // Track event
    analytics.track('add_to_cart', {
      product_id: product.id,
      quantity: qty,
      is_subscription: isSub,
      variation_id: varId,
      value: product.price * qty
    });
    
    // Add to cart
    addToCart(product.id, qty, varId, isSub);
  }}
/>
```

---

## Testing

### Unit Tests

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductAddToCart } from './ProductAddToCart';

describe('ProductAddToCart', () => {
  test('renders quantity controls', () => {
    render(<ProductAddToCart inStock={true} onAddToCart={() => {}} />);
    
    expect(screen.getByLabelText('Decrease quantity')).toBeInTheDocument();
    expect(screen.getByLabelText('Increase quantity')).toBeInTheDocument();
    expect(screen.getByLabelText('Quantity')).toHaveValue(1);
  });
  
  test('increments quantity', () => {
    render(<ProductAddToCart inStock={true} onAddToCart={() => {}} />);
    
    const incrementBtn = screen.getByLabelText('Increase quantity');
    fireEvent.click(incrementBtn);
    
    expect(screen.getByLabelText('Quantity')).toHaveValue(2);
  });
  
  test('calls onAddToCart with correct params', () => {
    const mockAddToCart = jest.fn();
    render(<ProductAddToCart inStock={true} onAddToCart={mockAddToCart} />);
    
    const incrementBtn = screen.getByLabelText('Increase quantity');
    fireEvent.click(incrementBtn);
    
    const addBtn = screen.getByText(/add to cart/i);
    fireEvent.click(addBtn);
    
    expect(mockAddToCart).toHaveBeenCalledWith(2, false, undefined);
  });
  
  test('shows out of stock state', () => {
    render(<ProductAddToCart inStock={false} onAddToCart={() => {}} />);
    
    const button = screen.getByRole('button', { name: /out of stock/i });
    expect(button).toBeDisabled();
  });
  
  test('shows loading state', () => {
    render(<ProductAddToCart inStock={true} isLoading={true} onAddToCart={() => {}} />);
    
    expect(screen.getByText(/processing/i)).toBeInTheDocument();
  });
});
```

---

### Visual Regression Tests

**States to test:**
1. Default (in stock, no variations)
2. With variations (3 options)
3. With subscription toggle
4. Out of stock
5. Loading
6. Hover states (buttons, variations)
7. Selected variation
8. Subscription enabled
9. Dark mode variants

---

## Performance

### Optimization Strategies

**1. Memoize Expensive Computations:**
```tsx
const cartButtonContent = useMemo(() => {
  if (isLoading) return <span>Processing...</span>;
  if (!inStock) return 'Out of Stock';
  return (
    <span>
      <ShoppingCart size={20} />
      <strong>{isSubscription ? 'Subscribe Now' : 'Add to Cart'}</strong>
    </span>
  );
}, [isLoading, inStock, isSubscription]);
```

**2. Debounce Quantity Changes (if connected to API):**
```tsx
import { useDebounce } from '@/hooks/useDebounce';

const debouncedQuantity = useDebounce(quantity, 500);

useEffect(() => {
  // Update cart preview or check stock
  updatePreview(debouncedQuantity);
}, [debouncedQuantity]);
```

**3. Lazy Load Trust Badges:**
```tsx
const TrustBadges = lazy(() => import('./TrustBadges'));

// In component
<Suspense fallback={null}>
  <TrustBadges />
</Suspense>
```

---

## Common Patterns

### Pattern 1: Simple Product

```tsx
<ProductAddToCart
  inStock={product.stock > 0}
  onAddToCart={(qty) => addToCart(product.id, qty)}
/>
```

---

### Pattern 2: Variable Product (Size/Color)

```tsx
const [size, setSize] = useState(sizes[0]);

<ProductAddToCart
  inStock={product.stock > 0}
  variations={sizes}
  selectedVariation={size}
  onVariationChange={setSize}
  variationLabel="Size"
  onAddToCart={(qty, _, varId) => {
    addToCart(product.id, qty, varId);
  }}
/>
```

---

### Pattern 3: Subscription Product

```tsx
<ProductAddToCart
  inStock={product.stock > 0}
  isSubscriptionAvailable={true}
  onAddToCart={(qty, isSub) => {
    if (isSub) {
      createSubscription(product.id, qty);
    } else {
      addToCart(product.id, qty);
    }
  }}
/>
```

---

### Pattern 4: With Stock Validation

```tsx
<ProductAddToCart
  inStock={product.stock > 0}
  onAddToCart={(qty) => {
    if (qty > product.stock) {
      toast.error(`Only ${product.stock} items in stock`);
      return;
    }
    addToCart(product.id, qty);
  }}
/>
```

---

## Related Components

- **QuantitySelector** (`/src/app/components/blocks/forms/QuantitySelector.tsx`) - Standalone quantity input
- **Button** (`/src/app/components/blocks/design/Buttons.tsx`) - Button component used for primary CTA
- **VariantSelector** (`/src/app/components/blocks/product/VariantSelector.tsx`) - Advanced variant selection (colors, sizes)

---

## Design Tokens

### Retro Theme Variables

```css
:root {
  /* Neon colors */
  --retro-neon-green: #00ff41;
  --retro-neon-cyan: #00d4ff;
  --retro-neon-pink: #ff10f0;
  
  /* Typography */
  --retro-font-display: 'Press Start 2P', monospace;
  --retro-font-body: 'VT323', monospace;
  
  /* Effects */
  --retro-glow-sm: 0 0 8px;
  --retro-glow-md: 0 0 16px;
  --retro-glow-lg: 0 0 24px;
}
```

---

## Browser Support

**Tested:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**CSS Features Used:**
- `backdrop-filter` (with fallback)
- CSS Grid
- CSS Custom Properties
- CSS Transitions
- Gradient backgrounds

---

## Migration Notes

### From Funky to Retro

**Changes:**
1. Updated BEM classes to match retro naming
2. Replaced smooth gradients with dashed borders
3. Added neon glow effects on hover/active
4. Changed fonts to retro typography
5. Updated animation timings (spring easing)

**Breaking Changes:**
- None (props interface unchanged)

---

## Changelog

**v1.2.0** (2026-03-13)
- Added comprehensive retro styling
- Improved accessibility (ARIA labels)
- Added trust badges
- Enhanced keyboard navigation

**v1.1.0** (2026-03-12)
- Added subscription toggle
- Added variation selector
- Improved loading states

**v1.0.0** (2026-02-20)
- Initial implementation
- Basic quantity and add to cart

---

## References

- **WordPress:** [WooCommerce Add to Cart Block](https://woocommerce.com/document/woocommerce-blocks/)
- **Design System:** `/guidelines/design-tokens/Funky-Woocommerce-Design-System.md`
- **Accessibility:** WCAG 2.1 AA compliance
- **Component Library:** PlayPocket Retro Design System

---

**Last Updated:** March 13, 2026  
**Maintainer:** PlayPocket Team  
**Status:** ✅ Production Ready
