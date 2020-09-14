import { isHTMLElement } from "./assertions";

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
export function focusElement(element: HTMLElement, options?: FocusOptions) {
	if (isHTMLElement(element)) {
		return requestAnimationFrame(() => {
			element.focus(options);
		});
	}

	return -1;
}

/**
 * 
 * @param element 
 */
export default function clickAndFocus(element: HTMLElement, options?: FocusOptions) {
	if (isHTMLElement(element)) {
		element.click();
		element.focus(options);
	}
}

/**
 * 
 * @param element 
 * @param parent 
 */
export function scrollIntoViewIfNeeded(element: HTMLElement, parent: HTMLElement, block: "center" | "end" | "nearest" | "start") {
	const { scrollTop, offsetHeight: parentHeight } = parent;
	const { offsetTop, offsetHeight: elementHeight } = element;

	const top = scrollTop;
	const bottom = scrollTop + parentHeight;

	if (top < offsetTop && offsetTop + elementHeight < bottom) {
		return;
	}

	element.scrollIntoView({ block });
}