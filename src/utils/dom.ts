import { isHTMLElement, isElement } from "./assertions";

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
export function focusElement(element?: HTMLElement, options?: FocusOptions) {
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
		return requestAnimationFrame(() => {
			element.click();
			element.focus(options);
		});
	}

	return -1;
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

/**
 * 
 * @param options 
 */
export function scrollToActiveElement(options?: ScrollIntoViewOptions) {
	const {activeElement} = document;

	if (isElement(activeElement)) {
		activeElement.scrollIntoView(options);
	}
}

/**
 * 
 * @param element 
 * @param parent 
 */
export function isDirectChild(element: Element, parent: Element): boolean {
	return Array.from(parent.children).includes(element);
}

/**
 * 
 * @param element 
 */
export function getFocusableElements(element: Element) {
	const focusableElements = Array.from(element.querySelectorAll(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
		[href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
		input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
		textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
		[contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`
	));

	const visibleFocusableElements = [];

	for (let focusableElement of focusableElements) {
		if (getComputedStyle(focusableElement).display !== "none" && getComputedStyle(focusableElement).visibility !== "hidden") {
			visibleFocusableElements.push(focusableElement);
		}
	}

	return visibleFocusableElements;
}