/**
 * Functional negation of a value.
 * 
 * @param value 
 */
export function not(value: any): boolean {
  return !value;
}

/**
 * Functional logical or which returns true only when one argument is truthy.
 * 
 * @param first 
 * @param second 
 */
export function xor(first: any, second: any): boolean {
  return !!(first !== second);
}