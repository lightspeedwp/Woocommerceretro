import React from 'react';
import * as TypographyModule from '../../common/Typography';
import { Star } from '@phosphor-icons/react';

var Typography = TypographyModule.Typography;

/* ProductInfoProps: { title, price, salePrice, rating, reviewCount, shortDescription } */

/**
 * ProductInfo Block
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. No non-ASCII characters
 */
export function ProductInfo(props) {
  var title = props.title;
  var price = props.price;
  var salePrice = props.salePrice;
  var rating = props.rating;
  var reviewCount = props.reviewCount;
  var shortDescription = props.shortDescription;

  var stars = [0, 1, 2, 3, 4].map(function(i) {
    var isFilled = i < Math.floor(rating);
    return React.createElement(Star, {
      key: i,
      size: 18,
      fill: isFilled ? 'currentColor' : 'none',
      className: isFilled ? '' : 'wc-product-info__star--empty'
    });
  });

  var ratingElement = React.createElement('div', { className: 'wc-product-info__rating' },
    React.createElement('div', { className: 'wc-product-info__stars' }, stars),
    React.createElement('span', { className: 'wc-product-info__review-count' },
      '(' + reviewCount + ' reviews)'
    )
  );

  var priceElement = (function() {
    if (salePrice) {
      return React.createElement('div', { className: 'wc-product-info__price' },
        React.createElement('span', { className: 'wc-product-info__price-sale' }, '\u00A3' + salePrice.toFixed(2)),
        React.createElement('span', { className: 'wc-product-info__price-regular' }, '\u00A3' + price.toFixed(2))
      );
    }
    return React.createElement('div', { className: 'wc-product-info__price' },
      React.createElement('span', { className: 'wc-product-info__price-current' }, '\u00A3' + price.toFixed(2))
    );
  })();

  return React.createElement('div', { className: 'wc-product-info' },
    React.createElement(Typography, { variant: 'h1', className: 'wc-product-info__title' }, title),
    ratingElement,
    priceElement,
    React.createElement('div', { className: 'wc-product-info__description' },
      React.createElement('p', null, shortDescription)
    )
  );
}