# MobileMenu Part

**Category**: Parts - Navigation  
**Location**: `/components/parts/MobileMenu.tsx`  
**Version**: 2.1

---

## Purpose

Mobile navigation drawer/sheet that appears when the hamburger menu is tapped on mobile devices. Provides full site navigation in a mobile-optimized format.

---

## Implementation

```tsx
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { List as Menu, X } from '@phosphor-icons/react';
import { Button } from '../ui/button';
import { MainLogo } from '../common/Logo';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Open menu">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="mb-8">
          <MainLogo className="h-8" />
        </div>
        
        <nav className="space-y-4">
          <a 
            href="/shop" 
            className="block text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </a>
          <a 
            href="/about" 
            className="block text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="/contact" 
            className="block text-lg py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
```

---

## Key Features

- Slides in from left
- Logo at top
- Navigation links
- Close on link click
- Backdrop overlay
- Body scroll lock

---

## Related Parts

- [Header](Header.md) - Contains mobile menu trigger

---

## Related Guidelines

**CSS Optimization & Performance:**
- [CSS Optimization Guidelines](../../development/css-optimization-guidelines.md) - Comprehensive CSS optimization strategies for memory reduction
- [CSS Optimization Quick Reference](../../development/css-optimization-quick-reference.md) - Quick start guide for CSS optimization

---

## Back to Overview

[← Parts Overview](../overview-parts.md)