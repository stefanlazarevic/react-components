import React, { forwardRef, MutableRefObject } from "react";

import "./Textarea.scss";

import { useClassNames } from "../../hooks";

import { TextareaProps, TextareaPropTypes } from "./TextareaProps";

const Textarea = forwardRef(function TextareaComponent(
  props: TextareaProps,
  ref: MutableRefObject<HTMLTextAreaElement>
) {
  const className = useClassNames("Textarea", props.className);

  return (
    <textarea
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      name={props.name}
      defaultValue={props.defaultValue}
      value={props.value}
      placeholder={props.placeholder}
      disabled={props.disabled}
      lang={props.lang}
      dir={props.dir}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
});

Textarea.propTypes = TextareaPropTypes;

Textarea.defaultProps = {
  disabled: false,
  defaultValue: ""
};

Textarea.displayName = "Textarea";

export default Textarea;