import React from 'react';
import { Link } from 'react-router';
import { Check } from '../../../utils/phosphor-compat';

/**
 * AccountCreation Component
 *
 * WooCommerce Order Confirmation Block: Account Creation
 * Funky Redesign: Neon green borders + Glass panels
 */
export const AccountCreation = ({
  email,
}: {
  email: string;
}) => {
  const benefitsList = [
    'Faster future purchases',
    'Securely save payment info',
    'Track orders and view shopping history',
  ];

  return (
    <div className="wp-order-account-creation">
      <div className="wp-order-account-benefits">
        <h3 className="wp-block-heading funky-gradient-text">
          Create an account with WooCommerce Website
        </h3>
        <div className="wp-order-account-benefits">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="wp-order-account-benefit-item funky-glass-panel">
              <Check size={16} strokeWidth={2} className="wp-order-account-benefit-item__icon" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wp-order-account-actions funky-glass-panel funky-glow-border--lime">
        <Link to="/account?action=register" className="wp-block-button wp-block-button--full-width">
          <span className="wp-block-button__link">Create account</span>
        </Link>
        <div className="wp-order-account-actions__footer">
          <small className="wp-order-account-actions__disclaimer">
            Check your email at {email} for the link to set up an account password. By creating an account you agree to our{' '}
            <Link to="/terms" className="wp-order-account-actions__legal-link">Terms</Link>
            {' '}and{' '}
            <Link to="/privacy" className="wp-order-account-actions__legal-link">Privacy policy</Link>.
          </small>
        </div>
      </div>
    </div>
  );
};

AccountCreation.displayName = 'AccountCreation';
