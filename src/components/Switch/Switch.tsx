import React, { forwardRef, MutableRefObject } from "react";

import "./Switch.scss";

import { useClassNames } from "../../hooks";
import { SwitchPropTypes, SwitchProps } from "./SwitchProps";

const Switch = forwardRef(function SwitchComponent(
  props: SwitchProps,
  ref: MutableRefObject<HTMLInputElement>
) {
  const className = useClassNames("Switch", props.className);

  return (
    <input
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      type={props.type}
      checked={props.checked}
      disabled={props.disabled}
      title={props.title}
      name={props.name}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
});

Switch.propTypes = SwitchPropTypes;

Switch.defaultProps = {
  type: "checkbox",
  checked: false,
  disabled: false
}

Switch.displayName = "Switch";

export default Switch;