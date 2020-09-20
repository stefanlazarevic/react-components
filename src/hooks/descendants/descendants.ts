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
	isEmpty,
	first,
	last,
	or,
	getNextIndex,
	getPreviousIndex,
} from "../../utils";
import clickAndFocus from "../../utils/dom";
import { IDescendantOptions } from "../../interfaces/DescendantOptions";

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
					if (or(not(isHTMLElement(currentDescendant.element)), isAbsent(descendant.element))) return false;

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
	const clear = useCallback(function clearRegisteredDescendants() {
		setDescendants([]);
	}, []);

	/**
	 * 
	 */
	const getFirstDescendant = useCallback(
		function getFirstDescendant(options: IDescendantOptions = {}) {
			if (not(isEmpty(descendants))) {
				if (options.skipDisabled) {
					let index = getFirstDescendantIndex(descendants);

					return descendants[index];
				}

				return first(descendants);
			}

			return undefined;
		}, 
		[descendants]
	);

	/**
	 * 
	 */
	const getLastDescendant = useCallback(
		function getLastDescendant(options: IDescendantOptions = {}) {
			if (not(isEmpty(descendants))) {
				if (options.skipDisabled) {
					let index = getLastDescendantIndex(descendants);

					return descendants[index];
				}

				return last(descendants);
			}

			return undefined;
		},
		[descendants]
	);

	/**
	 * 
	 */
	const getNextDescendant = useCallback(
		function getLastDescendant(currentIndex: number, options: IDescendantOptions = {}) {
			if (not(isEmpty(descendants))) {
				if (options.skipDisabled) {
					let index = getNextDescendantIndex(currentIndex, descendants);

					return descendants[index];
				}

				return descendants[getNextIndex(currentIndex, descendants)];
			}

			return undefined;
		},
		[descendants]
	);

	/**
	 * 
	 */
	const getPreviousDescendant = useCallback(
		function getLastDescendant(currentIndex: number, options: IDescendantOptions = {}) {
			if (not(isEmpty(descendants))) {
				if (options.skipDisabled) {
					let index = getPreviousDescendantIndex(currentIndex, descendants);

					return descendants[index];
				}

				return descendants[getPreviousIndex(currentIndex, descendants)];
			}

			return undefined;
		},
		[descendants]
	);

	/**
	 *
	 */
	const focusFirstDescendant = useCallback(
		function focusFirstDescendant(options: IDescendantOptions = {}) {
			const firstDescendant = getFirstDescendant(options);

			if (!isAbsent(firstDescendant)) {
				focusElement(firstDescendant.element, options);
			}
		},
		[descendants]
	);

	/**
	 *
	 */
	const focusLastDescendant = useCallback(
		function focusLastDescendant(options: IDescendantOptions = {}) {
			const lastDescendant = getLastDescendant(options);

			if (!isAbsent(lastDescendant)) {
				focusElement(lastDescendant.element, options);
			}
		},
		[descendants]
	);

	/**
	 *
	 * @param currentIndex
	 * @param descendants
	 */
	const focusNextDescendant = useCallback(
		function focusNextDescendant(currentIndex: number, options: IDescendantOptions = {}) {
			const nextDescendant = getNextDescendant(currentIndex, options);

			if (!isAbsent(nextDescendant)) {
				focusElement(nextDescendant.element, options);
			}
		},
		[descendants]
	);

	/**
	 *
	 * @param currentIndex
	 * @param descendants
	 */
	const focusPreviousDescendant = useCallback(
		function focusPreviousDescendant(currentIndex: number, options: IDescendantOptions = {}) {
			const previousDescendant = getPreviousDescendant(currentIndex, options);

			if (!isAbsent(previousDescendant)) {
				focusElement(previousDescendant.element, options);
			}
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
				clear,
				getFirstDescendant,
				getLastDescendant,
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
			clear,
			getFirstDescendant,
			getLastDescendant,
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