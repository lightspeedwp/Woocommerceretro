# SocialRedirect

**Component Type:** Template (Social Media Redirect - Minimal Funky)  
**Location:** `/src/app/components/templates/SocialRedirect.tsx`  
**CSS:** `/src/styles/sections/account-auth-funky.css`  
**Route:** `/social/:platform`  
**Status:** ✅ Production (Prototype - redirects to homepage)  
**Version:** 2.6 (Funky Redesign - Phase 10)  
**Color Identity:** Cyan `#00ffff` / Pink `#ec4899`

---

## Overview

SocialRedirect is a minimal utility template that displays a brief loading state before redirecting users to external social media platforms. Features centered card layout, platform-specific icon with gradient glow, animated loading dots, and cancel option. Uses route parameter to determine target platform (Instagram, Facebook, Twitter, Pinterest, YouTube, LinkedIn).

**Page Purpose:** Social media redirect handler  
**Target Audience:** Users clicking social links  
**Dark Mode:** ✅ Complete support with gradient accents  
**Layout:** Centered full-screen card

**Note:** Prototype redirects to homepage after 2 seconds; production would redirect to actual social URL.

---

## Key Features

### Visual Elements

**1. Centered Card:**
- Glassmorphism panel
- Platform icon (gradient glow)
- "Redirecting to [Platform]" title
- Description text
- Animated loading dots

**2. Platform Icon:**
- 48px social icon
- Gradient background circle
- Neon glow in dark mode

**3. Loading Dots:**
- 3 animated dots
- Gradient pulse animation
- Staggered timing

**4. Cancel Action:**
- Simple text link
- Returns to homepage
- Subtle hover state

### Funky Treatments

**Icon Background:** Gradient circle (cyan → pink)  
**Icon Glow:** Neon cyan glow in dark mode  
**Card:** Glassmorphism with subtle border  
**Loading Dots:** Gradient pulse (cyan → pink)

---

## Route Parameters

### Dynamic Platform Detection

```tsx
import { useParams } from 'react-router';
import { socialLinks } from '../../data/site';

const { platform } = useParams<{ platform: string }>();

// Find matching social link from data
const social = socialLinks.find(s => s.id === platform) || socialLinks[0];
```

### Supported Platforms

```tsx
export const socialLinks: SocialLink[] = [
  { id: 'instagram', platform: 'Instagram', url: 'https://instagram.com/wooshop', icon: 'Instagram' },
  { id: 'facebook', platform: 'Facebook', url: 'https://facebook.com/wooshop', icon: 'Facebook' },
  { id: 'twitter', platform: 'X (Twitter)', url: 'https://x.com/wooshop', icon: 'Twitter' },
  { id: 'pinterest', platform: 'Pinterest', url: 'https://pinterest.com/wooshop', icon: 'Pin' },
  { id: 'youtube', platform: 'YouTube', url: 'https://youtube.com/@wooshop', icon: 'Youtube' },
  { id: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/company/wooshop', icon: 'Linkedin' },
];
```

### URL Examples

- `/social/instagram` → Redirects to Instagram
- `/social/facebook` → Redirects to Facebook
- `/social/twitter` → Redirects to X (Twitter)
- `/social/pinterest` → Redirects to Pinterest
- `/social/youtube` → Redirects to YouTube
- `/social/linkedin` → Redirects to LinkedIn
- `/social/invalid` → Falls back to Instagram (first in array)

---

## Icon Mapping

### Dynamic Icon Import

```tsx
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Pin, 
  Youtube 
} from '@phosphor-icons/react';

const iconMap: Record<string, any> = {
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Pin, 
  Youtube
};

// Get icon component
const Icon = iconMap[social.icon] || Instagram;

// Render
<Icon size={48} className="wp-redirect-icon" />
```

---

## Redirect Logic

### Auto-Redirect with Timeout

```tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const navigate = useNavigate();

useEffect(() => {
  const timer = setTimeout(() => {
    // Production: Redirect to external URL
    // window.location.href = social.url;
    
    // Prototype: Return to homepage
    navigate('/');
  }, 2000);

  return () => clearTimeout(timer);
}, [navigate, social.url]);
```

**Timing:** 2-second delay before redirect  
**Cleanup:** Timer cleared on unmount (if user cancels)

### Manual Cancel

```tsx
<button
  onClick={() => navigate('/')}
  className="wp-link-simple"
  aria-label="Cancel redirect and return to homepage"
>
  <small>Cancel and return to homepage</small>
</button>
```

---

## Component Structure

### Template Pattern

```tsx
<div className="wp-redirect-page">
  <div className="wp-redirect-card">
    {/* Platform Icon */}
    <div className="wp-redirect-icon-wrapper">
      <Icon size={48} className="wp-redirect-icon" />
    </div>
    
    {/* Title */}
    <h1 className="wp-redirect-title">
      Redirecting to {social.platform}
    </h1>
    
    {/* Description */}
    <p className="wp-redirect-text">
      Taking you to our {social.platform} page...
    </p>
    
    {/* Loading Dots */}
    <div className="wp-loading-dots">
      <div className="wp-loading-dot"></div>
      <div className="wp-loading-dot"></div>
      <div className="wp-loading-dot"></div>
    </div>

    {/* Cancel Link */}
    <div className="wp-redirect-actions">
      <button
        onClick={() => navigate('/')}
        className="wp-link-simple"
        aria-label="Cancel redirect and return to homepage"
      >
        <small>Cancel and return to homepage</small>
      </button>
    </div>
  </div>
</div>
```

---

## BEM Class Hierarchy

```
.wp-redirect-page (Full-screen centering container)
└── .wp-redirect-card (Glassmorphism card)
    ├── .wp-redirect-icon-wrapper (Gradient icon circle)
    │   └── .wp-redirect-icon (Social icon - 48px)
    ├── .wp-redirect-title (h1 - "Redirecting to...")
    ├── .wp-redirect-text (Description)
    ├── .wp-loading-dots (Loading animation container)
    │   └── .wp-loading-dot (Individual dot - 3 total)
    └── .wp-redirect-actions (Cancel link container)
        └── .wp-link-simple (Cancel button/link)
```

---

## Section Breakdown

### 1. Page Container (`.wp-redirect-page`)

```css
.wp-redirect-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--space--600);
  background: var(--bg);
}

.dark .wp-redirect-page {
  background: var(--bg-dark);
}
```

**Layout:** Full-screen flex centering

---

### 2. Redirect Card (`.wp-redirect-card`)

```css
.wp-redirect-card {
  max-width: 28rem;
  width: 100%;
  padding: var(--space--900);
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  text-align: center;
}

.dark .wp-redirect-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
}
```

**Max Width:** 28rem (448px)  
**Glassmorphism:** Backdrop-blur 12px

---

### 3. Icon Wrapper (`.wp-redirect-icon-wrapper`)

```css
.wp-redirect-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  padding: var(--space--600);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  margin-bottom: var(--space--700);
}

.dark .wp-redirect-icon-wrapper {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.wp-redirect-icon {
  color: var(--white);
}
```

**Size:** 96px circle  
**Gradient:** Cyan → Pink  
**Glow:** Cyan in dark mode

---

### 4. Title (`.wp-redirect-title`)

```css
.wp-redirect-title {
  font-size: var(--font-size--500);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space--400);
}
```

**Text:** Dynamic platform name interpolation

---

### 5. Description (`.wp-redirect-text`)

```css
.wp-redirect-text {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  margin-bottom: var(--space--700);
}
```

---

### 6. Loading Dots (`.wp-loading-dots`)

```css
.wp-loading-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--300);
  margin-bottom: var(--space--700);
}

.wp-loading-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  animation: pulse-dot 1.4s ease-in-out infinite;
}

.wp-loading-dot:nth-child(1) {
  animation-delay: 0s;
}

.wp-loading-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.wp-loading-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse-dot {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}

.dark .wp-loading-dot {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}
```

**Animation:** Pulse scale + opacity  
**Stagger:** 0.2s delay between dots  
**Duration:** 1.4s total cycle

---

### 7. Cancel Action (`.wp-redirect-actions`)

```css
.wp-redirect-actions {
  margin-top: var(--space--500);
}

.wp-link-simple {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  color: var(--text-secondary);
  font-size: var(--font-size--100);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.wp-link-simple:hover {
  color: var(--text);
}

.wp-link-simple:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

**Style:** Minimal text link  
**Hover:** Darker text color

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Card: Smaller padding */
.wp-redirect-card {
  padding: var(--space--700);
}

/* Icon: Smaller */
.wp-redirect-icon-wrapper {
  width: 80px;
  height: 80px;
  padding: var(--space--500);
}

.wp-redirect-icon {
  width: 40px;
  height: 40px;
}

/* Title: Smaller font */
.wp-redirect-title {
  font-size: var(--font-size--400);
}

/* Text: Smaller font */
.wp-redirect-text {
  font-size: var(--font-size--200);
}
```

### Tablet / Desktop

```css
/* All elements at standard size */
.wp-redirect-card {
  max-width: 28rem;
  padding: var(--space--900);
}

.wp-redirect-icon-wrapper {
  width: 96px;
  height: 96px;
}
```

**Key Breakpoint:** 640px (mobile → desktop)

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Page Background** | `--bg` (light) | `--bg-dark` (dark) |
| **Card Background** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Card Border** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.15)` |
| **Card Shadow** | None | Cyan glow `rgba(0,255,255,0.1)` |
| **Icon Circle BG** | Cyan → Pink gradient | Same |
| **Icon Circle Shadow** | None | Cyan glow `rgba(0,255,255,0.4)` |
| **Icon Color** | White | White |
| **Title** | `--text` (dark) | `--text` (light) |
| **Description** | `--text-secondary` | `--text-secondary` |
| **Loading Dots BG** | Cyan → Pink gradient | Same |
| **Loading Dots Shadow** | None | Cyan glow `rgba(0,255,255,0.6)` |
| **Cancel Link** | `--text-secondary` | `--text-secondary` |

### Dark Mode Enhancements

```css
.dark .wp-redirect-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.15);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
}

.dark .wp-redirect-icon-wrapper {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.dark .wp-loading-dot {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Page structure */}
<div className="wp-redirect-page" role="status" aria-live="polite">
  <div className="wp-redirect-card">
    <div className="wp-redirect-icon-wrapper" aria-hidden="true">
      <Instagram aria-hidden="true" />
    </div>
    
    <h1 className="wp-redirect-title">
      Redirecting to Instagram
    </h1>
    
    <p className="wp-redirect-text">
      Taking you to our Instagram page...
    </p>
    
    <div className="wp-loading-dots" aria-label="Loading" role="status">
      <div className="wp-loading-dot"></div>
      <div className="wp-loading-dot"></div>
      <div className="wp-loading-dot"></div>
    </div>

    <div className="wp-redirect-actions">
      <button 
        onClick={handleCancel}
        aria-label="Cancel redirect and return to homepage"
      >
        <small>Cancel and return to homepage</small>
      </button>
    </div>
  </div>
</div>
```

### ARIA Attributes

```tsx
{/* Page wrapper with status */}
<div 
  className="wp-redirect-page" 
  role="status" 
  aria-live="polite"
>
  {/* Icon decorative */}
  <div className="wp-redirect-icon-wrapper" aria-hidden="true">
    <Instagram size={48} aria-hidden="true" />
  </div>
  
  {/* Loading dots with label */}
  <div 
    className="wp-loading-dots" 
    aria-label="Loading" 
    role="status"
  >
    <div className="wp-loading-dot"></div>
    <div className="wp-loading-dot"></div>
    <div className="wp-loading-dot"></div>
  </div>
  
  {/* Cancel button with clear label */}
  <button
    onClick={() => navigate('/')}
    aria-label="Cancel redirect and return to homepage"
  >
    <small>Cancel and return to homepage</small>
  </button>
</div>
```

### Screen Reader Announcements

**On Page Load:**
```
"Redirecting to Instagram. Taking you to our Instagram page... Loading."
```

**After Redirect (if external):**
```
"Navigating to instagram.com"
```

**After Cancel:**
```
"Navigation cancelled. Returning to homepage."
```

### Keyboard Navigation

- **Tab Order:** Cancel button is only focusable element
- **Enter/Space:** Activates cancel button
- **Escape:** Should also trigger cancel (optional enhancement)

### Focus States

```css
.wp-link-simple:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Icon | White `#ffffff` | Gradient bg | 4.5:1+ | AA ✅ |
| Title (Light) | `#1a1a1a` | Card bg | 10.0:1+ | AAA ✅ |
| Title (Dark) | `#f9fafb` | Card bg | 12.0:1+ | AAA ✅ |
| Description (Light) | `#6b7280` | Card bg | 4.6:1+ | AA ✅ |
| Description (Dark) | `#9ca3af` | Card bg | 4.6:1+ | AA ✅ |
| Cancel Link (Light) | `#6b7280` | Card bg | 4.6:1+ | AA ✅ |
| Cancel Link (Dark) | `#9ca3af` | Card bg | 4.6:1+ | AA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. External Redirect

```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    // Production: Redirect to actual social URL
    window.location.href = social.url;
  }, 2000);

  return () => clearTimeout(timer);
}, [social.url]);
```

**Rationale:** Use `window.location.href` for external redirects instead of React Router

### 2. Redirect Confirmation Modal

```tsx
const [showConfirm, setShowConfirm] = useState(false);

// Show confirmation first
useEffect(() => {
  setShowConfirm(true);
}, []);

// Redirect after user confirms
const handleConfirm = () => {
  window.location.href = social.url;
};

{showConfirm && (
  <div className="wp-redirect-card">
    <p>You are about to leave our site and visit {social.platform}.</p>
    <button onClick={handleConfirm}>Continue</button>
    <button onClick={() => navigate('/')}>Cancel</button>
  </div>
)}
```

### 3. Analytics Tracking

```tsx
useEffect(() => {
  // Track social redirect
  analytics.track('Social Redirect Started', {
    platform: social.platform,
    url: social.url,
    timestamp: new Date(),
  });
  
  const timer = setTimeout(() => {
    analytics.track('Social Redirect Completed', {
      platform: social.platform,
      url: social.url,
      duration: 2000,
    });
    
    window.location.href = social.url;
  }, 2000);

  return () => clearTimeout(timer);
}, [social]);
```

### 4. Configurable Delay

```tsx
// Get delay from query param or use default
const searchParams = new URLSearchParams(window.location.search);
const delay = parseInt(searchParams.get('delay') || '2000', 10);

useEffect(() => {
  const timer = setTimeout(() => {
    window.location.href = social.url;
  }, delay);

  return () => clearTimeout(timer);
}, [delay, social.url]);
```

**Usage:** `/social/instagram?delay=3000` (3-second delay)

### 5. Countdown Timer

```tsx
const [countdown, setCountdown] = useState(3);

useEffect(() => {
  if (countdown > 0) {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  } else {
    window.location.href = social.url;
  }
}, [countdown, social.url]);

// Display countdown
<p className="wp-redirect-text">
  Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
</p>
```

### 6. Progress Bar

```tsx
const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        window.location.href = social.url;
        return 100;
      }
      return prev + 5;
    });
  }, 100);

  return () => clearInterval(interval);
}, [social.url]);

// Display progress bar
<div className="wp-progress-bar">
  <div 
    className="wp-progress-bar__fill"
    style={{ width: `${progress}%` }}
  />
</div>
```

### 7. Skip Wait Button

```tsx
<div className="wp-redirect-actions">
  <button
    onClick={() => window.location.href = social.url}
    className="wp-button wp-button--primary"
  >
    Go Now
  </button>
  <button
    onClick={() => navigate('/')}
    className="wp-link-simple"
  >
    Cancel
  </button>
</div>
```

### 8. Platform-Specific Messages

```tsx
const platformMessages: Record<string, string> = {
  instagram: 'Follow us for daily inspiration and behind-the-scenes content',
  facebook: 'Join our community and stay updated on new products',
  twitter: 'Get real-time updates and exclusive announcements',
  pinterest: 'Discover curated boards and save your favorites',
  youtube: 'Subscribe for product reviews and tutorials',
  linkedin: 'Connect with us for business updates and career opportunities',
};

<p className="wp-redirect-text">
  {platformMessages[social.id] || `Taking you to our ${social.platform} page...`}
</p>
```

### 9. Error Handling

```tsx
const [redirectError, setRedirectError] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    try {
      window.location.href = social.url;
    } catch (error) {
      setRedirectError(true);
      console.error('Redirect failed:', error);
    }
  }, 2000);

  return () => clearTimeout(timer);
}, [social.url]);

{redirectError && (
  <div className="wp-alert wp-alert--error">
    <p>Unable to redirect. Please try again.</p>
    <a href={social.url} target="_blank" rel="noopener noreferrer">
      Click here to visit {social.platform}
    </a>
  </div>
)}
```

### 10. UTM Tracking

```tsx
// Add UTM parameters to social URL
const getTrackedUrl = (baseUrl: string, platform: string) => {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', 'website');
  url.searchParams.set('utm_medium', 'redirect');
  url.searchParams.set('utm_campaign', platform);
  return url.toString();
};

useEffect(() => {
  const trackedUrl = getTrackedUrl(social.url, social.id);
  
  const timer = setTimeout(() => {
    window.location.href = trackedUrl;
  }, 2000);

  return () => clearTimeout(timer);
}, [social]);
```

**Result:** `https://instagram.com/wooshop?utm_source=website&utm_medium=redirect&utm_campaign=instagram`

---

## Testing Checklist

### Visual Testing

- [ ] Card displays centered
- [ ] Card has glassmorphism
- [ ] Icon displays (platform-specific)
- [ ] Icon has gradient background (cyan → pink)
- [ ] Icon has glow in dark mode
- [ ] Title displays with platform name
- [ ] Description displays
- [ ] Loading dots display (3 dots)
- [ ] Loading dots animate
- [ ] Cancel link displays

### Interaction Testing

- [ ] Auto-redirect works after 2 seconds
- [ ] Cancel button navigates to homepage
- [ ] Cancel button stops redirect timer

### Route Testing

- [ ] `/social/instagram` → Instagram redirect
- [ ] `/social/facebook` → Facebook redirect
- [ ] `/social/twitter` → Twitter redirect
- [ ] `/social/pinterest` → Pinterest redirect
- [ ] `/social/youtube` → YouTube redirect
- [ ] `/social/linkedin` → LinkedIn redirect
- [ ] `/social/invalid` → Falls back to first platform

### Animation Testing

- [ ] Loading dots pulse
- [ ] Dots stagger correctly (0.2s delay)
- [ ] Pulse cycle smooth (1.4s)
- [ ] Icon glow subtle in dark mode

### Responsive Testing

- [ ] Mobile: Card smaller padding
- [ ] Mobile: Icon smaller (80px)
- [ ] Mobile: Title smaller font
- [ ] Mobile: Description smaller font
- [ ] Desktop: All elements standard size

### Dark Mode Testing

- [ ] Card glassmorphism visible
- [ ] Card border cyan-tinted
- [ ] Card shadow cyan glow
- [ ] Icon shadow cyan glow
- [ ] Loading dots glow visible
- [ ] All text readable
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Page has role="status"
- [ ] Page has aria-live="polite"
- [ ] Icon has aria-hidden
- [ ] Loading dots have aria-label
- [ ] Cancel button has aria-label
- [ ] Tab order logical
- [ ] Focus indicator visible
- [ ] Keyboard navigation works
- [ ] Screen reader announces redirect
- [ ] Color contrast meets WCAG AA

### State Testing

- [ ] Default platform is Instagram (if invalid)
- [ ] Platform name displays correctly
- [ ] Redirect timer clears on unmount
- [ ] Cancel stops redirect

---

## Related Templates

- **PageLogin** — Similar minimal card layout
- **Page404** — Similar utility page
- **PageContact** — Similar social links display

### Shared CSS

- `.account-auth-funky.css` — Minimal utility page styles
- `.wp-redirect-card` — Glassmorphism card
- `.wp-loading-dots` — Animated loading indicator

### New CSS Patterns

- `.wp-redirect-icon-wrapper` — Gradient circle with glow
- `.wp-loading-dot` — Gradient pulse animation

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production (Prototype - redirects to homepage; update for production external redirects)