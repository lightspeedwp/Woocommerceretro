import React, { useRef, useEffect, useState } from 'react';

/**
 * MegaMenuWrapper Component
 * 
 * Intelligent wrapper for mega menu dropdowns that ensures they stay within
 * the navigation container boundaries.
 */

// MegaMenuWrapperProps structure
// - trigger: React.ReactNode
// - content: React.ReactNode
// - menuWidth: number
// - className?: string

export function MegaMenuWrapper(props) {
  var trigger = props.trigger;
  var content = props.content;
  var menuWidth = props.menuWidth;
  var className = props.className || '';

  var triggerRef = useRef(null);
  var menuPositionState = useState('center');
  var menuPosition = menuPositionState[0];
  var setMenuPosition = menuPositionState[1];
  var offsetXState = useState(0);
  var offsetX = offsetXState[0];
  var setOffsetX = offsetXState[1];

  useEffect(function() {
    function calculatePosition() {
      if (!triggerRef.current) return;

      var triggerRect = triggerRef.current.getBoundingClientRect();
      var viewportWidth = window.innerWidth;
      
      var navContainer = triggerRef.current.closest('.wp-block-navigation__container');
      if (!navContainer) return;
      
      var navRect = navContainer.getBoundingClientRect();
      var navLeft = navRect.left;
      var navRight = navRect.right;
      var navWidth = navRect.width;
      
      var triggerCenter = triggerRect.left + (triggerRect.width / 2);
      
      var idealMenuLeft = triggerCenter - (menuWidth / 2);
      var idealMenuRight = triggerCenter + (menuWidth / 2);
      
      var padding = 16;
      var minLeft = navLeft + padding;
      var maxRight = navRight - padding;
      
      if (idealMenuLeft >= minLeft && idealMenuRight <= maxRight) {
        setMenuPosition('center');
        setOffsetX(0);
      } else if (idealMenuLeft < minLeft) {
        setMenuPosition('left');
        setOffsetX(minLeft - idealMenuLeft);
      } else if (idealMenuRight > maxRight) {
        setMenuPosition('right');
        setOffsetX(maxRight - idealMenuRight);
      }
    }

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    return function() { window.removeEventListener('resize', calculatePosition); };
  }, [menuWidth]);

  var dropdownStyle = {
    transform: 'translateX(calc(-50% + ' + offsetX + 'px))',
    width: 'min(' + menuWidth + 'px, calc(100vw - 2rem))',
  };

  return React.createElement('div', {
    className: 'wp-mega-menu-wrapper group ' + className,
    ref: triggerRef
  }, [
    React.createElement(React.Fragment, { key: 'trigger' }, trigger),
    React.createElement('div', {
      key: 'bridge',
      className: 'wp-mega-menu-wrapper__bridge',
      'aria-hidden': 'true'
    }),
    React.createElement('div', {
      key: 'dropdown',
      className: 'wp-mega-menu-wrapper__dropdown',
      style: dropdownStyle
    }, content)
  ]);
}
