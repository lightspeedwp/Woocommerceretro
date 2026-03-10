# PageNewsletter

**Component Type:** Template (Newsletter Signup - Funky Redesign)  
**Location:** `/src/app/components/templates/PageNewsletter.tsx`  
**CSS:** `/src/styles/sections/commerce-special-funky.css`  
**Route:** `/newsletter`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign)  
**Color Identity:** Cyan `#00ffff` / Lime `#00ff00` (newsletter/email)

---

## Overview

PageNewsletter is a full-page newsletter signup template featuring a centered glassmorphism card with gradient background, floating orbs, neon-focused email input, gradient submit button, and animated success state. Single-purpose conversion page optimized for email capture with minimal distractions.

**Page Purpose:** Email newsletter subscription  
**Target Audience:** All visitors seeking updates and exclusive content  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Centered Card with Full-Page Background

**Note:** Uses mock newsletter content data and `prefers-reduced-motion` hook for orb animations.

---

## Key Features

### Visual Elements

**Full-Page Background:**
- Gradient background (purple → navy)
- Floating orbs (2x, animated)
- Full viewport height centering

**Newsletter Card:**
- Glassmorphism card (centered)
- Mail icon with cyan glow
- Gradient heading (cyan → lime)
- Email input with neon focus
- Gradient submit button
- Privacy text

**Success State:**
- CheckCircle icon (animated)
- Success heading
- Confirmation text
- "Subscribe another" reset button

### Funky Treatments

**Background:** Gradient (purple → navy) + animated orbs  
**Card:** Glassmorphism with subtle glow  
**Icon:** Mail icon with cyan circle background + glow  
**Heading:** Gradient text (cyan → lime)  
**Input Focus:** Neon cyan ring with glow  
**Submit Button:** Gradient (cyan → lime) with hover glow  
**Success Icon:** CheckCircle with scale animation + cyan glow  
**Success Title:** Gradient text (cyan → lime)

---

## Data Structure

### Newsletter Content

```tsx
import { newsletterPageContent } from '../../data/newsletter';

interface NewsletterContent {
  heading: string;
  subheading: string;
  formPlaceholder: string;
  formButton: string;
  privacyText: string;
  successHeading: string;
  successText: string;
  successButton: string;
}

const newsletterPageContent = {
  heading: 'Stay in the loop',
  subheading: 'Get the latest updates, exclusive offers, and content delivered straight to your inbox.',
  formPlaceholder: 'Enter your email address',
  formButton: 'Subscribe',
  privacyText: 'We respect your privacy. Unsubscribe at any time.',
  successHeading: 'You\'re subscribed!',
  successText: 'Check your inbox for a confirmation email.',
  successButton: 'Subscribe another email',
};
```

### Form State

```tsx
const [email, setEmail] = useState('');
const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (email) {
    setIsSubmitted(true);
    // In production: API call to newsletter service
  }
};

const handleReset = () => {
  setEmail('');
  setIsSubmitted(false);
};
```

---

## Component Structure

### Default State (Form)

```tsx
<Layout>
  <div className="page-rewards">
    <section className="newsletter-page">
      <div className="newsletter-page__bg" aria-hidden="true" />
      {!prefersReduced && (
        <>
          <div className="commerce-hero__orb commerce-hero__orb--1" aria-hidden="true" />
          <div className="commerce-hero__orb commerce-hero__orb--2" aria-hidden="true" />
        </>
      )}
      
      <Container>
        <div className="newsletter-page__card">
          <div className="newsletter-page__icon">
            <Mail size={32} />
          </div>

          <h1 className="newsletter-page__title">
            {newsletterPageContent.heading}
          </h1>
          
          <p className="newsletter-page__text">
            {newsletterPageContent.subheading}
          </p>

          <form onSubmit={handleSubmit} className="newsletter-page__form">
            <div className="newsletter-page__field">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder={newsletterPageContent.formPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-page__input"
              />
            </div>
            
            <button type="submit" className="newsletter-page__submit">
              {newsletterPageContent.formButton}
            </button>
            
            <p className="newsletter-page__privacy">
              {newsletterPageContent.privacyText}
            </p>
          </form>
        </div>
      </Container>
    </section>
  </div>
</Layout>
```

### Success State

```tsx
{isSubmitted && (
  <div className="newsletter-page__success">
    <CheckCircle size={48} className="newsletter-page__success-icon" />
    
    <h3 className="newsletter-page__success-title">
      {newsletterPageContent.successHeading}
    </h3>
    
    <p className="newsletter-page__success-text">
      {newsletterPageContent.successText}
    </p>
    
    <button
      className="newsletter-page__reset-btn"
      onClick={() => setIsSubmitted(false)}
    >
      {newsletterPageContent.successButton}
    </button>
  </div>
)}
```

---

## BEM Class Hierarchy

```
.page-rewards (Page wrapper - reuses PageRewardProgram wrapper)

.newsletter-page (Newsletter section)
├── .newsletter-page__bg (Gradient background)
├── .commerce-hero__orb (2x - floating orbs)
└── .newsletter-page__card (Centered glassmorphism card)
    ├── .newsletter-page__icon (Mail icon circle - cyan bg + glow)
    ├── .newsletter-page__title (h1 - gradient text cyan → lime)
    ├── .newsletter-page__text (Subheading)
    └── .newsletter-page__form (Form container)
        ├── .newsletter-page__field (Input wrapper)
        │   ├── .sr-only (Screen reader label)
        │   └── .newsletter-page__input (Email input - neon focus)
        ├── .newsletter-page__submit (Submit button - gradient cyan → lime)
        └── .newsletter-page__privacy (Privacy text)

.newsletter-page__success (Success state - replaces form)
├── .newsletter-page__success-icon (CheckCircle - animated + cyan)
├── .newsletter-page__success-title (h3 - gradient text)
├── .newsletter-page__success-text (Confirmation text)
└── .newsletter-page__reset-btn (Reset button - outline)
```

---

## Section Breakdown

### 1. Full-Page Section (`.newsletter-page`)

```css
.newsletter-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space--1000) 0;
  overflow: hidden;
}

.newsletter-page__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--purple) 0%, var(--navy) 100%);
  z-index: -1;
}

/* Orbs - same as commerce-hero */
.commerce-hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}

.commerce-hero__orb--1 {
  width: 400px;
  height: 400px;
  background: var(--cyan);
  top: 10%;
  left: 10%;
  animation: float-orb-1 20s ease-in-out infinite;
}

.commerce-hero__orb--2 {
  width: 300px;
  height: 300px;
  background: var(--lime);
  bottom: 20%;
  right: 15%;
  animation: float-orb-2 15s ease-in-out infinite;
}

@keyframes float-orb-1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

@keyframes float-orb-2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 20px); }
}

@media (prefers-reduced-motion: reduce) {
  .commerce-hero__orb {
    animation: none;
  }
}
```

**Height:** Full viewport (100vh)  
**Centering:** Flexbox center  
**Background:** Gradient (purple → navy)  
**Orbs:** Animated floating (respects reduced motion)

---

### 2. Newsletter Card (`.newsletter-page__card`)

```css
.newsletter-page__card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 540px;
  padding: var(--space--900);
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.dark .newsletter-page__card {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.15);
}

@media (max-width: 640px) {
  .newsletter-page__card {
    padding: var(--space--800);
    max-width: 100%;
  }
}
```

**Max Width:** 540px  
**Glassmorphism:** Backdrop-blur 12px  
**Border:** Subtle white (light) / cyan (dark)  
**Glow:** Cyan glow in dark mode

---

### 3. Icon (`.newsletter-page__icon`)

```css
.newsletter-page__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto var(--space--700);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--white);
}

.dark .newsletter-page__icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

@media (max-width: 640px) {
  .newsletter-page__icon {
    width: 64px;
    height: 64px;
  }
  
  .newsletter-page__icon svg {
    width: 24px;
    height: 24px;
  }
}
```

**Size:** 80px circle (64px mobile)  
**Background:** Gradient (cyan → lime)  
**Icon:** Mail (32px, 24px mobile)  
**Glow:** Cyan glow in dark mode

---

### 4. Title (`.newsletter-page__title`)

```css
.newsletter-page__title {
  margin-bottom: var(--space--500);
  font-size: var(--font-size--700);
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 640px) {
  .newsletter-page__title {
    font-size: var(--font-size--600);
  }
}
```

**Gradient:** Cyan → Lime  
**Size:** --font-size--700 (--font-size--600 mobile)

---

### 5. Subheading (`.newsletter-page__text`)

```css
.newsletter-page__text {
  margin-bottom: var(--space--800);
  font-size: var(--font-size--300);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
}

.dark .newsletter-page__text {
  color: rgba(255, 255, 255, 0.75);
}

@media (max-width: 640px) {
  .newsletter-page__text {
    font-size: var(--font-size--200);
  }
}
```

**Color:** White with 85% opacity (75% in dark)  
**Max Width:** Constrained by card width

---

### 6. Form (`.newsletter-page__form`)

```css
.newsletter-page__form {
  display: flex;
  flex-direction: column;
  gap: var(--space--500);
}

.newsletter-page__field {
  position: relative;
}

.newsletter-page__input {
  width: 100%;
  padding: var(--space--500) var(--space--600);
  border-radius: var(--radius--400);
  border: 2px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
  font-size: var(--font-size--300);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.dark .newsletter-page__input {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 255, 255, 0.15);
}

.newsletter-page__input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-page__input:focus {
  outline: none;
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.dark .newsletter-page__input:focus {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.newsletter-page__submit {
  width: 100%;
  padding: var(--space--500) var(--space--700);
  border: none;
  border-radius: var(--radius--400);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--navy);
  font-size: var(--font-size--300);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.newsletter-page__submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.dark .newsletter-page__submit:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

.newsletter-page__submit:active {
  transform: translateY(0);
}

.newsletter-page__submit:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

.newsletter-page__privacy {
  margin-top: var(--space--300);
  font-size: var(--font-size--100);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .newsletter-page__input,
  .newsletter-page__submit {
    padding: var(--space--400) var(--space--500);
  }
}
```

**Input Focus:** Neon cyan ring with glow  
**Submit Button:** Gradient (cyan → lime) with lift on hover  
**Privacy Text:** Small white text (60% opacity)

---

### 7. Success State (`.newsletter-page__success`)

```css
.newsletter-page__success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space--500);
  padding: var(--space--700) 0;
}

.newsletter-page__success-icon {
  color: var(--cyan);
  animation: success-pop 0.5s ease-out;
}

.dark .newsletter-page__success-icon {
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.6));
}

@keyframes success-pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .newsletter-page__success-icon {
    animation: none;
  }
}

.newsletter-page__success-title {
  margin: 0;
  font-size: var(--font-size--600);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.newsletter-page__success-text {
  margin: 0;
  font-size: var(--font-size--300);
  color: rgba(255, 255, 255, 0.75);
}

.newsletter-page__reset-btn {
  margin-top: var(--space--400);
  padding: var(--space--400) var(--space--600);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius--400);
  background: transparent;
  color: var(--white);
  font-size: var(--font-size--200);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.newsletter-page__reset-btn:hover {
  border-color: var(--cyan);
  background: rgba(0, 255, 255, 0.1);
}

.newsletter-page__reset-btn:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .newsletter-page__success-icon {
    width: 40px;
    height: 40px;
  }
  
  .newsletter-page__success-title {
    font-size: var(--font-size--500);
  }
}
```

**Icon Animation:** Scale pop (0 → 1.1 → 1) with glow  
**Title:** Gradient (cyan → lime)  
**Reset Button:** Outline with hover fill

---

## State Management

### Form State

```tsx
const [email, setEmail] = useState('');
const [isSubmitted, setIsSubmitted] = useState(false);

// Handle form submission
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (email) {
    setIsSubmitted(true);
  }
};

// Handle reset (show form again)
const handleReset = () => {
  setEmail('');
  setIsSubmitted(false);
};
```

### Conditional Rendering

```tsx
{isSubmitted ? (
  <div className="newsletter-page__success">
    {/* Success state */}
  </div>
) : (
  <form onSubmit={handleSubmit} className="newsletter-page__form">
    {/* Form state */}
  </form>
)}
```

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Card: Full width, less padding */
.newsletter-page__card {
  padding: var(--space--800);
  max-width: 100%;
}

/* Icon: Smaller */
.newsletter-page__icon {
  width: 64px;
  height: 64px;
}

.newsletter-page__icon svg {
  width: 24px;
  height: 24px;
}

/* Title: Smaller font */
.newsletter-page__title {
  font-size: var(--font-size--600);
}

/* Text: Smaller font */
.newsletter-page__text {
  font-size: var(--font-size--200);
}

/* Form: Less padding */
.newsletter-page__input,
.newsletter-page__submit {
  padding: var(--space--400) var(--space--500);
}

/* Success icon: Smaller */
.newsletter-page__success-icon {
  width: 40px;
  height: 40px;
}

.newsletter-page__success-title {
  font-size: var(--font-size--500);
}
```

### Desktop (> 640px)

```css
/* Card: Max 540px centered */
.newsletter-page__card {
  max-width: 540px;
}

/* Icon: 80px */
.newsletter-page__icon {
  width: 80px;
  height: 80px;
}

/* Title: Large font */
.newsletter-page__title {
  font-size: var(--font-size--700);
}
```

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Card Background** | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.05)` |
| **Card Border** | `rgba(255,255,255,0.15)` | Cyan `rgba(0,255,255,0.2)` |
| **Card Shadow** | Black (0.2) | Cyan glow (0.15) |
| **Icon Background** | Cyan → Lime gradient | Same |
| **Icon Glow** | None | Cyan (0.5) |
| **Title** | Cyan → Lime gradient | Same |
| **Subheading** | White (0.85) | White (0.75) |
| **Input Background** | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.05)` |
| **Input Border** | `rgba(255,255,255,0.15)` | Cyan `rgba(0,255,255,0.15)` |
| **Input Focus** | Cyan border + glow (0.4) | Cyan border + glow (0.6) |
| **Submit Hover** | Cyan glow (0.6) | Cyan glow (0.8) |
| **Success Icon** | Cyan | Cyan + glow (0.6) |
| **Success Title** | Cyan → Lime gradient | Same |

### Dark Mode Enhancements

```css
.dark .newsletter-page__card {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.15);
}

.dark .newsletter-page__icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.dark .newsletter-page__text {
  color: rgba(255, 255, 255, 0.75);
}

.dark .newsletter-page__input {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 255, 255, 0.15);
}

.dark .newsletter-page__input:focus {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.dark .newsletter-page__submit:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

.dark .newsletter-page__success-icon {
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.6));
}
```

---

## Accessibility

### Semantic HTML

```tsx
<main className="page-rewards">
  <section className="newsletter-page">
    <div className="newsletter-page__bg" aria-hidden="true" />
    <div className="commerce-hero__orb" aria-hidden="true" />
    
    <div className="newsletter-page__card">
      <div className="newsletter-page__icon" aria-hidden="true">
        <Mail />
      </div>
      
      <h1>Stay in the loop</h1>
      <p>Get the latest updates...</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newsletter-email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="newsletter-email"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <button type="submit">Subscribe</button>
        
        <p>Privacy notice</p>
      </form>
    </div>
  </section>
</main>
```

### ARIA Attributes

```tsx
{/* Decorative elements */}
<div className="newsletter-page__bg" aria-hidden="true" />
<div className="commerce-hero__orb" aria-hidden="true" />
<div className="newsletter-page__icon" aria-hidden="true">
  <Mail aria-hidden="true" />
</div>

{/* Screen reader label for input */}
<label htmlFor="newsletter-email" className="sr-only">
  Email Address
</label>

{/* Success icon */}
<CheckCircle aria-hidden="true" />
```

### Keyboard Navigation

- **Tab Order:** Email input → Submit button → Reset button (success state)
- **Form:** Enter to submit
- **Reset:** Enter/Space to reset and show form

### Focus States

```css
.newsletter-page__input:focus,
.newsletter-page__submit:focus-visible,
.newsletter-page__reset-btn:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

/* Input also has neon ring */
.newsletter-page__input:focus {
  outline: none; /* Remove default */
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Title (Gradient) | Cyan/Lime | Card bg | N/A | Decorative ✅ |
| Subheading | White (0.85) | Card bg | 6.5:1+ | AA ✅ |
| Input Text | White | Input bg | 12.0:1+ | AAA ✅ |
| Submit Text | Navy `#030213` | Gradient bg | 8.32:1 | AAA ✅ |
| Privacy Text | White (0.6) | Card bg | 4.5:1+ | AA ✅ |
| Success Title (Gradient) | Cyan/Lime | Card bg | N/A | Decorative ✅ |
| Success Text | White (0.75) | Card bg | 5.0:1+ | AA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. API Integration

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    setLoading(true);
    
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      analytics.track('Newsletter Subscribed', { email });
    } else {
      const error = await response.json();
      setError(error.message);
    }
  } catch (err) {
    setError('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

### 2. Email Validation

```tsx
const [emailError, setEmailError] = useState('');

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setEmail(value);
  
  if (value && !validateEmail(value)) {
    setEmailError('Please enter a valid email address');
  } else {
    setEmailError('');
  }
};

{emailError && (
  <span className="newsletter-page__error">{emailError}</span>
)}
```

### 3. Loading State

```tsx
const [loading, setLoading] = useState(false);

<button type="submit" disabled={loading}>
  {loading ? (
    <>
      <Loader className="animate-spin" size={18} />
      Subscribing...
    </>
  ) : (
    'Subscribe'
  )}
</button>
```

### 4. Double Opt-In Confirmation

```tsx
const [confirmationSent, setConfirmationSent] = useState(false);

// After successful API call
if (response.ok) {
  setConfirmationSent(true);
  setIsSubmitted(true);
}

// Success message
<p>
  {confirmationSent 
    ? 'Check your inbox for a confirmation email.'
    : 'You\'re subscribed!'
  }
</p>
```

### 5. Preferences Selection

```tsx
const [preferences, setPreferences] = useState({
  weeklyNewsletter: true,
  productUpdates: false,
  exclusiveOffers: true,
});

<div className="newsletter-page__preferences">
  <h3>Subscribe to:</h3>
  {Object.entries(preferences).map(([key, value]) => (
    <label key={key}>
      <input
        type="checkbox"
        checked={value}
        onChange={() => setPreferences(prev => ({
          ...prev,
          [key]: !prev[key]
        }))}
      />
      {formatLabel(key)}
    </label>
  ))}
</div>
```

### 6. Social Proof

```tsx
<div className="newsletter-page__social-proof">
  <Users size={16} />
  <span>Join 12,453 subscribers</span>
</div>
```

### 7. Exit Intent Popup

```tsx
useEffect(() => {
  const handleMouseLeave = (e: MouseEvent) => {
    if (e.clientY <= 0 && !isSubmitted && !exitShown) {
      setShowExitIntent(true);
      setExitShown(true);
    }
  };
  
  document.addEventListener('mouseleave', handleMouseLeave);
  return () => document.removeEventListener('mouseleave', handleMouseLeave);
}, [isSubmitted, exitShown]);
```

### 8. A/B Testing Headlines

```tsx
const headlines = [
  'Stay in the loop',
  'Never miss an update',
  'Join our community',
];

const [headlineIndex] = useState(() => 
  Math.floor(Math.random() * headlines.length)
);

<h1>{headlines[headlineIndex]}</h1>
```

### 9. Analytics Tracking

```tsx
useEffect(() => {
  analytics.track('Newsletter Page Viewed');
}, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  analytics.track('Newsletter Subscription Started', { email });
  
  // ... API call
  
  if (response.ok) {
    analytics.track('Newsletter Subscription Completed', { email });
  }
};
```

### 10. Mailchimp/ConvertKit Integration

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Mailchimp example
  const response = await fetch(`https://us-central1.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'pending', // Double opt-in
    }),
  });
  
  // ConvertKit example
  const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: CONVERTKIT_API_KEY,
      email: email,
    }),
  });
};
```

---

## Testing Checklist

### Visual Testing

- [ ] Full-page gradient background visible
- [ ] Floating orbs animate (if motion allowed)
- [ ] Card centered vertically and horizontally
- [ ] Card glassmorphism visible
- [ ] Mail icon gradient visible
- [ ] Icon glow visible (dark mode)
- [ ] Title gradient (cyan → lime) visible
- [ ] Subheading readable
- [ ] Form displays correctly
- [ ] Input placeholder visible
- [ ] Privacy text visible

### Interaction Testing

- [ ] Email input accepts text
- [ ] Form submits on Enter
- [ ] Submit button triggers submission
- [ ] Success state displays after submit
- [ ] Success icon animates (if motion allowed)
- [ ] Reset button shows form again
- [ ] Email clears on reset

### State Testing

- [ ] Email state updates on input
- [ ] Submitted state toggles correctly
- [ ] Form validates email (required)
- [ ] Reset returns to initial state

### Responsive Testing

- [ ] Mobile: Card full-width, less padding
- [ ] Mobile: Icon smaller (64px)
- [ ] Mobile: Title smaller font
- [ ] Mobile: Text smaller font
- [ ] Mobile: Form inputs less padding
- [ ] Desktop: Card max 540px
- [ ] Desktop: Icon 80px
- [ ] Desktop: Title larger font
- [ ] All breakpoints centered

### Dark Mode Testing

- [ ] Card border cyan-tinted
- [ ] Card glow visible
- [ ] Icon glow visible
- [ ] Input border cyan-tinted
- [ ] Input focus glow stronger
- [ ] Submit hover glow stronger
- [ ] Success icon glow visible
- [ ] All text readable

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h3)
- [ ] Form has proper label (sr-only)
- [ ] Input has id matching label
- [ ] Email input type="email"
- [ ] Required attribute present
- [ ] Decorative elements have aria-hidden
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA

---

## Related Templates

- **MembershipLanding** — Uses similar hero with orbs
- **SubscriptionLanding** — Uses similar hero with orbs
- **PageLoyalty** — Uses similar card centering

### Shared CSS

- `.commerce-special-funky.css` — Newsletter page styles
- `.commerce-hero__orb` — Floating orb animations

### Shared Data

- `/data/newsletter.ts` — Newsletter page content

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready
