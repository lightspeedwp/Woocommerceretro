import React from 'react';
import { CaretDown as ChevronDown } from '@phosphor-icons/react';

interface ScrollDownArrowProps {
  targetId?: string;
  className?: string;
}

/**
 * ScrollDownArrow Component
 */
export const ScrollDownArrow = ({ targetId, className = '' }: ScrollDownArrowProps) => {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`absolute bottom-8 wp-left-1-2 transform wp-neg-translate-x-1-2 cursor-pointer animate-bounce z-20 ${className}`}
      onClick={handleClick}
      aria-label="Scroll down"
    >
      <div className="wp-scroll-arrow__circle">
        <ChevronDown className="wp-scroll-arrow__icon" />
      </div>
    </div>
  );
}