import React from 'react';
import { CaretDown as ChevronDown } from '@phosphor-icons/react';

// ScrollDownArrowProps structure
// - targetId?: string
// - className?: string

/**
 * ScrollDownArrow Component
 */
export function ScrollDownArrow(props) {
  var targetId = props.targetId;
  var className = props.className || '';

  function handleClick() {
    if (targetId) {
      var element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }

  return React.createElement('div', {
    className: 'absolute bottom-8 wp-left-1-2 transform wp-neg-translate-x-1-2 cursor-pointer animate-bounce z-20 ' + className,
    onClick: handleClick,
    'aria-label': 'Scroll down'
  },
    React.createElement('div', { className: 'wp-scroll-arrow__circle' },
      React.createElement(ChevronDown, { className: 'wp-scroll-arrow__icon' })
    )
  );
}