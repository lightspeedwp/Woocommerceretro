import React from "react";
import { Input } from "@/components/blocks/forms/Input";

var NewInput = Input;

/**
 * @typedef {Object} InputProps
 * @property {string} [className]
 * @property {string} [type]
 * @property {string} [placeholder]
 * @property {string} [value]
 * @property {Function} [onChange]
 * @property {boolean} [disabled]
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {React.CSSProperties} [style]
 */

/**
 * Legacy Input compatibility shim.
 * Redirects to new WordPress-aligned component.
 * @deprecated Import from @/components/blocks/forms/Input instead.
 */
var Input = NewInput;

export { Input };