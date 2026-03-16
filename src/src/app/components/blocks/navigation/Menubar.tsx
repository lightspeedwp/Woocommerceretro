import React from "react";
import { Check, CaretRight as ChevronRight, Circle } from '../../../utils/phosphor-compat';
import { cn } from "../../../utils/cn";

export const Menubar = ({ className, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-menubar", className)}>{children}</div>;
};
export const MenubarMenu = ({ className, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-menubar__menu", className)}>{children}</div>;
};
export const MenubarTrigger = ({ className, children, id, style, onClick }: any) => {
  return <div id={id} style={style} onClick={onClick} className={cn("wp-block-menubar__trigger", className)}>{children}</div>;
};
export const MenubarContent = ({ className, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-menubar__content", className)}>{children}</div>;
};
export const MenubarItem = ({ className, inset, children, id, style, onClick }: any) => {
  return <div id={id} style={style} onClick={onClick} className={cn("wp-block-menubar__item", inset && "wp-block-menubar__item--inset", className)}>{children}</div>;
};
export const MenubarSeparator = ({ className, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-menubar__separator", className)} />;
};
export const MenubarLabel = ({ className, inset, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-menubar__label", inset && "wp-block-menubar__label--inset", className)}>{children}</div>;
};
export const MenubarCheckboxItem = ({ className, children, checked, id, style, onClick }: any) => {
  return (
    <div id={id} style={style} onClick={onClick} className={cn("wp-block-menubar__checkbox-item", className)}>
      <span className="wp-block-menubar__item-indicator">{checked && <Check size={16} />}</span>
      {children}
    </div>
  );
};
export const MenubarRadioItem = ({ className, children, id, style, onClick }: any) => {
  return (
    <div id={id} style={style} onClick={onClick} className={cn("wp-block-menubar__radio-item", className)}>
      <span className="wp-block-menubar__item-indicator"><Circle size={8} fill="currentColor" /></span>
      {children}
    </div>
  );
};
export const MenubarRadioGroup = ({ className, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-menubar__radio-group", className)}>{children}</div>;
};
export const MenubarPortal = ({ children }: any) => { return <>{children}</>; };
export const MenubarGroup = ({ className, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-menubar__group", className)}>{children}</div>;
};
export const MenubarShortcut = ({ className, children, id, style }: any) => {
  return <span id={id} style={style} className={cn("wp-block-menubar__shortcut", className)}>{children}</span>;
};
export const MenubarSub = ({ children }: any) => { return <>{children}</>; };
export const MenubarSubTrigger = ({ className, inset, children, id, style, onClick }: any) => {
  return (
    <div id={id} style={style} onClick={onClick} className={cn("wp-block-menubar__sub-trigger", inset && "wp-block-menubar__sub-trigger--inset", className)}>
      {children}
      <ChevronRight size={16} className="wp-block-menubar__chevron" />
    </div>
  );
};
export const MenubarSubContent = ({ className, children, id, style }: any) => {
  return <div id={id} style={style} className={cn("wp-block-menubar__sub-content", className)}>{children}</div>;
};