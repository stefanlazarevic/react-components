export function array_lastIndex<T>(array: T[] = []): number {
  return array.length - 1;
}

export function array_last<T>(array: T[] = []): T {
  return array[array_lastIndex(array)];
}

export function array_first<T>(array: T[] = []): T {
  return array[0];
}

export function array_empty<T>(array: T[] = []): boolean {
  return array.length === 0;
}