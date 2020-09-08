import { isArray } from ".";
import { isTruthy } from ".";

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
export function filter<T>(predicate: (value: T, index: number, original: T[]) => boolean, array: T[]): T[] {
	return array.filter(predicate);
}

/**
 * Map all items which satisfies predicate.
 * 
 * @param predicate 
 * @param array 
 */
export function map<T>(callbackfn: (value: T, index: number, original: T[]) => any, array: T[]): any[] {
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
export function insertAt<T>(index: number, item: T, array: T[]): T[] {
	return [
		...array.slice(0, index),
		item,
		...array.slice(index)
	];
}