# Block System: Feedback

**Type:** Block Category  
**Last Updated:** 2026-02-22

## Overview
Feedback components communicate status, loading states, and messages to the user.

## Components

### Alert
Callout messages for warnings, errors, or info.
```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/blocks/feedback/Alert";

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

### Toast
Transient notifications (wrapper around Sonner).
```tsx
import { toast } from "sonner";
// Use standard Sonner API
```

### Skeleton
Loading placeholders.
```tsx
import { Skeleton } from "@/components/blocks/feedback/Skeleton";
<Skeleton className="wp-block-skeleton" />
```

### Progress
Progress bar.
```tsx
import { Progress } from "@/components/blocks/feedback/Progress";
<Progress value={50} />
```

## Styling
Defined in `src/styles/blocks/feedback/`.
- `.wp-block-alert`
- `.wp-block-skeleton`
- `.wp-block-progress`

## Changelog

### v1.1 - 2026-02-22
- Renamed from `feedback.md` to `Feedback.md` (naming convention enforcement)
