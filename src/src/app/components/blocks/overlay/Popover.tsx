import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";

interface PopoverContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const PopoverContext = createContext<PopoverContextValue | undefined>(undefined);

export const Popover = ({ open: controlledOpen, onOpenChange, children }: any) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenChange = (newOpen: boolean) => {
    if (controlledOpen === undefined) setUncontrolledOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && triggerRef.current && !triggerRef.current.contains(event.target as Node) && !(event.target as Element).closest(".wp-block-popover-content")) {
        handleOpenChange(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <PopoverContext.Provider value={{ open, onOpenChange: handleOpenChange, triggerRef }}>
      <div className="wp-block-popover-wrapper">{children}</div>
    </PopoverContext.Provider>
  );
};

export const PopoverTrigger = ({ children, className, id, style }: any) => {
  const context = useContext(PopoverContext);
  if (!context) return null;

  return (
    <div id={id} style={style} ref={context.triggerRef} onClick={() => context.onOpenChange(true)} className={cn("wp-block-popover-trigger", className)}>
      {children}
    </div>
  );
};

export const PopoverContent = ({ children, className, align = 'center', sideOffset = 4 }: any) => {
  const context = useContext(PopoverContext);
  if (!context?.open) return null;

  const alignStyle = align === 'start' ? { left: 0 } : align === 'end' ? { right: 0 } : { left: '50%', transform: 'translateX(-50%)' };

  return (
    <div className={cn("wp-block-popover-content", className)} data-state={context.open ? "open" : "closed"}
      style={{ marginTop: sideOffset, position: 'absolute', top: '100%', ...alignStyle } as React.CSSProperties}>
      {children}
    </div>
  );
};
