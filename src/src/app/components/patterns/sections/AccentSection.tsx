import React from 'react';
import * as GroupModule from '../../blocks/design/Group';
import * as ButtonsModule from '../../blocks/design/Buttons';

var Group = GroupModule.Group;
var Button = ButtonsModule.Button;

// AccentSectionProps structure
// - heading?: string
// - headingLevel?: 2 | 3 | 4 | 5 | 6
// - subheading?: string
// - content?: React.ReactNode
// - cta?: { label: string, href: string, variant?: 'default' | 'secondary' | 'outline' | 'ghost' }
// - emphasis?: boolean
// - id?: string
// - className?: string
// - ariaLabel?: string
// - children?: React.ReactNode

/**
 * Accent Section Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No template literals
 */
export function AccentSection(props) {
  var heading = props.heading;
  var headingLevel = props.headingLevel || 2;
  var subheading = props.subheading;
  var content = props.content;
  var cta = props.cta;
  var emphasis = props.emphasis === undefined ? false : props.emphasis;
  var id = props.id;
  var className = props.className || '';
  var ariaLabel = props.ariaLabel;
  var children = props.children;

  var HeadingTag = 'h' + headingLevel;
  
  var headingElement = heading ? React.createElement(HeadingTag, { 
    key: 'h', 
    className: "wp-section-accent__heading" 
  }, heading) : null;

  var subheadingElement = subheading ? React.createElement('p', { 
    key: 'sub', 
    className: "wp-section-accent__subheading" 
  }, subheading) : null;

  var contentElement = content ? React.createElement('div', { 
    key: 'c', 
    className: "wp-section-accent__content" 
  }, content) : null;

  var childrenElement = children ? React.createElement('div', { 
    key: 'kids', 
    className: "wp-section-accent__content" 
  }, children) : null;

  var ctaElement = cta ? React.createElement('div', { 
    key: 'cta', 
    className: "wp-section-accent__cta" 
  }, 
    React.createElement(Button, {
      variant: cta.variant || 'secondary',
      size: "lg",
      to: (cta.href && cta.href.indexOf('/') === 0 ? cta.href : undefined),
      href: (cta.href && cta.href.indexOf('/') !== 0 ? cta.href : undefined)
    }, cta.label)
  ) : null;

  var innerContent = React.createElement('div', { 
    key: 'inner', 
    className: "wp-section-accent__content" 
  }, [
    headingElement,
    subheadingElement,
    contentElement,
    childrenElement,
    ctaElement
  ]);

  return React.createElement(Group, {
    as: "section",
    sectionStyle: "accent",
    paddingPreset: (emphasis ? 'hero' : 'section'),
    width: "full",
    className: className,
    ariaLabel: ariaLabel,
    id: id
  }, innerContent);
}

AccentSection.displayName = 'AccentSection';