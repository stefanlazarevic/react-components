import React, { forwardRef, MutableRefObject } from "react";

import "./Progress.scss";

import { concatenate } from "../../utils";

import { ProgressPropTypes, ProgressProps } from "./ProgressProps";

const Progress = forwardRef(function ProgressComponent(
  props: ProgressProps,
  ref: MutableRefObject<HTMLProgressElement>
) {
  const className = concatenate("Progress", props.className);

  return (
    <progress
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      value={props.value}
      max={props.max}
      aria-labelledby={props.labelledby || props["aria-labelledby"]}
      aria-label={props.label || props["aria-label"]}
    />
  );
});

Progress.propTypes = ProgressPropTypes;

Progress.defaultProps = {
  max: 100,
  value: 0,
};

Progress.displayName = "Progress";

export default Progress;