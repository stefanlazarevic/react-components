import React, { forwardRef, MutableRefObject, useCallback, useMemo } from "react";

import "./AccordionHeader.scss";

import { AccordionHeaderProps } from "./AccordionHeaderProps";

import { Button } from "../Button";
import { Heading } from "../Heading";

import { concatenate, isBoolean, isFunction } from "../../utils";
import { useAccordionContext } from "../../context";

const AccordionHeader = forwardRef(function AccordionHeaderComponent(
	props: AccordionHeaderProps,
	ref: MutableRefObject<HTMLHeadingElement>
) {
	const classNames = concatenate("AccordionHeader", props.className);

	const context = useAccordionContext();

	const expanded = useMemo(() => isBoolean(context.expanded) ? context.expanded : props.expanded, [context.expanded, props.expanded]);
	const controls = useMemo(() => context.controls ? context.controls : props.controls, [context.controls, props.controls]);
	const dir = useMemo(() => context.dir ? context.dir : props.dir, [context.dir, props.dir]);

	const content = useCallback(() => {
		if (isFunction(props.content)) {
			return props.content();
		}

		return props.content;
	}, [props.content]);

	const onClick = useCallback(
		(event: React.SyntheticEvent) => {
			if (!isBoolean(context.expanded)) {
				if (isFunction(props.onClick)) {
					props.onClick(event, { id: props.id });
				}
			} else {
				if (context.expanded) {
					context.collapse();
				} else {
					context.expand();
				}
			}
		},
		[props.onClick, props.id, context.expanded]
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
				expanded={expanded}
				controls={controls}
				disabled={props.disabled}
				lang={props.lang}
				dir={dir}
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