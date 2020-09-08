import React, { useState, useCallback } from "react";

import "./SimpleAccordion.scss";

import {
	AccordionHeader,
	Paragraph,
	PlusIcon,
	Accordion,
	Tooltip,
	MinusIcon,
} from "../../../components";
import { AccordionPanel } from "../../../components/AccordionPanel";

export default function SimpleAccordion() {
	const [expanded, setExpanded] = useState(false);

	const onChange = useCallback(() => {
		setExpanded((expanded) => !expanded);
	}, []);

	return (
		<Accordion className="SimpleAccordion" isOpen={expanded} onChange={onChange}>
				<AccordionHeader id="test">
					<span>Accordion Title</span>
					{expanded ? <MinusIcon />  : <PlusIcon />}
					<Tooltip parent="test" content="Hover mee"/>
				</AccordionHeader>
			<AccordionPanel>
				<Paragraph>***FILE NOT PROVIDED***</Paragraph>
			</AccordionPanel>
		</Accordion>
	);
}