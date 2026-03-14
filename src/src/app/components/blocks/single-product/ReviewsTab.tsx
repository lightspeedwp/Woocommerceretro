import React, { useState } from 'react';
import { Star } from '@phosphor-icons/react';
import { Button } from '../design/Buttons';
import { Typography } from '../../common/Typography';

/**
 * ReviewsTab Component
 *
 * Product reviews list with review submission form.
 */
export const ReviewsTab = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="wc-reviews">
      <div className="wc-reviews__list">
        <div className="wc-reviews__item">
          <div className="wc-reviews__header">
            <div className="wc-reviews__stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="wc-product-rating__star--filled" />
              ))}
            </div>
            <span className="wc-reviews__title">Great wine!</span>
          </div>
          <Typography variant="body" className="wc-reviews__body">
            &quot;Absolutely delicious. Will buy again.&quot;
          </Typography>
          <p className="wc-reviews__meta">
            By <span className="wc-reviews__meta-author">John Doe</span> (Verified Owner) - Dec 12, 2024
          </p>
        </div>
      </div>

      <div className="wc-reviews__form">
        <Typography variant="h3" className="wc-reviews__form-heading">Add a review</Typography>
        <p className="wc-reviews__form-notice">
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="wc-reviews__form-inner" onSubmit={handleSubmit}>
          <div className="wc-reviews__form-group">
            <label className="wc-reviews__form-label">Your rating</label>
            <div className="wc-reviews__form-stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(i)}
                  className="wc-reviews__star-btn"
                >
                  <Star
                    size={20}
                    className={i <= rating ? 'wc-product-rating__star--filled' : 'wc-product-rating__star--empty'}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="wc-reviews__form-group">
            <label className="wc-reviews__form-label">Your review</label>
            <textarea
              rows={4}
              className="wc-reviews__form-textarea"
              placeholder="Tell us what you liked or didn't like..."
            />
          </div>
          <div className="wc-reviews__form-grid">
            <div className="wc-reviews__form-group">
              <label className="wc-reviews__form-label">Name *</label>
              <input type="text" className="wc-reviews__form-input" />
            </div>
            <div className="wc-reviews__form-group">
              <label className="wc-reviews__form-label">Email *</label>
              <input type="email" className="wc-reviews__form-input" />
            </div>
          </div>
          <Button type="submit" variant="primary">Submit Review</Button>
        </form>
      </div>
    </div>
  );
};
