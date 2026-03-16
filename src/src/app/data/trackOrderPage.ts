/**
 * Track Order Page Data — PlayPocket Retro Theme
 *
 * All content for the Track Order page template.
 * Keeps templates data-driven with zero hardcoded strings.
 *
 * @module data/trackOrderPage
 */

export const trackOrderPageContent = {
  heroTitle: 'LOCATE CARGO',
  heroSubtitle: 'Enter your coordinates to find your loot.',
  heroIcon: 'Package',
  helpTitle: 'NEED HELP?',
  formLabels: {
    orderId: 'ORDER ID NUMBER *',
    orderIdPlaceholder: 'e.g., #9999',
    email: 'BILLING EMAIL *',
    emailPlaceholder: 'player1@domain.com',
    submit: 'TRACK PACKAGE',
    loading: 'SCANNING SECTORS...'
  },
  successMessage: 'DATA RETRIEVED: Your package is currently en route to Level 4.'
};

export const trackOrderSteps = [
  { id: 'confirmed', label: 'ORDER CONFIRMED', icon: 'CheckCircle' },
  { id: 'processing', label: 'PROCESSING', icon: 'Gear' },
  { id: 'shipped', label: 'SHIPPED', icon: 'Truck' },
  { id: 'delivered', label: 'DELIVERED', icon: 'MapPin' }
];

export const trackOrderHelp = [
  {
    title: 'LOST PACKAGE?',
    text: 'If your tracking shows delivered but you have not received your order, contact us within 48 hours.',
    link: '/contact',
    linkText: 'Contact Support'
  },
  {
    title: 'WRONG ADDRESS?',
    text: 'If you entered the wrong shipping address, contact us ASAP. We can redirect packages that have not shipped yet.',
    link: '/contact',
    linkText: 'Update Address'
  }
];