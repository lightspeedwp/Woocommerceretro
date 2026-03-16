import React from 'react';
import { Sun, Moon } from '../../../utils/phosphor-compat';
import { useTheme } from '../../../contexts/ThemeContext';

/**
 * ThemeToggle - Multi-Theme System
 */
export const ThemeToggle = () => {
  const themeContext = useTheme();

  if (!themeContext) return null;

  const { mode, toggleMode } = themeContext;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMode();
  };

  const isLight = mode === 'light';
  const label = `Switch to ${isLight ? 'dark' : 'light'} mode`;

  return (
    <button onClick={handleClick} type="button" className="wp-block-theme-toggle" aria-label={label} title={label}>
      {isLight
        ? <Moon className="wp-block-theme-toggle__icon" aria-hidden="true" />
        : <Sun className="wp-block-theme-toggle__icon" aria-hidden="true" />
      }
    </button>
  );
}