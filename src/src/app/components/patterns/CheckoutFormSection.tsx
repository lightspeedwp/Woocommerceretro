import React, { useState } from 'react';
import { CreditCard, Truck } from '@phosphor-icons/react';
import { Typography } from '../common/Typography';

interface CheckoutFormData {
  billingFirstName: string;
  billingLastName: string;
  billingEmail: string;
  billingPhone: string;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  billingCountry: string;
  shippingSameAsBilling: boolean;
  shippingFirstName: string;
  shippingLastName: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  shippingCountry: string;
  [key: string]: string | boolean;
}

interface CheckoutFormSectionProps {
  onSubmit?: (data: CheckoutFormData) => void;
  showShippingSection?: boolean;
  className?: string;
}

/**
 * CheckoutFormSection Pattern Component
 * 
 * Comprehensive checkout form with billing and shipping address collection.
 */
export const CheckoutFormSection = ({
  onSubmit,
  showShippingSection = true,
  className = '',
}: CheckoutFormSectionProps) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
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

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`wp-checkout-form ${className}`}>
      {/* Billing Section */}
      <div className="wp-checkout-section">
        <div className="wp-checkout-section__header">
          <CreditCard size={24} className="wp-checkout-section__icon" />
          <Typography variant="h3">Billing Address</Typography>
        </div>

        <div className="wp-checkout-grid-2">
          <div className="wp-checkout-field">
            <label htmlFor="billingFirstName" className="wp-block-label">
              First Name <span className="wp-checkout-required">*</span>
            </label>
            <input
              id="billingFirstName" type="text" value={formData.billingFirstName}
              onChange={(e) => handleChange('billingFirstName', e.target.value)}
              required autoComplete="given-name" className="wp-block-input"
            />
          </div>
          <div className="wp-checkout-field">
            <label htmlFor="billingLastName" className="wp-block-label">
              Last Name <span className="wp-checkout-required">*</span>
            </label>
            <input
              id="billingLastName" type="text" value={formData.billingLastName}
              onChange={(e) => handleChange('billingLastName', e.target.value)}
              required autoComplete="family-name" className="wp-block-input"
            />
          </div>
        </div>

        <div className="wp-checkout-grid-2">
          <div className="wp-checkout-field">
            <label htmlFor="billingEmail" className="wp-block-label">
              Email <span className="wp-checkout-required">*</span>
            </label>
            <input
              id="billingEmail" type="email" value={formData.billingEmail}
              onChange={(e) => handleChange('billingEmail', e.target.value)}
              required autoComplete="email" className="wp-block-input"
            />
          </div>
          <div className="wp-checkout-field">
            <label htmlFor="billingPhone" className="wp-block-label">
              Phone <span className="wp-checkout-required">*</span>
            </label>
            <input
              id="billingPhone" type="tel" value={formData.billingPhone}
              onChange={(e) => handleChange('billingPhone', e.target.value)}
              required autoComplete="tel" className="wp-block-input"
            />
          </div>
        </div>

        <div className="wp-checkout-field">
          <label htmlFor="billingAddress" className="wp-block-label">
            Street Address <span className="wp-checkout-required">*</span>
          </label>
          <input
            id="billingAddress" type="text" value={formData.billingAddress}
            onChange={(e) => handleChange('billingAddress', e.target.value)}
            required autoComplete="street-address" className="wp-block-input"
          />
        </div>

        <div className="wp-checkout-grid-3">
          <div className="wp-checkout-field">
            <label htmlFor="billingCity" className="wp-block-label">
              City <span className="wp-checkout-required">*</span>
            </label>
            <input
              id="billingCity" type="text" value={formData.billingCity}
              onChange={(e) => handleChange('billingCity', e.target.value)}
              required autoComplete="address-level2" className="wp-block-input"
            />
          </div>
          <div className="wp-checkout-field">
            <label htmlFor="billingState" className="wp-block-label">
              State <span className="wp-checkout-required">*</span>
            </label>
            <input
              id="billingState" type="text" value={formData.billingState}
              onChange={(e) => handleChange('billingState', e.target.value)}
              required autoComplete="address-level1" className="wp-block-input"
            />
          </div>
          <div className="wp-checkout-field">
            <label htmlFor="billingZip" className="wp-block-label">
              ZIP Code <span className="wp-checkout-required">*</span>
            </label>
            <input
              id="billingZip" type="text" value={formData.billingZip}
              onChange={(e) => handleChange('billingZip', e.target.value)}
              required autoComplete="postal-code" className="wp-block-input"
            />
          </div>
        </div>

        <div className="wp-checkout-field">
          <label htmlFor="billingCountry" className="wp-block-label">
            Country <span className="wp-checkout-required">*</span>
          </label>
          <select
            id="billingCountry" value={formData.billingCountry}
            onChange={(e) => handleChange('billingCountry', e.target.value)}
            required autoComplete="country" className="wp-block-input"
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
          </select>
        </div>
      </div>

      {/* Shipping Section */}
      {showShippingSection && (
        <div className="wp-checkout-section">
          <div className="wp-checkout-section__header">
            <Truck size={24} className="wp-checkout-section__icon" />
            <Typography variant="h3">Shipping Address</Typography>
          </div>

          <div className="wp-checkout-checkbox-group">
            <input
              id="shippingSameAsBilling" type="checkbox"
              checked={formData.shippingSameAsBilling}
              onChange={(e) => handleChange('shippingSameAsBilling', e.target.checked)}
              className="wp-block-checkbox"
            />
            <label htmlFor="shippingSameAsBilling" className="wp-block-label">
              Same as billing address
            </label>
          </div>

          {!formData.shippingSameAsBilling && (
            <>
              <div className="wp-checkout-grid-2">
                <div className="wp-checkout-field">
                  <label htmlFor="shippingFirstName" className="wp-block-label">
                    First Name <span className="wp-checkout-required">*</span>
                  </label>
                  <input
                    id="shippingFirstName" type="text" value={formData.shippingFirstName}
                    onChange={(e) => handleChange('shippingFirstName', e.target.value)}
                    required={!formData.shippingSameAsBilling} autoComplete="given-name" className="wp-block-input"
                  />
                </div>
                <div className="wp-checkout-field">
                  <label htmlFor="shippingLastName" className="wp-block-label">
                    Last Name <span className="wp-checkout-required">*</span>
                  </label>
                  <input
                    id="shippingLastName" type="text" value={formData.shippingLastName}
                    onChange={(e) => handleChange('shippingLastName', e.target.value)}
                    required={!formData.shippingSameAsBilling} autoComplete="family-name" className="wp-block-input"
                  />
                </div>
              </div>

              <div className="wp-checkout-field">
                <label htmlFor="shippingAddress" className="wp-block-label">
                  Street Address <span className="wp-checkout-required">*</span>
                </label>
                <input
                  id="shippingAddress" type="text" value={formData.shippingAddress}
                  onChange={(e) => handleChange('shippingAddress', e.target.value)}
                  required={!formData.shippingSameAsBilling} autoComplete="street-address" className="wp-block-input"
                />
              </div>

              <div className="wp-checkout-grid-3">
                <div className="wp-checkout-field">
                  <label htmlFor="shippingCity" className="wp-block-label">
                    City <span className="wp-checkout-required">*</span>
                  </label>
                  <input
                    id="shippingCity" type="text" value={formData.shippingCity}
                    onChange={(e) => handleChange('shippingCity', e.target.value)}
                    required={!formData.shippingSameAsBilling} autoComplete="address-level2" className="wp-block-input"
                  />
                </div>
                <div className="wp-checkout-field">
                  <label htmlFor="shippingState" className="wp-block-label">
                    State <span className="wp-checkout-required">*</span>
                  </label>
                  <input
                    id="shippingState" type="text" value={formData.shippingState}
                    onChange={(e) => handleChange('shippingState', e.target.value)}
                    required={!formData.shippingSameAsBilling} autoComplete="address-level1" className="wp-block-input"
                  />
                </div>
                <div className="wp-checkout-field">
                  <label htmlFor="shippingZip" className="wp-block-label">
                    ZIP Code <span className="wp-checkout-required">*</span>
                  </label>
                  <input
                    id="shippingZip" type="text" value={formData.shippingZip}
                    onChange={(e) => handleChange('shippingZip', e.target.value)}
                    required={!formData.shippingSameAsBilling} autoComplete="postal-code" className="wp-block-input"
                  />
                </div>
              </div>

              <div className="wp-checkout-field">
                <label htmlFor="shippingCountry" className="wp-block-label">
                  Country <span className="wp-checkout-required">*</span>
                </label>
                <select
                  id="shippingCountry" value={formData.shippingCountry}
                  onChange={(e) => handleChange('shippingCountry', e.target.value)}
                  required={!formData.shippingSameAsBilling} autoComplete="country" className="wp-block-input"
                >
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
            </>
          )}
        </div>
      )}
    </form>
  );
}