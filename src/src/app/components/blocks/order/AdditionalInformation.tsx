import React from 'react';

/**
 * AdditionalInformation Component
 * 
 * WooCommerce Order Confirmation Block: Additional Information Section
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Named functions
 * 3. ASCII only
 * 4. Funky Redesign: Cyan glass panel
 */
export function AdditionalInformation() {
  var heading = React.createElement('h2', { 
    key: 'h1', 
    className: "wp-block-heading funky-gradient-text" 
  }, "Additional information");

  var orderNotes = React.createElement('div', { 
    key: 'd1',
    className: "funky-glass-panel funky-glow-border--cyan wp-p-4"
  }, [
    React.createElement('div', { key: 'inner' }, [
      React.createElement('p', { 
        key: 'p1', 
        className: "wp-text-bold text-neon-cyan" 
      }, "Order notes"),
      React.createElement('p', { 
        key: 'p2', 
        className: "wp-text-italic wp-mt-2" 
      }, "No order notes were added.")
    ])
  ]);

  return React.createElement('div', { 
    className: "wp-block-group wp-block-group--vertical" 
  }, [
    heading,
    orderNotes
  ]);
}

AdditionalInformation.displayName = 'AdditionalInformation';