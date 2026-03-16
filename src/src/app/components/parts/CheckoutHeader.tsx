/**
 * CheckoutHeader Component (Checkout Template Part)
 *
 * Distraction-free header for checkout flow with logo,
 * secure badge, and back-to-cart navigation.
 */

import React from 'react';
import { Container } from '../common/Container';
import { ShopLogo } from '../common/Logo';
import { Lock, ArrowLeft } from '../../utils/phosphor-compat';
import { Link, useLocation } from 'react-router';

interface CheckoutHeaderProps {
  className?: string;
}

export const CheckoutHeader = ({ className = '' }: CheckoutHeaderProps) => {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';

  return (
    <header className={`wp-checkout-header ${className}`.trim()}>
      <Container variant="site">
        <div className="wp-checkout-header__inner">
          <div className="wp-checkout-header__branding">
            <Link to="/shop" className="wp-checkout-header__logo-link">
              <ShopLogo variant="current" className="wp-checkout-header__logo" />
            </Link>
            <div className="wp-checkout-header__secure-badge">
              <Lock size={16} className="wp-checkout-header__secure-icon" />
              <span className="wp-checkout-header__secure-text">Secure Checkout</span>
            </div>
          </div>
          {!isCartPage && (
            <Link to="/cart" className="wp-checkout-header__back-link">
              <ArrowLeft size={16} className="wp-checkout-header__back-icon" />
              <span className="wp-checkout-header__back-text">Back to Cart</span>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
}

CheckoutHeader.displayName = 'CheckoutHeader';