import React from 'react';
import { Moon, Sun } from '@phosphor-icons/react';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * DarkModeToggle Component - Funky Redesign
 */
export const DarkModeToggle = () => {
  const { mode, toggleMode, isDark } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className="dark-mode-toggle funky-theme-toggle"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      title={`Current: ${mode} mode. Click to toggle.`}
    >
      <span className="dark-mode-toggle__icon">
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </span>
      <span className="dark-mode-toggle__label">
        {isDark ? 'Light' : 'Dark'} Mode
      </span>
    </button>
  );
}

DarkModeToggle.displayName = 'DarkModeToggle';