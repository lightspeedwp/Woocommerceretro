import React from "react";
import { Button } from "@/components/blocks/design/Buttons";
import { cn } from "./utils";

var NewButton = Button;

function mapVariant(v) {
  if (v === "default") return "primary";
  return v;
}

function mapSize(s) {
  if (s === "default") return "md";
  if (s === "icon") return "md";
  return s;
}

var Button = React.forwardRef(function ButtonInner(props, ref) {
  var className = props.className;
  var variant = props.variant || "default";
  var size = props.size || "default";

  return React.createElement(NewButton, {
    ref: ref,
    variant: mapVariant(variant),
    size: mapSize(size),
    className: cn(className, size === "icon" && "px-2 aspect-square"),
    type: props.type,
    disabled: props.disabled,
    onClick: props.onClick,
    children: props.children,
    "aria-label": props["aria-label"],
    id: props.id,
    name: props.name,
    tabIndex: props.tabIndex,
    style: props.style
  });
});
Button.displayName = "Button";

function buttonVariants() { return ""; }

export { Button, buttonVariants };