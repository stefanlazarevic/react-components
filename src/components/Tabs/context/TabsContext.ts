import { useDescendants } from "../../../hooks";
import { createNamedContext } from "../../../context/createNamedContext";
import { IDescendantContext } from "../../../interfaces/DescentantContext";

import { TabsProps } from "../TabsProps";
import { useCallback } from "react";
import { isFunction } from "../../../utils";

export interface ITabsContext extends IDescendantContext {
	orientation?: "horizontal" | "vertical";
	selectedIndex?: number;
	onSelect: (event: React.SyntheticEvent, index: number) => void;
}

const [TabsContextProvider, useTabsContext] = createNamedContext<ITabsContext>("TabsContext", {});

/**
 * Return context data created from properties defined at the `Tabs` component.
 */
export function createTabsContext(props: TabsProps): ITabsContext {
	const { orientation, selectedIndex } = props;

	const onSelect = useCallback((event: React.SyntheticEvent, index: number) => {
		if (isFunction(props.onSelect)) {
			props.onSelect(event, index);
		}
	}, [props.onSelect])

	return {
		...useDescendants(),
		orientation,
		selectedIndex,
		onSelect
	};
}

export { TabsContextProvider, useTabsContext };