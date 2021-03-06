import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const CheckIcon = forwardRef(function CheckIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path
        d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
        fill="currentColor"
      />
    </Icon>
  );
});

CheckIcon.defaultProps = {
  fill: "none"
};

CheckIcon.displayName = "CheckIcon";

export default CheckIcon;