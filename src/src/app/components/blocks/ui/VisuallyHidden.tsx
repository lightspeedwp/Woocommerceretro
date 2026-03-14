"use client";

import React from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import { cn } from "../../../utils/cn";

const VisuallyHiddenRoot = VisuallyHiddenPrimitive?.Root || "span";

/**
 * VisuallyHidden Component
 * Hides content visually while remaining accessible to screen readers.
 */
const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  { className?: string; children?: React.ReactNode; id?: string; style?: React.CSSProperties }
>(({ className, children, id, style }, ref) => (
  <VisuallyHiddenRoot id={id} style={style} ref={ref} className={cn("wp-visually-hidden", className)}>
    {children}
  </VisuallyHiddenRoot>
));

VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
