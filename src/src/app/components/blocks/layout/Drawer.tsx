import React from "react";
var forwardRef = React.forwardRef;
import * as SheetModule from "./Sheet";

var Sheet = SheetModule.Sheet;
var SheetTrigger = SheetModule.SheetTrigger;
var SheetClose = SheetModule.SheetClose;
var SheetContent = SheetModule.SheetContent;
var SheetHeader = SheetModule.SheetHeader;
var SheetFooter = SheetModule.SheetFooter;
var SheetTitle = SheetModule.SheetTitle;
var SheetDescription = SheetModule.SheetDescription;

/**
 * Drawer Component
 * 
 * Uses the Sheet component with side="bottom" by default.
 */

export var Drawer = Sheet;
export var DrawerTrigger = SheetTrigger;
export var DrawerClose = SheetClose;

export var DrawerContent = forwardRef(function DrawerContent(props, ref) {
  var side = props.side === undefined ? "bottom" : props.side;
  var className = props.className || '';
  var children = props.children;

  var combinedClassName = [
    'wp-drawer-content',
    'funky-drawer',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  var sheetProps = {
    side: side,
    ref: ref,
    className: combinedClassName
  };

  return React.createElement(SheetContent, sheetProps, children);
});

DrawerContent.displayName = "DrawerContent";

export var DrawerHeader = SheetHeader;
export var DrawerFooter = SheetFooter;
export var DrawerTitle = SheetTitle;
export var DrawerDescription = SheetDescription;