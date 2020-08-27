import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./Button.scss";

import { useClassNames } from "../../hooks";

import { ButtonProps } from "./ButtonProps";

const Button = forwardRef(function ButtonComponent(
  props: ButtonProps,
  ref: MutableRefObject<HTMLButtonElement>
) {
  const className = useClassNames("Button", props.className);

  const onClick = useCallback(function ButtonClickCallback(event: React.MouseEvent<HTMLButtonElement>) {
    if (typeof props.onClick === 'function') {
      props.onClick(event, props.index);
    }
  }, [props.index, props.onClick]);

  return (
    <button
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      aria-hidden={
        typeof props.hidden === "boolean" ? props.hidden : props["aria-hidden"]
      }
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      title={props.title}
      lang={props.lang}
      dir={props.dir}
      type={props.type}
      aria-pressed={
        typeof props.pressed === "boolean"
          ? props.pressed
          : props["aria-pressed"]
      }
      aria-expanded={typeof props.expanded === 'boolean' ? props.expanded : props['aria-expanded']}
      aria-haspopup={typeof props.haspopup === 'boolean' ? props.haspopup : props['aria-haspopup']}
      aria-label={props.label || props['aria-label']}
      autoFocus={props.autoFocus}
      onClick={onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.children || props.content}
    </button>
  );
});

Button.defaultProps = {}

Button.displayName = "Button";

export default Button;