import { ListProps } from "../ListProps";
import { createNamedContext } from "../../../context/createNamedContext";
import { useDescendants } from "../../../hooks";
import { IDescendantContext, IMultiSelectable, ISelectable, IDescendant } from "../../../interfaces";
import { Orientation } from "../../../types";
import { useCallback, useRef } from "react";
import {
	forEach,
	not,
	isFunction,
	filterMap,
	size,
	filter,
	cloneArray,
	unique,
	isPositiveNumber,
	lastIndex,
	isNumber,
} from "../../../utils";

export interface IListContext extends IDescendantContext, ISelectable, IMultiSelectable {
	orientation?: Orientation;
	multiselectable?: boolean;

	// Callbacks
	selectOption: (event: React.SyntheticEvent, index: number) => void;
	selectAllOptions: (event: React.SyntheticEvent) => void;
	selectToHome: (event: React.SyntheticEvent, index: number) => void;
	selectToEnd: (event: React.SyntheticEvent, index: number) => void;
	setFromMostRecentlySelectedIndex: (event: React.SyntheticEvent, index: number) => void;
}

const [ListContextProvider, useListContext] = createNamedContext<IListContext>("ListContext");

export function createListContext(props: ListProps): IListContext {
	const { selectedIndex, selectedIndexes, orientation, multiselectable } = props;

	const descendantsContext = useDescendants();

	const { descendants } = descendantsContext;

	const mostRecentlySelectedIndex = useRef<number | undefined>(undefined);

	const setMostRecentlySelectedIndex = useCallback((index?: number) => {
		mostRecentlySelectedIndex.current = index;
	}, []);

	/**
	 *
	 */
	const selectOption = useCallback(
		function onListboxOptionSelect(event: React.SyntheticEvent, index: number) {
			if (multiselectable) {
				setMostRecentlySelectedIndex(index);

				let isSelected = false;
				const output = [];

				forEach((selectedIndex) => {
					if (selectedIndex === index) {
						isSelected = true;
					} else {
						output.push(selectedIndex);
					}
				}, selectedIndexes as number[]);

				if (not(isSelected)) {
					output.push(index);
				}

				if (isFunction(props.onSelect)) {
					props.onSelect(event, { selectedIndexes: output });
				}
			}
		},
		[selectedIndexes, multiselectable, props.onSelect, setMostRecentlySelectedIndex]
	);

	/**
	 *
	 */
	const selectAllOptions = useCallback(
		(event) => {
			setMostRecentlySelectedIndex(undefined);
			const enabledDescendants = filter((descendant) => not(descendant.disabled), descendants);

			if (size(selectedIndexes) === size(enabledDescendants)) {
				if (isFunction(props.onSelect)) {
					props.onSelect(event, { selectedIndexes: [] });
				}

				return;
			}

			const output = filterMap<number>((descendant: IDescendant, index) => {
				if (descendant.disabled) {
					return undefined;
				}

				return index;
			}, descendants);

			if (isFunction(props.onSelect)) {
				props.onSelect(event, { selectedIndexes: output });
			}
		},
		[descendants, selectedIndexes, props.onSelect, setMostRecentlySelectedIndex]
	);

	/**
	 *
	 */
	const selectToHome = useCallback(
		(event: React.SyntheticEvent, index: number) => {
			let i = 0;

			setMostRecentlySelectedIndex(index);

			if (not(isPositiveNumber(index))) {
				return;
			}

			const output = cloneArray(selectedIndexes);

			while (i !== index) {
				const descendant = descendants[i];

				if (not(descendant.disabled)) {
					output.push(i);
				}

				i++;
			}

			output.push(index);

			if (isFunction(props.onSelect)) {
				props.onSelect(event, { selectedIndexes: unique(output) });
			}
		},
		[selectedIndexes, descendants, props.onSelect, setMostRecentlySelectedIndex]
	);

	/**
	 *
	 */
	const selectToEnd = useCallback(
		(event: React.SyntheticEvent, index: number) => {
			setMostRecentlySelectedIndex(index);
			let i = lastIndex(descendants);

			if (not(isPositiveNumber(index))) {
				return;
			}

			const output = cloneArray(selectedIndexes);

			while (i !== index) {
				const descendant = descendants[i];

				if (not(descendant.disabled)) {
					output.push(i);
				}

				i--;
			}

			output.push(index);

			if (isFunction(props.onSelect)) {
				props.onSelect(event, { selectedIndexes: unique(output) });
			}
		},
		[selectedIndexes, descendants, props.onSelect, setMostRecentlySelectedIndex]
	);

	/**
	 * 
	 */
	const setFromMostRecentlySelectedIndex = useCallback((event: React.SyntheticEvent, index: number) => {
		console.log(mostRecentlySelectedIndex.current, index);
		
		if (not(isNumber(mostRecentlySelectedIndex.current))) {
			return;
		}

		let currentIndex = mostRecentlySelectedIndex.current as number;

		const output = cloneArray(selectedIndexes);

		const step = index > mostRecentlySelectedIndex.current! ? 1 : -1;

		while (currentIndex !== mostRecentlySelectedIndex.current) {
			const descendant = descendants[currentIndex];

			if (not(descendant.disabled)) {
				output.push(currentIndex);
			}

			currentIndex += step;
		}

		if (isFunction(props.onSelect)) {
			props.onSelect(event, { selectedIndexes: unique(output) });
		}
	}, []);

	/**
	 * @todo
	 *
	 * 1. Select single index. ✔
	 * 2. Select next index. ✔
	 * 3. Select previous index. ✔
	 * 4. Select from last to current index.
	 * 5. Select from index to start. ✔
	 * 6. Select from index to end. ✔
	 * 7. Select all. ✔
	 */

	return {
		...descendantsContext,
		selectedIndex,
		selectedIndexes,
		orientation,
		multiselectable,
		selectOption,
		selectAllOptions,
		selectToHome,
		selectToEnd,
		setFromMostRecentlySelectedIndex
	};
}

export { ListContextProvider, useListContext };