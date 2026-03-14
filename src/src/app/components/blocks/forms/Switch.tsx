import React, { useState, forwardRef } from 'react';

/**
 * Switch Component
 *
 * WordPress-aligned toggle switch with controlled/uncontrolled support.
 *
 * @example
 * <Switch checked={enabled} onCheckedChange={setEnabled} />
 */

interface SwitchProps {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className = '', checked: controlledChecked, defaultChecked = false, onCheckedChange, disabled, id, style, onClick }, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const checked = controlledChecked !== undefined ? controlledChecked : isChecked;

    const handleClick = (e: React.MouseEvent) => {
      if (disabled) return;

      const newChecked = !checked;
      if (controlledChecked === undefined) {
        setIsChecked(newChecked);
      }
      onCheckedChange?.(newChecked);
      onClick?.(e);
    };

    const combinedClassName = [
      'wp-block-switch',
      'funky-switch',
      checked ? 'wp-block-switch--checked funky-switch--active' : 'wp-block-switch--unchecked',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        id={id}
        style={style}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        data-state={checked ? "checked" : "unchecked"}
        ref={ref}
        className={combinedClassName}
        onClick={handleClick}
      >
        <span
          data-state={checked ? "checked" : "unchecked"}
          className={[
            'wp-block-switch-thumb',
            'funky-switch-thumb',
            checked ? 'wp-block-switch-thumb--checked' : 'wp-block-switch-thumb--unchecked'
          ].filter(Boolean).join(' ')}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";
