import React from "react";

import {
	AccordionHeader,
	Collapse,
	PlusIcon,
	CodeBlock,
} from "../../../../components";

export default function CodeBlockAccordion(props: any) {
	return (
		<div className="CodeBlockAccordion">
			<AccordionHeader expanded={props.expanded} onClick={props.onClick}>
        <span>Logs</span>
        <PlusIcon />
      </AccordionHeader>
			<Collapse hidden={!props.expanded}>
        <CodeBlock content={props.errorMessage} showLines/>
      </Collapse>
		</div>
	);
}