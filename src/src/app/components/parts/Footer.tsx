import React from 'react';
import { useLocation } from 'react-router';
import { MainFooter } from './MainFooter';
import { CheckoutFooter } from './CheckoutFooter';

/**
 * Footer — Smart footer switcher (Global Template Part)
 *
 * Renders MainFooter or CheckoutFooter based on current route.
 * Checkout/order-confirmation routes get the minimal CheckoutFooter;
 * all other routes get the full MainFooter.
 *
 * CSS: /src/styles/blocks/layout/footer.css (base)
 *      /src/styles/blocks/theme/parts-funky.css (funky overrides)
 */

interface FooterProps {
  className?: string;
  id?: string;
}

export const Footer = ({ className = '', id }: FooterProps) => {
  const location = useLocation();
  const { pathname } = location;
  const isCheckout = pathname.startsWith('/checkout') || pathname.startsWith('/order-confirmation');

  if (isCheckout) {
    return <CheckoutFooter className={className} />;
  }

  return <MainFooter id={id} className={className} />;
}