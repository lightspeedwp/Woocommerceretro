import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";
import * as cnModule from "../../../utils/cn";

var cn = cnModule.cn;

var R = AccordionPrimitive && (AccordionPrimitive.default || AccordionPrimitive) || {};
var AccordionRoot = R.Root || R.Accordion || "div";
var AccordionItemPrimitive = R.Item || R.AccordionItem || "div";
var AccordionHeaderPrimitive = R.Header || R.AccordionHeader || "div";
var AccordionTriggerPrimitive = R.Trigger || R.AccordionTrigger || "button";
var AccordionContentPrimitive = R.Content || R.AccordionContent || "div";

function Accordion(props) {
  var type = props.type;
  var value = props.value;
  var defaultValue = props.defaultValue;
  var onValueChange = props.onValueChange;
  var collapsible = props.collapsible;
  var disabled = props.disabled;
  var dir = props.dir;
  var orientation = props.orientation;
  var className = props.className;
  var children = props.children;

  return React.createElement(AccordionRoot, {
    type: type,
    value: value,
    defaultValue: defaultValue,
    onValueChange: onValueChange,
    collapsible: collapsible,
    disabled: disabled,
    dir: dir,
    orientation: orientation,
    className: className
  }, children);
}

var AccordionItem = React.forwardRef(function(props, ref) {
  var className = props.className;
  var value = props.value;
  var disabled = props.disabled;
  var children = props.children;

  return React.createElement(AccordionItemPrimitive, {
    ref: ref,
    className: cn("wp-block-accordion__item", className),
    value: value,
    disabled: disabled
  }, children);
});
AccordionItem.displayName = "AccordionItem";

var AccordionTrigger = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;

  return React.createElement(AccordionHeaderPrimitive, { className: "wp-block-accordion__header" },
    React.createElement(AccordionTriggerPrimitive, {
      ref: ref,
      className: cn(
        "wp-block-accordion__trigger",
        className
      )
    },
      children,
      React.createElement(CaretDown, { className: "wp-block-accordion__icon" })
    )
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

var AccordionContent = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;

  return React.createElement(AccordionContentPrimitive, {
    ref: ref,
    className: "wp-block-accordion__content"
  },
    React.createElement('div', { className: cn("wp-block-accordion__content-inner", className) },
      children
    )
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };