import React from 'react';
import * as ButtonsModule from '../design/Buttons';
import * as FloatingLabelInputModule from './ui/FloatingLabelInput';
import * as AccountData from '../../../data/account';

var Button = ButtonsModule.Button;
var FloatingLabelInput = FloatingLabelInputModule.FloatingLabelInput;
var mockUserProfile = AccountData.mockUserProfile;

/**
 * ContactInfo Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 */
export function ContactInfo(props) {
  var isLoggedIn = props.isLoggedIn;

  var renderContent = function() {
    if (isLoggedIn) {
      return React.createElement('div', { className: "wp-checkout-contact__preview funky-contact-preview" },
        React.createElement('span', { className: "wp-checkout-contact__label" }, "Logged in as "),
        React.createElement('strong', { className: "wp-checkout-contact__name" }, mockUserProfile.firstName + " " + mockUserProfile.lastName),
        React.createElement('span', { className: "wp-checkout-contact__email" }, " (" + mockUserProfile.email + ")")
      );
    }

    return React.createElement('div', { className: "wp-checkout-contact__form" },
      React.createElement(FloatingLabelInput, { 
        label: "Email or mobile phone number",
        type: "email",
        id: "email",
        className: "wp-checkout-contact__input funky-input"
      }),
      
      React.createElement('div', { className: "wp-checkout-contact__newsletter" },
        React.createElement('input', { 
          type: "checkbox", 
          id: "newsletter", 
          className: "wp-checkout-contact__checkbox" 
        }),
        React.createElement('label', { htmlFor: "newsletter", className: "wp-checkout-contact__checkbox-label" },
          "Email me with news and offers"
        )
      )
    );
  };

  return React.createElement('div', { className: "wp-checkout-contact funky-checkout-contact" },
    renderContent()
  );
}

ContactInfo.displayName = 'ContactInfo';