import React from 'react';

export function AdditionalFields() {
  var heading = React.createElement('h2', { 
    key: 'h1', 
    className: "wp-block-heading funky-gradient-text" 
  }, ["Additional fields"]);

  var giftMessageColumn = React.createElement('div', { 
    key: 'c1', 
    className: "wp-block-column funky-glass-panel funky-glow-border--pink" 
  }, [
    React.createElement('div', { key: 'inner', className: "wp-p-4" }, [
      React.createElement('p', { 
        key: 'p1', 
        className: "wp-text-bold text-neon-pink" 
      }, ["Gift Message"]),
      React.createElement('p', { 
        key: 'p2' 
      }, ["Happy Birthday! Hope you enjoy the wine."])
    ])
  ]);

  var deliveryInstructionsColumn = React.createElement('div', { 
    key: 'c2', 
    className: "wp-block-column funky-glass-panel funky-glow-border" 
  }, [
    React.createElement('div', { key: 'inner', className: "wp-p-4" }, [
      React.createElement('p', { 
        key: 'p1', 
        className: "wp-text-bold text-neon-cyan" 
      }, ["Delivery Instructions"]),
      React.createElement('p', { 
        key: 'p2' 
      }, ["Please leave at the front gate if no one is home."])
    ])
  ]);

  var columns = React.createElement('div', { 
    key: 'd1', 
    className: "wp-block-columns" 
  }, [
    giftMessageColumn,
    deliveryInstructionsColumn
  ]);

  return React.createElement('div', { 
    className: "wp-block-group wp-block-group--vertical" 
  }, [
    heading,
    columns
  ]);
}

AdditionalFields.displayName = 'AdditionalFields';