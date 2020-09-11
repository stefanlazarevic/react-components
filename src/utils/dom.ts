import { isHTMLElement } from "./typeof";

/**
 *
 * @param element
 */
export function isDisabledHTMLElement(element: HTMLElement) {
	return element.hasAttribute("aria-disabled") || element.hasAttribute("disabled");
}

/**
 * 
 * @param element
 */
export function focusElement(element: HTMLElement) {
	if (isHTMLElement(element)) {
		element.focus();
	}
}

/**
 * 
 * @param element 
 */
export default function clickAndFocus(element: HTMLElement) {
	if (isHTMLElement(element)) {
		element.click();
		element.focus();
	}
}