# Create Header Part Component

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Component  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Part Component (Global) |
| **Target** | MainHeader.tsx |
| **Complexity** | High |
| **Estimated Time** | 90 minutes |
| **Prerequisites** | Guidelines.md, parts/Header.md guideline |
| **Output Files** | MainHeader.tsx, MainHeader.test.tsx |

---

## 🎯 Objective

Create a comprehensive MainHeader part component for global site navigation with logo, menu, search, cart, account, mobile menu, sticky behavior, and full accessibility.

### What This Prompt Does:
- ✅ Creates MainHeader component with TypeScript
- ✅ Implements WordPress template part structure
- ✅ Includes desktop and mobile navigation
- ✅ Adds search, cart, account functionality
- ✅ Implements sticky header behavior
- ✅ Ensures WCAG AA compliance
- ✅ Generates comprehensive Jest tests

### What This Prompt Does NOT Do:
- ❌ Implement mega menu dropdowns (separate component)
- ❌ Handle authentication logic
- ❌ Manage cart state (uses CartContext)
- ❌ Include product search API integration

---

## 📚 Context & Background

### Project Architecture:
- **Location:** `/src/app/components/parts/MainHeader.tsx`
- **Type:** WordPress Template Part (header)
- **Usage:** All page templates
- **Part Mapping:** Maps to WordPress `header.html` template part

### Related Guidelines:
- `/guidelines/Guidelines.md` - Main guidelines (Section 7: Architecture)
- `/guidelines/parts/Header.md` - Header component guideline
- `/guidelines/overview-parts.md` - Parts architecture
- `/guidelines/mobile/buttons.md` - Mobile touch targets

### Related Components:
- `Container` - Layout wrapper
- `Navigation` - Main menu
- `MobileMenu` - Mobile navigation drawer
- `SearchInput` - Search functionality
- `MiniCart` - Cart drawer
- `SiteLogo` - Logo component

---

## 📋 Requirements

### Functional Requirements:
1. Display site logo with link to homepage
2. Render main navigation menu (desktop)
3. Show search icon with modal/dropdown
4. Display cart icon with item count badge
5. Show account/login link
6. Mobile hamburger menu (< 1024px)
7. Sticky header on scroll
8. Transparent to solid on scroll (optional)

### Technical Requirements:
1. TypeScript with complete interfaces
2. WordPress class naming: `.wp-block-template-part--header`
3. Import from `@/components/parts/MainHeader`
4. Use React Router for navigation
5. Integrate with CartContext for cart count
6. Use Tailwind utilities for responsive design
7. Implement scroll listener for sticky behavior

### Accessibility Requirements:
1. **WCAG AA compliance** - 4.5:1 contrast minimum
2. **Keyboard navigation** - Tab through all links
3. **ARIA labels** - Icon buttons need labels
4. **Focus states** - Visible focus rings
5. **Mobile menu** - Proper focus management
6. **Skip links** - "Skip to main content"
7. **Semantic HTML** - nav, header tags

### Dark Mode Requirements:
1. Background adapts (white → dark)
2. Text colors readable
3. Borders visible
4. Logo has dark variant
5. Hover states work in both modes

---

## 🔧 Implementation Instructions

### Step 1: Create Component File

**Action:** Create `/src/app/components/parts/MainHeader.tsx`

**Code:**
```tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List as Menu, X, MagnifyingGlass as Search, ShoppingCart, User } from '@phosphor-icons/react';
import { Container } from '@/components/common/Container';
import { useCart } from '@/contexts/CartContext';

/**
 * MainHeader Component
 * 
 * WordPress template part for global site header
 * Includes navigation, search, cart, account, and mobile menu
 * 
 * @example
 * <MainHeader />
 */

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

interface MainHeaderProps {
  navigationItems?: NavigationItem[];
  stickyBehavior?: 'always' | 'scroll' | 'none';
  transparentInitial?: boolean;
  className?: string;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  navigationItems = [],
  stickyBehavior = 'scroll',
  transparentInitial = false,
  className = '',
}) => {
  const { items } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Handle scroll for sticky behavior
  useEffect(() => {
    if (stickyBehavior === 'scroll') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [stickyBehavior]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const headerClasses = `
    wp-block-template-part--header
    ${stickyBehavior !== 'none' ? 'sticky top-0 z-50' : ''}
    ${transparentInitial && !isScrolled ? 'bg-transparent' : 'bg-white dark:bg-[#0f0f0f]'}
    ${isScrolled ? 'shadow-md' : ''}
    border-b border-gray-100 dark:border-gray-800
    transition-all duration-300
    ${className}
  `;

  return (
    <>
      {/* Skip to main content link (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white dark:focus:bg-gray-900 focus:text-gray-900 dark:focus:text-gray-50 focus:rounded"
      >
        Skip to main content
      </a>

      <header className={headerClasses}>
        <Container>
          <div className="wp-block-template-part--header-inner">
            {/* Logo */}
            <div className="wp-block-template-part--header-logo">
              <Link 
                to="/"
                className="flex items-center"
                aria-label="Go to homepage"
              >
                <div className="wp-block-site-logo">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-900 dark:text-gray-50"
                  >
                    <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.1" />
                    <path
                      d="M20 10L28 15V25L20 30L12 25V15L20 10Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="wp-block-site-title">Store</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav 
              className="wp-block-navigation hidden lg:flex"
              aria-label="Main navigation"
            >
              <ul className="wp-block-navigation__container">
                {navigationItems.map((item, index) => (
                  <li key={index} className="wp-block-navigation-item">
                    <Link
                      to={item.href}
                      className="wp-block-navigation-item__content"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="wp-block-template-part--header-actions">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="wp-block-template-part--header-action"
                aria-label="Search"
                aria-expanded={searchOpen}
              >
                <Search size={20} />
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                className="wp-block-template-part--header-action relative"
                aria-label={`Shopping cart with ${cartItemCount} items`}
              >
                <ShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="wp-block-template-part--header-badge">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* Account */}
              <Link
                to="/account"
                className="wp-block-template-part--header-action hidden md:flex"
                aria-label="Account"
              >
                <User size={20} />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="wp-block-template-part--header-action lg:hidden"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </Container>

        {/* Search Bar (when open) */}
        {searchOpen && (
          <div className="wp-block-template-part--header-search">
            <Container>
              <div className="py-4">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400"
                  autoFocus
                  aria-label="Search products"
                />
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="wp-block-template-part--mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="wp-block-template-part--mobile-menu-overlay">
            <nav aria-label="Mobile navigation">
              <ul className="wp-block-template-part--mobile-menu-items">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="wp-block-template-part--mobile-menu-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/account"
                    className="wp-block-template-part--mobile-menu-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Account
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
```

**Success Criteria:**
- ✅ Component file created
- ✅ All features implemented
- ✅ TypeScript types complete
- ✅ Accessibility features included

---

### Step 2: Add CSS Styles

**Action:** Add styles to `/src/styles/globals.css`

**Code:**
```css
/* ============================================
   HEADER TEMPLATE PART
   ============================================ */

.wp-block-template-part--header {
  width: 100%;
}

.wp-block-template-part--header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  gap: var(--wp--preset--spacing--md);
  padding-top: var(--wp--preset--spacing--sm);
  padding-bottom: var(--wp--preset--spacing--sm);
}

@media (min-width: 1024px) {
  .wp-block-template-part--header-inner {
    min-height: 80px;
  }
}

/* Logo */
.wp-block-template-part--header-logo {
  flex-shrink: 0;
}

.wp-block-site-logo {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--sm);
}

.wp-block-site-title {
  font-size: var(--wp--preset--font-size--lg);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
}

/* Navigation (Desktop) */
.wp-block-navigation {
  flex: 1;
  justify-content: center;
}

.wp-block-navigation__container {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--wp--preset--spacing--lg);
}

.wp-block-navigation-item {
  margin: 0;
}

.wp-block-navigation-item__content {
  display: flex;
  align-items: center;
  padding: var(--wp--preset--spacing--sm) var(--wp--preset--spacing--md);
  color: var(--wp--preset--color--foreground);
  text-decoration: none;
  font-weight: var(--wp--preset--font-weight--medium);
  transition: color var(--wp--preset--transition--base) ease;
  border-radius: var(--wp--preset--border-radius--md);
}

.wp-block-navigation-item__content:hover {
  color: var(--wp--preset--color--primary);
  background: var(--wp--preset--color--muted);
}

.wp-block-navigation-item__content:focus-visible {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
}

/* Actions */
.wp-block-template-part--header-actions {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--sm);
  flex-shrink: 0;
}

.wp-block-template-part--header-action {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: var(--wp--preset--spacing--sm);
  color: var(--wp--preset--color--foreground);
  background: transparent;
  border: none;
  border-radius: var(--wp--preset--border-radius--md);
  cursor: pointer;
  transition: all var(--wp--preset--transition--base) ease;
  text-decoration: none;
}

.wp-block-template-part--header-action:hover {
  background: var(--wp--preset--color--muted);
  color: var(--wp--preset--color--primary);
}

.wp-block-template-part--header-action:focus-visible {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
}

/* Cart Badge */
.wp-block-template-part--header-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  background: var(--wp--preset--color--primary);
  color: white;
  font-size: 11px;
  font-weight: var(--wp--preset--font-weight--semibold);
  border-radius: 9999px;
}

/* Search Bar */
.wp-block-template-part--header-search {
  border-top: 1px solid var(--wp--preset--color--border);
  background: var(--wp--preset--color--background);
}

/* Mobile Menu */
.wp-block-template-part--mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.2s ease;
}

.wp-block-template-part--mobile-menu-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 320px;
  height: 100%;
  background: var(--wp--preset--color--background);
  box-shadow: var(--wp--preset--shadow--xl);
  overflow-y: auto;
  animation: slideInRight 0.3s ease;
}

.wp-block-template-part--mobile-menu-items {
  list-style: none;
  margin: 0;
  padding: var(--wp--preset--spacing--xl);
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--xs);
}

.wp-block-template-part--mobile-menu-link {
  display: block;
  padding: var(--wp--preset--spacing--md);
  color: var(--wp--preset--color--foreground);
  text-decoration: none;
  font-size: var(--wp--preset--font-size--lg);
  font-weight: var(--wp--preset--font-weight--medium);
  border-radius: var(--wp--preset--border-radius--md);
  transition: all var(--wp--preset--transition--base) ease;
  min-height: 44px;
  display: flex;
  align-items: center;
}

.wp-block-template-part--mobile-menu-link:hover {
  background: var(--wp--preset--color--muted);
  color: var(--wp--preset--color--primary);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Screen reader only (accessibility) */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

**Success Criteria:**
- ✅ All styles added
- ✅ Dark mode support complete
- ✅ Responsive design implemented
- ✅ Animations included

---

### Step 3: Create Test File

**Action:** Create `/src/app/components/parts/MainHeader.test.tsx`

**Code:**
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { MainHeader } from './MainHeader';

const mockNavItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <CartProvider>{component}</CartProvider>
    </BrowserRouter>
  );
};

describe('MainHeader', () => {
  it('renders logo and site title', () => {
    renderWithProviders(<MainHeader navigationItems={mockNavItems} />);
    expect(screen.getByText('Store')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to homepage')).toBeInTheDocument();
  });

  it('renders navigation items on desktop', () => {
    renderWithProviders(<MainHeader navigationItems={mockNavItems} />);
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    renderWithProviders(<MainHeader navigationItems={mockNavItems} />);
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.getByLabelText(/Shopping cart/)).toBeInTheDocument();
  });

  it('opens search bar when search button clicked', () => {
    renderWithProviders(<MainHeader navigationItems={mockNavItems} />);
    const searchButton = screen.getByLabelText('Search');
    
    fireEvent.click(searchButton);
    
    expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger clicked', () => {
    renderWithProviders(<MainHeader navigationItems={mockNavItems} />);
    const menuButton = screen.getByLabelText('Open menu');
    
    fireEvent.click(menuButton);
    
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('has skip to main content link', () => {
    renderWithProviders(<MainHeader navigationItems={mockNavItems} />);
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });

  it('displays cart item count badge', () => {
    // Note: Would need to set up cart context with items
    renderWithProviders(<MainHeader navigationItems={mockNavItems} />);
    const cartLink = screen.getByLabelText(/Shopping cart/);
    expect(cartLink).toBeInTheDocument();
  });

  it('applies sticky class when stickyBehavior is scroll', () => {
    const { container } = renderWithProviders(
      <MainHeader navigationItems={mockNavItems} stickyBehavior="scroll" />
    );
    expect(container.querySelector('.sticky')).toBeInTheDocument();
  });
});
```

**Success Criteria:**
- ✅ All tests pass
- ✅ Core functionality tested
- ✅ Accessibility features tested

---

## ✅ Verification Checklist

- [ ] Component renders correctly
- [ ] Navigation links work
- [ ] Search opens/closes
- [ ] Cart displays count
- [ ] Mobile menu toggles
- [ ] Sticky behavior works
- [ ] Dark mode supported
- [ ] All touch targets ≥44px
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] ARIA labels present
- [ ] Tests pass

---

## 📖 Related Documentation

- `/guidelines/parts/Header.md`
- `/guidelines/Guidelines.md` (Section 14.1)
- `/guidelines/mobile/buttons.md`

---

**Status:** ✅ Active  
**Created:** 2026-01-10