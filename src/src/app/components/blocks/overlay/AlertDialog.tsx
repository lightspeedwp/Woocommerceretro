"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../../utils/cn";
import { Button } from "../design/Buttons";

interface AlertDialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AlertDialogContext = createContext<AlertDialogContextValue | undefined>(undefined);

export const AlertDialog = ({ children, open: controlledOpen, defaultOpen = false, onOpenChange }: any) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (controlledOpen === undefined) setUncontrolledOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return <AlertDialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>{children}</AlertDialogContext.Provider>;
}

export const AlertDialogTrigger = ({ asChild, children, className, id, style }: any) => {
  const context = useContext(AlertDialogContext);
  if (!context) return null;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: any) => { (children as any).props.onClick?.(e); context.onOpenChange(true); },
      id, style, className: cn(className, (children as any).props.className),
    });
  }

  return <button id={id} style={style} type="button" onClick={() => context.onOpenChange(true)} className={className}>{children}</button>;
}

export const AlertDialogPortal = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export const AlertDialogOverlay = React.forwardRef<HTMLDivElement, any>(({ className, id, style }, ref) => {
  const context = useContext(AlertDialogContext);
  if (!context?.open) return null;
  return <div ref={ref} id={id} style={style} className={cn("wp-alert-dialog-overlay", className)} data-state={context.open ? "open" : "closed"} />;
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";

export const AlertDialogContent = React.forwardRef<HTMLDivElement, any>(({ className, children, id, style }, ref) => {
  const context = useContext(AlertDialogContext);
  if (!context) return null;
  const { open, onOpenChange } = context;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape" && open) onOpenChange(false); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;
  return <div ref={ref} id={id} style={style} role="alertdialog" className={cn("wp-alert-dialog-content", className)} data-state={open ? "open" : "closed"}>{children}</div>;
});
AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogHeader = ({ className, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-alert-dialog__header", className)}>{children}</div>;
}

export const AlertDialogFooter = ({ className, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-alert-dialog__footer", className)}>{children}</div>;
}

export const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, any>(({ className, children, id, style }, ref) => (
  <h2 ref={ref} id={id} style={style} className={cn("wp-block-alert-dialog__title", className)}>{children}</h2>
));
AlertDialogTitle.displayName = "AlertDialogTitle";

export const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, any>(({ className, children, id, style }, ref) => (
  <p ref={ref} id={id} style={style} className={cn("wp-block-alert-dialog__description", className)}>{children}</p>
));
AlertDialogDescription.displayName = "AlertDialogDescription";

export const AlertDialogAction = React.forwardRef<HTMLButtonElement, any>(({ className, onClick, id, style, children }, ref) => {
  const context = useContext(AlertDialogContext);
  if (!context) return null;
  return (
    <Button id={id} style={style} ref={ref} className={cn(className)} onClick={(e: any) => { onClick?.(e); if (!e.defaultPrevented) context.onOpenChange(false); }}>
      {children}
    </Button>
  );
});
AlertDialogAction.displayName = "AlertDialogAction";

export const AlertDialogCancel = React.forwardRef<HTMLButtonElement, any>(({ className, onClick, id, style, children }, ref) => {
  const context = useContext(AlertDialogContext);
  if (!context) return null;
  return (
    <Button id={id} style={style} ref={ref} variant="outline" className={cn("wp-block-alert-dialog__cancel", className)} onClick={(e: any) => { onClick?.(e); if (!e.defaultPrevented) context.onOpenChange(false); }}>
      {children}
    </Button>
  );
});
AlertDialogCancel.displayName = "AlertDialogCancel";