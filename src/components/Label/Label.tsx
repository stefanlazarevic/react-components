import React, { forwardRef, MutableRefObject } from "react";

import "./Label.scss";

import { useClassNames } from "../../hooks";

import { LabelProps, LabelPropTypes } from "./LabelProps";

const Label = forwardRef(function LabelComponent(
  props: LabelProps,
  ref: MutableRefObject<HTMLLabelElement>
) {
  const className = useClassNames("Label", props.className);

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
    >
      {props.children || props.content}
    </label>
  );
});

Label.propTypes = LabelPropTypes;

Label.defaultProps = {
  dir: "auto"
};

Label.displayName = "Label";

export default Label;