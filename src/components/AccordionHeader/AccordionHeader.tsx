import React, {
	forwardRef,
	MutableRefObject,
	useCallback,
	useContext,
} from "react";

import "./AccordionHeader.scss";

import { AccordionHeaderProps } from "./AccordionHeaderProps";

import { Button } from "../Button";
import { Heading } from "../Heading";

import { useClassNames } from "../../hooks";
import { AccordionContext } from "../Accordion/context/AccordionContext";
import { IAccordionContext } from "../Accordion/interfaces/AccordionContext";

const AccordionHeader = forwardRef(function AccordionHeaderComponent(
	props: AccordionHeaderProps,
	ref: MutableRefObject<HTMLHeadingElement>
) {
	const {onChange, controls, expanded} = useContext<IAccordionContext>(AccordionContext)

	const classNames = useClassNames("AccordionHeader", props.className);

	const content = useCallback(() => {
		if (typeof props.content === 'function') {
			return props.content();
		}

		return props.content;
	}, [props.content]);

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
				expanded={expanded || props.expanded}
				controls={controls || props.controls}
				disabled={props.disabled}
				lang={props.lang}
				dir={props.dir}
				title={props.title}
				onClick={onChange}
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