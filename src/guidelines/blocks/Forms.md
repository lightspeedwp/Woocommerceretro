# Block System: Forms

**Type:** Block Category  
**Last Updated:** 2026-02-22

## Overview
The Forms system provides a comprehensive set of input controls that adhere to the WordPress Admin design language while maintaining modern accessibility standards.

## Components

### Input
Standard text input field.
```tsx
import { Input } from "@/components/blocks/forms/Input";
<Input placeholder="Enter text..." />
```

### Checkbox & RadioGroup
Selection controls.
```tsx
import { Checkbox } from "@/components/blocks/forms/Checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/blocks/forms/RadioGroup";
```

### Select
Dropdown menu (Radix UI based).
```tsx
import { Select, SelectItem } from "@/components/blocks/forms/Select";
```

### Switch
Toggle switch.
```tsx
import { Switch } from "@/components/blocks/forms/Switch";
```

## Styling
All form elements use `.wp-*` classes defined in `src/styles/blocks/forms/`.
- `.wp-input`
- `.wp-checkbox`
- `.wp-radio-group`
- `.wp-switch`
- `.wp-label`

## CSS Variables
- `--input-background`
- `--input-border`
- `--ring` (Focus state)

## Changelog

### v1.1 - 2026-02-22
- Renamed from `forms.md` to `Forms.md` (naming convention enforcement)
