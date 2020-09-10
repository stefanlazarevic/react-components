import React, { forwardRef, MutableRefObject } from "react";

import "./Badge.scss";

import { concatenate } from "../../utils";

const Badge = forwardRef(function BadgeComponent(
	props: any,
	ref: MutableRefObject<HTMLDivElement>
) {
	const className = concatenate("Badge", props.className);

	return (
		<div
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
		>
			{props.children || props.content}
		</div>
	);
});

Badge.defaultProps = {
	content: "content"
};

Badge.displayName = "Badge";

export default Badge;