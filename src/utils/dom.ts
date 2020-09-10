/**
 * 
 * @param element 
 */
export function isDisabledHTMLElement(element: HTMLElement) {
	return (
		element.hasAttribute("aria-disabled") || element.hasAttribute("disabled")
	);
}