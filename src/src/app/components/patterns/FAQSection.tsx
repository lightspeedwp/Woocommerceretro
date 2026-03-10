/**
 * FAQSection.tsx - FAQ Pattern
 * 
 * Reusable accordion-style FAQ section.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
import * as AccordionModule from '../blocks/design/Accordion';
import * as MutedSectionModule from './sections/MutedSection';
import * as TypographyModule from '../common/Typography';

var Accordion = AccordionModule.Accordion;
var AccordionItem = AccordionModule.AccordionItem;
var AccordionTrigger = AccordionModule.AccordionTrigger;
var AccordionContent = AccordionModule.AccordionContent;
var MutedSection = MutedSectionModule.MutedSection;
var Typography = TypographyModule.Typography;

export function FAQSection(props) {
  var title = props.title || "Frequently Asked Questions";
  var heading = props.heading;
  var description = props.description;
  var items = props.items || [];
  var faqs = props.faqs;
  var className = props.className || '';
  var id = props.id;

  var finalItems = faqs || items;

  var headerChildren = [];
  headerChildren.push(React.createElement(Typography, { 
    variant: "h2",
    key: "h"
  }, heading || title));

  if (description) {
    headerChildren.push(React.createElement(Typography, { 
      variant: "body", 
      className: "wp-faq-section__description",
      key: "d"
    }, description));
  }

  var headerElement = React.createElement('div', { 
    className: "wp-faq-section__header" 
  }, headerChildren);

  var accordionItems = finalItems.map(function(item, index) {
    var itemKey = item.id || "faq-" + index;
    
    return React.createElement(AccordionItem, {
      key: itemKey,
      value: itemKey
    }, [
      React.createElement(AccordionTrigger, { 
        key: "trigger-" + itemKey 
      }, item.question),
      React.createElement(AccordionContent, { 
        key: "content-" + itemKey 
      }, React.createElement('div', { 
        dangerouslySetInnerHTML: { __html: item.answer } 
      }))
    ]);
  });

  var accordionElement = React.createElement(Accordion, {
    type: "single",
    collapsible: true,
    className: "wp-block-accordion--faq"
  }, accordionItems);

  var contentElement = React.createElement('div', { 
    className: "wp-faq-section__content" 
  }, [headerElement, accordionElement]);

  return React.createElement(MutedSection, {
    id: id,
    className: "wp-faq-section " + className,
    content: contentElement
  });
}

FAQSection.displayName = 'FAQSection';