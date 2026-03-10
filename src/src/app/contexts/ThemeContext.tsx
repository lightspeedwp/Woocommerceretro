/**
 * ThemeContext.tsx
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No destructuring in parameters
 * 3. ASCII only
 */

import React from 'react';
var createContext = React.createContext;
var useContext = React.useContext;
var useState = React.useState;
var useEffect = React.useEffect;

var ThemeContext = createContext(undefined);

export function useTheme() {
  var context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider(props) {
  var children = props.children;

  var _ts = useState(function() {
    try {
      var storedStyle = localStorage.getItem('theme-style');
      var storedMode = localStorage.getItem('theme-mode');
      
      var validStyles = ['default', 'blue', 'purple', 'green', 'ocean', 'forest', 'sunset'];
      var validModes = ['light', 'dark'];
      
      var style = (storedStyle && validStyles.indexOf(storedStyle) !== -1) ? storedStyle : 'default';
      var mode = (storedMode && validModes.indexOf(storedMode) !== -1) ? storedMode : 'light';
      
      if (!storedMode && typeof window !== 'undefined' && window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          mode = 'dark';
        }
      }
      
      return { style: style, mode: mode };
    } catch (e) {
      return { style: 'default', mode: 'light' };
    }
  });
  var theme = _ts[0];
  var setThemeState = _ts[1];

  useEffect(function() {
    try {
      if (typeof document === 'undefined') return;
      var root = document.documentElement;
      var themes = ['theme-default', 'theme-blue', 'theme-purple', 'theme-green', 'theme-ocean', 'theme-forest', 'theme-sunset'];
      
      root.classList.remove('light', 'dark');
      for (var i = 0; i < themes.length; i++) {
        root.classList.remove(themes[i]);
      }
      
      root.classList.add(theme.mode);
      root.classList.add('theme-' + theme.style);
      
      if (theme.mode === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      
      localStorage.setItem('theme-style', theme.style);
      localStorage.setItem('theme-mode', theme.mode);
    } catch (e) {
      // Ignored
    }
  }, [theme]);

  function toggleMode() {
    setThemeState(function(prev) {
      var newMode = prev.mode === 'light' ? 'dark' : 'light';
      return { style: prev.style, mode: newMode };
    });
  }

  function setMode(mode) {
    setThemeState(function(prev) {
      return { style: prev.style, mode: mode };
    });
  }

  function setStyle(style) {
    setThemeState(function(prev) {
      return { style: style, mode: prev.mode };
    });
  }

  function setTheme(config) {
    setThemeState(config);
  }

  var value = {
    theme: theme,
    mode: theme.mode,
    style: theme.style,
    toggleMode: toggleMode,
    setMode: setMode,
    setStyle: setStyle,
    setTheme: setTheme,
    isDark: theme.mode === 'dark',
  };

  return React.createElement(ThemeContext.Provider, { value: value }, children);
}