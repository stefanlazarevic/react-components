import React, { forwardRef, MutableRefObject } from "react";

import "./Collapse.scss";

import { CollapseProps } from "./CollapseProps";

import { useClassNames, useCombinedRefs } from "../../hooks";

const Collapse = forwardRef(function CollapseComponent(
	props: CollapseProps,
	ref: MutableRefObject<HTMLDivElement>
) {
	const region = useCombinedRefs<HTMLDivElement>(ref);

	const className = concatenate("Collapse", props.className);

	return (
		<div
			ref={region}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			aria-hidden={props.hidden}
			role={props.role}
		>
			{!props.hidden && (props.children || props.content)}
		</div>
	);
});

Collapse.defaultProps = {
	hidden: true,
	role: "region",
	duration: 150
};

Collapse.displayName = "Collapse";

export default Collapse;