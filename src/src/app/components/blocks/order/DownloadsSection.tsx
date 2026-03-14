import React from 'react';
import { Download } from '@phosphor-icons/react';

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
          <p className="text-neon-cyan">Product</p>
          <p className="text-neon-cyan">Expires</p>
          <p className="wp-text-right text-neon-cyan">Download</p>
        </div>
        <div className="wp-order-downloads-row funky-glass-panel">
          <p className="wp-text-medium">Album</p>
          <p>Never</p>
          <div className="wp-flex wp-justify-end">
            <button
              className="wp-order-download-button funky-glass-panel funky-glow-border--cyan"
              aria-label="Download Album.mp3"
            >
              <Download size={14} className="text-neon-cyan" aria-hidden="true" />
              <span className="text-neon-cyan">Album.mp3</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DownloadsSection.displayName = 'DownloadsSection';