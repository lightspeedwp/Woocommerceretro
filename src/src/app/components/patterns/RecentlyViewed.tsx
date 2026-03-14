import React from 'react';
import { useRecentlyViewed } from '../../hooks/useRecentlyViewed';
import { RecentlyViewedSection } from './RecentlyViewedSection';

/**
 * RecentlyViewed Component (Pattern)
 */
export const RecentlyViewed = () => {
  const { recentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <RecentlyViewedSection
      products={recentlyViewed}
      heading="Recently Viewed"
      maxProducts={4}
      className="wp-block-group"
    />
  );
}