import { isAbsent } from "./typeof";

/**
 *
 */
export function extractAriaProperty(props: object) {
	return function pluck(key: string) {
		return isAbsent(props[key]) ? props[`aria-${key}`] : props[key];
	};
}