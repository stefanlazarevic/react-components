import React from "react";
import { List, Listbox, ListboxOption } from "../index";
import { action } from "@storybook/addon-actions";
import ControllableList from "./Controlled";

export default {
	title: "List",
};

export const Default = (args: any) => {
	return (
		<List onSelect={action("onSelect")}>
			<Listbox>
				<ListboxOption>React</ListboxOption>
				<ListboxOption>Vue</ListboxOption>
				<ListboxOption>Angular</ListboxOption>
				<ListboxOption>JQuery</ListboxOption>
				<ListboxOption>Node</ListboxOption>
			</Listbox>
		</List>
	);
};

export const Horizontal = () => {
	return (
		<List orientation="horizontal">
			<Listbox>
				<ListboxOption>React</ListboxOption>
				<ListboxOption>Vue</ListboxOption>
				<ListboxOption>Angular</ListboxOption>
				<ListboxOption>JQuery</ListboxOption>
				<ListboxOption>Node</ListboxOption>
			</Listbox>
		</List>
	);
};

export const Selected = () => {
	return (
		<List selectedIndex={2}>
			<Listbox>
				<ListboxOption>React</ListboxOption>
				<ListboxOption>Vue</ListboxOption>
				<ListboxOption>Angular</ListboxOption>
				<ListboxOption>JQuery</ListboxOption>
				<ListboxOption>Node</ListboxOption>
			</Listbox>
		</List>
	);
};

export const Multiselectable = () => {
	return (
		<List multiselectable={true} selectedIndexes={[0, 1, 2]} onSelect={action("onSelect")}>
			<Listbox>
				<ListboxOption>React</ListboxOption>
				<ListboxOption>Vue</ListboxOption>
				<ListboxOption>Angular</ListboxOption>
				<ListboxOption>JQuery</ListboxOption>
				<ListboxOption>Node</ListboxOption>
			</Listbox>
		</List>
	);
};

export const Controlled = () => <ControllableList />;