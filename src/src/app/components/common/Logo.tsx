import React from 'react';
import logoImg from "figma:asset/f367e8ff057e1239dc88f32619b6a1f694c7db8d.png";

/**
 * Logo Component
 */
export const Logo = ({ className = 'wp-site-logo--default' }: { className?: string }) => {
  return (
    <img
      src={logoImg}
      alt="PlayPocket Retro Gear & Apparel"
      className={`wp-site-logo ${className}`}
    />
  );
}

Logo.displayName = 'Logo';

// Legacy aliases for backward compatibility
export const ShopLogo = Logo;
export const MainLogo = Logo;