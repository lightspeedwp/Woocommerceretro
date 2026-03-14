import React from 'react';

/**
 * AdditionalInformation Component
 *
 * WooCommerce Order Confirmation Block: Additional Information Section
 * Funky Redesign: Cyan glass panel
 */
export const AdditionalInformation = () => {
  return (
    <div className="wp-block-group wp-block-group--vertical">
      <h2 className="wp-block-heading funky-gradient-text">Additional information</h2>
      <div className="funky-glass-panel funky-glow-border--cyan wp-order-additional-info">
        <div>
          <p className="wp-text-bold text-neon-cyan">Order notes</p>
          <p className="wp-text-italic">No order notes were added.</p>
        </div>
      </div>
    </div>
  );
};

AdditionalInformation.displayName = 'AdditionalInformation';