import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;

/**
 * CheckoutContact Block Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 */
export function CheckoutContact(props) {
  var isLoggedIn = props.isLoggedIn;
  var email = props.email;
  var onChange = props.onChange;
  var error = props.error;

  var renderContent = function() {
    if (isLoggedIn) {
      return React.createElement('div', { className: "wp-checkout-contact-preview funky-contact-preview" },
        React.createElement('div', { className: "wp-checkout-contact-avatar funky-avatar" }, "JD"),
        React.createElement('div', { className: "wp-checkout-contact-info" },
          React.createElement('p', { className: "wp-checkout-contact-name" }, "John Doe"),
          React.createElement('small', { className: "wp-checkout-contact-email" }, "john.doe@example.com")
        ),
        React.createElement('button', { 
          className: "wp-checkout-btn-link funky-link-btn",
          'aria-label': "Change contact information"
        },
          React.createElement('small', null, "Change")
        )
      );
    }

    return React.createElement('div', { className: "wp-checkout-contact-form" },
      React.createElement('label', { htmlFor: "email", className: "wp-checkout-label" },
        "Email Address ",
        React.createElement('span', { className: "wp-checkout-required" }, "*")
      ),
      React.createElement('input', {
        type: "email",
        id: "email",
        name: "email",
        value: email,
        onChange: onChange,
        className: "wp-block-input funky-input" + (error ? " has-error" : ""),
        placeholder: "you@example.com",
        'aria-invalid': !!error,
        'aria-describedby': error ? "email-error" : undefined
      }),
      error ? React.createElement('p', { id: "email-error", className: "wp-checkout-error" },
        React.createElement('span', { 'aria-hidden': "true" }, "⚠️ "),
        error
      ) : null,
      React.createElement('div', { className: "wp-checkout-checkbox-container" },
        React.createElement('label', { className: "wp-checkout-checkbox-group funky-checkbox-group" },
          React.createElement('input', { type: "checkbox", className: "wp-block-checkbox" }),
          React.createElement('span', { className: "wp-checkout-text-subtle" }, "Email me with news and offers")
        )
      )
    );
  };

  return React.createElement('div', { className: "wp-block-card funky-card" },
    React.createElement('div', { className: "wp-block-card__header" },
      React.createElement('div', { className: "wp-checkout-contact-header" },
        React.createElement('h2', { className: "wp-block-card__title wp-m-0" }, "Contact Information"),
        !isLoggedIn ? React.createElement('div', { className: "wp-checkout-text-light" },
          "Already have an account? ",
          React.createElement(Link, { to: "/account/login", className: "wp-checkout-link funky-link" }, "Log in")
        ) : null
      )
    ),
    React.createElement('div', { className: "wp-block-card__content" },
      renderContent()
    )
  );
}

CheckoutContact.displayName = 'CheckoutContact';