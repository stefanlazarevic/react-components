import React, { forwardRef, MutableRefObject } from "react";

import "./Radio.scss";

import { useClassNames } from "../../hooks";

import { RadioProps } from "./RadioProps";

const Radio = forwardRef(function RadioComponent(
  props: RadioProps,
  ref: MutableRefObject<HTMLInputElement>
) {
  const className = useClassNames("Radio", props.className);

  return (
    <input
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      disabled={props.disabled}
      type={props.type}
      tabIndex={props.tabIndex}
      value={props.value}
      name={props.name}
      checked={props.checked}
      aria-invalid={
        typeof props.invalid === "boolean"
          ? props.invalid
          : props["aria-invalid"]
      }
      aria-hidden={
        typeof props.hidden === "boolean"
          ? props.hidden
          : props["aria-hidden"]        
      }
      onChange={props.onChange}
    />
  );
});

Radio.defaultProps = {
  type: "radio"
};

Radio.displayName = "Radio";

export default Radio;