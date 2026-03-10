import React from 'react';
import { Download } from '@phosphor-icons/react';

/**
 * DownloadsSection Component
 * 
 * WooCommerce Order Confirmation Block: Downloads Section
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Named functions
 * 3. ASCII only
 * 4. Funky Redesign: Cyan glass theme
 */
export function DownloadsSection() {
  var heading = React.createElement('h2', { 
    key: 'h1', 
    className: "wp-block-heading funky-gradient-text" 
  }, "Downloads");

  var tableHeader = React.createElement('div', { 
    key: 'header', 
    className: "wp-order-downloads-header funky-glass-panel wp-mb-2 wp-p-2" 
  }, [
    React.createElement('p', { key: 'p1', className: "text-neon-cyan" }, "Product"),
    React.createElement('p', { key: 'p2', className: "text-neon-cyan" }, "Expires"),
    React.createElement('p', { key: 'p3', className: "wp-text-right text-neon-cyan" }, "Download")
  ]);

  var downloadButton = React.createElement('button', { 
    key: 'btn',
    className: "wp-order-download-button funky-glass-panel funky-glow-border--cyan wp-p-2",
    "aria-label": "Download Album.mp3"
  }, [
    React.createElement(Download, { 
      key: 'icon', 
      size: 14, 
      className: "text-neon-cyan",
      "aria-hidden": "true" 
    }),
    React.createElement('span', { 
      key: 'label', 
      className: "wp-ml-2 text-neon-cyan" 
    }, "Album.mp3")
  ]);

  var row = React.createElement('div', { 
    key: 'row1', 
    className: "wp-order-downloads-row funky-glass-panel wp-mb-2 wp-p-4" 
  }, [
    React.createElement('p', { 
      key: 'p1', 
      className: "wp-text-medium" 
    }, "Album"),
    React.createElement('p', { key: 'p2' }, "Never"),
    React.createElement('div', { 
      key: 'd1', 
      className: "wp-flex wp-justify-end" 
    }, downloadButton)
  ]);

  var tableContainer = React.createElement('div', { 
    key: 'table', 
    className: "wp-order-downloads" 
  }, [
    tableHeader,
    row
  ]);

  return React.createElement('div', { 
    className: "wp-block-group wp-block-group--vertical" 
  }, [
    heading,
    tableContainer
  ]);
}

DownloadsSection.displayName = 'DownloadsSection';