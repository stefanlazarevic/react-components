import React, { forwardRef, MutableRefObject } from "react";

import "./TabList.scss";

import { TabListProps } from "./TabListProps";

import { useTabsContext } from "../../context/TabsContext";

import { keyboard } from "../../../../helpers";

import { concatenate } from "../../../../utils";

const TabList = forwardRef(function TabListComponent(props: TabListProps, ref: MutableRefObject<HTMLDivElement>) {
	const className = concatenate("TabList", props.className);

	const {orientation, focusFirstDescendant, focusLastDescendant} = useTabsContext();

	function onKeyDown(event: React.KeyboardEvent) {
		const {keyCode} = event;

		switch (keyCode) {
			case keyboard.KeyCode.HOME:
				focusFirstDescendant();
				break;
			case keyboard.KeyCode.END:
				focusLastDescendant();
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