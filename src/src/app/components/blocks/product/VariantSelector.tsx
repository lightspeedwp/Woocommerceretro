import React from 'react';
import { Check } from '../../../utils/phosphor-compat';

interface VariantOption {
  value: string;
  label: string;
  available?: boolean;
  colorHex?: string;
}

interface ProductAttribute {
  slug: string;
  name: string;
  displayType: 'button' | 'swatch' | 'select';
  options: VariantOption[];
}

const isLightColor = (hex: string): boolean => {
  const color = hex.replace('#', '');
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
};

/**
 * VariantSelector Block
 *
 * Supports button, swatch, and dropdown display types for product variants.
 */
export const VariantSelector = ({
  attribute,
  selected,
  onChange,
  className = '',
}: {
  attribute: ProductAttribute;
  selected: Record<string, string>;
  onChange: (slug: string, value: string) => void;
  className?: string;
}) => {
  const currentValue = selected[attribute.slug];

  const renderButtonSelector = () => (
    <div className="wc-block-variant-selector__buttons">
      {attribute.options.map((option) => {
        const isSelected = currentValue === option.value;
        const isDisabled = option.available === false;
        return (
          <button
            key={option.value}
            onClick={() => { if (!isDisabled) onChange(attribute.slug, option.value); }}
            disabled={isDisabled}
            className={`wc-block-variant-selector__button${isSelected ? ' wc-block-variant-selector__button--selected' : ''}${isDisabled ? ' wc-block-variant-selector__button--disabled' : ''}`}
            aria-label={`Select ${option.label}`}
            aria-pressed={isSelected}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );

  const renderSwatchSelector = () => (
    <div className="wc-block-variant-selector__swatches">
      {attribute.options.map((option) => {
        const isSelected = currentValue === option.value;
        const isDisabled = option.available === false;
        return (
          <button
            key={option.value}
            onClick={() => { if (!isDisabled) onChange(attribute.slug, option.value); }}
            disabled={isDisabled}
            className={`wc-block-variant-selector__swatch${isSelected ? ' wc-block-variant-selector__swatch--selected' : ''}${isDisabled ? ' wc-block-variant-selector__swatch--disabled' : ''}`}
            style={{ backgroundColor: option.colorHex || 'var(--wp--preset--color--neutral-300)' }}
            aria-label={`Select ${option.label}`}
            aria-pressed={isSelected}
            title={option.label}
          >
            {isSelected && (
              <div className="wc-block-variant-selector__swatch-check">
                <Check
                  size={18}
                  className={option.colorHex && isLightColor(option.colorHex)
                    ? 'wc-block-variant-selector__swatch-check--light'
                    : 'wc-block-variant-selector__swatch-check--dark'}
                  strokeWidth={3}
                />
              </div>
            )}
            {isDisabled && (
              <div className="wc-block-variant-selector__swatch-disabled-line">
                <div className="wc-block-variant-selector__swatch-strike" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );

  const renderSelectDropdown = () => (
    <select
      value={currentValue || ''}
      onChange={(e) => onChange(attribute.slug, e.target.value)}
      className="wc-block-variant-selector__select"
      aria-label={`Select ${attribute.name}`}
    >
      <option value="">Choose {attribute.name}</option>
      {attribute.options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.available === false}>
          {option.label}{option.available === false ? ' (Out of Stock)' : ''}
        </option>
      ))}
    </select>
  );

  const foundOption = currentValue
    ? attribute.options.find((opt) => opt.value === currentValue)
    : null;

  let selectorUI: React.ReactNode = null;
  if (attribute.displayType === 'button') selectorUI = renderButtonSelector();
  else if (attribute.displayType === 'swatch') selectorUI = renderSwatchSelector();
  else if (attribute.displayType === 'select') selectorUI = renderSelectDropdown();

  return (
    <div className={`wc-block-variant-selector ${className}`}>
      <label className="wc-block-variant-selector__label">
        <span className="wc-block-variant-selector__label-name">{attribute.name}</span>
        {foundOption && (
          <span className="wc-block-variant-selector__label-value">{foundOption.label}</span>
        )}
      </label>
      {selectorUI}
    </div>
  );
};