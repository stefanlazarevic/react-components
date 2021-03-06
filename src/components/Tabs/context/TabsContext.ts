import { useDescendants } from "../../../hooks";
import { createNamedContext } from "../../../context/createNamedContext";
import { IDescendantContext, ISelectable, ISelectableDetails } from "../../../interfaces";

import { TabsProps } from "../TabsProps";
import { useCallback, useRef } from "react";
import { isFunction, isNumber, not } from "../../../utils";
import { Orientation } from "../../../types";

export interface ITabsContext extends IDescendantContext, ISelectable {
	orientation?: Orientation;
	activation?: "manual" | "automatic";
	onDelete: (event: React.SyntheticEvent, details: ISelectableDetails) => void;
	getTabIndex: (index: number, props: any) => number;
}

const [TabsContextProvider, useTabsContext] = createNamedContext<ITabsContext>("TabsContext", {});

/**
 * Return context data created from properties defined at the `Tabs` component.
 */
export function createTabsContext(props: TabsProps): ITabsContext {
	const { orientation, selectedIndex, activation } = props;
	
	const onSelect = useCallback((event: React.SyntheticEvent, details: ISelectableDetails) => {
		if (isFunction(props.onSelect)) {
			props.onSelect(event, details);
		}
	}, [props.onSelect]);
	
	const onDelete = useCallback((event: React.SyntheticEvent, details: ISelectableDetails) => {
		if (isFunction(props.onDelete)) {
			props.onDelete(event, details);
		}
	}, [props.onDelete]);
	
	/** @todo Refactor this block of code. */
	const hasTabbableElement = useRef<boolean>(isNumber(selectedIndex)); 
	
	const getTabIndex = useCallback((index: number, props: any) => {
		if (index === selectedIndex) {
			return 0;
		}

		if (selectedIndex === -1 && not(props.disabled) && not(hasTabbableElement.current)) {
			hasTabbableElement.current = true;
			return 0;
		}

		return -1;
	}, [selectedIndex]);
	/** [END] */

	return {
		...useDescendants(),
		orientation,
		selectedIndex,
		activation,
		onSelect,
		onDelete,
		getTabIndex
	};
}

export { TabsContextProvider, useTabsContext };