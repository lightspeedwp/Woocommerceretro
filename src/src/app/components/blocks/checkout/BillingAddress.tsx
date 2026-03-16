import React, { useState } from 'react';
import { CheckoutInput } from './ui/CheckoutInput';
import { CaretDown as ChevronDown } from '../../../utils/phosphor-compat';

/**
 * BillingAddress Component
 *
 * Simple billing address form with validation.
 */
export const BillingAddress = () => {
  const [formData, setFormData] = useState({
    firstName: 'Ash',
    lastName: 'Shaw',
    company: 'LightSpeed',
    address: '46 Devon Street',
    city: 'Woodstock, Cape Town',
    postalCode: '7925',
    phone: '+27845656767',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const getError = (field: string, value: string) => {
    if (field === 'company' || field === 'phone') return undefined;
    if (!value) return 'Please enter a valid ' + field.replace(/([A-Z])/g, ' $1').toLowerCase();
    return undefined;
  };

  return (
    <div className="wp-checkout-form funky-checkout-form">
      <p className="wp-checkout-text-intro">Enter the billing address that matches your payment method.</p>
      <div className="wp-checkout-grid-1">
        <div className="wp-checkout-select-wrapper">
          <label className="wp-checkout-label">Country/Region</label>
          <select className="wp-block-input funky-select" defaultValue="za">
            <option value="za">South Africa</option>
            <option value="na">Namibia</option>
            <option value="uk">United Kingdom</option>
          </select>
          <ChevronDown className="wp-checkout-select-icon" size={16} />
        </div>
        <div className="wp-checkout-grid-2">
          <CheckoutInput
            label="First name"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            onBlur={() => handleBlur('firstName')}
            error={getError('firstName', formData.firstName)}
            touched={touched.firstName}
          />
          <CheckoutInput
            label="Last name"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            onBlur={() => handleBlur('lastName')}
            error={getError('lastName', formData.lastName)}
            touched={touched.lastName}
          />
        </div>
        <CheckoutInput
          label="Company (optional)"
          value={formData.company}
          onChange={(e) => handleChange('company', e.target.value)}
          onBlur={() => handleBlur('company')}
        />
        <div>
          <CheckoutInput
            label="Address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            onBlur={() => handleBlur('address')}
            error={getError('address', formData.address)}
            touched={touched.address}
          />
          <button
            className="wp-checkout-btn-secondary funky-secondary-btn"
            aria-label="Add apartment, suite, or unit number field"
          >
            + Add apartment, suite, etc.
          </button>
        </div>
        <div className="wp-checkout-grid-2">
          <CheckoutInput
            label="City"
            value={formData.city}
            onChange={(e) => handleChange('city', e.target.value)}
            onBlur={() => handleBlur('city')}
            error={getError('city', formData.city)}
            touched={touched.city}
          />
          <div className="wp-checkout-select-wrapper">
            <label className="wp-checkout-label">Province</label>
            <select className="wp-block-input funky-select" defaultValue="wc">
              <option value="wc">Western Cape</option>
              <option value="gp">Gauteng</option>
              <option value="kzn">KwaZulu-Natal</option>
            </select>
            <ChevronDown className="wp-checkout-select-icon" size={16} />
          </div>
        </div>
        <div className="wp-checkout-grid-2">
          <CheckoutInput
            label="Postal code"
            value={formData.postalCode}
            onChange={(e) => handleChange('postalCode', e.target.value)}
            onBlur={() => handleBlur('postalCode')}
            error={getError('postalCode', formData.postalCode)}
            touched={touched.postalCode}
          />
          <CheckoutInput
            label="Phone (optional)"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
          />
        </div>
      </div>
    </div>
  );
};

BillingAddress.displayName = 'BillingAddress';