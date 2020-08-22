import React, {
	forwardRef,
	MutableRefObject,
	useMemo,
	useCallback,
} from "react";

import "./ListboxOption.scss";

import { ListboxOptionProps } from "./ListboxOptionProps";

import { useClassNames } from "../../hooks";
import { KeyCode } from "../../helpers";

const ListboxOption = forwardRef(function ListboxOptionComponent(
	props: ListboxOptionProps,
	ref: MutableRefObject<HTMLLIElement>
) {
	const className = useClassNames("ListboxOption", props.className);

	const isDisabled = useMemo(
		() =>
			typeof props.disabled === "boolean"
				? props.disabled
				: props["aria-disabled"],
		[props.disabled, props["aria-disabled"]]
	);

	const onClick = useCallback(
		(event: React.MouseEvent) => {
			if (typeof props.onSelect === "function") {
				props.onSelect(event, props.value);
			}
		},
		[props.onSelect, props.value]
	);

	const onKeyDown = useCallback(
		(event: React.KeyboardEvent) => {
			const { keyCode } = event;

			if (typeof props.onSelect === "function" && keyCode === KeyCode.ENTER) {
				props.onSelect(event, props.value);
			}
		},
		[props.onSelect, props.value]
	);

	return (
		<li
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			role={props.role}
			title={props.title}
			dir={props.dir}
			lang={props.lang}
			aria-disabled={isDisabled}
			aria-selected={
				typeof props.selected === "boolean"
					? props.selected
					: props["aria-selected"]
			}
			aria-label={props.value}
			tabIndex={isDisabled ? undefined : props.tabIndex}
			onClick={isDisabled ? undefined : onClick}
			onKeyDown={isDisabled ? undefined : onKeyDown}
		>
			{props.children || props.value}
		</li>
	);
});

ListboxOption.defaultProps = {
	role: "option",
	tabIndex: -1
};

ListboxOption.displayName = "ListboxOption"

export default ListboxOption;