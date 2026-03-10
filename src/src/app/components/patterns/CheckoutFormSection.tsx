import React from 'react';
import { CreditCard, Truck } from '@phosphor-icons/react';
import * as TypographyModule from '../common/Typography';

var useState = React.useState;
var Typography = TypographyModule.Typography;

// CheckoutFormData shape:
// {
//   billingFirstName: string;
//   billingLastName: string;
//   billingEmail: string;
//   billingPhone: string;
//   billingAddress: string;
//   billingCity: string;
//   billingState: string;
//   billingZip: string;
//   billingCountry: string;
//   shippingSameAsBilling: boolean;
//   shippingFirstName: string;
//   shippingLastName: string;
//   shippingAddress: string;
//   shippingCity: string;
//   shippingState: string;
//   shippingZip: string;
//   shippingCountry: string;
// }

// CheckoutFormSectionProps shape:
// {
//   onSubmit?: (data: CheckoutFormData) => void;
//   showShippingSection?: boolean;
//   className?: string;
// }

/**
 * CheckoutFormSection Pattern Component
 * 
 * Comprehensive checkout form with billing and shipping address collection.
 * Uses WordPress BEM classes from src/styles/checkout.css and src/styles/forms.css
 */
export function CheckoutFormSection(props) {
  var onSubmit = props.onSubmit;
  var showShippingSection = props.showShippingSection === undefined ? true : props.showShippingSection;
  var className = props.className === undefined ? '' : props.className;

  var stateArray = useState({
    billingFirstName: '',
    billingLastName: '',
    billingEmail: '',
    billingPhone: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    billingCountry: 'US',
    shippingSameAsBilling: true,
    shippingFirstName: '',
    shippingLastName: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingCountry: 'US',
  });
  var formData = stateArray[0];
  var setFormData = stateArray[1];

  var handleChange = function(field, value) {
    var newData = Object.assign({}, formData);
    newData[field] = value;
    setFormData(newData);
  };

  var handleSubmit = function(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  // Billing section header
  var billingHeader = React.createElement('div', { className: "wp-checkout-section__header" },
    React.createElement(CreditCard, { size: 24, className: "wp-checkout-section__icon" }),
    React.createElement(Typography, { variant: "h3" }, "Billing Address")
  );

  // Billing name fields
  var billingNameFields = React.createElement('div', { className: "wp-checkout-grid-2" },
    React.createElement('div', { className: "wp-checkout-field" },
      React.createElement('label', { htmlFor: "billingFirstName", className: "wp-block-label" },
        "First Name ",
        React.createElement('span', { className: "wp-checkout-required" }, "*")
      ),
      React.createElement('input', {
        id: "billingFirstName",
        type: "text",
        value: formData.billingFirstName,
        onChange: function(e) { handleChange('billingFirstName', e.target.value); },
        required: true,
        autoComplete: "given-name",
        className: "wp-block-input"
      })
    ),
    React.createElement('div', { className: "wp-checkout-field" },
      React.createElement('label', { htmlFor: "billingLastName", className: "wp-block-label" },
        "Last Name ",
        React.createElement('span', { className: "wp-checkout-required" }, "*")
      ),
      React.createElement('input', {
        id: "billingLastName",
        type: "text",
        value: formData.billingLastName,
        onChange: function(e) { handleChange('billingLastName', e.target.value); },
        required: true,
        autoComplete: "family-name",
        className: "wp-block-input"
      })
    )
  );

  // Billing contact fields
  var billingContactFields = React.createElement('div', { className: "wp-checkout-grid-2" },
    React.createElement('div', { className: "wp-checkout-field" },
      React.createElement('label', { htmlFor: "billingEmail", className: "wp-block-label" },
        "Email ",
        React.createElement('span', { className: "wp-checkout-required" }, "*")
      ),
      React.createElement('input', {
        id: "billingEmail",
        type: "email",
        value: formData.billingEmail,
        onChange: function(e) { handleChange('billingEmail', e.target.value); },
        required: true,
        autoComplete: "email",
        className: "wp-block-input"
      })
    ),
    React.createElement('div', { className: "wp-checkout-field" },
      React.createElement('label', { htmlFor: "billingPhone", className: "wp-block-label" },
        "Phone ",
        React.createElement('span', { className: "wp-checkout-required" }, "*")
      ),
      React.createElement('input', {
        id: "billingPhone",
        type: "tel",
        value: formData.billingPhone,
        onChange: function(e) { handleChange('billingPhone', e.target.value); },
        required: true,
        autoComplete: "tel",
        className: "wp-block-input"
      })
    )
  );

  // Billing address field
  var billingAddressField = React.createElement('div', { className: "wp-checkout-field" },
    React.createElement('label', { htmlFor: "billingAddress", className: "wp-block-label" },
      "Street Address ",
      React.createElement('span', { className: "wp-checkout-required" }, "*")
    ),
    React.createElement('input', {
      id: "billingAddress",
      type: "text",
      value: formData.billingAddress,
      onChange: function(e) { handleChange('billingAddress', e.target.value); },
      required: true,
      autoComplete: "street-address",
      className: "wp-block-input"
    })
  );

  // Billing city/state/zip fields
  var billingLocationFields = React.createElement('div', { className: "wp-checkout-grid-3" },
    React.createElement('div', { className: "wp-checkout-field" },
      React.createElement('label', { htmlFor: "billingCity", className: "wp-block-label" },
        "City ",
        React.createElement('span', { className: "wp-checkout-required" }, "*")
      ),
      React.createElement('input', {
        id: "billingCity",
        type: "text",
        value: formData.billingCity,
        onChange: function(e) { handleChange('billingCity', e.target.value); },
        required: true,
        autoComplete: "address-level2",
        className: "wp-block-input"
      })
    ),
    React.createElement('div', { className: "wp-checkout-field" },
      React.createElement('label', { htmlFor: "billingState", className: "wp-block-label" },
        "State ",
        React.createElement('span', { className: "wp-checkout-required" }, "*")
      ),
      React.createElement('input', {
        id: "billingState",
        type: "text",
        value: formData.billingState,
        onChange: function(e) { handleChange('billingState', e.target.value); },
        required: true,
        autoComplete: "address-level1",
        className: "wp-block-input"
      })
    ),
    React.createElement('div', { className: "wp-checkout-field" },
      React.createElement('label', { htmlFor: "billingZip", className: "wp-block-label" },
        "ZIP Code ",
        React.createElement('span', { className: "wp-checkout-required" }, "*")
      ),
      React.createElement('input', {
        id: "billingZip",
        type: "text",
        value: formData.billingZip,
        onChange: function(e) { handleChange('billingZip', e.target.value); },
        required: true,
        autoComplete: "postal-code",
        className: "wp-block-input"
      })
    )
  );

  // Billing country field
  var billingCountryField = React.createElement('div', { className: "wp-checkout-field" },
    React.createElement('label', { htmlFor: "billingCountry", className: "wp-block-label" },
      "Country ",
      React.createElement('span', { className: "wp-checkout-required" }, "*")
    ),
    React.createElement('select', {
      id: "billingCountry",
      value: formData.billingCountry,
      onChange: function(e) { handleChange('billingCountry', e.target.value); },
      required: true,
      autoComplete: "country",
      className: "wp-block-input"
    },
      React.createElement('option', { value: "US" }, "United States"),
      React.createElement('option', { value: "CA" }, "Canada"),
      React.createElement('option', { value: "GB" }, "United Kingdom"),
      React.createElement('option', { value: "AU" }, "Australia")
    )
  );

  var billingSection = React.createElement('div', { className: "wp-checkout-section" },
    billingHeader,
    billingNameFields,
    billingContactFields,
    billingAddressField,
    billingLocationFields,
    billingCountryField
  );

  // Shipping section (conditional)
  var shippingSection = null;
  if (showShippingSection) {
    var shippingHeader = React.createElement('div', { className: "wp-checkout-section__header" },
      React.createElement(Truck, { size: 24, className: "wp-checkout-section__icon" }),
      React.createElement(Typography, { variant: "h3" }, "Shipping Address")
    );

    var shippingCheckbox = React.createElement('div', { className: "wp-checkout-checkbox-group" },
      React.createElement('input', {
        id: "shippingSameAsBilling",
        type: "checkbox",
        checked: formData.shippingSameAsBilling,
        onChange: function(e) { handleChange('shippingSameAsBilling', e.target.checked); },
        className: "wp-block-checkbox"
      }),
      React.createElement('label', { htmlFor: "shippingSameAsBilling", className: "wp-block-label" },
        "Same as billing address"
      )
    );

    var shippingFields = null;
    if (!formData.shippingSameAsBilling) {
      var shippingNameFields = React.createElement('div', { className: "wp-checkout-grid-2" },
        React.createElement('div', { className: "wp-checkout-field" },
          React.createElement('label', { htmlFor: "shippingFirstName", className: "wp-block-label" },
            "First Name ",
            React.createElement('span', { className: "wp-checkout-required" }, "*")
          ),
          React.createElement('input', {
            id: "shippingFirstName",
            type: "text",
            value: formData.shippingFirstName,
            onChange: function(e) { handleChange('shippingFirstName', e.target.value); },
            required: !formData.shippingSameAsBilling,
            autoComplete: "given-name",
            className: "wp-block-input"
          })
        ),
        React.createElement('div', { className: "wp-checkout-field" },
          React.createElement('label', { htmlFor: "shippingLastName", className: "wp-block-label" },
            "Last Name ",
            React.createElement('span', { className: "wp-checkout-required" }, "*")
          ),
          React.createElement('input', {
            id: "shippingLastName",
            type: "text",
            value: formData.shippingLastName,
            onChange: function(e) { handleChange('shippingLastName', e.target.value); },
            required: !formData.shippingSameAsBilling,
            autoComplete: "family-name",
            className: "wp-block-input"
          })
        )
      );

      var shippingAddressField = React.createElement('div', { className: "wp-checkout-field" },
        React.createElement('label', { htmlFor: "shippingAddress", className: "wp-block-label" },
          "Street Address ",
          React.createElement('span', { className: "wp-checkout-required" }, "*")
        ),
        React.createElement('input', {
          id: "shippingAddress",
          type: "text",
          value: formData.shippingAddress,
          onChange: function(e) { handleChange('shippingAddress', e.target.value); },
          required: !formData.shippingSameAsBilling,
          autoComplete: "street-address",
          className: "wp-block-input"
        })
      );

      var shippingLocationFields = React.createElement('div', { className: "wp-checkout-grid-3" },
        React.createElement('div', { className: "wp-checkout-field" },
          React.createElement('label', { htmlFor: "shippingCity", className: "wp-block-label" },
            "City ",
            React.createElement('span', { className: "wp-checkout-required" }, "*")
          ),
          React.createElement('input', {
            id: "shippingCity",
            type: "text",
            value: formData.shippingCity,
            onChange: function(e) { handleChange('shippingCity', e.target.value); },
            required: !formData.shippingSameAsBilling,
            autoComplete: "address-level2",
            className: "wp-block-input"
          })
        ),
        React.createElement('div', { className: "wp-checkout-field" },
          React.createElement('label', { htmlFor: "shippingState", className: "wp-block-label" },
            "State ",
            React.createElement('span', { className: "wp-checkout-required" }, "*")
          ),
          React.createElement('input', {
            id: "shippingState",
            type: "text",
            value: formData.shippingState,
            onChange: function(e) { handleChange('shippingState', e.target.value); },
            required: !formData.shippingSameAsBilling,
            autoComplete: "address-level1",
            className: "wp-block-input"
          })
        ),
        React.createElement('div', { className: "wp-checkout-field" },
          React.createElement('label', { htmlFor: "shippingZip", className: "wp-block-label" },
            "ZIP Code ",
            React.createElement('span', { className: "wp-checkout-required" }, "*")
          ),
          React.createElement('input', {
            id: "shippingZip",
            type: "text",
            value: formData.shippingZip,
            onChange: function(e) { handleChange('shippingZip', e.target.value); },
            required: !formData.shippingSameAsBilling,
            autoComplete: "postal-code",
            className: "wp-block-input"
          })
        )
      );

      var shippingCountryField = React.createElement('div', { className: "wp-checkout-field" },
        React.createElement('label', { htmlFor: "shippingCountry", className: "wp-block-label" },
          "Country ",
          React.createElement('span', { className: "wp-checkout-required" }, "*")
        ),
        React.createElement('select', {
          id: "shippingCountry",
          value: formData.shippingCountry,
          onChange: function(e) { handleChange('shippingCountry', e.target.value); },
          required: !formData.shippingSameAsBilling,
          autoComplete: "country",
          className: "wp-block-input"
        },
          React.createElement('option', { value: "US" }, "United States"),
          React.createElement('option', { value: "CA" }, "Canada"),
          React.createElement('option', { value: "GB" }, "United Kingdom"),
          React.createElement('option', { value: "AU" }, "Australia")
        )
      );

      shippingFields = React.createElement(React.Fragment, null,
        shippingNameFields,
        shippingAddressField,
        shippingLocationFields,
        shippingCountryField
      );
    }

    shippingSection = React.createElement('div', { className: "wp-checkout-section" },
      shippingHeader,
      shippingCheckbox,
      shippingFields
    );
  }

  return React.createElement('form', {
    onSubmit: handleSubmit,
    className: "wp-checkout-form " + className
  },
    billingSection,
    shippingSection
  );
}