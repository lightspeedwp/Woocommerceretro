/**
 * MutedSection.tsx - Pattern
 * 
 * Subtle gray background section for alternating content areas.
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

// MutedSectionProps structure
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
 * MutedSection Pattern Component
 */
export function MutedSection(props) {
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
        className: "wp-section-muted__heading funky-title-neon" 
      }, heading)
    );
  }

  // Subheading
  if (subheading) {
    childrenElements.push(
      React.createElement('p', { 
        key: 'subheading',
        className: "wp-section-muted__subheading" 
      }, subheading)
    );
  }

  // Content
  if (content) {
    childrenElements.push(
      React.createElement('div', { 
        key: 'content',
        className: "wp-section-muted__content" 
      }, content)
    );
  }

  // Children
  if (children) {
    childrenElements.push(
      React.createElement('div', { 
        key: 'children',
        className: "wp-section-muted__content" 
      }, children)
    );
  }

  // Call to Action
  if (cta) {
    var isInternal = cta.href.indexOf('/') === 0;
    childrenElements.push(
      React.createElement('div', { 
        key: 'cta',
        className: "wp-section-muted__cta" 
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
    className: "wp-section-muted__content" 
  }, childrenElements);

  return React.createElement(Group, {
    as: "section",
    sectionStyle: "muted",
    paddingPreset: "section",
    width: "full",
    className: className,
    ariaLabel: ariaLabel,
    id: id
  }, sectionWrapper);
}

MutedSection.displayName = 'MutedSection';