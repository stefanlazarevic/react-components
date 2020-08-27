import React from "react";
import { Listbox } from "./index";
import { ListboxOption } from "../ListboxOption";

export default {
	title: "Listbox",
	component: Listbox,
};

export const Template = (args: any) => (
	<Listbox {...args}>
		<ListboxOption value="Test" />
		<ListboxOption value="Test2" />
		<ListboxOption value="Test3" />
		<ListboxOption value="Test4" />
	</Listbox>
);

export const Multiple = Template.bind({});
Multiple.args = { multiselectable: true };