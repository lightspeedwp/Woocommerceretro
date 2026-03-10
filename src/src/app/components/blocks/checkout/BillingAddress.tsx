import React from 'react';
var useState = React.useState;
import * as CheckoutInputModule from './ui/CheckoutInput';
import { CaretDown as ChevronDown } from '@phosphor-icons/react';

var CheckoutInput = CheckoutInputModule.CheckoutInput;

/**
 * BillingAddress Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function BillingAddress() {
  var _formData = useState({
    firstName: 'Ash',
    lastName: 'Shaw',
    company: 'LightSpeed',
    address: '46 Devon Street',
    city: 'Woodstock, Cape Town',
    postalCode: '7925',
    phone: '+27845656767'
  });
  var formData = _formData[0];
  var setFormData = _formData[1];

  var _touched = useState({});
  var touched = _touched[0];
  var setTouched = _touched[1];

  var handleChange = function(field, value) {
    setFormData(function(prev) {
      var next = Object.assign({}, prev);
      next[field] = value;
      return next;
    });
  };

  var handleBlur = function(field) {
    setTouched(function(prev) {
      var next = Object.assign({}, prev);
      next[field] = true;
      return next;
    });
  };

  var getError = function(field, value) {
    if (field === 'company' || field === 'phone') return undefined;
    if (!value) return 'Please enter a valid ' + field.replace(/([A-Z])/g, ' $1').toLowerCase();
    return undefined;
  };

  return React.createElement('div', { className: 'wp-checkout-form funky-checkout-form' },
    React.createElement('p', { className: 'wp-checkout-text-intro' }, 'Enter the billing address that matches your payment method.'),
    React.createElement('div', { className: 'wp-checkout-grid-1' },
      React.createElement('div', { className: 'wp-checkout-select-wrapper' },
        React.createElement('label', { className: 'wp-checkout-label' }, 'Country/Region'),
        React.createElement('select', { className: 'wp-block-input funky-select', defaultValue: 'za' },
          React.createElement('option', { value: 'za' }, 'South Africa'),
          React.createElement('option', { value: 'na' }, 'Namibia'),
          React.createElement('option', { value: 'uk' }, 'United Kingdom')
        ),
        React.createElement(ChevronDown, { className: 'wp-checkout-select-icon', size: 16 })
      ),
      React.createElement('div', { className: 'wp-checkout-grid-2' },
        React.createElement(CheckoutInput, {
          label: 'First name',
          value: formData.firstName,
          onChange: function(e) { handleChange('firstName', e.target.value); },
          onBlur: function() { handleBlur('firstName'); },
          error: getError('firstName', formData.firstName),
          touched: touched.firstName
        }),
        React.createElement(CheckoutInput, {
          label: 'Last name',
          value: formData.lastName,
          onChange: function(e) { handleChange('lastName', e.target.value); },
          onBlur: function() { handleBlur('lastName'); },
          error: getError('lastName', formData.lastName),
          touched: touched.lastName
        })
      ),
      React.createElement(CheckoutInput, {
        label: 'Company (optional)',
        value: formData.company,
        onChange: function(e) { handleChange('company', e.target.value); },
        onBlur: function() { handleBlur('company'); }
      }),
      React.createElement('div', null,
        React.createElement(CheckoutInput, {
          label: 'Address',
          value: formData.address,
          onChange: function(e) { handleChange('address', e.target.value); },
          onBlur: function() { handleBlur('address'); },
          error: getError('address', formData.address),
          touched: touched.address
        }),
        React.createElement('button', {
          className: 'wp-checkout-btn-secondary funky-secondary-btn',
          'aria-label': 'Add apartment, suite, or unit number field'
        }, '+ Add apartment, suite, etc.')
      ),
      React.createElement('div', { className: 'wp-checkout-grid-2' },
        React.createElement(CheckoutInput, {
          label: 'City',
          value: formData.city,
          onChange: function(e) { handleChange('city', e.target.value); },
          onBlur: function() { handleBlur('city'); },
          error: getError('city', formData.city),
          touched: touched.city
        }),
        React.createElement('div', { className: 'wp-checkout-select-wrapper' },
          React.createElement('label', { className: 'wp-checkout-label' }, 'Province'),
          React.createElement('select', { className: 'wp-block-input funky-select', defaultValue: 'wc' },
            React.createElement('option', { value: 'wc' }, 'Western Cape'),
            React.createElement('option', { value: 'gp' }, 'Gauteng'),
            React.createElement('option', { value: 'kzn' }, 'KwaZulu-Natal')
          ),
          React.createElement(ChevronDown, { className: 'wp-checkout-select-icon', size: 16 })
        )
      ),
      React.createElement('div', { className: 'wp-checkout-grid-2' },
        React.createElement(CheckoutInput, {
          label: 'Postal code',
          value: formData.postalCode,
          onChange: function(e) { handleChange('postalCode', e.target.value); },
          onBlur: function() { handleBlur('postalCode'); },
          error: getError('postalCode', formData.postalCode),
          touched: touched.postalCode
        }),
        React.createElement(CheckoutInput, {
          label: 'Phone (optional)',
          value: formData.phone,
          onChange: function(e) { handleChange('phone', e.target.value); },
          onBlur: function() { handleBlur('phone'); }
        })
      )
    )
  );
}

BillingAddress.displayName = 'BillingAddress';