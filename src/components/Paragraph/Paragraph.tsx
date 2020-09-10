import React, { forwardRef, MutableRefObject } from "react";

import "./Paragraph.scss";

import { ParagraphProps, ParagraphPropTypes } from "./ParagraphProps";
import { concatenate } from "../../utils";

const Paragraph = forwardRef(function ParagraphComponent(
  props: ParagraphProps,
  ref: MutableRefObject<HTMLParagraphElement>
) {
  const className = concatenate('Paragraph', props.className);

  return (
    <p
      ref={ref}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      dir={props.dir}
      lang={props.lang}
    >
      {props.children || props.content}
    </p>
  );
});

Paragraph.propTypes = ParagraphPropTypes;

Paragraph.defaultProps = {
  content: 'Paragraph content',
  dir: "auto"
};

Paragraph.displayName = "Paragraph";

export default Paragraph;