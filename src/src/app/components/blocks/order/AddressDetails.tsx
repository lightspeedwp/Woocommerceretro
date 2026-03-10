import React from 'react';

export function AddressDetails() {
  var heading = React.createElement('h2', { 
    key: 'h1', 
    className: "wp-block-heading funky-gradient-text" 
  }, ["Billing address"]);

  var addressContent = React.createElement('div', { 
    key: 'd1', 
    className: "wp-order-address-box funky-glass-panel funky-glow-border" 
  }, [
    React.createElement('div', { key: 'inner', className: "wp-p-4" }, [
      React.createElement('p', { key: 'p1', className: "wp-text-bold" }, ["Ash Shaw"]),
      React.createElement('p', { key: 'p2' }, ["LightSpeed"]),
      React.createElement('p', { key: 'p3' }, ["46 Devon Street"]),
      React.createElement('p', { key: 'p4' }, ["Woodstock, Cape Town"]),
      React.createElement('p', { key: 'p5' }, ["Western Cape"]),
      React.createElement('p', { key: 'p6' }, ["7925"]),
      React.createElement('p', { key: 'p7' }, ["+27845656767"]),
      React.createElement('p', { key: 'p8', className: "text-neon-cyan" }, ["ashley@lsdev.biz"])
    ])
  ]);

  return React.createElement('div', { 
    className: "wp-block-group wp-block-group--vertical" 
  }, [
    heading,
    addressContent
  ]);
}

AddressDetails.displayName = 'AddressDetails';