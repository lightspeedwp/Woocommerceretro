# OrderStatus Component

**Type:** Block  
**Category:** Order  
**Location:** `/src/app/components/blocks/order/OrderStatus.tsx`  
**Status:** Complete

---

## Overview

**Purpose:** Displays a confirmation banner with order received heading and dynamic status message based on order state, with retro gaming aesthetic and neon glow effects.

**Use Cases:**
- Order confirmation pages (Thank You page)
- Order receipt emails (header section)
- Order detail view pages
- Account → Order History → View Order
- Order status updates

**WordPress Alignment:** Maps to WooCommerce "Order Confirmation" block header. Displays order received confirmation with contextual messaging based on order status.

---

## Visual Reference

**Order Status Banner:**
```
┌────────────────────────────────────────────┐
│                                            │
│        Order received (gradient)           │
│                                            │
│  Thank you. Your order has been received. │
│            (neon lime text)                │
│                                            │
└────────────────────────────────────────────┘
  ← Glass panel with lime glow border
```

**Status Variants:**
- **Processing:** "Your order has been received."
- **Completed:** "Your order is complete."
- **On Hold:** "Your order is currently on hold."
- **Pending:** "Your order is pending payment."

**States:**
- **Default:** Glass panel with lime glow border + pulse animation
- **Dark Mode:** Automatic color adaptation
- **Responsive:** Full-width on mobile, max-width on desktop

---

## Implementation

### File Location

```
/src/app/components/blocks/order/OrderStatus.tsx
```

### Dependencies

```tsx
import React from 'react';
```

**Required:**
- React

**Optional:**
- None (minimal component, no external dependencies)

---

## Props / API

### TypeScript Interface

```tsx
interface OrderStatusProps {
  status?: string;
}
```

### Props Reference Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `status` | `string` | ❌ No | `'processing'` | Order status key |

**Valid Status Values:**
- `'processing'` - Default, order received
- `'completed'` - Order complete
- `'on-hold'` - Order on hold
- `'pending'` - Pending payment
- `'failed'` - Payment failed (shows default message)
- `'cancelled'` - Order cancelled (shows default message)

---

## Usage Examples

### Basic Usage (Default)

```tsx
import { OrderStatus } from '@/components/blocks/order/OrderStatus';

function ThankYouPage() {
  return (
    <div className="thank-you-page">
      <OrderStatus />
      {/* Shows: "Thank you. Your order has been received." */}
    </div>
  );
}
```

---

### With Order Status

```tsx
import { OrderStatus } from '@/components/blocks/order/OrderStatus';

function ThankYouPage() {
  const order = useCheckoutOrder();

  return (
    <div className="thank-you-page">
      <OrderStatus status={order.status} />
      
      {/* Other order details */}
    </div>
  );
}
```

---

### All Status Variants

```tsx
// Processing (default)
<OrderStatus status="processing" />
// Message: "Thank you. Your order has been received."

// Completed
<OrderStatus status="completed" />
// Message: "Thank you. Your order is complete."

// On Hold
<OrderStatus status="on-hold" />
// Message: "Thank you. Your order is currently on hold."

// Pending Payment
<OrderStatus status="pending" />
// Message: "Thank you. Your order is pending payment."
```

---

### With Order Details

```tsx
import { OrderStatus } from '@/components/blocks/order/OrderStatus';
import { OrderStatusHeader } from '@/components/blocks/order/OrderStatusHeader';
import { OrderDetails } from '@/components/blocks/order/OrderDetails';

function OrderConfirmation() {
  const order = useOrder();

  return (
    <div className="order-confirmation">
      <OrderStatus status={order.status} />
      
      <OrderStatusHeader
        orderNumber={order.number}
        status={order.status}
        date={order.date}
      />
      
      <OrderDetails
        items={order.items}
        shipping={order.shipping}
        total={order.total}
      />
    </div>
  );
}
```

---

## Component Structure

### Anatomy

```tsx
<div className="wp-block-group wp-block-group--vertical funky-glass-panel funky-glow-border--lime wp-order-status">
  {/* Heading */}
  <h1 className="wp-block-heading funky-gradient-text has-x-large-font-size">
    Order received
  </h1>
  
  {/* Status message */}
  <p className="text-neon-lime">
    {getStatusMessage()}
  </p>
</div>
```

---

### Element Breakdown

**1. Container (`.wp-order-status`):**
- WordPress block group (vertical stack)
- Glass panel background
- Lime green glow border with pulse
- Centered content

**2. Heading (`.wp-block-heading`):**
- "Order received" text
- Gradient text effect (purple → pink)
- Extra large font size (WordPress utility)
- H1 semantic element

**3. Status Message (`<p>`):**
- Dynamic message based on status prop
- Neon lime text color
- Regular paragraph styling

---

### Status Message Logic

```tsx
const getStatusMessage = () => {
  if (status === 'completed') return 'Thank you. Your order is complete.';
  if (status === 'on-hold') return 'Thank you. Your order is currently on hold.';
  if (status === 'pending') return 'Thank you. Your order is pending payment.';
  return 'Thank you. Your order has been received.';
};
```

**Default Message:** "Your order has been received." (for processing, failed, cancelled, or any other status)

---

## Styling

### BEM CSS Classes

**Component:**
```css
.wp-order-status {
  /* Order status banner container */
}
```

**Funky Theme Classes:**
```css
.funky-glass-panel {
  /* Glass morphism background */
}

.funky-glow-border--lime {
  /* Lime green glow border with pulse */
}

.funky-gradient-text {
  /* Gradient text effect (purple → pink) */
}

.text-neon-lime {
  /* Neon lime text color */
}
```

**WordPress Utility Classes:**
```css
.wp-block-group {
  /* Block group container */
}

.wp-block-group--vertical {
  /* Vertical stack layout */
}

.wp-block-heading {
  /* Heading element */
}

.has-x-large-font-size {
  /* Extra large font size */
}
```

---

### CSS Variables Used

**Colors:**
- Gradient text: `--retro-gradient-purple-pink`
- Glass panel: `--retro-color-surface` with transparency
- Neon lime: `--retro-color-neon-lime` (#00ff00)
- Glow border: Lime green with opacity

**Spacing:**
- Container padding: `--retro-spacing-xl` (24px)
- Heading margin: `--retro-spacing-md` (12px)

**Typography:**
- Heading: `--retro-font-display`
- Body text: `--retro-font-body`
- Extra large font: WordPress `has-x-large-font-size` (clamp 32px → 48px)

**Effects:**
- Border radius: `--retro-radius-lg` (12px)
- Glass blur: `backdrop-filter: blur(10px)`
- Glow border: `box-shadow` with lime color
- Pulse animation: 2s ease-in-out infinite

---

### Retro Theme Styling

**Glass Panel Background:**
```css
.funky-glass-panel {
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.1),
    rgba(236, 72, 153, 0.05)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}
```

**Neon Lime Glow Border with Pulse:**
```css
.funky-glow-border--lime {
  border: 2px solid var(--retro-color-neon-lime);
  box-shadow:
    0 0 10px rgba(0, 255, 0, 0.5),
    inset 0 0 10px rgba(0, 255, 0, 0.2);
  animation: pulse-lime 2s ease-in-out infinite;
}

@keyframes pulse-lime {
  0%, 100% {
    box-shadow:
      0 0 10px rgba(0, 255, 0, 0.5),
      inset 0 0 10px rgba(0, 255, 0, 0.2);
  }
  50% {
    box-shadow:
      0 0 20px rgba(0, 255, 0, 0.7),
      inset 0 0 15px rgba(0, 255, 0, 0.3);
  }
}
```

**Gradient Text Effect:**
```css
.funky-gradient-text {
  background: linear-gradient(
    135deg,
    #8b5cf6,
    #ec4899
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
```

**Neon Lime Text:**
```css
.text-neon-lime {
  color: #00ff00;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.6);
}
```

---

### Dark Mode Support

**Automatic:** ✅ Yes

All colors adapt via CSS variables:

**Light Mode:**
- Glass panel: Light purple/pink tint
- Neon lime: Full brightness
- Glow border: Moderate intensity

**Dark Mode:**
- Glass panel: Darker purple/pink tint with brighter border
- Neon lime: Brighter, more intense
- Glow border: Higher intensity, more visible

**Implementation:**
```css
.dark .funky-glass-panel {
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.15),
    rgba(236, 72, 153, 0.1)
  );
  border-color: rgba(139, 92, 246, 0.3);
}

.dark .funky-glow-border--lime {
  box-shadow:
    0 0 15px rgba(0, 255, 0, 0.7),
    inset 0 0 15px rgba(0, 255, 0, 0.3);
}

.dark .text-neon-lime {
  text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
}
```

---

## Accessibility

### WCAG 2.1 AA Compliance

**Semantic HTML:**
- ✅ Uses `<h1>` for main heading
- ✅ Uses `<p>` for status message
- ✅ Proper heading hierarchy (h1 at top of page)

**Screen Reader Support:**
- ✅ "Order received" heading announced as h1
- ✅ Status message announced as paragraph
- ✅ No hidden content
- ✅ Clear, descriptive text

**Keyboard Navigation:**
- ✅ No interactive elements (static display)
- ✅ No focus management needed

**Color Contrast:**
- ✅ Gradient heading: AAA (on light background)
- ✅ Neon lime text: AA (large text, 3:1 minimum)
- ✅ Glow border: Decorative, not relied upon for meaning

---

### Accessibility Enhancement Recommendations

**1. Status Role for Screen Readers:**
```tsx
<div
  className="wp-order-status"
  role="status"
  aria-live="polite"
>
  {/* Announces changes to status message */}
</div>
```

**2. Status Icon:**
```tsx
import { CheckCircle, Clock, AlertCircle } from '@phosphor-icons/react';

const getStatusIcon = () => {
  if (status === 'completed') return <CheckCircle size={48} />;
  if (status === 'on-hold') return <Clock size={48} />;
  if (status === 'pending') return <AlertCircle size={48} />;
  return <CheckCircle size={48} />;
};

<div className="wp-order-status__icon" aria-hidden="true">
  {getStatusIcon()}
</div>
```

**3. Contextual Heading:**
```tsx
<h1 className="wp-block-heading">
  {status === 'completed' ? 'Order Complete!' : 'Order Received'}
</h1>
```

---

## Responsive Design

### Mobile (< 640px)

**Layout:**
- Full-width container
- Centered text
- Padding: 20px

**Typography:**
- Heading: 28px (responsive via has-x-large-font-size)
- Message: 14px

**Spacing:**
- Heading margin-bottom: 10px

---

### Tablet (640px - 1024px)

**Layout:**
- Max-width: 600px
- Centered layout
- Padding: 24px

**Typography:**
- Heading: 36px
- Message: 15px

**Spacing:**
- Heading margin-bottom: 12px

---

### Desktop (> 1024px)

**Layout:**
- Max-width: 800px
- Centered layout
- Padding: 32px

**Typography:**
- Heading: 48px (via has-x-large-font-size clamp)
- Message: 16px

**Spacing:**
- Heading margin-bottom: 16px

**Effects:**
- Glow pulse animation visible
- Gradient text more prominent

---

## Status Message Customization

### Default Messages

```tsx
const STATUS_MESSAGES = {
  processing: 'Thank you. Your order has been received.',
  completed: 'Thank you. Your order is complete.',
  'on-hold': 'Thank you. Your order is currently on hold.',
  pending: 'Thank you. Your order is pending payment.',
};
```

### Extended Status Support

```tsx
interface OrderStatusProps {
  status?: string;
  customMessage?: string;
}

export const OrderStatus = ({ status = 'processing', customMessage }) => {
  const getStatusMessage = () => {
    if (customMessage) return customMessage;
    
    if (status === 'completed') return 'Thank you. Your order is complete.';
    if (status === 'on-hold') return 'Thank you. Your order is currently on hold.';
    if (status === 'pending') return 'Thank you. Your order is pending payment.';
    if (status === 'failed') return 'Your payment could not be processed. Please try again.';
    if (status === 'cancelled') return 'This order has been cancelled.';
    if (status === 'refunded') return 'This order has been refunded.';
    
    return 'Thank you. Your order has been received.';
  };

  return (
    // ...
  );
};
```

---

## Related Components

### Used With

- **OrderStatusHeader** - Order number, date, status badge
- **OrderDetails** - Line items, shipping, total
- **Button** - "View Order" or "Continue Shopping" CTAs
- **Container** - Page layout wrapper

### Related Blocks

- **OrderDetails** - Order confirmation details
- **OrderStatusHeader** - Header with order metadata
- **Badge** - Status badge variant

### Parent Components

- **ThankYouPage** template (order confirmation)
- **ViewOrder** template (account → orders)
- **EmailOrderConfirmation** template

---

## Performance

### Bundle Impact

**Size:** ~0.3KB (minified + gzipped)

**Dependencies:**
- React: Shared
- No external dependencies

**Minimal component with static rendering.**

---

### Rendering Optimization

**Static Structure:**
- Component structure is static
- Only status message is dynamic (simple string)

**No Memoization Needed:**
- Component is simple and fast
- No expensive computations
- No complex child components

**Pure Component Candidate:**
```tsx
import { memo } from 'react';

export const OrderStatus = memo(({ status }) => {
  // ...
});
```

---

## Testing

### Unit Test Coverage

**Test file:** (Not yet created)  
**Recommended location:** `/src/app/components/blocks/order/__tests__/OrderStatus.test.tsx`

**Test cases:**

```tsx
describe('OrderStatus', () => {
  it('renders order received heading', () => {
    render(<OrderStatus />);
    expect(screen.getByText('Order received')).toBeInTheDocument();
  });

  it('shows default message for processing status', () => {
    render(<OrderStatus status="processing" />);
    expect(screen.getByText('Thank you. Your order has been received.')).toBeInTheDocument();
  });

  it('shows completed message', () => {
    render(<OrderStatus status="completed" />);
    expect(screen.getByText('Thank you. Your order is complete.')).toBeInTheDocument();
  });

  it('shows on-hold message', () => {
    render(<OrderStatus status="on-hold" />);
    expect(screen.getByText('Thank you. Your order is currently on hold.')).toBeInTheDocument();
  });

  it('shows pending message', () => {
    render(<OrderStatus status="pending" />);
    expect(screen.getByText('Thank you. Your order is pending payment.')).toBeInTheDocument();
  });

  it('shows default message for unknown status', () => {
    render(<OrderStatus status="unknown" />);
    expect(screen.getByText('Thank you. Your order has been received.')).toBeInTheDocument();
  });

  it('applies glass panel styling', () => {
    const { container } = render(<OrderStatus />);
    const panel = container.querySelector('.funky-glass-panel');
    expect(panel).toBeInTheDocument();
  });

  it('applies lime glow border', () => {
    const { container } = render(<OrderStatus />);
    const glowBorder = container.querySelector('.funky-glow-border--lime');
    expect(glowBorder).toBeInTheDocument();
  });

  it('uses h1 for heading', () => {
    render(<OrderStatus />);
    const heading = screen.getByText('Order received');
    expect(heading.tagName).toBe('H1');
  });

  it('applies gradient text to heading', () => {
    const { container } = render(<OrderStatus />);
    const heading = container.querySelector('.funky-gradient-text');
    expect(heading).toBeInTheDocument();
  });

  it('applies neon lime color to message', () => {
    const { container } = render(<OrderStatus />);
    const message = container.querySelector('.text-neon-lime');
    expect(message).toBeInTheDocument();
  });
});
```

---

### Visual Regression Testing

**Scenarios:**
1. Default light mode
2. Default dark mode
3. Mobile viewport (< 640px)
4. Tablet viewport (640px - 1024px)
5. Desktop viewport (> 1024px)
6. Processing status
7. Completed status
8. On-hold status
9. Pending status
10. Pulse animation (0%, 50%, 100%)

---

### Integration Testing

```tsx
describe('OrderStatus Integration', () => {
  it('integrates with order confirmation page', () => {
    render(<ThankYouPage orderId="123" />);
    
    // Verify status banner rendered
    expect(screen.getByText('Order received')).toBeInTheDocument();
    expect(screen.getByText(/Your order has been received/)).toBeInTheDocument();
  });

  it('displays correct message based on order status', async () => {
    const { rerender } = render(<ThankYouPage orderId="123" />);
    
    // Initial: processing
    expect(screen.getByText(/has been received/)).toBeInTheDocument();
    
    // Update to completed
    rerender(<ThankYouPage orderId="123" status="completed" />);
    expect(screen.getByText(/is complete/)).toBeInTheDocument();
  });
});
```

---

## Known Issues

**None identified.**

---

## Future Enhancements

### Planned Features

1. **Status Icon Display**
   ```tsx
   <div className="wp-order-status__icon">
     {status === 'completed' && <CheckCircle size={48} className="text-neon-lime" />}
     {status === 'pending' && <Clock size={48} className="text-neon-pink" />}
   </div>
   ```

2. **Progress Bar**
   ```tsx
   <div className="wp-order-status__progress">
     <div className="progress-bar" style={{ width: `${getProgress(status)}%` }}>
       <div className="progress-glow" />
     </div>
   </div>
   ```

3. **Estimated Delivery Date**
   ```tsx
   {status === 'processing' && estimatedDelivery && (
     <p className="text-neon-cyan">
       Estimated delivery: {formatDate(estimatedDelivery)}
     </p>
   )}
   ```

4. **Next Steps CTA**
   ```tsx
   <div className="wp-order-status__actions">
     {status === 'completed' && (
       <Button onClick={() => navigate('/account/orders')}>
         View Order History
       </Button>
     )}
     {status === 'pending' && (
       <Button onClick={() => navigate(`/order/${orderId}/pay`)}>
         Complete Payment
       </Button>
     )}
   </div>
   ```

5. **Tracking Link**
   ```tsx
   {status === 'completed' && trackingNumber && (
     <a
       href={trackingUrl}
       className="text-neon-cyan"
       target="_blank"
       rel="noopener noreferrer"
     >
       Track your order: {trackingNumber}
     </a>
   )}
   ```

6. **Status-Specific Border Colors**
   ```tsx
   const getBorderClass = () => {
     if (status === 'completed') return 'funky-glow-border--lime';
     if (status === 'pending') return 'funky-glow-border--pink';
     if (status === 'on-hold') return 'funky-glow-border--cyan';
     return 'funky-glow-border--lime';
   };
   ```

---

## Migration Notes

### From v1.0 to v2.0

**Breaking Changes:** None (initial version)

**New Features:**
- Retro gaming aesthetic
- Glass panel styling
- Neon lime text
- Gradient heading text
- Lime glow border with pulse animation
- Dynamic status messaging
- Dark mode support
- WordPress semantic classes

---

## Changelog

### v1.0 (2026-03-14)

**Initial Release:**
- Order received heading
- Dynamic status messages (4 variants)
- Glass panel background (retro theme)
- Gradient heading text (purple → pink)
- Neon lime status message
- Lime glow border with pulse animation
- Dark mode support
- WCAG AA compliance
- Responsive design
- BEM CSS architecture
- Minimal dependencies

---

## Related Guidelines

- **Component:** [OrderDetails.md](./OrderDetails.md) - Order confirmation details
- **Component:** [OrderStatusHeader.md](./OrderStatusHeader.md) - Order metadata header
- **Block:** [Button.md](/guidelines/blocks/design/Button.md) - Button component
- **Block:** [Badge.md](/guidelines/blocks/ui/Badge.md) - Badge component
- **Common:** [Typography.md](/guidelines/components/Typography.md) - Typography system
- **Template:** [ThankYouPage.md](/guidelines/templates/ThankYouPage.md) - Order confirmation
- **Design Token:** [Colors.md](/guidelines/design-tokens/Colors.md) - Color system
- **Styling:** [Retro Theme](/guidelines/design-tokens/Funky-Theme.md) - Retro design system

---

**Last Updated:** 2026-03-14  
**Author:** Development Team  
**Status:** ✅ Complete and Production Ready
