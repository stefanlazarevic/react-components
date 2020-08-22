import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const AlignMiddleIcon = forwardRef(function IconIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M13 9H17V15H13V9Z" fill="currentColor" fill-opacity="0.5" />
      <path d="M7 6H11V18H7V6Z" fill="currentColor" />
    </Icon>
  );
});

AlignMiddleIcon.defaultProps = {
  fill: "none"
};

AlignMiddleIcon.displayName = "AlignMiddleIcon";

export default AlignMiddleIcon;