import React, { forwardRef, MutableRefObject } from "react";

import "./RadioButton.scss";

import { Label } from "../Label";

import { RadioButtonProps } from "./RadioButtonProps";

import { useClassNames } from "../../hooks";

const RadioButton = forwardRef(
  (props: RadioButtonProps, ref: MutableRefObject<HTMLDivElement>) => {
    const className = useClassNames("RadioButton", props.className);

    const buttonClassName = useClassNames("Button", props.buttonClassName);

    return (
      <div ref={ref} id={props.id} data-testid={props.testid} className={className}>
        <input
          id={`${props.name}-${props.value}`}
          disabled={props.disabled}
          type="radio"
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
        <Label htmlFor={`${props.name}-${props.value}`} className={buttonClassName} title={props.title}>
          {props.children || props.content}
        </Label>
      </div>
    );
  }
);

RadioButton.defaultProps = {};

RadioButton.displayName = "RadioButton";

export default RadioButton;