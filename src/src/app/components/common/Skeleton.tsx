import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  lines?: number;
  className?: string;
  noShimmer?: boolean;
}

/**
 * Skeleton Component
 */
export const Skeleton = ({
  width,
  height,
  variant = 'text',
  lines = 1,
  className = '',
  noShimmer = false,
}: SkeletonProps) => {
  const shimmerClass = noShimmer ? '' : 'wp-skeleton--shimmer';
  const variantMap: Record<string, string> = {
    text: 'wp-skeleton--text',
    circular: 'wp-skeleton--circular',
    rectangular: 'wp-skeleton--rectangular',
    rounded: 'wp-skeleton--rounded',
  };

  const skeletonClass = [
    'wp-skeleton',
    shimmerClass,
    variantMap[variant] || 'wp-skeleton--text',
    className,
    'funky-skeleton',
  ].filter(Boolean).join(' ');

  if (variant === 'text' && lines > 1) {
    return (
      <div className="wp-skeleton__lines" aria-busy="true" aria-label="Loading content">
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={skeletonClass}
            style={{ width: width || (i === lines - 1 ? '60%' : '100%'), height }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={skeletonClass}
      style={{ width, height }}
      aria-busy="true"
      aria-label="Loading"
    />
  );
}

Skeleton.displayName = 'Skeleton';

export const ProductCardSkeleton = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`wp-skeleton-card ${className} funky-skeleton-card`}>
      <Skeleton variant="rectangular" height="200px" />
      <div className="wp-skeleton-card__body">
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="50%" className="wp-skeleton--h-sm" />
        <Skeleton variant="text" width="40%" className="wp-skeleton--h-md" />
        <Skeleton variant="rounded" height="40px" className="wp-skeleton--mt funky-btn-skeleton" />
      </div>
    </div>
  );
}

ProductCardSkeleton.displayName = 'ProductCardSkeleton';

export const BlogPostSkeleton = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`wp-skeleton-card ${className} funky-skeleton-card`}>
      <Skeleton variant="rectangular" height="200px" />
      <div className="wp-skeleton-card__body wp-skeleton-card__body--lg">
        <Skeleton variant="rounded" width="80px" height="24px" />
        <Skeleton variant="text" lines={2} />
        <Skeleton variant="text" lines={3} className="wp-skeleton--h-sm" />
        <div className="wp-skeleton-card__meta">
          <Skeleton variant="text" width="100px" className="wp-skeleton--h-sm" />
          <Skeleton variant="text" width="100px" className="wp-skeleton--h-sm" />
        </div>
      </div>
    </div>
  );
}

BlogPostSkeleton.displayName = 'BlogPostSkeleton';

export const ListItemSkeleton = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`wp-skeleton-list-item ${className}`}>
      <div className="wp-skeleton-list-item__row">
        <Skeleton variant="circular" width="48px" height="48px" />
        <div className="wp-skeleton-list-item__content">
          <Skeleton variant="text" width="200px" />
          <Skeleton variant="text" width="150px" className="wp-skeleton--h-sm" />
        </div>
        <Skeleton variant="rounded" width="80px" height="32px" />
      </div>
    </div>
  );
}

ListItemSkeleton.displayName = 'ListItemSkeleton';

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export const TableSkeleton = ({ rows = 5, columns = 4, className = '' }: TableSkeletonProps) => {
  return (
    <div className={`wp-skeleton-table ${className}`}>
      <div className="wp-skeleton-table__header">
        {Array.from({ length: columns }, (_, i) => (
          <Skeleton key={`header-${i}`} variant="text" width="80%" />
        ))}
      </div>
      {Array.from({ length: rows }, (_, i) => (
        <div key={`row-${i}`} className="wp-skeleton-table__row">
          {Array.from({ length: columns }, (_, j) => (
            <Skeleton key={`cell-${i}-${j}`} variant="text" width="90%" />
          ))}
        </div>
      ))}
    </div>
  );
}

TableSkeleton.displayName = 'TableSkeleton';

export const PageSkeleton = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`wp-skeleton-page ${className}`}>
      <div className="wp-skeleton-page__section">
        <Skeleton variant="text" width="60%" className="wp-skeleton--h-lg" />
        <Skeleton variant="text" width="40%" className="wp-skeleton--h-base" />
      </div>
      <div className="wp-skeleton-page__section">
        <Skeleton variant="text" lines={8} />
      </div>
      <Skeleton variant="rounded" height="300px" />
      <div className="wp-skeleton-page__section">
        <Skeleton variant="text" lines={6} />
      </div>
    </div>
  );
}

PageSkeleton.displayName = 'PageSkeleton';