import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./Button.scss";

import { concatenate, extractAriaProperty, isFunction } from "../../utils";

import { ButtonProps } from "./ButtonProps";

const Button = forwardRef(function ButtonComponent(
  props: ButtonProps,
  ref: MutableRefObject<HTMLButtonElement>
) {
  const className = concatenate("Button", props.className);

  const ariaProp = extractAriaProperty(props);

  const onClick = useCallback(function ButtonClickCallback(event: React.MouseEvent<HTMLButtonElement>) {
    props.onClick!(event, props.index);
  }, [props.index, props.onClick]);

  return (
    <button
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      aria-hidden={ariaProp('hidden')}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      title={props.title}
      lang={props.lang}
      dir={props.dir}
      type={props.type}
      aria-pressed={ariaProp('pressed')}
      aria-expanded={ariaProp('expanded')}
      aria-haspopup={ariaProp('haspopup')}
      aria-controls={ariaProp('controls')}
      aria-label={ariaProp('label')}
      autoFocus={props.autoFocus}
      onClick={isFunction(props.onClick) ? onClick : undefined}
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