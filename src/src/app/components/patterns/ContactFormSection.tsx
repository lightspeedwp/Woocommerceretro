/**
 * ContactFormSection.tsx - Contact Pattern
 * 
 * Two-column layout with contact form and information.
 */

import React, { useState } from 'react';
import { Button } from '../blocks/design/Buttons';
import { Input } from '../blocks/forms/Input';
import { Textarea } from '../blocks/forms/Textarea';
import { Label } from '../blocks/forms/Label';
import { Typography } from '../common/Typography';
import { Envelope as Mail, Phone, MapPin } from '@phosphor-icons/react';

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactFormSectionProps {
  heading?: string;
  description?: string;
  contactInfo?: ContactInfo;
  onSubmit?: (data: FormData) => Promise<void>;
  className?: string;
}

export const ContactFormSection = ({
  heading = 'Get in Touch',
  description = 'Have a question about an order, a product, or our policies? Our team is ready to assist you.',
  contactInfo,
  onSubmit,
  className = '',
}: ContactFormSectionProps) => {
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (onSubmit) {
      onSubmit(formData)
        .then(() => {
          setStatus('success');
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
        })
        .catch(() => {
          setStatus('error');
        });
    } else {
      setTimeout(() => {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`wp-contact-section ${className}`}>
      <div className="wp-contact-layout">
        {/* Info Column */}
        <div className="wp-contact-info-column">
          {heading && (
            <Typography variant="h2" className="wp-contact-section-title">{heading}</Typography>
          )}
          {description && (
            <Typography variant="body" className="wp-contact-section-description">{description}</Typography>
          )}
          <div className="wp-contact-methods">
            {contactInfo?.email && (
              <div className="wp-contact-method">
                <div className="wp-contact-method-icon"><Mail size={20} /></div>
                <div>
                  <Typography variant="h3" className="wp-contact-method-title">Email</Typography>
                  <Typography variant="body" className="wp-contact-method-description">Our friendly team is here to help.</Typography>
                  <a href={`mailto:${contactInfo.email}`} className="wp-contact-method-link">
                    <strong>{contactInfo.email}</strong>
                  </a>
                </div>
              </div>
            )}
            {contactInfo?.phone && (
              <div className="wp-contact-method">
                <div className="wp-contact-method-icon"><Phone size={20} /></div>
                <div>
                  <Typography variant="h3" className="wp-contact-method-title">Phone</Typography>
                  <Typography variant="body" className="wp-contact-method-description">Mon-Fri from 9am to 5pm.</Typography>
                  <a href={`tel:${contactInfo.phone}`} className="wp-contact-method-link">
                    <strong>{contactInfo.phone}</strong>
                  </a>
                </div>
              </div>
            )}
            {contactInfo?.address && (
              <div className="wp-contact-method">
                <div className="wp-contact-method-icon"><MapPin size={20} /></div>
                <div>
                  <Typography variant="h3" className="wp-contact-method-title">Office</Typography>
                  <Typography variant="body" className="wp-contact-method-description">Come say hello at our office headquarters.</Typography>
                  <Typography variant="body" className="wp-contact-method-address">{contactInfo.address}</Typography>
                </div>
              </div>
            )}
            <div className="wp-contact-method">
              <div className="wp-contact-method-icon"><Mail size={20} /></div>
              <div>
                <Typography variant="h3" className="wp-contact-method-title">Response Time</Typography>
                <Typography variant="body" className="wp-contact-method-description">We typically reply to all messages within 24 hours.</Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="wp-contact-form-card">
          <form className="wp-contact-form" onSubmit={handleSubmit}>
            <div className="wp-contact-form-row">
              <div className="wp-contact-form-field">
                <Label htmlFor="firstName" className="wp-contact-form-label"><small><strong>First Name</strong></small></Label>
                <Input id="firstName" type="text" placeholder="John" className="wp-contact-form-input" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="wp-contact-form-field">
                <Label htmlFor="lastName" className="wp-contact-form-label"><small><strong>Last Name</strong></small></Label>
                <Input id="lastName" type="text" placeholder="Doe" className="wp-contact-form-input" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="wp-contact-form-field">
              <Label htmlFor="email" className="wp-contact-form-label"><small><strong>Email</strong></small></Label>
              <Input id="email" type="email" placeholder="john@example.com" className="wp-contact-form-input" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="wp-contact-form-field">
              <Label htmlFor="message" className="wp-contact-form-label"><small><strong>Message</strong></small></Label>
              <Textarea id="message" rows={5} placeholder="How can we help you?" className="wp-contact-form-textarea" name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <Button type="submit" variant="primary" size="lg" className="wp-contact-form-submit" disabled={status === 'loading' || status === 'success'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            {status === 'success' && (
              <div className="wp-contact-form__message wp-contact-form__message--success">
                <Mail size={20} />
                <span>Message sent successfully!</span>
              </div>
            )}
            {status === 'error' && (
              <div className="wp-contact-form__message wp-contact-form__message--error">
                <Mail size={20} />
                <span>Failed to send message. Please try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

ContactFormSection.displayName = 'ContactFormSection';