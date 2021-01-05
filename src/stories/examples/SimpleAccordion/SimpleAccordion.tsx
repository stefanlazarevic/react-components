import React from "react";

import "./SimpleAccordion.scss";

import {
	Accordion,
	AccordionHeader,
	AccordionPanel,
} from "../../../components";

export default function SimpleAccordion() {
	return (
		<div className="SimpleAccordion">
			<Accordion>
				<AccordionHeader>
					<span>Accordion Title</span>
				</AccordionHeader>
				<AccordionPanel>
					<h1>Hello World</h1>
				</AccordionPanel>
			</Accordion>
		</div>
	);
}