/**
 * Full Width Section Pattern
 * 
 * Edge-to-edge section that spans the full viewport width.
 * Perfect for media-rich content, image galleries, and immersive experiences.
 * 
 * **Category:** Patterns > Sections
 * **WordPress Equivalent:** Group Block with full-width style
 * **Version:** 3.0 (FSE Aligned)
 */

import React from 'react';
import * as GroupModule from '../../blocks/design/Group';
import * as ButtonsModule from '../../blocks/design/Buttons';

var Group = GroupModule.Group;
var Button = ButtonsModule.Button;

// FullWidthSectionProps structure
// - content?: React.ReactNode
// - backgroundImage?: string
// - overlay?: number
// - backgroundSize?: 'cover' | 'contain' | 'auto'
// - backgroundPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right'
// - minHeight?: string
// - padding?: boolean
// - id?: string
// - className?: string
// - ariaLabel?: string
// - children?: React.ReactNode

export function FullWidthSection(props) {
  var content = props.content;
  var backgroundImage = props.backgroundImage;
  var overlay = props.overlay !== undefined ? props.overlay : 0.5;
  var backgroundSize = props.backgroundSize || 'cover';
  var backgroundPosition = props.backgroundPosition || 'center';
  var minHeight = props.minHeight;
  var padding = props.padding !== undefined ? props.padding : false;
  var id = props.id;
  var className = props.className || '';
  var ariaLabel = props.ariaLabel;
  var children = props.children;

  var paddingClass = padding ? 'wp-full-width-section--padded' : '';
  var minHeightStyle = minHeight ? { minHeight: minHeight } : {};
  var bgClass = backgroundImage ? 'wp-full-width-section--relative wp-full-width-section--overflow-hidden' : '';
  var combinedClass = 'wp-full-width-section ' + paddingClass + ' ' + className + ' ' + bgClass;
  
  var bgStyle = backgroundImage ? {
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundSize: backgroundSize,
    backgroundPosition: backgroundPosition,
  } : undefined;

  var bgElements = [];
  if (backgroundImage) {
    bgElements.push(
      React.createElement('div', {
        key: 'bg',
        className: 'wp-full-width-section__background',
        style: bgStyle
      })
    );
    
    if (overlay > 0) {
      bgElements.push(
        React.createElement('div', {
          key: 'overlay',
          className: 'wp-full-width-section__overlay',
          style: { opacity: overlay }
        })
      );
    }
  }

  var contentWrapper = React.createElement('div', {
    className: backgroundImage ? 'wp-full-width-section__content' : ''
  }, [content, children]);

  var allElements = bgElements.concat([contentWrapper]);

  return React.createElement(Group, {
    as: "section",
    sectionStyle: "full-width",
    paddingPreset: "none",
    width: "full",
    className: combinedClass,
    ariaLabel: ariaLabel,
    id: id,
    style: minHeightStyle
  }, allElements);
}

FullWidthSection.displayName = 'FullWidthSection';
