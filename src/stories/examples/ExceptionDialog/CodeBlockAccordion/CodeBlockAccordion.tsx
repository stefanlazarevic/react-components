import React from "react";

import { AccordionHeader, PlusIcon, CodeBlock, Accordion, AccordionPanel } from "../../../../components";

export default function CodeBlockAccordion(props: any) {
	return (
		<div className="CodeBlockAccordion">
			<Accordion>
				<AccordionHeader onClick={props.onClick}>
					<span>Logs</span>
					<PlusIcon />
				</AccordionHeader>
				<AccordionPanel>
					<CodeBlock content={props.errorMessage} showLines/>
				</AccordionPanel>
			</Accordion>
		</div>
	);
}