import { useState, useEffect, useCallback } from 'react';

/**
 * useRecentSearches Hook
 *
 * Manages a list of recent search terms persisted in localStorage.
 */
export const useRecentSearches = (maxSearches: number = 5) => {
  const limit = maxSearches;

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('recentSearches');
        if (saved) return JSON.parse(saved);
      } catch (error) {
        // Silent
      }
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      } catch (error) {
        // Silent
      }
    }
  }, [recentSearches]);

  const addRecentSearch = useCallback((term: string) => {
    const trimmedTerm = term?.trim() ?? '';
    if (!trimmedTerm) return;

    setRecentSearches((prev) => {
      const filtered = prev.filter(
        (item) => item.toLowerCase() !== trimmedTerm.toLowerCase()
      );
      return [trimmedTerm, ...filtered].slice(0, limit);
    });
  }, [limit]);

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
  }, []);

  const removeRecentSearch = useCallback((term: string) => {
    setRecentSearches((prev) => prev.filter((item) => item !== term));
  }, []);

  return {
    recentSearches,
    addRecentSearch,
    clearRecentSearches,
    removeRecentSearch,
  };
}