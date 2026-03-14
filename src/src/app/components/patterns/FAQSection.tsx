/**
 * FAQSection.tsx - FAQ Pattern
 * 
 * Reusable accordion-style FAQ section.
 */

import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../blocks/design/Accordion';
import { MutedSection } from './sections/MutedSection';
import { Typography } from '../common/Typography';

interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  heading?: string;
  description?: string;
  items?: FAQItem[];
  faqs?: FAQItem[];
  className?: string;
  id?: string;
}

export const FAQSection = ({
  title = "Frequently Asked Questions",
  heading,
  description,
  items = [],
  faqs,
  className = '',
  id,
}: FAQSectionProps) => {
  const finalItems = faqs || items;

  const headerElement = (
    <div className="wp-faq-section__header">
      <Typography variant="h2">{heading || title}</Typography>
      {description && (
        <Typography variant="body" className="wp-faq-section__description">
          {description}
        </Typography>
      )}
    </div>
  );

  const accordionElement = (
    <Accordion type="single" collapsible className="wp-block-accordion--faq">
      {finalItems.map((item, index) => {
        const itemKey = item.id || `faq-${index}`;
        return (
          <AccordionItem key={itemKey} value={itemKey}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );

  const contentElement = (
    <div className="wp-faq-section__content">
      {headerElement}
      {accordionElement}
    </div>
  );

  return (
    <MutedSection
      id={id}
      className={`wp-faq-section ${className}`}
      content={contentElement}
    />
  );
}

FAQSection.displayName = 'FAQSection';