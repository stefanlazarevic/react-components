import React, { forwardRef, MutableRefObject, useLayoutEffect } from "react";

import "./Checkbox.scss";

import { useClassNames, useCombinedRefs } from "../../hooks";

import CheckboxProps from "./CheckboxProps";

const Checkbox = forwardRef(function CheckboxComponent(
  props: CheckboxProps,
  ref: MutableRefObject<HTMLInputElement>
) {
  const className = useClassNames("Checkbox", props.className);

  const input = useCombinedRefs(ref);

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
      checked={typeof props.checked === 'boolean' ? props.checked : undefined}
      disabled={props.disabled}
      title={props.title}
      name={props.name}
      readOnly={props.readOnly}
      autoFocus={props.autoFocus}
      tabIndex={props.tabIndex}
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