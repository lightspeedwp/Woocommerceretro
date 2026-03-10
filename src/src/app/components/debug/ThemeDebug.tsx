/**
 * ThemeDebug - Multi-Theme Diagnostic Panel
 */

import React from 'react';
import * as ThemeContextModule from '../../contexts/ThemeContext';

var useEffect = React.useEffect;
var useState = React.useState;
var useTheme = ThemeContextModule.useTheme;

export function ThemeDebug() {
  var themeCtx = useTheme();
  var theme = themeCtx.theme;
  var mode = themeCtx.mode;
  var style = themeCtx.style;
  var toggleMode = themeCtx.toggleMode;
  var setMode = themeCtx.setMode;
  var setStyle = themeCtx.setStyle;
  var _cc = useState(0);
  var clickCount = _cc[0];
  var setClickCount = _cc[1];
  var _lu = useState('Never');
  var lastUpdate = _lu[0];
  var setLastUpdate = _lu[1];

  useEffect(function() {
    setLastUpdate(new Date().toLocaleTimeString());
  }, [theme]);

  function handleToggleMode() {
    setClickCount(clickCount + 1);
    toggleMode();
  }

  function handleSetLight() { setMode('light'); }
  function handleSetDark() { setMode('dark'); }
  function handleSetStyle(newStyle: ThemeStyle) { setStyle(newStyle); }

  function handleClearStorage() {
    try {
      localStorage.removeItem('theme-style');
      localStorage.removeItem('theme-mode');
      window.location.reload();
    } catch (e) {
      console.error('Error clearing storage:', e);
    }
  }

  var htmlClasses = document.documentElement.className;
  var hasDark = document.documentElement.classList.contains('dark');
  var localStorageStyle = localStorage.getItem('theme-style');
  var localStorageMode = localStorage.getItem('theme-mode');
  var bodyBg = getComputedStyle(document.body).backgroundColor;

  var themeStyles: ThemeStyle[] = ['default', 'blue', 'purple', 'green', 'ocean', 'forest', 'sunset'];

  return (
    <div className="wp-debug-panel">
      <div className="wp-debug-panel__header">
        <h3 className="wp-debug-panel__title">
          MULTI-THEME DEBUG
        </h3>
        <div className="wp-debug-panel__time">
          {lastUpdate}
        </div>
      </div>

      <div className="wp-debug-panel__sections">
        <div className="wp-debug-panel__section wp-debug-panel__section--purple">
          <div className="wp-debug-panel__label">Theme Style:</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--large wp-debug-panel__value--purple">
            {style.toUpperCase()}
          </div>
        </div>

        <div className="wp-debug-panel__section wp-debug-panel__section--blue">
          <div className="wp-debug-panel__label">Color Mode:</div>
          <div className={'wp-debug-panel__value wp-debug-panel__value--large ' + (mode === 'dark' ? 'wp-debug-panel__value--blue' : 'wp-debug-panel__value--yellow')}>
            {mode.toUpperCase()}
          </div>
        </div>

        <div className="wp-debug-panel__section wp-debug-panel__section--green">
          <div className="wp-debug-panel__label">localStorage (style):</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--green">
            {localStorageStyle || '(null)'}
          </div>
        </div>

        <div className="wp-debug-panel__section wp-debug-panel__section--green">
          <div className="wp-debug-panel__label">localStorage (mode):</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--green">
            {localStorageMode || '(null)'}
          </div>
        </div>

        <div className="wp-debug-panel__section wp-debug-panel__section--orange">
          <div className="wp-debug-panel__label">HTML Classes:</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--break wp-text-micro wp-debug-panel__value--orange">
            {htmlClasses || '(empty)'}
          </div>
        </div>

        <div className={'wp-debug-panel__section ' + (hasDark ? 'wp-debug-panel__section--purple' : 'wp-debug-panel__section--red')}>
          <div className="wp-debug-panel__label">
            Has dark class:
          </div>
          <div className={'wp-debug-panel__value wp-debug-panel__value--large ' + (hasDark ? 'wp-debug-panel__value--success' : 'wp-debug-panel__value--error')}>
            {hasDark ? 'YES' : 'NO'}
          </div>
        </div>

        <div className="wp-debug-panel__section wp-debug-panel__section--gray">
          <div className="wp-debug-panel__label">Body BG Color:</div>
          <div className="wp-debug-panel__value wp-text-micro">
            {bodyBg}
          </div>
        </div>

        <div className="wp-debug-panel__section wp-debug-panel__section--yellow">
          <div className="wp-debug-panel__label">Clicks:</div>
          <div className="wp-debug-panel__value wp-debug-panel__value--large wp-debug-panel__value--yellow">
            {clickCount}
          </div>
        </div>
      </div>

      <div className="wp-debug-panel__actions">
        <div className="wp-debug-panel__label wp-mb-20">Color Mode:</div>
        <button
          onClick={handleToggleMode}
          className="wp-debug-panel__btn wp-debug-panel__btn--purple"
        >
          TOGGLE MODE (TEST)
        </button>
        <div className="wp-debug-panel__grid">
          <button onClick={handleSetLight} className="wp-debug-panel__btn wp-debug-panel__btn--blue">
            Light
          </button>
          <button onClick={handleSetDark} className="wp-debug-panel__btn wp-debug-panel__btn--gray">
            Dark
          </button>
        </div>
      </div>

      <div className="wp-debug-panel__actions">
        <div className="wp-debug-panel__label wp-mb-20">Theme Style:</div>
        <div className="wp-debug-panel__grid">
          {themeStyles.map(function(themeStyle) { return (
            <button
              key={themeStyle}
              onClick={function() { handleSetStyle(themeStyle); }}
              className={'wp-debug-panel__btn ' + (
                style === themeStyle
                  ? 'wp-debug-panel__btn--active'
                  : 'wp-debug-panel__btn--inactive'
              )}
            >
              {themeStyle}
            </button>
          ); })}
        </div>
      </div>

      <div className="wp-debug-panel__actions">
        <button
          onClick={handleClearStorage}
          className="wp-debug-panel__btn wp-debug-panel__btn--red"
        >
          Clear and Reload
        </button>
      </div>
    </div>
  );
}