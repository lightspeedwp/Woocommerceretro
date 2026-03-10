# EnquiryModal Block

**Component Type:** Block (Functional Unit)  
**WordPress Mapping:** Custom Modal Block with Form Integration  
**File:** `/components/blocks/EnquiryModal.tsx`  
**Version:** 1.0  
**Last Updated:** December 27, 2024

---

## Overview

The `EnquiryModal` is a modal popup component with an integrated enquiry form used for lead generation across archive templates. It provides form validation, loading states, success confirmation, and backend integration.

---

## Purpose

- **Lead Capture:** Collect visitor information (name, email, message)
- **Conversion:** Convert archive visitors into leads
- **User Feedback:** Clear success/error messaging
- **Accessibility:** Full keyboard navigation and screen reader support
- **Analytics:** Track form submissions and conversions

---

## Usage

```tsx
import { EnquiryModal } from '../blocks/EnquiryModal';

const [isModalOpen, setIsModalOpen] = useState(false);

<button onClick={() => setIsModalOpen(true)}>
  Get Help
</button>

<EnquiryModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Let Us Help You Find It"
  description="Share details and we'll respond within 24 hours."
  successMessage="Thanks! We'll be in touch soon."
/>
```

---

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | `boolean` | ✅ Yes | Controls modal visibility |
| `onClose` | `() => void` | ✅ Yes | Callback when modal should close |
| `title` | `string` | ✅ Yes | Modal headline |
| `description` | `string` | ✅ Yes | Supporting text explaining the form |
| `successMessage` | `string` | ✅ Yes | Message shown after successful submission |

---

## Form Fields

### Name Field
- **Type:** Text input
- **Validation:** Required, non-empty
- **Error:** "Name is required"
- **Placeholder:** "John Smith"

### Email Field
- **Type:** Email input
- **Validation:** Required, valid email format
- **Error:** "Email is required" / "Please enter a valid email"
- **Placeholder:** "john@example.com"
- **Regex:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Message Field
- **Type:** Textarea (4 rows)
- **Validation:** Required, non-empty
- **Error:** "Please tell us how we can help"
- **Placeholder:** "Tell us what you're looking for..."

---

## States

### 1. Default State
- Form is empty
- All fields enabled
- Submit button: "Send Message"

### 2. Validation Error State
- Red border on invalid fields
- Error message below field
- Submit button enabled

### 3. Submitting State
- All fields disabled
- Submit button shows spinner
- Button text: "Sending..."

### 4. Success State
- Form hidden
- Success icon (green checkmark)
- Success message displayed
- "Close" button shown
- Auto-closes after 3 seconds

---

## User Flow

```
1. User clicks CTA button
   ↓
2. Modal opens with form
   ↓
3. User fills out fields
   ↓
4. User clicks "Send Message"
   ↓
5. Validation runs
   ├─ Invalid → Show errors
   └─ Valid → Submit to backend
       ↓
   6. Loading state (spinner)
       ↓
   7. Success state
       ↓
   8. Auto-close after 3 seconds
```

---

## Backend Integration

### Current: Mock Submission

```typescript
import { submitFormMock } from '../../services/formSubmission';

const result = await submitFormMock({
  name: formData.name,
  email: formData.email,
  message: formData.message,
  formType: 'enquiry'
});
```

**Mock behavior:**
- 1.5 second delay (simulates network)
- 10% chance of random failure (for testing error handling)
- Returns success response

### Production: Real Submission

```typescript
import { submitForm } from '../../services/formSubmission';

const result = await submitForm({
  name: formData.name,
  email: formData.email,
  message: formData.message,
  formType: 'enquiry'
});

if (!result.success) {
  // Handle error
  setErrors({ submit: result.message });
}
```

**See:** `/services/formSubmission.ts` for API configuration

---

## Form Submission Service

### API Configuration

```typescript
// services/formSubmission.ts
const API_CONFIG = {
  baseUrl: 'https://api.example.com',
  enquiryEndpoint: '/api/enquiry',
  timeout: 10000,
  retryAttempts: 2,
  retryDelay: 1000,
};
```

### Request Payload

```json
POST /api/enquiry
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I need help finding a product",
  "formType": "enquiry",
  "sourceUrl": "https://yoursite.com/shop",
  "utmParams": {
    "source": "google",
    "medium": "cpc",
    "campaign": "summer-sale"
  }
}
```

### Expected Response

```json
{
  "success": true,
  "message": "Form submitted successfully",
  "id": "sub_123456",
  "submissionId": "sub_123456"
}
```

---

## Validation Rules

### Client-Side Validation

```typescript
// Name validation
if (!formData.name.trim()) {
  errors.name = 'Name is required';
}

// Email validation
if (!formData.email.trim()) {
  errors.email = 'Email is required';
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  errors.email = 'Please enter a valid email';
}

// Message validation
if (!formData.message.trim()) {
  errors.message = 'Please tell us how we can help';
}
```

### Server-Side Validation

**CRITICAL:** Always validate on backend:
- Sanitize all inputs
- Verify email format
- Check for spam patterns
- Rate limit submissions
- Validate against XSS/injection attacks

---

## Keyboard Accessibility

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **ESC** | Close modal |
| **TAB** | Navigate between fields |
| **SHIFT + TAB** | Navigate backwards |
| **ENTER** | Submit form (when button focused) |

### Focus Management

1. **Modal Opens:** Focus trapped inside modal
2. **First Focus:** Modal close button
3. **Tab Order:** Close → Name → Email → Message → Submit
4. **Modal Closes:** Focus returns to trigger button

---

## ARIA Attributes

```tsx
// Modal container
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>

// Modal title
<h2 id="modal-title">
  {title}
</h2>

// Close button
<button aria-label="Close modal">
  <X size={24} />
</button>

// Form fields with proper labels
<label htmlFor="name">Your Name *</label>
<input id="name" type="text" />
```

---

## Dark Mode Support

All elements fully support dark mode:

### Background Colors
```tsx
// Modal background
className="bg-white dark:bg-gray-900"

// Backdrop
className="bg-black/60 backdrop-blur-sm"

// Form inputs
className="bg-white dark:bg-gray-800"
```

### Text Colors
```tsx
// Headings
className="text-gray-900 dark:text-gray-50"

// Body text
className="text-gray-600 dark:text-gray-400"

// Error text
className="text-red-600 dark:text-red-400"
```

### Borders
```tsx
// Modal border
className="border border-gray-200 dark:border-gray-700"

// Input borders
className="border-gray-300 dark:border-gray-600"

// Error borders
className="border-red-500 dark:border-red-500"
```

---

## Error Handling

### Validation Errors

```tsx
// Display error below field
{errors.name && (
  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
    {errors.name}
  </p>
)}
```

### Submission Errors

```typescript
const result = await submitForm(data);

if (!result.success) {
  // Show error to user
  alert(result.message);
  // Or set in state
  setErrors({ submit: result.message });
}
```

### Network Errors

The submission service handles:
- ✅ Request timeouts (10s)
- ✅ Retry logic (2 attempts)
- ✅ Server errors (500)
- ✅ Client errors (400)
- ✅ Network failures

---

## Loading States

### Submit Button Loading

```tsx
<Button
  type="submit"
  disabled={isSubmitting}
  className="flex items-center justify-center gap-2"
>
  {isSubmitting ? (
    <>
      <svg className="animate-spin h-5 w-5">
        {/* Spinner SVG */}
      </svg>
      Sending...
    </>
  ) : (
    <>
      <Send size={20} />
      Send Message
    </>
  )}
</Button>
```

### Form Disabled State

```tsx
<input
  disabled={isSubmitting}
  className={`... ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
/>
```

---

## Success State

### Visual Display

```tsx
<div className="text-center py-8">
  {/* Success icon */}
  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6">
    <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
  </div>
  
  {/* Success message */}
  <h2 className="text-gray-900 dark:text-gray-50 mb-3">
    Message Sent!
  </h2>
  <p className="text-gray-600 dark:text-gray-400 mb-6">
    {successMessage}
  </p>
  
  {/* Close button */}
  <Button variant="outline" onClick={handleClose}>
    Close
  </Button>
</div>
```

### Auto-Close Timer

```typescript
// Close modal after 3 seconds
setTimeout(() => {
  handleClose();
}, 3000);
```

---

## Body Scroll Lock

Prevents background scrolling when modal is open:

```typescript
React.useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isOpen]);
```

---

## Analytics Tracking

### Automatic Tracking

When integrated with `ArchiveCTA`, automatically tracks:

1. **Modal Open:** When modal becomes visible
2. **Form Start:** When user focuses first field
3. **Form Submit:** When user clicks submit
4. **Form Success:** When submission succeeds
5. **Form Error:** When submission fails

### Custom Tracking

```typescript
// Track modal open
if (isOpen) {
  gtag('event', 'enquiry_modal_open', {
    modal_title: title
  });
}

// Track form submission
const result = await submitForm(data);
if (result.success) {
  gtag('event', 'enquiry_form_submit', {
    form_type: 'enquiry',
    source_url: window.location.href
  });
}
```

---

## Best Practices

### 1. Keep Forms Short

✅ **Good:** 3 fields (name, email, message)  
❌ **Bad:** 10+ fields (reduces conversions)

### 2. Clear Error Messages

✅ **Good:** "Please enter a valid email"  
❌ **Bad:** "Invalid input"

### 3. Immediate Feedback

✅ **Good:** Clear errors as user types  
❌ **Bad:** Show all errors on submit only

### 4. Helpful Placeholders

✅ **Good:** "john@example.com"  
❌ **Bad:** "Email address"

### 5. Success Confirmation

✅ **Good:** "Thanks! We'll respond within 24 hours."  
❌ **Bad:** "Form submitted"

---

## Related Components

- **ArchiveCTA:** `/components/patterns/ArchiveCTA.tsx` - Triggers modal
- **Button:** `/components/blocks/design/Button.tsx` - Submit button
- **Form Submission Service:** `/services/formSubmission.ts` - Backend integration

---

## Related Documentation

- **ArchiveCTA Pattern:** `/guidelines/patterns/ArchiveCTA.md`
- **Form Submission API:** `/services/formSubmission.ts`
- **A/B Testing:** `/services/abTest.ts`

---

## Version History

**v1.0** - December 27, 2024
- Initial implementation
- 3-field form (name, email, message)
- Client-side validation
- Backend integration (mock + real)
- Success state with auto-close
- Full keyboard accessibility
- Dark mode support
- Analytics tracking ready
