import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "../../../utils/cn";

const R = AccordionPrimitive || {};
const AccordionRoot = R.Root || "div";
const AccordionItemPrimitive = R.Item || "div";
const AccordionHeaderPrimitive = R.Header || "div";
const AccordionTriggerPrimitive = R.Trigger || "button";
const AccordionContentPrimitive = R.Content || "div";

const Accordion = ({ type, value, defaultValue, onValueChange, collapsible, disabled, dir, orientation, className, children }: any) => {
  return (
    <AccordionRoot
      type={type} value={value} defaultValue={defaultValue} onValueChange={onValueChange}
      collapsible={collapsible} disabled={disabled} dir={dir} orientation={orientation} className={className}
    >
      {children}
    </AccordionRoot>
  );
};

const AccordionItem = React.forwardRef<any, any>(({ className, value, disabled, children }, ref) => (
  <AccordionItemPrimitive ref={ref} className={cn("wp-block-accordion__item", className)} value={value} disabled={disabled}>
    {children}
  </AccordionItemPrimitive>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<any, any>(({ className, children }, ref) => (
  <AccordionHeaderPrimitive className="wp-block-accordion__header">
    <AccordionTriggerPrimitive ref={ref} className={cn("wp-block-accordion__trigger", className)}>
      {children}
      <CaretDown className="wp-block-accordion__icon" />
    </AccordionTriggerPrimitive>
  </AccordionHeaderPrimitive>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<any, any>(({ className, children }, ref) => (
  <AccordionContentPrimitive ref={ref} className="wp-block-accordion__content">
    <div className={cn("wp-block-accordion__content-inner", className)}>{children}</div>
  </AccordionContentPrimitive>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };