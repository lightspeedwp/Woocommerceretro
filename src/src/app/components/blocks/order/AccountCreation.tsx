import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;
import { Check } from '@phosphor-icons/react';

/**
 * AccountCreation Component
 * 
 * WooCommerce Order Confirmation Block: Account Creation
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. Named functions
 * 4. ASCII only
 * 5. Funky Redesign: Neon green borders + Glass panels
 */
export function AccountCreation(props) {
  var email = props.email;

  var benefitsList = [
    "Faster future purchases",
    "Securely save payment info",
    "Track orders and view shopping history"
  ];

  var benefitsElements = benefitsList.map(function(benefit, index) {
    return React.createElement('div', { 
      key: index, 
      className: "wp-order-account-benefit-item wp-p-2 wp-mb-1 funky-glass-panel" 
    }, [
      React.createElement(Check, { 
        key: 'icon', 
        size: 16, 
        strokeWidth: 2, 
        className: "text-neon-lime" 
      }),
      React.createElement('span', { 
        key: 'text', 
        className: "wp-ml-2" 
      }, benefit)
    ]);
  });

  var leftColumn = React.createElement('div', { 
    key: 'left',
    className: "wp-order-account-benefits" 
  }, [
    React.createElement('h3', { 
      key: 'h1', 
      className: "wp-block-heading funky-gradient-text" 
    }, "Create an account with WooCommerce Website"),
    React.createElement('div', { 
      key: 'list', 
      className: "wp-order-account-benefits wp-mt-4" 
    }, benefitsElements)
  ]);

  var rightColumn = React.createElement('div', { 
    key: 'right',
    className: "wp-order-account-actions funky-glass-panel funky-glow-border--lime wp-p-6" 
  }, [
    React.createElement(Link, { 
      key: 'cta', 
      to: "/account?action=register", 
      className: "wp-block-button wp-block-button--full-width" 
    }, 
      React.createElement('span', { className: "wp-block-button__link" }, "Create account")
    ),
    React.createElement('div', { 
      key: 'legal_box',
      className: "wp-mt-4 wp-text-center"
    }, [
      React.createElement('small', { 
        key: 'legal', 
        className: "text-neon-cyan" 
      }, [
        "Check your email at " + email + " for the link to set up an account password. By creating an account you agree to our ",
        React.createElement(Link, { key: 'terms', to: "/terms", className: "underline" }, "Terms"),
        " and ",
        React.createElement(Link, { key: 'privacy', to: "/privacy", className: "underline" }, "Privacy Policy"),
        "."
      ])
    ])
  ]);

  return React.createElement('div', { 
    className: "wp-order-account-creation wp-grid wp-grid-cols-1 md:wp-grid-cols-2 wp-gap-8" 
  }, [
    leftColumn,
    rightColumn
  ]);
}

AccountCreation.displayName = 'AccountCreation';