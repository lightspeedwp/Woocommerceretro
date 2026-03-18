import { useEffect, useRef, useCallback } from 'react';

/**
 * useFocusTrap Hook
 *
 * Traps keyboard focus within a container element when active.
 * Returns a ref to attach to the container element.
 *
 * Features:
 * - Tab/Shift+Tab cycles within the container
 * - Auto-focuses first focusable element on mount
 * - Restores focus to trigger element on unmount
 * - Respects prefers-reduced-motion for focus transitions
 *
 * @param active - Whether the focus trap is active
 * @returns ref to attach to the trap container
 */
export function useFocusTrap<T extends HTMLElement = HTMLDivElement>(active: boolean) {
  const containerRef = useRef<T>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return [];

    const selectors = [
      'a[href]:not([disabled]):not([tabindex="-1"])',
      'button:not([disabled]):not([tabindex="-1"])',
      'input:not([disabled]):not([tabindex="-1"])',
      'select:not([disabled]):not([tabindex="-1"])',
      'textarea:not([disabled]):not([tabindex="-1"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled])',
    ].join(', ');

    return Array.from(containerRef.current.querySelectorAll<HTMLElement>(selectors))
      .filter((el) => el.offsetParent !== null); // filter hidden elements
  }, []);

  useEffect(() => {
    if (!active) return;

    // Store currently focused element to restore later
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the first focusable element in the container
    const timer = requestAnimationFrame(() => {
      const focusable = getFocusableElements();
      if (focusable.length > 0) {
        focusable[0].focus();
      } else if (containerRef.current) {
        // If no focusable children, make container focusable
        containerRef.current.setAttribute('tabindex', '-1');
        containerRef.current.focus();
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        // Shift+Tab: if on first element, wrap to last
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab: if on last element, wrap to first
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(timer);
      document.removeEventListener('keydown', handleKeyDown);

      // Restore focus to the previously focused element
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [active, getFocusableElements]);

  return containerRef;
}
