# Blocks Guidelines Gaps Task List

**Source:** A4 Blocks Coverage Audit (2026-02-21)  
**Status:** NOT STARTED  
**Updated:** February 21, 2026 (Per-component redesign blueprint added)  
**Coverage:** 35% (40/115 components have guidelines)  
**Cross-Reference:** `/prompts/funky-redesign-orchestrator.md` Appendix C

---

## P0: Critical (Cart/Checkout/Product — blocks funky redesign Phases 4-5)

### Checkout Blocks (8 components, 0 guidelines)

#### T4.1 — `checkout/CheckoutStep.tsx`

**File:** `/src/app/components/blocks/checkout/CheckoutStep.tsx`  
**Used By:** `PageCheckout.tsx` — wraps each form section  
**Guideline:** CREATE → `/guidelines/blocks/checkout/CheckoutStep.md`

**Current Composition:**
```
CheckoutStep
├── Step number indicator (circle + number)
├── Step title
├── Expandable content area
└── Complete/active/inactive states
```

**Funky Spec:**
- Gradient step number (neon pink for active, muted for inactive)
- Glow indicator ring on active step
- Glass panel for expanded content
- Smooth spring animation on expand/collapse
- BEM: `.wc-checkout-step__*`
- CSS: `/src/styles/blocks/checkout/checkout-step.css`

---

#### T4.2 — `checkout/PaymentMethods.tsx`

**File:** `/src/app/components/blocks/checkout/PaymentMethods.tsx`  
**Used By:** `PageCheckout.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/checkout/PaymentMethods.md`

**Funky Spec:**
- Glow border on selected payment method card
- Neon radio indicator for selected method
- Glass method cards
- Subtle card brand icons with glow on hover
- BEM: `.wc-payment-methods__*`

---

#### T4.3 — `checkout/ShippingAddressForm.tsx`

**File:** `/src/app/components/blocks/checkout/ShippingAddressForm.tsx`  
**Used By:** `PageCheckout.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/checkout/ShippingAddressForm.md`

**Funky Spec:**
- Glass form panel container
- Neon cyan focus ring on all inputs
- Animated label float with neon accent
- BEM: `.wc-shipping-form__*`

---

#### T4.4 — `checkout/BillingAddressForm.tsx`

**File:** `/src/app/components/blocks/checkout/BillingAddressForm.tsx`  
**Used By:** `PageCheckout.tsx` (conditional — when "different billing" checked)  
**Guideline:** CREATE → `/guidelines/blocks/checkout/BillingAddressForm.md`  
**Funky Spec:** Same as ShippingAddressForm — shared form funky pattern  
**BEM:** `.wc-billing-form__*`

---

#### T4.5 — `checkout/OrderSummary.tsx`

**File:** `/src/app/components/blocks/checkout/OrderSummary.tsx`  
**Used By:** `PageCheckout.tsx` (sticky right sidebar)  
**Guideline:** CREATE → `/guidelines/blocks/checkout/OrderSummary.md`

**Current Composition:**
```
OrderSummary
├── Section header ("Order Summary")
├── Item list (image, title, qty, price per item)
├── Subtotal line
├── Shipping line
├── Discount line (if coupon applied)
├── Tax line
├── Total line (prominent)
└── "Place Order" button
```

**Funky Spec:**
- Glass panel background for entire summary
- Gradient accent on total line (pink→cyan subtle)
- Neon glow "Place Order" button — primary conversion element
- Subtle glow on item rows on hover
- BEM: `.wc-order-summary__*`

---

#### T4.6 — `checkout/CouponInput.tsx`

**File:** `/src/app/components/blocks/checkout/CouponInput.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/checkout/CouponInput.md`  
**Funky Spec:** Neon focus input, glow "Apply" button, success state with neon lime accent  
**BEM:** `.wc-coupon-input__*`

---

#### T4.7 — `checkout/ContactInfo.tsx`

**File:** `/src/app/components/blocks/checkout/ContactInfo.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/checkout/ContactInfo.md`  
**Funky Spec:** Glass panel, neon focus inputs, email validation with neon success/error indicators  
**BEM:** `.wc-contact-info__*`

---

#### T4.8 — `checkout/DeliveryMethodSelector.tsx`

**File:** `/src/app/components/blocks/checkout/DeliveryMethodSelector.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/checkout/DeliveryMethodSelector.md`  
**Funky Spec:** Glow border on selected method card, neon radio indicators, glass option cards  
**BEM:** `.wc-delivery-selector__*`

---

### Single Product Blocks (4 priority, more in P1)

#### T4.9 — `single-product/ProductAddToCart.tsx`

**File:** `/src/app/components/blocks/single-product/ProductAddToCart.tsx`  
**Used By:** `SingleProduct.tsx`, `VariableProduct.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/single-product/ProductAddToCart.md`

**Current Composition:**
```
ProductAddToCart
├── Quantity selector (± buttons + input)
├── "Add to Cart" button (primary)
├── "Buy Now" button (secondary, optional)
└── Stock status indicator
```

**Funky Spec:**
- Neon pulse animation on successful add (brief glow burst)
- Glow button hover state
- Neon quantity ± buttons
- Glass stock badge
- BEM: `.wc-add-to-cart__*`

---

#### T4.10 — `single-product/ProductInfo.tsx`

**File:** `/src/app/components/blocks/single-product/ProductInfo.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/single-product/ProductInfo.md`  
**Funky Spec:** Glass meta panel, gradient sale price, neon category links  
**BEM:** `.wc-product-info__*`

---

#### T4.11 — `single-product/ProductTabs.tsx`

**File:** `/src/app/components/blocks/single-product/ProductTabs.tsx`  
**Guideline:** EXISTS at `/guidelines/blocks/ProductTabs.md` — needs update  
**Funky Spec:** Gradient underline on active tab (pink→cyan), glass tab content panels  
**BEM:** `.wc-product-tabs__*`

---

#### T4.12 — `single-product/ProductPrice.tsx`

**File:** `/src/app/components/blocks/single-product/ProductPrice.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/single-product/ProductPrice.md`  
**Funky Spec:** Gradient text on sale price, neon "Save X%" badge, glass price container  
**BEM:** `.wc-product-price__*`

---

## P1: High (Archive/Order/Product blocks)

### Archive Blocks

#### T4.13 — `archive/ActiveFilters.tsx`

**File:** `/src/app/components/blocks/archive/ActiveFilters.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/archive/ActiveFilters.md`  
**Funky Spec:** Neon pill badges for active filters, glow dismiss (×) button, spring remove animation  
**BEM:** `.wc-active-filters__*`

---

#### T4.14 — `archive/EmptyResults.tsx`

**File:** `/src/app/components/blocks/archive/EmptyResults.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/archive/EmptyResults.md`  
**Funky Spec:** Glass empty state panel, gradient illustration accent, subtle floating orb  
**BEM:** `.wc-empty-results__*`

---

#### T4.15 — `archive/MobileFilterDrawer.tsx`

**File:** `/src/app/components/blocks/archive/MobileFilterDrawer.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/archive/MobileFilterDrawer.md`  
**Funky Spec:** Full-screen glass overlay, neon filter controls, gradient header  
**BEM:** `.wc-mobile-filter__*`

---

### Order Blocks

#### T4.16 — `order/OrderDetails.tsx`

**File:** `/src/app/components/blocks/order/OrderDetails.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/order/OrderDetails.md`  
**Funky Spec:** Glass detail sections, gradient dividers, subtle glow on item rows  
**BEM:** `.wc-order-details__*`

---

#### T4.17 — `order/OrderStatus.tsx`

**File:** `/src/app/components/blocks/order/OrderStatus.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/order/OrderStatus.md`  
**Funky Spec:** Neon status indicators (green=shipped, cyan=processing, pink=pending), gradient progress bar  
**BEM:** `.wc-order-status__*`

---

#### T4.18 — `order/OrderStatusHeader.tsx`

**File:** `/src/app/components/blocks/order/OrderStatusHeader.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/order/OrderStatusHeader.md`  
**Funky Spec:** Glass header panel, gradient order number badge, neon status icon  
**BEM:** `.wc-order-status-header__*`

---

### Product Blocks

#### T4.19 — `product/CompareButton.tsx`

**File:** `/src/app/components/blocks/product/CompareButton.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/product/CompareButton.md`  
**Funky Spec:** Neon toggle state (active = cyan glow), spring animation on click  
**BEM:** `.wc-compare-button`

---

#### T4.20 — `product/VariantSelector.tsx`

**File:** `/src/app/components/blocks/product/VariantSelector.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/product/VariantSelector.md`

**Current Composition:**
```
VariantSelector
├── Attribute labels (e.g., "Color", "Size")
├── Swatch buttons (color dots or text buttons)
├── Selected state indicator
└── Out-of-stock disabled states
```

**Funky Spec:**
- Glow border on selected swatch
- Neon active ring (color-matched for color swatches)
- Spring scale animation on select
- Disabled swatches: subtle strikethrough with muted glow
- BEM: `.wc-variant-selector__*`

---

### Cart Blocks

#### T4.21 — `cart/CartItem.tsx`

**File:** `/src/app/components/blocks/cart/CartItem.tsx`  
**Used By:** `PageCart.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/cart/CartItem.md`

**Current Composition:**
```
CartItem
├── Product image (thumbnail)
├── Product title (link to product)
├── Variant info (if applicable)
├── Quantity controls (±)
├── Line price
└── Remove button (×)
```

**Funky Spec:**
- Subtle glow border on hover (don't distract from controls)
- Neon remove button (pink on hover)
- Glass row on hover
- BEM: `.wc-cart-item__*`

---

#### T4.22 — `cart/CartTotals.tsx`

**File:** `/src/app/components/blocks/cart/CartTotals.tsx`  
**Used By:** `PageCart.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/cart/CartTotals.md`

**Funky Spec:**
- Glass panel background
- Gradient accent on total line (pink→cyan)
- Neon glow "Proceed to Checkout" CTA
- Subtle dividers between lines
- BEM: `.wc-cart-totals__*`

---

### Design System Blocks (Priority — used everywhere)

#### T4.23 — `design/Card.tsx`

**File:** `/src/app/components/blocks/design/Card.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/design/Card.md`  
**Funky Spec:** Glow border hover variant, glass variant, spring hover lift  
**BEM:** `.wp-block-card__*`

---

#### T4.24 — `design/Accordion.tsx`

**File:** `/src/app/components/blocks/design/Accordion.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/design/Accordion.md`  
**Funky Spec:** Glow active item, gradient divider between items, glass panel content  
**BEM:** `.wp-block-accordion__*`

---

### Form Blocks (Priority — used in checkout, contact, newsletter)

#### T4.25 — `forms/Input.tsx`

**File:** `/src/app/components/blocks/forms/Input.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/forms/Input.md`  
**Funky Spec:** Neon cyan focus ring, glass background variant, gradient placeholder shimmer  
**BEM:** `.wp-block-input__*`

---

#### T4.26 — `forms/Select.tsx`

**File:** `/src/app/components/blocks/forms/Select.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/forms/Select.md`  
**Funky Spec:** Neon focus, glass dropdown panel, glow on open  
**BEM:** `.wp-block-select__*`

---

#### T4.27 — `forms/Checkbox.tsx`

**File:** `/src/app/components/blocks/forms/Checkbox.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/forms/Checkbox.md`  
**Funky Spec:** Neon checked state (cyan check on dark, pink on light), glow on focus  
**BEM:** `.wp-block-checkbox__*`

---

#### T4.28 — `forms/RadioGroup.tsx`

**File:** `/src/app/components/blocks/forms/RadioGroup.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/forms/RadioGroup.md`  
**Funky Spec:** Neon selected dot, glow ring on focus  
**BEM:** `.wp-block-radio-group__*`

---

#### T4.29 — `forms/QuantitySelector.tsx`

**File:** `/src/app/components/blocks/forms/QuantitySelector.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/forms/QuantitySelector.md`  
**Funky Spec:** Neon ± buttons, glass wrapper, glow on focus  
**BEM:** `.wc-quantity-selector__*`

---

### Feedback Blocks

#### T4.30 — `feedback/Toast.tsx`

**File:** `/src/app/components/blocks/feedback/Toast.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/feedback/Toast.md`  
**Funky Spec:** Glass toast container, neon accent by type (success=lime, error=pink, info=cyan)  
**BEM:** `.wp-block-toast__*`

---

#### T4.31 — `feedback/Alert.tsx`

**File:** `/src/app/components/blocks/feedback/Alert.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/feedback/Alert.md`  
**Funky Spec:** Glass panel, neon icon accent by severity, gradient border left  
**BEM:** `.wp-block-alert__*`

---

### Overlay Blocks

#### T4.32 — `overlay/Dialog.tsx`

**File:** `/src/app/components/blocks/overlay/Dialog.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/overlay/Dialog.md`  
**Funky Spec:** Glass modal panel, gradient header bar, neon close button, glass backdrop  
**BEM:** `.wp-block-dialog__*`

---

### Layout Blocks

#### T4.33 — `layout/Drawer.tsx`

**File:** `/src/app/components/blocks/layout/Drawer.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/layout/Drawer.md`  
**Funky Spec:** Glass panel, neon handle/close, spring open animation  
**BEM:** `.wp-block-drawer__*`

---

### Theme Blocks

#### T4.34 — `theme/Navigation.tsx`

**File:** `/src/app/components/blocks/theme/Navigation.tsx`  
**Guideline:** EXISTS → needs funky update  
**Funky Spec:** Neon hover underline (gradient pink→cyan), glow active state  
**BEM:** `.wp-block-navigation__*`

---

#### T4.35 — `theme/ThemeToggle.tsx`

**File:** `/src/app/components/blocks/theme/ThemeToggle.tsx`  
**Guideline:** CREATE → `/guidelines/blocks/theme/ThemeToggle.md`  
**Funky Spec:** Neon toggle animation, sun (yellow glow) / moon (cyan glow) states  
**BEM:** `.wp-block-theme-toggle__*`

---

## Structural

- [x] **T4.36** Delete duplicate text block guidelines (heading.md, list.md, paragraph.md lowercase variants) — verified: no lowercase duplicates exist, only PascalCase files
- [ ] **T4.37** Consider reorganizing guidelines to match component subdirectory structure (21 subdirs)
- [ ] **T4.38** Create shared "Funky Form Controls" guideline covering Input, Select, Checkbox, RadioGroup, Textarea, Switch — they share the neon focus pattern

---

## Remaining Blocks Without Guidelines (Lower Priority)

### display/ (6 components)
- `AspectRatio.tsx` — layout utility, no funky needed
- `Avatar.tsx` — glow border ring
- `Badge.tsx` — gradient variants, neon glow
- `Chart.tsx` — neon data series, glass tooltip
- `Countdown.tsx` — neon digits, glow separator
- `Table.tsx` — glass rows, neon header accent

### forms/ (remaining)
- `Label.tsx` — no funky needed
- `Switch.tsx` — neon track color
- `Textarea.tsx` — neon focus ring
- `Toggle.tsx` — neon active state
- `ToggleGroup.tsx` — neon selected, glow group

### forms-advanced/ (3 components)
- `Calendar.tsx` — glass panel, neon selected date
- `InputOTP.tsx` — neon focus per digit
- `Slider.tsx` — neon track and thumb

### interactive/ (5 components)
- `Carousel.tsx` — glow active slide, neon arrows
- `Collapsible.tsx` — glow expand state
- `Command.tsx` — glass command palette, neon results
- `Resizable.tsx` — neon handle
- `ScrollArea.tsx` — neon scrollbar track

### layout/ (remaining)
- `Modal.tsx` — glass panel, gradient header
- `Sheet.tsx` — glass panel
- `Sidebar.tsx` — glass panel, neon active nav

### overlay/ (remaining)
- `AlertDialog.tsx` — glass panel, gradient warning
- `ContextMenu.tsx` — glass menu
- `DropdownMenu.tsx` — glass dropdown, neon hover
- `EnquiryModal.tsx` — glass form, neon focus (EXISTS)
- `HoverCard.tsx` — glass card, glow border
- `Popover.tsx` — glass panel
- `Tooltip.tsx` — glass tooltip, neon border

### search/ (2 components)
- `ProductSearch.tsx` — neon focus, glass results
- `SearchAutocomplete.tsx` — glass dropdown, neon results highlight

### blog/ (1 component)
- `CategoryFilter.tsx` — neon active filter pill

### media/ (1 component)
- `VideoTestimonial.tsx` — glow video frame

### order/ (remaining)
- `AccountCreation.tsx` — glass panel, neon inputs
- `AdditionalFields.tsx` — neon inputs
- `AdditionalInformation.tsx` — glass info panel
- `AddressDetails.tsx` — glass address card
- `DownloadsSection.tsx` — glass file cards, neon download button
- `OrderSummary.tsx` (order/) — glass summary panel

### checkout/ui/ (4 components)
- `Checkbox.tsx` — neon variant for checkout context
- `CheckoutInput.tsx` — neon focus, checkout-specific styling
- `FloatingLabelInput.tsx` — neon floating label, glass input
- `RadioButton.tsx` — neon selected indicator