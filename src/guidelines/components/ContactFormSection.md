# ContactFormSection Pattern

**Version:** 1.0  
**Type:** Pattern (Contact Form)  
**WordPress Mapping:** Contact Form Block  
**File:** `/components/patterns/ContactFormSection.tsx`

---

## Overview

The ContactFormSection pattern provides a comprehensive contact form with validation, spam protection, and success/error handling for customer inquiries.

**Purpose:**
- Collect customer inquiries
- Validate form inputs
- Prevent spam submissions
- Provide submission feedback
- Route to appropriate department

**WordPress Equivalent:**
- Contact Form 7
- WPForms Block
- Jetpack Contact Form

---

## Component Structure

```
ContactFormSection (Pattern)
└── Form Container
    ├── Form Header (title, description)
    ├── Form Fields
    │   ├── Name Input
    │   ├── Email Input
    │   ├── Subject Select
    │   ├── Message Textarea
    │   └── Phone Input (optional)
    ├── Privacy Checkbox
    ├── Submit Button
    └── Status Message (success/error)
```

---

## Props Interface

```typescript
interface ContactFormSectionProps {
  /**
   * Form submission handler
   */
  onSubmit: (values: ContactFormValues) => Promise<void>;

  /**
   * Available inquiry subjects
   */
  subjects?: string[];

  /**
   * Show phone field
   * @default false
   */
  showPhone?: boolean;

  /**
   * Custom heading
   */
  heading?: string;

  /**
   * Custom description
   */
  description?: string;

  /**
   * Success message
   */
  successMessage?: string;

  /**
   * Enable CAPTCHA
   * @default true
   */
  enableCaptcha?: boolean;
}

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  privacyConsent: boolean;
}
```

---

## Usage Examples

### Example 1: Basic Contact Form

```tsx
import { ContactFormSection } from '@/components/patterns/ContactFormSection';

export function PageContact() {
  const handleSubmit = async (values: ContactFormValues) => {
    await sendContactEmail(values);
  };

  return (
    <Layout>
      <Container>
        <ContactFormSection
          heading="Get in Touch"
          description="We'd love to hear from you"
          onSubmit={handleSubmit}
        />
      </Container>
    </Layout>
  );
}
```

### Example 2: With Department Routing

```tsx
<ContactFormSection
  heading="Contact Us"
  subjects={[
    'General Inquiry',
    'Sales',
    'Technical Support',
    'Partnerships',
    'Press'
  ]}
  onSubmit={handleSubmit}
/>
```

### Example 3: With Phone Field

```tsx
<ContactFormSection
  heading="Request a Call"
  showPhone={true}
  subjects={['Product Demo', 'Quote Request', 'Consultation']}
  onSubmit={handleSubmit}
/>
```

---

## Features & Capabilities

### Form Validation
- Required field validation
- Email format validation
- Message length limits (min 10 chars)
- Phone number format (optional)

### Spam Protection
- CAPTCHA integration (reCAPTCHA v3)
- Honeypot fields
- Rate limiting
- Domain validation

### User Experience
- Real-time validation
- Clear error messages
- Success confirmation
- Auto-focus on first field

---

## WordPress FSE Mapping

```html
<!-- wp:wpforms/form-selector -->
<div class="wp-block-wpforms-form-selector">
  
  <form class="wpforms-form">
    
    <div class="wpforms-field">
      <label for="wpforms-name">Name *</label>
      <input type="text" id="wpforms-name" name="name" required />
    </div>
    
    <div class="wpforms-field">
      <label for="wpforms-email">Email *</label>
      <input type="email" id="wpforms-email" name="email" required />
    </div>
    
    <div class="wpforms-field">
      <label for="wpforms-subject">Subject *</label>
      <select id="wpforms-subject" name="subject" required>
        <option>General Inquiry</option>
        <option>Support</option>
      </select>
    </div>
    
    <div class="wpforms-field">
      <label for="wpforms-message">Message *</label>
      <textarea id="wpforms-message" name="message" rows="6" required></textarea>
    </div>
    
    <div class="wpforms-field">
      <label>
        <input type="checkbox" name="privacy" required />
        I agree to the privacy policy
      </label>
    </div>
    
    <button type="submit" class="wpforms-submit">Send Message</button>
    
  </form>
  
</div>
<!-- /wp:wpforms/form-selector -->
```

---

## Used In

### Templates
- **PageContact:** Contact page

### Patterns
- **SupportSection:** Help/support pages
- **FeedbackForm:** Customer feedback

---

## Styling & Design Tokens

```css
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.contact-field {
  margin-bottom: var(--spacing-md);
}

.contact-field label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-medium);
}

.contact-field input,
.contact-field select,
.contact-field textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.contact-field textarea {
  resize: vertical;
  min-height: 150px;
}

.contact-field.error input,
.contact-field.error textarea {
  border-color: var(--color-error);
}

.contact-submit {
  width: 100%;
  margin-top: var(--spacing-lg);
}
```

---

## Accessibility

```tsx
<form onSubmit={handleSubmit} aria-label="Contact form">
  <div className="contact-field">
    <label htmlFor="name">Name *</label>
    <input
      id="name"
      type="text"
      name="name"
      required
      aria-required="true"
      aria-describedby={errors.name ? 'name-error' : undefined}
    />
    {errors.name && (
      <span id="name-error" role="alert">
        {errors.name}
      </span>
    )}
  </div>
  
  {/* Other fields */}
  
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Sending...' : 'Send Message'}
  </button>
</form>
```

---

## Testing

```typescript
describe('ContactFormSection', () => {
  it('renders contact form', () => {
    render(<ContactFormSection onSubmit={vi.fn()} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<ContactFormSection onSubmit={vi.fn()} />);
    await userEvent.click(screen.getByRole('button', { name: /send/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  });

  it('validates email format', async () => {
    render(<ContactFormSection onSubmit={vi.fn()} />);
    const email = screen.getByLabelText(/email/i);
    await userEvent.type(email, 'invalid-email');
    await userEvent.tab();
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const onSubmit = vi.fn();
    render(<ContactFormSection onSubmit={onSubmit} />);
    
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message');
    await userEvent.click(screen.getByLabelText(/privacy/i));
    await userEvent.click(screen.getByRole('button', { name: /send/i }));
    
    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Test message',
    }));
  });

  it('shows success message after submission', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ContactFormSection onSubmit={onSubmit} />);
    
    await fillForm();
    await userEvent.click(screen.getByRole('button', { name: /send/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
  });
});
```

---

## Performance Considerations

### Form Optimization
- Debounce validation (300ms)
- Lazy load CAPTCHA
- Minimize re-renders

### Spam Prevention
```typescript
// Honeypot field (hidden from users)
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>

// Server-side validation
if (formData.website) {
  // Likely spam, reject
  return { error: 'Invalid submission' };
}
```

---

## Common Patterns

### Contact Page with Map
```tsx
<Section>
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
      <ContactFormSection onSubmit={handleSubmit} />
      <div>
        <h3>Visit Us</h3>
        <MapEmbed location={address} />
      </div>
    </div>
  </Container>
</Section>
```

### Modal Contact Form
```tsx
<Dialog>
  <ContactFormSection
    heading="Quick Question?"
    description="We'll get back to you within 24 hours"
    onSubmit={handleSubmit}
  />
</Dialog>
```

---

## Related Components

- **NewsletterSignup:** Email subscription form
- **FeedbackForm:** Customer feedback collection
- **SupportTicket:** Technical support form

---

## Best Practices

### Do's ✅
- ✅ Use clear field labels
- ✅ Validate in real-time
- ✅ Show submission progress
- ✅ Provide clear success message
- ✅ Include privacy checkbox

### Don'ts ❌
- ❌ Don't ask for unnecessary info
- ❌ Don't submit without validation
- ❌ Don't forget spam protection
- ❌ Don't hide error messages

---

## FAQ

### Q: How do I prevent spam?
**A:** Use CAPTCHA, honeypot fields, and server-side validation.

### Q: Should I require a phone number?
**A:** Make it optional unless essential for the inquiry type.

### Q: How long should I keep form submissions?
**A:** Follow GDPR guidelines - typically 30-90 days for inquiries.

---

## Version History

### Version 1.0 (December 2024)
- Initial implementation
- Form validation
- Spam protection
- Success/error handling

---

## See Also

- [NewsletterSignup Pattern](/guidelines/components/NewsletterSignup.md)
- [CheckoutFormSection Pattern](/guidelines/components/CheckoutFormSection.md)
- [Form Design Tokens](/guidelines/mobile/forms.md)
