function lastIndex<T>(array: T[] = []): number {
	return array ? array.length - 1 : -1;
}

function last<T>(array: T[] = []): T {
	return array[lastIndex(array)];
}

function first<T>(array: T[] = []): T {
	return array[0];
}

function isEmpty<T>(array: T[] = []): boolean {
	return !array || array.length === 0;
}

export default {
	lastIndex,
	last,
	first,
	isEmpty,
};