import React from "react"
import styles from "./FormsControls.module.css"

// Use const NeedElement = ElementCreator("needelement")
// Example: const Textarea = ElementCreator("textarea")

export const ElementCreator = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={ styles.formControl + " " + (hasError ? styles.error : "") }>
        <Element {...input} {...props} />
        { hasError && <span> { meta.error } </span> }
      </div>
    );
};
