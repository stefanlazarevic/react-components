import { isArray, isTruthy, isAbsent } from "./assertions";
import { not } from "./logic";

/**
 * Returns last item index of an array.
 *
 * @param array
 */
export function lastIndex<T>(array: T[] = []): number {
	return array ? array.length - 1 : -1;
}

/**
 * Returns last item from an array.
 *
 * @param array
 */
export function last<T>(array: T[] = []): T {
	return array[lastIndex(array)];
}

/**
 * Returns first item from an array.
 *
 * @param array
 */
export function first<T>(array: T[] = []): T {
	return array[0];
}

/**
 * Checks whether or not an array is empty.
 *
 * @param array
 */
export function isEmpty<T>(array: T[] = []): boolean {
	return !isArray(array) || array.length === 0;
}

/**
 * Find array item that satisfies provided predicate.
 *
 * @param callback
 * @param array
 */
export function find<T>(predicate: (value: T, index: number, original: T[]) => boolean, array: T[]): T | undefined {
	return array.find(predicate);
}

/**
 * Find index of an item in an array that satisfies provided predicate.
 *
 * @param callback
 * @param array
 */
export function findIndex<T>(predicate: (value: T, index: number, original: T[]) => boolean, array: T[]): number {
	return array.findIndex(predicate);
}

/**
 * Converts iterable value to array.
 *
 * @param value
 */
export function toArray<T>(value: Iterable<T>): T[] {
	return Array.from(value);
}

/**
 * Returns all arguments concatenated into single array.
 */
export function concat<T>(...args: any[]): T[] {
	return args.reduce((output: any[], value) => output.concat(value), []);
}

/**
 * Filter all items which satisfies predicate.
 *
 * @param predicate
 * @param array
 */
export function filter<T>(predicate: (value: T, index: number, original: T[]) => boolean, array: T[] = []): T[] {
	return array.filter(predicate);
}

/**
 * Map all items which satisfies predicate.
 *
 * @param predicate
 * @param array
 */
export function map<T>(callbackfn: (value: T, index: number, original: T[]) => any, array: T[] = []): any[] {
	return array.map(callbackfn);
}

/**
 * Returns a copy of array with all falsy values removed.
 *
 * @param array
 */
export function compact(array: any[] = []): NonNullable<any>[] {
	return filter(isTruthy, array) as NonNullable<any>[];
}

/**
 * Returns new array with item inserted at specified index.
 *
 * @param index
 * @param item
 * @param array
 */
export function insertAt<T>(index: number, item: T, array: T[] = []): T[] {
	return [...array.slice(0, index), item, ...array.slice(index)];
}

/**
 * Returns array size in safe way which means that if value is missing 0 will be returned.
 *
 * @param array
 */
export function size(array: any[] = []): number {
	return isArray(array) ? array.length : 0;
}

/**
 * Returns next array index in safe circular way which means that if we are at last index
 * function will return first index.
 *
 * @param currentIndex
 * @param array
 */
export function getNextIndex(currentIndex: number, array: any[] = []): number {
	return (currentIndex + 1) % size(array);
}

/**
 * Returns previous array index in safe circular way which means that if we are at first index
 * function will return last index.
 *
 * @param currentIndex
 * @param array
 */
export function getPreviousIndex(currentIndex: number, array: any[] = []): number {
	const length = size(array);

	return (currentIndex + length - 1) % length;
}

/**
 * Returns array with non repetitive values.
 *
 * @param array
 */
export function unique(array: any[] = []): any[] {
	if (not(isArray(array))) return [];

	const cache = new Map();

	const output = filter((item) => {
		if (cache.has(item)) {
			return false;
		}

		cache.set(item, true);

		return true;
	}, array);

	cache.clear();

	return output;
}

/**
 * Returns array with non repetitive values.
 *
 * @param array
 */
export const removeDuplicates = unique;

/**
 * Returns shallow cloned array.
 *
 * @param value
 */
export function cloneArray<T>(array: T[] = []): T[] {
	if (not(isArray(array))) return [];

	return array.slice();
}

/**
 *
 * @param item
 * @param array
 */
export function contains(item: any, array: any[] = []): boolean {
	if (not(isArray(array))) return false;

	return findIndex((element) => element === item, array) !== -1;
}

/**
 *
 */
export function filterMap<T, O>(callbackfn: (item: T, index: number, array: T[]) => any, array: T[]): O[] {
	const output = [];

	for (let index = 0; index < size(array); index++) {
		const item = callbackfn(array[index], index, array);

		if (not(isAbsent(item))) {
			output.push(item);
		}
	}

	return output;
}

/**
 * Returns a new copy of the array with the element at the provided index replaced with the given value.
 *
 * @param newValue
 * @param targetIndex
 * @param array
 */
export function update(newValue: any, targetIndex: number, array: any[]) {
	return map((value, currentIndex) => (currentIndex === targetIndex ? newValue : value), array);
}

/**
 * 
 * @param callbackfn 
 * @param array 
 */
export function forEach(callbackfn: (item: any, index: number, array: any[]) => any, array: any[] = []) {
	array.forEach(callbackfn);
};

/**
 * 
 * @param array 
 */
export function copyArray(array: any[] = []) {
	return array.slice();
}

/**
 * 
 * @param chunkSize 
 * @param array 
 */
export function chunk(chunkSize: number, array: any[] = []): any[][] {
	const output = [];
	const chunk = [];

	for (let index = 0; index < size(array); index++) {
		chunk.push(array[index]);

		if ((index + 1) % chunkSize === 0) {
			output.push(copyArray(chunk));
			chunk.length = 0;
		}
	}

	if (chunk.length > 0) {
		output.push(chunk);
	}

	return output;
}