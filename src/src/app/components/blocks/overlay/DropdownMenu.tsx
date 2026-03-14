"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { Check, CaretRight as ChevronRight, Circle } from '@phosphor-icons/react';
import { cn } from "@/utils/cn";
import { useClickOutside } from "../../../hooks/useClickOutside";

interface DropdownMenuContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
}

const DropdownMenuContext = createContext<DropdownMenuContextValue | undefined>(undefined);
const useDropdownMenuCtx = () => { const c = useContext(DropdownMenuContext); if (!c) throw new Error("useDropdownMenu must be used within a DropdownMenu"); return c; };

export const DropdownMenu = ({ children, defaultOpen = false, open: controlledOpen, onOpenChange }: any) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isOpen = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;
  const setIsOpen = (value: boolean) => { onOpenChange ? onOpenChange(value) : setUncontrolledOpen(value); };

  return <DropdownMenuContext.Provider value={{ isOpen, setIsOpen, triggerRef, contentRef }}>{children}</DropdownMenuContext.Provider>;
}

export const DropdownMenuTrigger = React.forwardRef<HTMLElement, any>(({ className, children, asChild = false, onClick, id, style }, ref) => {
  const { isOpen, setIsOpen, triggerRef } = useDropdownMenuCtx();
  useImperativeHandle(ref, () => triggerRef.current!);

  const handleClick = (e: any) => { setIsOpen(!isOpen); onClick?.(e); };

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      ref: (node: any) => { triggerRef.current = node; const origRef = (child as any).ref; if (typeof origRef === 'function') origRef(node); else if (origRef) origRef.current = node; },
      onClick: (e: any) => { handleClick(e); child.props.onClick?.(e); },
      id, style, "data-state": isOpen ? "open" : "closed", className: cn(className, child.props.className),
    });
  }

  return <button id={id} style={style} ref={triggerRef as any} onClick={handleClick} data-state={isOpen ? "open" : "closed"} className={className}>{children}</button>;
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export const DropdownMenuPortal = ({ children }: any) => { return <>{children}</>; };

export const DropdownMenuContent = React.forwardRef<HTMLDivElement, any>(({ className, sideOffset = 4, align = 'center', style, children, id }, ref) => {
  const { isOpen, setIsOpen, triggerRef, contentRef } = useDropdownMenuCtx();
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useClickOutside(contentRef, () => setIsOpen(false), [triggerRef]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape" && isOpen) setIsOpen(false); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen && triggerRef.current && contentRef.current) {
      const updatePosition = () => {
        if (!triggerRef.current || !contentRef.current) return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        let top = triggerRect.bottom + window.scrollY + sideOffset;
        let left = triggerRect.left + window.scrollX + (triggerRect.width / 2) - (contentRect.width / 2);
        if (align === "start") left = triggerRect.left + window.scrollX;
        else if (align === "end") left = triggerRect.right + window.scrollX - contentRect.width;
        if (left < 5) left = 5;
        if (left + contentRect.width > window.innerWidth - 5) left = window.innerWidth - contentRect.width - 5;
        if (top + contentRect.height > window.scrollY + window.innerHeight) {
          const topSpace = triggerRect.top - sideOffset;
          if (topSpace > contentRect.height) top = triggerRect.top + window.scrollY - contentRect.height - sideOffset;
        }
        setPosition({ top, left });
      };
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);
      return () => { window.removeEventListener("resize", updatePosition); window.removeEventListener("scroll", updatePosition, true); };
    }
  }, [isOpen, sideOffset, align, triggerRef, contentRef]);

  if (!isOpen) return null;

  return createPortal(
    <div id={id}
      ref={(node) => { contentRef.current = node; if (typeof ref === 'function') ref(node); else if (ref) (ref as any).current = node; }}
      className={cn("wp-block-dropdown-content", className)}
      style={{ top: position.top, left: position.left, position: "absolute", ...style } as React.CSSProperties} data-state="open">
      {children}
    </div>,
    document.body,
  );
});
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuItem = React.forwardRef<HTMLDivElement, any>(({ className, inset, disabled, id, style, children, onClick }, ref) => (
  <div id={id} style={style} ref={ref} onClick={onClick} className={cn("wp-block-dropdown-item", inset && "wp-block-dropdown-item--inset", className)} data-disabled={disabled} tabIndex={disabled ? -1 : 0}>{children}</div>
));
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuCheckboxItem = React.forwardRef<HTMLDivElement, any>(({ className, children, checked, disabled, id, style, onClick }, ref) => (
  <div id={id} style={style} ref={ref} onClick={onClick} className={cn("wp-block-dropdown-checkbox-item", className)} data-disabled={disabled} tabIndex={disabled ? -1 : 0}>
    <span className="wp-block-dropdown-item-indicator">{checked && <Check size={16} />}</span>
    {children}
  </div>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

const DropdownMenuRadioGroupContext = createContext<{ value?: string; onValueChange?: (val: string) => void } | undefined>(undefined);

export const DropdownMenuRadioItem = React.forwardRef<HTMLDivElement, any>(({ className, children, value, disabled, id, style }, ref) => {
  const radioCtx = useContext(DropdownMenuRadioGroupContext);
  const checked = radioCtx?.value === value;
  return (
    <div id={id} style={style} ref={ref} className={cn("wp-block-dropdown-radio-item", className)} data-disabled={disabled} tabIndex={disabled ? -1 : 0}
      onClick={() => { if (!disabled) radioCtx?.onValueChange?.(value); }}>
      <span className="wp-block-dropdown-item-indicator">{checked && <Circle size={8} className="fill-current" />}</span>
      {children}
    </div>
  );
});
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export const DropdownMenuRadioGroup = React.forwardRef<HTMLDivElement, any>(({ className, children, value, onValueChange, id, style }, ref) => (
  <DropdownMenuRadioGroupContext.Provider value={{ value, onValueChange }}>
    <div id={id} style={style} ref={ref} className={cn("", className)} role="group">{children}</div>
  </DropdownMenuRadioGroupContext.Provider>
));
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";

export const DropdownMenuLabel = React.forwardRef<HTMLDivElement, any>(({ className, inset, children, id, style }, ref) => (
  <div ref={ref} id={id} style={style} className={cn("wp-block-dropdown-label", inset && "wp-block-dropdown-label--inset", className)}>{children}</div>
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

export const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, any>(({ className, id, style }, ref) => (
  <div ref={ref} id={id} style={style} className={cn("wp-block-dropdown-separator", className)} />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export const DropdownMenuShortcut = ({ className, children, id, style }: any) => {
  return <span id={id} style={style} className={cn("wp-block-dropdown-shortcut", className)}>{children}</span>;
};

export const DropdownMenuGroup = React.forwardRef<HTMLDivElement, any>(({ className, children, id, style }, ref) => (
  <div ref={ref} id={id} style={style} className={className}>{children}</div>
));
DropdownMenuGroup.displayName = "DropdownMenuGroup";

export const DropdownMenuSub = ({ children }: any) => { return <>{children}</>; };

export const DropdownMenuSubTrigger = React.forwardRef<HTMLDivElement, any>(({ className, inset, children, id, style }, ref) => (
  <div ref={ref} id={id} style={style} className={cn("wp-block-dropdown-sub-trigger", inset && "wp-block-dropdown-sub-trigger--inset", className)}>
    {children}<ChevronRight size={16} className="wp-block-dropdown-sub-trigger-icon" />
  </div>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export const DropdownMenuSubContent = React.forwardRef<HTMLDivElement, any>(({ className, children, id, style }, ref) => (
  <div ref={ref} id={id} style={style} className={cn("wp-block-dropdown-menu-sub-content", className)}>{children}</div>
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";