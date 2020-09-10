/**
 * Checks whether or not a value is a number.
 * 
 * @param value
 */
export function isNumber(value: any): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

/**
 * Checks whether or not a value is a function.
 *
 * @param value
 */
export function isFunction(value: any): value is Function {
  return !!(value && {}.toString.call(value) == "[object Function]");
}

/**
 * Checks whether or not a value is a boolean.
 *
 * @param value
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean";
}

/**
 * Checks whether or not a value is a string.
 *
 * @param value
 */
export function isString(value: any): value is string {
  return typeof value === "string";
}

/**
 * Checks whether or not a value is an array.
 *
 * @param value
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

/**
 * Checks whether or not a value is an object.
 *
 * @param value
 */
export function isObject(value: any): value is object {
  return value === Object(value) && !isArray(value);
}

/**
 * Checks whether or not a value is a valid JSON string.
 *
 * @param value
 */
export function isJson(value: any): value is string {
  if (isString(value)) {
    try {
      JSON.parse(value);
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * Checks whether or not a value is a tupple.
 *
 * @param value
 */
export function isTupple<T>(value: any): value is T {
  return isArray(value) && value.length === 2;
}

/**
 * Checks whether or not a value is undefined or null.
 * 
 * @param value 
 */
export function isAbsent(value: any): value is undefined | null {
  return value === undefined || value === null;
}

/**
 * Return whether value is truthy or not.
 * 
 * @param value 
 */
export function isTruthy(value: any): boolean {
  return !!value;
}

/**
 * Return whether value is falsy or not.
 * 
 * Values such as `false`, `null`, `0`, `""`, `undefined` and `NaN` are considered "falsy".
 * 
 * @param value 
 */
export function isFalsy(value: any): boolean {
  return !isTruthy(value);
}

/**
 * Returns whether value is instance of HTMLElement or not.
 * 
 * @param value 
 */
export function isHTMLElement(value: any): value is HTMLElement {
  return value instanceof HTMLElement;
}

/**
 * Checks whether environment is browser or not.
 */
export default function isBrowser() {
  return typeof window !== 'undefined' && window.document;
}