import React from 'react';
import { ArrowUp } from '@phosphor-icons/react';

var ArrowUpIcon = ArrowUp;

/**
 * BackToTopButton Component
 *
 * A floating button that appears when the user scrolls down the page.
 * Clicking it smoothly scrolls the window back to the top.
 */
export function BackToTopButton() {
  var visState = React.useState(false);
  var isVisible = visState[0];
  var setIsVisible = visState[1];

  React.useEffect(function() {
    function toggleVisibility() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', toggleVisibility);

    return function() { window.removeEventListener('scroll', toggleVisibility); };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  var buttonClass = 'wp-back-to-top' + (!isVisible ? ' wp-back-to-top--hidden' : '');

  return (
    <button
      onClick={scrollToTop}
      className={buttonClass}
      aria-label="Scroll back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUpIcon size={24} />
    </button>
  );
}