import { isArray } from "./assertions";
import { pipe, toArray } from "./functions";
import { unique } from "./functions/unique";
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
export const removeDuplicates = pipe(unique(), toArray());

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