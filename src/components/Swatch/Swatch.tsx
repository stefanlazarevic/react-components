import React, {
	forwardRef,
	MutableRefObject,
	useCallback,
	useMemo,
} from "react";

import "./Swatch.scss";



import { useClassNames } from "../../hooks";

import { SwatchProps } from "./SwatchProps";

const Swatch = forwardRef(function SwatchComponent(
	props: SwatchProps,
	ref: MutableRefObject<HTMLDivElement>
) {
	const className = useClassNames("Swatch", props.className);
	
	const style = useMemo(() => ({ backgroundColor: props.color, ...props.style }), [props.color, props.style]);
  
  const onClick = useCallback((event: React.SyntheticEvent) => {
    props.onClick!(event, props.color);
  }, [props.onClick, props.color])

	return (
		<div
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={style}
			title={props.title}
      tabIndex={props.tabIndex}
      aria-disabled={typeof props.disabled === 'boolean' ? props.disabled : props['aria-disabled']}
			onClick={typeof props.onClick === 'function' ? onClick : undefined}
			aria-selected={typeof props.selected === 'boolean' ? props.selected : props['aria-selected']}
		/>
	);
});

Swatch.defaultProps = {};

Swatch.displayName = "Swatch";

export default Swatch;