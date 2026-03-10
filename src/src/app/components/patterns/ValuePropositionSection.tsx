import React from 'react';
import { Check } from '@phosphor-icons/react';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as TypographyModule from '../common/Typography';

var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;

// ValuePropositionFeature structure
// - id: string
// - text: string
// - icon?: any

// ValuePropositionSectionProps structure
// - heading: string
// - subheading?: string
// - description: string
// - features: ValuePropositionFeature[]
// - mediaType?: 'image' | 'video'
// - mediaSrc?: string
// - mediaAlt?: string
// - mediaPosition?: 'left' | 'right'
// - cta?: { label: string, href?: string, onClick?: () => void, variant?: 'primary' | 'cta' | 'outline' }
// - className?: string

/**
 * ValuePropositionSection Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function ValuePropositionSection(props) {
  var heading = props.heading;
  var subheading = props.subheading;
  var description = props.description;
  var features = props.features;
  var mediaType = props.mediaType === undefined ? 'image' : props.mediaType;
  var mediaSrc = props.mediaSrc;
  var mediaAlt = props.mediaAlt;
  var mediaPosition = props.mediaPosition === undefined ? 'right' : props.mediaPosition;
  var cta = props.cta;
  var className = props.className || '';

  var featureItems = features.map(function(feature) {
    var FeatureIcon = feature.icon || Check;
    return React.createElement('li', { key: feature.id, className: "wp-value-prop__feature-item" }, [
      React.createElement('div', { key: 'icon', className: "wp-value-prop__feature-icon" }, 
        React.createElement(FeatureIcon, { size: 16, 'aria-hidden': "true" })
      ),
      React.createElement('span', { key: 'text', className: "wp-value-prop__feature-text" }, feature.text)
    ]);
  });

  var ctaElement = cta ? React.createElement('div', { key: 'cta-wrap' }, 
    React.createElement(Button, {
      variant: cta.variant || 'cta',
      size: "lg",
      to: cta.href,
      onClick: cta.onClick
    }, cta.label)
  ) : null;

  var contentColumn = React.createElement('div', { key: 'content', className: "wp-value-prop__content" }, [
    subheading ? React.createElement('div', { key: 'sub', className: "wp-value-prop__subheading" }, 
      React.createElement('small', null, React.createElement('strong', null, subheading))
    ) : null,
    React.createElement(Typography, { key: 'h', variant: "h2", className: "wp-value-prop__heading funky-text-neon" }, heading),
    React.createElement(Typography, { key: 'd', variant: "p", className: "wp-value-prop__description" }, description),
    React.createElement('ul', { key: 'f', className: "wp-value-prop__features" }, featureItems),
    ctaElement
  ]);

  var mediaColumn = mediaSrc ? React.createElement('div', { key: 'media', className: "wp-value-prop__media" }, 
    mediaType === 'video' ? React.createElement('video', {
      src: mediaSrc,
      controls: true,
      className: "wp-value-prop__video",
      'aria-label': mediaAlt || 'Product video'
    }, "Your browser does not support the video tag.") : 
    React.createElement('img', {
      src: mediaSrc,
      alt: mediaAlt || 'Product illustration',
      className: "wp-value-prop__image",
      loading: "lazy"
    })
  ) : null;

  var children = mediaPosition === 'left' ? [mediaColumn, contentColumn] : [contentColumn, mediaColumn];

  return React.createElement('div', { 
    className: "wp-value-prop funky-promise-grid " + className 
  }, children);
}