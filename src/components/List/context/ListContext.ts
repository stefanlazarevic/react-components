import { ListProps } from "../ListProps";
import { createNamedContext } from "../../../context/createNamedContext";
import { useDescendants } from "../../../hooks";
import { IDescendantContext, IMultiSelectable, ISelectable, IDescendant, ISelectableDetails } from "../../../interfaces";
import { Orientation, ThreeStateBoolean } from "../../../types";
import { useCallback, useRef } from "react";
import {
	forEach,
	not,
	isFunction,
	filterMap,
	size,
	cloneArray,
	isArray,
	and,
	getFirstDescendantIndex,
	increment,
	removeDuplicates,
	getLastDescendantIndex,
	decrement,
	isAbsent,
	isEmpty,
} from "../../../utils";

export interface IListContext extends IDescendantContext, ISelectable, IMultiSelectable {
	orientation?: Orientation;
	multiselectable?: boolean;
	showSelectAll?: boolean;

	// Callbacks
	getSelectedAllState: () => ThreeStateBoolean;
	selectOption: (event: React.SyntheticEvent, index: number) => void;
	selectAllOptions: (event: React.SyntheticEvent) => void;
	selectOptionsUpToFirst: (event: React.SyntheticEvent, index: number) => void;
	selectOptionsDownToLast: (event: React.SyntheticEvent, index: number) => void;
	setFromMostRecentlySelectedIndex: (event: React.SyntheticEvent, index: number) => void;
}

const [ListContextProvider, useListContext] = createNamedContext<IListContext>("ListContext");

/**
 * Creates context for List interface which provides all methods 
 * following WAI Aria practices 1.2
 * 
 * @param props 
 */
export function createListContext(props: ListProps): IListContext {
	const { selectedIndex, selectedIndexes, orientation, multiselectable, showSelectAll } = props;

	const descendantsContext = useDescendants();

	const { descendants } = descendantsContext;

	const mostRecentlySelectedIndex = useRef<number | undefined>(undefined);

	const setMostRecentlySelectedIndex = useCallback(function setMostRecentlySelectedIndex(index?: number) {
		mostRecentlySelectedIndex.current = index;
	}, []);

	const getSelectedAllState = useCallback((): ThreeStateBoolean => {
		if (isEmpty(selectedIndexes)) {
			return false;
		}

		const enabledDescendantIndexes = filterMap<IDescendant, number>(function filterOutDisabledDescendants(descendant, index) {
			if (not(descendant.disabled)) {
				return index;
			}

			return undefined;
		}, descendants);

		if (size(selectedIndexes) === size(enabledDescendantIndexes)) {
			return true;
		}

		return null;
	}, [selectedIndexes, descendants]);

	/**
	 * Function which executes provided `onSelect` callback if provided.
	 */
	const onSelect = useCallback(function onListSelectionChange(event: React.SyntheticEvent, details: ISelectableDetails) {
		if (isFunction(props.onSelect)) {
			props.onSelect(event, details);
		}
	}, [props.onSelect]);

	/**
	 * Function which selects provided index. In multiselectable list, this function
	 * is used to select/deselect provided index in `selectedIndexes` array.
	 * 
	 * @param index Selected index
	 */
	const selectOption = useCallback(function onListSelectedOptionsChange(event: React.SyntheticEvent, index: number) {
		if (and(isArray(selectedIndexes), multiselectable)) {
			setMostRecentlySelectedIndex();

			const output = [];

			let shouldSelect = true;

			forEach(function forEachSelectedIndex(selectedIndex: number) {
				// In case index is already selected, deselect it.
				if (selectedIndex === index) {
					shouldSelect = false;
					return;
				}

				output.push(selectedIndex);
			}, selectedIndexes);

			if (shouldSelect) {
				setMostRecentlySelectedIndex(index);
				output.push(index);
			}

			return onSelect(event, { selectedIndexes: output });
		}

		onSelect(event, { selectedIndex: index });
	}, [selectedIndexes, multiselectable, setMostRecentlySelectedIndex, descendants, onSelect]);

	/**
	 * Function which selects all visible options in case they are not selected, otherwise it deselects all options.
	 * 
	 * **Note:** This function is used only in multiselectable list.
	 */
	const selectAllOptions = useCallback(function onListSelectAllOptions(event: React.SyntheticEvent) {
		if (and(isArray(selectedIndexes), multiselectable)) {
			setMostRecentlySelectedIndex();

			const enabledDescendantIndexes = filterMap<IDescendant, number>(function filterOutDisabledDescendants(descendant, index) {
				if (not(descendant.disabled)) {
					return index;
				}

				return undefined;
			}, descendants);

			if (size(selectedIndexes) === size(enabledDescendantIndexes)) {
				return onSelect(event, { selectedIndexes: [] });
			}

			onSelect(event, { selectedIndexes: enabledDescendantIndexes });
		}
	},
		[selectedIndexes, multiselectable, setMostRecentlySelectedIndex, descendants, onSelect]
	);

	/**
	 * Selects the option at given index and all options up to the first available option. 
	 */
	const selectOptionsUpToFirst = useCallback(
		function selectOptionsUpToFirst(event: React.SyntheticEvent, index: number) {
			if (and(isArray(selectedIndexes), multiselectable)) {
				const firstIndex = getFirstDescendantIndex(descendants);

				setMostRecentlySelectedIndex(firstIndex);

				const output = cloneArray(selectedIndexes);

				let currentIndex = firstIndex;

				while (currentIndex <= index) {
					const descendant = descendants[currentIndex];

					if (not(descendant.disabled)) {
						output.push(currentIndex);
					}

					currentIndex = increment(currentIndex);
				}

				onSelect(event, { selectedIndexes: removeDuplicates(output) });
			}
		},
		[selectedIndexes, multiselectable, descendants, setMostRecentlySelectedIndex, onSelect]
	);

	/**
	 * Selects the focused option and all options down to the last option.
	 */
	const selectOptionsDownToLast = useCallback(
		function selectOptionsDownToLast(event: React.SyntheticEvent, index: number) {
			if (and(isArray(selectedIndexes), multiselectable)) {
				const lastIndex = getLastDescendantIndex(descendants);

				setMostRecentlySelectedIndex(lastIndex);

				const output = cloneArray(selectedIndexes);

				let currentIndex = lastIndex;

				while (currentIndex >= index) {
					const descendant = descendants[currentIndex];

					if (not(descendant.disabled)) {
						output.push(currentIndex);
					}

					currentIndex = decrement(currentIndex);
				}

				onSelect(event, { selectedIndexes: removeDuplicates(output) });
			}
		},
		[selectedIndexes, multiselectable, getLastDescendantIndex, descendants, onSelect]
	);

	/**
	 * 
	 */
	const setFromMostRecentlySelectedIndex = useCallback((event: React.SyntheticEvent, index: number) => {
		if (and(isArray(selectedIndexes), multiselectable)) {
			let { current: currentIndex } = mostRecentlySelectedIndex;

			if (isAbsent(currentIndex)) {
				currentIndex = index;
			}

			const output = cloneArray(selectedIndexes);

			const direction = index > currentIndex ? 1 : -1;

			while (currentIndex !== index) {
				const descendant = descendants[currentIndex];

				if (not(descendant.disabled)) {
					output.push(currentIndex);
				}

				currentIndex += direction;
			}

			output.push(index);

			setMostRecentlySelectedIndex(index);

			onSelect(event, { selectedIndexes: removeDuplicates(output) });
		}
	}, [selectedIndexes, multiselectable]);

	return {
		...descendantsContext,
		selectedIndex,
		selectedIndexes,
		orientation,
		multiselectable,
		showSelectAll,
		getSelectedAllState,
		selectOption,
		selectAllOptions,
		selectOptionsUpToFirst,
		selectOptionsDownToLast,
		setFromMostRecentlySelectedIndex
	};
}

export { ListContextProvider, useListContext };