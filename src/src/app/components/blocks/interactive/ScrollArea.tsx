"use client";

import React from "react";
import { cn } from "@/utils/cn";

export const ScrollArea = React.forwardRef<HTMLDivElement, any>(
  ({ className, children, viewportClassName, orientation = "vertical", id, style }, ref) => (
    <div ref={ref} id={id} style={style} className={cn("wp-block-scroll-area", className)} data-orientation={orientation}>
      <div className={cn("wp-block-scroll-area-viewport", viewportClassName)}>{children}</div>
    </div>
  )
);
ScrollArea.displayName = "ScrollArea";

/**
 * ScrollBar - No-op component for backward compatibility with Radix API.
 */
export const ScrollBar = React.forwardRef<any, any>(() => null);
ScrollBar.displayName = "ScrollBar";
