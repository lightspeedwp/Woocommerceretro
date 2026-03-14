import React, { useState, forwardRef } from 'react';

/**
 * Toggle Component
 *
 * WordPress-aligned toggle button with pressed state.
 *
 * @example
 * <Toggle pressed={bold} onPressedChange={setBold}>B</Toggle>
 */

interface ToggleProps {
  className?: string;
  variant?: string;
  size?: string;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    { className = '', variant = 'default', size = 'default', pressed: controlledPressed, defaultPressed = false, onPressedChange, id, style, onClick, children },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(defaultPressed);
    const pressed = controlledPressed !== undefined ? controlledPressed : isPressed;

    const handleClick = (e: React.MouseEvent) => {
      const newPressed = !pressed;
      if (controlledPressed === undefined) {
        setIsPressed(newPressed);
      }
      onPressedChange?.(newPressed);
      onClick?.(e);
    };

    const combinedClassName = [
      'wp-block-toggle',
      `wp-block-toggle--${variant}`,
      `wp-block-toggle--size-${size}`,
      pressed ? 'is-pressed funky-toggle--active' : '',
      className,
      'funky-toggle'
    ].filter(Boolean).join(' ');

    return (
      <button
        id={id}
        style={style}
        ref={ref}
        type="button"
        aria-pressed={pressed}
        data-state={pressed ? "on" : "off"}
        className={combinedClassName}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);

Toggle.displayName = "Toggle";