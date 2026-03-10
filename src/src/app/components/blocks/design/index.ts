/**
 * Design Blocks - WordPress Block Library Components
 * 
 * Optimized for Figma Make parser:
 * 1. No modern export-from syntax
 * 2. Named imports/exports
 */

import * as AccordionModule from './Accordion';
import * as ButtonsModule from './Buttons';
import * as GroupModule from './Group';
import * as GridModule from './Grid';
import * as StackModule from './Stack';
import * as RowModule from './Row';
import * as ColumnsModule from './Columns';
import * as SeparatorModule from './Separator';

export var Accordion = AccordionModule.Accordion;
export var AccordionItem = AccordionModule.AccordionItem;
export var AccordionTrigger = AccordionModule.AccordionTrigger;
export var AccordionContent = AccordionModule.AccordionContent;
export var Button = ButtonsModule.Button;
export var Buttons = ButtonsModule.Buttons;
export var ResponsiveButtons = ButtonsModule.ResponsiveButtons;
export var Group = GroupModule.Group;
export var Grid = GridModule.Grid;
export var ResponsiveGrid = GridModule.ResponsiveGrid;
export var Stack = StackModule.Stack;
export var Row = RowModule.Row;
export var Columns = ColumnsModule.Columns;
export var Column = ColumnsModule.Column;
export var Separator = SeparatorModule.Separator;
