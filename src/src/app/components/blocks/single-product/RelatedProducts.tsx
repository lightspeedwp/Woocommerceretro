import React from 'react';
import * as ProductCardModule from '../product/ProductCard';
import * as TypographyModule from '../../common/Typography';

var ProductCard = ProductCardModule.ProductCard;
var Typography = TypographyModule.Typography;

// Mock Data
var RELATED_PRODUCTS = [
  {
    id: 'rel-0',
    name: 'Related Product 1',
    brand: 'Brand Name',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop&bg=10',
    inStock: true,
    rating: 4.0
  },
  {
    id: 'rel-1',
    name: 'Related Product 2',
    brand: 'Brand Name',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop&bg=11',
    inStock: true,
    rating: 4.0
  },
  {
    id: 'rel-2',
    name: 'Related Product 3',
    brand: 'Brand Name',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop&bg=12',
    inStock: true,
    rating: 4.0
  },
  {
    id: 'rel-3',
    name: 'Related Product 4',
    brand: 'Brand Name',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop&bg=13',
    inStock: true,
    rating: 4.0
  }
];

/**
 * RelatedProducts Component
 */
export function RelatedProducts(props) {
  var products = props.products || RELATED_PRODUCTS;

  var renderProduct = function(product) {
    return React.createElement(ProductCard, { key: product.id, product: product });
  };

  return React.createElement('section', { className: "wc-related-products" },
    React.createElement(Typography, { variant: "h2", className: "wc-related-products__title" }, "You may also like"),
    React.createElement('div', { className: "wc-related-products__grid" },
      products.map(renderProduct)
    )
  );
}

RelatedProducts.displayName = 'RelatedProducts';