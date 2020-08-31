import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const ChevronRightIcon = forwardRef(function ChevronRightIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path
        d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
        fill="currentColor"
      />
    </Icon>
  );
});

ChevronRightIcon.defaultProps = {
  fill: "none"
};

ChevronRightIcon.displayName = "ChevronRightIcon";

export default ChevronRightIcon;