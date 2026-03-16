"use client";

import React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { MagnifyingGlass as SearchIcon } from '../../../utils/phosphor-compat';
import { cn } from "../../../utils/cn";
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle } from "../layout/Modal";

export const Command = ({ className, children, id, style }: any) => {
  return (
    <CommandPrimitive id={id} style={style} data-slot="command" className={cn("wp-block-command", className)}>
      {children}
    </CommandPrimitive>
  );
}

export const CommandDialog = ({ title = "Command Palette", description = "Search for a command to run...", children, open, onOpenChange }: any) => {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="wp-block-command-dialog-content">
        <ModalHeader className="sr-only">
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeader>
        <Command>{children}</Command>
      </ModalContent>
    </Modal>
  );
}

export const CommandInput = ({ className, id, style, value, onValueChange }: any) => {
  return (
    <div data-slot="command-input-wrapper" className="wp-block-command-input-wrapper">
      <SearchIcon className="wp-block-command-input-icon" />
      <CommandPrimitive.Input id={id} style={style} data-slot="command-input" className={cn("wp-block-command-input", className)} value={value} onValueChange={onValueChange} />
    </div>
  );
}

export const CommandList = ({ className, children, id, style }: any) => {
  return <CommandPrimitive.List id={id} style={style} data-slot="command-list" className={cn("wp-block-command-list", className)}>{children}</CommandPrimitive.List>;
}

export const CommandEmpty = ({ children, className, id, style }: any) => {
  return <CommandPrimitive.Empty id={id} style={style} data-slot="command-empty" className={cn("wp-block-command-empty", className)}>{children}</CommandPrimitive.Empty>;
}

export const CommandGroup = ({ className, children, id, style, heading }: any) => {
  return <CommandPrimitive.Group id={id} style={style} heading={heading} data-slot="command-group" className={cn("wp-block-command-group", className)}>{children}</CommandPrimitive.Group>;
}

export const CommandSeparator = ({ className, id, style }: any) => {
  return <CommandPrimitive.Separator id={id} style={style} data-slot="command-separator" className={cn("wp-block-command-separator", className)} />;
}

export const CommandItem = ({ className, children, id, style, onSelect, value, disabled }: any) => {
  return <CommandPrimitive.Item id={id} style={style} onSelect={onSelect} value={value} disabled={disabled} data-slot="command-item" className={cn("wp-block-command-item", className)}>{children}</CommandPrimitive.Item>;
}

export const CommandShortcut = ({ className, children, id, style }: any) => {
  return <span id={id} style={style} data-slot="command-shortcut" className={cn("wp-block-command-shortcut", className)}>{children}</span>;
}