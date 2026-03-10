import React from 'react';
var useState = React.useState;
var useEffect = React.useEffect;

/**
 * useRecentSearches Hook
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. Standard function declarations
 * 3. No spread operators
 */
export function useRecentSearches(maxSearches: number) {
  var limit = maxSearches || 5;

  var stateRef = useState<string[]>(function() {
    if (typeof window !== 'undefined') {
      try {
        var saved = localStorage.getItem('recentSearches');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (error) {
        // Silent
      }
    }
    return [];
  });
  var recentSearches = stateRef[0];
  var setRecentSearches = stateRef[1];

  useEffect(function() {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      } catch (error) {
        // Silent
      }
    }
  }, [recentSearches]);

  function addRecentSearch(term: string) {
    var trimmedTerm = term ? term.trim() : '';
    
    if (!trimmedTerm) {
      return;
    }

    setRecentSearches(function(prev) {
      var filtered = [];
      for (var i = 0; i < prev.length; i++) {
        if (prev[i].toLowerCase() !== trimmedTerm.toLowerCase()) {
          filtered.push(prev[i]);
        }
      }
      
      var updated = [trimmedTerm].concat(filtered);
      return updated.slice(0, limit);
    });
  }

  function clearRecentSearches() {
    setRecentSearches([]);
  }

  function removeRecentSearch(term: string) {
    setRecentSearches(function(prev) {
      var result = [];
      for (var i = 0; i < prev.length; i++) {
        if (prev[i] !== term) result.push(prev[i]);
      }
      return result;
    });
  }

  return {
    recentSearches: recentSearches,
    addRecentSearch: addRecentSearch,
    clearRecentSearches: clearRecentSearches,
    removeRecentSearch: removeRecentSearch,
  };
}