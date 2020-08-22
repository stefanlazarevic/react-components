import React, { forwardRef, MutableRefObject } from "react";

import "./Alert.scss";

import { AlertProps } from "./AlertProps";

import { useClassNames } from "../../hooks";

const Alert = forwardRef(function AlertComponent(
  props: AlertProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const className = useClassNames("Alert", props.className);

  return (
    <div
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      data-kind={props.kind}
      className={className}
      style={props.style}
      role={props.role}
      title={props.title}
      dir={props.dir}
      lang={props.lang}
      tabIndex={props.tabIndex}
      onKeyDown={props.onKeyDown}
    >
      {props.children || props.content}
    </div>
  );
});

Alert.defaultProps = {
  role: "alert",
  dir: "auto",
  content: "Alert content"
};

Alert.displayName = "Alert";

export default Alert;