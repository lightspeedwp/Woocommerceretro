import React from "react";
import { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription } from "./Sheet";

export const Drawer = Sheet;
export const DrawerTrigger = SheetTrigger;
export const DrawerClose = SheetClose;

export const DrawerContent = React.forwardRef<HTMLDivElement, any>(({ side = 'bottom', className = '', children }, ref) => (
  <SheetContent side={side} ref={ref} className={`wp-drawer-content funky-drawer ${className}`}>
    {children}
  </SheetContent>
));
DrawerContent.displayName = "DrawerContent";

export const DrawerHeader = SheetHeader;
export const DrawerFooter = SheetFooter;
export const DrawerTitle = SheetTitle;
export const DrawerDescription = SheetDescription;
