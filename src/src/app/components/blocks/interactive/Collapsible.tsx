"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "../../../utils/cn";

interface CollapsibleContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CollapsibleContext = createContext<CollapsibleContextValue | undefined>(undefined);

export const Collapsible = React.forwardRef<HTMLDivElement, any>(
  ({ open: controlledOpen, defaultOpen = false, onOpenChange, disabled, className, children, id, style }, ref) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

    const handleOpenChange = (newOpen: boolean) => {
      if (disabled) return;
      onOpenChange?.(newOpen);
      if (controlledOpen === undefined) setUncontrolledOpen(newOpen);
    };

    return (
      <CollapsibleContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
        <div ref={ref} id={id} style={style} data-state={open ? "open" : "closed"} className={cn("wp-block-collapsible", className)}>
          {children}
        </div>
      </CollapsibleContext.Provider>
    );
  }
);
Collapsible.displayName = "Collapsible";

export const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, any>(
  ({ className, children, onClick, id, style }, ref) => {
    const context = useContext(CollapsibleContext);
    if (!context) throw new Error("CollapsibleTrigger must be used within Collapsible");

    return (
      <button
        ref={ref} id={id} style={style} type="button"
        data-state={context.open ? "open" : "closed"}
        className={cn("wp-block-collapsible-trigger", className)}
        onClick={(e) => { context.onOpenChange(!context.open); onClick?.(e); }}
      >
        {children}
      </button>
    );
  }
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

export const CollapsibleContent = React.forwardRef<HTMLDivElement, any>(
  ({ className, children, id, style }, ref) => {
    const context = useContext(CollapsibleContext);
    if (!context) throw new Error("CollapsibleContent must be used within Collapsible");

    return (
      <div ref={ref} id={id} style={style} data-state={context.open ? "open" : "closed"} className={cn("wp-block-collapsible-content", className)}>
        <div className="wp-block-collapsible-content-inner">{children}</div>
      </div>
    );
  }
);
CollapsibleContent.displayName = "CollapsibleContent";