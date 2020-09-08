import React, { forwardRef, MutableRefObject, useContext } from "react";

import "./AccordionPanel.scss";

import { Collapse } from "../Collapse";
import { AccordionContext } from "../Accordion/context/AccordionContext";
import { IAccordionContext } from "../Accordion/interfaces/AccordionContext";
import { CollapseProps } from "../Collapse/CollapseProps";
import { useClassNames } from "../../hooks";

const AccordionPanel = forwardRef(function AccordionPanelComponent(
	props: CollapseProps,
	ref: MutableRefObject<HTMLDivElement>
) {
	const { expanded, controls } = useContext<IAccordionContext>(
		AccordionContext
	);

	const className = useClassNames("AccordionPanel", props.className);

	return (
		<Collapse
			ref={ref}
			{...props}
			id={controls || props.id}
			hidden={!expanded || props.hidden}
			className={className}
		>
			{props.children}
		</Collapse>
	);
});

AccordionPanel.defaultProps = {};

AccordionPanel.displayName = "AccordionPanel";

export default AccordionPanel;