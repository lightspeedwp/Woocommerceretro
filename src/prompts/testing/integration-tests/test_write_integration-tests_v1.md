# Write Integration Tests

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Testing  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Integration Test Generation |
| **Target** | [Feature].integration.test.tsx |
| **Complexity** | Medium |
| **Estimated Time** | 60 minutes |
| **Prerequisites** | Components exist, testing.md guideline |
| **Output Files** | [Feature].integration.test.tsx |

---

## 🎯 Objective

Generate comprehensive integration tests for multi-component workflows using Jest and React Testing Library, testing component interactions, state management, routing, and user flows.

### What This Prompt Does:
- ✅ Creates integration test file
- ✅ Tests component interactions
- ✅ Tests context/state management
- ✅ Tests routing and navigation
- ✅ Tests complete user workflows
- ✅ Achieves ≥70% integration coverage

### What This Prompt Does NOT Do:
- ❌ Test individual components (use unit tests)
- ❌ Test API endpoints (use E2E tests)
- ❌ Test visual regression
- ❌ Test performance

---

## 📚 Context & Background

### Integration Testing Scope:
- **Unit Tests:** Single component, isolated
- **Integration Tests:** Multiple components, workflows
- **E2E Tests:** Full application, real backend

### Project Testing Setup:
- **Framework:** Jest + React Testing Library
- **Location:** `/tests/integration/` directory
- **Coverage Target:** ≥70% for workflows
- **Standards:** See `/guidelines/testing.md`

---

## 📋 Requirements

### Test Coverage Requirements:
1. **User Workflows** - Complete user journeys (browse → cart → checkout)
2. **Component Interactions** - Parent-child communication
3. **Context Usage** - State management across components
4. **Routing** - Navigation between pages
5. **Form Submissions** - Multi-step forms
6. **Error Handling** - Error states and recovery

### Technical Requirements:
1. Use Jest + React Testing Library
2. Mock external dependencies (APIs, routing)
3. Test realistic user scenarios
4. Clean up after tests
5. Use `waitFor` for async operations
6. ≥70% workflow coverage

---

## 🔧 Implementation Instructions

### Step 1: Identify Workflow

**Action:** Define the user workflow to test

**Example Workflows:**
- Add to cart workflow
- Checkout workflow
- Product search workflow
- User login workflow
- Filter products workflow

**Template:**
```typescript
/**
 * Integration Test: Add to Cart Workflow
 * 
 * User Journey:
 * 1. Browse products on shop page
 * 2. Click product card
 * 3. View product details
 * 4. Add product to cart
 * 5. View cart with added item
 * 6. See updated cart count in header
 */
```

---

### Step 2: Create Test File

**Action:** Create `/tests/integration/[Feature].integration.test.tsx`

**Template:**
```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { App } from '@/App';

// Helper to render with all providers
const renderApp = () => {
  return render(
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  );
};

describe('Add to Cart Integration', () => {
  it('completes add to cart workflow', async () => {
    renderApp();

    // Step 1: Navigate to shop
    const shopLink = screen.getByText('Shop');
    fireEvent.click(shopLink);

    // Step 2: Find and click product
    await waitFor(() => {
      expect(screen.getByText('Product Name')).toBeInTheDocument();
    });
    
    const productCard = screen.getByText('Product Name');
    fireEvent.click(productCard);

    // Step 3: Add to cart
    await waitFor(() => {
      expect(screen.getByText('Add to Cart')).toBeInTheDocument();
    });
    
    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);

    // Step 4: Verify cart count updated
    await waitFor(() => {
      expect(screen.getByLabelText(/Shopping cart with 1 item/)).toBeInTheDocument();
    });

    // Step 5: Navigate to cart
    const cartLink = screen.getByLabelText(/Shopping cart/);
    fireEvent.click(cartLink);

    // Step 6: Verify product in cart
    await waitFor(() => {
      expect(screen.getByText('Product Name')).toBeInTheDocument();
      expect(screen.getByText('Quantity: 1')).toBeInTheDocument();
    });
  });
});
```

---

### Step 3: Write Workflow Tests

**Action:** Test complete user journeys

**Examples:**

#### **Checkout Flow:**
```tsx
describe('Checkout Integration', () => {
  it('completes checkout from cart to confirmation', async () => {
    // Setup: Add items to cart
    const { container } = renderApp();
    
    // Add product to cart
    // ... (add to cart steps)

    // Navigate to checkout
    const checkoutButton = await screen.findByText('Proceed to Checkout');
    fireEvent.click(checkoutButton);

    // Fill shipping form
    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Full Name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('Address'), {
      target: { value: '123 Main St' },
    });

    // Continue to payment
    const continueButton = screen.getByText('Continue to Payment');
    fireEvent.click(continueButton);

    // Fill payment form
    await waitFor(() => {
      expect(screen.getByLabelText('Card Number')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText('Card Number'), {
      target: { value: '4242424242424242' },
    });

    // Submit order
    const placeOrderButton = screen.getByText('Place Order');
    fireEvent.click(placeOrderButton);

    // Verify confirmation
    await waitFor(() => {
      expect(screen.getByText(/Order Confirmed/)).toBeInTheDocument();
    });
  });
});
```

#### **Product Filter Workflow:**
```tsx
describe('Product Filter Integration', () => {
  it('filters products by category and price', async () => {
    renderApp();

    // Navigate to shop
    fireEvent.click(screen.getByText('Shop'));

    // Wait for products to load
    await waitFor(() => {
      expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
    });

    const initialProductCount = screen.getAllByRole('article').length;

    // Apply category filter
    const categoryCheckbox = screen.getByLabelText('Electronics');
    fireEvent.click(categoryCheckbox);

    // Verify filtered results
    await waitFor(() => {
      const filteredCount = screen.getAllByRole('article').length;
      expect(filteredCount).toBeLessThan(initialProductCount);
    });

    // Apply price filter
    const priceSlider = screen.getByLabelText('Maximum Price');
    fireEvent.change(priceSlider, { target: { value: '50' } });

    // Verify further filtering
    await waitFor(() => {
      const products = screen.getAllByRole('article');
      products.forEach(product => {
        const priceText = product.querySelector('.price')?.textContent;
        expect(priceText).toBeDefined();
      });
    });
  });
});
```

---

### Step 4: Test Context Integration

**Action:** Test state management across components

**Example:**
```tsx
describe('Cart Context Integration', () => {
  it('updates cart state across multiple components', async () => {
    renderApp();

    // Add item from product page
    fireEvent.click(screen.getByText('Shop'));
    
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Add to Cart'));

    // Verify header cart count
    await waitFor(() => {
      expect(screen.getByLabelText(/1 item/)).toBeInTheDocument();
    });

    // Verify mini cart drawer
    fireEvent.click(screen.getByLabelText(/Shopping cart/));
    
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    // Remove from mini cart
    fireEvent.click(screen.getByLabelText('Remove Product 1'));

    // Verify header cart count updated
    await waitFor(() => {
      expect(screen.getByLabelText(/0 items/)).toBeInTheDocument();
    });
  });
});
```

---

### Step 5: Test Error Scenarios

**Action:** Test error handling and recovery

**Example:**
```tsx
describe('Error Handling Integration', () => {
  it('handles form validation errors', async () => {
    renderApp();

    // Navigate to checkout
    fireEvent.click(screen.getByText('Checkout'));

    // Submit without filling required fields
    const submitButton = screen.getByText('Continue');
    fireEvent.click(submitButton);

    // Verify error messages
    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });

    // Fill one field
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(submitButton);

    // Verify email validation
    await waitFor(() => {
      expect(screen.getByText('Invalid email format')).toBeInTheDocument();
    });
  });
});
```

---

### Step 6: Mock External Dependencies

**Action:** Mock APIs, routing, external services

**Example:**
```tsx
// Mock API calls
jest.mock('@/services/api', () => ({
  fetchProducts: jest.fn(() => 
    Promise.resolve([
      { id: 1, name: 'Product 1', price: 29.99 },
      { id: 2, name: 'Product 2', price: 49.99 },
    ])
  ),
  submitOrder: jest.fn(() => 
    Promise.resolve({ orderId: '12345', status: 'confirmed' })
  ),
}));

// Mock router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));
```

---

## ✅ Verification Checklist

### Test Quality:
- [ ] Tests follow user journey pattern
- [ ] All async operations use `waitFor`
- [ ] Tests clean up after themselves
- [ ] Mock data is realistic
- [ ] Error scenarios tested

### Coverage:
- [ ] Complete workflows tested
- [ ] Component interactions verified
- [ ] Context state management tested
- [ ] Routing tested
- [ ] Error handling tested

### Best Practices:
- [ ] Use semantic queries (getByRole, getByLabelText)
- [ ] Avoid implementation details
- [ ] Test user-visible behavior
- [ ] One workflow per test
- [ ] Clear test descriptions

---

## 🧪 Testing Commands

```bash
# Run integration tests
npm test -- --testPathPattern=integration

# Run specific integration test
npm test AddToCart.integration.test.tsx

# Run with coverage
npm test -- --coverage --testPathPattern=integration

# Watch mode
npm test -- --watch --testPathPattern=integration
```

---

## 📖 Related Documentation

- `/guidelines/testing.md`
- `/guidelines/TESTING_EXPANSION_GUIDE.md`
- `/tests/README.md`

---

## 📝 Notes & Tips

### Best Practices:

💡 **Test user flows, not implementation** - Test what users do, not how code works

💡 **Keep tests focused** - One workflow per test file

💡 **Use realistic data** - Mock data should match production data

💡 **Clean up properly** - Reset state between tests

### Common Mistakes:

⚠️ **Testing too much in one test** - Keep workflows focused

⚠️ **Not waiting for async** - Always use `waitFor` for async operations

⚠️ **Over-mocking** - Only mock external dependencies

⚠️ **Implementation details** - Test user behavior, not internals

---

**Status:** ✅ Active  
**Created:** 2026-01-10
