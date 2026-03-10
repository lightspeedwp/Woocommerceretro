import React from 'react';
import { Moon, Sun } from '@phosphor-icons/react';

import * as ThemeContextModule from '../../contexts/ThemeContext';

var useTheme = ThemeContextModule.useTheme;

/**
 * DarkModeToggle Component — Funky Redesign
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function DarkModeToggle() {
  var theme = useTheme();
  var mode = theme.mode;
  var toggleMode = theme.toggleMode;
  var isDark = theme.isDark;

  return React.createElement('button', {
    onClick: toggleMode,
    className: "dark-mode-toggle funky-theme-toggle",
    'aria-label': 'Switch to ' + (isDark ? 'light' : 'dark') + ' mode',
    'aria-pressed': isDark,
    title: 'Current: ' + mode + ' mode. Click to toggle.'
  },
    React.createElement('span', { className: "dark-mode-toggle__icon" },
      isDark ? React.createElement(Sun, { size: 18 }) : React.createElement(Moon, { size: 18 })
    ),
    React.createElement('span', { className: "dark-mode-toggle__label" },
      isDark ? 'Light' : 'Dark',
      " Mode"
    )
  );
}

DarkModeToggle.displayName = 'DarkModeToggle';