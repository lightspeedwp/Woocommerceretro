# Focus Management Guidelines

**Component Type:** Interaction Pattern  
**Scope:** Cross-Device Keyboard Navigation  
**Related:** [/guidelines/responsive/navigation.md], [/guidelines/interactions/animations.md], [/guidelines/design-tokens/colors.md]

---

## Overview

This document defines focus management standards for the WooCommerce prototype. Proper focus management ensures keyboard users can navigate the site efficiently and understand their current location.

**Philosophy:** Focus should be visible, predictable, and respect user preferences. Never hide focus indicators or create keyboard traps.

---

## Focus Indicators

### Visual Standards

**Focus indicators MUST:**
1. Be visible in both light and dark modes
2. Have sufficient contrast (3:1 minimum per WCAG 2.2)
3. Not rely on color alone
4. Be visible during animations
5. Not be removed with `outline: none` unless replaced

### Default Focus Ring

```css
/* ✅ CORRECT - Visible focus indicator */
*:focus-visible {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
  transition: outline-offset 200ms ease-out;
}

/* Dark mode */
.dark *:focus-visible {
  outline-color: var(--wp--preset--color--primary-light);
}

/* ❌ WRONG - Never do this */
*:focus {
  outline: none; /* Removes focus indicator completely */
}

/* ⚠️ ACCEPTABLE - Only if custom indicator provided */
button:focus {
  outline: none; /* Hide default */
}

button:focus-visible {
  box-shadow: 0 0 0 3px var(--wp--preset--color--primary);
  /* Custom indicator replaces outline */
}
```

---

### `:focus` vs `:focus-visible`

**Use `:focus-visible` for better UX:**

| Pseudo-class | Behavior | Use Case |
|--------------|----------|----------|
| `:focus` | Shows on **all** focus (mouse + keyboard) | Legacy support only |
| `:focus-visible` | Shows **only** for keyboard focus | Modern browsers (recommended) |

**Why `:focus-visible`?**
- Mouse clicks don't show focus ring (cleaner UI)
- Keyboard navigation shows focus ring (better a11y)
- Automatic heuristics determine when to show

**Implementation:**

```css
/* Best practice - Use both for browser support */
button:focus {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
}

button:focus:not(:focus-visible) {
  outline: none; /* Hide for mouse users in modern browsers */
}

button:focus-visible {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
}
```

---

## Focus Order

### Logical Tab Order

Focus should follow **visual reading order** (top-to-bottom, left-to-right in LTR languages).

**✅ Good Tab Order:**
```
1. Skip to main content link
2. Logo
3. Primary navigation
4. Search
5. Cart icon
6. Main content heading
7. Main content links/buttons
8. Footer navigation
9. Footer social links
```

**❌ Bad Tab Order:**
```
1. Footer link (wrong - jumps to bottom)
2. Logo
3. Cart icon (wrong - out of visual order)
4. Main content
5. Navigation (wrong - should be before main content)
```

---

### Skip Links

**REQUIRED:** Every page must have a "Skip to main content" link for keyboard users.

```tsx
// SkipLink.tsx
export const SkipLink = () => {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
};

// App.tsx
export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Page content */}
      </main>
      <Footer />
    </>
  );
}
```

**CSS:**

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: 10000;
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--40);
  background: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--background);
  font-weight: 600;
  text-decoration: none;
  transition: top 200ms ease-out;
}

.skip-link:focus {
  top: 0; /* Slide into view when focused */
}
```

---

### `tabindex` Attribute

**Usage Rules:**

| Value | Behavior | Use Case |
|-------|----------|----------|
| `tabindex="0"` | Natural tab order | Make non-interactive elements focusable |
| `tabindex="-1"` | Not in tab order, but programmatically focusable | Focus targets for skip links, modals |
| `tabindex="1+"` | **❌ NEVER USE** | Disrupts natural tab order |

**Examples:**

```tsx
// ✅ GOOD - Make custom button focusable
<div role="button" tabIndex={0} onClick={handleClick}>
  Custom Button
</div>

// ✅ GOOD - Focus target for skip link
<main id="main-content" tabIndex={-1}>
  {/* Content */}
</main>

// ❌ BAD - Never use positive tabindex
<button tabIndex={5}>Button</button> {/* Don't do this! */}
```

---

## Focus Trap in Modals

When a modal opens, focus should **stay within the modal** until it closes.

### Implementation

```tsx
import { useEffect, useRef } from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (!isOpen) return;
    
    // Store previous focus
    previousFocusRef.current = document.activeElement as HTMLElement;
    
    // Get all focusable elements in modal
    const getFocusableElements = () => {
      return modalRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    };
    
    // Focus first element
    const focusableElements = getFocusableElements();
    const firstElement = focusableElements?.[0];
    firstElement?.focus();
    
    // Trap focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      
      if (e.key !== 'Tab') return;
      
      const focusableElements = getFocusableElements();
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];
      
      // Shift + Tab on first element → Focus last element
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      }
      // Tab on last element → Focus first element
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restore focus when modal closes
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="modal-close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
```

---

## Focus Management Patterns

### 1. Dropdown Menu Focus

**Pattern:** Arrow keys navigate, Escape closes, Tab exits

```tsx
export const DropdownMenu = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        break;
        
      case 'ArrowDown':
        e.preventDefault();
        focusNext();
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        focusPrevious();
        break;
    }
  };
  
  const focusNext = () => {
    const items = menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]');
    const currentIndex = Array.from(items || []).findIndex(
      item => item === document.activeElement
    );
    const nextIndex = (currentIndex + 1) % (items?.length || 1);
    items?.[nextIndex]?.focus();
  };
  
  const focusPrevious = () => {
    const items = menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]');
    const currentIndex = Array.from(items || []).findIndex(
      item => item === document.activeElement
    );
    const prevIndex = currentIndex <= 0 ? (items?.length || 1) - 1 : currentIndex - 1;
    items?.[prevIndex]?.focus();
  };
  
  return (
    <div className="dropdown" onKeyDown={handleKeyDown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </button>
      
      {isOpen && (
        <ul ref={menuRef} role="menu">
          {items.map((item, index) => (
            <li key={index} role="none">
              <a
                href={item.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

---

### 2. Tab Navigation Focus

**Pattern:** Arrow keys switch tabs, Tab moves to next element

```tsx
export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const tabElements = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    if (!tabElements) return;
    
    let newIndex = activeTab;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = activeTab === 0 ? tabs.length - 1 : activeTab - 1;
        break;
        
      case 'ArrowRight':
        e.preventDefault();
        newIndex = (activeTab + 1) % tabs.length;
        break;
        
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
        
      case 'End':
        e.preventDefault();
        newIndex = tabs.length - 1;
        break;
        
      default:
        return;
    }
    
    setActiveTab(newIndex);
    tabElements[newIndex]?.focus();
  };
  
  return (
    <div className="tabs">
      <div
        ref={tabListRef}
        role="tablist"
        aria-label="Product information"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            id={`tab-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {tabs.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          id={`panel-${index}`}
          aria-labelledby={`tab-${index}`}
          hidden={activeTab !== index}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
```

---

### 3. Toast Notification Focus

**Pattern:** Don't steal focus, but allow keyboard dismissal

```tsx
export const Toast = ({ message, onDismiss }) => {
  const toastRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDismiss();
      }
    };
    
    // Toast is role="status" - doesn't steal focus
    // But listen for Escape globally
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onDismiss]);
  
  return (
    <div
      ref={toastRef}
      role="status"
      aria-live="polite"
      className="toast"
    >
      {message}
      <button onClick={onDismiss} aria-label="Dismiss notification">
        ×
      </button>
    </div>
  );
};
```

---

### 4. Form Focus Management

**Pattern:** Focus first error after validation

```tsx
export const CheckoutForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    setErrors(newErrors);
    
    // Focus first field with error
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      const errorElement = formRef.current?.querySelector<HTMLInputElement>(
        `[name="${firstErrorField}"]`
      );
      errorElement?.focus();
      
      // Announce error to screen readers
      const errorMessage = newErrors[firstErrorField];
      announce(`Error: ${errorMessage}`);
    }
  };
  
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? 'email-error' : undefined}
      />
      {errors.email && (
        <span id="email-error" role="alert" className="error">
          {errors.email}
        </span>
      )}
      
      <button type="submit">Submit</button>
    </form>
  );
};

// Screen reader announcement helper
const announce = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};
```

---

## Focus During Animations

Focus indicators must remain visible during animations:

```css
/* ❌ BAD - Focus hidden during animation */
.button {
  transition: all 300ms ease-out;
}

.button:focus {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
  transition: outline-offset 300ms ease-out;
}

.button:active {
  transform: scale(0.95);
  outline-offset: 0; /* Focus ring disappears! */
}

/* ✅ GOOD - Focus visible throughout */
.button {
  transition: transform 300ms ease-out;
}

.button:focus-visible {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
  /* outline-offset doesn't animate - stays visible */
}

.button:active {
  transform: scale(0.95);
  /* Focus ring remains */
}
```

---

## Screen Reader Announcements

### Live Regions

Use ARIA live regions to announce dynamic changes:

```tsx
// Success toast
<div role="status" aria-live="polite">
  Item added to cart
</div>

// Error alert
<div role="alert" aria-live="assertive">
  Payment failed. Please try again.
</div>

// Loading state
<div role="status" aria-live="polite" aria-busy="true">
  Loading products...
</div>
```

**Live Region Attributes:**

| Attribute | Value | Use Case |
|-----------|-------|----------|
| `aria-live="polite"` | Waits for user pause | Status updates, success messages |
| `aria-live="assertive"` | Interrupts immediately | Errors, critical alerts |
| `aria-busy="true"` | Indicates loading | Async content loading |

---

## Testing Focus Management

### Manual Testing

1. **Keyboard-Only Test:**
   - Unplug mouse
   - Navigate entire site with keyboard only
   - Verify all interactive elements reachable
   - Check focus indicators visible at all times

2. **Tab Order Test:**
   - Press Tab repeatedly from top of page
   - Verify logical order (top → bottom, left → right)
   - No unexpected jumps
   - No focus traps (except intentional ones like modals)

3. **Skip Link Test:**
   - Press Tab from page load
   - First element should be "Skip to main content"
   - Press Enter
   - Focus should jump to main content

4. **Modal Test:**
   - Open modal via keyboard
   - Tab through all elements
   - Verify focus stays in modal
   - Press Escape to close
   - Verify focus returns to trigger button

---

### Automated Testing

```typescript
// Jest + React Testing Library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('focus moves to modal when opened', async () => {
  const user = userEvent.setup();
  render(<ModalExample />);
  
  const openButton = screen.getByRole('button', { name: /open modal/i });
  await user.click(openButton);
  
  // Focus should move to modal
  const modal = screen.getByRole('dialog');
  const closeButton = within(modal).getByRole('button', { name: /close/i });
  
  expect(closeButton).toHaveFocus();
});

test('focus returns after modal closes', async () => {
  const user = userEvent.setup();
  render(<ModalExample />);
  
  const openButton = screen.getByRole('button', { name: /open modal/i });
  await user.click(openButton);
  
  const modal = screen.getByRole('dialog');
  const closeButton = within(modal).getByRole('button', { name: /close/i });
  await user.click(closeButton);
  
  // Focus should return to open button
  expect(openButton).toHaveFocus();
});

test('tab order is logical', async () => {
  const user = userEvent.setup();
  render(<HomePage />);
  
  await user.tab(); // Skip link
  expect(screen.getByRole('link', { name: /skip to main/i })).toHaveFocus();
  
  await user.tab(); // Logo
  expect(screen.getByRole('link', { name: /home/i })).toHaveFocus();
  
  await user.tab(); // First nav link
  expect(screen.getByRole('link', { name: /shop/i })).toHaveFocus();
});
```

---

### Accessibility Testing Tools

**Browser Extensions:**
- **axe DevTools** - Automated accessibility testing
- **WAVE** - Visual accessibility feedback
- **Lighthouse** - Accessibility audit

**Screen Readers:**
- **VoiceOver** (macOS/iOS) - Cmd + F5
- **NVDA** (Windows) - Free download
- **JAWS** (Windows) - Commercial
- **TalkBack** (Android) - Built-in

**Keyboard Testing:**
- **Tab** - Move forward
- **Shift + Tab** - Move backward
- **Enter** - Activate link/button
- **Space** - Activate button
- **Escape** - Close dialog
- **Arrow keys** - Navigate within widget

---

## Common Mistakes

### ❌ Mistake 1: Removing Focus Outline

```css
/* ❌ WRONG - Never remove without replacement */
*:focus {
  outline: none;
}

/* ✅ CORRECT - Keep or replace with custom indicator */
*:focus-visible {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
}
```

---

### ❌ Mistake 2: Positive `tabindex`

```tsx
{/* ❌ WRONG - Disrupts tab order */}
<button tabIndex={5}>Button</button>

{/* ✅ CORRECT - Use natural order or 0 */}
<button>Button</button>
```

---

### ❌ Mistake 3: Focus Trap Without Escape

```tsx
// ❌ WRONG - No way to escape
const Modal = ({ children }) => {
  // Focus trapped, but no Escape key handler
  return <div className="modal">{children}</div>;
};

// ✅ CORRECT - Escape key closes modal
const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  return <div className="modal">{children}</div>;
};
```

---

### ❌ Mistake 4: Not Restoring Focus

```tsx
// ❌ WRONG - Focus lost after modal closes
const Modal = ({ isOpen, children }) => {
  return isOpen ? <div className="modal">{children}</div> : null;
};

// ✅ CORRECT - Focus restored to trigger
const Modal = ({ isOpen, onClose, children }) => {
  const previousFocusRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
    } else {
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);
  
  return isOpen ? <div className="modal">{children}</div> : null;
};
```

---

## Related Documentation

- [Responsive Navigation](../responsive/navigation.md) - Navigation patterns with keyboard support
- [Animations](./animations.md) - Focus visibility during animations
- [Color Tokens](../design-tokens/colors.md) - Focus ring color standards
- [WCAG 2.2 Focus Guidelines](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)

---

## Summary

### ✅ Focus Management Best Practices

1. **Visible:** Focus indicators always visible (3:1 contrast minimum)
2. **Logical Order:** Tab order follows visual reading order
3. **Skip Links:** "Skip to main content" on every page
4. **Modal Traps:** Focus trapped in modals, Escape closes
5. **Focus Restoration:** Focus returns to trigger after closing
6. **Keyboard Support:** All interactive elements keyboard accessible
7. **Screen Readers:** ARIA live regions announce dynamic changes
8. **No Positive `tabindex`:** Never use `tabindex="1+"`, only `0` or `-1`

### 📊 Quick Reference

| Element | Focus Behavior | Keyboard | ARIA |
|---------|---------------|----------|------|
| **Button** | Visible outline | Enter, Space | - |
| **Link** | Visible outline | Enter | `aria-current="page"` for current |
| **Modal** | Focus trapped | Tab, Shift+Tab, Escape | `role="dialog"`, `aria-modal="true"` |
| **Dropdown** | Arrow nav | Tab, Arrow, Escape | `aria-haspopup`, `aria-expanded` |
| **Tabs** | Arrow switch tabs | Tab, Arrow, Home, End | `role="tablist"`, `aria-selected` |
| **Toast** | No focus steal | Escape | `role="status"`, `aria-live="polite"` |

---

**Version:** 1.0  
**Last Updated:** January 12, 2026  
**Maintained By:** Development Team
