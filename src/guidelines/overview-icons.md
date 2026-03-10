# Icon System Overview

This WooCommerce prototype uses **Phosphor Icons React** (`@phosphor-icons/react`) as the icon library. Phosphor provides a comprehensive set of flexible, consistent icons with multiple weight variants — perfect for the Funky WooCommerce aesthetic.

**Migration Note (March 2026):** All Lucide React icons have been fully replaced with Phosphor equivalents. The `lucide-react` dependency has been removed from `package.json` and `vite.config.ts`.

---

## Icon Library: Phosphor Icons React

**Package:** `@phosphor-icons/react`  
**Style:** Multiple weights (thin, light, regular, bold, fill, duotone)  
**Default Weight:** `duotone` (project standard)  
**Default Size:** 24px (customizable)  
**Total Icons:** 9,000+ icon variants (1,500+ base icons x 6 weights)

---

## How to Use Icons

### Basic Import Pattern

```tsx
import { MagnifyingGlass, ShoppingCart, User, Heart, X } from '@phosphor-icons/react';

function Header() {
  return (
    React.createElement('nav', null,
      React.createElement('button', { 'aria-label': 'Search' },
        React.createElement(MagnifyingGlass, { size: 20, weight: 'duotone' })
      ),
      React.createElement('button', { 'aria-label': 'Cart' },
        React.createElement(ShoppingCart, { size: 20, weight: 'duotone' })
      ),
      React.createElement('button', { 'aria-label': 'Account' },
        React.createElement(User, { size: 20, weight: 'duotone' })
      )
    )
  );
}
```

### Import Rules

1. **Direct named imports ONLY** — `import { Star, Heart } from '@phosphor-icons/react'`
2. **NO namespace imports** — `import * as PhosphorIcons` is forbidden (except `PageIconLibrary.tsx`)
3. **Use aliases for Lucide name compatibility** — `import { CaretRight as ChevronRight } from '@phosphor-icons/react'`

### Icon Props

All Phosphor icons accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `currentColor` | Icon color (inherits text color by default) |
| `weight` | `'thin' \| 'light' \| 'regular' \| 'bold' \| 'fill' \| 'duotone'` | `'regular'` | Icon weight/style |
| `className` | `string` | - | Additional CSS classes |
| `mirrored` | `boolean` | `false` | Mirror icon horizontally |

### Weight Guidelines

- **`duotone`**: Project default — used for most UI icons (two-tone depth)
- **`regular`**: Clean outline icons — navigation, secondary actions
- **`bold`**: Emphasis — active states, primary CTAs
- **`fill`**: Solid — selected/active states (e.g., filled heart for wishlisted items)
- **`light`/`thin`**: Decorative — large display icons, hero sections

### Sizing Guidelines

- **16px**: Small UI elements (badges, compact buttons, table cells)
- **20px**: Standard buttons, navigation items, form inputs
- **24px**: Default size, header icons, prominent actions
- **32px**: Large touch targets, hero sections
- **48px+**: Feature showcases, empty states

---

## Key Name Mappings (Lucide to Phosphor)

When migrating from Lucide icons, use these Phosphor equivalents:

| Lucide Name | Phosphor Name | Alias Used |
|-------------|---------------|------------|
| `Activity` | `Heartbeat` | — |
| `ShoppingBag` | `Bag` | `Bag as ShoppingBag` |
| `Layers` | `Stack` | `Stack as Layers` |
| `Search` | `MagnifyingGlass` | `MagnifyingGlass as Search` |
| `ChevronDown` | `CaretDown` | `CaretDown as ChevronDown` |
| `ChevronRight` | `CaretRight` | `CaretRight as ChevronRight` |
| `ChevronLeft` | `CaretLeft` | `CaretLeft as ChevronLeft` |
| `ChevronUp` | `CaretUp` | `CaretUp as ChevronUp` |
| `Trash2` | `Trash` | `Trash as Trash2` |
| `AlertCircle` | `WarningCircle` | `WarningCircle as AlertCircle` |
| `AlertTriangle` | `Warning` | `Warning as AlertTriangle` |
| `ExternalLink` | `ArrowSquareOut` | `ArrowSquareOut as ExternalLink` |
| `Loader2` | `SpinnerGap` | `SpinnerGap as Loader2` |
| `Menu` | `List` | `List as Menu` |
| `Mail` | `Envelope` | `Envelope as Mail` |
| `LogIn` | `SignIn` | `SignIn as LogIn` |
| `LogOut` | `SignOut` | `SignOut as LogOut` |

---

## Common E-Commerce Icons

### Shopping & Cart

```tsx
import {
  ShoppingCart,      // Cart icon
  Bag,               // Shopping bag
  Package,           // Package/order
  CreditCard,        // Payment
  Truck,             // Shipping/delivery
  Gift,              // Gift/promotion
  Tag,               // Price tag
  CurrencyDollar,    // Currency/price
} from '@phosphor-icons/react';
```

### Navigation & UI

```tsx
import {
  List,              // Hamburger menu (alias: Menu)
  X,                 // Close button
  CaretDown,         // Dropdown indicator
  CaretUp,           // Collapse indicator
  CaretLeft,         // Back/previous
  CaretRight,        // Forward/next
  ArrowLeft,         // Navigate back
  ArrowRight,        // Navigate forward
  House,             // Home link
  MagnifyingGlass,   // Search function
} from '@phosphor-icons/react';
```

### User & Account

```tsx
import {
  User,              // User account
  UserCircle,        // Profile icon
  SignIn,             // Sign in
  SignOut,            // Sign out
  Heart,             // Wishlist/favorite
  Star,              // Rating/review
  Envelope,          // Email/newsletter
  Lock,              // Security/password
} from '@phosphor-icons/react';
```

### Product & Inventory

```tsx
import {
  Image,             // Product image placeholder
  Eye,               // Quick view
  MagnifyingGlassPlus, // Zoom product image
  Funnel,            // Filter products
  GridFour,          // Grid view
  ListBullets,       // List view
  Stack,             // Categories (alias: Layers)
  Check,             // In stock, selected
  WarningCircle,     // Low stock warning
  XCircle,           // Out of stock
} from '@phosphor-icons/react';
```

### Actions & Feedback

```tsx
import {
  Plus,              // Add item, expand
  Minus,             // Remove, collapse
  Trash,             // Delete item (alias: Trash2)
  PencilSimple,      // Edit item
  Copy,              // Duplicate/copy
  ShareNetwork,      // Share product
  DownloadSimple,    // Download invoice
  ArrowClockwise,    // Reload, retry
  CheckCircle,       // Success
  Warning,           // Warning (alias: AlertTriangle)
  Info,              // Information
} from '@phosphor-icons/react';
```

### Social & External

```tsx
import {
  FacebookLogo,      // Facebook
  XLogo,             // X (Twitter)
  InstagramLogo,     // Instagram
  YoutubeLogo,       // YouTube
  LinkedinLogo,      // LinkedIn
  ArrowSquareOut,    // External links
  MapPin,            // Location/store
  Phone,             // Phone contact
} from '@phosphor-icons/react';
```

---

## Icon Usage Patterns

### Icon Buttons (IMPORTANT: Accessibility)

Always provide `aria-label` for icon-only buttons:

```tsx
// CORRECT - Accessible
React.createElement('button', { 'aria-label': 'Add to cart' },
  React.createElement(ShoppingCart, { size: 20, weight: 'duotone' })
)

// WRONG - Not accessible
React.createElement('button', null,
  React.createElement(ShoppingCart, { size: 20 })
)
```

### Loading States

Use animated spinner for loading:

```tsx
import { SpinnerGap } from '@phosphor-icons/react';

React.createElement('button', { disabled: true },
  React.createElement(SpinnerGap, { size: 20, className: 'funky-animate-spin' }),
  React.createElement('span', null, 'Loading...')
)
```

### Icon Colors

Icons inherit text color by default. Override with CSS classes:

```tsx
// Inherits text color (preferred via BEM classes)
React.createElement(Star, { className: 'wp-star-rating__star--filled', weight: 'fill' })

// Active/selected state
React.createElement(Heart, { className: 'wc-block-product-card__action-button--active', weight: 'fill' })
```

---

## Icon Organization by Feature

### Header/Navigation Icons
`List` (Menu), `X`, `MagnifyingGlass`, `ShoppingCart`, `User`, `Heart`

### Product Card Icons
`Heart`, `Eye`, `ShoppingCart`, `Star`

### Cart/Checkout Icons
`ShoppingCart`, `Trash`, `Plus`, `Minus`, `CreditCard`, `Lock`, `Truck`

### Product Filters Icons
`Funnel`, `GridFour`, `ListBullets`, `CaretDown`, `X`

### Footer Icons
`FacebookLogo`, `XLogo`, `InstagramLogo`, `LinkedinLogo`, `Envelope`, `MapPin`, `Phone`

### Status/Feedback Icons
`CheckCircle`, `WarningCircle`, `Warning`, `Info`, `XCircle`

---

## Best Practices

### DO:
- Use `weight="duotone"` as the project default
- Use direct named imports (`import { Star } from '@phosphor-icons/react'`)
- Provide `aria-label` for icon-only buttons
- Keep icon sizes consistent across similar UI elements
- Use `currentColor` to inherit text color (via CSS classes)
- Use aliases to maintain Lucide-compatible names where needed

### DON'T:
- Use `import * as PhosphorIcons` namespace imports (except `PageIconLibrary.tsx`)
- Use multiple icon sizes in the same context
- Mix icon weights inconsistently within a component
- Use decorative icons without proper ARIA labels on interactive elements
- Use icons smaller than 16px (readability issues)
- Import from `lucide-react` (removed from project)

---

## Quick Reference: Most Used Icons

```tsx
import {
  // Navigation
  List, X, CaretDown, CaretLeft, CaretRight, House,
  
  // Shopping
  ShoppingCart, Bag, Heart, Package, CreditCard, Truck,
  
  // User
  User, UserCircle, SignIn, SignOut, Envelope, Lock,
  
  // Actions
  MagnifyingGlass, Funnel, Plus, Minus, Trash, PencilSimple, Eye, Star,
  
  // Feedback
  CheckCircle, WarningCircle, Warning, Info, SpinnerGap,
  
  // Social
  FacebookLogo, XLogo, InstagramLogo, ArrowSquareOut, MapPin, Phone,
} from '@phosphor-icons/react';
```

This covers 95% of e-commerce interface needs. Import only what you need to keep bundle size small.
