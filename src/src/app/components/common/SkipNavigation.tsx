import React from 'react';

/**
 * SkipNavigation Component
 *
 * WCAG 2.1 Bypass Blocks requirement (2.4.1 Level A).
 * Provides keyboard users a way to skip repetitive navigation.
 */
export const SkipNavigation = () => {
  const handleSkipClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '.skip-navigation { position: fixed; top: 0; left: 0; z-index: 9999; pointer-events: none; } ' +
            '.skip-link { position: absolute; top: -100px; padding: 1rem 1.5rem; background: linear-gradient(135deg, #9333ea 0%, #7e22ce 100%); color: white; font-weight: 600; font-size: 0.875rem; text-decoration: none; border-radius: 0 0 0.5rem 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); transition: top 0.3s ease-in-out; white-space: nowrap; pointer-events: auto; } ' +
            '.skip-link:focus { top: 0; outline: 3px solid #fbbf24; outline-offset: 2px; } ' +
            '.skip-link:hover { background: linear-gradient(135deg, #7e22ce 0%, #6b21a8 100%); } ' +
            '.skip-link:nth-child(1) { left: 0; } ' +
            '.skip-link:nth-child(2) { left: 200px; } ' +
            '.skip-link:nth-child(3) { left: 350px; } ' +
            '@media (prefers-reduced-motion: reduce) { .skip-link { transition: none; } } ' +
            '@media (max-width: 640px) { .skip-link { font-size: 0.75rem; padding: 0.75rem 1rem; } .skip-link:nth-child(2) { left: 140px; } .skip-link:nth-child(3) { left: 260px; } }',
        }}
      />
      <nav className="skip-navigation" aria-label="Skip navigation links">
        <a href="#main-content" onClick={(e) => handleSkipClick(e, 'main-content')} className="skip-link">
          Skip to main content
        </a>
        <a href="#search" onClick={(e) => handleSkipClick(e, 'search')} className="skip-link">
          Skip to search
        </a>
        <a href="#footer" onClick={(e) => handleSkipClick(e, 'footer')} className="skip-link">
          Skip to footer
        </a>
      </nav>
    </>
  );
}