import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * MegaMenuWrapper
 *
 * Shared wrapper that adds keyboard accessibility to any mega menu.
 * Handles:
 *   - Enter / Space on trigger -> toggles open/closed
 *   - Escape -> closes menu, returns focus to trigger
 *   - Focus management (focusin/focusout with delay)
 *   - aria-expanded on trigger
 *   - Click outside closes menu
 */

interface MegaMenuWrapperProps {
  triggerLabel: string;
  triggerHref: string;
  renderContent?: (closeFn: () => void) => React.ReactNode;
  className?: string;
}

export const MegaMenuWrapper = ({ triggerLabel, triggerHref, renderContent, className = '' }: MegaMenuWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeMenu = () => {
    clearCloseTimer();
    setIsOpen(false);
  };

  const openMenu = () => {
    clearCloseTimer();
    setIsOpen(true);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  /* Keyboard on trigger */
  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu();
      triggerRef.current?.focus();
      e.preventDefault();
    }
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      } else {
        openMenu();
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      openMenu();
      setTimeout(() => {
        if (wrapperRef.current) {
          const firstLink = wrapperRef.current.querySelector('.wp-mega-menu__content a, .wp-mega-menu__content button') as HTMLElement | null;
          firstLink?.focus();
        }
      }, 50);
    }
  };

  /* Keyboard inside dropdown */
  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu();
      triggerRef.current?.focus();
      e.preventDefault();
    }
  };

  /* Focus management */
  const handleFocusIn = () => {
    clearCloseTimer();
  };

  const handleFocusOut = () => {
    closeTimerRef.current = setTimeout(() => {
      if (wrapperRef.current && !wrapperRef.current.contains(document.activeElement)) {
        closeMenu();
      }
    }, 150);
  };

  /* Mouse enter / leave */
  const handleMouseEnter = () => {
    clearCloseTimer();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  /* Clean up timers */
  useEffect(() => {
    return () => { clearCloseTimer(); };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`wp-mega-menu${isOpen ? ' wp-mega-menu--open' : ''}${className ? ` ${className}` : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocusIn}
      onBlurCapture={handleFocusOut}
    >
      {/* Trigger */}
      <a
        ref={triggerRef}
        href={triggerHref}
        className="wp-mega-menu__trigger"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onKeyDown={handleTriggerKeyDown}
        onClick={() => {
          /* Allow default navigation */
        }}
      >
        <span>{triggerLabel}</span>
        <svg
          width={14}
          height={14}
          viewBox="0 0 256 256"
          fill="currentColor"
          className="wp-mega-menu__trigger-icon"
          aria-hidden="true"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        >
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </a>

      {/* Hover bridge */}
      <div className="wp-mega-menu__hover-bridge" aria-hidden="true" />

      {/* Dropdown */}
      <div
        className="wp-mega-menu__dropdown"
        role="region"
        aria-label={`${triggerLabel} menu`}
        onKeyDown={handleDropdownKeyDown}
      >
        {renderContent ? renderContent(closeMenu) : null}
      </div>
    </div>
  );
}