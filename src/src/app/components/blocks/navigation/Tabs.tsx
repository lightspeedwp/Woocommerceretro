import React, { createContext, useContext, useState } from "react";
import { cn } from "../../../utils/cn";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const Tabs = ({ defaultValue = '', value: controlledValue, onValueChange, className, children }: any) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={cn("wp-block-tabs", className)}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ className, children }: any) => {
  return <div className={cn("wp-block-tabs__list", className)}>{children}</div>;
};

export const TabsTrigger = ({ value, className, children, id, style, disabled }: any) => {
  const context = useContext(TabsContext);
  if (!context) return null;
  const isActive = context.value === value;

  return (
    <button id={id} style={style} disabled={disabled} type="button" className={cn("wp-block-tabs__trigger", className)} data-state={isActive ? "active" : "inactive"} onClick={() => context.onValueChange(value)}>
      {children}
    </button>
  );
};

export const TabsContent = ({ value, className, children }: any) => {
  const context = useContext(TabsContext);
  if (!context || context.value !== value) return null;
  return <div className={cn("wp-block-tabs__content", className)} data-state="active">{children}</div>;
};
