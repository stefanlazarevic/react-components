import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./AvatarGroup.scss";

import AvatarGroupProps from "./AvatarGroupProps";

import { concatenate } from "../../utils";

const AvatarGroup = forwardRef(function AvatarGroupComponent(
	props: AvatarGroupProps,
	ref: MutableRefObject<HTMLUListElement>
) {
	const className = concatenate("AvatarGroup", props.className);

	const renderChildren = useCallback(function renderChildren() {
		return React.Children.map(props.children, (child) => {
			return <li>{child}</li>;
		});
	}, [props.children]);

	return (
		<ul
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
		>
			{renderChildren()}
		</ul>
	);
});

AvatarGroup.defaultProps = {
	children: []
};

AvatarGroup.displayName = "AvatarGroup";

export default AvatarGroup;
