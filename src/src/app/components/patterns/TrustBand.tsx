import React from 'react';
import * as TrustFeaturesModule from '../../data/trustFeatures';

var trustFeatures = TrustFeaturesModule.trustFeatures;

/*
 * TrustBandProps:
 *   features?: TrustFeature[]
 *   layout?: 'horizontal' | 'grid'
 *   compact?: boolean
 *   className?: string
 */

/**
 * TrustBand Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function TrustBand(props) {
  var features = props.features || trustFeatures;
  var layout = props.layout === undefined ? 'horizontal' : props.layout;
  var compact = props.compact === undefined ? false : props.compact;
  var className = props.className || '';

  var containerClass = (layout === 'horizontal' ? "wp-trust-band wp-trust-band--horizontal " : "wp-trust-band wp-trust-band--grid ") + 
    (compact ? "wp-trust-band--gap-compact" : "wp-trust-band--gap-normal");

  var itemGapClass = compact ? "wp-trust-band__item--gap-compact" : "wp-trust-band__item--gap-normal";
  var titleClass = compact ? "wp-trust-band__title--compact" : "wp-trust-band__title--normal";
  var descClass = compact ? "wp-trust-band__description--compact" : "wp-trust-band__description--normal";
  var iconSize = compact ? 20 : 24;

  var items = features.map(function(feature) {
    var Icon = feature.icon;
    
    return React.createElement('div', {
      key: feature.id,
      className: "wp-trust-band__item " + itemGapClass
    }, [
      React.createElement(Icon, {
        key: 'icon',
        size: iconSize,
        className: "wp-trust-band__icon funky-text-neon",
        'aria-hidden': "true"
      }),
      React.createElement('div', { 
        key: 'title',
        className: "wp-trust-band__title " + titleClass 
      }, React.createElement('strong', null, feature.title)),
      React.createElement('div', { 
        key: 'desc',
        className: "wp-trust-band__description " + descClass 
      }, feature.description)
    ]);
  });

  return React.createElement('div', { className: containerClass + " " + className }, items);
}