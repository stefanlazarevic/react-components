import React, {
	forwardRef,
	MutableRefObject,
	useState,
	useRef,
	useCallback,
	useLayoutEffect,
} from "react";

import "./Tooltip.scss";

import { useClassNames } from "../../hooks";
import { debounce } from "../../helpers";

const Tooltip = forwardRef(function TooltipComponent(
	props: any,
	ref: MutableRefObject<any>
) {
  return (
    <></>
  )
});

Tooltip.defaultProps = {
  role: 'tooltip'
};

Tooltip.displayName = "Tooltip";

export default Tooltip;