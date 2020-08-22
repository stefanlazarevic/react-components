import React, { forwardRef, memo } from "react";

import "./Icon.scss";

import { useClassNames } from "../../hooks";

import { IconProps, IconPropTypes } from "./IconProps";

const Icon = forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classNames = useClassNames("Icon", props.className);

    return (
      <svg
        ref={ref}
        id={props.id}
        data-testid={props.testid}
        className={classNames}
        style={props.style}
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox={props.viewBox}
        fill={props.fill}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
        strokeLinecap={props.strokeLinecap}
        strokeLinejoin={props.strokeLinejoin}
        aria-hidden={typeof props.hidden === 'boolean' ? props.hidden : props["aria-hidden"]}
        focusable={props.focusable}
        tabIndex={props.tabIndex}
      >
        {props.children}
      </svg>
    );
  }
);

Icon.propTypes = IconPropTypes;

Icon.defaultProps = {
  "aria-hidden": true,
  size: 24,
  fill: "none",
  focusable: false,
  viewBox: "0 0 24 24",
};

Icon.displayName = "Icon";

export default memo(Icon);