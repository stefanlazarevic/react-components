import { useCallback, useState, useMemo } from "react";
import { IDescendant } from "../../interfaces/Descendant";
import { IDescendantContext } from "../../interfaces/DescentantContext";

import {
	find,
	not,
	findIndex,
	isHTMLElement,
	concat,
	insertAt,
	filter,
	isAbsent,
	getFirstDescendantIndex,
	getLastDescendantIndex,
	getNextDescendantIndex,
	getPreviousDescendantIndex,
	focusElement,
} from "../../utils";
import clickAndFocus from "../../utils/dom";

/**
 * React hook which is used on component interface level.
 */
export function useDescendants(): IDescendantContext {
	const [descendants, setDescendants] = useState<IDescendant[]>([]);

	/**
	 *
	 */
	const register = useCallback(function registerDescendant(descendant: IDescendant) {
		if (not(descendant.element)) {
			return;
		}

		setDescendants(function updateDescendantsState(currentDescendants) {
			if (isAbsent(find((currentDescendant) => currentDescendant.element === descendant.element, currentDescendants))) {
				const index = findIndex((currentDescendant) => {
					if (not(isHTMLElement(currentDescendant.element)) || isAbsent(descendant.element)) return false;

					return Boolean(currentDescendant.element.compareDocumentPosition(descendant.element) & Node.DOCUMENT_POSITION_PRECEDING);
				}, currentDescendants);

				if (index === -1) {
					return concat(currentDescendants, descendant);
				}

				return insertAt(index, descendant, currentDescendants);
			}

			return currentDescendants;
		});
	}, []);

	/**
	 *
	 */
	const unregister = useCallback(function unregisterDescendant(descendant: IDescendant) {
		setDescendants(function updateDescendantsState(currentDescendants) {
			return filter((currentDescendant) => currentDescendant.element !== descendant.element, currentDescendants);
		});
	}, []);

	/**
	 *
	 */
	const focusFirstDescendant = useCallback(
		function focusFirstDescendant(options?: FocusOptions) {
			let index = getFirstDescendantIndex(descendants);

			const { element } = descendants[index];

			focusElement(element, options);
		},
		[descendants]
	);

	/**
	 *
	 */
	const focusLastDescendant = useCallback(
		function focusLastDescendant(options?: FocusOptions) {
			let index = getLastDescendantIndex(descendants);

			const { element } = descendants[index];

			focusElement(element, options);
		},
		[descendants]
	);

	/**
	 *
	 * @param currentIndex
	 * @param descendants
	 */
	const focusNextDescendant = useCallback(
		function focusNextDescendant(currentIndex: number, options?: FocusOptions) {
			let nextIndex = getNextDescendantIndex(currentIndex, descendants);

			const { element } = descendants[nextIndex];

			focusElement(element, options);
		},
		[descendants]
	);

	/**
	 *
	 * @param currentIndex
	 * @param descendants
	 */
	const focusPreviousDescendant = useCallback(
		function focusPreviousDescendant(currentIndex: number, options?: FocusOptions) {
			const previousIndex = getPreviousDescendantIndex(currentIndex, descendants);

			const { element } = descendants[previousIndex];

			focusElement(element, options);
		},
		[descendants]
	);

	/**
	 *
	 */
	const selectFirstDescendant = useCallback(
		function selectFirstDescendant() {
			let index = getFirstDescendantIndex(descendants);

			const { element } = descendants[index];

			clickAndFocus(element);
		},
		[descendants]
	);

	/**
	 *
	 */
	const selectLastDescendant = useCallback(
		function selectLastDescendant() {
			let index = getLastDescendantIndex(descendants);

			const { element } = descendants[index];

			clickAndFocus(element);
		},
		[descendants]
	);

	/**
	 *
	 * @param currentIndex
	 * @param descendants
	 */
	const selectPreviousDescendant = useCallback(
		function selectPreviousDescendant(currentIndex: number) {
			const previousIndex = getPreviousDescendantIndex(currentIndex, descendants);

			const { element } = descendants[previousIndex];

			clickAndFocus(element);
		},
		[descendants]
	);

	/**
	 *
	 * @param currentIndex
	 * @param descendants
	 */
	const selectNextDescendant = useCallback(
		function selectNextDescendant(currentIndex: number) {
			const nextIndex = getNextDescendantIndex(currentIndex, descendants);

			const { element } = descendants[nextIndex];

			clickAndFocus(element);
		},
		[descendants]
	);

	/**
	 *
	 */
	const context = useMemo(
		function cachedDescendantsContext(): IDescendantContext {
			return {
				descendants,
				register,
				unregister,
				focusFirstDescendant,
				focusLastDescendant,
				focusNextDescendant,
				focusPreviousDescendant,
				selectFirstDescendant,
				selectLastDescendant,
				selectNextDescendant,
				selectPreviousDescendant,
			};
		},
		[
			descendants,
			register,
			unregister,
			focusFirstDescendant,
			focusLastDescendant,
			focusNextDescendant,
			focusPreviousDescendant,
			selectFirstDescendant,
			selectLastDescendant,
			selectNextDescendant,
			selectPreviousDescendant,
		]
	);

	return context;
}