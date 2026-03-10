import React from 'react';
import * as GroupModule from '../../blocks/design/Group';
import * as ButtonsModule from '../../blocks/design/Buttons';

var Group = GroupModule.Group;
var Button = ButtonsModule.Button;

// BorderedSectionProps structure
// - heading?: string
// - headingLevel?: 2 | 3 | 4 | 5 | 6
// - subheading?: string
// - content?: React.ReactNode
// - cta?: { label: string, href: string, variant?: 'default' | 'secondary' | 'outline' | 'ghost' }
// - borderPosition?: 'all' | 'top' | 'bottom' | 'y'
// - borderStyle?: 'solid' | 'dashed' | 'dotted'
// - id?: string
// - className?: string
// - ariaLabel?: string
// - children?: React.ReactNode

/**
 * Bordered Section Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No template literals
 */
export function BorderedSection(props) {
  var heading = props.heading;
  var headingLevel = props.headingLevel || 2;
  var subheading = props.subheading;
  var content = props.content;
  var cta = props.cta;
  var borderPosition = props.borderPosition || 'all';
  var borderStyle = props.borderStyle || 'solid';
  var id = props.id;
  var className = props.className || '';
  var ariaLabel = props.ariaLabel;
  var children = props.children;

  var HeadingTag = 'h' + headingLevel;
  
  var borderPositionClasses = {
    all: 'border',
    top: 'border-t',
    bottom: 'border-b',
    y: 'border-y',
  };
  
  var borderStyleClass = borderStyle !== 'solid' ? 'border-' + borderStyle : '';
  
  var headingElement = heading ? React.createElement(HeadingTag, { 
    key: 'h', 
    className: "wp-section-bordered__heading" 
  }, heading) : null;

  var subheadingElement = subheading ? React.createElement('p', { 
    key: 'sub', 
    className: "wp-section-bordered__subheading" 
  }, subheading) : null;

  var contentElement = content ? React.createElement('div', { 
    key: 'c', 
    className: "wp-section-bordered__content" 
  }, content) : null;

  var childrenElement = children ? React.createElement('div', { 
    key: 'kids', 
    className: "wp-section-bordered__content" 
  }, children) : null;

  var ctaElement = cta ? React.createElement('div', { 
    key: 'cta', 
    className: "wp-section-bordered__cta" 
  }, 
    React.createElement(Button, {
      variant: cta.variant || 'default',
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

  var combinedClassName = borderPositionClasses[borderPosition] + " " + borderStyleClass + " " + className;

  return React.createElement(Group, {
    as: "section",
    sectionStyle: "bordered",
    paddingPreset: "section",
    width: "constrained",
    className: combinedClassName,
    ariaLabel: ariaLabel,
    id: id
  }, innerContent);
}

BorderedSection.displayName = 'BorderedSection';