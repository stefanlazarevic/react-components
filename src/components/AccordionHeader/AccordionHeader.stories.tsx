import React from "react";
import { AccordionHeaderProps } from "./AccordionHeaderProps";
import { AccordionHeader } from "./index";

export default {
	title: "AccordionHeader",
	component: AccordionHeader,
	parameters: {
		componentSubtitle: "Display an important and time-sensitive message to the user.",
	},
};

export const Template = (args: AccordionHeaderProps) => <AccordionHeader {...args} />;
Template.parameters = {
	docs: {
		source: {
			code: "<AccordionHeader />",
		},
	},
};