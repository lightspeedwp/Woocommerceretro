import React from 'react';
import { X, PaperPlaneTilt as Send, CheckCircle } from '@phosphor-icons/react';
import * as ButtonsModule from '../design/Buttons';
import * as FormSubmissionModule from '../../../services/formSubmission';

var useState = React.useState;

var Button = ButtonsModule.Button;
var submitFormMock = FormSubmissionModule.submitFormMock;

/**
 * EnquiryModal Component
 */

export function EnquiryModal(props) {
  var isOpen = props.isOpen;
  var onClose = props.onClose;
  var title = props.title;
  var description = props.description;
  var successMessage = props.successMessage;

  var _formData = useState({
    name: '',
    email: '',
    message: ''
  });
  var formData = _formData[0];
  var setFormData = _formData[1];
  var _submitting = useState(false);
  var isSubmitting = _submitting[0];
  var setIsSubmitting = _submitting[1];
  var _submitted = useState(false);
  var isSubmitted = _submitted[0];
  var setIsSubmitted = _submitted[1];
  var _errs = useState({});
  var errors = _errs[0];
  var setErrors = _errs[1];

  var handleClose = function() {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  React.useEffect(function() {
    var handleEsc = function(e) {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return function() { window.removeEventListener('keydown', handleEsc); };
  }, [isOpen]);

  React.useEffect(function() {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return function() {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  var validateForm = function() {
    var newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  var handleSubmit = function(e) {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    var submissionData = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };
    submitFormMock(submissionData).then(function() {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(function() { handleClose(); }, 3000);
    });
  };

  var handleChange = function(e) {
    var name = e.target.name;
    var value = e.target.value;
    
    var newFormData = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };
    if (name === 'name') newFormData.name = value;
    if (name === 'email') newFormData.email = value;
    if (name === 'message') newFormData.message = value;
    setFormData(newFormData);

    if (errors[name]) {
      var newErrors = {};
      for (var key in errors) {
        if (key !== name) {
          newErrors[key] = errors[key];
        }
      }
      setErrors(newErrors);
    }
  };

  if (!isOpen) return null;

  var renderForm = function() {
    return React.createElement(React.Fragment, null,
      React.createElement('div', { className: "enquiry-modal__header" },
        React.createElement('h2', { id: "modal-title", className: "enquiry-modal__title" }, title),
        React.createElement('p', { className: "enquiry-modal__description" }, description)
      ),
      React.createElement('form', { onSubmit: handleSubmit, className: "enquiry-modal__form" },
        React.createElement('div', { className: "enquiry-modal__field" },
          React.createElement('label', { htmlFor: "name", className: "enquiry-modal__label" }, "Your Name *"),
          React.createElement('input', {
            type: "text",
            id: "name",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            className: errors.name ? 'enquiry-modal__input enquiry-modal__input--error' : 'enquiry-modal__input',
            placeholder: "John Smith",
            disabled: isSubmitting
          }),
          errors.name ? React.createElement('p', { className: "enquiry-modal__error" }, errors.name) : null
        ),
        React.createElement('div', { className: "enquiry-modal__field" },
          React.createElement('label', { htmlFor: "email", className: "enquiry-modal__label" }, "Email Address *"),
          React.createElement('input', {
            type: "email",
            id: "email",
            name: "email",
            value: formData.email,
            onChange: handleChange,
            className: errors.email ? 'enquiry-modal__input enquiry-modal__input--error' : 'enquiry-modal__input',
            placeholder: "john@example.com",
            disabled: isSubmitting
          }),
          errors.email ? React.createElement('p', { className: "enquiry-modal__error" }, errors.email) : null
        ),
        React.createElement('div', { className: "enquiry-modal__field" },
          React.createElement('label', { htmlFor: "message", className: "enquiry-modal__label" }, "How Can We Help? *"),
          React.createElement('textarea', {
            id: "message",
            name: "message",
            value: formData.message,
            onChange: handleChange,
            rows: 4,
            className: errors.message ? 'enquiry-modal__textarea enquiry-modal__input--error' : 'enquiry-modal__textarea',
            placeholder: "Tell us what you're looking for...",
            disabled: isSubmitting
          }),
          errors.message ? React.createElement('p', { className: "enquiry-modal__error" }, errors.message) : null
        ),
        React.createElement(Button, {
          type: "submit",
          variant: "cta",
          size: "lg",
          fullWidth: true,
          disabled: isSubmitting,
          className: "enquiry-modal__submit"
        },
          isSubmitting ? React.createElement(React.Fragment, null,
            React.createElement('svg', {
              className: "enquiry-modal__spinner",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24"
            },
              React.createElement('circle', { className: "enquiry-modal__spinner-track", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              React.createElement('path', { className: "enquiry-modal__spinner-head", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
            ),
            " Sending..."
          ) : React.createElement(React.Fragment, null,
            React.createElement(Send, { size: 20 }),
            " Send Message"
          )
        ),
        React.createElement('p', { className: "enquiry-modal__note" }, "We'll respond within 24 hours")
      )
    );
  };

  var renderSuccess = function() {
    return React.createElement('div', { className: "enquiry-modal__success" },
      React.createElement('div', { className: "enquiry-modal__success-icon" },
        React.createElement(CheckCircle, { size: 32 })
      ),
      React.createElement('h2', { className: "enquiry-modal__success-title" }, "Message Sent!"),
      React.createElement('p', { className: "enquiry-modal__success-text" }, successMessage),
      React.createElement(Button, { variant: "outline", onClick: handleClose }, "Close")
    );
  };

  return React.createElement('div', {
    className: "enquiry-modal__overlay",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-title"
  },
    React.createElement('div', {
      className: "enquiry-modal__backdrop",
      onClick: handleClose,
      "aria-hidden": "true"
    }),
    React.createElement('div', { className: "enquiry-modal__container" },
      React.createElement('button', {
        onClick: handleClose,
        className: "enquiry-modal__close",
        "aria-label": "Close modal"
      },
        React.createElement(X, { size: 24 })
      ),
      React.createElement('div', { className: "enquiry-modal__body" },
        !isSubmitted ? renderForm() : renderSuccess()
      )
    )
  );
}