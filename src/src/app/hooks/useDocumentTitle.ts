import { useEffect, useRef } from 'react';

/**
 * useDocumentTitle Hook
 *
 * Sets `document.title` on mount and restores the previous title on unmount.
 * Supports an optional site name suffix (defaults to "PlayPocket").
 *
 * @param title - Page-specific title (e.g. "Shop", "Privacy policy")
 * @param options.suffix - Site name appended after separator (default: "PlayPocket")
 * @param options.separator - Character(s) between title and suffix (default: " — ")
 * @param options.restoreOnUnmount - Whether to restore previous title on unmount (default: true)
 *
 * @example
 * useDocumentTitle('Shop');
 * // → document.title = "Shop — PlayPocket"
 *
 * useDocumentTitle('Privacy policy', { suffix: '' });
 * // → document.title = "Privacy policy"
 */

interface UseDocumentTitleOptions {
  suffix?: string;
  separator?: string;
  restoreOnUnmount?: boolean;
}

const SITE_NAME = 'PlayPocket';

export const useDocumentTitle = (
  title: string,
  options: UseDocumentTitleOptions = {},
): void => {
  const {
    suffix = SITE_NAME,
    separator = ' \u2014 ',
    restoreOnUnmount = true,
  } = options;

  const previousTitle = useRef(document.title);

  useEffect(() => {
    const fullTitle = suffix ? `${title}${separator}${suffix}` : title;
    document.title = fullTitle;
  }, [title, suffix, separator]);

  useEffect(() => {
    const saved = previousTitle.current;

    return () => {
      if (restoreOnUnmount) {
        document.title = saved;
      }
    };
  }, [restoreOnUnmount]);
};
