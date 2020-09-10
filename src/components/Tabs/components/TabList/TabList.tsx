import React, { forwardRef, MutableRefObject } from "react";

import "./TabList.scss";

import { TabListProps } from "./TabListProps";

import { useTabsContext } from "../../context/TabsContext";

import { keyboard } from "../../../../helpers";

import { focusFirstDescendant, focusLastDescendant, concatenate } from "../../../../utils";

const TabList = forwardRef(function TabListComponent(props: TabListProps, ref: MutableRefObject<HTMLDivElement>) {
	const className = concatenate("TabList", props.className);

	const {orientation, descendants} = useTabsContext();

	function onKeyDown(event: React.KeyboardEvent) {
		const {keyCode} = event;

		switch (keyCode) {
			case keyboard.KeyCode.HOME:
				focusFirstDescendant(descendants);
				break;
			case keyboard.KeyCode.END:
				focusLastDescendant(descendants);
				break;
			default: return;
		}
	}

	return (
		<div
			ref={ref}
			id={props.id}
			data-testid={props.testid}
			role={props.role}
			className={className}
			style={props.style}
			aria-orientation={orientation}
			onKeyDown={onKeyDown}
		>
			{props.children}
		</div>
	);
});

TabList.defaultProps = {
	role: "tablist",
	orientation: 'horizontal'
};

TabList.displayName = "TabList";

export default TabList;