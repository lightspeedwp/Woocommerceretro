import React, { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from '../../../utils/phosphor-compat';
import { useFocusTrap } from '../../../hooks/useFocusTrap';

interface SheetContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = createContext<SheetContextValue | undefined>(undefined);

export const Sheet = ({ open: controlledOpen, onOpenChange, defaultOpen = false, children }: any) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (controlledOpen === undefined) setUncontrolledOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <SheetContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
};

export const SheetTrigger = ({ asChild, children, className = '', id, style, 'aria-label': ariaLabel }: any) => {
  const context = useContext(SheetContext);
  if (!context) return null;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: any) => { (children as any).props.onClick?.(e); context.onOpenChange(true); },
      id, className: `${className} ${(children as any).props.className || ''}`.trim(), style, 'aria-label': ariaLabel,
    });
  }

  return (
    <button type="button" id={id} style={style} aria-label={ariaLabel} className={`wp-sheet-trigger ${className}`} onClick={() => context.onOpenChange(true)}>
      {children}
    </button>
  );
};

export const SheetContent = React.forwardRef<HTMLDivElement, any>(({ side = 'right', className = '', children }, ref) => {
  const context = useContext(SheetContext);
  const open = context?.open ?? false;
  const onOpenChange = context?.onOpenChange ?? (() => {});
  const [mounted, setMounted] = useState(false);

  const focusTrapRef = useFocusTrap<HTMLDivElement>(open);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape" && open) onOpenChange(false); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="wp-sheet-portal">
      <div className="wp-sheet-overlay funky-overlay" onClick={() => onOpenChange(false)} />
      <div
        ref={(node) => {
          (focusTrapRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="dialog"
        aria-modal="true"
        className={`wp-sheet-content funky-sheet ${className}`}
        data-state={open ? "open" : "closed"}
        data-side={side}
      >
        <button className="wp-sheet-close funky-sheet-close" onClick={() => onOpenChange(false)} aria-label="Close">
          <X className="wp-sheet-close__icon" size={18} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
});
SheetContent.displayName = "SheetContent";

export const SheetClose = ({ asChild, children, className = '', id, style }: any) => {
  const context = useContext(SheetContext);
  if (!context) return null;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: any) => { (children as any).props.onClick?.(e); context.onOpenChange(false); },
      id, className: `${className} ${(children as any).props.className || ''}`.trim(), style,
    });
  }

  return (
    <button type="button" id={id} className={`wp-sheet-close-btn ${className}`} style={style} onClick={() => context.onOpenChange(false)}>
      {children}
    </button>
  );
};

export const SheetHeader = ({ className = '', children }: any) => {
  return <div className={`wp-sheet-header funky-sheet-header ${className}`}>{children}</div>;
};

export const SheetFooter = ({ className = '', children }: any) => {
  return <div className={`wp-sheet-footer funky-sheet-footer ${className}`}>{children}</div>;
};

export const SheetTitle = ({ className = '', children }: any) => {
  return <h2 className={`wp-sheet-title funky-sheet-title ${className}`}>{children}</h2>;
};

export const SheetDescription = ({ className = '', children }: any) => {
  return <p className={`wp-sheet-description funky-sheet-desc ${className}`}>{children}</p>;
};