/**
 * CheckoutFooter Component (Checkout Template Part)
 *
 * Minimal footer for the checkout flow with legal links,
 * payment badges, and copyright.
 */

import React from 'react';
import { Container } from '../common/Container';
import { Link } from 'react-router';

interface CheckoutFooterProps {
  className?: string;
}

export const CheckoutFooter = ({ className = '' }: CheckoutFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`wp-checkout-footer ${className}`.trim()}>
      <Container variant="site">
        <div className="wp-checkout-footer__inner">
          <p className="wp-checkout-footer__copyright">
            &copy; {currentYear} Store. All rights reserved.
          </p>
          <div className="wp-checkout-footer__links">
            <Link to="/legal/privacy" className="wp-checkout-footer__link">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="wp-checkout-footer__link">
              Terms &amp; Conditions
            </Link>
            <Link to="/shipping-returns" className="wp-checkout-footer__link">
              Returns Policy
            </Link>
          </div>
          <div className="wp-checkout-footer__badges">
            <span className="wp-checkout-footer__badge funky-card-glow">Visa</span>
            <span className="wp-checkout-footer__badge funky-card-glow">Mastercard</span>
            <span className="wp-checkout-footer__badge funky-card-glow">Secure SSL</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

CheckoutFooter.displayName = 'CheckoutFooter';