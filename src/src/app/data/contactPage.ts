/**
 * Contact Page Data — PlayPocket Retro Theme
 *
 * All content for the Contact page template.
 * Keeps templates data-driven with zero hardcoded strings.
 *
 * @module data/contactPage
 */

export interface ContactChannel {
  id: string;
  icon: string;
  title: string;
  lines: string[];
  note?: string;
  ctaText?: string;
}

export interface ContactSubject {
  value: string;
  label: string;
}

export const contactPageContent = {
  heroTitle: 'COMMUNICATIONS LINK',
  heroSubtitle: 'Need help, have a question, or just want to talk games? Drop us a line.',
  infoTitle: 'DIRECT CHANNELS',
  formTitle: 'SEND TRANSMISSION',
  formLabels: {
    name: 'PLAYER NAME *',
    email: 'EMAIL ADDRESS *',
    subject: 'SUBJECT',
    message: 'MESSAGE *',
    submit: 'SEND MESSAGE'
  },
  successMessage: 'MESSAGE SENT! WE WILL RESPOND SHORTLY.'
};

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    icon: 'EnvelopeSimple',
    title: 'EMAIL',
    lines: ['support@playpocket.gg'],
    note: 'Expect a reply within 24 hours.'
  },
  {
    id: 'chat',
    icon: 'ChatText',
    title: 'LIVE CHAT',
    lines: ['Available Mon-Fri, 9AM-5PM EST.'],
    ctaText: 'START CHAT'
  },
  {
    id: 'hq',
    icon: 'MapPin',
    title: 'HQ (NO WALK-INS)',
    lines: ['128 Bit Lane, Level 4', 'Arcade City, AC 90210']
  }
];

export const contactSubjects: ContactSubject[] = [
  { value: 'support', label: 'Technical Support' },
  { value: 'order', label: 'Order Issue' },
  { value: 'collab', label: 'Partnerships / Collabs' },
  { value: 'general', label: 'General Inquiry' }
];
