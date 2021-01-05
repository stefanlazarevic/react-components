import React, { useState } from "react";
import { Listbox, ListboxOption } from "../components";
import { List } from "../../List";
import { ISelectableDetails } from "../../../interfaces";
import { pipe, reduce, toArray } from "../../../utils";

export default function ControllableList() {
	const INITIAL_STATE = [
		{
			id: "react",
			title: "React",
			disabled: false,
			selected: false,
		},
		{
			id: "vue",
			title: "Vue",
			disabled: false,
			selected: true,
		},
		{
			id: "angular",
			title: "Angular",
			disabled: true,
			selected: false,
		},
		{
			id: "jquery",
			title: "JQuery",
			disabled: false,
			selected: true,
		},
		{
			id: "node",
			title: "Node",
			disabled: true,
			selected: false,
		},
		{
			id: "backbone",
			title: "Backbone",
			disabled: false,
			selected: false,
		},
		{
			id: "css",
			title: "CSS",
			disabled: false,
			selected: false,
		},
		{
			id: "js",
			title: "JavaScript",
			disabled: false,
			selected: true,
		},
	];

  const [selectedIndexes, setSelectedIndexes] = useState(
	  pipe(
		  reduce<number[], any>((acc, v: any, i: number) => {
			  if (v.selected) {
				  acc.push(i);
			  }

			  return acc;
		  }, []),
		  toArray()
	  )(INITIAL_STATE)
	);

	function onSelect(details: ISelectableDetails) {
		setSelectedIndexes(details.selectedIndexes as number[]);
  }

	return (
    <List 
      multiselectable={true} 
      onSelect={onSelect} 
      selectedIndexes={selectedIndexes}
    >
			<Listbox>
				{INITIAL_STATE.map((option) => (
					<ListboxOption key={option.id} id={option.id} disabled={option.disabled}>
						{option.title}
					</ListboxOption>
				))}
			</Listbox>
		</List>
	);
}