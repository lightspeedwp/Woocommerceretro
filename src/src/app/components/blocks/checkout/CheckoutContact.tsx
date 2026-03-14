import React from 'react';
import { Link } from 'react-router';

/**
 * CheckoutContact Block Component
 *
 * Displays logged-in user info or guest email input for checkout.
 */
export const CheckoutContact = ({
  isLoggedIn,
  email,
  onChange,
  error,
}: {
  isLoggedIn?: boolean;
  email?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}) => {
  const renderContent = () => {
    if (isLoggedIn) {
      return (
        <div className="wp-checkout-contact-preview funky-contact-preview">
          <div className="wp-checkout-contact-avatar funky-avatar">JD</div>
          <div className="wp-checkout-contact-info">
            <p className="wp-checkout-contact-name">John Doe</p>
            <small className="wp-checkout-contact-email">john.doe@example.com</small>
          </div>
          <button
            className="wp-checkout-btn-link funky-link-btn"
            aria-label="Change contact information"
          >
            <small>Change</small>
          </button>
        </div>
      );
    }

    return (
      <div className="wp-checkout-contact-form">
        <label htmlFor="email" className="wp-checkout-label">
          Email Address <span className="wp-checkout-required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          className={`wp-block-input funky-input${error ? ' has-error' : ''}`}
          placeholder="you@example.com"
          aria-invalid={!!error}
          aria-describedby={error ? 'email-error' : undefined}
        />
        {error && (
          <p id="email-error" className="wp-checkout-error">
            <span aria-hidden="true">&#9888;&#65039; </span>
            {error}
          </p>
        )}
        <div className="wp-checkout-checkbox-container">
          <label className="wp-checkout-checkbox-group funky-checkbox-group">
            <input type="checkbox" className="wp-block-checkbox" />
            <span className="wp-checkout-text-subtle">Email me with news and offers</span>
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="wp-block-card funky-card">
      <div className="wp-block-card__header">
        <div className="wp-checkout-contact-header">
          <h2 className="wp-block-card__title">Contact Information</h2>
          {!isLoggedIn && (
            <div className="wp-checkout-text-light">
              Already have an account?{' '}
              <Link to="/account/login" className="wp-checkout-link funky-link">Log in</Link>
            </div>
          )}
        </div>
      </div>
      <div className="wp-block-card__content">
        {renderContent()}
      </div>
    </div>
  );
};

CheckoutContact.displayName = 'CheckoutContact';