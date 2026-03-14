import React, { useState } from 'react';
import { CreditCard, Wallet, Bank as Banknote } from '@phosphor-icons/react';
import { Typography } from '../../common/Typography';
import { CheckoutInput } from './ui/CheckoutInput';
import { Checkbox } from './ui/Checkbox';
import { paymentMethods } from '../../../data/checkout';

/**
 * PaymentMethods Block Component
 *
 * Payment method selector with expandable card/wallet fields.
 */
export const PaymentMethods = ({
  isLoggedIn,
}: {
  isLoggedIn?: boolean;
}) => {
  const [selected, setSelected] = useState('card');

  const handlePlaceOrder = () => {
    alert('Order placed successfully! (Demo)');
  };

  return (
    <div className="wp-payment-methods funky-payment-methods">
      <Typography variant="h4" className="wp-payment-methods__title">
        Payment Method
      </Typography>

      <div className="wp-payment-methods__options">
        {paymentMethods.map((method) => {
          const isActive = selected === method.id;
          const Icon = method.icon;

          return (
            <label
              key={method.id}
              className={
                isActive
                  ? 'wp-payment-methods__option wp-payment-methods__option--active funky-payment-active'
                  : 'wp-payment-methods__option funky-payment-option'
              }
            >
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={isActive}
                onChange={() => setSelected(method.id)}
                className="wp-payment-methods__radio"
              />
              <div className="wp-payment-methods__label-group">
                <span className="wp-payment-methods__label">{method.name}</span>
                <div className="wp-payment-methods__icons">
                  <Icon size={20} className="wp-payment-methods__icon" />
                </div>
              </div>
              {isActive && method.fields && (
                <div className="wp-payment-methods__details animate-fade-in">
                  <div className="wp-payment-methods__fields">
                    {method.fields.map((field) => (
                      <CheckoutInput
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type || 'text'}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="funky-input"
                      />
                    ))}
                  </div>
                </div>
              )}
            </label>
          );
        })}
      </div>

      {isLoggedIn && (
        <div className="wp-payment-methods__save">
          <Checkbox
            id="savePayment"
            label="Save payment method for future purchases"
          />
        </div>
      )}

      <button
        onClick={handlePlaceOrder}
        className="wp-payment-methods__submit funky-submit-btn"
      >
        Place Order
      </button>
    </div>
  );
};

PaymentMethods.displayName = 'PaymentMethods';
