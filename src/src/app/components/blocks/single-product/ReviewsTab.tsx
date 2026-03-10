import React from 'react';
import { Star } from '@phosphor-icons/react';
import * as ButtonsModule from '../design/Buttons';
import * as TypographyModule from '../../common/Typography';

var useState = React.useState;
var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;

/**
 * ReviewsTab Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ReviewsTab() {
  var _rating = useState(0);
  var rating = _rating[0];
  var setRating = _rating[1];

  var starIndices = [1, 2, 3, 4, 5];

  var existingReviewStars = starIndices.map(function(i) {
    return React.createElement(Star, { 
      key: i, 
      size: 14, 
      className: "wc-product-rating__star--filled"
    });
  });

  var reviewItem = React.createElement('div', { key: 'rev-1', className: "wc-reviews__item" }, [
    React.createElement('div', { key: 'head', className: "wc-reviews__header" }, [
      React.createElement('div', { key: 'stars', className: "wc-reviews__stars" }, existingReviewStars),
      React.createElement('span', { key: 'title', className: "wc-reviews__title" }, "Great wine!")
    ]),
    React.createElement(Typography, { key: 'body', variant: "body", className: "wc-reviews__body" }, '"Absolutely delicious. Will buy again."'),
    React.createElement('p', { key: 'meta', className: "wc-reviews__meta" }, [
      "By ",
      React.createElement('span', { key: 'author', className: "wc-reviews__meta-author" }, "John Doe"),
      " (Verified Owner) - Dec 12, 2024"
    ])
  ]);

  var formRatingStars = starIndices.map(function(i) {
    function handleStarClick() { setRating(i); }
    return React.createElement('button', {
      key: i,
      type: "button",
      onClick: handleStarClick,
      className: "wc-reviews__star-btn"
    }, React.createElement(Star, {
      size: 20,
      className: (i <= rating ? "wc-product-rating__star--filled" : "wc-product-rating__star--empty")
    }));
  });

  function handleSubmit(e) { e.preventDefault(); }

  var reviewForm = React.createElement('div', { key: 'form-wrap', className: "wc-reviews__form" }, [
    React.createElement(Typography, { key: 'h', variant: "h3", className: "wc-reviews__form-heading" }, "Add a review"),
    React.createElement('p', { key: 'n', className: "wc-reviews__form-notice" }, "Your email address will not be published. Required fields are marked *"),
    React.createElement('form', { key: 'f', className: "wc-reviews__form-inner", onSubmit: handleSubmit }, [
      React.createElement('div', { key: 'g1', className: "wc-reviews__form-group" }, [
        React.createElement('label', { key: 'l', className: "wc-reviews__form-label" }, "Your rating"),
        React.createElement('div', { key: 's', className: "wc-reviews__form-stars" }, formRatingStars)
      ]),
      React.createElement('div', { key: 'g2', className: "wc-reviews__form-group" }, [
        React.createElement('label', { key: 'l', className: "wc-reviews__form-label" }, "Your review"),
        React.createElement('textarea', { key: 't', rows: 4, className: "wc-reviews__form-textarea", placeholder: "Tell us what you liked or didn't like..." })
      ]),
      React.createElement('div', { key: 'grid', className: "wc-reviews__form-grid" }, [
        React.createElement('div', { key: 'g3', className: "wc-reviews__form-group" }, [
          React.createElement('label', { key: 'l', className: "wc-reviews__form-label" }, "Name *"),
          React.createElement('input', { key: 'i', type: "text", className: "wc-reviews__form-input" })
        ]),
        React.createElement('div', { key: 'g4', className: "wc-reviews__form-group" }, [
          React.createElement('label', { key: 'l', className: "wc-reviews__form-label" }, "Email *"),
          React.createElement('input', { key: 'i', type: "email", className: "wc-reviews__form-input" })
        ])
      ]),
      React.createElement(Button, { key: 'btn', type: "submit", variant: "primary" }, "Submit Review")
    ])
  ]);

  return React.createElement('div', { className: "wc-reviews" }, [
    React.createElement('div', { key: 'list', className: "wc-reviews__list" }, [reviewItem]),
    reviewForm
  ]);
}