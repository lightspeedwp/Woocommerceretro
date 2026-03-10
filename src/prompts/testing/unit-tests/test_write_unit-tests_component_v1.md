# Write Unit Tests for Component

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Testing  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Unit Test Generation |
| **Target** | [ComponentName].test.tsx |
| **Complexity** | Simple |
| **Estimated Time** | 30 minutes |
| **Prerequisites** | Component exists, testing.md guideline |
| **Output Files** | [ComponentName].test.tsx |

---

## 🎯 Objective

Generate comprehensive unit tests for a React component using Jest and React Testing Library, ensuring ≥80% code coverage and testing all critical functionality.

### What This Prompt Does:
- ✅ Creates complete Jest test file
- ✅ Tests all component render scenarios
- ✅ Tests user interactions
- ✅ Tests accessibility features
- ✅ Tests dark mode functionality
- ✅ Achieves ≥80% code coverage

### What This Prompt Does NOT Do:
- ❌ Test integration with other components
- ❌ Test API calls (use integration tests)
- ❌ Test routing (use integration tests)
- ❌ Test complex workflows

---

## 📚 Context & Background

### Project Testing Setup:
- **Framework:** Jest + React Testing Library
- **Location:** Same directory as component with `.test.tsx` suffix
- **Coverage Target:** ≥80% for all metrics
- **Standards:** See `/guidelines/testing.md`

### Related Guidelines:
- `/guidelines/testing.md` - Complete testing standards
- `/guidelines/TESTING_EXPANSION_GUIDE.md` - Testing expansion guide
- `/tests/README.md` - Test organization

---

## 📋 Requirements

### Test Coverage Requirements:
1. **Render Tests** - Component renders correctly
2. **Props Tests** - All props work as expected
3. **Interaction Tests** - User interactions trigger correct behavior
4. **Accessibility Tests** - ARIA labels, roles, keyboard navigation
5. **Edge Cases** - Empty states, error states, loading states
6. **Dark Mode** - Component works in dark mode

### Technical Requirements:
1. Use Jest + React Testing Library
2. Follow AAA pattern (Arrange, Act, Assert)
3. Use `screen` queries (not container queries)
4. Mock external dependencies
5. Clear test descriptions
6. ≥80% code coverage

---

## 🔧 Implementation Instructions

### Step 1: Analyze Component

**Action:** Review the component to test

**Checklist:**
- [ ] Identify all props and their types
- [ ] List all user interactions (clicks, inputs, etc.)
- [ ] Note accessibility features (ARIA, roles)
- [ ] Identify edge cases (empty, error, loading)
- [ ] Check for dark mode variants

---

### Step 2: Create Test File

**Action:** Create `[ComponentName].test.tsx` next to component

**Template:**
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { [ComponentName] } from './[ComponentName]';

// Mock data
const mockData = {
  // Add relevant mock data
};

describe('[ComponentName]', () => {
  // Basic render test
  it('renders without crashing', () => {
    render(<[ComponentName] {...mockData} />);
    expect(screen.getByRole('...')).toBeInTheDocument();
  });

  // Add more tests below...
});
```

---

### Step 3: Write Render Tests

**Action:** Test component renders correctly

**Examples:**
```tsx
describe('Rendering', () => {
  it('renders with required props', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  it('renders with all optional props', () => {
    render(
      <ProductCard 
        product={mockProduct}
        className="custom-class"
        featured={true}
      />
    );
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ProductCard product={mockProduct} className="test-class" />
    );
    expect(container.firstChild).toHaveClass('test-class');
  });
});
```

---

### Step 4: Write Interaction Tests

**Action:** Test user interactions

**Examples:**
```tsx
describe('Interactions', () => {
  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('updates input value on change', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledWith('test');
  });
});
```

---

### Step 5: Write Accessibility Tests

**Action:** Test accessibility features

**Examples:**
```tsx
describe('Accessibility', () => {
  it('has proper ARIA labels', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByRole('link')).toHaveAttribute('aria-label');
  });

  it('supports keyboard navigation', () => {
    render(<Button onClick={jest.fn()}>Click</Button>);
    const button = screen.getByRole('button');
    
    button.focus();
    expect(button).toHaveFocus();
  });

  it('has proper heading hierarchy', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });
});
```

---

### Step 6: Write Edge Case Tests

**Action:** Test edge cases

**Examples:**
```tsx
describe('Edge Cases', () => {
  it('renders empty state correctly', () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText(/no products/i)).toBeInTheDocument();
  });

  it('handles missing optional props', () => {
    render(<ProductCard product={{ ...mockProduct, salePrice: undefined }} />);
    expect(screen.queryByText(/sale/i)).not.toBeInTheDocument();
  });

  it('displays error state when error prop is true', () => {
    render(<Form error={true} errorMessage="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });
});
```

---

### Step 7: Run Tests and Check Coverage

**Action:** Verify tests pass and coverage meets requirements

**Commands:**
```bash
# Run tests
npm test [ComponentName].test.tsx

# Run with coverage
npm test -- --coverage [ComponentName].test.tsx

# Expected output:
# Statements: ≥80%
# Branches: ≥80%
# Functions: ≥80%
# Lines: ≥80%
```

---

## ✅ Verification Checklist

### Test Quality:
- [ ] All tests have descriptive names
- [ ] Tests follow AAA pattern (Arrange, Act, Assert)
- [ ] Tests are independent (no shared state)
- [ ] Mock data is realistic
- [ ] No console errors/warnings

### Coverage:
- [ ] Statements: ≥80%
- [ ] Branches: ≥80%
- [ ] Functions: ≥80%
- [ ] Lines: ≥80%

### Test Types:
- [ ] Basic render tests
- [ ] Props validation tests
- [ ] Interaction tests
- [ ] Accessibility tests
- [ ] Edge case tests
- [ ] Conditional rendering tests

### Best Practices:
- [ ] Use `screen` queries (preferred)
- [ ] Avoid `container` queries
- [ ] Use semantic queries (getByRole, getByLabelText)
- [ ] Clean up after tests
- [ ] No hardcoded waits (use waitFor)

---

## 🧪 Testing Commands

```bash
# Run specific test file
npm test ProductCard.test.tsx

# Run in watch mode
npm test -- --watch

# Run with coverage
npm test -- --coverage

# Run all tests
npm test

# Update snapshots (if using)
npm test -- -u
```

---

## 📖 Related Documentation

- `/guidelines/testing.md` - Complete testing standards
- `/guidelines/TESTING_EXPANSION_GUIDE.md` - Testing guide
- `/tests/README.md` - Test organization

---

## 📝 Notes & Tips

### Best Practices:

💡 **Use semantic queries:** Prefer `getByRole`, `getByLabelText` over `getByTestId`

💡 **Test user behavior:** Test what users see and do, not implementation details

💡 **Avoid testing internals:** Don't test state or private methods directly

💡 **Keep tests simple:** One assertion per test when possible

💡 **Use describe blocks:** Group related tests logically

### Common Mistakes:

⚠️ **Testing implementation details** - Test behavior, not how it's implemented

⚠️ **Not cleaning up** - Always clean up after tests

⚠️ **Hardcoded waits** - Use `waitFor` instead of `setTimeout`

⚠️ **Poor test names** - Be descriptive: "renders sale badge when product is on sale"

---

**Status:** ✅ Active  
**Created:** 2026-01-10
