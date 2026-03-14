import React from 'react';

/**
 * ProductMeta Component
 *
 * Displays SKU, categories, and tags for a product.
 */
export const ProductMeta = ({
  sku,
  categories,
  tags,
}: {
  sku: string;
  categories?: string[];
  tags?: string[];
}) => {
  return (
    <div className="wc-product-meta">
      <div className="wc-product-meta__row">
        <span className="wc-product-meta__label">SKU:</span>
        <span className="wc-product-meta__value">{sku}</span>
      </div>

      {categories && categories.length > 0 && (
        <div className="wc-product-meta__row">
          <span className="wc-product-meta__label">Category:</span>
          <span className="wc-product-meta__value">
            {categories.map((cat, i) => (
              <React.Fragment key={cat}>
                <span className="wc-product-meta__link">{cat}</span>
                {i < categories.length - 1 ? ', ' : null}
              </React.Fragment>
            ))}
          </span>
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="wc-product-meta__row">
          <span className="wc-product-meta__label">Tags:</span>
          <span className="wc-product-meta__value">
            {tags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span className="wc-product-meta__link">{tag}</span>
                {i < tags.length - 1 ? ', ' : null}
              </React.Fragment>
            ))}
          </span>
        </div>
      )}
    </div>
  );
};
