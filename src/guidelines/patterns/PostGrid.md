# PostGrid Pattern

**Version:** 1.0  
**Type:** Pattern (Reusable Section)  
**WordPress Mapping:** Blog Post Collection Pattern  
**File:** `/components/patterns/PostGrid.tsx`

---

## Overview

The PostGrid pattern is a reusable section for displaying blog posts in a responsive grid layout. It composes PostCard blocks and handles responsive grid behavior with configurable columns for different viewports.

**Purpose:**
- Display blog post collections in grid format
- Provide responsive column configurations
- Compose PostCard blocks consistently
- Mirror ProductGrid pattern for posts

**WordPress Equivalent:**
- Query Loop Block with Post Template
- Blog Post Grid Pattern
- Post Collection Block

---

## Component Structure

```
PostGrid (Pattern)
└── PostCard (Block) × N
    ├── Featured Image
    ├── Categories
    ├── Title
    ├── Excerpt
    ├── Author Info
    ├── Date
    └── Read More Link
```

---

## Props Interface

```typescript
export interface PostGridProps {
  posts: BlogPost[];              // Array of blog post objects
  columns?: {                     // Responsive column configuration
    mobile?: number;              // Mobile columns (default: 1)
    tablet?: number;              // Tablet columns (default: 2)
    desktop?: number;             // Desktop columns (default: 3)
  };
  gap?: string;                   // Grid gap spacing (default: 'gap-8')
  className?: string;             // Additional CSS classes
}
```

---

**Last Updated:** December 27, 2024  
**Maintainer:** WooCommerce Prototype Team  
**Status:** ✅ Production Ready
