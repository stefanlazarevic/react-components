import React, { forwardRef, MutableRefObject } from "react";

import "./Tab.scss";

import { TabProps } from "./TabProps";

import { useDescendant, useCombinedRefs } from "../../../../hooks";

import { useTabsContext } from "../../context/TabsContext";

import { keyboard } from "../../../../helpers";

import { focusPreviousDescendant, focusNextDescendant, concatenate } from "../../../../utils";

const Tab = forwardRef(function TabComponent(
	props: TabProps,
	ref: MutableRefObject<HTMLButtonElement>
) {
	const tab = useCombinedRefs(ref);

	const className = concatenate("Tab", props.className);

	const context = useTabsContext();

	const { descendants, orientation, selectedIndex, onSelect } = context;

	const index = useDescendant(tab.current, context);

	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode } = event;

		switch (keyCode) {
			case keyboard.KeyCode.ARROW_RIGHT:
				if (orientation === 'horizontal') {
					focusNextDescendant(index, descendants);
				}
				break;
			case keyboard.KeyCode.ARROW_LEFT:
				if (orientation === 'horizontal') {
					focusPreviousDescendant(index, descendants);
				}
				break;
			case keyboard.KeyCode.ARROW_DOWN:
				if (orientation === 'vertical') {
					focusNextDescendant(index, descendants);
				}
				break;
			case keyboard.KeyCode.ARROW_UP:
				if (orientation === 'vertical') {
					focusPreviousDescendant(index, descendants);
				}
				break;
			default: return;
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
			role={props.role}
            className={className}
            style={props.style}
			aria-selected={selectedIndex === index ? true : undefined}
			tabIndex={selectedIndex === index ? 0 : -1}
			data-index={index}
			disabled={props.disabled}
			onKeyDown={onKeyDown}
			onClick={onClick}
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