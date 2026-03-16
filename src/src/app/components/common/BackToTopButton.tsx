import React, { useState, useEffect } from 'react';
import { ArrowUp } from '../../utils/phosphor-compat';

/**
 * BackToTopButton Component
 *
 * A floating button that appears when the user scrolls down the page.
 * Clicking it smoothly scrolls the window back to the top.
 */
export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonClass = `wp-back-to-top${!isVisible ? ' wp-back-to-top--hidden' : ''}`;

  return (
    <button
      onClick={scrollToTop}
      className={buttonClass}
      aria-label="Scroll back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp size={24} />
    </button>
  );
}