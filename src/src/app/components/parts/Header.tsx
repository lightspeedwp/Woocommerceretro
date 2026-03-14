import React from 'react';
import { useLocation } from 'react-router';
import { MainHeader } from './MainHeader';
import { CheckoutHeader } from './CheckoutHeader';

/**
 * Header — Smart header switcher (Global Template Part)
 *
 * Renders MainHeader or CheckoutHeader based on current route.
 * Checkout/order-confirmation routes get the minimal CheckoutHeader;
 * all other routes get the full MainHeader with navigation and mega menus.
 *
 * CSS: /src/styles/blocks/theme/parts-funky.css (header + mega menu overrides)
 */

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  const location = useLocation();
  const { pathname } = location;
  const isCheckout = pathname.startsWith('/checkout') || pathname.startsWith('/order-confirmation');

  if (isCheckout) {
    return <CheckoutHeader className={className} />;
  }

  return <MainHeader className={className} />;
}