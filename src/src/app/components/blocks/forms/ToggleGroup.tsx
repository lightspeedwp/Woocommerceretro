import React, { useState, useContext, createContext, forwardRef } from 'react';

/**
 * ToggleGroup Component
 *
 * WordPress-aligned toggle group supporting single and multiple selection.
 *
 * @example
 * <ToggleGroup type="single" value={val} onValueChange={setVal}>
 *   <ToggleGroupItem value="a">A</ToggleGroupItem>
 *   <ToggleGroupItem value="b">B</ToggleGroupItem>
 * </ToggleGroup>
 */

interface ToggleGroupContextValue {
  type?: string;
  value: string | string[];
  onValueChange: (itemValue: string) => void;
  variant: string;
  size: string;
  disabled?: boolean;
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | undefined>(undefined);

interface ToggleGroupProps {
  className?: string;
  variant?: string;
  size?: string;
  children?: React.ReactNode;
  type?: string;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
  (
    { className = '', variant = 'default', size = 'default', children, type, value, defaultValue, onValueChange, disabled, id, style },
    ref
  ) => {
    const [localValue, setLocalValue] = useState<string | string[]>(
      defaultValue || (type === "multiple" ? [] : "")
    );
    const actualValue = value !== undefined ? value : localValue;

    const handleValueChange = (itemValue: string) => {
      let newValue: string | string[];

      if (type === "single") {
        newValue = actualValue === itemValue ? "" : itemValue;
      } else {
        const list = Array.isArray(actualValue) ? [...actualValue] : [];
        const index = list.indexOf(itemValue);
        if (index !== -1) {
          list.splice(index, 1);
        } else {
          list.push(itemValue);
        }
        newValue = list;
      }

      if (value === undefined) {
        setLocalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const contextValue: ToggleGroupContextValue = {
      type,
      value: actualValue,
      onValueChange: handleValueChange,
      variant,
      size,
      disabled,
    };

    const combinedClassName = [
      'wp-block-toggle-group',
      'funky-toggle-group',
      className
    ].filter(Boolean).join(' ');

    return (
      <ToggleGroupContext.Provider value={contextValue}>
        <div
          id={id}
          style={style}
          ref={ref}
          role={type === "single" ? "radiogroup" : "group"}
          className={combinedClassName}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    );
  }
);

ToggleGroup.displayName = "ToggleGroup";

interface ToggleGroupItemProps {
  className?: string;
  children?: React.ReactNode;
  variant?: string;
  size?: string;
  value: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  (
    { className = '', children, variant = 'default', size = 'default', value, disabled, id, style, onClick },
    ref
  ) => {
    const context = useContext(ToggleGroupContext);

    if (!context) {
      throw new Error("ToggleGroupItem must be used within a ToggleGroup");
    }

    const isSelected = Array.isArray(context.value)
      ? context.value.includes(value)
      : context.value === value;

    const isDisabled = disabled || context.disabled;

    const handleClick = (e: React.MouseEvent) => {
      if (!isDisabled) {
        context.onValueChange(value);
      }
      onClick?.(e);
    };

    const itemVariant = context.variant || variant;
    const itemSize = context.size || size;

    const combinedClassName = [
      'wp-block-toggle',
      `wp-block-toggle--${itemVariant}`,
      `wp-block-toggle--size-${itemSize}`,
      'wp-block-toggle-group-item',
      isSelected ? 'is-pressed funky-toggle--active' : '',
      className,
      'funky-toggle-item'
    ].filter(Boolean).join(' ');

    return (
      <button
        id={id}
        style={style}
        ref={ref}
        type="button"
        disabled={isDisabled}
        aria-pressed={isSelected}
        data-state={isSelected ? "on" : "off"}
        className={combinedClassName}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);

ToggleGroupItem.displayName = "ToggleGroupItem";