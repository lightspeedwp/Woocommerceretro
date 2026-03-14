import React from 'react';
import { Button } from '../design/Buttons';
import { FloatingLabelInput } from './ui/FloatingLabelInput';
import { mockUserProfile } from '../../../data/account';

/**
 * ContactInfo Component
 *
 * Shows logged-in user preview or guest email input for checkout.
 */
export const ContactInfo = ({
  isLoggedIn,
}: {
  isLoggedIn?: boolean;
}) => {
  const renderContent = () => {
    if (isLoggedIn) {
      return (
        <div className="wp-checkout-contact__preview funky-contact-preview">
          <span className="wp-checkout-contact__label">Logged in as </span>
          <strong className="wp-checkout-contact__name">
            {mockUserProfile.firstName} {mockUserProfile.lastName}
          </strong>
          <span className="wp-checkout-contact__email"> ({mockUserProfile.email})</span>
        </div>
      );
    }

    return (
      <div className="wp-checkout-contact__form">
        <FloatingLabelInput
          label="Email or mobile phone number"
          type="email"
          id="email"
          className="wp-checkout-contact__input funky-input"
        />

        <div className="wp-checkout-contact__newsletter">
          <input
            type="checkbox"
            id="newsletter"
            className="wp-checkout-contact__checkbox"
          />
          <label htmlFor="newsletter" className="wp-checkout-contact__checkbox-label">
            Email me with news and offers
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="wp-checkout-contact funky-checkout-contact">
      {renderContent()}
    </div>
  );
};

ContactInfo.displayName = 'ContactInfo';
