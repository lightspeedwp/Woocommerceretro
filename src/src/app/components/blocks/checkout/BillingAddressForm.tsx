import React, { useState } from 'react';
import { CaretDown as ChevronDown } from '@phosphor-icons/react';
import { CheckoutInput } from './ui/CheckoutInput';
import { countries, getStatesForCountry } from '../../../data/checkout';
import { mockUserProfile, mockAddresses } from '../../../data/account';

const defaultAddress = mockAddresses.find((a) => a.type === 'billing' || a.type === 'both');

const INITIAL_DATA = {
  firstName: defaultAddress ? defaultAddress.firstName : mockUserProfile.firstName,
  lastName: defaultAddress ? defaultAddress.lastName : mockUserProfile.lastName,
  company: defaultAddress ? defaultAddress.company : '',
  country: defaultAddress ? defaultAddress.country : 'US',
  street: defaultAddress ? defaultAddress.address1 : '',
  apartment: defaultAddress ? defaultAddress.address2 : '',
  city: defaultAddress ? defaultAddress.city : '',
  province: defaultAddress ? defaultAddress.state : '',
  postcode: defaultAddress ? defaultAddress.postalCode : '',
  phone: defaultAddress ? defaultAddress.phone : (mockUserProfile.phone || ''),
};

/**
 * BillingAddressForm Component
 *
 * Full billing address form with country/state dropdowns and validation.
 */
export const BillingAddressForm = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showApartment, setShowApartment] = useState(!!data.apartment);

  const availableStates = getStatesForCountry(data.country);

  const handleChange = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'country' ? { province: '' } : {}),
    }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateField = (field: string, value: string) => {
    if (!value && field !== 'company' && field !== 'apartment') {
      setErrors((prev) => ({ ...prev, [field]: 'This field is required' }));
      return false;
    }
    return true;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, data[field as keyof typeof data]);
  };

  return (
    <div className="wp-checkout-form funky-checkout-form">
      <div className="wp-checkout-form__header">
        <p className="wp-checkout-form__description">Enter the billing address that matches your payment method.</p>
      </div>
      <div className="wp-checkout-form__grid">
        <div className="wp-checkout-form__field wp-checkout-form__field--select">
          <label className="wp-checkout-form__label">Country / Region</label>
          <div className="wp-checkout-form__select-wrapper">
            <select
              className="wp-checkout-form__select funky-select"
              value={data.country}
              onChange={(e) => handleChange('country', e.target.value)}
            >
              <option value="">Select a country...</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>{country.name}</option>
              ))}
            </select>
            <ChevronDown className="wp-checkout-form__select-icon" size={16} />
          </div>
        </div>
        <div className="wp-checkout-form__row">
          <CheckoutInput
            label="First name"
            value={data.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            onBlur={() => handleBlur('firstName')}
            error={errors.firstName}
            touched={touched.firstName}
            className="wp-checkout-form__input"
          />
          <CheckoutInput
            label="Last name"
            value={data.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            onBlur={() => handleBlur('lastName')}
            error={errors.lastName}
            touched={touched.lastName}
            className="wp-checkout-form__input"
          />
        </div>
        <CheckoutInput
          label="Company (optional)"
          value={data.company}
          onChange={(e) => handleChange('company', e.target.value)}
          onBlur={() => handleBlur('company')}
          className="wp-checkout-form__input"
        />
        <CheckoutInput
          label="Address"
          value={data.street}
          onChange={(e) => handleChange('street', e.target.value)}
          onBlur={() => handleBlur('street')}
          error={errors.street}
          touched={touched.street}
          className="wp-checkout-form__input"
        />
        <div className="wp-checkout-form__field">
          {!showApartment ? (
            <button
              type="button"
              className="wp-checkout-form__link-button funky-link-btn"
              onClick={() => setShowApartment(true)}
            >
              + Add apartment, suite, etc.
            </button>
          ) : (
            <CheckoutInput
              label="Apartment, suite, etc. (optional)"
              value={data.apartment}
              onChange={(e) => handleChange('apartment', e.target.value)}
              onBlur={() => handleBlur('apartment')}
              className="wp-checkout-form__input"
            />
          )}
        </div>
        <div className="wp-checkout-form__row">
          <CheckoutInput
            label="City"
            value={data.city}
            onChange={(e) => handleChange('city', e.target.value)}
            onBlur={() => handleBlur('city')}
            error={errors.city}
            touched={touched.city}
            className="wp-checkout-form__input"
          />
          <div className="wp-checkout-form__field wp-checkout-form__field--select">
            <label className="wp-checkout-form__label">State / Province</label>
            <div className="wp-checkout-form__select-wrapper">
              {availableStates.length > 0 ? (
                <select
                  className="wp-checkout-form__select funky-select"
                  value={data.province}
                  onChange={(e) => handleChange('province', e.target.value)}
                >
                  <option value="">Select an option...</option>
                  {availableStates.map((state) => (
                    <option key={state.code} value={state.code}>{state.name}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  className="wp-checkout-form__input funky-input"
                  value={data.province}
                  onChange={(e) => handleChange('province', e.target.value)}
                  placeholder="State / Province"
                />
              )}
              {availableStates.length > 0 && (
                <ChevronDown className="wp-checkout-form__select-icon" size={16} />
              )}
            </div>
          </div>
        </div>
        <div className="wp-checkout-form__row">
          <CheckoutInput
            label="Postal code"
            value={data.postcode}
            onChange={(e) => handleChange('postcode', e.target.value)}
            onBlur={() => handleBlur('postcode')}
            error={errors.postcode}
            touched={touched.postcode}
            className="wp-checkout-form__input"
          />
          <CheckoutInput
            label="Phone (optional)"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            error={errors.phone}
            touched={touched.phone}
            className="wp-checkout-form__input"
          />
        </div>
      </div>
    </div>
  );
};

BillingAddressForm.displayName = 'BillingAddressForm';
