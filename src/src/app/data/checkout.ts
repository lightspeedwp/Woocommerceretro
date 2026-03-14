/**
 * Checkout Data Mock Data
 * 
 * Optimized for Figma Make parser:
 * 1. No optional chaining, nullish coalescing, or spread at module level
 * 2. ASCII characters only
 */

import { Truck, Lightning as Zap, Airplane as Plane, CreditCard, DeviceMobile as Smartphone, Wallet, Buildings as Building } from '@phosphor-icons/react';

export const shippingMethods = [
  {
    id: 'standard',
    name: 'Standard shipping',
    description: 'Free on orders over GBP 50',
    cost: 4.99,
    freeThreshold: 50,
    estimatedDays: '5-7 business days',
    icon: Truck,
    recommended: true,
  },
  {
    id: 'express',
    name: 'Express shipping',
    description: 'Faster delivery',
    cost: 9.99,
    freeThreshold: 100,
    estimatedDays: '2-3 business days',
    icon: Zap,
  },
  {
    id: 'overnight',
    name: 'Overnight shipping',
    description: 'Next business day delivery',
    cost: 19.99,
    freeThreshold: 200,
    estimatedDays: '1 business day',
    icon: Plane,
  },
];

export const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit card',
    description: 'Pay securely with your card',
    icon: CreditCard,
    enabled: true,
    acceptedCards: ['Visa', 'Mastercard', 'American Express', 'Discover'],
    processingTime: 'Instant',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Pay with your PayPal account',
    icon: Wallet,
    enabled: true,
    processingTime: 'Instant',
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    description: 'Fast, secure payment with Apple Pay',
    icon: Smartphone,
    enabled: true,
    processingTime: 'Instant',
  },
  {
    id: 'bank-transfer',
    name: 'Bank transfer',
    description: 'Direct bank transfer (2-3 days processing)',
    icon: Building,
    enabled: true,
    processingTime: '2-3 business days',
  },
];

export const countries = [
  {
    code: 'US',
    name: 'United States',
    shippingAvailable: true,
    states: [
      { code: 'AL', name: 'Alabama' },
      { code: 'AK', name: 'Alaska' },
      { code: 'AZ', name: 'Arizona' },
      { code: 'AR', name: 'Arkansas' },
      { code: 'CA', name: 'California' },
      { code: 'CO', name: 'Colorado' },
      { code: 'CT', name: 'Connecticut' },
      { code: 'DE', name: 'Delaware' },
      { code: 'FL', name: 'Florida' },
      { code: 'GA', name: 'Georgia' },
      { code: 'HI', name: 'Hawaii' },
      { code: 'ID', name: 'Idaho' },
      { code: 'IL', name: 'Illinois' },
      { code: 'IN', name: 'Indiana' },
      { code: 'IA', name: 'Iowa' },
      { code: 'KS', name: 'Kansas' },
      { code: 'KY', name: 'Kentucky' },
      { code: 'LA', name: 'Louisiana' },
      { code: 'ME', name: 'Maine' },
      { code: 'MD', name: 'Maryland' },
      { code: 'MA', name: 'Massachusetts' },
      { code: 'MI', name: 'Michigan' },
      { code: 'MN', name: 'Minnesota' },
      { code: 'MS', name: 'Mississippi' },
      { code: 'MO', name: 'Missouri' },
      { code: 'MT', name: 'Montana' },
      { code: 'NE', name: 'Nebraska' },
      { code: 'NV', name: 'Nevada' },
      { code: 'NH', name: 'New Hampshire' },
      { code: 'NJ', name: 'New Jersey' },
      { code: 'NM', name: 'New Mexico' },
      { code: 'NY', name: 'New York' },
      { code: 'NC', name: 'North Carolina' },
      { code: 'ND', name: 'North Dakota' },
      { code: 'OH', name: 'Ohio' },
      { code: 'OK', name: 'Oklahoma' },
      { code: 'OR', name: 'Oregon' },
      { code: 'PA', name: 'Pennsylvania' },
      { code: 'RI', name: 'Rhode Island' },
      { code: 'SC', name: 'South Carolina' },
      { code: 'SD', name: 'South Dakota' },
      { code: 'TN', name: 'Tennessee' },
      { code: 'TX', name: 'Texas' },
      { code: 'UT', name: 'Utah' },
      { code: 'VT', name: 'Vermont' },
      { code: 'VA', name: 'Virginia' },
      { code: 'WA', name: 'Washington' },
      { code: 'WV', name: 'West Virginia' },
      { code: 'WI', name: 'Wisconsin' },
      { code: 'WY', name: 'Wyoming' },
    ],
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    shippingAvailable: true,
  },
];

export const billingFormFields = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First name',
    type: 'text',
    required: true,
    placeholder: 'John',
    autocomplete: 'given-name',
    maxLength: 50,
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last name',
    type: 'text',
    required: true,
    placeholder: 'Doe',
    autocomplete: 'family-name',
    maxLength: 50,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    placeholder: 'john.doe@example.com',
    autocomplete: 'email',
    pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Phone number',
    type: 'tel',
    required: false,
    placeholder: '+1 (555) 123-4567',
    autocomplete: 'tel',
  },
  {
    id: 'company',
    name: 'company',
    label: 'Company (Optional)',
    type: 'text',
    required: false,
    placeholder: 'Company Name',
    autocomplete: 'organization',
  },
  {
    id: 'address1',
    name: 'address1',
    label: 'Street address',
    type: 'text',
    required: true,
    placeholder: '123 Main Street',
    autocomplete: 'address-line1',
  },
  {
    id: 'address2',
    name: 'address2',
    label: 'Apartment, Suite, etc. (Optional)',
    type: 'text',
    required: false,
    placeholder: 'Apt 4B',
    autocomplete: 'address-line2',
  },
  {
    id: 'city',
    name: 'city',
    label: 'City',
    type: 'text',
    required: true,
    placeholder: 'San Francisco',
    autocomplete: 'address-level2',
  },
  {
    id: 'state',
    name: 'state',
    label: 'State/Province',
    type: 'select',
    required: true,
    autocomplete: 'address-level1',
  },
  {
    id: 'postalCode',
    name: 'postalCode',
    label: 'Postal/ZIP code',
    type: 'text',
    required: true,
    placeholder: '94102',
    autocomplete: 'postal-code',
    maxLength: 10,
  },
  {
    id: 'country',
    name: 'country',
    label: 'Country',
    type: 'select',
    required: true,
    autocomplete: 'country',
  },
];

export const getShippingMethodById = (id) => {
  for (let i = 0; i < shippingMethods.length; i++) {
    if (shippingMethods[i].id === id) return shippingMethods[i];
  }
  return undefined;
}

export const calculateShippingCost = (methodId, orderTotal) => {
  const method = getShippingMethodById(methodId);
  if (!method) return 0;
  return orderTotal >= method.freeThreshold ? 0 : method.cost;
}

export const getRecommendedShippingMethod = () => {
  for (let i = 0; i < shippingMethods.length; i++) {
    if (shippingMethods[i].recommended) return shippingMethods[i];
  }
  return undefined;
}

export const getPaymentMethodById = (id) => {
  for (let i = 0; i < paymentMethods.length; i++) {
    if (paymentMethods[i].id === id) return paymentMethods[i];
  }
  return undefined;
}

export const getEnabledPaymentMethods = () => {
  const result = [];
  for (let i = 0; i < paymentMethods.length; i++) {
    if (paymentMethods[i].enabled) result.push(paymentMethods[i]);
  }
  return result;
}

export const getCountryByCode = (code) => {
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].code === code) return countries[i];
  }
  return undefined;
}

export const getStatesForCountry = (countryCode) => {
  const country = getCountryByCode(countryCode);
  return (country && (country as any).states) ? (country as any).states : [];
}

export const isShippingAvailable = (countryCode) => {
  const country = getCountryByCode(countryCode);
  return (country && (country as any).shippingAvailable) ? true : false;
}

export default {
  shippingMethods: shippingMethods,
  paymentMethods: paymentMethods,
  countries: countries,
  billingFormFields: billingFormFields,
  getShippingMethodById: getShippingMethodById,
  calculateShippingCost: calculateShippingCost,
  getRecommendedShippingMethod: getRecommendedShippingMethod,
  getPaymentMethodById: getPaymentMethodById,
  getEnabledPaymentMethods: getEnabledPaymentMethods,
  getCountryByCode: getCountryByCode,
  getStatesForCountry: getStatesForCountry,
  isShippingAvailable: isShippingAvailable,
};