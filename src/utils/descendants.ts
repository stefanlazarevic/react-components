import { IDescendant } from "../interfaces/Descendant";
import { size, lastIndex, getNextIndex, getPreviousIndex } from "./array";
import { not } from "./logic";
import { isDisabledHTMLElement } from "./dom";

/**
 * 
 * @param descendants 
 */
export function focusFirstDescendant(descendants: IDescendant[]) {
	let index = 0;

	while (index < size(descendants)) {
		const { element } = descendants[index];

		if (not(isDisabledHTMLElement(element))) {
			element.focus();
			break;
		} 
		
		index++;
	}
}

/**
 * 
 * @param descendants 
 */
export function focusLastDescendant(descendants: IDescendant[]) {
	let index = lastIndex(descendants);

	while (index > -1) {
		const { element } = descendants[index];

		if (not(isDisabledHTMLElement(element))) {
			element.focus();
			break;
		} 
		
		index--;
	}
}

/**
 * 
 * @param currentIndex 
 * @param descendants 
 */
export function focusNextDescendant(currentIndex: number, descendants: IDescendant[]) {
	let nextIndex = getNextIndex(currentIndex, descendants);

	while (nextIndex !== currentIndex) {
		const { element } = descendants[nextIndex];

		if (not(isDisabledHTMLElement(element))) {
			element.focus();
			break;
		}

		nextIndex = getNextIndex(nextIndex, descendants);
	}
}

/**
 * 
 * @param currentIndex 
 * @param descendants 
 */
export function focusPreviousDescendant(currentIndex: number, descendants: IDescendant[]) {
	let previousIndex = getPreviousIndex(currentIndex, descendants);

	while (previousIndex !== currentIndex) {
		const { element } = descendants[previousIndex];

		if (not(isDisabledHTMLElement(element))) {
			element.focus();
			break;
		}

		previousIndex = getPreviousIndex(previousIndex, descendants);
	}
}