import React from 'react';

var paddingClasses = {
  none: '',
  xs: 'wp-p-2',
  sm: 'wp-p-3',
  md: 'wp-p-4',
  lg: 'wp-p-6',
  xl: 'wp-p-8',
  '2xl': 'wp-p-8',
};

var marginClasses = {
  none: '',
  xs: 'wp-mb-2',
  sm: 'wp-mb-3',
  md: 'wp-mb-4',
  lg: 'wp-mb-6',
  xl: 'wp-mb-8',
  '2xl': 'wp-mb-12',
};

var borderRadiusClasses = {
  none: '',
  sm: 'wp-rounded',
  md: 'wp-rounded-md',
  lg: 'wp-rounded-lg',
  xl: 'wp-rounded-xl',
  full: 'wp-rounded-full',
};

var gapClasses = {
  none: '',
  xs: 'wp-gap-1',
  sm: 'wp-gap-2',
  md: 'wp-gap-4',
  lg: 'wp-gap-6',
  xl: 'wp-gap-8',
  '2xl': 'wp-gap-12',
};

var widthClasses = {
  constrained: 'wp-max-w-content wp-mx-auto',
  wide: 'wp-max-w-wide wp-mx-auto',
  full: 'wp-w-full',
};

var groupAlignClasses = {
  default: 'wp-max-w-content wp-mx-auto',
  wide: 'wp-max-w-wide wp-mx-auto',
  full: 'wp-w-full',
};

var sectionStyleClasses = {
  default: 'wp-bg-white wp-text-gray-900',
  dark: 'wp-bg-gray-900 wp-text-white',
  accent: 'wp-bg-purple-600 wp-text-white',
  muted: 'wp-bg-gray-50 wp-text-gray-900',
  hero: 'wp-bg-purple-50 wp-text-gray-900',
  bordered: 'wp-bg-white wp-text-gray-900',
  'full-width': 'wp-w-full wp-bg-white wp-text-gray-900',
  compact: 'wp-bg-white wp-text-gray-900',
};

var paddingPresetStyles = {
  section: { paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' },
  hero: { paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)' },
  compact: { paddingTop: 'clamp(2rem, 5vw, 4rem)', paddingBottom: 'clamp(2rem, 5vw, 4rem)' },
  none: {},
};

var variantClasses = {
  default: '',
  surface: 'wp-bg-white',
  hero: 'wp-bg-purple-50',
  brand: 'wp-bg-purple-600 wp-text-white',
  accent: 'wp-bg-purple-50',
};

var layoutClasses = {
  flow: '',
  flex: 'wp-flex',
  grid: 'wp-grid',
};

var columnClasses = {
  '1': 'wp-grid-cols-1',
  '2': 'wp-grid-cols-2',
  '3': 'wp-grid-cols-3',
  '4': 'wp-grid-cols-4',
  'responsive': 'wp-grid-cols-1 md:wp-grid-cols-2 lg:wp-grid-cols-4',
  'responsive-3': 'wp-grid-cols-1 md:wp-grid-cols-2 lg:wp-grid-cols-3',
};

/**
 * Group Block Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export function Group(props) {
  var sectionStyle = props.sectionStyle;
  var variant = props.variant || 'default';
  var Tag = props.as || 'div';
  var width = props.width;
  var align = props.align || 'default';
  var paddingPreset = props.paddingPreset;
  var backgroundColor = props.backgroundColor;
  var textColor = props.textColor;
  var padding = props.padding || 'none';
  var margin = props.margin || 'none';
  var borderRadius = props.borderRadius || 'none';
  var borderWidth = props.borderWidth || 'none';
  var borderColor = props.borderColor;
  var shadow = props.shadow || 'none';
  var layout = props.layout || 'flow';
  var flexDirection = props.flexDirection || 'column';
  var gap = props.gap || 'none';
  var columns = props.columns;
  var className = props.className || '';
  var style = props.style;
  var children = props.children;
  var ariaLabel = props.ariaLabel;
  var id = props.id;

  var widthClass = width ? (widthClasses[width] || '') : (groupAlignClasses[align] || '');
  var styleClass = sectionStyle ? (sectionStyleClasses[sectionStyle] || '') : (variantClasses[variant] || '');
  var paddingClass = paddingPreset ? '' : (paddingClasses[padding] || '');
  var paddingStyle = paddingPreset ? (paddingPresetStyles[paddingPreset] || {}) : {};
  
  var finalStyle = {};
  if (paddingStyle) {
    var pKeys = Object.keys(paddingStyle);
    for (var pi = 0; pi < pKeys.length; pi++) {
      finalStyle[pKeys[pi]] = paddingStyle[pKeys[pi]];
    }
  }
  
  if (backgroundColor) finalStyle.backgroundColor = backgroundColor;
  if (textColor) finalStyle.color = textColor;
  if (borderColor) finalStyle.borderColor = borderColor;
  
  if (style) {
    var sKeys = Object.keys(style);
    for (var si = 0; si < sKeys.length; si++) {
      finalStyle[sKeys[si]] = style[sKeys[si]];
    }
  }

  var combinedClassName = [
    "wp-block-group",
    styleClass || '',
    sectionStyle !== 'full-width' ? (widthClass || '') : '',
    paddingClass || '',
    marginClasses[margin] || '',
    borderRadiusClasses[borderRadius] || '',
    layoutClasses[layout] || '',
    layout === 'flex' && flexDirection === 'row' ? 'wp-flex-row' : '',
    layout === 'flex' && flexDirection === 'column' ? 'wp-flex-col' : '',
    (layout === 'flex' || layout === 'grid') ? (gapClasses[gap] || '') : '',
    layout === 'grid' && columns ? (columnClasses[String(columns)] || '') : '',
    className,
    'funky-group'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(Tag, {
    id: id,
    className: combinedClassName,
    style: finalStyle,
    'aria-label': ariaLabel
  }, children);
}

Group.displayName = 'Group';
