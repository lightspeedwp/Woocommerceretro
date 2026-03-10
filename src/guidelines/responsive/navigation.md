# Navigation Patterns Guidelines

**Component Type:** Responsive Pattern  
**Scope:** Cross-Device Navigation Systems  
**Related:** [/guidelines/responsive/breakpoints.md], [/guidelines/interactions/focus-management.md], [/guidelines/parts/Header.md]

---

## Overview

This document defines navigation patterns for the WooCommerce prototype across all device types. Navigation must be accessible, discoverable, and appropriate for each interaction model (touch vs mouse/keyboard).

**Philosophy:** Navigation should adapt to the user's device while maintaining consistency in information architecture and interaction patterns.

---

## Navigation Patterns by Device

### Mobile Navigation (< 1024px)

**Pattern:** Hamburger menu with full-screen overlay

**Why:**
- Limited screen space
- Touch-first interaction (44px minimum tap targets)
- Vertical scrolling natural on mobile

**Implementation:**

```tsx
// MobileNav.tsx
export const MobileNav = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Hamburger Toggle */}
      <button
        className="mobile-menu-toggle lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <MenuIcon className="w-6 h-6" />
      </button>
      
      {/* Full-Screen Overlay */}
      {isOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav__overlay" onClick={onClose} />
          <nav className="mobile-nav__panel" aria-label="Primary navigation">
            <button
              className="mobile-nav__close"
              onClick={onClose}
              aria-label="Close menu"
            >
              <XIcon className="w-6 h-6" />
            </button>
            
            <ul className="mobile-nav__list">
              <li><Link to="/" onClick={onClose}>Home</Link></li>
              <li><Link to="/shop" onClick={onClose}>Shop</Link></li>
              <li><Link to="/about" onClick={onClose}>About</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
```

**CSS:**

```css
/* Mobile Navigation */
.mobile-menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;  /* WCAG 2.2 touch target */
  height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  color: var(--wp--preset--color--foreground);
}

@media (min-width: 1024px) {
  .mobile-menu-toggle {
    display: none; /* Hide on desktop */
  }
}

.mobile-nav {
  position: fixed;
  inset: 0;
  z-index: 9999;
}

.mobile-nav__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 300ms ease-out;
}

.mobile-nav__panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background: var(--wp--preset--color--background);
  animation: slideInRight 300ms cubic-bezier(0, 0, 0.2, 1);
  overflow-y: auto;
  padding: var(--wp--preset--spacing--50);
}

.mobile-nav__close {
  position: absolute;
  top: var(--wp--preset--spacing--20);
  right: var(--wp--preset--spacing--20);
  width: 44px;
  height: 44px;
}

.mobile-nav__list {
  list-style: none;
  margin: var(--wp--preset--spacing--60) 0 0;
  padding: 0;
}

.mobile-nav__list li {
  border-bottom: 1px solid var(--wp--preset--color--border);
}

.mobile-nav__list a {
  display: block;
  padding: var(--wp--preset--spacing--30);
  font-size: var(--wp--preset--font-size--400);
  color: var(--wp--preset--color--foreground);
  text-decoration: none;
  min-height: 44px; /* Touch target */
}

.mobile-nav__list a:active {
  background: var(--wp--preset--color--neutral-100);
}
```

---

### Desktop Navigation (≥ 1024px)

**Pattern:** Horizontal navigation bar with dropdowns

**Why:**
- Ample screen space
- Mouse hover interactions
- Horizontal scanning natural on wide screens

**Implementation:**

```tsx
// DesktopNav.tsx
export const DesktopNav = () => {
  return (
    <nav className="desktop-nav hidden lg:flex" aria-label="Primary navigation">
      <ul className="desktop-nav__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="has-dropdown">
          <button aria-haspopup="true" aria-expanded="false">
            Shop
            <ChevronDownIcon />
          </button>
          <ul className="dropdown-menu" aria-label="Shop submenu">
            <li><Link to="/shop/all">All Products</Link></li>
            <li><Link to="/shop/new">New Arrivals</Link></li>
            <li><Link to="/shop/sale">Sale</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};
```

**CSS:**

```css
/* Desktop Navigation */
.desktop-nav {
  display: none; /* Hidden on mobile */
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: flex;
  }
}

.desktop-nav__list {
  display: flex;
  gap: var(--wp--preset--spacing--40);
  list-style: none;
  margin: 0;
  padding: 0;
}

.desktop-nav__list > li {
  position: relative;
}

.desktop-nav__list > li > a,
.desktop-nav__list > li > button {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--30);
  font-size: var(--wp--preset--font-size--200);
  font-weight: 500;
  color: var(--wp--preset--color--foreground);
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 200ms ease-out;
}

.desktop-nav__list > li > a:hover,
.desktop-nav__list > li > button:hover {
  color: var(--wp--preset--color--primary);
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: var(--wp--preset--spacing--10) 0 0;
  padding: var(--wp--preset--spacing--20);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 200ms ease-out, transform 200ms ease-out, visibility 200ms;
}

.has-dropdown:hover .dropdown-menu,
.has-dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  display: block;
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--30);
  font-size: var(--wp--preset--font-size--200);
  color: var(--wp--preset--color--foreground);
  text-decoration: none;
  border-radius: 4px;
  transition: background 200ms ease-out;
}

.dropdown-menu a:hover {
  background: var(--wp--preset--color--neutral-100);
}
```

---

## Mega Menu Pattern (Desktop)

For sites with many categories (WooCommerce shops):

**Pattern:** Full-width dropdown with multiple columns

```tsx
// MegaMenu.tsx
export const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div
      className="mega-menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Shop by Category
        <ChevronDownIcon />
      </button>
      
      {isOpen && (
        <div className="mega-menu__panel">
          <div className="mega-menu__grid">
            <div className="mega-menu__column">
              <h3>Clothing</h3>
              <ul>
                <li><Link to="/shop/clothing/shirts">Shirts</Link></li>
                <li><Link to="/shop/clothing/pants">Pants</Link></li>
                <li><Link to="/shop/clothing/dresses">Dresses</Link></li>
              </ul>
            </div>
            
            <div className="mega-menu__column">
              <h3>Accessories</h3>
              <ul>
                <li><Link to="/shop/accessories/bags">Bags</Link></li>
                <li><Link to="/shop/accessories/jewelry">Jewelry</Link></li>
                <li><Link to="/shop/accessories/hats">Hats</Link></li>
              </ul>
            </div>
            
            <div className="mega-menu__column">
              <h3>Featured</h3>
              <img src="featured-product.jpg" alt="Featured product" />
              <Link to="/featured">Shop New Arrivals →</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
```

**CSS:**

```css
.mega-menu__panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: var(--wp--preset--spacing--50);
  animation: fadeIn 200ms ease-out;
}

.mega-menu__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--wp--preset--spacing--50);
  max-width: 1200px;
  margin: 0 auto;
}

.mega-menu__column h3 {
  font-size: var(--wp--preset--font-size--300);
  font-weight: 600;
  margin-bottom: var(--wp--preset--spacing--30);
  color: var(--wp--preset--color--foreground);
}

.mega-menu__column ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mega-menu__column a {
  display: block;
  padding: var(--wp--preset--spacing--20);
  color: var(--wp--preset--color--foreground);
  text-decoration: none;
  border-radius: 4px;
  transition: background 200ms ease-out;
}

.mega-menu__column a:hover {
  background: var(--wp--preset--color--neutral-100);
}
```

---

## Breadcrumbs Pattern

**Pattern:** Horizontal breadcrumb trail on all screen sizes

```tsx
// Breadcrumbs.tsx
export const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumbs__item">
            {index < items.length - 1 ? (
              <>
                <Link to={item.href}>{item.label}</Link>
                <span className="breadcrumbs__separator" aria-hidden="true">/</span>
              </>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Usage
<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Electronics', href: '/shop/electronics' },
  { label: 'Laptops', href: '/shop/electronics/laptops' },
]} />
```

**CSS:**

```css
.breadcrumbs {
  padding: var(--wp--preset--spacing--20) 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
}

.breadcrumbs__list {
  display: flex;
  flex-wrap: nowrap; /* Horizontal scroll on mobile if needed */
  gap: var(--wp--preset--spacing--10);
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.breadcrumbs__item {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--100);
  color: var(--wp--preset--color--neutral-600);
}

.breadcrumbs__item a {
  color: var(--wp--preset--color--neutral-600);
  text-decoration: none;
  transition: color 200ms ease-out;
}

.breadcrumbs__item a:hover {
  color: var(--wp--preset--color--primary);
  text-decoration: underline;
}

.breadcrumbs__item[aria-current="page"] {
  color: var(--wp--preset--color--foreground);
  font-weight: 500;
}

.breadcrumbs__separator {
  color: var(--wp--preset--color--neutral-400);
}
```

---

## Tab Navigation Pattern

**Pattern:** Horizontal tabs with responsive behavior

```tsx
// Tabs.tsx
export const Tabs = ({ tabs, activeTab, onChange }) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="tabs">
      <div className="tabs__list-wrapper" ref={tabsRef}>
        <div
          role="tablist"
          aria-label="Product information"
          className="tabs__list"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              className={`tabs__tab ${activeTab === tab.id ? 'is-active' : ''}`}
              onClick={() => onChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className="tabs__panel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
```

**CSS:**

```css
/* Tabs: Horizontal scroll on mobile */
.tabs__list-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-bottom: 1px solid var(--wp--preset--color--border);
}

.tabs__list {
  display: flex;
  gap: 0;
  white-space: nowrap;
  min-width: min-content;
}

.tabs__tab {
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--40);
  font-size: var(--wp--preset--font-size--200);
  color: var(--wp--preset--color--neutral-600);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 200ms ease-out, border-color 200ms ease-out;
}

.tabs__tab:hover {
  color: var(--wp--preset--color--foreground);
}

.tabs__tab.is-active {
  color: var(--wp--preset--color--foreground);
  border-bottom-color: var(--wp--preset--color--primary);
  font-weight: 500;
}

.tabs__panel {
  padding: var(--wp--preset--spacing--40);
}

/* Desktop: More spacing */
@media (min-width: 1024px) {
  .tabs__tab {
    padding: var(--wp--preset--spacing--40) var(--wp--preset--spacing--50);
  }
}
```

---

## Accessibility Standards

### Keyboard Navigation

All navigation must be fully keyboard accessible:

**Required Keyboard Interactions:**

| Key | Action |
|-----|--------|
| **Tab** | Move to next focusable element |
| **Shift + Tab** | Move to previous focusable element |
| **Enter** | Activate link/button |
| **Space** | Activate button (not link) |
| **Escape** | Close dropdown/modal |
| **Arrow Keys** | Navigate within dropdown menu |

**Implementation:**

```tsx
// Dropdown with keyboard navigation
export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const items = menuRef.current?.querySelectorAll('a');
      const currentIndex = Array.from(items || []).findIndex(
        item => item === document.activeElement
      );
      
      if (e.key === 'ArrowDown') {
        const nextIndex = (currentIndex + 1) % (items?.length || 1);
        items?.[nextIndex]?.focus();
      } else {
        const prevIndex = currentIndex <= 0 ? (items?.length || 1) - 1 : currentIndex - 1;
        items?.[prevIndex]?.focus();
      }
    }
  };
  
  return (
    <div onKeyDown={handleKeyDown}>
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      
      {isOpen && (
        <ul ref={menuRef} role="menu">
          <li role="none">
            <a href="/link1" role="menuitem">Link 1</a>
          </li>
          <li role="none">
            <a href="/link2" role="menuitem">Link 2</a>
          </li>
        </ul>
      )}
    </div>
  );
};
```

---

### ARIA Labels

**Required ARIA attributes for navigation:**

```tsx
// Primary navigation
<nav aria-label="Primary navigation">
  <ul>...</ul>
</nav>

// Footer navigation
<nav aria-label="Footer navigation">
  <ul>...</ul>
</nav>

// Breadcrumbs
<nav aria-label="Breadcrumb">
  <ol>...</ol>
</nav>

// Dropdown menu
<button
  aria-haspopup="true"
  aria-expanded={isOpen}
  aria-controls="dropdown-menu-id"
>
  Menu
</button>

<ul id="dropdown-menu-id" role="menu">
  <li role="none">
    <a role="menuitem">Link</a>
  </li>
</ul>

// Current page
<a aria-current="page">Home</a>
```

---

## Focus Management

### Focus Trap in Mobile Menu

```tsx
import { useEffect, useRef } from 'react';

export const MobileNav = ({ isOpen, onClose }) => {
  const navRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Store previous focus
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Focus first element in menu
      const firstFocusable = navRef.current?.querySelector<HTMLElement>(
        'button, a, input, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
      
      // Trap focus
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          const focusableElements = navRef.current?.querySelectorAll<HTMLElement>(
            'button, a, input, [tabindex]:not([tabindex="-1"])'
          );
          
          const firstElement = focusableElements?.[0];
          const lastElement = focusableElements?.[focusableElements.length - 1];
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    } else {
      // Restore focus when closing
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <nav ref={navRef} className="mobile-nav">
      {/* Navigation content */}
    </nav>
  );
};
```

---

## Testing Navigation

### Accessibility Testing Checklist

- [ ] All links/buttons keyboard accessible (Tab key)
- [ ] Focus visible on all interactive elements
- [ ] Dropdown opens with Enter/Space
- [ ] Dropdown closes with Escape
- [ ] Arrow keys navigate dropdown items
- [ ] Focus trapped in mobile menu when open
- [ ] Focus returns to toggle button when menu closes
- [ ] Screen reader announces navigation role
- [ ] Current page indicated with `aria-current="page"`
- [ ] Dropdown state announced (`aria-expanded`)

### Screen Reader Testing

Test with:
- **VoiceOver** (macOS/iOS)
- **NVDA** (Windows)
- **JAWS** (Windows)
- **TalkBack** (Android)

Expected announcements:
- "Navigation, Primary navigation"
- "Menu button, collapsed" / "Menu button, expanded"
- "Link, Home, current page"
- "Dropdown menu, Shop, 3 items"

---

## Related Documentation

- [Breakpoints](./breakpoints.md) - Responsive breakpoint system
- [Focus Management](../interactions/focus-management.md) - Keyboard navigation patterns
- [Header Component](../parts/Header.md) - Complete header implementation
- [Mobile Navigation](../mobile/README.md) - Mobile-specific navigation patterns

---

## Summary

### ✅ Navigation Best Practices

1. **Mobile:** Hamburger menu with full-screen overlay
2. **Desktop:** Horizontal navigation with hover dropdowns
3. **Mega Menu:** Multi-column dropdowns for large category lists
4. **Breadcrumbs:** Horizontal scroll on mobile, full display on desktop
5. **Tabs:** Horizontal scroll on mobile, all visible on desktop
6. **Keyboard:** Full keyboard navigation support
7. **ARIA:** Proper semantic markup and screen reader support
8. **Focus:** Focus management and focus trapping in modals

### 📊 Quick Reference

| Pattern | Mobile | Desktop | Keyboard | ARIA |
|---------|--------|---------|----------|------|
| **Hamburger Menu** | Required | Hidden | Tab, Enter, Esc | `aria-label`, `aria-expanded` |
| **Horizontal Nav** | Hidden | Required | Tab, Enter, Arrow | `aria-label`, `role="navigation"` |
| **Dropdown** | Tap to open | Hover to open | Tab, Arrow, Esc | `aria-haspopup`, `aria-expanded` |
| **Breadcrumbs** | Scroll horizontal | Full display | Tab | `aria-current="page"` |
| **Tabs** | Scroll horizontal | Full display | Tab, Arrow | `role="tablist"`, `aria-selected` |

---

**Version:** 1.0  
**Last Updated:** January 12, 2026  
**Maintained By:** Development Team
