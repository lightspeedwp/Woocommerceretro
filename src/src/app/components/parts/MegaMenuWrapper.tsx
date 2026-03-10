import React from 'react';

var useState = React.useState;
var useRef = React.useRef;
var useEffect = React.useEffect;
var useCallback = React.useCallback;

/**
 * MegaMenuWrapper
 *
 * Shared wrapper that adds keyboard accessibility to any mega menu.
 * Handles:
 *   - Enter / Space on trigger → toggles open/closed
 *   - Escape → closes menu, returns focus to trigger
 *   - Focus management (focusin/focusout with delay)
 *   - aria-expanded on trigger
 *   - Click outside closes menu
 *
 * Usage:
 *   React.createElement(MegaMenuWrapper, {
 *     triggerLabel: 'Shop',
 *     triggerHref: '/shop',
 *     renderContent: function(close) { return React.createElement(...); }
 *   })
 *
 * @param {object} props
 * @param {string} props.triggerLabel — visible text for the trigger link
 * @param {string} props.triggerHref — where clicking the link navigates
 * @param {Function} props.renderContent — function(closeFn) => React element for dropdown content
 * @param {string} [props.className] — additional class on the root
 */
export function MegaMenuWrapper(props) {
  var triggerLabel = props.triggerLabel;
  var triggerHref = props.triggerHref;
  var renderContent = props.renderContent;
  var className = props.className || '';

  var _open = useState(false);
  var isOpen = _open[0];
  var setIsOpen = _open[1];

  var wrapperRef = useRef(null);
  var triggerRef = useRef(null);
  var closeTimerRef = useRef(null);

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function closeMenu() {
    clearCloseTimer();
    setIsOpen(false);
  }

  function openMenu() {
    clearCloseTimer();
    setIsOpen(true);
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /* Keyboard on trigger */
  function handleTriggerKeyDown(e) {
    if (e.key === 'Escape') {
      closeMenu();
      if (triggerRef.current) triggerRef.current.focus();
      e.preventDefault();
    }
    if (e.key === 'Enter' || e.key === ' ') {
      /* Enter → open menu (navigation handled by Link click default) */
      /* Space → toggle only (prevent scroll) */
      if (e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      } else {
        /* Enter: open the menu so users can arrow into it */
        openMenu();
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      openMenu();
      /* Focus first link inside dropdown */
      setTimeout(function() {
        if (wrapperRef.current) {
          var firstLink = wrapperRef.current.querySelector('.wp-mega-menu__content a, .wp-mega-menu__content button');
          if (firstLink) firstLink.focus();
        }
      }, 50);
    }
  }

  /* Keyboard inside dropdown */
  function handleDropdownKeyDown(e) {
    if (e.key === 'Escape') {
      closeMenu();
      if (triggerRef.current) triggerRef.current.focus();
      e.preventDefault();
    }
  }

  /* Focus management — close when focus leaves the entire mega menu */
  function handleFocusIn() {
    clearCloseTimer();
  }

  function handleFocusOut() {
    closeTimerRef.current = setTimeout(function() {
      if (wrapperRef.current && !wrapperRef.current.contains(document.activeElement)) {
        closeMenu();
      }
    }, 150);
  }

  /* Mouse enter / leave (mirrors existing CSS :hover but JS-controlled too) */
  function handleMouseEnter() {
    clearCloseTimer();
    setIsOpen(true);
  }

  function handleMouseLeave() {
    closeTimerRef.current = setTimeout(function() {
      setIsOpen(false);
    }, 200);
  }

  /* Clean up timers */
  useEffect(function() {
    return function() { clearCloseTimer(); };
  }, []);

  return React.createElement('div', {
    ref: wrapperRef,
    className: 'wp-mega-menu' + (isOpen ? ' wp-mega-menu--open' : '') + (className ? ' ' + className : ''),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocusCapture: handleFocusIn,
    onBlurCapture: handleFocusOut
  },
    /* Trigger */
    React.createElement('a', {
      ref: triggerRef,
      href: triggerHref,
      className: 'wp-mega-menu__trigger',
      'aria-expanded': isOpen,
      'aria-haspopup': 'true',
      onKeyDown: handleTriggerKeyDown,
      onClick: function(e) {
        /* On click, allow navigation (default Link behaviour would be better,
           but we use <a> so the parent Navigation can still wrap this in an <li>) */
      }
    },
      React.createElement('span', null, triggerLabel),
      React.createElement('svg', {
        width: 14,
        height: 14,
        viewBox: '0 0 256 256',
        fill: 'currentColor',
        className: 'wp-mega-menu__trigger-icon',
        'aria-hidden': 'true',
        style: {
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease'
        }
      },
        React.createElement('path', { d: 'M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z' })
      )
    ),

    /* Hover bridge (prevents gap between trigger and dropdown) */
    React.createElement('div', {
      className: 'wp-mega-menu__hover-bridge',
      'aria-hidden': 'true'
    }),

    /* Dropdown */
    React.createElement('div', {
      className: 'wp-mega-menu__dropdown',
      role: 'region',
      'aria-label': triggerLabel + ' menu',
      onKeyDown: handleDropdownKeyDown
    },
      renderContent ? renderContent(closeMenu) : null
    )
  );
}