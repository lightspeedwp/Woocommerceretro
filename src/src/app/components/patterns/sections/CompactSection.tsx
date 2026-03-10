/**
 * Compact Section Pattern
 * 
 * White/dark background section with reduced padding for dense information bands,
 * supplementary content, and space-efficient layouts.
 * 
 * **Category:** Patterns > Sections
 * **WordPress Equivalent:** Group Block with compact style
 * **Version:** 3.0 (FSE Aligned)
 */

import React from 'react';
import * as GroupModule from '../../blocks/design/Group';
import * as ButtonsModule from '../../blocks/design/Buttons';

var Group = GroupModule.Group;
var Button = ButtonsModule.Button;

// CompactSectionProps structure
// - heading?: string
// - headingLevel?: 2 | 3 | 4 | 5 | 6
// - subheading?: string
// - content?: React.ReactNode
// - cta?: { label: string, href: string, variant?: 'default' | 'secondary' | 'outline' | 'ghost' }
// - id?: string
// - className?: string
// - ariaLabel?: string
// - children?: React.ReactNode

/**
 * Compact Section Pattern Component
 */
export function CompactSection(props) {
  var heading = props.heading;
  var headingLevel = props.headingLevel || 2;
  var subheading = props.subheading;
  var content = props.content;
  var cta = props.cta;
  var id = props.id;
  var className = props.className || '';
  var ariaLabel = props.ariaLabel;
  var children = props.children;

  var HeadingTag = 'h' + headingLevel;
  
  var headingElement = heading ? React.createElement(HeadingTag, { 
    key: 'h', 
    className: "wp-section-compact__heading" 
  }, heading) : null;

  var subheadingElement = subheading ? React.createElement('p', { 
    key: 'sub', 
    className: "wp-section-compact__subheading" 
  }, subheading) : null;

  var contentElement = content ? React.createElement('div', { 
    key: 'c', 
    className: "wp-section-compact__content" 
  }, content) : null;

  var childrenElement = children ? React.createElement('div', { 
    key: 'kids', 
    className: "wp-section-compact__content" 
  }, children) : null;

  var ctaElement = cta ? React.createElement('div', { 
    key: 'cta', 
    className: "wp-section-compact__cta" 
  }, 
    React.createElement(Button, {
      variant: cta.variant || 'default',
      size: "default",
      to: (cta.href && cta.href.indexOf('/') === 0 ? cta.href : undefined),
      href: (cta.href && cta.href.indexOf('/') !== 0 ? cta.href : undefined)
    }, cta.label)
  ) : null;

  var innerContent = [
    headingElement,
    subheadingElement,
    contentElement,
    childrenElement,
    ctaElement
  ];

  return React.createElement(Group, {
    as: "section",
    sectionStyle: "compact",
    paddingPreset: "compact",
    width: "constrained",
    className: className,
    ariaLabel: ariaLabel,
    id: id
  }, innerContent);
}

CompactSection.displayName = 'CompactSection';
