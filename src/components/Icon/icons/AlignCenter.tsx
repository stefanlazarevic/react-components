import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const AlignCenterIcon = forwardRef(function IconIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path d="M9 13H15V17H9V13Z" fill="currentColor" fill-opacity="0.5" />
      <path d="M6 7H18V11H6V7Z" fill="currentColor" />
    </Icon>
  );
});

AlignCenterIcon.defaultProps = {
  fill: "none"
};

AlignCenterIcon.displayName = "AlignCenterIcon";

export default AlignCenterIcon;