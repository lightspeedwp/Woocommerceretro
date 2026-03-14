# Blocks Guidelines Gaps Task List

**Source:** A4 Blocks Coverage Audit (2026-02-21)  
**Status:** IN PROGRESS  
**Updated:** March 13, 2026 (Completed all P0 Checkout blocks)  
**Coverage:** 38% (43/115 components have guidelines)  
**Cross-Reference:** `/prompts/funky-redesign-orchestrator.md` Appendix C

---

## P0: Critical (Cart/Checkout/Product — blocks funky redesign Phases 4-5)

### Checkout Blocks (8 components, 8 guidelines created)

#### T4.1 — `checkout/CheckoutStep.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/checkout/CheckoutStep.tsx`  
**Used By:** `PageCheckout.tsx` — wraps each form section  
**Guideline:** ✅ `/guidelines/blocks/checkout/CheckoutStep.md`

**Created:** 2026-03-12  
**Comprehensive guideline:** Props, BEM classes, funky theme, accessibility, responsive, patterns, testing

---

#### T4.2 — `checkout/PaymentMethods.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/checkout/PaymentMethods.tsx`  
**Used By:** `PageCheckout.tsx`  
**Guideline:** ✅ `/guidelines/blocks/checkout/PaymentMethods.md`

**Created:** 2026-03-12  
**Comprehensive guideline:** Payment options, expandable fields, funky theme, validation patterns

---

#### T4.3 — `checkout/ShippingAddressForm.tsx` ✅ **COMPLETE** ✅ **COMPLETE**

**File:** `/src/app/components/blocks/checkout/ShippingAddressForm.tsx`  
**Used By:** `PageCheckout.tsx`  
**Guideline:** ✅✅ `/guidelines/blocks/checkout/ShippingAddressForm.md`

**CrCreateatedd:** 2026-03 2026-03-1313 (
**Cmrehenualsive guidly) 
**Cmp:**Prheps, BEMlssesiveg,etrdee:**he,drvssidrmior, retrspo styling,sive, validasbiolity, patte, dark nsode

---

#### T4.4 — `checkout/BillingAddressForm.tsx` ✅ **COMPLETE** ✅ **COMPLETE**

**File:** `/src/app/components/blocks/checkout/BillingAddressForm.tsx`  
**Used By:** `PageCheckout.tsx` (conditional — when "different billing" checked)  
**Guideline:** ✅✅ `/guidelines/blocks/checkout/BillingAddressForm.md`


**Created:** 2026-03-13
**CreatComprehesiveguidelined:** 2026-03-13 (manuhally)  
**Cored formpr pattehenrn,differencesive from guideline:** Billing address form,with me retrto theme, asshppasses

---

#### T4.5 — `checkout/OrderSummary.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/checkout/OrderSummary.tsx`  
**Used By:** `PageCheckout.tsx` (sticky right sidebar)  
**Guideline:** ✅ `/guidelines/blocks/checkout/OrderSummary.md`

**Created:** 2026-03-12  
**Comprehensive guideline:** Cart items display, totals breakdown, coupon input, funky glass panel theme

---

#### T4.6 — `checkout/CouponInput.tsx` ✅ **COMPLETE** ✅ **COMPLETE**

**File:** `/src/app/components/blocks/checkout/CouponInput.tsx`  
**Guideline:** ✅✅ `/guidelines/blocks/checkout/CouponInput.md`


**Created:** 2026-03-13
**CreatComprehesiveguidelined:** 2026-03-13 (maThree-stat UIually)  
**C(comprehenllapsed/expaveded/aplied) CartCuidentextinine:**Copegraion rodeinputro themretro e, styvaling,dvalidatiofloo sates

---

#### T4.7 — `checkout/ContactInfo.tsx` ✅ **COMPLETE** ✅ **COMPLETE**

**File:** `/src/app/components/blocks/checkout/ContactInfo.tsx`  
**Guideline:** ✅✅ `/guidelines/blocks/checkout/ContactInfo.md`


**Created:** 2026-03-13 (maCruall) 
**Comrehensive guidelineated:** Emai2026-03-13 /
**Comphorehcntactrmwivhretro guideline:** Logged-npreviwv gt fm,newsletterhekbx, retro heme, cessiblity

---

#### T4.8 — `checkout/DeliveryMethodSelector.tsx` ✅ **COMPLETE** ✅ **COMPLETE**

**File:** `/src/app/components/blocks/checkout/DeliveryMethodSelector.tsx`  
**Guideline:** ✅✅ `/guidelines/blocks/checkout/DeliveryMethodSelector.md`


**Created:** 2026-03-13
**CreatComprehensive gidelied:** 2026-03-13 (manualToggly) e 
**Cpattmpehen,cnsivetrolguidline:** Delivry composelet, ARIAgroup,retro eon withow, rerero stying

---

### Single Product Blocks (4 priority, more in P1)

#### T4.9 — `single-product/ProductAddToCart.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/single-product/ProductAddToCart.tsx`  
**Used By:** `SingleProduct.tsx`, `VariableProduct.tsx`  
**Guideline:** ✅ `/guidelines/blocks/single-product/ProductAddToCart.md`

**Created:** 2026-03-13  
**Comprehensive guideline:** Add to cart controls with quantity, variations, subscription, trust badges, retro styling

**Current Composition:**
```
ProductAddToCart
├── Quantity selector (± buttons + input)
├── "Add to Cart" button (primary)
├── "Buy Now" button (secondary, optional)
└── Stock status indicator
```

**Retro Spec:**
- Neon pulse animation on successful add (brief glow burst) ✅
- Glow button hover state ✅
- Neon quantity ± buttons ✅
- Glass stock badge ✅
- BEM: `.wc-add-to-cart__*` ✅

---

#### T4.10 — `single-product/ProductInfo.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/single-product/ProductInfo.tsx`  
**Guideline:** ✅ `/guidelines/blocks/single-product/ProductInfo.md`  
**Created:** 2026-03-13  
**Comprehensive guideline:** Product title, star rating, price display (sale/regular), short description, retro styling, dark mode, accessibility  
**BEM:** `.wc-product-info__*`

---

#### T4.11 — `single-product/ProductTabs.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/single-product/ProductTabs.tsx`  
**Guideline:** ✅ `/guidelines/blocks/single-product/ProductTabs.md`  
**Created:** 2026-03-13  
**Comprehensive guideline:** Desktop tabs with gradient underline, mobile accordion, glass panels, retro styling, accessibility, animations  
**Retro Features:** Pink→Cyan gradient underline, glass morphism panels, smooth transitions  
**BEM:** `.wc-product-tabs__*`

---

#### T4.12 — `single-product/ProductPrice.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/single-product/ProductPrice.tsx`  
**Guideline:** ✅ `/guidelines/blocks/single-product/ProductPrice.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Regular and sale price display, strikethrough original, Typography h3, dark mode, BEM classes, currency formatting, accessibility, responsive design, testing, future enhancements  
**Features:** Sale price prominent, strikethrough original, R currency symbol, 2 decimal places, semantic h3 heading  
**BEM:** `.wc-product-price__*`

---

## P1: High (Archive/Order/Product blocks)

### Archive Blocks

#### T4.13 — `archive/ActiveFilters.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/archive/ActiveFilters.tsx`  
**Guideline:** ✅ `/guidelines/blocks/archive/ActiveFilters.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Filter chip display, individual remove buttons, Clear All action, neon pill badges, glow dismiss effects, spring animations, filter detection logic, chip generation patterns, dark mode, accessibility (WCAG AA), responsive design, keyboard navigation, testing, future enhancements  
**Features:** Conditional rendering (null when no filters), 6 filter types (categories, colors, sizes, rating, stock, price), Phosphor X icon, BEM classes, retro styling  
**Retro Theme:** Neon pill badges with purple glow, hover animations on remove buttons, spring remove animation  
**BEM:** `.wp-active-filters__*`, `.wp-filter-chip__*`

---

#### T4.14 — `archive/EmptyResults.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/archive/EmptyResults.tsx`  
**Guideline:** ✅ `/guidelines/blocks/archive/EmptyResults.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Empty state panel, search icon, title/description, Clear All Filters CTA, glass panel effect, gradient illustration accent, floating orb animation, dark mode, accessibility (WCAG AA), responsive design, keyboard navigation, testing, future enhancements  
**Features:** Conditional rendering (shown when no products match filters), Phosphor MagnifyingGlass icon, Typography h3 + body, Button primary variant, onReset callback, optional className  
**Retro Theme:** Glass empty state panel with gradient background, gradient icon accent with floating orb animation, subtle glow effects, neon button hover  
**BEM:** `.wp-empty-results__*`

---

#### T4.15 — `archive/MobileFilterDrawer.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/archive/MobileFilterDrawer.tsx`  
**Guideline:** ✅ `/guidelines/blocks/archive/MobileFilterDrawer.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Full-screen mobile drawer, slide-in animation, backdrop overlay, body scroll lock, gradient header, FilterSidebar integration, result count footer, Clear All/Show Results actions, dark mode, accessibility (WCAG AA), responsive design, keyboard navigation, testing, future enhancements  
**Features:** Conditional rendering (null when closed), useEffect body scroll lock, FilterSidebar embedded, X + SlidersHorizontal icons, Typography + Button components, result count display (optional), mobile/tablet responsive  
**Retro Theme:** Full-screen glass overlay with backdrop blur, gradient header (purple → pink), neon filter controls, slide-in animation from right, sticky footer  
**BEM:** `.woocommerce-mobile-filter-drawer__*`

---

### Archive Blocks — ✅ **COMPLETE** (3/3 - 100%)

**Status:** All archive blocks documented!

- ✅ T4.13 — ActiveFilters.tsx
- ✅ T4.14 — EmptyResults.tsx  
- ✅ T4.15 — MobileFilterDrawer.tsx

---

### Order Blocks

#### T4.16 — `order/OrderDetails.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/order/OrderDetails.tsx`  
**Guideline:** ✅ `/guidelines/blocks/order/OrderDetails.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Order confirmation summary with line items, quantities, prices, shipping details, order total, glass panels, gradient heading, neon text accents (cyan/pink/lime), glow border on total, dark mode, accessibility (WCAG AA), responsive design, testing, future enhancements  
**Features:** Props for items/shipping/total (optional with sample data defaults), product links (React Router), quantity display, two-column layout, WordPress semantic classes  
**Retro Theme:** Glass detail sections with subtle glow on hover, gradient dividers (purple → pink heading text), neon text colors, lime green glow border on total row with pulse animation  
**BEM:** `.wp-order-details__*`

---

#### T4.17 — `order/OrderStatus.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/order/OrderStatus.tsx`  
**Guideline:** ✅ `/guidelines/blocks/order/OrderStatus.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Order confirmation banner with "Order received" heading and dynamic status message, glass panel background, lime glow border with pulse animation, gradient heading text, neon lime message, dark mode, accessibility (WCAG AA), responsive design, testing, future enhancements  
**Features:** Single prop (status - optional), 4 status message variants (processing/completed/on-hold/pending), static display component, WordPress semantic classes, minimal dependencies  
**Retro Theme:** Glass panel background, lime green glow border with 2s pulse animation, gradient text (purple → pink) on heading, neon lime status message text  
**BEM:** `.wc-order-status__*`

---

#### T4.18 — `order/OrderStatusHeader.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/order/OrderStatusHeader.tsx`  
**Guideline:** ✅ `/guidelines/blocks/order/OrderStatusHeader.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Order metadata header with order number, date, total, email, payment method in grid of glass panels with neon accents (pink/cyan/lime), gradient heading, confirmation message, responsive grid (1-3 columns), dark mode, accessibility (WCAG AA), testing, future enhancements  
**Features:** 5 required props (orderNumber/date/total/email/paymentMethod), helper function for item creation, Typography component integration, label/value pairs, WordPress semantic classes  
**Retro Theme:** Glass panel background on all items, purple glow border on header panel, gradient text (purple → pink) on heading, neon text colors (order#=pink, date=cyan, total=lime, email=cyan, payment=pink), hover glow effects  
**BEM:** `.wc-order-status-header__*`

---

### Order Blocks — ✅ **COMPLETE** (3/3 - 100%)

**Status:** All order blocks documented!

- ✅ T4.16 — OrderDetails.tsx
- ✅ T4.17 — OrderStatus.tsx  
- ✅ T4.18 — OrderStatusHeader.tsx

---

### Product Blocks

#### T4.19 — `product/CompareButton.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/product/CompareButton.tsx`  
**Guideline:** ✅ `/guidelines/blocks/product/CompareButton.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Toggle button for product comparison with neon cyan glow on active state, spring animation on click, icon-only variant, 3 size variants (sm/md/lg), ComparisonContext integration, event propagation prevention, dark mode, accessibility (WCAG AA), responsive design, testing, future enhancements  
**Features:** Product prop (required), variant (default/icon-only), size variants, dynamic icons (Scale default → Check active), text labels, ARIA attributes (label, pressed), stopPropagation on click  
**Retro Theme:** Neon cyan glow on active state with box-shadow + text-shadow, spring scale animation (0.95 → 1.05 → 1.0) with cubic-bezier easing, glass panel background with purple/pink gradient tint, hover glow effects  
**BEM:** `.wc-compare-button`

---

#### T4.20 — `product/VariantSelector.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/product/VariantSelector.tsx`  
**Guideline:** ✅ `/guidelines/blocks/product/VariantSelector.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Product variant selector with 3 display types (button/swatch/select), neon glow on selected state, spring scale animation, smart contrast checkmarks (luminance detection), stock availability, diagonal strikethrough for disabled swatches, dark mode, accessibility (WCAG AA), responsive design, testing, future enhancements  
**Features:** ProductAttribute prop (slug/name/displayType/options), selected state record, onChange callback, button selector (text attributes), swatch selector (color with hex codes), dropdown select (complex attributes), stock availability (available boolean), checkmark overlay on selected swatches, current selection in label  
**Retro Theme:** Neon cyan glow on selected state with box-shadow + inset shadow, spring scale animation (1.0 → 1.1 → 1.0) with cubic-bezier easing, glass panel backgrounds with purple/pink gradient tint, hover glow effects, smart contrast checkmarks (black for light backgrounds via luminance calculation, white for dark), diagonal red strikethrough on disabled swatches with glow  
**BEM:** `.wc-variant-selector__*`

---

### Product Blocks — ✅ **COMPLETE** (2/2 - 100%)

**Status:** All product blocks documented!

- ✅ T4.19 — CompareButton.tsx
- ✅ T4.20 — VariantSelector.tsx

---

### Cart Blocks

#### T4.21 — `cart/CartItem.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/cart/CartItem.tsx`  
**Used By:** `PageCart.tsx`  
**Guideline:** ✅ `/guidelines/blocks/cart/CartItem.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Individual cart line item with product thumbnail, title, variant info, quantity controls, price, remove/wishlist buttons, glass panel on hover, neon remove button, responsive layout, dark mode, accessibility (WCAG AA), testing, future enhancements  
**Features:** CartItemData prop (id/slug/name/image/price/quantity/variant/inStock/maxQuantity), onUpdateQuantity callback, onRemove callback, optional onMoveToWishlist callback, automatic line total calculation, ImageWithFallback integration, QuantitySelector integration, product links to single product page  
**Retro Theme:** Glass panel background on hover with purple/pink gradient tint and glow border, neon pink remove button on hover with icon drop-shadow, neon cyan total price with text-shadow, subtle hover effects on all interactive elements  
**BEM:** `.wc-cart-item__*`

---

#### T4.22 — `cart/CartTotals.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/cart/CartTotals.tsx`  
**Guideline:** ✅ `/guidelines/blocks/cart/CartTotals.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Order summary panel with totals breakdown (subtotal/shipping/tax/discount/total), newsletter CTA, checkout button with lock icon, shipping threshold info, glass panel background, neon gradient on total line, prominent checkout CTA with glow effect, responsive layout, dark mode, accessibility (WCAG AA), testing, future enhancements  
**Features:** 5 numeric props (subtotal/shipping/tax/discount/total), free shipping display (0 = "Free"), conditional discount row (only shown if >0), gradient divider before total, NewsletterCTA integration (compact variant), Button integration (primary variant with neon glow), Typography h4 heading, Lock/Truck icons from Phosphor  
**Retro Theme:** Glass panel background with purple/pink gradient tint and subtle border, neon cyan gradient on total value with text-shadow glow, gradient divider (purple → pink) with box-shadow, neon glow checkout button with hover lift effect, lime/green discount value with text-shadow  
**BEM:** `.wc-cart-totals__*`

---

### Cart Blocks — ✅ **COMPLETE** (2/2 - 100%)

**Status:** All cart blocks documented!

- ✅ T4.21 — CartItem.tsx
- ✅ T4.22 — CartTotals.tsx

---

### Design System Blocks (Priority — used everywhere)

#### T4.23 — `design/Card.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/design/Card.tsx`  
**Guideline:** ✅ `/guidelines/blocks/design/Card.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Flexible container component with compound pattern (Card/CardHeader/CardTitle/CardDescription/CardContent/CardFooter/CardAction), glass panel background, glow border on hover, spring lift animation, clickable variant, responsive design, dark mode, accessibility (WCAG AA), testing, future enhancements  
**Features:** 7 component parts (all share CardPartProps interface with className/children/id/onClick/style), data-slot attributes for testing, cn utility integration, semantic HTML (h4 for title, p for description), BEM CSS classes  
**Retro Theme:** Glass panel background with purple/pink gradient tint and subtle border, glow border on hover with box-shadow, spring lift animation (translateY -2px) on hover, active state press-down effect, border dividers between header/content/footer with gradient  
**BEM:** `.wp-block-card__*`

---

#### T4.24 — `design/Accordion.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/design/Accordion.tsx`  
**Guideline:** ✅ `/guidelines/blocks/design/Accordion.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Collapsible content with compound pattern (Accordion/AccordionItem/AccordionTrigger/AccordionContent), Radix UI primitives, glass panel backgrounds, neon glow on active items, gradient dividers, smooth expand/collapse animations, CaretDown icon rotation, single/multiple modes, controlled/uncontrolled, responsive design, dark mode, accessibility (WCAG AA), testing, future enhancements  
**Features:** 4 component parts (Accordion root with type/value/defaultValue/onValueChange/collapsible props, AccordionItem with value/disabled, AccordionTrigger with children, AccordionContent with children), Radix UI integration (@radix-ui/react-accordion), BEM CSS classes, icon auto-rotation  
**Retro Theme:** Glass panel backgrounds on items, neon glow on active items (purple/pink gradient with box-shadow inset), gradient dividers between items (purple → pink), trigger hover with neon cyan color, icon rotation 180deg when open, smooth animations (accordion-down/up keyframes)  
**BEM:** `.wp-block-accordion__*`

---

### Design System Blocks — ✅ **COMPLETE** (2/2 - 100%)

**Status:** All design blocks documented!

- ✅ T4.23 — Card.tsx
- ✅ T4.24 — Accordion.tsx

---

### Form Blocks (Priority — used in checkout, contact, newsletter)

#### T4.25 — `forms/Input.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/forms/Input.tsx`  
**Guideline:** ✅ `/guidelines/blocks/forms/Input.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** WordPress-aligned text input with full ARIA support, forwarded refs for form libraries, glass background variant, neon cyan focus ring, gradient placeholder shimmer effect, all HTML input types supported (text/email/password/search/number/url/tel/date), error/disabled/readonly states, responsive design, dark mode, accessibility (WCAG AA), testing, future enhancements  
**Features:** forwardRef for ref forwarding, extends React.InputHTMLAttributes (all native props supported), BEM CSS classes, className composition (wp-block-input + funky-input-glow + custom)  
**Retro Theme:** Glass background with purple/pink gradient tint and subtle border, neon cyan focus ring with box-shadow glow (0 0 0 3px rgba cyan), gradient placeholder shimmer animation (2s linear infinite), error state with red border/background, disabled state with reduced opacity  
**BEM:** `.wp-block-input__*`

---

#### T4.26 — `forms/Select.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/forms/Select.tsx`  
**Guideline:** ✅ `/guidelines/blocks/forms/Select.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Custom select dropdown with compound component pattern (9 parts: Select/SelectTrigger/SelectValue/SelectContent/SelectItem/SelectGroup/SelectLabel/SelectSeparator/SelectScrollButtons), controlled/uncontrolled support, glass dropdown panel, neon focus ring, glow effect when open, check mark indicators, click outside to close, full keyboard navigation, responsive design, dark mode, accessibility (WCAG AA), testing, future enhancements  
**Features:** Context-based state management (SelectContext with value/open/triggerRef/labelMap), label registration system, forwarded refs on all components, icon rotation (ChevronDown 180deg when open), check marks on selected items (Check icon), group/label/separator support, click outside listener, position popper  
**Retro Theme:** Glass panel background on trigger with purple/pink gradient tint, neon cyan focus ring on trigger (0 0 0 3px rgba cyan), glass dropdown panel with stronger glow and backdrop-filter blur, gradient separator lines, neon cyan selected item background, check mark indicators, icon rotation animation, hover effects with purple tint  
**BEM:** `.wp-block-select-*`

---

#### T4.27 — `forms/Checkbox.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/forms/Checkbox.tsx`  
**Guideline:** ✅ `/guidelines/blocks/forms/Checkbox.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Custom checkbox with controlled/uncontrolled support, neon checked state (cyan check on dark, pink on light), glow on focus, spring animation on check/uncheck, full accessibility via hidden native input, responsive design, dark mode, testing, future enhancements  
**Features:** Hidden native input (sr-only for accessibility, form submission), visual wrapper div with click handler, SVG check mark icon (polyline), controlled/uncontrolled state management, forwarded refs, state classes (is-checked, is-disabled)  
**Retro Theme:** Glass background with purple/pink gradient on unchecked box, neon cyan border on checked (var(--retro-color-neon-cyan)), box-shadow glow (0 0 10px + inset), spring animation keyframes (cubic-bezier 0.68, -0.55, 0.265, 1.55), focus ring on hidden input transfers to visual box (outline 2px cyan), hover state with gradient shift  
**BEM:** `.wp-block-checkbox__*`

---

#### T4.28 — `forms/RadioGroup.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/forms/RadioGroup.tsx`  
**Guideline:** ✅ `/guidelines/blocks/forms/RadioGroup.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** Compound component (RadioGroup + RadioGroupItem) with controlled/uncontrolled support, neon selected dot, glow ring on focus, spring animation on selection, full accessibility via context and ARIA attributes, responsive design, dark mode, testing, future enhancements  
**Features:** Context-based state management (RadioGroupContext with value/onValueChange/name/disabled), button elements with role="radio", aria-checked attributes, data-state attributes, dot indicator span (is-visible/is-hidden classes), forwarded refs on both components, disabled state (group-level + item-level)  
**Retro Theme:** Glass background with purple/pink gradient on unchecked circle, neon cyan border on checked (var(--retro-color-neon-cyan)), box-shadow glow (0 0 10px + inset), dot indicator (10px circle) with spring animation keyframes (cubic-bezier 0.68, -0.55, 0.265, 1.55), focus ring (outline 2px cyan), hover state with gradient shift, border-radius 50% (perfect circle)  
**BEM:** `.wp-block-radio-group__*`, `.wp-block-radio-item__*`

---

#### T4.29 — `forms/QuantitySelector.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/forms/QuantitySelector.tsx`  
**Guideline:** ✅ `/guidelines/blocks/forms/QuantitySelector.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** WooCommerce quantity selector with increment/decrement buttons, neon ± buttons, glass wrapper, glow on focus, min/max validation (1-99 default), disabled state handling, full accessibility via ARIA labels, responsive design, dark mode, testing, future enhancements  
**Features:** Number input field (type="number", center-aligned), Minus/Plus buttons (Phosphor icons), validation logic (min/max bounds checking), input change handler (parseInt validation), disabled button states at boundaries, ARIA labels on all controls  
**Retro Theme:** Glass wrapper with purple/pink gradient background, neon cyan focus ring on container (0 0 0 3px + 0 0 20px glow), button backgrounds with gradient (hover brighter, active cyan tint), button hover lift (translateY -1px), seamless borders (no gaps), button active state with inset glow, disabled container opacity 0.5  
**BEM:** `.wc-quantity-selector__*`

🎉 **FORMS BLOCKS COMPLETE:** 5/5 (100%)

---

### Feedback Blocks

#### T4.30 — `feedback/Toast.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/feedback/Toast.tsx`  
**Guideline:** ✅ `/guidelines/blocks/feedback/Toast.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** WordPress toast notification system using Sonner library with automatic dark mode detection, glass container, neon accent by type (success=lime, error=pink, info=cyan, warning=yellow), spring hover animation on action buttons, full accessibility via ARIA live regions, responsive design, dark mode, testing, future enhancements  
**Features:** Toaster provider component (setup once), toast() function API (success/error/info/warning/loading methods), MutationObserver for dark mode detection (watches <html> .dark class), promise toast support, action/cancel buttons, programmatic control (dismiss/update), custom duration/position  
**Retro Theme:** Glass container with purple/pink gradient background, backdrop-filter blur 10px, neon left border (2px) with color by type (lime/pink/cyan/yellow), box-shadow glow (0 0 20px) matching border color, action button with spring hover (scale 1.05, cubic-bezier), slide-in animation (translateX 100% → 0), toast-specific CSS variables (--normal-bg, --normal-text, --normal-border)  
**BEM:** `.wp-block-toast__*`

---

#### T4.31 — `feedback/Alert.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/feedback/Alert.tsx`  
**Guideline:** ✅ `/guidelines/blocks/feedback/Alert.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** WordPress alert/banner compound component (Alert + AlertTitle + AlertDescription), glass panel, neon icon accent by severity, gradient border left, variant support (default/info/success/warning/error), full accessibility via ARIA role attributes, responsive design, dark mode, testing, future enhancements  
**Features:** Alert container with role="alert", AlertTitle (h5 element), AlertDescription (div element), variant prop mapping to BEM classes, onClick handler support (dismissible), custom role override, forwarded refs on all 3 components  
**Retro Theme:** Glass panel with purple/pink gradient background, backdrop-filter blur 10px, neon left border (4px) with color by variant (cyan/lime/yellow/pink), border gradient effect (vertical fade from full to 50% opacity), box-shadow glow (0 0 20px) matching variant color, title semibold 16px, description 14px  
**BEM:** `.wp-block-alert__*`

🎉 **FEEDBACK BLOCKS COMPLETE:** 2/2 (100%)

---

### Overlay Blocks

#### T4.32 — `overlay/Dialog.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/overlay/Dialog.tsx`  
**Guideline:** ✅ `/guidelines/blocks/overlay/Dialog.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** WordPress modal dialog compound component (9 parts: Dialog + DialogTrigger + DialogPortal + DialogOverlay + DialogContent + DialogClose + DialogHeader + DialogFooter + DialogTitle + DialogDescription), glass modal panel, gradient header bar, neon close button, glass backdrop, controlled/uncontrolled state, portal rendering, keyboard handling (Escape), body scroll lock, full accessibility via ARIA attributes  
**Features:** Dialog root (context provider with controlled/uncontrolled state), DialogTrigger (button or asChild clone), DialogPortal (createPortal to document.body), DialogOverlay (click-to-close backdrop), DialogContent (auto close button + Escape key + scroll lock), DialogClose (close button component), DialogHeader/Footer (sections), DialogTitle (h2), DialogDescription (p), forwarded refs on all components  
**Retro Theme:** Glass modal panel with purple/pink gradient background, backdrop-filter blur 20px, neon cyan border (1px), gradient header bar (purple → pink), close button (X) in top-right circle (32px) with neon cyan border and hover glow, backdrop overlay (rgba black 0.7, blur 8px), box-shadow glow (0 0 30px cyan), zoom-in animation (scale 0.95 → 1), overlay fade-in animation  
**BEM:** `.wp-block-dialog__*`

🎉 **OVERLAY BLOCKS COMPLETE:** 1/1 (100%)

---

### Layout Blocks

#### T4.33 — `layout/Drawer.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/layout/Drawer.tsx`  
**Guideline:** ✅ `/guidelines/blocks/layout/Drawer.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** WordPress mobile-first drawer component (bottom slide-up sheet variant), glass panel, neon handle/close, spring open animation, controlled/uncontrolled state, portal rendering, keyboard handling (Escape), body scroll lock, full accessibility via ARIA attributes, wrapper around Sheet component with side='bottom' default for mobile-optimized UI patterns  
**Features:** Drawer root (alias for Sheet), DrawerTrigger (alias for SheetTrigger), DrawerClose (alias for SheetClose), DrawerContent (custom, defaults side='bottom'), DrawerHeader/Footer/Title/Description (aliases for Sheet), 8-part compound component, portal to document.body, body scroll lock, Escape key handling, touch-optimized (44px min tap targets)  
**Retro Theme:** Glass panel with purple/pink gradient background, backdrop-filter blur 20px, neon cyan border (1px, no bottom border), border-radius 16px (top corners only for bottom drawer), visual handle indicator (top center, 40px wide, 4px tall, gradient cyan→purple), spring slide-up animation (cubic-bezier spring easing), box-shadow glow (0 0 30px cyan + 0 -10px 20px black shadow), auto-close button (X) with neon styling  
**BEM:** `.wp-block-drawer__*`

🎉 **LAYOUT BLOCKS COMPLETE:** 1/1 (100%)

---

### Theme Blocks

#### T4.34 — `theme/Navigation.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/theme/Navigation.tsx`  
**Guideline:** ✅ `/guidelines/blocks/theme/Navigation.md` (UPDATED v3.0)  
**Updated:** 2026-03-14  
**Comprehensive guideline:** WordPress navigation menu block with horizontal/vertical orientation, nested submenus, mega menu support, mobile toggle (hamburger), active state tracking, neon hover underline (gradient pink→cyan), glow active state, full keyboard navigation  
**Features:** Navigation component with MenuItem interface (id/title/url/megaMenu/children), orientation (horizontal/vertical), spacing (sm/md/lg), alignment (start/center/end), mobile toggle (hamburger icon with X close), mega menu integration (5 components: Shop/Blog/About/Deals/Contact), nested submenus (unlimited depth), active state tracking via useLocation, keyboard accessible  
**Retro Theme:** Neon hover underline with gradient (pink→cyan, 2px height, 300ms transition, cubic-bezier easing), glow active state (cyan text-shadow 0 0 10px, cyan text color), glass panel submenus (backdrop-filter blur 20px, purple/pink gradient background, neon cyan border 1px, border-radius 8px, fade-in animation), mobile toggle with neon styling (glass background, cyan border, hover glow)  
**BEM:** `.wp-block-navigation__*`

🎯 **THEME BLOCKS PROGRESS:** 1/2 (50%)

---

#### T4.35 — `theme/ThemeToggle.tsx` ✅ **COMPLETE**

**File:** `/src/app/components/blocks/theme/ThemeToggle.tsx`  
**Guideline:** ✅ `/guidelines/blocks/theme/ThemeToggle.md`  
**Created:** 2026-03-14  
**Comprehensive guideline:** WordPress theme mode toggle button with sun (light mode) / moon (dark mode) icon states, neon toggle animation, sun (yellow glow) / moon (cyan glow) states, localStorage persistence, system preference detection, smooth icon transitions  
**Features:** Self-contained component (no props), ThemeContext integration (useTheme hook), toggleMode() function, Sun/Moon icons from @phosphor-icons, localStorage persistence (theme-mode key), system preference detection (prefers-color-scheme), HTML class toggling (.light/.dark), event propagation stopped, keyboard accessible  
**Retro Theme:** Neon toggle animation (rotate -180deg→0deg + fade, 300ms cubic-bezier), sun yellow glow (dark mode, #fbbf24 color, drop-shadow 0 0 8px yellow, pulsing animation 2s infinite), moon cyan glow (light mode, #00d9ff color, drop-shadow 0 0 8px cyan, pulsing animation 2s infinite), glass background (purple tint, rgba(139,92,246,0.1)), neon border (cyan 1px, changes to yellow on dark mode hover), hover effects (scale 1.1, intensified glow, enhanced border/box-shadow)  
**BEM:** `.wp-block-theme-toggle__*`

🎉 **THEME BLOCKS COMPLETE:** 2/2 (100%)

🎊 **🎊 🎊 ALL P1 HIGH PRIORITY BLOCKS COMPLETE: 35/35 (100%) 🎊 🎊 🎊**

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