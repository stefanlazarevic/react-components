import { isObject, isString } from "./assertions";
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

		return keys.reduce(function pluckIfExistant(object, key) {
			if (isObject(object) && key in object) {
				return object[key];
			}
		}, target);
	}

	return undefined;
}

/**
 * 
 * @param value 
 */
export function cloneObject(value: object) {
	if (isObject(value)) {
		return Object.assign({}, value);
	}

	return value;
}

/**
 * 
 * @param key 
 * @param value 
 * @param obj 
 */
export function set(key: string, value: any, obj: object) {
	return {
		...obj,
		[key]: value
	}
}