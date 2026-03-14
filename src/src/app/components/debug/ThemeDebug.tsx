/**
 * ThemeDebug - Multi-Theme Diagnostic Panel
 */

import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

type ThemeStyle = 'default' | 'blue' | 'purple' | 'green' | 'ocean' | 'forest' | 'sunset';

export const ThemeDebug = () => {
  const { theme, mode, style, toggleMode, setMode, setStyle } = useTheme();
  const [clickCount, setClickCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('Never');

  useEffect(() => {
    setLastUpdate(new Date().toLocaleTimeString());
  }, [theme]);

  const handleToggleMode = () => {
    setClickCount(clickCount + 1);
    toggleMode();
  };

  const handleClearStorage = () => {
    try {
      localStorage.removeItem('theme-style');
      localStorage.removeItem('theme-mode');
      window.location.reload();
    } catch (e) {
      console.error('Error clearing storage:', e);
    }
  };

  const htmlClasses = document.documentElement.className;
  const hasDark = document.documentElement.classList.contains('dark');
  const localStorageStyle = localStorage.getItem('theme-style');
  const localStorageMode = localStorage.getItem('theme-mode');
  const bodyBg = getComputedStyle(document.body).backgroundColor;

  const themeStyles: ThemeStyle[] = ['default', 'blue', 'purple', 'green', 'ocean', 'forest', 'sunset'];

  return (
    <div className="wp-debug-panel">
      <div className="wp-debug-panel__header">
        <h3 className="wp-debug-panel__title">MULTI-THEME DEBUG</h3>
        <div className="wp-debug-panel__time">{lastUpdate}</div>
      </div>

      <div className="wp-debug-panel__sections">
        <div className="wp-debug-panel__section wp-debug-panel__section--purple">
          <div className="wp-debug-panel__label">Theme Style:</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--large wp-debug-panel__value--purple">{style.toUpperCase()}</div>
        </div>
        <div className="wp-debug-panel__section wp-debug-panel__section--blue">
          <div className="wp-debug-panel__label">Color Mode:</div>
          <div className={`wp-debug-panel__value wp-debug-panel__value--large ${mode === 'dark' ? 'wp-debug-panel__value--blue' : 'wp-debug-panel__value--yellow'}`}>
            {mode.toUpperCase()}
          </div>
        </div>
        <div className="wp-debug-panel__section wp-debug-panel__section--green">
          <div className="wp-debug-panel__label">localStorage (style):</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--green">{localStorageStyle || '(null)'}</div>
        </div>
        <div className="wp-debug-panel__section wp-debug-panel__section--green">
          <div className="wp-debug-panel__label">localStorage (mode):</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--green">{localStorageMode || '(null)'}</div>
        </div>
        <div className="wp-debug-panel__section wp-debug-panel__section--orange">
          <div className="wp-debug-panel__label">HTML Classes:</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--break wp-text-micro wp-debug-panel__value--orange">
            {htmlClasses || '(empty)'}
          </div>
        </div>
        <div className={`wp-debug-panel__section ${hasDark ? 'wp-debug-panel__section--purple' : 'wp-debug-panel__section--red'}`}>
          <div className="wp-debug-panel__label">Has dark class:</div>
          <div className={`wp-debug-panel__value wp-debug-panel__value--large ${hasDark ? 'wp-debug-panel__value--success' : 'wp-debug-panel__value--error'}`}>
            {hasDark ? 'YES' : 'NO'}
          </div>
        </div>
        <div className="wp-debug-panel__section wp-debug-panel__section--gray">
          <div className="wp-debug-panel__label">Body BG Color:</div>
          <div className="wp-debug-panel__value wp-text-micro">{bodyBg}</div>
        </div>
        <div className="wp-debug-panel__section wp-debug-panel__section--yellow">
          <div className="wp-debug-panel__label">Clicks:</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--large wp-debug-panel__value--yellow">{clickCount}</div>
        </div>
      </div>

      <div className="wp-debug-panel__actions">
        <div className="wp-debug-panel__label">Color Mode:</div>
        <button onClick={handleToggleMode} className="wp-debug-panel__btn wp-debug-panel__btn--purple">
          TOGGLE MODE (TEST)
        </button>
        <div className="wp-debug-panel__grid">
          <button onClick={() => setMode('light')} className="wp-debug-panel__btn wp-debug-panel__btn--blue">Light</button>
          <button onClick={() => setMode('dark')} className="wp-debug-panel__btn wp-debug-panel__btn--gray">Dark</button>
        </div>
      </div>

      <div className="wp-debug-panel__actions">
        <div className="wp-debug-panel__label">Theme Style:</div>
        <div className="wp-debug-panel__grid">
          {themeStyles.map((themeStyle) => (
            <button
              key={themeStyle}
              onClick={() => setStyle(themeStyle)}
              className={`wp-debug-panel__btn ${style === themeStyle ? 'wp-debug-panel__btn--active' : 'wp-debug-panel__btn--inactive'}`}
            >
              {themeStyle}
            </button>
          ))}
        </div>
      </div>

      <div className="wp-debug-panel__actions">
        <button onClick={handleClearStorage} className="wp-debug-panel__btn wp-debug-panel__btn--red">
          Clear and Reload
        </button>
      </div>
    </div>
  );
}