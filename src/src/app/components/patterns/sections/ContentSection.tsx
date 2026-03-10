/**
 * ContentSection.tsx - Pattern
 * 
 * Standard white/dark background section for general content areas.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. No destructuring in parameters
 */

import React from 'react';
import * as GroupModule from '../../blocks/design/Group';
import * as ButtonsModule from '../../blocks/design/Buttons';

var Group = GroupModule.Group;
var Button = ButtonsModule.Button;

// ContentSectionProps structure
// - heading?: string
// - headingLevel?: 2 | 3 | 4 | 5 | 6
// - subheading?: string
// - content?: React.ReactNode
// - cta?: { label: string, href: string, variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'cta' }
// - id?: string
// - className?: string
// - ariaLabel?: string
// - children?: React.ReactNode

/**
 * ContentSection Pattern Component
 */
export function ContentSection(props) {
  var heading = props.heading;
  var headingLevel = props.headingLevel || 2;
  var subheading = props.subheading;
  var content = props.content;
  var cta = props.cta;
  var id = props.id;
  var className = props.className;
  var ariaLabel = props.ariaLabel;
  var children = props.children;

  var HeadingTag = 'h' + headingLevel;

  var childrenElements = [];

  // Heading
  if (heading) {
    childrenElements.push(
      React.createElement(HeadingTag, { 
        key: 'heading',
        className: "wp-section-content__heading funky-title-neon" 
      }, heading)
    );
  }

  // Subheading
  if (subheading) {
    childrenElements.push(
      React.createElement('p', { 
        key: 'subheading',
        className: "wp-section-content__subheading" 
      }, subheading)
    );
  }

  // Content
  if (content) {
    childrenElements.push(
      React.createElement('div', { 
        key: 'content',
        className: "wp-section-content__content alignwide" 
      }, content)
    );
  }

  // Children
  if (children) {
    childrenElements.push(
      React.createElement('div', { 
        key: 'children',
        className: "wp-section-content__content" 
      }, children)
    );
  }

  // Call to Action
  if (cta) {
    var isInternal = cta.href.indexOf('/') === 0;
    childrenElements.push(
      React.createElement('div', { 
        key: 'cta',
        className: "wp-section-content__cta" 
      }, 
        React.createElement(Button, {
          variant: cta.variant || 'cta',
          size: "lg",
          to: isInternal ? cta.href : undefined,
          href: !isInternal ? cta.href : undefined,
          className: "wp-glow funky-btn"
        }, cta.label)
      )
    );
  }

  var sectionWrapper = React.createElement('div', { 
    className: "wp-section-content__wrapper" 
  }, childrenElements);

  return React.createElement(Group, {
    as: "section",
    sectionStyle: "default",
    paddingPreset: "section",
    width: "full",
    className: className,
    ariaLabel: ariaLabel,
    id: id
  }, sectionWrapper);
}

ContentSection.displayName = 'ContentSection';