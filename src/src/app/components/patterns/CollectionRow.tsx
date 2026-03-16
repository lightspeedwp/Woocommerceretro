import React from 'react';
import { CaretRight as ChevronRight } from '../../utils/phosphor-compat';
import { ContentSection } from './sections/ContentSection';
import { MutedSection } from './sections/MutedSection';
import { Typography } from '../common/Typography';
import { ProductGrid } from './ProductGrid';
import { Button } from '../blocks/design/Buttons';

interface CollectionRowProps {
  title?: string;
  description?: string;
  viewAllLink?: string;
  products: any[];
  background?: 'white' | 'gray';
}

/**
 * CollectionRow Pattern Component
 */
export const CollectionRow = ({
  title,
  description,
  viewAllLink,
  products,
  background = 'white',
}: CollectionRowProps) => {
  const content = (
    <div className="wc-collection-row__content">
      <div className="wc-collection-row__header">
        <div className="wc-collection-row__header-content">
          {title && (
            <Typography variant="h2" className="wc-collection-row__title">
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="p" className="wc-collection-row__description">
              {description}
            </Typography>
          )}
        </div>
        {viewAllLink && (
          <Button
            variant="link"
            size="default"
            to={viewAllLink}
            icon={<ChevronRight size={16} />}
            iconPosition="right"
            className="wc-collection-row__view-all"
          >
            View All
          </Button>
        )}
      </div>
      <ProductGrid products={products} scrollOnMobile />
    </div>
  );

  if (background === 'gray') {
    return <MutedSection content={content} />;
  }

  return <ContentSection content={content} />;
}