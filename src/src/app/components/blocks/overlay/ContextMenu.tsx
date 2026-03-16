"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Check, CaretRight as ChevronRight, Circle } from '../../../utils/phosphor-compat';
import { cn } from "../../../utils/cn";
import { useClickOutside } from "../../../hooks/useClickOutside";

interface ContextMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  position: { x: number; y: number };
  setPosition: (pos: { x: number; y: number }) => void;
}

const ContextMenuContext = createContext<ContextMenuContextValue | undefined>(undefined);

const useContextMenuCtx = () => {
  const context = useContext(ContextMenuContext);
  if (!context) throw new Error("useContextMenu must be used within a ContextMenu");
  return context;
};

export const ContextMenu = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return <ContextMenuContext.Provider value={{ open, setOpen, position, setPosition }}>{children}</ContextMenuContext.Provider>;
}

export const ContextMenuTrigger = ({ className, children, id, style }: any) => {
  const { setOpen, setPosition } = useContextMenuCtx();
  return (
    <div id={id} style={style} className={cn("wp-block-context-menu-trigger", className)}
      onContextMenu={(e) => { e.preventDefault(); setOpen(true); setPosition({ x: e.clientX, y: e.clientY }); }}>
      {children}
    </div>
  );
}

export const ContextMenuPortal = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export const ContextMenuContent = React.forwardRef<HTMLDivElement, any>(({ className, children, id, style }, ref) => {
  const { open, setOpen, position } = useContextMenuCtx();
  const contentRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(contentRef, () => setOpen(false));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape" && open) setOpen(false); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <ContextMenuPortal>
      <div
        ref={(node) => { contentRef.current = node; if (typeof ref === 'function') ref(node); else if (ref) (ref as any).current = node; }}
        id={id} className={cn("wp-context-menu-content", className)}
        style={{ top: position.y, left: position.x, position: "fixed", ...style }} data-state="open">
        {children}
      </div>
    </ContextMenuPortal>
  );
});
ContextMenuContent.displayName = "ContextMenuContent";

export const ContextMenuItem = React.forwardRef<HTMLDivElement, any>(({ className, inset, disabled, onClick, children, id, style }, ref) => {
  const { setOpen } = useContextMenuCtx();
  return (
    <div id={id} style={style} ref={ref} className={cn("wp-context-menu-item", inset && "wp-context-menu-item--inset", className)}
      onClick={(e) => { if (!disabled) { onClick?.(e); setOpen(false); } }} data-disabled={disabled}>
      {children}
    </div>
  );
});
ContextMenuItem.displayName = "ContextMenuItem";

export const ContextMenuCheckboxItem = React.forwardRef<HTMLDivElement, any>(({ className, children, checked, disabled, onClick, id, style }, ref) => {
  const { setOpen } = useContextMenuCtx();
  return (
    <div id={id} style={style} ref={ref} className={cn("wp-context-menu-item wp-context-menu-checkbox-item", className)}
      onClick={(e) => { if (!disabled) { onClick?.(e); setOpen(false); } }} data-disabled={disabled}>
      <span className="wp-block-context-menu-item-indicator">{checked && <Check className="wp-block-context-menu-item-indicator__icon" />}</span>
      {children}
    </div>
  );
});
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

export const ContextMenuRadioItem = React.forwardRef<HTMLDivElement, any>(({ className, children, id, style }, ref) => (
  <div id={id} style={style} ref={ref} className={cn("wp-context-menu-item wp-context-menu-checkbox-item", className)}>
    <span className="wp-block-context-menu-item-indicator"><Circle className="wp-block-context-menu-item-indicator__icon--sm" /></span>
    {children}
  </div>
));
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

export const ContextMenuLabel = React.forwardRef<HTMLDivElement, any>(({ className, inset, id, style, children }, ref) => (
  <div ref={ref} id={id} style={style} className={cn("wp-block-context-menu-label", inset && "wp-block-context-menu-label--inset", className)}>{children}</div>
));
ContextMenuLabel.displayName = "ContextMenuLabel";

export const ContextMenuSeparator = React.forwardRef<HTMLDivElement, any>(({ className, id, style }, ref) => (
  <div ref={ref} id={id} style={style} className={cn("wp-block-context-menu-separator", className)} />
));
ContextMenuSeparator.displayName = "ContextMenuSeparator";

export const ContextMenuShortcut = ({ className, children, id, style }: any) => {
  return <span id={id} style={style} className={cn("wp-block-context-menu-shortcut", className)}>{children}</span>;
}

export const ContextMenuGroup = React.forwardRef<HTMLDivElement, any>(({ className, children, id, style }, ref) => (
  <div id={id} style={style} ref={ref} className={cn("", className)}>{children}</div>
));
ContextMenuGroup.displayName = "ContextMenuGroup";

export const ContextMenuSub = ({ children }: any) => { return <>{children}</>; };

export const ContextMenuSubTrigger = React.forwardRef<HTMLDivElement, any>(({ className, inset, children, id, style }, ref) => (
  <div ref={ref} id={id} style={style} className={cn("wp-context-menu-item", inset && "wp-context-menu-item--inset", className)}>
    {children}<ChevronRight className="wp-context-menu-sub-trigger__icon" />
  </div>
));
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";

export const ContextMenuSubContent = React.forwardRef<HTMLDivElement, any>(({ className, children, id, style }, ref) => (
  <div ref={ref} id={id} style={style} className={cn("wp-context-menu-content", className)}>{children}</div>
));
ContextMenuSubContent.displayName = "ContextMenuSubContent";

export const ContextMenuRadioGroup = React.forwardRef<HTMLDivElement, any>(({ className, children, id, style }, ref) => (
  <div id={id} style={style} ref={ref} className={cn("", className)}>{children}</div>
));
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";