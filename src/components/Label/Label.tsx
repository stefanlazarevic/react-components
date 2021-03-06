import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./Label.scss";

import { concatenate, focusElement } from "../../utils";

import { LabelProps } from "./LabelProps";

const Label = forwardRef(function LabelComponent(
  props: LabelProps,
  ref: MutableRefObject<HTMLLabelElement>
) {
  const className = concatenate("Label", props.className);

  const onClick = useCallback(() => {
    if (document && typeof props.htmlFor === 'string') {
      const connectedElement = document.getElementById(props.htmlFor);

      focusElement(connectedElement as HTMLElement);
    }
  }, [props.htmlFor]);

  return (
    <label
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      lang={props.lang}
      dir={props.dir}
      htmlFor={props.htmlFor}
      title={props.title}
      onClick={props.native ? undefined : onClick}
    >
      {props.children || props.content}
    </label>
  );
});

Label.defaultProps = {
  dir: "auto",
  native: true
};

Label.displayName = "Label";

export default Label;