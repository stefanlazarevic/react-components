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

/**
 * Functional logical and.
 * @param first 
 * @param second 
 */
export function and(...args: any): boolean {
  let isTrue = true;

  for (let index = 0; index < args.length; index++) {
    if (!isTrue) {
      return false;
    }

    isTrue = isTrue && args[index];
  }

  return isTrue;
}