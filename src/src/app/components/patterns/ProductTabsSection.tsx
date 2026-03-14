import React, { useState } from 'react';
import { Typography } from '../common/Typography';
import { Star } from '@phosphor-icons/react';
import { Button } from '../blocks/design/Buttons';

interface ProductTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ProductTabsSectionProps {
  tabs?: ProductTab[];
  defaultTab?: string;
  className?: string;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  description?: string;
  attributes?: { name: string; options: string[] }[];
  reviews?: any[];
  reviewRating?: number;
  setReviewRating?: (rating: number) => void;
  reviewText?: string;
  setReviewText?: (text: string) => void;
  handleReviewSubmit?: (e: React.FormEvent) => void;
}

/**
 * ProductTabsSection Pattern Component
 */
export const ProductTabsSection = ({
  tabs,
  defaultTab,
  className = '',
  activeTab: controlledActiveTab,
  setActiveTab: setControlledActiveTab,
  description,
  attributes,
  reviews,
  reviewRating = 0,
  setReviewRating,
  reviewText = '',
  setReviewText,
  handleReviewSubmit,
}: ProductTabsSectionProps) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab || 'description');

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;
  const setActiveTab = setControlledActiveTab || setInternalActiveTab;

  const verifiedReviews = reviews?.filter((r) => r.verified === true) || [];

  const renderStars = (rating: number, interactive: boolean) => (
    <div className={`woocommerce-product-tabs__review-stars ${interactive ? 'woocommerce-product-tabs__review-stars--interactive' : ''}`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= rating;
        return (
          <Star
            key={star}
            size={interactive ? 24 : 16}
            className={`${isFilled ? 'woocommerce-product-info__rating-star--filled' : 'woocommerce-product-info__rating-star'}${interactive ? ' cursor-pointer' : ''}`}
            fill={isFilled ? 'currentColor' : 'none'}
            onClick={interactive && setReviewRating ? () => setReviewRating(star) : undefined}
          />
        );
      })}
    </div>
  );

  const defaultTabs: ProductTab[] = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div className="woocommerce-product-tabs__content">
          <Typography variant="body">{description || 'Product description goes here.'}</Typography>
        </div>
      ),
    },
    {
      id: 'additional',
      label: 'Additional Information',
      content: (
        <div className="woocommerce-product-tabs__list-content">
          {attributes && attributes.length > 0 ? (
            attributes.map((attr, index) => (
              <div key={index} className="woocommerce-product-meta__item">
                <span className="woocommerce-product-meta__label">{attr.name}:</span>
                <span className="woocommerce-product-meta__value">{attr.options.join(', ')}</span>
              </div>
            ))
          ) : (
            <Typography variant="body">No additional information available.</Typography>
          )}
        </div>
      ),
    },
    {
      id: 'reviews',
      label: `Reviews (${verifiedReviews.length})`,
      content: (
        <div className="woocommerce-product-tabs__content">
          {verifiedReviews.length > 0 ? (
            <>
              <div className="woocommerce-product-tabs__review-summary">
                {renderStars(4.5, false)}
                <Typography variant="body"><strong>4.5 out of 5</strong></Typography>
                <Typography variant="small" className="text-muted">({verifiedReviews.length} verified customer reviews)</Typography>
              </div>
              <div className="woocommerce-product-tabs__reviews-list">
                {verifiedReviews.map((review) => (
                  <div key={review.id} className="woocommerce-product-tabs__review-item">
                    <div className="woocommerce-product-tabs__review-avatar-row">
                      <div className="woocommerce-product-tabs__review-avatar">{review.author.charAt(0)}</div>
                      <div className="woocommerce-product-tabs__review-meta">
                        <Typography variant="body" className="woocommerce-product-tabs__review-author-name">{review.author}</Typography>
                        <div className="woocommerce-product-tabs__review-date-row">
                          {renderStars(review.rating, false)}
                          <Typography variant="small" className="text-muted">{review.date}</Typography>
                          <span className="woocommerce-product-tabs__verified-badge">&#10003; Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <Typography variant="body">{review.comment}</Typography>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="woocommerce-product-tabs__no-reviews">
              <Typography variant="body">There are no verified customer reviews yet.</Typography>
            </div>
          )}
          <div className="woocommerce-product-tabs__review-form-wrapper">
            <Typography variant="h3" className="woocommerce-product-tabs__review-form-heading">
              {verifiedReviews.length > 0 ? 'Add a review' : 'Be the first to review'}
            </Typography>
            <Typography variant="body" className="woocommerce-product-tabs__review-form-note">
              Your email address will not be published. Required fields are marked *
            </Typography>
            <form onSubmit={handleReviewSubmit} className="woocommerce-product-tabs__review-form-fields">
              <div>
                <label className="woocommerce-product-tabs__review-form-label">Your rating *</label>
                {renderStars(reviewRating, true)}
              </div>
              <div>
                <label htmlFor="review-text" className="woocommerce-product-tabs__review-form-label">Your review *</label>
                <textarea
                  id="review-text"
                  value={reviewText}
                  onChange={setReviewText ? (e) => setReviewText(e.target.value) : undefined}
                  className="woocommerce-product-tabs__review-textarea"
                  placeholder="Write your review here..."
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="default">Submit Review</Button>
            </form>
          </div>
        </div>
      ),
    },
  ];

  const displayTabs = tabs || defaultTabs;

  const handleKeyDown = (e: React.KeyboardEvent, _tabId: string) => {
    const currentIndex = displayTabs.findIndex((tab) => tab.id === activeTab);

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

  return (
    <div className={`woocommerce-product-tabs ${className}`}>
      <div className="woocommerce-product-tabs__list" role="tablist" aria-label="Product information tabs">
        {displayTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, tab.id)}
              className={`woocommerce-product-tabs__tab ${isActive ? 'woocommerce-product-tabs__tab--active' : ''}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {displayTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={!isActive}
            className="woocommerce-product-tabs__panel"
          >
            {isActive ? tab.content : null}
          </div>
        );
      })}
    </div>
  );
}

ProductTabsSection.displayName = 'ProductTabsSection';