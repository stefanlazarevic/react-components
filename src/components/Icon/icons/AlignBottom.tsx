import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const AlignBottomIcon = forwardRef(function IconIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M13 10H17V16H13V10Z" fill="currentColor" fill-opacity="0.5" />
      <path d="M11 4H7V16H11V4Z" fill="currentColor" />
      <path d="M18 18H6V20H18V18Z" fill="currentColor" />
    </Icon>
  );
});

AlignBottomIcon.defaultProps = {
  fill: "none"
};

AlignBottomIcon.displayName = "AlignBottomIcon";

export default AlignBottomIcon;