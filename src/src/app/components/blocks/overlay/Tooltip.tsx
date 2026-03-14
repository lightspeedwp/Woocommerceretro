"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";

interface TooltipContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
}

const TooltipContext = createContext<TooltipContextValue | undefined>(undefined);

const useTooltipCtx = () => {
  const context = useContext(TooltipContext);
  if (!context) throw new Error("useTooltip must be used within a TooltipProvider");
  return context;
};

export const TooltipProvider = ({ children }: any) => { return <>{children}</>; };

export const Tooltip = ({ children, defaultOpen = false, open: controlledOpen, onOpenChange }: any) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isOpen = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;
  const setIsOpen = (value: boolean) => { onOpenChange ? onOpenChange(value) : setUncontrolledOpen(value); };

  return <TooltipContext.Provider value={{ isOpen, setIsOpen, triggerRef, contentRef }}>{children}</TooltipContext.Provider>;
}

export const TooltipTrigger = React.forwardRef<HTMLElement, any>(({ className, children, asChild = false, id, style }, ref) => {
  const { setIsOpen, triggerRef } = useTooltipCtx();
  useImperativeHandle(ref, () => triggerRef.current!);

  const handlers = {
    onMouseEnter: () => setIsOpen(true),
    onMouseLeave: () => setIsOpen(false),
    onFocus: () => setIsOpen(true),
    onBlur: () => setIsOpen(false),
  };

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      ref: (node: any) => { triggerRef.current = node; const origRef = (child as any).ref; if (typeof origRef === 'function') origRef(node); else if (origRef) origRef.current = node; },
      onMouseEnter: (e: any) => { handlers.onMouseEnter(); child.props.onMouseEnter?.(e); },
      onMouseLeave: (e: any) => { handlers.onMouseLeave(); child.props.onMouseLeave?.(e); },
      onFocus: (e: any) => { handlers.onFocus(); child.props.onFocus?.(e); },
      onBlur: (e: any) => { handlers.onBlur(); child.props.onBlur?.(e); },
      id, style, className: cn(className, child.props.className),
    });
  }

  return <button id={id} style={style} ref={triggerRef as any} className={className} {...handlers}>{children}</button>;
});
TooltipTrigger.displayName = "TooltipTrigger";

export const TooltipContent = React.forwardRef<HTMLDivElement, any>(({ className, sideOffset = 4, side = 'top', style, children, id, hidden }: any, ref) => {
  const { isOpen, triggerRef, contentRef } = useTooltipCtx();
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && triggerRef.current && contentRef.current) {
      const updatePosition = () => {
        if (!triggerRef.current || !contentRef.current) return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        let top = triggerRect.top + window.scrollY - contentRect.height - sideOffset;
        let left = triggerRect.left + window.scrollX + (triggerRect.width / 2) - (contentRect.width / 2);
        if (left < 5) left = 5;
        if (left + contentRect.width > window.innerWidth - 5) left = window.innerWidth - contentRect.width - 5;
        if (top < window.scrollY + 5) top = triggerRect.bottom + window.scrollY + sideOffset;
        setPosition({ top, left });
      };
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);
      return () => { window.removeEventListener("resize", updatePosition); window.removeEventListener("scroll", updatePosition, true); };
    }
  }, [isOpen, sideOffset, triggerRef, contentRef]);

  if (!isOpen || hidden) return null;

  return createPortal(
    <div id={id}
      ref={(node) => { contentRef.current = node; if (typeof ref === 'function') ref(node); else if (ref) (ref as any).current = node; }}
      className={cn("wp-block-tooltip-content", className)}
      style={{ top: position.top, left: position.left, position: "absolute", ...style }} data-state="delayed-open">
      {children}
    </div>,
    document.body,
  );
});
TooltipContent.displayName = "TooltipContent";