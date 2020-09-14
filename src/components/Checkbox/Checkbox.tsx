import React, { forwardRef, MutableRefObject, useLayoutEffect } from "react";

import "./Checkbox.scss";

import { useCombinedRefs } from "../../hooks";

import CheckboxProps from "./CheckboxProps";

import { concatenate, isBoolean } from "../../utils";

const Checkbox = forwardRef(function CheckboxComponent(
  props: CheckboxProps,
  ref: MutableRefObject<HTMLInputElement>
) {
  const className = concatenate("Checkbox", props.className);

  const input = useCombinedRefs(ref);

  function isPresentation() {
    return props.role === 'presentation' || props.role === 'none';
  }

  useLayoutEffect(() => {
    if (props.checked === "mixed") {
      input.current.indeterminate = true;
    } else {
      input.current.indeterminate = false;
    }
  }, [props.checked]);

  return (
    <input
      ref={input}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      type={props.type}
      checked={isBoolean(props.checked) ? props.checked : undefined}
      defaultChecked={props.defaultChecked}
      disabled={props.disabled}
      title={props.title}
      name={props.name}
      role={props.role}
      readOnly={props.readOnly}
      autoFocus={props.autoFocus}
      tabIndex={isPresentation() ? -1 : props.tabIndex}
      hidden={props.hidden}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
});

Checkbox.defaultProps = {
  type: "checkbox",
  checked: false,
  disabled: false
};

Checkbox.displayName = "Checkbox";

export default Checkbox;