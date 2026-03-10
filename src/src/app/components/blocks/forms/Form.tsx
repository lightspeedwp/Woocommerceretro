import React from 'react';
var createContext = React.createContext;
var useContext = React.useContext;
var useId = React.useId;
var isValidElement = React.isValidElement;
var Children = React.Children;
var cloneElement = React.cloneElement;
import * as ReactHookFormModule from "react-hook-form@7.55.0";
import * as LabelModule from "../forms/Label";

var Controller = ReactHookFormModule.Controller;
var FormProvider = ReactHookFormModule.FormProvider;
var useFormContext = ReactHookFormModule.useFormContext;
var useFormState = ReactHookFormModule.useFormState;
var Label = LabelModule.Label;

export var Form = FormProvider;

var FormFieldContext = createContext({});

/**
 * FormField Component
 */
export function FormField(props) {
  return React.createElement(FormFieldContext.Provider, { value: { name: props.name } },
    React.createElement(Controller, { 
      name: props.name,
      control: props.control,
      rules: props.rules,
      defaultValue: props.defaultValue,
      shouldUnregister: props.shouldUnregister,
      render: props.render
    })
  );
}

/**
 * useFormField Hook
 */
export function useFormField() {
  var fieldContext = useContext(FormFieldContext);
  var itemContext = useContext(FormItemContext);
  var formContext = useFormContext();
  var getFieldState = formContext.getFieldState;
  var formState = useFormState({ name: fieldContext.name });
  var fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  var id = itemContext.id;

  var result = {
    id: id,
    name: fieldContext.name,
    formItemId: id + "-form-item",
    formDescriptionId: id + "-form-item-description",
    formMessageId: id + "-form-item-message",
  };

  if (fieldState) {
    result.error = fieldState.error;
    result.isDirty = fieldState.isDirty;
    result.isTouched = fieldState.isTouched;
    result.invalid = fieldState.invalid;
  }

  return result;
}

var FormItemContext = createContext({});

/**
 * FormItem Component
 */
export function FormItem(props) {
  var id = useId();
  var className = props.className || '';
  var children = props.children;

  return React.createElement(FormItemContext.Provider, { value: { id: id } },
    React.createElement('div', {
      'data-slot': "form-item",
      className: 'wp-block-form-item ' + className
    }, children)
  );
}

/**
 * FormLabel Component
 */
export function FormLabel(props) {
  var className = props.className || '';
  var children = props.children;
  var field = useFormField();
  var error = field.error;
  var formItemId = field.formItemId;

  return React.createElement(Label, {
    'data-slot': "form-label",
    'data-error': !!error,
    className: 'wp-block-form-label ' + className,
    htmlFor: formItemId
  }, children);
}

/**
 * FormControl Component
 */
export function FormControl(props) {
  var field = useFormField();
  var error = field.error;
  var formItemId = field.formItemId;
  var formDescriptionId = field.formDescriptionId;
  var formMessageId = field.formMessageId;
  var children = props.children;

  if (Children.count(children) === 1 && isValidElement(children)) {
    var childProps = {
      id: formItemId,
      "aria-describedby": !error
        ? formDescriptionId
        : formDescriptionId + " " + formMessageId,
      "aria-invalid": !!error
    };
    
    if (props.className) childProps.className = props.className;

    return cloneElement(children, childProps);
  }

  return React.createElement('div', { className: props.className }, children);
}

/**
 * FormDescription Component
 */
export function FormDescription(props) {
  var className = props.className || '';
  var children = props.children;
  var field = useFormField();
  var formDescriptionId = field.formDescriptionId;

  return React.createElement('p', {
    'data-slot': "form-description",
    id: formDescriptionId,
    className: 'wp-block-form-description ' + className
  }, children);
}

/**
 * FormMessage Component
 */
export function FormMessage(props) {
  var className = props.className || '';
  var children = props.children;
  var field = useFormField();
  var error = field.error;
  var formMessageId = field.formMessageId;
  var body = error ? String(error.message || "") : children;

  if (!body) {
    return null;
  }

  return React.createElement('p', {
    'data-slot': "form-message",
    id: formMessageId,
    className: 'wp-block-form-message ' + className
  }, body);
}
