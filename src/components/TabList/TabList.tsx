import React, { forwardRef, MutableRefObject, useLayoutEffect } from "react";

import "./TabList.scss";

import { useCombinedRefs, useClassNames } from "../../hooks";
import { keyboard, dom, prop } from "../../helpers";

const TabList = forwardRef(function TabListComponent(
	props: any,
	ref: MutableRefObject<HTMLOListElement>
) {
	const list = useCombinedRefs(ref);

	const ariaProp = prop.extractAriaProperty<any>(props);

	const className = useClassNames('TabList', props.className);

	function onKeyDown(event: React.KeyboardEvent<HTMLOListElement>) {
		const {keyCode} = event;

		if (keyCode === keyboard.KeyCode.HOME) {
			dom.focusFirstChild(list.current, {autoFocus: true});
		}

		if (keyCode === keyboard.KeyCode.END) {
			dom.focusLastChild(list.current, {autoFocus: true});
		}
	}

	useLayoutEffect(function TabListRendered() {
		const selected = list.current.querySelector('[aria-selected="true"]');

		if (!selected) {
			dom.focusFirstChild(list.current);

			return;
		} 

		selected.setAttribute('tabIndex', '0');

		if (selected instanceof HTMLElement) {
			selected.focus();
		}
	}, [props.selected]);

	return (
		<ol ref={list} role={props.role} className={className} onKeyDown={onKeyDown} aria-orientation={ariaProp('orientation')}>
			{props.children}
		</ol>
	);
});

TabList.defaultProps = {
	role: "tablist",
	"aria-orientation": "horizontal"
}

TabList.displayName = "TabList";

export default TabList;
