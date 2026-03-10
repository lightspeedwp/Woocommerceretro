# Social Icons Block

**Category:** Block (Common/UI Utility)  
**Version:** 1.0  
**Last Updated:** January 2026

---

## Overview

The **Social Icons** block displays a collection of social media icon links, typically used in headers, footers, and contact sections. It provides consistent, accessible, and visually appealing social media presence across the site.

---

## WordPress/WooCommerce Mapping

| WordPress Block | WooCommerce Equivalent | Template Part |
|-----------------|------------------------|---------------|
| `core/social-links` | Social media icons in footer | Social links block pattern |
| `core/social-link` | Individual social icon | Single social link |

---

## Visual Patterns

### Pattern 1: Horizontal Icon Row (Most Common)

```
┌─────────────────────────────────────────────┐
│  [f] [📷] [🐦] [in] [▶]                    │
│  Facebook Instagram Twitter LinkedIn YouTube │
└─────────────────────────────────────────────┘
```

**Use Cases:**
- Footer social links
- Team member profiles
- Contact sections
- Author bio boxes

### Pattern 2: Circular Icon Buttons

```
┌─────────────────────────────────────────────┐
│  ⭕ f   ⭕ 📷   ⭕ 🐦   ⭕ in   ⭕ ▶        │
│  (Circular bordered buttons with icons)       │
└─────────────────────────────────────────────┘
```

**Use Cases:**
- ContactFollowSection (Shop FAQ)
- Prominent call-to-action sections
- Hero sections with social proof

---

## Proposed API

```tsx
import React from 'react';

interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok' | 'pinterest';
  url: string;
  label?: string; // Optional custom label, defaults to "Follow us on {Platform}"
}

interface SocialLinksProps {
  links: SocialLink[];
  variant?: 'default' | 'circular' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

---

## Accessibility Requirements

### ARIA Labels (Required)

```tsx
// ✅ CORRECT - Descriptive label
<a href="..." aria-label="Follow us on Facebook">
  <Facebook />
</a>
```

### External Link Security

```tsx
// ✅ CORRECT - Opens in new tab securely
<a 
  href="https://facebook.com/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Follow us on Facebook"
>
  <Facebook />
</a>
```

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Status:** ✅ Complete
