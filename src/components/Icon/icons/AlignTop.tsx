import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const AlignTopIcon = forwardRef(function IconIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0352 7.98797L13.0374 13.988L17.0374 13.9865L17.0352 7.98653L13.0352 7.98797Z"
        fill="currentColor"
        fill-opacity="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9996 4.01189L5.99963 4.01837L6.00038 6.01837L18.0004 6.01189L17.9996 4.01189Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0374 19.9864L11.0321 7.98637L7.03207 7.98813L7.03736 19.9881L11.0374 19.9864Z"
        fill="currentColor"
      />
    </Icon>
  );
});

AlignTopIcon.defaultProps = {
  fill: "none"
};

AlignTopIcon.displayName = "AlignTopIcon";

export default AlignTopIcon;