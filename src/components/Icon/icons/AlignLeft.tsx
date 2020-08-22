import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const AlignLeftIcon = forwardRef(function IconIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M8 13H14V17H8V13Z" fill="currentColor" fill-opacity="0.5" />
      <path d="M6 6H4V18H6V6Z" fill="currentColor" />
      <path d="M20 7H8V11H20V7Z" fill="currentColor" />
    </Icon>
  );
});

AlignLeftIcon.defaultProps = {
  fill: "none"
};

AlignLeftIcon.displayName = "AlignLeftIcon";

export default AlignLeftIcon;