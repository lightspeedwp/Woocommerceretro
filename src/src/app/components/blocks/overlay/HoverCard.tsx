"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../../utils/cn";

interface HoverCardContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const HoverCardContext = createContext<HoverCardContextValue | undefined>(undefined);
const useHoverCardCtx = () => { const c = useContext(HoverCardContext); if (!c) throw new Error("useHoverCard must be used within a HoverCard"); return c; };

export const HoverCard = ({ children, defaultOpen = false, open: controlledOpen, onOpenChange, openDelay = 700, closeDelay = 300 }: any) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const isOpen = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;
  const setIsOpen = (value: boolean) => { onOpenChange ? onOpenChange(value) : setUncontrolledOpen(value); };

  const handleMouseEnter = () => { clearTimeout(closeTimeoutRef.current); if (!isOpen) openTimeoutRef.current = setTimeout(() => setIsOpen(true), openDelay); };
  const handleMouseLeave = () => { clearTimeout(openTimeoutRef.current); closeTimeoutRef.current = setTimeout(() => setIsOpen(false), closeDelay); };

  return <HoverCardContext.Provider value={{ isOpen, setIsOpen, triggerRef, contentRef, handleMouseEnter, handleMouseLeave }}>{children}</HoverCardContext.Provider>;
}

export const HoverCardTrigger = React.forwardRef<HTMLElement, any>(({ className, children, asChild = false, id, style }, ref) => {
  const { triggerRef, handleMouseEnter, handleMouseLeave } = useHoverCardCtx();
  useImperativeHandle(ref, () => triggerRef.current!);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      ref: (node: any) => { triggerRef.current = node; const origRef = (child as any).ref; if (typeof origRef === 'function') origRef(node); else if (origRef) origRef.current = node; },
      onMouseEnter: (e: any) => { handleMouseEnter(); child.props.onMouseEnter?.(e); },
      onMouseLeave: (e: any) => { handleMouseLeave(); child.props.onMouseLeave?.(e); },
      id, style, className: cn(className, child.props.className),
    });
  }

  return <a id={id} style={style} ref={triggerRef as any} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{children}</a>;
});
HoverCardTrigger.displayName = "HoverCardTrigger";

export const HoverCardContent = React.forwardRef<HTMLDivElement, any>(({ className, sideOffset = 4, align = 'center', style, children, id }, ref) => {
  const { isOpen, triggerRef, contentRef, handleMouseEnter, handleMouseLeave } = useHoverCardCtx();
  const [position, setPosition] = useState({ top: 0, left: 0 });

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
      className={cn("wp-block-hover-card-content", className)}
      style={{ top: position.top, left: position.left, position: "absolute", ...style }}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-state={isOpen ? "open" : "closed"}>
      {children}
    </div>,
    document.body,
  );
});
HoverCardContent.displayName = "HoverCardContent";