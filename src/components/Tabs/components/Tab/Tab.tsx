import React, { forwardRef, MutableRefObject } from "react";

import "./Tab.scss";

import { TabProps } from "./TabProps";

import { useDescendant, useCombinedRefs } from "../../../../hooks";

import { useTabsContext } from "../../context/TabsContext";

import { keyboard } from "../../../../helpers";

import {
	focusPreviousDescendant,
	focusNextDescendant,
	concatenate,
	selectNextDescendant,
	selectPreviousDescendant
} from "../../../../utils";

/**
 * An element in the tab list that serves as a label for one of the 
 * tab panels and can be activated to display that panel.
 */
const Tab = forwardRef(function TabComponent(
	props: TabProps,
	ref: MutableRefObject<HTMLButtonElement>
) {
	const tab = useCombinedRefs(ref);

	const className = concatenate("Tab", props.className);

	const context = useTabsContext();

	const { 
		descendants, 
		orientation, 
		selectedIndex, 
		onSelect, 
		getTabIndex,
		activation
	} = context;

	const index = useDescendant(tab.current, context);

	const tabIndex = getTabIndex(index, props);

	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		if (orientation === 'horizontal') {
			switch (keyCode) {
				case keyboard.KeyCode.ARROW_RIGHT:
					if (activation === 'automatic') {
						selectNextDescendant(index, descendants);
					} else {
						focusNextDescendant(index, descendants);
					}
					break;
				case keyboard.KeyCode.ARROW_LEFT:
					if (activation === 'automatic') {
						selectPreviousDescendant(index, descendants);
					} else {
						focusPreviousDescendant(index, descendants);
					}
					break;
				default: return;
			}
		}

		if (orientation === 'vertical') {
			switch (keyCode) {
				case keyboard.KeyCode.ARROW_DOWN:
					if (activation === 'automatic') {
						selectNextDescendant(index, descendants);
					} else {
						focusNextDescendant(index, descendants);
					}
					break;
				case keyboard.KeyCode.ARROW_UP:
					if (activation === 'automatic') {
						selectPreviousDescendant(index, descendants);
					} else {
						focusPreviousDescendant(index, descendants);
					}
					break;
				default: return;
			}
		}
	}

	function onClick(event: React.MouseEvent) {
		onSelect(event, index);
	}

	return (
		<button
			ref={tab}
			id={props.id}
			data-testid={props.testid}
			className={className}
			style={props.style}
			role={props.role}
			aria-selected={selectedIndex === index ? true : undefined}
			aria-controls={props.controls}
			aria-haspopup={props.haspopup}
			tabIndex={tabIndex}
			disabled={props.disabled}
			onKeyDown={onKeyDown}
			onClick={onClick}
			onContextMenu={props.onContextMenu}
		>
			{props.children}
		</button>
	);
});

Tab.defaultProps = {
	role: "tab",
};

Tab.displayName = "Tab";

export default Tab;