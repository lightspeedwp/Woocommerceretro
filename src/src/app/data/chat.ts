/**
 * Chat Page Data
 * 
 * Content for the Chat page, including popular topics and contact options.
 * 
 * @module data/chat
 */

export var chatPopularTopics: string[] = [
  'Where is my order?',
  'How do I return an item?',
  'Help choosing the right size',
  'Payment or billing question',
  'Product availability',
];

export var chatContactOptions = [
  {
    type: 'email',
    icon: 'Mail',
    title: 'Email',
    value: 'support@example.com',
    link: '/contact',
    buttonText: 'Send Email',
  },
  {
    type: 'phone',
    icon: 'Phone',
    title: 'Phone',
    value: '1-800-555-0199',
    link: 'tel:+18005550199',
    buttonText: 'Call Now',
  },
];