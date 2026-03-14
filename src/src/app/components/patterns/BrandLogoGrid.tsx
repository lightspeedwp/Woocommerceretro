/**
 * BrandLogoGrid.tsx - Brand Block
 * 
 * Grid display of partner/brand logos.
 */

import React from 'react';
import { Typography } from '../common/Typography';
import { brandLogos } from '../../data/brands';

interface Brand {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

interface BrandLogoGridProps {
  brands?: Brand[];
  heading?: string;
  description?: string;
  columns?: { mobile?: number; tablet?: number; desktop?: number };
  grayscale?: boolean;
  className?: string;
}

export const BrandLogoGrid = ({
  brands = brandLogos,
  heading = 'Trusted By',
  description,
  columns = { mobile: 2, tablet: 3, desktop: 6 },
  grayscale = true,
  className = '',
}: BrandLogoGridProps) => {
  const mobile = columns.mobile || 2;
  const tablet = columns.tablet || 3;
  const desktop = columns.desktop || 6;

  return (
    <div className={`wp-brand-section ${className}`}>
      {(heading || description) && (
        <div className="wp-brand-section__header">
          {heading && (
            <Typography variant="h2" align="center">{heading}</Typography>
          )}
          {description && (
            <Typography variant="p" className="wp-brand-section__description">{description}</Typography>
          )}
        </div>
      )}
      <div className={`wp-brand-grid wp-brand-grid--cols-${mobile} wp-brand-grid--cols-${tablet} wp-brand-grid--cols-${desktop}`}>
        {brands.map((brand) => {
          const logoElement = (
            <div className="wp-brand-item">
              <img
                src={brand.logo}
                alt={brand.name}
                className={`wp-brand-image ${grayscale ? 'wp-brand-image--grayscale' : ''}`}
              />
            </div>
          );

          if (brand.url) {
            return (
              <a key={brand.id} href={brand.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${brand.name}`}>
                {logoElement}
              </a>
            );
          }

          return <div key={brand.id}>{logoElement}</div>;
        })}
      </div>
    </div>
  );
}

BrandLogoGrid.displayName = 'BrandLogoGrid';