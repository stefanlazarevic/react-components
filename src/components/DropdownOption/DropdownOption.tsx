import React, { forwardRef, MutableRefObject } from "react";

import "./DropdownOption.scss";

import { useClassNames } from "../../hooks";

const DropdownOption = forwardRef(function DropdownOptionComponent(
	props: any,
	ref: MutableRefObject<HTMLLIElement>
) {
	const className = useClassNames("DropdownOption", props.className);

	return (
		<li
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			title={props.title}
			role={props.role}
			onClick={props.onClick}
			tabIndex={
				typeof props.onClick === "function" ? props.tabIndex : undefined
			}
		>
			{props.children || props.content}
		</li>
	);
});

DropdownOption.defaultProps = {
	role: "menuitem",
	content: "Dropdown content",
	tabIndex: 0
};

DropdownOption.displayName = "DropdownOption";

export default DropdownOption;