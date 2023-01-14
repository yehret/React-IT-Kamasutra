import React from "react"
import styles from "./FormsControls.module.css"
import { Field } from "redux-form";

// Use const NeedElement = ElementCreator("needelement")
// Example: const Textarea = ElementCreator("textarea")

export const ElementCreator = Element => ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error;
    return (
      <div className={ styles.formControl + " " + (hasError ? styles.error : "") }>
        <Element {...input} {...props} />
        { hasError && <span> { error } </span> }
      </div>
    );
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
  return (
    <p>
      <Field validate={validators}  name={name} placeholder={placeholder} component={component} {...props}/>
      {text}
    </p>
  )
}
