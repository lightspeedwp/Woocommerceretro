import React from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { CheckoutFooter } from './CheckoutFooter';

/**
 * CheckoutLayout Component (Checkout Template Part)
 *
 * Specialized layout wrapper for the checkout flow with minimal header/footer.
 */

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

export const CheckoutLayout = ({ children }: CheckoutLayoutProps) => {
  return (
    <div className="wp-checkout-layout funky-checkout-layout">
      <CheckoutHeader />
      <main className="wp-checkout-layout__main">
        <div className="wp-checkout-layout">{children}</div>
      </main>
      <CheckoutFooter />
    </div>
  );
}