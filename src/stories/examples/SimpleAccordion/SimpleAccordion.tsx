import React, { useState, useCallback } from "react";

import "./SimpleAccordion.scss";

import {
	AccordionHeader,
	Collapse,
	Paragraph,
	PlusIcon,
} from "../../../components";

export default function SimpleAccordion() {
	const [expanded, setExpanded] = useState(false);

	const onClick = useCallback(() => {
		setExpanded((expanded) => !expanded);
	}, []);

	return (
		<div className="SimpleAccordion">
			<AccordionHeader expanded={expanded} onClick={onClick}>
				<span>Accordion Title</span>
				<PlusIcon />
			</AccordionHeader>
			<Collapse hidden={!expanded}>
				<Paragraph>***FILE NOT PROVIDED***</Paragraph>
			</Collapse>
		</div>
	);
}