import React, { useRef, useEffect, useState } from 'react';

interface MegaMenuWrapperProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  menuWidth: number;
  className?: string;
}

/**
 * MegaMenuWrapper Component
 *
 * Intelligent wrapper for mega menu dropdowns that ensures they stay within
 * the navigation container boundaries.
 */
export const MegaMenuWrapper = ({ trigger, content, menuWidth, className = '' }: MegaMenuWrapperProps) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState('center');
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const calculatePosition = () => {
      if (!triggerRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const navContainer = triggerRef.current.closest('.wp-block-navigation__container');
      if (!navContainer) return;

      const navRect = navContainer.getBoundingClientRect();
      const triggerCenter = triggerRect.left + (triggerRect.width / 2);
      const idealMenuLeft = triggerCenter - (menuWidth / 2);
      const idealMenuRight = triggerCenter + (menuWidth / 2);
      const padding = 16;
      const minLeft = navRect.left + padding;
      const maxRight = navRect.right - padding;

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
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    return () => window.removeEventListener('resize', calculatePosition);
  }, [menuWidth]);

  const dropdownStyle = {
    transform: `translateX(calc(-50% + ${offsetX}px))`,
    width: `min(${menuWidth}px, calc(100vw - 2rem))`,
  };

  return (
    <div className={`wp-mega-menu-wrapper group ${className}`} ref={triggerRef}>
      {trigger}
      <div className="wp-mega-menu-wrapper__bridge" aria-hidden="true" />
      <div className="wp-mega-menu-wrapper__dropdown" style={dropdownStyle}>
        {content}
      </div>
    </div>
  );
}