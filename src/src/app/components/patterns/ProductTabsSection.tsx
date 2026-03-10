import React from 'react';
import * as TypographyModule from '../common/Typography';
import { Star } from '@phosphor-icons/react';
import * as ButtonsModule from '../blocks/design/Buttons';

var useState = React.useState;
var Typography = TypographyModule.Typography;
var Button = ButtonsModule.Button;

/**
 * ProductTabsSection Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (React.createElement only)
 * 2. No spread operators
 * 3. No destructuring in parameters or assignments
 */

// ProductTab structure
// - id: string
// - label: string
// - content: React.ReactNode

// ProductTabsSectionProps structure
// - tabs?: ProductTab[]
// - defaultTab?: string
// - className?: string
// - activeTab?: string
// - setActiveTab?: (tab: any) => void
// - description?: string
// - attributes?: any[]
// - reviews?: any[]
// - reviewRating?: number
// - setReviewRating?: (rating: number) => void
// - reviewText?: string
// - setReviewText?: (text: string) => void
// - handleReviewSubmit?: (e: React.FormEvent) => void

export var ProductTabsSection = function ProductTabsSection(props) {
  var tabs = props.tabs;
  var defaultTab = props.defaultTab;
  var className = props.className || '';
  var controlledActiveTab = props.activeTab;
  var setControlledActiveTab = props.setActiveTab;
  var description = props.description;
  var attributes = props.attributes;
  var reviews = props.reviews;
  var reviewRating = props.reviewRating || 0;
  var setReviewRating = props.setReviewRating;
  var reviewText = props.reviewText || '';
  var setReviewText = props.setReviewText;
  var handleReviewSubmit = props.handleReviewSubmit;

  var internalActiveTabState = useState(defaultTab || 'description');
  var internalActiveTab = internalActiveTabState[0];
  var setInternalActiveTab = internalActiveTabState[1];
  
  var activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;
  var setActiveTab = setControlledActiveTab || setInternalActiveTab;

  // Filter reviews to show only verified customers
  var verifiedReviews = [];
  if (reviews && reviews.length > 0) {
    for (var i = 0; i < reviews.length; i++) {
      if (reviews[i].verified === true) {
        verifiedReviews.push(reviews[i]);
      }
    }
  }

  var renderStars = function(rating, interactive) {
    var starElements = [1, 2, 3, 4, 5].map(function(star) {
      var isFilled = star <= rating;
      return React.createElement(Star, { 
        key: star, 
        size: interactive ? 24 : 16, 
        className: (isFilled ? 'woocommerce-product-info__rating-star--filled' : 'woocommerce-product-info__rating-star') + (interactive ? ' cursor-pointer' : ''),
        fill: isFilled ? "currentColor" : "none",
        onClick: (interactive && setReviewRating) ? function() { setReviewRating(star); } : undefined
      });
    });

    return React.createElement('div', { 
      className: 'woocommerce-product-tabs__review-stars ' + (interactive ? 'woocommerce-product-tabs__review-stars--interactive' : '') 
    }, starElements);
  };

  var defaultTabs = [
    {
      id: 'description',
      label: 'Description',
      content: React.createElement('div', { className: "woocommerce-product-tabs__content" },
        React.createElement(Typography, { variant: "body" }, description || 'Product description goes here.')
      )
    },
    {
      id: 'additional',
      label: 'Additional Information',
      content: React.createElement('div', { className: "woocommerce-product-tabs__list-content" },
        (attributes && attributes.length > 0) ? attributes.map(function(attr, index) {
          return React.createElement('div', { key: index, className: "woocommerce-product-meta__item" },
            React.createElement('span', { className: "woocommerce-product-meta__label" }, attr.name + ":"),
            React.createElement('span', { className: "woocommerce-product-meta__value" }, attr.options.join(', '))
          );
        }) : React.createElement(Typography, { variant: "body" }, "No additional information available.")
      )
    },
    {
      id: 'reviews',
      label: 'Reviews (' + verifiedReviews.length + ')',
      content: React.createElement('div', { className: "woocommerce-product-tabs__content" },
        (verifiedReviews && verifiedReviews.length > 0) ? React.createElement(React.Fragment, null,
          React.createElement('div', { className: "woocommerce-product-tabs__review-summary" },
            renderStars(4.5, false),
            React.createElement(Typography, { variant: "body" }, React.createElement('strong', null, "4.5 out of 5")),
            React.createElement(Typography, { variant: "small", className: "text-muted" }, "(" + verifiedReviews.length + " verified customer reviews)")
          ),
          React.createElement('div', { className: "woocommerce-product-tabs__reviews-list" },
            verifiedReviews.map(function(review) {
              return React.createElement('div', { key: review.id, className: "woocommerce-product-tabs__review-item" },
                React.createElement('div', { className: "woocommerce-product-tabs__review-avatar-row" },
                  React.createElement('div', { className: "woocommerce-product-tabs__review-avatar" }, review.author.charAt(0)),
                  React.createElement('div', { className: "woocommerce-product-tabs__review-meta" },
                    React.createElement(Typography, { variant: "body", className: "woocommerce-product-tabs__review-author-name" }, review.author),
                    React.createElement('div', { className: "woocommerce-product-tabs__review-date-row" },
                      renderStars(review.rating, false),
                      React.createElement(Typography, { variant: "small", className: "text-muted" }, review.date),
                      React.createElement('span', { className: "woocommerce-product-tabs__verified-badge" }, "✓ Verified Purchase")
                    )
                  )
                ),
                React.createElement(Typography, { variant: "body" }, review.comment)
              );
            })
          )
        ) : React.createElement('div', { className: "woocommerce-product-tabs__no-reviews" },
          React.createElement(Typography, { variant: "body" }, "There are no verified customer reviews yet.")
        ),
        React.createElement('div', { className: "woocommerce-product-tabs__review-form-wrapper" },
          React.createElement(Typography, { variant: "h3", className: "woocommerce-product-tabs__review-form-heading" },
            (verifiedReviews && verifiedReviews.length > 0) ? 'Add a review' : 'Be the first to review'
          ),
          React.createElement(Typography, { variant: "body", className: "woocommerce-product-tabs__review-form-note" },
            "Your email address will not be published. Required fields are marked *"
          ),
          React.createElement('form', { onSubmit: handleReviewSubmit, className: "woocommerce-product-tabs__review-form-fields" },
            React.createElement('div', null,
              React.createElement('label', { className: "woocommerce-product-tabs__review-form-label" }, "Your rating *"),
              renderStars(reviewRating, true)
            ),
            React.createElement('div', null,
              React.createElement('label', { htmlFor: "review-text", className: "woocommerce-product-tabs__review-form-label" }, "Your review *"),
              React.createElement('textarea', {
                id: "review-text",
                value: reviewText,
                onChange: setReviewText ? function(e) { setReviewText(e.target.value); } : undefined,
                className: "woocommerce-product-tabs__review-textarea",
                placeholder: "Write your review here...",
                required: true
              })
            ),
            React.createElement(Button, { type: "submit", variant: "primary", size: "default" }, "Submit Review")
          )
        )
      )
    }
  ];

  var displayTabs = tabs || defaultTabs;

  var handleKeyDown = function(e, tabId) {
    var currentIndex = displayTabs.findIndex(function(tab) { return tab.id === activeTab; });
    
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setActiveTab(displayTabs[currentIndex - 1].id);
    } else if (e.key === 'ArrowRight' && currentIndex < displayTabs.length - 1) {
      setActiveTab(displayTabs[currentIndex + 1].id);
    } else if (e.key === 'Home') {
      setActiveTab(displayTabs[0].id);
    } else if (e.key === 'End') {
      setActiveTab(displayTabs[displayTabs.length - 1].id);
    }
  };

  return React.createElement('div', { className: 'woocommerce-product-tabs ' + className },
    React.createElement('div', { 
      className: "woocommerce-product-tabs__list",
      role: "tablist",
      "aria-label": "Product information tabs"
    },
      displayTabs.map(function(tab) {
        var isActive = activeTab === tab.id;
        return React.createElement('button', {
          key: tab.id,
          role: "tab",
          "aria-selected": isActive,
          "aria-controls": "panel-" + tab.id,
          id: "tab-" + tab.id,
          onClick: function() { setActiveTab(tab.id); },
          onKeyDown: function(e) { handleKeyDown(e, tab.id); },
          className: "woocommerce-product-tabs__tab " + (isActive ? 'woocommerce-product-tabs__tab--active' : '')
        }, tab.label);
      })
    ),
    displayTabs.map(function(tab) {
      var isActive = activeTab === tab.id;
      return React.createElement('div', {
        key: tab.id,
        role: "tabpanel",
        id: "panel-" + tab.id,
        "aria-labelledby": "tab-" + tab.id,
        hidden: !isActive,
        className: "woocommerce-product-tabs__panel"
      }, isActive ? tab.content : null);
    })
  );
};

ProductTabsSection.displayName = 'ProductTabsSection';