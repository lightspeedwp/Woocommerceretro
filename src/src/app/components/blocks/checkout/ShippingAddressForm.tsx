import React from 'react';
import { CaretDown as ChevronDown } from '@phosphor-icons/react';
import * as CheckoutInputModule from './ui/CheckoutInput';
import * as CheckboxModule from './ui/Checkbox';
import * as CheckoutData from '../../../data/checkout';
import * as AccountData from '../../../data/account';

var useState = React.useState;
var CheckoutInput = CheckoutInputModule.CheckoutInput;
var Checkbox = CheckboxModule.Checkbox;
var countries = CheckoutData.countries;
var getStatesForCountry = CheckoutData.getStatesForCountry;
var mockUserProfile = AccountData.mockUserProfile;
var mockAddresses = AccountData.mockAddresses;

var defaultAddress = mockAddresses.find(function(a) { return a.type === 'shipping' || a.type === 'both'; });

var INITIAL_DATA = {
  firstName: defaultAddress ? defaultAddress.firstName : mockUserProfile.firstName,
  lastName: defaultAddress ? defaultAddress.lastName : mockUserProfile.lastName,
  company: defaultAddress ? defaultAddress.company : '',
  country: defaultAddress ? defaultAddress.country : 'US',
  street: defaultAddress ? defaultAddress.address1 : '',
  apartment: defaultAddress ? defaultAddress.address2 : '',
  city: defaultAddress ? defaultAddress.city : '',
  province: defaultAddress ? defaultAddress.state : '',
  postcode: defaultAddress ? defaultAddress.postalCode : '',
  phone: defaultAddress ? defaultAddress.phone : (mockUserProfile.phone || '')
};

/**
 * ShippingAddressForm Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function ShippingAddressForm(props) {
  var useSameBilling = props.useSameBilling !== undefined ? props.useSameBilling : true;
  var onToggleSameBilling = props.onToggleSameBilling;

  var _d = useState(INITIAL_DATA);
  var data = _d[0];
  var setData = _d[1];
  var _e = useState({});
  var errors = _e[0];
  var setErrors = _e[1];
  var _t = useState({});
  var touched = _t[0];
  var setTouched = _t[1];
  var _sa = useState(!!data.apartment);
  var showApartment = _sa[0];
  var setShowApartment = _sa[1];
  
  var availableStates = getStatesForCountry(data.country);

  var handleChange = function(field, value) {
    setData(function(prev) {
      var next = Object.assign({}, prev);
      next[field] = value;
      if (field === 'country') {
        next.province = '';
      }
      return next;
    });

    setErrors(function(prev) {
      var next = Object.assign({}, prev);
      next[field] = undefined;
      return next;
    });
  };

  var validateField = function(field, value) {
    if (!value && field !== 'company' && field !== 'apartment') {
      setErrors(function(prev) {
        var next = Object.assign({}, prev);
        next[field] = 'This field is required';
        return next;
      });
      return false;
    }
    return true;
  };

  var handleBlur = function(field) {
    setTouched(function(prev) {
      var next = Object.assign({}, prev);
      next[field] = true;
      return next;
    });
    validateField(field, data[field]);
  };

  var handleCountryChange = function(e) {
    handleChange('country', e.target.value);
  };

  var handleProvinceChange = function(e) {
    handleChange('province', e.target.value);
  };

  var handleToggleApartment = function() {
    setShowApartment(true);
  };

  var handleBillingCheckboxChange = function(e) {
    if (onToggleSameBilling) {
      onToggleSameBilling(e.target.checked);
    }
  };

  var renderCountries = function() {
    return countries.map(function(country) {
      return React.createElement('option', { key: country.code, value: country.code }, country.name);
    });
  };

  var renderStates = function() {
    return availableStates.map(function(state) {
      return React.createElement('option', { key: state.code, value: state.code }, state.name);
    });
  };

  return React.createElement('div', { className: 'wp-checkout-form funky-checkout-form' },
    React.createElement('div', { className: 'wp-checkout-form__header' },
      React.createElement('p', { className: 'wp-checkout-form__description' }, "Enter the address where you'd like to receive your order.")
    ),
    React.createElement('div', { className: 'wp-checkout-form__grid' },
      React.createElement('div', { className: 'wp-checkout-form__field wp-checkout-form__field--select' },
        React.createElement('label', { className: 'wp-checkout-form__label' }, 'Country / Region'),
        React.createElement('div', { className: 'wp-checkout-form__select-wrapper' },
          React.createElement('select', {
            className: 'wp-checkout-form__select funky-select',
            value: data.country,
            onChange: handleCountryChange
          },
            React.createElement('option', { value: '' }, 'Select a country...'),
            renderCountries()
          ),
          React.createElement(ChevronDown, { className: 'wp-checkout-form__select-icon', size: 16 })
        )
      ),
      React.createElement('div', { className: 'wp-checkout-form__row' },
        React.createElement(CheckoutInput, {
          label: 'First name',
          value: data.firstName,
          onChange: function(e) { handleChange('firstName', e.target.value); },
          onBlur: function() { handleBlur('firstName'); },
          error: errors.firstName,
          touched: touched.firstName,
          className: 'wp-checkout-form__input'
        }),
        React.createElement(CheckoutInput, {
          label: 'Last name',
          value: data.lastName,
          onChange: function(e) { handleChange('lastName', e.target.value); },
          onBlur: function() { handleBlur('lastName'); },
          error: errors.lastName,
          touched: touched.lastName,
          className: 'wp-checkout-form__input'
        })
      ),
      React.createElement(CheckoutInput, {
        label: 'Company (optional)',
        value: data.company,
        onChange: function(e) { handleChange('company', e.target.value); },
        onBlur: function() { handleBlur('company'); },
        className: 'wp-checkout-form__input'
      }),
      React.createElement(CheckoutInput, {
        label: 'Address',
        value: data.street,
        onChange: function(e) { handleChange('street', e.target.value); },
        onBlur: function() { handleBlur('street'); },
        error: errors.street,
        touched: touched.street,
        className: 'wp-checkout-form__input'
      }),
      React.createElement('div', { className: 'wp-checkout-form__field' },
        !showApartment ? React.createElement('button', {
          type: 'button',
          className: 'wp-checkout-form__link-button funky-link-btn',
          onClick: handleToggleApartment
        }, '+ Add apartment, suite, etc.') : 
        React.createElement(CheckoutInput, {
          label: 'Apartment, suite, etc. (optional)',
          value: data.apartment,
          onChange: function(e) { handleChange('apartment', e.target.value); },
          onBlur: function() { handleBlur('apartment'); },
          className: 'wp-checkout-form__input'
        })
      ),
      React.createElement('div', { className: 'wp-checkout-form__row' },
        React.createElement(CheckoutInput, {
          label: 'City',
          value: data.city,
          onChange: function(e) { handleChange('city', e.target.value); },
          onBlur: function() { handleBlur('city'); },
          error: errors.city,
          touched: touched.city,
          className: 'wp-checkout-form__input'
        }),
        React.createElement('div', { className: 'wp-checkout-form__field wp-checkout-form__field--select' },
          React.createElement('label', { className: 'wp-checkout-form__label' }, 'State / Province'),
          React.createElement('div', { className: 'wp-checkout-form__select-wrapper' },
            availableStates.length > 0 ? React.createElement('select', {
              className: 'wp-checkout-form__select funky-select',
              value: data.province,
              onChange: handleProvinceChange
            },
              React.createElement('option', { value: '' }, 'Select an option...'),
              renderStates()
            ) : React.createElement('input', {
              type: 'text',
              className: 'wp-checkout-form__input funky-input',
              value: data.province,
              onChange: handleProvinceChange,
              placeholder: 'State / Province'
            }),
            availableStates.length > 0 ? React.createElement(ChevronDown, { className: 'wp-checkout-form__select-icon', size: 16 }) : null
          )
        )
      ),
      React.createElement('div', { className: 'wp-checkout-form__row' },
        React.createElement(CheckoutInput, {
          label: 'Postal code',
          value: data.postcode,
          onChange: function(e) { handleChange('postcode', e.target.value); },
          onBlur: function() { handleBlur('postcode'); },
          error: errors.postcode,
          touched: touched.postcode,
          className: 'wp-checkout-form__input'
        }),
        React.createElement(CheckoutInput, {
          label: 'Phone (optional)',
          value: data.phone,
          onChange: function(e) { handleChange('phone', e.target.value); },
          onBlur: function() { handleBlur('phone'); },
          error: errors.phone,
          touched: touched.phone,
          className: 'wp-checkout-form__input'
        })
      ),
      onToggleSameBilling ? React.createElement('div', { className: 'wp-checkout-form__footer' },
        React.createElement('div', { className: 'wp-checkout-form__checkbox-wrapper funky-checkbox-wrapper' },
          React.createElement(Checkbox, {
            id: 'same-billing',
            checked: useSameBilling,
            onChange: handleBillingCheckboxChange
          }),
          React.createElement('label', { htmlFor: 'same-billing', className: 'wp-checkout-form__checkbox-label' }, 'Use same address for billing')
        )
      ) : null
    )
  );
}

ShippingAddressForm.displayName = 'ShippingAddressForm';