/**
 * @todo Move outside of hooks and rename.
 * @param classes 
 */
export function useClassNames(...classes: (string | undefined)[]) {
	return Array.from(classes)
		.filter((c) => c)
		.join(" ")
		.trim();
}