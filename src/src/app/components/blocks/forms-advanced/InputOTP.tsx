"use client";

import * as React from "react";
import { Minus as MinusIcon } from '@phosphor-icons/react';

import * as InputOtpModule from "input-otp";
import * as cnModule from "../../../utils/cn";

var OTPInput = InputOtpModule.OTPInput;
var OTPInputContext = InputOtpModule.OTPInputContext;
var cn = cnModule.cn;

/**
 * @typedef {Object} InputOTPProps
 * @property {string} [className]
 * @property {string} [containerClassName]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 * @property {string} [value]
 * @property {Function} [onChange]
 * @property {number} [maxLength]
 * @property {boolean} [disabled]
 * @property {boolean} [autoFocus]
 * @property {Function} [render]
 */

function InputOTP(props) {
  var className = props.className;
  var containerClassName = props.containerClassName;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var value = props.value;
  var onChange = props.onChange;
  var maxLength = props.maxLength;
  var disabled = props.disabled;
  var autoFocus = props.autoFocus;
  var render = props.render;

  return React.createElement(OTPInput, {
    id: id,
    style: style,
    value: value,
    onChange: onChange,
    maxLength: maxLength,
    disabled: disabled,
    autoFocus: autoFocus,
    render: render,
    "data-slot": "input-otp",
    containerClassName: cn(
      "wp-block-input-otp",
      containerClassName,
    ),
    className: cn(className)
  }, children);
}

/**
 * @typedef {Object} InputOTPGroupProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 */

function InputOTPGroup(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    "data-slot": "input-otp-group",
    className: cn("wp-block-input-otp-group", className)
  }, children);
}

/**
 * @typedef {Object} InputOTPSlotProps
 * @property {number} index
 * @property {string} [className]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 */

function InputOTPSlot(props) {
  var index = props.index;
  var className = props.className;
  var id = props.id;
  var style = props.style;

  var inputOTPContext = React.useContext(OTPInputContext);
  var slot = inputOTPContext && inputOTPContext.slots ? inputOTPContext.slots[index] : undefined;
  var char = slot ? slot.char : undefined;
  var hasFakeCaret = slot ? slot.hasFakeCaret : undefined;
  var isActive = slot ? slot.isActive : undefined;

  return React.createElement('div', {
    id: id,
    style: style,
    "data-slot": "input-otp-slot",
    "data-active": isActive,
    className: cn(
      "wp-block-input-otp-slot",
      className,
    )
  },
    char,
    hasFakeCaret ? React.createElement('div', { className: "wp-block-input-otp-caret" },
      React.createElement('div', { className: "wp-block-input-otp-caret-blink" })
    ) : null
  );
}

/**
 * @typedef {Object} InputOTPSeparatorProps
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 */

function InputOTPSeparator(props) {
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    "data-slot": "input-otp-separator",
    role: "separator",
    className: "wp-block-input-otp-separator"
  },
    React.createElement(MinusIcon, null)
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };