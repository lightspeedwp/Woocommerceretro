/**
 * CategoryShowcaseGrid.tsx - Pattern
 * 
 * Grid of category cards with images and product counts.
 */

import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '@phosphor-icons/react';
import { ResponsiveGrid } from '../blocks/design/Grid';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CategoryShowcase {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount?: number;
  description?: string;
}

interface CategoryShowcaseGridProps {
  categories: CategoryShowcase[];
  columns?: { mobile?: 1 | 2; tablet?: 2 | 3; desktop?: 3 | 4 };
  showProductCount?: boolean;
  showDescription?: boolean;
  className?: string;
}

export const CategoryShowcaseGrid = ({
  categories,
  columns = { mobile: 2, tablet: 2, desktop: 4 },
  showDescription = true,
  showProductCount = true,
  className = '',
}: CategoryShowcaseGridProps) => {
  return (
    <ResponsiveGrid
      mobile={columns.mobile}
      tablet={columns.tablet}
      desktop={columns.desktop}
      gap="lg"
      className={className}
    >
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/shop/category/${category.slug}`}
          className="wp-category-card wp-block-card wp-block-card--interactive funky-spring-hover"
        >
          <div className="wp-category-card__image-container">
            <ImageWithFallback
              src={category.image}
              alt={category.name}
              className="wp-category-card__image"
            />
          </div>
          <div className="wp-category-card__overlay">
            <h3 className="wp-category-card__name">{category.name}</h3>
            {showDescription && category.description && (
              <p className="wp-category-card__description">{category.description}</p>
            )}
            {showProductCount && category.productCount !== undefined && (
              <p className="wp-category-card__count">
                <small>{category.productCount} {category.productCount === 1 ? 'Product' : 'Products'}</small>
              </p>
            )}
            <div className="wp-category-card__action">
              <small>Shop Now</small>
              <ArrowRight size={16} aria-hidden="true" />
            </div>
          </div>
        </Link>
      ))}
    </ResponsiveGrid>
  );
}

CategoryShowcaseGrid.displayName = 'CategoryShowcaseGrid';