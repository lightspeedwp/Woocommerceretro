# ArchiveCTA Pattern

**Version:** 3.0  
**Type:** Pattern (Reusable Section)  
**WordPress Mapping:** Group Block with Inner Blocks (Heading, Paragraph, Button)  
**File:** `/components/patterns/ArchiveCTA.tsx`

---

## Overview

The ArchiveCTA pattern is a reusable call-to-action section specifically designed for archive templates (shop, blog, category pages). It provides a conversion-optimized CTA with title, description, and action button that triggers an enquiry modal.

**Purpose:**
- Drive conversions on archive pages
- Provide consistent CTA across all archives
- Trigger enquiry/contact modal
- Support A/B testing for optimization

**WordPress Equivalent:**
- Group Block with Inner Blocks
- Call to Action Block Pattern
- Marketing CTA Section

---

## Component Structure

```
ArchiveCTA (Pattern)
├── Section Wrapper (AccentSection | DarkSection | MutedSection)
│   ├── Heading Block
│   ├── Paragraph Block
│   └── Button Block
└── EnquiryModal (Modal)
    └── Contact/Enquiry Form
```

---

## Props Interface

```typescript
interface ArchiveCTAProps {
  content: CTAContent;                      // CTA content from mock data
  variant?: 'default' | 'gradient' | 'dark'; // Visual style variant
  abTest?: ABTest<Partial<CTAContent>>;     // Optional A/B test config
  testId?: string;                          // Test ID for conversion tracking
}
```

---

**Last Updated:** December 27, 2024  
**Maintainer:** WooCommerce Prototype Team  
**Status:** ✅ Production Ready
