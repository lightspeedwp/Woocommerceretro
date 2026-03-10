# CategoryShowcaseGrid Pattern

**Version:** 1.0  
**Type:** Pattern (Category Display)  
**WordPress Mapping:** Category Grid Block Pattern  
**File:** `/components/patterns/CategoryShowcaseGrid.tsx`

---

## Overview

The CategoryShowcaseGrid pattern displays product categories in a visually appealing grid layout with images, titles, and product counts. It serves as a navigation hub for users to browse products by category.

**Purpose:**
- Showcase product categories visually
- Provide category navigation
- Display category images and counts
- Guide users to specific product types

**WordPress Equivalent:**
- Product Categories Block
- Category Grid Pattern
- Term Grid Block
- Category Showcase

---

## Component Structure

```
CategoryShowcaseGrid (Pattern)
└── Grid Container
    └── Category Card × N
        ├── Category Image
        ├── Category Name
        ├── Product Count
        └── Link to Category Archive
```

---

## Props Interface

```typescript
interface CategoryShowcaseGridProps {
  categories: Category[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  displayMode?: 'card' | 'minimal' | 'overlay';
  showCount?: boolean;
  aspectRatio?: '1/1' | '4/3' | '16/9';
  heading?: string;
  description?: string;
}
```

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
