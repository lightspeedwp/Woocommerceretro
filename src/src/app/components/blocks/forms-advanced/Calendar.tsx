"use client";

import React from "react";
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '../../../utils/phosphor-compat';
import { DayPicker } from "react-day-picker";
import { cn } from "../../../utils/cn";

/**
 * Calendar Component
 *
 * Uses react-day-picker with WordPress BEM classes defined in
 * /src/styles/blocks/widgets/calendar.css
 *
 * @example
 * <Calendar mode="single" selected={date} onSelect={setDate} />
 */

interface CalendarProps {
  className?: string;
  classNames?: Record<string, string>;
  showOutsideDays?: boolean;
  mode?: any;
  selected?: any;
  onSelect?: any;
  disabled?: any;
  initialFocus?: boolean;
  fromDate?: Date;
  toDate?: Date;
  fromMonth?: Date;
  toMonth?: Date;
  fromYear?: number;
  toYear?: number;
  components?: Record<string, any>;
}

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  mode,
  selected,
  onSelect,
  disabled,
  initialFocus,
  fromDate,
  toDate,
  fromMonth,
  toMonth,
  fromYear,
  toYear,
  components,
}: CalendarProps) => {
  const mergedClassNames: Record<string, string> = {
    months: "wp-block-calendar__months",
    month: "wp-block-calendar__month",
    caption: "wp-block-calendar__caption",
    caption_label: "wp-block-calendar__caption-label",
    nav: "wp-block-calendar__nav",
    nav_button: "wp-block-calendar__nav-button",
    nav_button_previous: "wp-block-calendar__nav-button--previous",
    nav_button_next: "wp-block-calendar__nav-button--next",
    table: "wp-block-calendar__table",
    head_row: "wp-block-calendar__head-row",
    head_cell: "wp-block-calendar__head-cell",
    row: "wp-block-calendar__row",
    cell: "wp-block-calendar__cell",
    day: "wp-block-calendar__day",
    day_range_start: "day-range-start",
    day_range_end: "day-range-end",
    day_selected: "day-selected",
    day_today: "day-today",
    day_outside: "day-outside",
    day_disabled: "day-disabled",
    day_range_middle: "day-range-middle",
    day_hidden: "day-hidden",
    ...classNames,
  };

  const mergedComponents: Record<string, any> = {
    IconLeft: ({ className: iconClassName }: { className?: string }) => (
      <ChevronLeft className={cn("wp-block-calendar__nav-icon", iconClassName)} />
    ),
    IconRight: ({ className: iconClassName }: { className?: string }) => (
      <ChevronRight className={cn("wp-block-calendar__nav-icon", iconClassName)} />
    ),
    ...components,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("wp-block-calendar__picker", className)}
      classNames={mergedClassNames}
      components={mergedComponents}
      mode={mode}
      selected={selected}
      onSelect={onSelect}
      disabled={disabled}
      initialFocus={initialFocus}
      fromDate={fromDate}
      toDate={toDate}
      fromMonth={fromMonth}
      toMonth={toMonth}
      fromYear={fromYear}
      toYear={toYear}
    />
  );
}

export { Calendar };