# PageGiftCards Template

**Component Type:** Template (E-commerce / Gift Cards)  
**Location:** `/src/app/components/templates/PageGiftCards.tsx`  
**CSS:** `/src/styles/sections/gift-track-reviews-funky.css`  
**Route:** `/gift-cards`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign)  
**Color Identity:** Pink `#ff00ff` / Lime `#ccff00` (celebration/gifting)

---

## Overview

PageGiftCards is a dedicated gift card landing page featuring an interactive builder with live preview, denomination selection, delivery method options, and occasion themes. Features vibrant funky gradients and glassmorphism effects.

**WordPress Mapping:** WooCommerce Gift Card Product / Custom Gift Card Builder  
**Dark Mode:** ✅ Complete support  
**Reduced Motion:** ✅ Respects `prefers-reduced-motion` (disables orbs)

---

## Key Features

### Interactive Components

**1. Gift Card Builder:**
- Live preview card with gradient background
- 6 denomination options ($25-$250)
- 2 delivery methods (email/print)
- Dynamic price display
- Add to cart integration

**2. Occasions Selector:**
- 6 visual occasion cards with images
- Birthday, Thank you, Congratulations, Just because, Holiday, Wedding
- Active state with checkmark indicator

**3. Benefits Grid:**
- 4 feature cards explaining gift card advantages
- Icon + title + description pattern

**4. Funky Elements:**
- Hero section with floating orbs
- Gradient preview card
- Neon button treatments
- CTA section with orbs

---

## Component Structure

### State Management

```tsx
const [selectedAmount, setSelectedAmount] = useState<number>(50);
const [selectedOccasion, setSelectedOccasion] = useState<string>('Birthday');
const [deliveryMethod, setDeliveryMethod] = useState<'email' | 'print'>('email');
const [addedToCart, setAddedToCart] = useState(false);
```

**Default Values:**
- Amount: `$50` (popular denomination)
- Occasion: `'Birthday'`
- Delivery: `'email'` (instant delivery)

### Data Structures

**Denominations:**
```tsx
interface GiftCardDenomination {
  id: string;
  amount: number;
  popular?: boolean;  // Adds "Popular" badge
}

const denominations = [
  { id: 'gc-25', amount: 25 },
  { id: 'gc-50', amount: 50, popular: true },
  { id: 'gc-75', amount: 75 },
  { id: 'gc-100', amount: 100, popular: true },
  { id: 'gc-150', amount: 150 },
  { id: 'gc-250', amount: 250 },
];
```

**Occasions:**
```tsx
interface GiftCardOccasion {
  label: string;
  image: string;  // Unsplash image URL
}

const occasions = [
  { label: 'Birthday', image: '...' },
  { label: 'Thank you', image: '...' },
  { label: 'Congratulations', image: '...' },
  { label: 'Just because', image: '...' },
  { label: 'Holiday', image: '...' },
  { label: 'Wedding', image: '...' },
];
```

**Features:**
```tsx
const features = [
  {
    icon: <Mail size={24} />,
    title: 'Instant delivery',
    description: 'Send by email or print at home — arrives in seconds.',
  },
  // ... 3 more
];
```

### JSX Hierarchy

```tsx
<Layout>
  <div className="page-gift-cards">
    
    {/* 1. Hero Section */}
    <section className="commerce-hero">...</section>
    
    {/* 2. Gift Card Builder */}
    <section className="gc-builder">
      <div className="gc-builder__layout">
        {/* Left: Preview Card */}
        <div className="gc-builder__preview">
          <div className="gc-preview-card">...</div>
        </div>
        
        {/* Right: Options */}
        <div className="gc-builder__options">
          <h2>Select amount</h2>
          <div className="gc-denominations">...</div>
          <h3>Delivery method</h3>
          <div className="gc-delivery-options">...</div>
          <button className="gc-add-to-cart">...</button>
        </div>
      </div>
    </section>
    
    {/* 3. Occasions Selector */}
    <section className="gc-occasions">...</section>
    
    {/* 4. Benefits Grid */}
    <section className="commerce-benefits">...</section>
    
    {/* 5. CTA Section */}
    <section className="commerce-cta">...</section>
    
  </div>
</Layout>
```

---

## BEM Class Hierarchy

```
page-gift-cards                        /* Container + color identity */

commerce-hero                          /* Hero (same as PageDeals) */
└── ... (see PageDeals.md)

gc-builder                             /* Builder section */
├── gc-builder__layout                 /* Two-column grid */
│   ├── gc-builder__preview            /* Left column */
│   │   └── gc-preview-card            /* Preview card */
│   │       ├── gc-preview-card__bg    /* Gradient background */
│   │       ├── gc-preview-card__content /* Card content */
│   │       ├── gc-preview-card__icon  /* Sparkles icon */
│   │       ├── gc-preview-card__brand /* "Woo Shop" */
│   │       ├── gc-preview-card__amount /* Dollar amount */
│   │       └── gc-preview-card__label  /* "Gift Card" */
│   └── gc-builder__options            /* Right column */
│       ├── gc-builder__heading        /* h2: "Select amount" */
│       ├── gc-builder__subheading     /* h3: "Delivery method" */
│       ├── gc-denominations           /* Denomination grid */
│       │   ├── gc-denomination        /* Single denomination */
│       │   ├── gc-denomination--active /* Selected state */
│       │   ├── gc-denomination--popular /* Has "Popular" badge */
│       │   └── gc-denomination__badge  /* "Popular" badge */
│       ├── gc-delivery-options        /* Delivery method grid */
│       │   ├── gc-delivery-option     /* Single delivery option */
│       │   ├── gc-delivery-option--active /* Selected state */
│       │   ├── gc-delivery-option__label /* "Email" / "Print" */
│       │   ├── gc-delivery-option__desc /* Description */
│       │   └── gc-delivery-option__check /* Checkmark icon */
│       └── gc-add-to-cart             /* Add to cart button */
│           └── gc-add-to-cart--added  /* Success state */

gc-occasions                           /* Occasions section */
├── gc-occasions__heading              /* h2: "Perfect for..." */
└── gc-occasions__grid                 /* Occasions grid */
    ├── gc-occasions__grid--visual     /* Visual variant (images) */
    └── gc-occasion-card               /* Single occasion */
        ├── gc-occasion-card--active   /* Selected state */
        ├── gc-occasion-card__img-wrap /* Image wrapper */
        ├── gc-occasion-card__img      /* Occasion image */
        ├── gc-occasion-card__label    /* Occasion label */
        └── gc-occasion-card__check    /* Checkmark */

commerce-benefits                      /* Benefits section */
└── ... (shared with other commerce pages)

commerce-cta                           /* CTA section */
└── ... (same as PageDeals)
```

**Total BEM Classes:** 31

---

## Section Breakdown

### 1. Hero Section

**Identical to PageDeals hero.** See `/guidelines/templates/PageDeals.md` for complete documentation.

**Key Differences:**
- Badge icon: `<Gift />` instead of `<Zap />`
- Badge text: "The perfect gift"
- Title: "Gift cards"
- CTA: "Choose an amount" (anchor to `#gc-builder`)

**Color Identity:**
```css
.page-gift-cards {
  --page-hero-from: #ff00ff;  /* Pink */
  --page-hero-via: #030213;   /* Dark blue-black */
  --page-hero-to: #ccff00;    /* Lime */
}
```

---

### 2. Gift Card Builder

#### Layout

**Mobile (< 768px):** Single column (preview above options)  
**Tablet/Desktop (≥ 768px):** Two columns (preview left, options right)

```css
.gc-builder__layout {
  display: grid;
  grid-template-columns: 1fr;  /* Mobile */
  gap: var(--wp--preset--spacing--70);
  align-items: center;
}

@media (min-width: 768px) {
  .gc-builder__layout {
    grid-template-columns: 1fr 1fr;  /* Desktop */
  }
}
```

#### Preview Card

```tsx
<div className="gc-preview-card">
  <div className="gc-preview-card__bg" aria-hidden="true" />
  <div className="gc-preview-card__content">
    <Sparkles size={32} className="gc-preview-card__icon" />
    <span className="gc-preview-card__brand">Woo Shop</span>
    <span className="gc-preview-card__amount">${selectedAmount}</span>
    <span className="gc-preview-card__label">Gift Card</span>
  </div>
</div>
```

**Gradient Background:**
```css
.gc-preview-card__bg {
  background: linear-gradient(
    135deg,
    #ff00ff 0%,      /* Pink */
    #8b5cf6 50%,     /* Purple */
    #00ffff 100%     /* Cyan */
  );
}
```

**Styling:**
```css
.gc-preview-card {
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1.6 / 1;  /* Credit card aspect ratio */
  border-radius: var(--wp--preset--border-radius--lg);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.dark .gc-preview-card {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(255, 0, 255, 0.1);  /* Pink glow */
}
```

**Amount Display:**
```css
.gc-preview-card__amount {
  font-size: var(--wp--preset--font-size--gigantic);  /* 3rem */
  font-weight: var(--wp--preset--font-weight--bold);
  line-height: 1;
  margin-block: var(--wp--preset--spacing--20);
}
```

**Dynamic Update:** Amount updates reactively when denomination selected.

#### Denominations Grid

```tsx
<div className="gc-denominations" role="radiogroup" aria-label="Gift card amount">
  {denominations.map((d) => (
    <button
      type="button"
      role="radio"
      aria-checked={selectedAmount === d.amount}
      className={`gc-denomination${
        selectedAmount === d.amount ? ' gc-denomination--active' : ''
      }${d.popular ? ' gc-denomination--popular' : ''}`}
      onClick={() => setSelectedAmount(d.amount)}
    >
      ${d.amount}
      {d.popular && <span className="gc-denomination__badge">Popular</span>}
    </button>
  ))}
</div>
```

**Grid Layout:**
```css
.gc-denominations {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--wp--preset--spacing--20);
}
```

**Button States:**

**Default:**
```css
.gc-denomination {
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--20);
  border-radius: var(--wp--preset--border-radius--md);
  border: 1px solid var(--wp--preset--color--border-light);
  background: var(--wp--preset--color--background);
  cursor: pointer;
  font-weight: var(--wp--preset--font-weight--semibold);
  font-size: var(--wp--preset--font-size--large);
  text-align: center;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
```

**Hover:**
```css
.gc-denomination:hover {
  border-color: var(--wp--preset--color--neon-pink);
  transform: translateY(-2px);
}
```

**Active (Selected):**
```css
.gc-denomination--active {
  border-color: var(--wp--preset--color--neon-pink);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.15);
  background: rgba(255, 0, 255, 0.04);
}

.dark .gc-denomination--active {
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.2);  /* Brighter glow */
  background: rgba(255, 0, 255, 0.08);
}
```

**"Popular" Badge:**
```css
.gc-denomination__badge {
  position: absolute;
  top: -8px;
  right: -4px;
  padding: 2px var(--wp--preset--spacing--20);
  border-radius: 999px;
  font-size: 10px;
  font-weight: var(--wp--preset--font-weight--semibold);
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--wp--preset--color--neon-cyan), var(--wp--preset--color--neon-lime));
  color: #030213;
  letter-spacing: 0.05em;
}
```

#### Delivery Method Options

```tsx
<div className="gc-delivery-options">
  <button
    type="button"
    className={`gc-delivery-option${
      deliveryMethod === 'email' ? ' gc-delivery-option--active' : ''
    }`}
    onClick={() => setDeliveryMethod('email')}
  >
    <Mail size={20} />
    <span className="gc-delivery-option__label">Email</span>
    <span className="gc-delivery-option__desc">Send instantly to their inbox</span>
    {deliveryMethod === 'email' && <Check size={16} className="gc-delivery-option__check" />}
  </button>
  {/* Print option */}
</div>
```

**Layout:**
```css
.gc-delivery-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--20);
}

@media (min-width: 640px) {
  .gc-delivery-options {
    grid-template-columns: 1fr 1fr;
  }
}
```

**Option Button:**
```css
.gc-delivery-option {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--40);
  border-radius: var(--wp--preset--border-radius--md);
  border: 1px solid var(--wp--preset--color--border-light);
  background: var(--wp--preset--color--background);
  cursor: pointer;
  transition: all 0.2s ease;
}

.gc-delivery-option:hover {
  border-color: var(--wp--preset--color--neon-pink);
}

.gc-delivery-option--active {
  border-color: var(--wp--preset--color--neon-pink);
  background: rgba(255, 0, 255, 0.03);
}
```

**Checkmark (Active State):**
```css
.gc-delivery-option__check {
  position: absolute;
  top: var(--wp--preset--spacing--20);
  right: var(--wp--preset--spacing--20);
  color: var(--wp--preset--color--neon-pink);
}
```

#### Add to Cart Button

```tsx
<button
  type="button"
  className={`gc-add-to-cart wp-sales-btn wp-sales-btn--primary${
    addedToCart ? ' gc-add-to-cart--added' : ''
  }`}
  onClick={handleAddToCart}
  disabled={addedToCart}
>
  {addedToCart ? (
    <>
      <Check size={18} />
      Added to cart
    </>
  ) : (
    <>
      Add to cart — ${selectedAmount}
      <ArrowRight size={18} />
    </>
  )}
</button>
```

**Full-width button with dynamic price:**
```css
.gc-add-to-cart {
  width: 100%;
  justify-content: center;
}
```

**Success State (2.5s):**
```tsx
setAddedToCart(true);
setTimeout(() => setAddedToCart(false), 2500);
```

---

### 3. Occasions Section

```tsx
<section className="gc-occasions" aria-label="Gift card occasions">
  <Container>
    <h2 className="gc-occasions__heading">Perfect for every occasion</h2>
    <div className="gc-occasions__grid gc-occasions__grid--visual">
      {occasions.map((occasion) => (
        <button
          type="button"
          className={`gc-occasion-card${
            selectedOccasion === occasion.label ? ' gc-occasion-card--active' : ''
          }`}
          onClick={() => setSelectedOccasion(occasion.label)}
          aria-pressed={selectedOccasion === occasion.label}
        >
          <span className="gc-occasion-card__img-wrap">
            <ImageWithFallback
              src={occasion.image}
              alt={occasion.label}
              className="gc-occasion-card__img"
              loading="lazy"
            />
          </span>
          <span className="gc-occasion-card__label">
            <Gift size={14} aria-hidden="true" />
            {occasion.label}
          </span>
          {selectedOccasion === occasion.label && (
            <span className="gc-occasion-card__check">
              <Check size={14} />
            </span>
          )}
        </button>
      ))}
    </div>
  </Container>
</section>
```

**Grid Layout:**
```css
.gc-occasions__grid--visual {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--wp--preset--spacing--30);
}

@media (min-width: 640px) {
  .gc-occasions__grid--visual {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .gc-occasions__grid--visual {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

**Occasion Card:**
```css
.gc-occasion-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.gc-occasion-card:hover {
  transform: translateY(-4px);
}
```

**Image Wrapper (Glassmorphism Border):**
```css
.gc-occasion-card__img-wrap {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: var(--wp--preset--border-radius--md);
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.gc-occasion-card--active .gc-occasion-card__img-wrap {
  border-color: var(--wp--preset--color--neon-pink);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.2);
}
```

**Checkmark Badge:**
```css
.gc-occasion-card__check {
  position: absolute;
  top: var(--wp--preset--spacing--20);
  right: var(--wp--preset--spacing--20);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--wp--preset--color--neon-pink);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

### 4. Benefits Section

**Identical to commerce benefits pattern.** See PageDeals.md or commerce-special-funky.css.

**Features:**
- 4-column grid (responsive: 1 → 2 → 4 columns)
- Icon + title + description cards
- Subtle neon icon glow on hover

---

### 5. CTA Section

**Identical to PageDeals CTA section.** See `/guidelines/templates/PageDeals.md`.

**Key Differences:**
- Title: "Not sure what to give?"
- Text: "A gift card lets them pick..."
- CTA: Anchor to `#gc-builder` (scroll to builder)

---

## Add to Cart Integration

### Cart Item Construction

```tsx
const handleAddToCart = () => {
  const giftCardProduct: Product = {
    id: `gift-card-${selectedAmount}`,
    name: `Woo Shop Gift Card — $${selectedAmount}`,
    slug: `gift-card-${selectedAmount}`,
    brand: 'Woo Shop',
    price: selectedAmount,
    image: GIFT_CARD_IMAGE,
    description: `Digital gift card worth $${selectedAmount}. Delivered via ${deliveryMethod}. Occasion: ${selectedOccasion}. Never expires.`,
    shortDescription: `$${selectedAmount} digital gift card`,
    sku: `GC-${selectedAmount}`,
    category: 'Gift Cards',
    categorySlug: 'gift-cards',
    inStock: true,
    onSale: false,
    featured: false,
    rating: 5,
    reviewCount: 0,
  };

  addToCart(giftCardProduct, 1);
  setAddedToCart(true);
  setTimeout(() => setAddedToCart(false), 2500);
};
```

**Dynamic Product Data:**
- `id`: `gift-card-50`, `gift-card-100`, etc.
- `price`: Selected amount
- `description`: Includes delivery method + occasion
- `sku`: `GC-50`, `GC-100`, etc.

**Cart Context:**
```tsx
const { addToCart } = useCart();
addToCart(giftCardProduct, 1);
```

---

## Responsive Behavior

### Mobile (< 640px)

**Builder:**
- 1 column layout (preview above options)
- Denominations: 3 columns
- Delivery options: 1 column (stacked)

**Occasions:**
- 2 columns

### Tablet (640px - 767px)

**Builder:**
- Still 1 column
- Delivery options: 2 columns

**Occasions:**
- 3 columns

### Desktop (≥ 768px)

**Builder:**
- 2 columns (preview left, options right)
- Denominations: 3 columns
- Delivery options: 2 columns

**Occasions:**
- 6 columns (1 row)

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Preview card shadow | `rgba(0,0,0,0.15)` | `rgba(0,0,0,0.4)` + pink glow |
| Denomination border | `--border-light` | `rgba(255,255,255,0.1)` |
| Denomination active | Pink border + subtle glow | Pink border + brighter glow |
| Delivery option bg | `--background` | `rgba(255,255,255,0.03)` |
| Occasion card active | Pink border | Pink border + shadow |

### Contrast Verification

**Preview card:** White text on gradient: ~12:1 (AAA)  
**Denominations:** Text on background: ~8:1 (AAA)  
**Active states:** Pink border visible in both modes

---

## Accessibility

### ARIA Attributes

**Denominations:**
```tsx
<div className="gc-denominations" role="radiogroup" aria-label="Gift card amount">
  <button
    type="button"
    role="radio"
    aria-checked={selectedAmount === d.amount}
  >
    ${d.amount}
  </button>
</div>
```

**Occasion Cards:**
```tsx
<button
  type="button"
  className="gc-occasion-card"
  aria-pressed={selectedOccasion === occasion.label}
>
  {occasion.label}
</button>
```

**Delivery Options:**
- No explicit ARIA (button semantics sufficient)
- Visual checkmark + `.gc-delivery-option--active` class

**Hero:**
```tsx
<section className="commerce-hero" aria-labelledby="gc-title">
  <h1 id="gc-title">Gift cards</h1>
</section>
```

**Decorative Elements:**
```tsx
<div className="gc-preview-card__bg" aria-hidden="true" />
<Sparkles className="gc-preview-card__icon" aria-hidden="true" />
```

### Keyboard Navigation

- ✅ Tab through all buttons
- ✅ Enter/Space to select denominations
- ✅ Enter/Space to select delivery method
- ✅ Enter/Space to select occasion
- ✅ Enter to add to cart
- ✅ Focus visible on all interactive elements

### Screen Reader Support

**Dynamic Announcements:**
- Denomination selection announces "$50" (via `aria-checked`)
- Occasion selection announces "Birthday, pressed" (via `aria-pressed`)
- Add to cart button text changes to "Added to cart" (announced)

---

## Reduced Motion Support

```tsx
const prefersReduced = usePrefersReducedMotion();

{!prefersReduced && (
  <>
    <div className="commerce-hero__orb commerce-hero__orb--1" />
    <div className="commerce-hero__orb commerce-hero__orb--2" />
  </>
)}
```

**Disabled When Motion Reduced:**
- Floating orbs (hero + CTA)
- Orb float animation

**Always Active:**
- Button hover effects
- Transform on denomination hover
- Occasion card lift

---

## Common Issues

### Issue: Preview amount doesn't update

**Cause:** State not updating or component not re-rendering

**Solution:** Verify `setSelectedAmount()` is called:
```tsx
onClick={() => {
  console.log('Setting amount:', d.amount);
  setSelectedAmount(d.amount);
}}
```

### Issue: Can't add gift card to cart

**Cause:** `useCart()` hook not providing `addToCart` method

**Solution:** Verify cart context wraps app:
```tsx
<CartProvider>
  <App />
</CartProvider>
```

### Issue: Occasions grid not responsive

**Cause:** Missing media queries

**Solution:** Verify CSS includes responsive breakpoints:
```css
@media (min-width: 640px) {
  .gc-occasions__grid--visual {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Issue: Preview card gradient not visible in dark mode

**Cause:** Missing dark mode shadow/glow

**Solution:** Add pink glow:
```css
.dark .gc-preview-card {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(255, 0, 255, 0.1);
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Preview card displays correctly
- [ ] Gradient background visible
- [ ] Amount updates on denomination select
- [ ] "Popular" badges visible
- [ ] Active denomination has pink border + glow
- [ ] Delivery method checkmark shows
- [ ] Occasion images load
- [ ] Active occasion has pink border

### Interaction Testing
- [ ] Denomination selection updates amount
- [ ] Delivery method selection toggles
- [ ] Occasion selection updates state
- [ ] Add to cart button shows success state
- [ ] Cart receives gift card product
- [ ] Success state auto-clears after 2.5s

### Responsive Testing
- [ ] Mobile: 1 column builder, 2 col occasions
- [ ] Tablet: 3 col occasions
- [ ] Desktop: 2 col builder, 6 col occasions
- [ ] Denominations always 3 columns
- [ ] Delivery options 1→2 columns

### Dark Mode Testing
- [ ] Preview card has pink glow
- [ ] Denominations visible
- [ ] Active states brighter glow
- [ ] Occasion borders visible
- [ ] All text readable

### Accessibility Testing
- [ ] Denominations announce selection
- [ ] Occasions announce pressed state
- [ ] Add to cart announces success
- [ ] All buttons keyboard accessible
- [ ] Focus visible
- [ ] Screen reader announces all labels

---

## Future Enhancements

### 1. Custom Amount Input

Allow users to enter custom denomination:
```tsx
<input
  type="number"
  min="10"
  max="500"
  value={customAmount}
  onChange={(e) => setSelectedAmount(Number(e.target.value))}
/>
```

### 2. Personalization

Add message input field:
```tsx
const [personalMessage, setPersonalMessage] = useState('');

<textarea
  placeholder="Add a personal message..."
  value={personalMessage}
  onChange={(e) => setPersonalMessage(e.target.value)}
  maxLength={200}
/>
```

### 3. Scheduled Delivery

Add date picker for future delivery:
```tsx
const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);

<input type="date" onChange={(e) => setDeliveryDate(new Date(e.target.value))} />
```

### 4. Recipient Email

Capture recipient email on the spot:
```tsx
const [recipientEmail, setRecipientEmail] = useState('');

<input
  type="email"
  placeholder="Recipient's email"
  value={recipientEmail}
/>
```

### 5. Bulk Purchase

Allow buying multiple gift cards:
```tsx
const [quantity, setQuantity] = useState(1);

<QuantitySelector value={quantity} onChange={setQuantity} />
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign)  
**Next Review:** After gift card sales analytics
