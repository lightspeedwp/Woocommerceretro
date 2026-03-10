import React from 'react';
import { Star } from '@phosphor-icons/react';

/* ProductRatingProps: { rating: number, reviewCount: number } */

/**
 * ProductRating Block Component
 * 
 * Visual star rating display with interactive review count link.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. No non-ASCII characters
 */
export function ProductRating(props) {
  var rating = props.rating;
  var reviewCount = props.reviewCount;

  var stars = [1, 2, 3, 4, 5].map(function(i) {
    var isFilled = i <= rating;
    return React.createElement(Star, {
      key: i,
      size: 16,
      className: isFilled ? 'wc-product-rating__star--filled' : 'wc-product-rating__star--empty'
    });
  });

  return React.createElement('div', { className: 'wc-product-rating' },
    React.createElement('div', { className: 'wc-product-rating__stars' }, stars),
    React.createElement('span', { className: 'wc-product-rating__count' },
      '(' + reviewCount + ' customer reviews)'
    )
  );
}