import React, { useState, useRef, useEffect, useContext, createContext, forwardRef, useCallback } from 'react';
import { Check, CaretDown as ChevronDown, CaretUp as ChevronUp } from '../../../utils/phosphor-compat';

/**
 * Select Component
 *
 * WordPress-aligned custom select dropdown with controlled/uncontrolled support.
 *
 * @example
 * <Select value={val} onValueChange={setVal}>
 *   <SelectTrigger><SelectValue placeholder="Pick one" /></SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="a">Option A</SelectItem>
 *   </SelectContent>
 * </Select>
 */

interface SelectContextValue {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  labelMap: Map<string, React.ReactNode>;
  registerLabel: (value: string, label: React.ReactNode) => void;
}

const SelectContext = createContext<SelectContextValue | undefined>(undefined);

interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Select = ({
  value: controlledValue,
  defaultValue,
  onValueChange,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  disabled,
  children,
}: SelectProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || "");
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [labelMap, setLabelMap] = useState<Map<string, React.ReactNode>>(() => new Map());

  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const setOpen = (newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
    setOpen(false);
  };

  const registerLabel = useCallback((val: string, label: React.ReactNode) => {
    setLabelMap((prev) => {
      const newMap = new Map(prev);
      newMap.set(val, label);
      return newMap;
    });
  }, []);

  const contextValue: SelectContextValue = {
    value,
    onValueChange: handleValueChange,
    open,
    setOpen,
    triggerRef,
    labelMap,
    registerLabel,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      {children}
    </SelectContext.Provider>
  );
}

interface SelectTriggerProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className = '', children, id, style }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error("SelectTrigger must be used within Select");

    const combinedRef = (node: HTMLButtonElement | null) => {
      context.triggerRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    };

    const combinedClassName = [
      'wp-block-select-trigger',
      'funky-input-glow',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        id={id}
        style={style}
        ref={combinedRef}
        type="button"
        className={combinedClassName}
        onClick={() => context.setOpen(!context.open)}
        aria-expanded={context.open}
      >
        {children}
        <ChevronDown className="wp-block-select-icon" />
      </button>
    );
  }
);

interface SelectValueProps {
  className?: string;
  placeholder?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const SelectValue = forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className = '', placeholder, id, style }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error("SelectValue must be used within Select");

    const displayValue = context.value ? context.labelMap.get(context.value) : placeholder;

    return (
      <span id={id} style={style} ref={ref} className={`wp-block-select-value ${className}`}>
        {displayValue || placeholder || ""}
      </span>
    );
  }
);

interface SelectContentProps {
  className?: string;
  children?: React.ReactNode;
  position?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className = '', children, position = "popper", id, style }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error("SelectContent must be used within Select");

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          context.open &&
          contentRef.current &&
          !contentRef.current.contains(event.target as Node) &&
          context.triggerRef.current &&
          !context.triggerRef.current.contains(event.target as Node)
        ) {
          context.setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [context.open, context]);

    if (!context.open) return null;

    const combinedStyle: React.CSSProperties = {
      width: context.triggerRef.current ? context.triggerRef.current.offsetWidth : undefined,
      position: 'absolute',
      top: '100%',
      ...style,
    };

    const combinedClassName = [
      'wp-block-select-content',
      'funky-card-glow',
      position === "popper" ? 'wp-block-select-content--popper' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <div id={id} ref={contentRef} className={combinedClassName} style={combinedStyle}>
        <div className="wp-block-select-viewport">{children}</div>
      </div>
    );
  }
);

interface SelectItemProps {
  className?: string;
  children?: React.ReactNode;
  value: string;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className = '', children, value, id, style, onClick }, ref) => {
    const context = useContext(SelectContext);
    if (!context) throw new Error("SelectItem must be used within Select");

    const isSelected = context.value === value;

    useEffect(() => {
      context.registerLabel(value, children);
    }, [value, children, context]);

    const handleClick = (e: React.MouseEvent) => {
      context.onValueChange(value);
      onClick?.(e);
    };

    const combinedClassName = [
      'wp-block-select-item',
      'funky-select-item',
      isSelected ? 'wp-block-select-item--selected funky-select-item--active' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <div
        id={id}
        style={style}
        ref={ref}
        className={combinedClassName}
        onClick={handleClick}
        data-state={isSelected ? "checked" : "unchecked"}
      >
        <span className="wp-block-select-item-indicator">
          {isSelected && <Check className="wp-block-context-menu-item-indicator__icon" />}
        </span>
        <span className="wp-block-select-item-text">{children}</span>
      </div>
    );
  }
);

interface SelectGroupProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className = '', children, id, style }, ref) => {
    return <div id={id} style={style} ref={ref} className={`wp-block-select-group ${className}`}>{children}</div>;
  }
);

interface SelectLabelProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className = '', children, id, style }, ref) => {
    return <div id={id} style={style} ref={ref} className={`wp-block-select-label ${className}`}>{children}</div>;
  }
);

interface SelectSeparatorProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const SelectSeparator = forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className = '', id, style }, ref) => {
    return <div id={id} style={style} ref={ref} className={`wp-block-select-separator ${className}`} />;
  }
);

interface SelectScrollButtonProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const SelectScrollUpButton = forwardRef<HTMLDivElement, SelectScrollButtonProps>(
  ({ className = '', id, style }, ref) => {
    return (
      <div id={id} style={style} ref={ref} className={`wp-block-select-scroll-button ${className}`}>
        <ChevronUp className="wp-block-select-icon" />
      </div>
    );
  }
);

export const SelectScrollDownButton = forwardRef<HTMLDivElement, SelectScrollButtonProps>(
  ({ className = '', id, style }, ref) => {
    return (
      <div id={id} style={style} ref={ref} className={`wp-block-select-scroll-button ${className}`}>
        <ChevronDown className="wp-block-select-icon" />
      </div>
    );
  }
);