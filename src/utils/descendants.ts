import { IDescendant } from "../interfaces/Descendant";
import { size, lastIndex, getNextIndex, getPreviousIndex } from "./array";
import { not } from "./logic";
import clickAndFocus, { isDisabledHTMLElement, focusElement } from "./dom";

/**
 *
 * @param currentIndex
 * @param descendants
 */
export function getNextDescendantIndex(currentIndex: number, descendants: IDescendant[]) {
	let nextIndex = getNextIndex(currentIndex, descendants);

	while (nextIndex !== currentIndex) {
		const { element } = descendants[nextIndex];

		if (not(isDisabledHTMLElement(element))) {
			return nextIndex;
		}

		nextIndex = getNextIndex(nextIndex, descendants);
	}

	return currentIndex;
}

/**
 *
 * @param currentIndex
 * @param descendants
 */
export function getPreviousDescendantIndex(currentIndex: number, descendants: IDescendant[]) {
	let previousIndex = getPreviousIndex(currentIndex, descendants);

	while (previousIndex !== currentIndex) {
		const { element } = descendants[previousIndex];

		if (not(isDisabledHTMLElement(element))) {
			return previousIndex;
		}

		previousIndex = getPreviousIndex(previousIndex, descendants);
	}

	return currentIndex;
}

/**
 *
 * @param descendants
 */
export function getFirstDescendantIndex(descendants: IDescendant[]) {
	let index = 0;

	while (index < size(descendants)) {
		const { element } = descendants[index];

		if (not(isDisabledHTMLElement(element))) {
			return index;
		}

		index++;
	}

	return -1;
}

export function getLastDescendantIndex(descendants: IDescendant[]) {
	let index = lastIndex(descendants);

	while (index > -1) {
		const { element } = descendants[index];

		if (not(isDisabledHTMLElement(element))) {
			return index;
		}

		index--;
	}

	return -1;
}

/**
 *
 * @param descendants
 */
export function focusFirstDescendant(descendants: IDescendant[]) {
	let index = getFirstDescendantIndex(descendants);

	const { element } = descendants[index];

	focusElement(element);
}

/**
 *
 * @param descendants
 */
export function focusLastDescendant(descendants: IDescendant[]) {
	let index = getLastDescendantIndex(descendants);

	const { element } = descendants[index];

	focusElement(element);
}

/**
 *
 * @param currentIndex
 * @param descendants
 */
export function focusNextDescendant(currentIndex: number, descendants: IDescendant[]) {
	let nextIndex = getNextDescendantIndex(currentIndex, descendants);

	const { element } = descendants[nextIndex];

	focusElement(element);
}

/**
 *
 * @param currentIndex
 * @param descendants
 */
export function focusPreviousDescendant(currentIndex: number, descendants: IDescendant[]) {
	const previousIndex = getPreviousDescendantIndex(currentIndex, descendants);

	const { element } = descendants[previousIndex];

	focusElement(element);
}
/**
 * 
 * @param currentIndex 
 * @param descendants 
 */
export function selectPreviousDescendant(currentIndex: number, descendants: IDescendant[]) {
	const previousIndex = getPreviousDescendantIndex(currentIndex, descendants);

	const { element } = descendants[previousIndex];

	clickAndFocus(element);
}

/**
 * 
 * @param currentIndex 
 * @param descendants 
 */
export function selectNextDescendant(currentIndex: number, descendants: IDescendant[]) {
	const nextIndex = getNextDescendantIndex(currentIndex, descendants);

	const { element } = descendants[nextIndex];

	clickAndFocus(element);
}