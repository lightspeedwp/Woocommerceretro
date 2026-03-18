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
    <dl className="wc-product-meta">
      <div className="wc-product-meta__row">
        <dt className="wc-product-meta__label">SKU:</dt>
        <dd className="wc-product-meta__value">{sku}</dd>
      </div>

      {categories && categories.length > 0 && (
        <div className="wc-product-meta__row">
          <dt className="wc-product-meta__label">Category:</dt>
          <dd className="wc-product-meta__value">
            {categories.map((cat, i) => (
              <React.Fragment key={cat}>
                <span className="wc-product-meta__link">{cat}</span>
                {i < categories.length - 1 ? ', ' : null}
              </React.Fragment>
            ))}
          </dd>
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="wc-product-meta__row">
          <dt className="wc-product-meta__label">Tags:</dt>
          <dd className="wc-product-meta__value">
            {tags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span className="wc-product-meta__link">{tag}</span>
                {i < tags.length - 1 ? ', ' : null}
              </React.Fragment>
            ))}
          </dd>
        </div>
      )}
    </dl>
  );
};