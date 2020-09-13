import React, { forwardRef, MutableRefObject, useCallback, useMemo, useState } from "react";

import "./RadioGroup.scss";

import { RadioGroupProps } from "./RadioGroupProps";

import { concatenate, getRandomString } from "../../utils";

const RadioGroup = forwardRef(function RadioGroupComponent(
	props: RadioGroupProps,
	ref: MutableRefObject<HTMLDivElement>
) {
	const className = concatenate("RadioGroup", props.className);

	const name = useMemo(() => props.name || getRandomString(5), [
		props.name,
	]);

	const [selectedValue, setSelectedValue] = useState(props.selectedValue);

	const onChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSelectedValue(event.target.value);

			if (typeof props.onChange === "function") {
				props.onChange(event, event.target.value);
			}
		},
		[props.onChange]
	);

	const renderChildren = useCallback(() => {
		return React.Children.map(props.children, (child: JSX.Element, index) => {
			if (!child || !child.props) {
				return child;
			}

			return React.cloneElement(child, {
				name,
				tabIndex:
					(selectedValue === "" && index === 0) ||
						child.props.value === selectedValue
						? 0
						: -1,
				checked:
					(selectedValue === "" && index === 0) ||
					child.props.value === selectedValue,
				onChange,
			});
		});
	}, [props.children, selectedValue, name, onChange]);

	return (
		<div
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			role={props.role}
		>
			{renderChildren()}
		</div>
	);
});

RadioGroup.defaultProps = {
	role: "radiogroup",
	selectedValue: ''
};

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;