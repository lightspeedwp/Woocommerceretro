import { useState, useMemo, useCallback } from 'react';

/**
 * Variant Selection Hook
 *
 * Manages attribute selection for variable products,
 * finds matching variations, and validates add-to-cart eligibility.
 */

interface ProductVariation {
  attributes: Record<string, string>;
  inStock: boolean;
  [key: string]: any;
}

interface ProductAttribute {
  name: string;
  slug: string;
  variation: boolean;
  [key: string]: any;
}

interface VariableProduct {
  variations: ProductVariation[];
  attributes: ProductAttribute[];
}

const findMatchingVariation = (
  variations: ProductVariation[],
  selected: Record<string, string>
): ProductVariation | null => {
  const keys = Object.keys(selected);
  if (keys.length === 0) return null;

  return variations.find((variation) =>
    keys.every((key) => variation.attributes[key] === selected[key])
  ) ?? null;
};

export const useVariantSelection = (product: VariableProduct) => {
  const [selected, setSelected] = useState<Record<string, string>>({});

  const matchedVariation = useMemo(
    () => findMatchingVariation(product.variations, selected),
    [product.variations, selected]
  );

  const isComplete = useMemo(() => {
    const requiredAttributes = product.attributes.filter((attr) => attr.variation);
    return requiredAttributes.every((attr) => !!selected[attr.slug]);
  }, [product.attributes, selected]);

  const errors = useMemo(() => {
    const errorList: string[] = [];

    if (!isComplete) {
      const missingAttributes = product.attributes
        .filter((attr) => attr.variation && !selected[attr.slug])
        .map((attr) => attr.name);

      if (missingAttributes.length > 0) {
        errorList.push(`Please select: ${missingAttributes.join(', ')}`);
      }
    }

    if (isComplete && !matchedVariation) {
      errorList.push('This combination is not available');
    }

    if (matchedVariation && !matchedVariation.inStock) {
      errorList.push('This variation is out of stock');
    }

    return errorList;
  }, [isComplete, matchedVariation, product.attributes, selected]);

  const canAddToCart = useMemo(
    () => isComplete && matchedVariation !== null && matchedVariation.inStock && errors.length === 0,
    [isComplete, matchedVariation, errors]
  );

  const selectAttribute = useCallback((attributeSlug: string, value: string) => {
    setSelected((prev) => ({ ...prev, [attributeSlug]: value }));
  }, []);

  const resetSelection = useCallback(() => {
    setSelected({});
  }, []);

  return {
    selected,
    matchedVariation,
    isComplete,
    errors,
    selectAttribute,
    resetSelection,
    canAddToCart,
  };
}