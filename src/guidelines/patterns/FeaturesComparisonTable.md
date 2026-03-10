# FeaturesComparisonTable Pattern

**Version:** 1.0  
**Type:** Pattern (Comparison Display)  
**WordPress Mapping:** Comparison Table Block  
**File:** `/components/patterns/FeaturesComparisonTable.tsx`

---

## Overview

The FeaturesComparisonTable pattern displays a side-by-side comparison of product features, pricing plans, or service tiers to help users make informed decisions.

**Purpose:**
- Compare multiple options
- Highlight feature differences
- Aid purchase decisions
- Display pricing tiers
- Show plan comparisons

**WordPress Equivalent:**
- Table Block (Comparison Style)
- Pricing Comparison Block
- Features Table Pattern

---

## Component Structure

```
FeaturesComparisonTable (Pattern)
└── Table Container
    ├── Table Header (Column titles)
    ├── Table Body
    │   └── Feature Row × N
    │       ├── Feature Name
    │       └── Feature Value per Column
    └── Table Footer (CTAs)
```

---

## Props Interface

```typescript
interface FeaturesComparisonTableProps {
  columns: string[];
  features: ComparisonFeature[];
  highlightColumn?: number;
  showPricing?: boolean;
  pricing?: PricingData[];
  ctas?: ColumnCTA[];
  compact?: boolean;
}
```

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
