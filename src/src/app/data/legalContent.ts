/**
 * Legal Content Mock Data
 *
 * Privacy policy and terms & conditions page content.
 * Sentence case headings. References "Woo Shop" brand.
 *
 * @module data/legalContent
 * 
 * @typedef {Object} LegalSection
 * @property {string} id
 * @property {string} heading
 * @property {string} content
 */

// ---------------------------------------------------------------------------
// Privacy policy
// ---------------------------------------------------------------------------

export var privacyPolicyContent = {
  title: 'Privacy policy',
  lastUpdated: 'January 1, 2026',
  intro:
    'At Woo Shop, your privacy matters. This policy explains how we collect, use, and protect your personal information when you visit our website or make a purchase.',
  sections: [
    {
      id: 'pp-1',
      heading: 'Information we collect',
      content:
        'We collect information you provide directly, such as your name, email address, shipping address, and payment details when you create an account or place an order. We also collect usage data automatically, including your IP address, browser type, and pages visited, to improve our service.',
    },
    {
      id: 'pp-2',
      heading: 'How we use your information',
      content:
        'We use your information to process orders, send shipping notifications, provide customer support, and send marketing communications (with your consent). We also use analytics data to improve our website experience and product offerings.',
    },
    {
      id: 'pp-3',
      heading: 'Information sharing',
      content:
        'We never sell your personal information. We share data only with trusted service providers who help us operate our business: payment processors, shipping carriers, and email service providers. All partners are contractually required to protect your data.',
    },
    {
      id: 'pp-4',
      heading: 'Cookies and tracking',
      content:
        'We use essential cookies to keep your cart and session active. Analytics cookies (Google Analytics) help us understand how customers use our site. You can manage cookie preferences through your browser settings or our cookie consent banner.',
    },
    {
      id: 'pp-5',
      heading: 'Data security',
      content:
        'All data is encrypted in transit (TLS 1.3) and at rest. Payment information is processed by PCI-DSS compliant processors — we never store your full card number. We conduct regular security audits and maintain strict access controls.',
    },
    {
      id: 'pp-6',
      heading: 'Your rights',
      content:
        'You have the right to access, correct, or delete your personal data at any time. You can also opt out of marketing communications. To exercise any of these rights, contact us at privacy@wooshop.com or through your account settings.',
    },
    {
      id: 'pp-7',
      heading: 'Changes to this policy',
      content:
        'We may update this policy from time to time. We will notify you of significant changes by email or through a notice on our website. The \"last updated\" date at the top of this page reflects the most recent revision.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Terms and conditions
// ---------------------------------------------------------------------------

export var termsContent = {
  title: 'Terms and conditions',
  lastUpdated: 'January 1, 2026',
  intro:
    'These terms govern your use of the Woo Shop website and your purchases from us. By using our site or placing an order, you agree to these terms.',
  sections: [
    {
      id: 'tc-1',
      heading: 'General',
      content:
        'Woo Shop Ltd. operates the website wooshop.com. These terms, together with our privacy policy and returns policy, form the complete agreement between you and Woo Shop regarding your use of our services.',
    },
    {
      id: 'tc-2',
      heading: 'Orders and pricing',
      content:
        'All prices are displayed in USD and include applicable taxes unless otherwise stated. We reserve the right to correct pricing errors. An order is confirmed only when you receive an order confirmation email from us.',
    },
    {
      id: 'tc-3',
      heading: 'Shipping and delivery',
      content:
        'We aim to dispatch orders within 1-2 business days. Delivery times are estimates and not guaranteed. Risk of loss transfers to you upon delivery to the carrier. For full shipping details, see our shipping policy page.',
    },
    {
      id: 'tc-4',
      heading: 'Returns and refunds',
      content:
        'We accept returns within 30 days of delivery for unused items in original packaging. Refunds are processed within 5-7 business days of receiving the return. Personalised and sale items may be excluded. See our returns policy for full details.',
    },
    {
      id: 'tc-5',
      heading: 'Intellectual property',
      content:
        'All content on this site — including text, images, logos, and design — is the property of Woo Shop Ltd. or its licensors. You may not reproduce, distribute, or create derivative works without our written permission.',
    },
    {
      id: 'tc-6',
      heading: 'Limitation of liability',
      content:
        'Woo Shop is not liable for indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability is limited to the purchase price of the products in question.',
    },
    {
      id: 'tc-7',
      heading: 'Governing law',
      content:
        'These terms are governed by the laws of the State of New York, United States. Any disputes will be resolved in the courts of New York County.',
    },
  ],
};

export default {
  privacyPolicyContent,
  termsContent,
};