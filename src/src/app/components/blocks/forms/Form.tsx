import React, { createContext, useContext, useId, isValidElement, Children, cloneElement } from 'react';
import { Controller, FormProvider, useFormContext, useFormState } from "react-hook-form@7.55.0";
import { Label } from "../forms/Label";

/**
 * Form Components
 *
 * WordPress-aligned form field components with react-hook-form integration.
 */

export const Form = FormProvider;

interface FormFieldContextValue {
  name: string;
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

interface FormFieldProps {
  name: string;
  control?: any;
  rules?: any;
  defaultValue?: any;
  shouldUnregister?: boolean;
  render: any;
}

/**
 * FormField Component
 */
export const FormField = ({ name, control, rules, defaultValue, shouldUnregister, render }: FormFieldProps) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
        render={render}
      />
    </FormFieldContext.Provider>
  );
};

interface FormItemContextValue {
  id: string;
}

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

/**
 * useFormField Hook
 */
export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...(fieldState && {
      error: fieldState.error,
      isDirty: fieldState.isDirty,
      isTouched: fieldState.isTouched,
      invalid: fieldState.invalid,
    }),
  };
};

interface FormItemProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FormItem Component
 */
export const FormItem = ({ className = '', children }: FormItemProps) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={`wp-block-form-item ${className}`}>
        {children}
      </div>
    </FormItemContext.Provider>
  );
};

interface FormLabelProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FormLabel Component
 */
export const FormLabel = ({ className = '', children }: FormLabelProps) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={`wp-block-form-label ${className}`}
      htmlFor={formItemId}
    >
      {children}
    </Label>
  );
};

interface FormControlProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FormControl Component
 */
export const FormControl = ({ className, children }: FormControlProps) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  if (Children.count(children) === 1 && isValidElement(children)) {
    const childProps: Record<string, any> = {
      id: formItemId,
      "aria-describedby": !error
        ? formDescriptionId
        : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
    };

    if (className) childProps.className = className;

    return cloneElement(children, childProps);
  }

  return <div className={className}>{children}</div>;
};

interface FormDescriptionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FormDescription Component
 */
export const FormDescription = ({ className = '', children }: FormDescriptionProps) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={`wp-block-form-description ${className}`}
    >
      {children}
    </p>
  );
};

interface FormMessageProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * FormMessage Component
 */
export const FormMessage = ({ className = '', children }: FormMessageProps) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message || "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={`wp-block-form-message ${className}`}
    >
      {body}
    </p>
  );
};
