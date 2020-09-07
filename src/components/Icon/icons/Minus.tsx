import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const MinusIcon = forwardRef(function MinusIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path
        d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
        fill="currentColor"
      />
    </Icon>
  );
});

MinusIcon.defaultProps = {
  fill: "none"
};

MinusIcon.displayName = "MinusIcon";

export default MinusIcon;