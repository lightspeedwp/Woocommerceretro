"use client";

import React, { useContext } from "react";
import { Minus as MinusIcon } from '@phosphor-icons/react';
import { OTPInput, OTPInputContext } from "input-otp";
import { cn } from "@/utils/cn";

/**
 * InputOTP Components
 *
 * One-time password input using input-otp library.
 *
 * @example
 * <InputOTP maxLength={6}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *   </InputOTPGroup>
 * </InputOTP>
 */

interface InputOTPProps {
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  render?: any;
}

const InputOTP = ({
  className,
  containerClassName,
  children,
  id,
  style,
  value,
  onChange,
  maxLength,
  disabled,
  autoFocus,
  render,
}: InputOTPProps) => {
  return (
    <OTPInput
      id={id}
      style={style}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      disabled={disabled}
      autoFocus={autoFocus}
      render={render}
      data-slot="input-otp"
      containerClassName={cn("wp-block-input-otp", containerClassName)}
      className={cn(className)}
    >
      {children}
    </OTPInput>
  );
}

interface InputOTPGroupProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

const InputOTPGroup = ({ className, children, id, style }: InputOTPGroupProps) => {
  return (
    <div
      id={id}
      style={style}
      data-slot="input-otp-group"
      className={cn("wp-block-input-otp-group", className)}
    >
      {children}
    </div>
  );
}

interface InputOTPSlotProps {
  index: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const InputOTPSlot = ({ index, className, id, style }: InputOTPSlotProps) => {
  const inputOTPContext = useContext(OTPInputContext);
  const slot = inputOTPContext?.slots?.[index];
  const char = slot?.char;
  const hasFakeCaret = slot?.hasFakeCaret;
  const isActive = slot?.isActive;

  return (
    <div
      id={id}
      style={style}
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn("wp-block-input-otp-slot", className)}
    >
      {char}
      {hasFakeCaret && (
        <div className="wp-block-input-otp-caret">
          <div className="wp-block-input-otp-caret-blink" />
        </div>
      )}
    </div>
  );
}

interface InputOTPSeparatorProps {
  id?: string;
  style?: React.CSSProperties;
}

const InputOTPSeparator = ({ id, style }: InputOTPSeparatorProps) => {
  return (
    <div
      id={id}
      style={style}
      data-slot="input-otp-separator"
      role="separator"
      className="wp-block-input-otp-separator"
    >
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };