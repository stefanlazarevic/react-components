import { isObject, isString } from "./typeof";
import { not } from "./logic";
import { trim, split } from "./string";

/**
 * Function which extracts deeply nested object property in a safe manner.
 * 
 * @param path 
 * @param target 
 */
export function pluck(path: string, target: object) {
	if (not(isObject(target))) {
		return undefined;
	}

	if (isString(path)) {
		const keys = split('.', trim(path));

		keys.reduce(function pluckIfExistant(object, key) {
			if (isObject(object) && key in object) {
				return object[key];
			}
		}, target);
	}

	return undefined;
}