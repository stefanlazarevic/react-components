import { isAbsent } from "./assertions";

/**
 *
 */
export function extractAriaProperty<T>(props: T) {
	return function pluck(key: string) {
		return isAbsent(props[key]) ? props[`aria-${key}`] : props[key];
	};
}