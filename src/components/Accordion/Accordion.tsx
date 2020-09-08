import React, { forwardRef, useMemo, useCallback } from "react";

import { AccordionContext } from "./context/AccordionContext";
import { random } from "../../helpers";
import { IAccordionContext } from "./interfaces/AccordionContext";
import { AccordionProps } from "./AccordionProps";

const Accordion = forwardRef(function AccordionComponent(
	props: AccordionProps
) {
	const onChange = useCallback(
		function AccordionClickCallback(event: React.MouseEvent) {
			if (typeof props.onChange === "function") {
				props.onChange(event);
			}
		},
		[props.onChange]
	);

	const controls = useMemo(() => props.controls || random.getString(6), [
		props.controls,
	]);

	const value: IAccordionContext = useMemo(
		() => ({ expanded: props.expanded, controls, onChange }),
		[props.expanded, controls, onChange]
	);

	return (
		<AccordionContext.Provider value={value}>
			{props.children}
		</AccordionContext.Provider>
	);
});

Accordion.defaultProps = {};

Accordion.displayName = "Accordion";

export default Accordion;