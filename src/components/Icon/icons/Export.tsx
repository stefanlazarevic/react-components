import React, { forwardRef } from "react";

import Icon from "../Icon";

import { IconProps } from "../IconProps";

const ExportIcon = forwardRef(function ExportIconComponent(props: IconProps, ref: React.Ref<SVGSVGElement>) {
  return (
    <Icon ref={ref} {...props}>
      <path
        d="M16.9498 5.96781L15.5356 7.38203L13 4.84646V17.0421H11V4.84653L8.46451 7.38203L7.05029 5.96781L12 1.01807L16.9498 5.96781Z"
        fill="currentColor"
      />
      <path
        d="M5 20.9819V10.9819H9V8.98193H3V22.9819H21V8.98193H15V10.9819H19V20.9819H5Z"
        fill="currentColor"
      />
    </Icon>
  );
});

ExportIcon.defaultProps = {
  fill: "none"
};

ExportIcon.displayName = "ExportIcon";

export default ExportIcon;