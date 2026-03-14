import React, { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from '@phosphor-icons/react';

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

export const Dialog = ({ children, open: controlledOpen, defaultOpen = false, onOpenChange }: any) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (controlledOpen === undefined) setUncontrolledOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return <DialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>{children}</DialogContext.Provider>;
}

export const DialogTrigger = ({ asChild, children, className = '', id, style }: any) => {
  const context = useContext(DialogContext);
  if (!context) return null;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: any) => { (children as any).props.onClick?.(e); context.onOpenChange(true); },
      id, style, className: `${className} ${(children as any).props.className || ''}`.trim(),
    });
  }

  return <button id={id} style={style} type="button" className={`wp-dialog-trigger ${className}`} onClick={() => context.onOpenChange(true)}>{children}</button>;
}

export const DialogPortal = ({ children }: any) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export const DialogOverlay = React.forwardRef<HTMLDivElement, any>(({ className = '', id, style }, ref) => {
  const context = useContext(DialogContext);
  if (!context?.open) return null;

  return (
    <div ref={ref} id={id} style={style} className={`wp-block-dialog__overlay funky-overlay ${className}`}
      onClick={() => context.onOpenChange(false)} data-state={context.open ? "open" : "closed"} />
  );
});
DialogOverlay.displayName = "DialogOverlay";

export const DialogClose = React.forwardRef<HTMLButtonElement, any>(({ className = '', children, id, style }, ref) => {
  const context = useContext(DialogContext);
  if (!context) return null;

  return <button id={id} style={style} type="button" ref={ref} className={`wp-block-dialog__close ${className}`} onClick={() => context.onOpenChange(false)}>{children}</button>;
});
DialogClose.displayName = "DialogClose";

export const DialogContent = React.forwardRef<HTMLDivElement, any>(({ className = '', children, id, style }, ref) => {
  const context = useContext(DialogContext);
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

  return (
    <div ref={ref} id={id} style={style} className={`wp-block-dialog__content funky-dialog ${className}`} data-state={open ? "open" : "closed"}>
      {children}
      <DialogClose className="wp-radix-close-button funky-dialog-close">
        <X className="wp-radix-close-button__icon" size={18} />
        <span className="sr-only">Close</span>
      </DialogClose>
    </div>
  );
});
DialogContent.displayName = "DialogContent";

export const DialogHeader = ({ className = '', children, id, style }: any) => {
  return <div id={id} style={style} className={`wp-block-dialog__header funky-dialog-header ${className}`}>{children}</div>;
}

export const DialogFooter = ({ className = '', children, id, style }: any) => {
  return <div id={id} style={style} className={`wp-block-dialog__footer funky-dialog-footer ${className}`}>{children}</div>;
}

export const DialogTitle = React.forwardRef<HTMLHeadingElement, any>(({ className = '', children, id, style }, ref) => (
  <h2 ref={ref} id={id} style={style} className={`wp-block-dialog__title funky-dialog-title ${className}`}>{children}</h2>
));
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = React.forwardRef<HTMLParagraphElement, any>(({ className = '', children, id, style }, ref) => (
  <p ref={ref} id={id} style={style} className={`wp-block-dialog__description funky-dialog-desc ${className}`}>{children}</p>
));
DialogDescription.displayName = "DialogDescription";