# PageChat

**Component Type:** Template (Live Chat Page - Full Funky)  
**Location:** `/src/app/components/templates/PageChat.tsx`  
**CSS:** `/src/styles/sections/info-pages-funky.css`  
**Route:** `/chat`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 10)  
**Color Identity:** Cyan `#00ffff` / Purple `#7c3aed`

---

## Overview

PageChat is a live chat information template featuring a glassmorphism chat placeholder, popular topic quick links, and alternative contact methods. Provides chat widget integration point, business hours, response time, and fallback contact options. Uses info-pages-funky.css for consistent funky styling.

**Page Purpose:** Live chat access and support contact information  
**Target Audience:** Customers needing real-time support  
**Dark Mode:** ✅ Complete support with glassmorphism effects  
**Layout:** Hero → Chat placeholder → Popular topics → Alternative contact

**Note:** Chat placeholder is a mockup; production would integrate real chat widget (Intercom, Zendesk, etc.)

---

## Key Features

### Visual Elements

**1. Page Header:**
- Gradient background
- Title: "Live Chat"
- Description: Real-time support messaging
- Standard info-page hero styling

**2. Chat Placeholder:**
- Glassmorphism card
- Large MessageCircle icon (gradient circle)
- "Start a Conversation" heading
- Business hours (Clock icon)
- "Start Chat" CTA (gradient button)
- Response time note

**3. Popular Topics:**
- 5 quick-link topic buttons
- Glassmorphism with neon hover glow
- Arrow icons
- Light gray background section

**4. Alternative Contact:**
- 2 contact cards (Email, Phone)
- Gradient icon circles
- Contact value display
- Secondary CTA buttons

### Funky Treatments

**Hero:** Gradient overlay with floating orbs  
**Chat Placeholder:** Glassmorphism card + gradient icon  
**Topic Buttons:** Glass panels + neon glow on hover  
**Contact Icons:** Gradient circles (purple, cyan)  
**Start Chat Button:** Gradient (cyan → lime) + glow

---

## Data Structure

### Popular Topics Data

```tsx
import { chatPopularTopics } from '../../data/chat';

export const chatPopularTopics: string[] = [
  'Where is my order?',
  'How do I return an item?',
  'Help choosing the right size',
  'Payment or billing question',
  'Product availability',
];
```

### Contact Options Data

```tsx
import { chatContactOptions } from '../../data/chat';

export const chatContactOptions = [
  {
    type: 'email',
    icon: 'Mail',
    title: 'Email',
    value: 'support@example.com',
    link: '/contact',
    buttonText: 'Send Email',
  },
  {
    type: 'phone',
    icon: 'Phone',
    title: 'Phone',
    value: '1-800-555-0199',
    link: 'tel:+18005550199',
    buttonText: 'Call Now',
  },
];
```

### Icons Used

```tsx
import { 
  MessageCircle, // Chat icon (48px, 20px)
  Clock,         // Hours icon (18px)
  Phone,         // Phone contact (32px)
  Mail,          // Email contact (32px)
  ArrowRight,    // Topic button arrows (16px)
} from '@phosphor-icons/react';
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  {/* Page Header */}
  <section className="wp-page-intro-section">
    <Container className="wp-page-intro-content">
      <Typography variant="h1" className="wp-page-intro-title">Live Chat</Typography>
      <Typography variant="body" className="wp-page-intro-text">
        Chat with our support team in real time for quick answers to your questions.
      </Typography>
    </Container>
  </section>

  {/* Chat Widget Placeholder */}
  <section className="wp-content-section">
    <Container variant="content">
      <div className="wp-chat-placeholder">
        <MessageCircle size={48} className="wp-chat-placeholder__icon" />
        <Heading level="2">Start a Conversation</Heading>
        <Typography variant="body">
          Our chat team is available during business hours to help with orders, 
          products, returns, and more.
        </Typography>
        <div className="wp-chat-placeholder__hours">
          <Clock size={18} />
          <Typography variant="body">
            <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
          </Typography>
        </div>
        <button className="wp-button wp-button--primary wp-button--lg">
          <MessageCircle size={20} /> Start Chat
        </button>
        <Typography variant="caption" className="wp-chat-placeholder__note">
          Average response time: under 2 minutes
        </Typography>
      </div>
    </Container>
  </section>

  {/* Common Topics */}
  <section className="wp-content-section wp-content-section--alt">
    <Container variant="content">
      <Heading level="2">Popular Chat Topics</Heading>
      <div className="wp-topic-list">
        {chatPopularTopics.map((topic, index) => (
          <button key={index} className="wp-topic-button">
            <span>{topic}</span>
            <ArrowRight size={16} />
          </button>
        ))}
      </div>
    </Container>
  </section>

  {/* Alternative Contact */}
  <section className="wp-content-section">
    <Container>
      <Heading level="2" align="center">Other Ways to Reach Us</Heading>
      <div className="wp-contact-options">
        {chatContactOptions.map((option, index) => (
          <div key={index} className="wp-contact-card">
            <div className="wp-contact-card__icon-wrapper">
              {contactIcons[option.icon]}
            </div>
            <Heading level="4">{option.title}</Heading>
            <Typography variant="body">{option.value}</Typography>
            {option.type === 'phone' ? (
              <a href={option.link} className="wp-button wp-button--secondary">
                {option.buttonText}
              </a>
            ) : (
              <Link to={option.link} className="wp-button wp-button--secondary">
                {option.buttonText}
              </Link>
            )}
          </div>
        ))}
      </div>
    </Container>
  </section>
</Layout>
```

### Icon Mapping

```tsx
const contactIcons: Record<string, React.ReactNode> = {
  'Mail': <Mail size={32} />,
  'Phone': <Phone size={32} />,
};
```

---

## BEM Class Hierarchy

```
.wp-page-intro-section (Hero section)
├── .wp-page-intro-content (Container)
│   ├── .wp-page-intro-title (h1 - gradient text)
│   └── .wp-page-intro-text (Description)

.wp-content-section (Standard content section)
├── .wp-content-section--alt (Light gray background modifier)

.wp-chat-placeholder (Chat widget placeholder - glassmorphism card)
├── .wp-chat-placeholder__icon (MessageCircle icon)
├── .wp-chat-placeholder__hours (Hours info row)
└── .wp-chat-placeholder__note (Response time note)

.wp-topic-list (Topics grid)
└── .wp-topic-button (Individual topic button - glassmorphism)

.wp-contact-options (Contact cards grid)
└── .wp-contact-card (Individual contact card)
    └── .wp-contact-card__icon-wrapper (Gradient icon circle)

.wp-button (Base button)
├── .wp-button--primary (Gradient button - cyan → lime)
├── .wp-button--secondary (Outline button)
└── .wp-button--lg (Large size modifier)
```

---

## Section Breakdown

### 1. Page Header (`.wp-page-intro-section`)

```css
.wp-page-intro-section {
  position: relative;
  padding: var(--space--900) 0 var(--space--800);
  background: linear-gradient(135deg, var(--navy) 0%, #1a0a3e 100%);
  overflow: hidden;
}

.dark .wp-page-intro-section {
  background: linear-gradient(135deg, #000000 0%, var(--navy) 100%);
}

/* Optional: Floating orbs (if used) */
.wp-page-intro-section::before,
.wp-page-intro-section::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.wp-page-intro-section::before {
  width: 400px;
  height: 400px;
  top: -200px;
  right: -100px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
}

.wp-page-intro-section::after {
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: -100px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
}

.wp-page-intro-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
}

/* Gradient Title */
.wp-page-intro-title {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space--500);
}

.wp-page-intro-text {
  font-size: var(--font-size--300);
  color: rgba(255, 255, 255, 0.9);
}
```

**Gradient:** Cyan → Purple (title), Navy gradient background  
**Orbs:** Purple (top-right), Cyan (bottom-left)

---

### 2. Chat Placeholder (`.wp-chat-placeholder`)

```css
.wp-chat-placeholder {
  max-width: 36rem;
  margin: 0 auto;
  padding: var(--space--900);
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  text-align: center;
}

.dark .wp-chat-placeholder {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.15);
}

/* Icon (Gradient Circle) */
.wp-chat-placeholder__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  padding: var(--space--600);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  color: var(--white);
  margin-bottom: var(--space--700);
}

.dark .wp-chat-placeholder__icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

/* Heading */
.wp-chat-placeholder h2 {
  margin-bottom: var(--space--500);
}

/* Body text */
.wp-chat-placeholder p {
  color: var(--text-secondary);
  margin-bottom: var(--space--600);
}

/* Hours Row */
.wp-chat-placeholder__hours {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--300);
  padding: var(--space--400);
  border-radius: var(--radius--300);
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.2);
  margin-bottom: var(--space--700);
}

.wp-chat-placeholder__hours svg {
  color: var(--cyan);
  flex-shrink: 0;
}

.wp-chat-placeholder__hours p {
  margin: 0;
  font-size: var(--font-size--200);
}

/* Start Chat Button */
.wp-chat-placeholder .wp-button--primary {
  margin-bottom: var(--space--500);
}

/* Response Time Note */
.wp-chat-placeholder__note {
  display: block;
  font-size: var(--font-size--100);
  color: var(--text-secondary);
  font-style: italic;
}

@media (max-width: 640px) {
  .wp-chat-placeholder {
    padding: var(--space--700);
  }
  
  .wp-chat-placeholder__icon {
    width: 80px;
    height: 80px;
    padding: var(--space--500);
  }
  
  .wp-chat-placeholder__hours {
    flex-direction: column;
    text-align: center;
  }
}
```

**Glassmorphism:** Backdrop-blur 20px  
**Icon:** Gradient circle (cyan → purple) with glow  
**Hours:** Cyan-tinted info box

---

### 3. Popular Topics (`.wp-topic-list`)

```css
.wp-content-section--alt {
  background: var(--surface);
}

.dark .wp-content-section--alt {
  background: var(--surface-dark);
}

.wp-topic-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space--500);
  margin-top: var(--space--700);
}

.wp-topic-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space--500) var(--space--600);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  color: var(--text);
  font-size: var(--font-size--300);
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.dark .wp-topic-button {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
}

/* Neon Glow Hover */
.wp-topic-button:hover {
  transform: translateX(4px);
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.dark .wp-topic-button:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.wp-topic-button svg {
  color: var(--cyan);
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .wp-topic-list {
    grid-template-columns: 1fr;
  }
}
```

**Grid:** Auto-fit (min 280px)  
**Hover:** Slide right + cyan glow  
**Mobile:** Single column

---

### 4. Alternative Contact (`.wp-contact-options`)

```css
.wp-contact-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space--700);
  margin-top: var(--space--800);
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
}

.wp-contact-card {
  padding: var(--space--800);
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  text-align: center;
  transition: box-shadow 0.3s;
}

.dark .wp-contact-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
}

.wp-contact-card:hover {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

.dark .wp-contact-card:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

/* Icon Wrapper (Gradient Circle) */
.wp-contact-card__icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: var(--space--500);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple) 0%, var(--cyan) 100%);
  color: var(--white);
  margin-bottom: var(--space--600);
}

.dark .wp-contact-card__icon-wrapper {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
}

/* Title */
.wp-contact-card h4 {
  margin-bottom: var(--space--400);
}

/* Value */
.wp-contact-card p {
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space--600);
}

/* Button */
.wp-contact-card .wp-button {
  width: 100%;
}

@media (max-width: 640px) {
  .wp-contact-options {
    grid-template-columns: 1fr;
  }
}
```

**Icons:** Gradient circles (purple → cyan)  
**Hover:** Cyan glow  
**Mobile:** Single column

---

### 5. Button Styles

```css
.wp-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--300);
  padding: var(--space--400) var(--space--600);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: none;
}

/* Primary Button (Gradient Cyan → Lime) */
.wp-button--primary {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--navy);
}

.wp-button--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.dark .wp-button--primary:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

/* Secondary Button (Outline) */
.wp-button--secondary {
  background: transparent;
  border: 2px solid var(--border);
  color: var(--text);
}

.wp-button--secondary:hover {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.dark .wp-button--secondary:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

/* Large Size Modifier */
.wp-button--lg {
  padding: var(--space--500) var(--space--800);
  font-size: var(--font-size--400);
}
```

**Primary:** Gradient (cyan → lime) + glow  
**Secondary:** Outline with cyan hover glow

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Chat placeholder: Smaller padding */
.wp-chat-placeholder {
  padding: var(--space--700);
}

/* Chat icon: Smaller */
.wp-chat-placeholder__icon {
  width: 80px;
  height: 80px;
}

/* Hours: Stacked */
.wp-chat-placeholder__hours {
  flex-direction: column;
  text-align: center;
}

/* Topics: Single column */
.wp-topic-list {
  grid-template-columns: 1fr;
}

/* Contact: Single column */
.wp-contact-options {
  grid-template-columns: 1fr;
}
```

### Tablet (640px - 1024px)

```css
/* Topics: 2 columns or auto-fit */
.wp-topic-list {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Contact: 2 columns */
.wp-contact-options {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* All elements at full scale */
.wp-topic-list {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.wp-contact-options {
  grid-template-columns: repeat(2, 1fr);
  max-width: 56rem;
}
```

**Key Breakpoints:** Single col → auto-fit grids, hours row stacked on mobile

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Background** | Navy gradient | Black → Navy gradient |
| **Hero Title** | Cyan → Purple gradient | Cyan → Purple gradient |
| **Chat Card BG** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Chat Card Border** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.2)` |
| **Chat Card Shadow** | None | Cyan glow `rgba(0,255,255,0.15)` |
| **Chat Icon** | Cyan → Purple gradient | Same + cyan glow |
| **Hours Box BG** | `rgba(0,255,255,0.1)` | `rgba(0,255,255,0.1)` |
| **Hours Box Border** | `rgba(0,255,255,0.2)` | `rgba(0,255,255,0.2)` |
| **Alt Section BG** | Light gray surface | Dark gray surface |
| **Topic Buttons BG** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Topic Buttons Border** | `rgba(255,255,255,0.1)` | `rgba(0,255,255,0.15)` |
| **Topic Hover Glow** | `rgba(0,255,255,0.3)` | `rgba(0,255,255,0.5)` |
| **Contact Cards** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Contact Icons** | Purple → Cyan gradient | Same + purple glow |
| **Primary Button** | Cyan → Lime gradient | Cyan → Lime gradient |
| **Primary Hover Glow** | `rgba(0,255,255,0.6)` | `rgba(0,255,255,0.8)` |

### Dark Mode Enhancements

```css
.dark .wp-page-intro-section {
  background: linear-gradient(135deg, #000000 0%, var(--navy) 100%);
}

.dark .wp-chat-placeholder {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.15);
}

.dark .wp-chat-placeholder__icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.dark .wp-topic-button {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
}

.dark .wp-topic-button:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.dark .wp-contact-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
}

.dark .wp-contact-card:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.dark .wp-contact-card__icon-wrapper {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
}

.dark .wp-button--primary:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

.dark .wp-button--secondary:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Main page structure */}
<main>
  <section className="wp-page-intro-section" aria-labelledby="page-title">
    <h1 id="page-title">Live Chat</h1>
    <p>Chat with our support team in real time</p>
  </section>
  
  <section className="wp-content-section" aria-labelledby="chat-heading">
    <div className="wp-chat-placeholder">
      <MessageCircle aria-hidden="true" />
      <h2 id="chat-heading">Start a Conversation</h2>
      
      <div className="wp-chat-placeholder__hours" role="status">
        <Clock aria-hidden="true" />
        <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
      </div>
      
      <button>Start Chat</button>
    </div>
  </section>
  
  <section className="wp-content-section" aria-labelledby="topics-heading">
    <h2 id="topics-heading">Popular Chat Topics</h2>
    <div className="wp-topic-list">
      <button>Where is my order?</button>
    </div>
  </section>
  
  <section className="wp-content-section" aria-labelledby="contact-heading">
    <h2 id="contact-heading">Other Ways to Reach Us</h2>
    <div className="wp-contact-options">
      <article className="wp-contact-card">
        <Mail aria-hidden="true" />
        <h4>Email</h4>
        <p>support@example.com</p>
        <a href="/contact">Send Email</a>
      </article>
    </div>
  </section>
</main>
```

### ARIA Attributes

```tsx
{/* Decorative icons */}
<MessageCircle size={48} aria-hidden="true" />
<Clock size={18} aria-hidden="true" />
<ArrowRight size={16} aria-hidden="true" />

{/* Hours info with status role */}
<div className="wp-chat-placeholder__hours" role="status">
  <Clock aria-hidden="true" />
  <Typography variant="body">
    <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
  </Typography>
</div>

{/* Topic buttons with clear labels */}
<button 
  className="wp-topic-button"
  aria-label="Start chat about: Where is my order?"
>
  <span>Where is my order?</span>
  <ArrowRight aria-hidden="true" />
</button>

{/* Contact links */}
{option.type === 'phone' ? (
  <a 
    href={option.link}
    aria-label={`Call us at ${option.value}`}
  >
    {option.buttonText}
  </a>
) : (
  <Link 
    to={option.link}
    aria-label={`Send email to ${option.value}`}
  >
    {option.buttonText}
  </Link>
)}
```

### Keyboard Navigation

- **Tab Order:** Start Chat → Topic buttons → Email button → Phone button
- **Buttons:** Enter/Space to activate
- **Links:** Enter to navigate
- **Focus Management:** No modals, standard flow

### Focus States

```css
.wp-button:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

.wp-topic-button:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.wp-contact-card a:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title (Gradient) | Cyan/Purple | Navy bg | N/A | Decorative ✅ |
| Hero Text | White (0.9 opacity) | Navy bg | 14.0:1+ | AAA ✅ |
| Placeholder Heading | `#1a1a1a` / `#f9fafb` | Card bg | 12.0:1+ | AAA ✅ |
| Placeholder Text | `#6b7280` | Card bg | 4.6:1+ | AA ✅ |
| Hours Text (Light) | `#1a1a1a` | Cyan box | 8.0:1+ | AAA ✅ |
| Hours Text (Dark) | `#f9fafb` | Cyan box | 10.0:1+ | AAA ✅ |
| Topic Button Text (Light) | `#1a1a1a` | Button bg | 10.0:1+ | AAA ✅ |
| Topic Button Text (Dark) | `#f9fafb` | Button bg | 12.0:1+ | AAA ✅ |
| Contact Card Title | `#1a1a1a` / `#f9fafb` | Card bg | 12.0:1+ | AAA ✅ |
| Contact Card Value | `#1a1a1a` / `#f9fafb` | Card bg | 12.0:1+ | AAA ✅ |
| Primary Button Text | Navy `#030213` | Cyan gradient | 8.32:1 | AAA ✅ |
| Secondary Button Text | `#1a1a1a` / `#f9fafb` | Transparent | 12.0:1+ | AAA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Real Chat Widget Integration

```tsx
// Intercom integration
useEffect(() => {
  window.Intercom('boot', {
    app_id: 'YOUR_APP_ID',
    name: user.name,
    email: user.email,
  });
  
  return () => window.Intercom('shutdown');
}, []);

// Replace button with Intercom launcher
<button 
  className="wp-button wp-button--primary wp-button--lg"
  onClick={() => window.Intercom('show')}
>
  <MessageCircle size={20} /> Start Chat
</button>

// Or Zendesk Widget
<button
  onClick={() => window.zE('webWidget', 'open')}
>
  Start Chat
</button>

// Or Drift
<button
  onClick={() => window.drift.api.openChat()}
>
  Start Chat
</button>
```

### 2. Live Availability Status

```tsx
const [isOnline, setIsOnline] = useState(false);

useEffect(() => {
  // Check current time against business hours
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  
  const isBusinessDay = day >= 1 && day <= 5; // Mon-Fri
  const isBusinessHours = hour >= 9 && hour < 18; // 9am-6pm
  
  setIsOnline(isBusinessDay && isBusinessHours);
}, []);

// Display status
<div className="wp-chat-placeholder__status">
  <div className={`wp-status-indicator${isOnline ? ' wp-status-indicator--online' : ' wp-status-indicator--offline'}`} />
  <p>
    {isOnline ? 'Team is online now' : 'Team is currently offline'}
  </p>
</div>
```

### 3. Pre-Chat Form

```tsx
const [showForm, setShowForm] = useState(false);
const [formData, setFormData] = useState({
  name: '',
  email: '',
  topic: '',
});

// Show form before starting chat
{showForm ? (
  <form onSubmit={handleStartChat}>
    <input
      type="text"
      placeholder="Your Name"
      value={formData.name}
      onChange={(e) => setFormData({...formData, name: e.target.value})}
      required
    />
    <input
      type="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={(e) => setFormData({...formData, email: e.target.value})}
      required
    />
    <select
      value={formData.topic}
      onChange={(e) => setFormData({...formData, topic: e.target.value})}
      required
    >
      <option value="">Select a topic</option>
      {chatPopularTopics.map(topic => (
        <option key={topic} value={topic}>{topic}</option>
      ))}
    </select>
    <button type="submit">Start Chat</button>
  </form>
) : (
  <button onClick={() => setShowForm(true)}>Start Chat</button>
)}
```

### 4. Topic Quick Starts

```tsx
// Pre-fill chat with topic
const handleTopicClick = (topic: string) => {
  window.Intercom('showNewMessage', topic);
  // Or for Zendesk:
  // window.zE('webWidget', 'show');
  // window.zE('webWidget', 'write', topic);
};

<button 
  className="wp-topic-button"
  onClick={() => handleTopicClick(topic)}
>
  <span>{topic}</span>
  <ArrowRight size={16} />
</button>
```

### 5. Queue Position Display

```tsx
const [queuePosition, setQueuePosition] = useState<number | null>(null);

// After clicking Start Chat
{queuePosition !== null && (
  <div className="wp-chat-placeholder__queue">
    <p>You are #{queuePosition} in queue</p>
    <p>Estimated wait: {estimateWaitTime(queuePosition)}</p>
  </div>
)}
```

### 6. Chat Transcript Email

```tsx
// After chat ends
<div className="wp-chat-placeholder__transcript">
  <p>Chat ended. Would you like a transcript?</p>
  <button onClick={emailTranscript}>
    Email Transcript
  </button>
</div>
```

### 7. Satisfaction Rating

```tsx
// Post-chat survey
<div className="wp-chat-placeholder__rating">
  <p>How was your chat experience?</p>
  <div className="wp-rating-stars">
    {[1, 2, 3, 4, 5].map(rating => (
      <button
        key={rating}
        onClick={() => submitRating(rating)}
        aria-label={`Rate ${rating} stars`}
      >
        <Star size={24} />
      </button>
    ))}
  </div>
</div>
```

### 8. Canned Responses Suggestion

```tsx
// For agents (internal)
const cannedResponses = [
  'Thank you for contacting us!',
  'I can help you with that.',
  'Let me look into this for you.',
  'Is there anything else I can help with?',
];

<div className="wp-chat-canned-responses">
  {cannedResponses.map((response, i) => (
    <button 
      key={i}
      onClick={() => insertResponse(response)}
    >
      {response}
    </button>
  ))}
</div>
```

### 9. Co-Browsing Option

```tsx
// Allow agent to view customer's screen
<div className="wp-chat-placeholder__cobrowse">
  <p>Need visual help? Enable screen sharing</p>
  <button onClick={startCoBrowsing}>
    <Eye size={16} /> Enable Co-Browsing
  </button>
</div>
```

### 10. Chat Analytics

```tsx
// Track chat metrics
useEffect(() => {
  // Track when chat is opened
  analytics.track('Chat Opened', {
    source: 'chat_page',
    timestamp: new Date(),
  });
  
  // Track topic clicks
  const trackTopicClick = (topic: string) => {
    analytics.track('Chat Topic Selected', {
      topic,
      timestamp: new Date(),
    });
  };
}, []);
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero displays with gradient title
- [ ] Hero background gradient visible
- [ ] Chat placeholder displays
- [ ] Chat placeholder has glassmorphism
- [ ] Chat icon has gradient (cyan → purple)
- [ ] Chat icon has glow in dark mode
- [ ] Hours box displays
- [ ] Hours box has cyan tint
- [ ] Start Chat button displays
- [ ] Start Chat button has gradient (cyan → lime)
- [ ] Response time note displays
- [ ] Topics section displays
- [ ] Topic buttons display (5 items)
- [ ] Topic buttons have glassmorphism
- [ ] Contact section displays
- [ ] Contact cards display (2 items)
- [ ] Contact icons have gradients (purple → cyan)

### Interaction Testing

- [ ] Start Chat button clickable
- [ ] Topic buttons clickable
- [ ] Topic buttons slide on hover
- [ ] Topic buttons have cyan glow
- [ ] Email button navigates
- [ ] Phone button triggers tel: link
- [ ] All buttons have hover effects
- [ ] Start Chat button has glow

### Responsive Testing

- [ ] Mobile: Chat placeholder smaller padding
- [ ] Mobile: Chat icon smaller
- [ ] Mobile: Hours stacked
- [ ] Mobile: Topics single column
- [ ] Mobile: Contact single column
- [ ] Tablet: Topics auto-fit grid
- [ ] Tablet: Contact 2 columns
- [ ] Desktop: All elements full scale

### Dark Mode Testing

- [ ] Hero gradient visible
- [ ] Hero orbs visible (if used)
- [ ] Chat placeholder glassmorphism visible
- [ ] Chat placeholder border cyan-tinted
- [ ] Chat placeholder shadow cyan glow
- [ ] Chat icon glow visible
- [ ] Hours box readable
- [ ] Topic buttons readable
- [ ] Topic buttons cyan-tinted borders
- [ ] Topic hover glow stronger
- [ ] Contact cards readable
- [ ] Contact icon glow visible
- [ ] Primary button maintains contrast
- [ ] Primary hover glow stronger
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h4)
- [ ] Icons decorative (aria-hidden)
- [ ] Hours box has role="status"
- [ ] Topic buttons have aria-label
- [ ] Contact links have aria-label
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Buttons keyboard accessible
- [ ] Links keyboard accessible
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA

### Data Testing

- [ ] Popular topics display (5 items)
- [ ] Contact options display (2 items)
- [ ] Email address displays
- [ ] Phone number displays
- [ ] Hours text displays
- [ ] Response time displays

---

## Related Templates

- **PageContact** — Similar contact options
- **PageHelpCenter** — Similar info page layout
- **PageFAQ** — Similar topic quick links

### Shared CSS

- `.info-pages-funky.css` — Funky info page styles
- `.wp-page-intro-section` — Gradient hero
- `.wp-topic-list` — Topic buttons
- `.wp-contact-options` — Contact cards

### New CSS Patterns

- `.wp-chat-placeholder` — Glassmorphism chat card
- `.wp-chat-placeholder__hours` — Cyan-tinted info box
- `.wp-chat-placeholder__note` — Response time note

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready