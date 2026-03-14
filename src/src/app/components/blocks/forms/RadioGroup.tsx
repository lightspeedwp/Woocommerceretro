import React, { useState, useContext, createContext, forwardRef } from 'react';

/**
 * RadioGroup Component
 *
 * WordPress-aligned radio group with controlled/uncontrolled support.
 *
 * @example
 * <RadioGroup value={val} onValueChange={setVal}>
 *   <RadioGroupItem value="a" />
 *   <RadioGroupItem value="b" />
 * </RadioGroup>
 */

interface RadioGroupContextValue {
  value?: string;
  onValueChange: (value: string) => void;
  name?: string;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);

interface RadioGroupProps {
  className?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className = '', value, defaultValue, onValueChange, disabled, name, children, id, style }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const actualValue = value !== undefined ? value : uncontrolledValue;

    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const contextValue: RadioGroupContextValue = {
      value: actualValue,
      onValueChange: handleValueChange,
      name,
      disabled,
    };

    const combinedClassName = [
      'wp-block-radio-group',
      'funky-radio-group',
      className
    ].filter(Boolean).join(' ');

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div id={id} style={style} ref={ref} className={combinedClassName} role="radiogroup">
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps {
  className?: string;
  value: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className = '', value, disabled, id, style }, ref) => {
    const context = useContext(RadioGroupContext);

    if (!context) {
      throw new Error("RadioGroupItem must be used within a RadioGroup");
    }

    const isChecked = context.value === value;
    const isDisabled = disabled || context.disabled;

    const handleClick = () => {
      if (!isDisabled) {
        context.onValueChange(value);
      }
    };

    const combinedClassName = [
      'wp-block-radio-item',
      'funky-radio-item',
      isChecked ? 'is-checked funky-radio--active' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        id={id}
        style={style}
        ref={ref}
        type="button"
        role="radio"
        aria-checked={isChecked}
        disabled={isDisabled}
        data-state={isChecked ? "checked" : "unchecked"}
        className={combinedClassName}
        onClick={handleClick}
      >
        <span
          className={[
            'wp-block-radio-indicator',
            'funky-radio-indicator',
            isChecked ? 'is-visible' : 'is-hidden'
          ].filter(Boolean).join(' ')}
        />
      </button>
    );
  }
);

RadioGroupItem.displayName = "RadioGroupItem";