import React, { forwardRef, MutableRefObject } from "react";

import "./Tab.scss";

import { prop, keyboard, dom } from "../../helpers";
import { useCombinedRefs, useClassNames } from "../../hooks";

/**
 * A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.
 *
 * @see https://www.w3.org/WAI/PF/aria/roles#tab
 */
const Tab = forwardRef(function TabComponent(
	props: any,
	ref: MutableRefObject<HTMLLIElement>
) {
	const item = useCombinedRefs<HTMLLIElement>(ref);

	const ariaProp = prop.extractAriaProperty<any>(props);

	const className = useClassNames("Tab", props.className);

	function onKeyDown(event: React.KeyboardEvent<HTMLLIElement>) {
		const { keyCode } = event;

		if (keyCode === keyboard.KeyCode.ARROW_LEFT) {
			dom.focusPreviousSibling(item.current, {autoFocus: true});
		}

		if (keyCode === keyboard.KeyCode.ARROW_RIGHT) {
			dom.focusNextSibling(item.current, {autoFocus: true});
		}

		if (keyCode === keyboard.KeyCode.HOME || keyCode === keyboard.KeyCode.END) {
			item.current.setAttribute("tabIndex", "-1");
		}

		if (
			(keyCode === keyboard.KeyCode.ENTER ||
				keyCode === keyboard.KeyCode.SPACE) &&
			typeof props.onClick === "function"
		) {
			props.onClick(event, { id: props.id, index: props.index });
		}
	}

	function onClick(event: React.MouseEvent<HTMLLIElement>) {
		if (typeof props.onClick === "function") {
			props.onClick(event, { id: props.id, index: props.index });
		}
	}

	return (
		<li
			ref={item}
			className={className}
			aria-selected={ariaProp("selected")}
			tabIndex={props.tabIndex}
			onKeyDown={onKeyDown}
			onClick={onClick}
		>
			{props.children || props.content}
		</li>
	);
});

Tab.defaultProps = {
	role: "tab",
	content: "Tab content",
	tabIndex: -1
};

Tab.displayName = "Tab";

export default Tab;