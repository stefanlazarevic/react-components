import React, { forwardRef, MutableRefObject } from "react";

import "./IconButton.scss";

import { Button } from "../Button";

import { IconButtonProps } from "./IconButtonProps";

import { concatenate } from "../../utils";

const IconButton = forwardRef(function IconButtonComponent(
  props: IconButtonProps,
  ref: MutableRefObject<HTMLButtonElement>
) {
  const className = concatenate("IconButton", props.className);

  return (
    <Button ref={ref} {...props} className={className}>
      {React.Children.only(props.children)}
    </Button>
  )
});

IconButton.defaultProps = {};

IconButton.displayName = "IconButton";

export default IconButton;