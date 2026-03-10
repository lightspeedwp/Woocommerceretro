import React from 'react';
import * as RecentlyViewedHookModule from '../../hooks/useRecentlyViewed';
import * as RecentlyViewedSectionModule from './RecentlyViewedSection';

var useRecentlyViewed = RecentlyViewedHookModule.useRecentlyViewed;
var RecentlyViewedSection = RecentlyViewedSectionModule.RecentlyViewedSection;

/**
 * RecentlyViewed Component (Pattern)
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function RecentlyViewed() {
  var context = useRecentlyViewed();
  var recentlyViewed = context.recentlyViewed;

  if (recentlyViewed.length === 0) {
    return null;
  }

  return React.createElement(RecentlyViewedSection, {
    products: recentlyViewed,
    heading: "Recently Viewed",
    maxProducts: 4,
    className: "wp-block-group"
  });
}
