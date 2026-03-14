import React from 'react';

/**
 * AddressDetails Component
 *
 * Displays billing address details in a glass panel.
 */
export const AddressDetails = () => {
  return (
    <div className="wp-block-group wp-block-group--vertical">
      <h2 className="wp-block-heading funky-gradient-text">Billing address</h2>
      <div className="wp-order-address-box funky-glass-panel funky-glow-border">
        <div>
          <p className="wp-text-bold">Ash Shaw</p>
          <p>LightSpeed</p>
          <p>46 Devon Street</p>
          <p>Woodstock, Cape Town</p>
          <p>Western Cape</p>
          <p>7925</p>
          <p>+27845656767</p>
          <p className="text-neon-cyan">ashley@lsdev.biz</p>
        </div>
      </div>
    </div>
  );
};

AddressDetails.displayName = 'AddressDetails';