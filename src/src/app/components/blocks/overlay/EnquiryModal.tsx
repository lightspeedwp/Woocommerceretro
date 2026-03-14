import React, { useState, useEffect } from 'react';
import { X, PaperPlaneTilt as Send, CheckCircle } from '@phosphor-icons/react';
import { Button } from '../design/Buttons';
import { submitFormMock } from '../../../services/formSubmission';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  successMessage: string;
}

export const EnquiryModal = ({ isOpen, onClose, title, description, successMessage }: EnquiryModalProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleClose = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) handleClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Please tell us how we can help';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    submitFormMock({ name: formData.name, email: formData.email, message: formData.message }).then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(handleClose, 3000);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const { [name]: _, ...rest } = errors;
      setErrors(rest);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="enquiry-modal__overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="enquiry-modal__backdrop" onClick={handleClose} aria-hidden="true" />
      <div className="enquiry-modal__container">
        <button onClick={handleClose} className="enquiry-modal__close" aria-label="Close modal"><X size={24} /></button>
        <div className="enquiry-modal__body">
          {!isSubmitted ? (
            <>
              <div className="enquiry-modal__header">
                <h2 id="modal-title" className="enquiry-modal__title">{title}</h2>
                <p className="enquiry-modal__description">{description}</p>
              </div>
              <form onSubmit={handleSubmit} className="enquiry-modal__form">
                <div className="enquiry-modal__field">
                  <label htmlFor="name" className="enquiry-modal__label">Your Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                    className={`enquiry-modal__input ${errors.name ? 'enquiry-modal__input--error' : ''}`}
                    placeholder="John Smith" disabled={isSubmitting} />
                  {errors.name && <p className="enquiry-modal__error">{errors.name}</p>}
                </div>
                <div className="enquiry-modal__field">
                  <label htmlFor="email" className="enquiry-modal__label">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    className={`enquiry-modal__input ${errors.email ? 'enquiry-modal__input--error' : ''}`}
                    placeholder="john@example.com" disabled={isSubmitting} />
                  {errors.email && <p className="enquiry-modal__error">{errors.email}</p>}
                </div>
                <div className="enquiry-modal__field">
                  <label htmlFor="message" className="enquiry-modal__label">How Can We Help? *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                    className={`enquiry-modal__textarea ${errors.message ? 'enquiry-modal__input--error' : ''}`}
                    placeholder="Tell us what you're looking for..." disabled={isSubmitting} />
                  {errors.message && <p className="enquiry-modal__error">{errors.message}</p>}
                </div>
                <Button type="submit" variant="cta" size="lg" fullWidth disabled={isSubmitting} className="enquiry-modal__submit">
                  {isSubmitting ? (
                    <>
                      <svg className="enquiry-modal__spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="enquiry-modal__spinner-track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="enquiry-modal__spinner-head" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>{" "}Sending...
                    </>
                  ) : (
                    <><Send size={20} /> Send Message</>
                  )}
                </Button>
                <p className="enquiry-modal__note">We'll respond within 24 hours</p>
              </form>
            </>
          ) : (
            <div className="enquiry-modal__success">
              <div className="enquiry-modal__success-icon"><CheckCircle size={32} /></div>
              <h2 className="enquiry-modal__success-title">Message Sent!</h2>
              <p className="enquiry-modal__success-text">{successMessage}</p>
              <Button variant="outline" onClick={handleClose}>Close</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}