/**
 * Product Variants Type Definitions
 * 
 * Type definitions for variable products with size, color, and custom attributes.
 * Supports WooCommerce variable product architecture.
 * 
 * @module types/variants
 */

/**
 * Attribute Option
 * 
 * Individual option within an attribute (e.g., "Small", "Medium", "Large" for Size)
 * 
 * @typedef AttributeOption
 * @property {string} value - Option value/slug (e.g., "small", "red")
 * @property {string} label - Display label (e.g., "Small", "Red")
 * @property {boolean} [available] - Whether option is in stock/available
 * @property {string} [colorHex] - Hex color for color swatches (e.g., "#FF0000")
 */

/**
 * Product Attribute
 * 
 * Represents a variable attribute (e.g., Size, Color, Material)
 * 
 * @typedef ProductAttribute
 * @property {string} name - Attribute name (e.g., "Size", "Color")
 * @property {string} slug - Attribute slug (e.g., "size", "color")
 * @property {Array<AttributeOption>} options - Available options
 * @property {boolean} [visible] - Show on product page
 * @property {boolean} [variation] - Used for variations
 * @property {'select'|'button'|'swatch'} displayType - How to display selector
 */

/**
 * Product Variation
 * 
 * Specific combination of attributes with unique pricing and stock
 * 
 * @typedef ProductVariation
 * @property {string} id - Variation ID (e.g., "var-123")
 * @property {string} sku - SKU for this variation
 * @property {Object<string, string>} attributes - Attribute values (e.g., { size: "medium", color: "blue" })
 * @property {number} price - Regular price
 * @property {number} [salePrice] - Sale price if on sale
 * @property {number} stock - Stock quantity
 * @property {boolean} inStock - Whether in stock
 * @property {string} [image] - Variation-specific image URL
 * @property {number} [weight] - Product weight
 * @property {string} [description] - Variation-specific description
 */

/**
 * Variable Product
 * 
 * Product with multiple variations (extends base Product type)
 * 
 * @typedef VariableProduct
 * @property {string} id - Product ID
 * @property {string} name - Product name
 * @property {string} slug - Product slug
 * @property {'variable'} type - Product type (always "variable" for this)
 * @property {number} priceMin - Minimum price across all variations
 * @property {number} priceMax - Maximum price across all variations
 * @property {string} image - Default product image
 * @property {Array<string>} images - Product gallery images
 * @property {string} description - Long description
 * @property {string} shortDescription - Short description
 * @property {Array<ProductAttribute>} attributes - Available attributes
 * @property {Array<ProductVariation>} variations - All variations
 * @property {string} [category] - Product category
 * @property {string} [brand] - Product brand
 * @property {number} [rating] - Average rating
 * @property {number} [reviewCount] - Number of reviews
 */

/**
 * Selected Variant
 * 
 * User's current attribute selections (may be partial)
 * 
 * @typedef {Object<string, string>} SelectedVariant
 * @example
 * ```tsx
 * var selected = {
 *   size: "medium",
 *   color: "blue"
 * };
 * ```
 */

/**
 * Variant Selector State
 * 
 * UI state for variant selection
 * 
 * @typedef VariantSelectorState
 * @property {SelectedVariant} selected - Currently selected attributes
 * @property {ProductVariation|null} matchedVariation - Matched variation (if complete selection)
 * @property {boolean} isComplete - Whether all required attributes are selected
 * @property {Array<string>} errors - Validation errors
 */
