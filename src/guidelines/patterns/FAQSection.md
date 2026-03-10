# FAQSection Pattern

**Category**: Patterns - Content  
**Location**: `/components/patterns/FAQSection.tsx`  
**Version**: 2.1

---

## Purpose

Displays a list of frequently asked questions in an accordion format, allowing users to expand/collapse individual questions.

---

## Implementation

```tsx
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  items,
}) => {
  return (
    <div>
      {title && (
        <h2 className="mb-8">{title}</h2>
      )}
      
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
```

---

## Usage

```tsx
<section className="section-default py-[clamp(3rem,8vw,6rem)]">
  <Container variant="content">
    <FAQSection 
      title="Common Questions"
      items={[
        {
          id: 'shipping',
          question: 'What are your shipping options?',
          answer: 'We offer free standard shipping on orders over £50...'
        },
        {
          id: 'returns',
          question: 'What is your return policy?',
          answer: '30-day returns on all items...'
        }
      ]}
    />
  </Container>
</section>
```

---

## Accessibility

- Keyboard navigable (Arrow keys, Enter, Space)
- Screen reader friendly
- ARIA attributes handled by Accordion component

---

## Related Guidelines

**CSS Optimization & Performance:**
- [CSS Optimization Guidelines](../development/css-optimization-guidelines.md) - Comprehensive CSS optimization strategies for memory reduction
- [CSS Optimization Quick Reference](../development/css-optimization-quick-reference.md) - Quick start guide for CSS optimization

---

## Back to Overview

[← Patterns Overview](../overview-patterns.md)
