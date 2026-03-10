# Login/out Block

**Type:** Block  
**Category:** Theme  
**Status:** Complete  
**Last Updated:** 2026-02-03

---

## 📋 Overview

The Login/out block displays a login link when the user is logged out, and a logout link when the user is logged in. It can also include the login form inline.

---

## 🎯 Purpose

Use the Login/out block to:
- Provide authentication access.
- Create user-specific navigation.

---

## 📐 Structure

```
Login/out (div/a)
└── Link (a) or Form (form)
```

---

## 💻 Implementation

### **Props/Parameters**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `displayLoginAsForm` | `boolean` | No | `false` | Show form instead of link |
| `redirectToCurrent` | `boolean` | No | `true` | Redirect back after action |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { LoginOut } from '@/components/blocks/theme/LoginOut';

<LoginOut displayLoginAsForm={false} redirectToCurrent={true} />
```

---

## 🎨 Styling

### **WordPress Classes**

```css
.wp-block-loginout {
  margin-bottom: var(--wp--preset--spacing--20);
}

.wp-block-loginout input {
  /* Form styling if form is shown */
  margin-bottom: var(--wp--preset--spacing--10);
  border: 1px solid var(--wp--preset--color--border);
  padding: var(--wp--preset--spacing--10);
}

.wp-block-loginout label {
  display: block;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--10`
- `--wp--preset--spacing--20`
- `--wp--preset--color--border`

---

## ♿ Accessibility

- **Labels:** Form inputs must have labels.
- **Focus:** Ensure focus management if showing/hiding forms.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| All | Standard link or form behavior. |

---

## 🌓 Dark Mode

- **Form:** Inputs adapt to dark mode.
- **Links:** Link color adapts.

---

## 🔗 WordPress Mapping

**Maps to:** `core/loginout`

---

## ✅ Best Practices

- ✅ **DO** place in the utility navigation or footer.

---

## ❌ Common Mistakes

- ❌ **DON'T** put the full form in the main header (use a link/modal).

---

## 📚 Related Documentation

- [Navigation Block](./navigation.md)

---

## 🔄 Changelog

### v1.0 - 2026-02-03
- Initial documentation
