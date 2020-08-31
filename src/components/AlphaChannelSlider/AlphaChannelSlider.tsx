import React, {
	forwardRef,
	MutableRefObject,
	useMemo,
	useCallback,
	useRef,
	useEffect,
} from "react";

import "./AlphaChannelSlider.scss";

import { useClassNames, useCombinedRefs } from "../../hooks";

import { AlphaChannelSliderProps } from "./AlphaChannelSliderProps";
import { keyboard, dom } from "../../helpers";

const AlphaChannelSlider = forwardRef(function AlphaChannelSliderComponent(
	props: AlphaChannelSliderProps,
	ref: MutableRefObject<HTMLDivElement>
) {
  const className = useClassNames("AlphaChannelSlider", props.className);
  
  const slider = useCombinedRefs<HTMLDivElement>(ref);

  const dragListener = useRef<any>(null);
  const dropListener = useRef<any>(null);

	const RGB = useMemo(() => {
		return `${props.red},${props.green},${props.blue}`;
	}, [props.red, props.green, props.blue]);

	const background = useMemo(() => {
		return {
			background: `linear-gradient(to right, rgba(${RGB}, 0), rgb(${RGB}))`,
		};
  }, [RGB]);
  
  const position = useMemo(() => {
    return {
      left: `${Math.min(props.max! - 1, props.value!)}%`
    }
  }, [props.value, props.max]);

  const onChange = useCallback((event: Event, updatedValue: number) => {
    if (typeof props.onChange === 'function') {
      props.onChange(event, updatedValue);
    }
  }, [props.onChange]);

  const onKeyDown = useCallback((event) => {
    const {keyCode} = event;
    let value = props.value!;

    if (keyCode === keyboard.KeyCode.ARROW_DOWN) {
      value = Math.max(props.min!, value - 1);
    }

    if (keyCode === keyboard.KeyCode.ARROW_UP) {
      value = Math.min(props.max!, value + 1);
    }

    if (keyCode === keyboard.KeyCode.HOME) {
      value = props.min!;
    }

    if (keyCode === keyboard.KeyCode.END) {
      value = props.max!;
    }

    onChange(event, value);

  }, [onChange, props.value, props.min, props.max]);

  const removeEventListeners = useCallback(() => {
    if (dragListener.current) {
      dragListener.current.remove();
      dragListener.current = null;
    }

    if (dropListener.current) {
      dropListener.current.remove();
      dropListener.current = null;
    }
  }, []);

  const onDrop = useCallback(() => {
    removeEventListeners();
  }, [removeEventListeners]);

  const onDrag = useCallback((event: MouseEvent) => {
    if (slider.current) {
      const rect = slider.current.getBoundingClientRect();
			const {width} = rect;

			let left = event.clientX - rect.left;

			left = Math.max(0, left);
			left = Math.min(left, width);
			
      const updatedValue = Math.round(left / width * 100);
      
      onChange(event, updatedValue);
    }
  }, [onChange]);

  const onMouseDown = useCallback((event) => {
    onDrag(event);

    if (document) {
      dragListener.current = dom.addEventListener(document, 'mousemove', onDrag);
      dropListener.current = dom.addEventListener(document, 'mouseup', onDrop);
    }
  }, [onDrag, onDrop]);

  useEffect(() => {
    return () => {
      removeEventListeners();
    }
  }, []);

	return (
		<div
			ref={slider}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			role={props.role}
			aria-valuenow={props.value}
			aria-valuemin={props.min}
			aria-valuemax={props.max}
			aria-orientation={props.orientation}
			aria-readonly={props.readOnly}
			tabIndex={props.tabIndex}
      aria-label={props.label}
      onKeyDown={onKeyDown}
      onMouseDown={onMouseDown}
		>
			<div
				className="AlphaChannelSlider__Background"
				aria-hidden={true}
				style={background}
			/>
      <div className="AlphaChannelSlider__Knob" aria-hidden={true} style={position} />
		</div>
	);
});

AlphaChannelSlider.defaultProps = {
	min: 0,
	max: 100,
	role: "slider",
	value: 50,
	orientation: "horizontal",
	readOnly: false,
	red: 31,
	green: 34,
	blue: 41,
	tabIndex: 0,
	label: "Alpha channel"
};

AlphaChannelSlider.displayName = "AlphaChannelSlider";

export default AlphaChannelSlider;