/**
 * ThemeContext.tsx
 *
 * Theme state management with style variants and light/dark mode.
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';

type ThemeStyle = 'default' | 'blue' | 'purple' | 'green' | 'ocean' | 'forest' | 'sunset';
type ThemeMode = 'light' | 'dark';

interface ThemeConfig {
  style: ThemeStyle;
  mode: ThemeMode;
}

interface ThemeContextValue {
  theme: ThemeConfig;
  mode: ThemeMode;
  style: ThemeStyle;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
  setStyle: (style: ThemeStyle) => void;
  setTheme: (config: ThemeConfig) => void;
  isDark: boolean;
}

const VALID_STYLES: ThemeStyle[] = ['default', 'blue', 'purple', 'green', 'ocean', 'forest', 'sunset'];
const VALID_MODES: ThemeMode[] = ['light', 'dark'];

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeConfig>(() => {
    try {
      const storedStyle = localStorage.getItem('theme-style');
      const storedMode = localStorage.getItem('theme-mode');

      const style: ThemeStyle = (storedStyle && VALID_STYLES.includes(storedStyle as ThemeStyle))
        ? storedStyle as ThemeStyle
        : 'default';
      let mode: ThemeMode = (storedMode && VALID_MODES.includes(storedMode as ThemeMode))
        ? storedMode as ThemeMode
        : 'light';

      if (!storedMode && typeof window !== 'undefined' && window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          mode = 'dark';
        }
      }

      return { style, mode };
    } catch (e) {
      return { style: 'default', mode: 'light' };
    }
  });

  useEffect(() => {
    try {
      if (typeof document === 'undefined') return;
      const root = document.documentElement;

      root.classList.remove('light', 'dark');
      VALID_STYLES.forEach((s) => {
        root.classList.remove(`theme-${s}`);
      });

      root.classList.add(theme.mode);
      root.classList.add(`theme-${theme.style}`);

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

  const toggleMode = useCallback(() => {
    setThemeState((prev) => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light'
    }));
  }, []);

  const setMode = useCallback((mode: ThemeMode) => {
    setThemeState((prev) => ({ ...prev, mode }));
  }, []);

  const setStyle = useCallback((style: ThemeStyle) => {
    setThemeState((prev) => ({ ...prev, style }));
  }, []);

  const setTheme = useCallback((config: ThemeConfig) => {
    setThemeState(config);
  }, []);

  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    mode: theme.mode,
    style: theme.style,
    toggleMode,
    setMode,
    setStyle,
    setTheme,
    isDark: theme.mode === 'dark',
  }), [theme, toggleMode, setMode, setStyle, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}