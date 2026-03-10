/**
 * Dark Section Pattern
 * 
 * High-contrast dark background section for CTAs, newsletter signups,
 * and featured content that needs to stand out.
 * 
 * **Category:** Patterns > Sections
 * **WordPress Equivalent:** Group Block with dark style
 * **Version:** 3.0 (FSE Aligned)
 */

import React from 'react';
import * as GroupModule from '../../blocks/design/Group';
import * as ButtonsModule from '../../blocks/design/Buttons';

var Group = GroupModule.Group;
var Button = ButtonsModule.Button;

// DarkSectionProps structure
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
 * Dark Section Pattern Component
 */
export function DarkSection(props) {
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
    className: "wp-section-dark__heading" 
  }, heading) : null;

  var subheadingElement = subheading ? React.createElement('p', { 
    key: 'sub', 
    className: "wp-section-dark__subheading" 
  }, subheading) : null;

  var contentElement = content ? React.createElement('div', { 
    key: 'c', 
    className: "wp-section-dark__content" 
  }, content) : null;

  var childrenElement = children ? React.createElement('div', { 
    key: 'kids', 
    className: "wp-section-dark__content" 
  }, children) : null;

  var ctaElement = cta ? React.createElement('div', { 
    key: 'cta', 
    className: "wp-section-dark__cta" 
  }, 
    React.createElement(Button, {
      variant: cta.variant || 'secondary',
      size: "lg",
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
    sectionStyle: "dark",
    paddingPreset: "section",
    width: "constrained",
    className: className,
    ariaLabel: ariaLabel,
    id: id
  }, innerContent);
}

DarkSection.displayName = 'DarkSection';
