import React from 'react';
import { Scales as Scale, Check } from '../../../utils/phosphor-compat';
import { useComparison } from '../../../contexts/ComparisonContext';
import { cn } from '../../../utils/cn';

/**
 * CompareButton - Product Block
 *
 * Button to add/remove products from comparison list.
 */
export const CompareButton = ({
  product,
  variant = 'default',
  size = 'md',
  className = '',
}: {
  product: any;
  variant?: 'default' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) => {
  const { addToComparison, removeFromComparison, isInComparison } = useComparison();
  const inComparison = isInComparison(product.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (inComparison) {
      removeFromComparison(product.id);
    } else {
      addToComparison(product);
    }
  };

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;

  const fullClassName = cn(
    'wc-block-compare-button',
    `wc-block-compare-button--${size}`,
    variant === 'icon-only' ? 'wc-block-compare-button--icon-only' : null,
    inComparison ? 'wc-block-compare-button--active' : null,
    className
  );

  return (
    <button
      onClick={handleClick}
      aria-label={inComparison ? 'Remove from comparison' : 'Add to comparison'}
      aria-pressed={inComparison}
      className={fullClassName}
      title={inComparison ? 'Remove from comparison' : 'Add to comparison'}
    >
      {inComparison ? (
        <>
          <Check size={iconSize} />
          {variant === 'default' && <span>In Comparison</span>}
        </>
      ) : (
        <>
          <Scale size={iconSize} />
          {variant === 'default' && <span>Add to Compare</span>}
        </>
      )}
    </button>
  );
};