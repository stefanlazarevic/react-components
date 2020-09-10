import React, { forwardRef, MutableRefObject, useCallback } from "react";

import "./AccordionHeader.scss";

import { AccordionHeaderProps } from "./AccordionHeaderProps";

import { Button } from "../Button";
import { Heading } from "../Heading";

import { concatenate, isFunction } from "../../utils";

const AccordionHeader = forwardRef(function AccordionHeaderComponent(
	props: AccordionHeaderProps,
	ref: MutableRefObject<HTMLHeadingElement>
) {
	const classNames = concatenate("AccordionHeader", props.className);

	const content = useCallback(() => {
		if (isFunction(props.content)) {
			return props.content();
		}

		return props.content;
	}, [props.content]);

	const onClick = useCallback(
		(event: React.SyntheticEvent) => {
			if (isFunction(props.onClick)) {
				props.onClick(event, {id: props.id});
			}
		},
		[props.onClick, props.id]
	);

	return (
		<Heading
			ref={ref}
			id={props.id}
			test-id={props.testid}
			className={classNames}
			style={props.style}
			level={props.level}
		>
			<Button
				expanded={props.expanded}
				controls={props.controls}
				disabled={props.disabled}
				lang={props.lang}
				dir={props.dir}
				title={props.title}
				onClick={onClick}
			>
				{props.children || content}
			</Button>
		</Heading>
	);
});

AccordionHeader.defaultProps = {
	level: 3
};

AccordionHeader.displayName = "AccordionHeader";

export default AccordionHeader;