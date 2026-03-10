import React from 'react';
import * as ThemeConstantsModule from '../../constants/theme';

var CONTAINER = ThemeConstantsModule.CONTAINER;

/**
 * Container Component
 */
export function Container(props) {
  var variant = props.variant || 'site';
  var className = props.className || '';
  var children = props.children;

  var getContainerClass = function() {
    if (!CONTAINER) return 'wp-container-fallback';
    if (variant === 'full') return 'alignfull';
    if (variant === 'wide') return 'alignwide';
    return CONTAINER[variant] || 'wp-container-fallback';
  };

  var containerClass = getContainerClass();

  return React.createElement('div', { 
    className: containerClass + (className ? ' ' + className : '')
  }, children);
};

Container.displayName = 'Container';