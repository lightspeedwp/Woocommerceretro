import React from 'react';
import { Sun, Moon } from '@phosphor-icons/react';
import * as ThemeContextModule from '../../../contexts/ThemeContext';

var useTheme = ThemeContextModule.useTheme;

// Safe icon fallbacks
var IconSun = Sun || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, '☀'); });
var IconMoon = Moon || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, '☾'); });

/**
 * ThemeToggle - Multi-Theme System
 */
export function ThemeToggle() {
  var themeContext = useTheme();
  
  if (!themeContext) return null;
  
  var mode = themeContext.mode;
  var toggleMode = themeContext.toggleMode;

  var handleClick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMode();
  };

  var isLight = mode === 'light';
  var label = 'Switch to ' + (isLight ? 'dark' : 'light') + ' mode';

  return React.createElement('button', {
    onClick: handleClick,
    type: 'button',
    className: 'wp-block-theme-toggle',
    'aria-label': label,
    title: label
  },
    isLight ? 
      React.createElement(IconMoon, { className: 'wp-block-theme-toggle__icon', 'aria-hidden': 'true' }) : 
      React.createElement(IconSun, { className: 'wp-block-theme-toggle__icon', 'aria-hidden': 'true' })
  );
}