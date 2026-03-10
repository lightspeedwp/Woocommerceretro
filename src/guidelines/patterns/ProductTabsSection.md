# ProductTabsSection Pattern

**Last Updated:** January 27, 2026
**Status:** ✅ Production Ready
**Category:** Pattern
**Component:** `ProductTabsSection`
**Location:** `/src/app/components/patterns/ProductTabsSection.tsx`

---

## 1. Overview

The `ProductTabsSection` is a comprehensive, reusable tabbed interface designed for displaying detailed product information. It serves as the primary navigation for secondary product content such as full descriptions, technical specifications, reviews, and shipping information.

It supports both:
- **Default Mode:** Renders standard tabs (Description, Additional Info, Reviews) with mock content.
- **Controlled Mode:** Accepts `activeTab` and `setActiveTab` props for external state management (used in `VariableProduct`).
- **Data Injection:** Accepts specific content props (`description`, `attributes`, `reviews`) to render dynamic data.

## 2. Usage

### Basic Usage (Default State)
```tsx
import { ProductTabsSection } from '@/components/patterns/ProductTabsSection';

// Renders with default mock content
<ProductTabsSection />
```

### Advanced Usage (With Data)
```tsx
import { ProductTabsSection } from '@/components/patterns/ProductTabsSection';

<ProductTabsSection 
  description={product.description}
  attributes={product.attributes}
  reviews={product.reviews}
  reviewRating={reviewRating}
  setReviewRating={setReviewRating}
  reviewText={reviewText}
  setReviewText={setReviewText}
  handleReviewSubmit={handleSubmit}
/>
```

### Controlled Mode (External State)
```tsx
const [activeTab, setActiveTab] = useState('reviews');

<ProductTabsSection 
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  // ...other props
/>
```

## 3. Props Interface

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | `ProductTab[]` | No | Custom tabs array override |
| `defaultTab` | `string` | No | Initial active tab ID (default: 'description') |
| `className` | `string` | No | Additional CSS classes |
| `activeTab` | `string` | No | Controlled state active tab ID |
| `setActiveTab` | `(id: string) => void` | No | Controlled state setter |
| `description` | `string` | No | Product description text |
| `attributes` | `any[]` | No | Product attributes array |
| `reviews` | `any[]` | No | Product reviews array |
| `reviewRating` | `number` | No | Current rating input value |
| `setReviewRating` | `(r: number) => void` | No | Rating input setter |
| `reviewText` | `string` | No | Current review text input |
| `setReviewText` | `(t: string) => void` | No | Review text input setter |
| `handleReviewSubmit` | `(e: Event) => void` | No | Review form submit handler |

## 4. CSS Architecture

This component uses BEM-style CSS classes defined in `/src/styles/globals.css`.

**Block:** `.woocommerce-product-tabs`

| Element | Description |
|---------|-------------|
| `__list` | Tab navigation container (scrollable on mobile) |
| `__tab` | Individual tab button |
| `__tab--active` | Active state modifier |
| `__panel` | Content panel container |
| `__content` | General content wrapper |
| `__review-summary` | Reviews header with aggregate rating |
| `__review-stars` | Star rating display |
| `__review-item` | Individual review container |
| `__review-form` | Add review form container |

## 5. Accessibility

- **ARIA Roles:** Uses `tablist`, `tab`, and `tabpanel` roles.
- **Keyboard Navigation:** Supports Left/Right arrow keys to navigate tabs.
- **Focus Management:** Tab buttons have visible focus states.
- **Screen Readers:** `aria-selected` and `aria-controls` attributes are properly set.

## 6. Dark Mode

Fully supported via CSS variables and semantic classes.
- Backgrounds adapt to `surface` colors.
- Text adapts to `primary` and `secondary` text colors.
- Borders use adaptive border colors.

## 7. Mobile Responsiveness

- Tab list is horizontally scrollable on small screens.
- Touch targets are optimized (48px min height).
- Padding adjusts for mobile viewports.
