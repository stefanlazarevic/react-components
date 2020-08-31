import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const ChevronDownIcon = forwardRef(function ChevronDownIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path
        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
        fill="currentColor"
      />
    </Icon>
  );
});

ChevronDownIcon.defaultProps = {
  fill: "none"
};

ChevronDownIcon.displayName = "ChevronDownIcon";

export default ChevronDownIcon;