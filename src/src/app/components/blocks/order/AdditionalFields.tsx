import React from 'react';

/**
 * AdditionalFields Component
 *
 * Displays gift message and delivery instructions in glass panels.
 */
export const AdditionalFields = () => {
  return (
    <div className="wp-block-group wp-block-group--vertical">
      <h2 className="wp-block-heading funky-gradient-text">Additional fields</h2>
      <div className="wp-block-columns">
        <div className="wp-block-column funky-glass-panel funky-glow-border--pink">
          <div className="wp-order-additional-field">
            <p className="wp-text-bold wp-order-text--coral">Gift Message</p>
            <p>Happy Birthday! Hope you enjoy the wine.</p>
          </div>
        </div>
        <div className="wp-block-column funky-glass-panel funky-glow-border">
          <div className="wp-order-additional-field">
            <p className="wp-text-bold wp-order-text--sky">Delivery Instructions</p>
            <p>Please leave at the front gate if no one is home.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AdditionalFields.displayName = 'AdditionalFields';