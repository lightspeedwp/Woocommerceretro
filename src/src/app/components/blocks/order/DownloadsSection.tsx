import React from 'react';
import { Download } from '../../../utils/phosphor-compat';

/**
 * DownloadsSection Component
 *
 * WooCommerce Order Confirmation Block: Downloads Section
 * Funky Redesign: Cyan glass theme
 */
export const DownloadsSection = () => {
  return (
    <div className="wp-block-group wp-block-group--vertical">
      <h2 className="wp-block-heading funky-gradient-text">Downloads</h2>
      <div className="wp-order-downloads">
        <div className="wp-order-downloads-header funky-glass-panel">
          <p className="wp-order-downloads__label wp-order-downloads__label--sky">Product</p>
          <p className="wp-order-downloads__label wp-order-downloads__label--sky">Expires</p>
          <p className="wp-order-downloads__label wp-order-downloads__label--sky wp-order-downloads__label--right">Download</p>
        </div>
        <div className="wp-order-downloads-row funky-glass-panel">
          <p className="wp-order-downloads__product-name">Album</p>
          <p>Never</p>
          <div className="wp-order-downloads__action">
            <button
              className="wp-order-download-button funky-glass-panel funky-glow-border--cyan"
              aria-label="Download Album.mp3"
            >
              <Download size={14} className="wp-order-downloads__icon" aria-hidden="true" />
              <span className="wp-order-downloads__filename">Album.mp3</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DownloadsSection.displayName = 'DownloadsSection';
