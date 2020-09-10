import React, { forwardRef, MutableRefObject } from "react";

import "./Heading.scss";

import { concatenate } from "../../utils";

import { HeadingProps, HeadingPropTypes } from "./HeadingProps";

const Heading = forwardRef(function HeadingComponent(
  props: HeadingProps,
  ref: MutableRefObject<HTMLHeadingElement>
) {
  const className = concatenate("Heading", props.className);

  return React.createElement(`h${props.level || props["aria-level"]}`, {
    id: props.id,
    "data-testid": props.testid,
    className,
    style: props.style,
    "aria-level": props.level || props["aria-level"],
    lang: props.lang,
    dir: props.dir,
    children: props.children || props.content,
    ref,
  });
});

Heading.propTypes = HeadingPropTypes;

Heading.defaultProps = {
  level: 1
}

Heading.displayName = "Heading";

export default Heading;