/**
 * Contact Page Data
 * 
 * Content for the Contact Us page, including contact details and FAQs.
 * 
 * @module data/contact
 * 
 * @typedef {Object} ContactInfo
 * @property {string} email
 * @property {string} phone
 * @property {string} address
 * @property {string} hours
 * 
 * @typedef {Object} ContactFAQ
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 */

import { brand } from './site';

export const contactInfo = {
  email: brand.supportEmail,
  phone: brand.phone,
  address: `${brand.address.street}, ${brand.address.city} ${brand.address.state} ${brand.address.postcode} ${brand.address.country}`,
  hours: "Mon-Fri from 9am to 5pm EST"
};

export const contactFAQs = [
  {
    id: '1',
    question: 'What are your shipping options?',
    answer: 'We offer free standard shipping on orders over $50. Express shipping is available for an additional fee and typically arrives within 2-3 business days.'
  },
  {
    id: '2',
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase for a full refund. Items must be unused and in original packaging. Return shipping is free for defective items.'
  },
  {
    id: '3',
    question: 'How can I track my order?',
    answer: 'Once your order ships, you will receive a tracking number via email. You can also view your order status by logging into your account and visiting the Orders page.'
  },
  {
    id: '4',
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location. Customs fees may apply depending on your country.'
  },
  {
    id: '5',
    question: 'How do I cancel or modify my order?',
    answer: 'To cancel or modify an order, please contact us immediately at ' + brand.supportEmail + '. Once an order has shipped, we cannot make changes, but you can return items following our return policy.'
  }
];