/**
 * ContactFormSection.tsx - Contact Pattern
 * 
 * Two-column layout with contact form and information.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as InputModule from '../blocks/forms/Input';
import * as TextareaModule from '../blocks/forms/Textarea';
import * as LabelModule from '../blocks/forms/Label';
import * as TypographyModule from '../common/Typography';
import { Envelope as Mail, Phone, MapPin } from '@phosphor-icons/react';

var useState = React.useState;
var Button = ButtonsModule.Button;
var Input = InputModule.Input;
var Textarea = TextareaModule.Textarea;
var Label = LabelModule.Label;
var Typography = TypographyModule.Typography;

export function ContactFormSection(props) {
  var heading = props.heading === undefined ? 'Get in Touch' : props.heading;
  var description = props.description === undefined ? 'Have a question about an order, a product, or our policies? Our team is ready to assist you.' : props.description;
  var contactInfo = props.contactInfo;
  var onSubmit = props.onSubmit;
  var className = props.className === undefined ? '' : props.className;

  var stateArray1 = useState({ firstName: '', lastName: '', email: '', message: '' });
  var formData = stateArray1[0];
  var setFormData = stateArray1[1];
  
  var stateArray2 = useState('idle');
  var status = stateArray2[0];
  var setStatus = stateArray2[1];

  var handleSubmit = function(e) {
    e.preventDefault();
    setStatus('loading');
    
    if (onSubmit) {
      onSubmit(formData)
        .then(function() {
          setStatus('success');
          setFormData({ firstName: '', lastName: '', email: '', message: '' });
        })
        .catch(function() {
          setStatus('error');
        });
    } else {
      setTimeout(function() {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }, 1000);
    }
  };

  var handleChange = function(e) {
    var name = e.target.name;
    var value = e.target.value;
    var newData = Object.assign({}, formData);
    newData[name] = value;
    setFormData(newData);
  };

  var infoColumnChildren = [];
  if (heading) {
    infoColumnChildren.push(React.createElement(Typography, { 
      variant: "h2", 
      className: "wp-contact-section-title",
      key: "h"
    }, heading));
  }
  if (description) {
    infoColumnChildren.push(React.createElement(Typography, { 
      variant: "body", 
      className: "wp-contact-section-description",
      key: "d"
    }, description));
  }

  var methods = [];
  if (contactInfo) {
    if (contactInfo.email) {
      methods.push(React.createElement('div', { className: "wp-contact-method", key: "email" },
        React.createElement('div', { className: "wp-contact-method-icon" }, React.createElement(Mail, { size: 20 })),
        React.createElement('div', null, [
          React.createElement(Typography, { variant: "h3", className: "wp-contact-method-title" }, 'Email'),
          React.createElement(Typography, { variant: "body", className: "wp-contact-method-description" }, 'Our friendly team is here to help.'),
          React.createElement('a', { href: "mailto:" + contactInfo.email, className: "wp-contact-method-link" }, 
            React.createElement('strong', null, contactInfo.email)
          )
        ])
      ));
    }
    if (contactInfo.phone) {
      methods.push(React.createElement('div', { className: "wp-contact-method", key: "phone" },
        React.createElement('div', { className: "wp-contact-method-icon" }, React.createElement(Phone, { size: 20 })),
        React.createElement('div', null, [
          React.createElement(Typography, { variant: "h3", className: "wp-contact-method-title" }, 'Phone'),
          React.createElement(Typography, { variant: "body", className: "wp-contact-method-description" }, 'Mon-Fri from 9am to 5pm.'),
          React.createElement('a', { href: "tel:" + contactInfo.phone, className: "wp-contact-method-link" }, 
            React.createElement('strong', null, contactInfo.phone)
          )
        ])
      ));
    }
    if (contactInfo.address) {
      methods.push(React.createElement('div', { className: "wp-contact-method", key: "address" },
        React.createElement('div', { className: "wp-contact-method-icon" }, React.createElement(MapPin, { size: 20 })),
        React.createElement('div', null, [
          React.createElement(Typography, { variant: "h3", className: "wp-contact-method-title" }, 'Office'),
          React.createElement(Typography, { variant: "body", className: "wp-contact-method-description" }, 'Come say hello at our office headquarters.'),
          React.createElement(Typography, { variant: "body", className: "wp-contact-method-address" }, contactInfo.address)
        ])
      ));
    }
  }

  methods.push(React.createElement('div', { className: "wp-contact-method", key: "response" },
    React.createElement('div', { className: "wp-contact-method-icon" }, React.createElement(Mail, { size: 20 })),
    React.createElement('div', null, [
      React.createElement(Typography, { variant: "h3", className: "wp-contact-method-title" }, 'Response Time'),
      React.createElement(Typography, { variant: "body", className: "wp-contact-method-description" }, 'We typically reply to all messages within 24 hours.')
    ])
  ));

  infoColumnChildren.push(React.createElement('div', { className: "wp-contact-methods" }, methods));
  var infoColumn = React.createElement('div', { className: "wp-contact-info-column" }, infoColumnChildren);

  // Form Fields
  var firstNameField = React.createElement('div', { className: "wp-contact-form-field" }, [
    React.createElement(Label, { htmlFor: "firstName", className: "wp-contact-form-label" }, React.createElement('small', null, React.createElement('strong', null, 'First Name'))),
    React.createElement(Input, {
      id: "firstName", type: "text", placeholder: "John", className: "wp-contact-form-input",
      name: "firstName", value: formData.firstName, onChange: handleChange, required: true
    })
  ]);

  var lastNameField = React.createElement('div', { className: "wp-contact-form-field" }, [
    React.createElement(Label, { htmlFor: "lastName", className: "wp-contact-form-label" }, React.createElement('small', null, React.createElement('strong', null, 'Last Name'))),
    React.createElement(Input, {
      id: "lastName", type: "text", placeholder: "Doe", className: "wp-contact-form-input",
      name: "lastName", value: formData.lastName, onChange: handleChange, required: true
    })
  ]);

  var emailField = React.createElement('div', { className: "wp-contact-form-field" }, [
    React.createElement(Label, { htmlFor: "email", className: "wp-contact-form-label" }, React.createElement('small', null, React.createElement('strong', null, 'Email'))),
    React.createElement(Input, {
      id: "email", type: "email", placeholder: "john@example.com", className: "wp-contact-form-input",
      name: "email", value: formData.email, onChange: handleChange, required: true
    })
  ]);

  var messageField = React.createElement('div', { className: "wp-contact-form-field" }, [
    React.createElement(Label, { htmlFor: "message", className: "wp-contact-form-label" }, React.createElement('small', null, React.createElement('strong', null, 'Message'))),
    React.createElement(Textarea, {
      id: "message", rows: 5, placeholder: "How can we help you?", className: "wp-contact-form-textarea",
      name: "message", value: formData.message, onChange: handleChange, required: true
    })
  ]);

  var submitButton = React.createElement(Button, {
    type: "submit", variant: "primary", size: "lg", className: "wp-contact-form-submit",
    disabled: status === 'loading' || status === 'success'
  }, status === 'loading' ? 'Sending...' : 'Send Message');

  var statusMessages = [];
  if (status === 'success') {
    statusMessages.push(React.createElement('div', { className: "wp-contact-form__message wp-contact-form__message--success", key: "s" }, [
      React.createElement(Mail, { size: 20 }),
      React.createElement('span', null, 'Message sent successfully!')
    ]));
  }
  if (status === 'error') {
    statusMessages.push(React.createElement('div', { className: "wp-contact-form__message wp-contact-form__message--error", key: "e" }, [
      React.createElement(Mail, { size: 20 }),
      React.createElement('span', null, 'Failed to send message. Please try again.')
    ]));
  }

  var formElement = React.createElement('form', { className: "wp-contact-form", onSubmit: handleSubmit }, [
    React.createElement('div', { className: "wp-contact-form-row" }, [firstNameField, lastNameField]),
    emailField,
    messageField,
    submitButton,
    statusMessages
  ]);

  var formCard = React.createElement('div', { className: "wp-contact-form-card" }, formElement);

  return React.createElement('div', { className: "wp-contact-section " + className },
    React.createElement('div', { className: "wp-contact-layout" }, [infoColumn, formCard])
  );
}

ContactFormSection.displayName = 'ContactFormSection';