import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const AlignRightIcon = forwardRef(function IconIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9991 13.0039L9.99907 12.9911L9.99054 16.9911L15.9905 17.0039L15.9991 13.0039Z"
        fill="currentColor"
        fill-opacity="0.5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.978 18.0021L20.0036 6.00214L18.0036 5.99788L17.978 17.9979L19.978 18.0021Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.9964 10.9851L15.9964 11.0107L16.0049 7.0107L4.00493 6.98512L3.9964 10.9851Z"
        fill="currentColor"
      />
    </Icon>
  );
});

AlignRightIcon.defaultProps = {
  fill: "none"
};

AlignRightIcon.displayName = "AlignRightIcon";

export default AlignRightIcon;