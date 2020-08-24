import React, { forwardRef, MutableRefObject, useMemo } from "react";

import "./Slider.scss";

import { useClassNames } from "../../hooks";

const Slider = forwardRef(function SliderComponent(
	props: any,
	ref: MutableRefObject<HTMLInputElement>
) {
	const className = useClassNames('Slider', props.className);

  const barStyle = useMemo(() => {
    return {
      width: `${props.value / props.max * 100}%` 
    };
  }, [props.value, props.max])

	return (
    <div ref={ref} className={className} data-testid={props.testid}>
      <div className="Bar" style={barStyle} />
      <input
        id={props.id}
        style={props.style}
        type={props.type}
        value={props.value}
        max={props.max}
        name={props.name}
        disabled={props.disabled}
        onChange={props.onChange}
      />
    </div>
	);
});

Slider.defaultProps = {
  type: 'range',
  value: 0,
  max: 10
}

Slider.displayName = "Slider";

export default Slider;