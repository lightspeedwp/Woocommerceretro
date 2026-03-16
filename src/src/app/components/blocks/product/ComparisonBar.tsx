import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router';
import { useComparison } from '../../../contexts/ComparisonContext';

/**
 * ComparisonBar - Product Block
 *
 * Floating sticky bar that shows products in comparison.
 */
export const ComparisonBar = () => {
  const { comparisonItems, removeFromComparison, clearComparison, comparisonCount } = useComparison();

  if (comparisonCount === 0) return null;

  return (
    <div className="wc-block-comparison-bar" role="region" aria-label="Product comparison">
      <div className="wc-block-comparison-bar__container">
        <div className="wc-block-comparison-bar__content">
          <div className="wc-block-comparison-bar__items">
            <div className="wc-block-comparison-bar__thumbnails">
              {comparisonItems.map((product) => (
                <div key={product.id} className="wc-block-comparison-bar__thumbnail group">
                  <Link to={`/product/${product.slug || product.id}`} className="wc-block-comparison-bar__link">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="wc-block-comparison-bar__thumbnail-image"
                    />
                  </Link>
                  <button
                    onClick={() => removeFromComparison(product.id)}
                    aria-label={`Remove ${product.name} from comparison`}
                    className="wc-block-comparison-bar__thumbnail-remove"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
            <div className="wc-block-comparison-bar__info">
              <div className="wc-block-comparison-bar__separator" />
              <div className="wc-block-comparison-bar__count">
                <span>{comparisonCount} {comparisonCount === 1 ? 'Product' : 'Products'}</span>
              </div>
            </div>
          </div>

          <div className="wc-block-comparison-bar__actions">
            <button
              onClick={clearComparison}
              aria-label="Clear all products from comparison"
              className="wc-block-comparison-bar__clear"
            >
              Clear All
            </button>
            <Link
              to="/compare"
              className="wc-block-compare-button wc-block-compare-button--primary wc-block-compare-button--md"
            >
              <span>Compare Products</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};