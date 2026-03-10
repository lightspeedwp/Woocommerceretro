# PageCheckout Template

**Last Updated:** February 23, 2026  
**Status:** ✅ Production Ready (Funky Redesign — Phase 5)  
**Category:** Template  
**Component:** `PageCheckout`  
**Location:** `/src/app/components/templates/PageCheckout.tsx`  
**Route:** `/checkout`

> **Funky CSS:** `/src/styles/sections/cart-checkout-funky.css` (680+ lines)  
> **Treatments:** Glassmorphism order summary, gradient step indicators, neon form focus states, glow payment method cards, gradient place-order CTA, floating orbs.

---

## 1. Overview

The checkout page is a multi-step form template designed to collect shipping, billing, and payment information securely and efficiently. It features a distraction-free layout (using `CheckoutLayout`) to minimize abandonment.

## 2. WordPress Parity

| React Template | WordPress Template |
|----------------|-------------------|
| `PageCheckout.tsx` | `page-checkout.html` / `woocommerce/checkout/form-checkout.php` |

## 3. Key Features

- **Multi-Step Flow:** Organized into distinct sections (Contact, Delivery, Address, Payment).
- **Distraction-Free:** Removes main navigation and footer links.
- **Responsive Layout:** Stacked on mobile, 2-column with sticky summary on desktop.
- **Guest Checkout:** Optional login/guest toggle.
- **Validation:** Integrated form validation logic.
- **Order Summary:** Sticky sidebar showing cart contents and totals.
- **Trust Elements:** Secure payment badges and reassurance text.

## 4. Component Structure

```tsx
<CheckoutLayout>
  <Container>
    <Heading>Checkout</Heading>
    
    <div className="flex flex-col lg:flex-row gap-16">
      {/* Left Column: Form */}
      <div className="flex-1">
        <CheckoutStep number="1" title="Contact">
          <ContactInfo />
        </CheckoutStep>
        
        <CheckoutStep number="2" title="Delivery">
          <DeliverySelector />
        </CheckoutStep>
        
        <CheckoutStep number="3" title="Address">
          <AddressForm />
        </CheckoutStep>
        
        <CheckoutStep number="4" title="Payment">
          <PaymentMethods />
        </CheckoutStep>
      </div>
      
      {/* Right Column: Summary */}
      <div className="lg:w-[clamp(20rem,30vw,25rem)]">
        <OrderSummary />
      </div>
    </div>
    
    <TrustBand />
  </Container>
</CheckoutLayout>
```

## 5. CSS Architecture

Uses utility classes and BEM components:

- `.wp-checkout-step`: Step container with number indicator.
- `.wp-checkout-summary`: Order summary card.
- `.wp-checkout-form`: Form styling wrapper.

## 6. Accessibility

- **Headings:** Proper hierarchy (H1 -> H3 steps).
- **Labels:** All inputs have associated labels.
- **Step Indicators:** Visible current step and progress.
- **Keyboard Navigation:** Logical tab order through form fields.
- **Validation Messages:** Errors announced and visibly linked to fields.

## 7. Responsive Behavior

- **Mobile:**
  - Order summary collapses/expands at top (accordion style).
  - Form fields use full width.
  - Sticky "Place Order" button at bottom (optional).
- **Desktop:**
  - 2-column layout.
  - Sticky sidebar for order summary.
  - Multi-column address fields (First/Last name).

## 8. Data Requirements

- **Cart State:** Fetches items and totals from `CartContext`.
- **User State:** Checks login status for pre-filling info.
- **Address Validation:** Optional integration with address lookup services.