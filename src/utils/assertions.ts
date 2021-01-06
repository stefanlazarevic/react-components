/**
 * Checks whether or not a value is a number.
 * 
 * @param input
 */
export function isNumber(input: any): input is number {
  return typeof input === "number" && !Number.isNaN(input);
}

/**
 * 
 * @param input 
 */
export function isPositiveNumber(input: number): boolean {
  return input > -1;
}

/**
 * Checks whether or not a input is a function.
 *
 * @param input
 */
export function isFunction(input: any): input is Function {
  return !!(input && {}.toString.call(input) == "[object Function]");
}

/**
 * Checks whether or not a input is a boolean.
 *
 * @param input
 */
export function isBoolean(input: any): input is boolean {
  return typeof input === "boolean";
}

/**
 * Checks whether or not a input is a string.
 *
 * @param input
 */
export function isString(input: any): input is string {
  return typeof input === "string";
}

/**
 * Checks whether or not a input is an array.
 *
 * @param input
 */
export function isArray<T>(input: any): input is T[] {
  return Array.isArray(input);
}

/**
 * Checks whether or not a input is an object.
 *
 * @param input
 */
export function isObject(input: any): input is object {
  return input === Object(input) && !isArray(input);
}

/**
 * Checks whether or not a input is a valid JSON string.
 *
 * @param input
 */
export function isJson(input: any): input is string {
  if (isString(input)) {
    try {
      JSON.parse(input);
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * Checks whether or not a input is a tuple.
 *
 * @param input
 */
export function isTuple<T>(input: any): input is T {
  return isArray(input) && input.length === 2;
}

/**
 * Checks whether or not a input is undefined or null.
 * 
 * @param input 
 */
export function isAbsent(input: any): input is undefined | null {
  return input === undefined || input === null;
}

/**
 * Return whether input is truthy or not.
 * 
 * @param input 
 */
export function isTruthy(input: any): boolean {
  return !!input;
}

/**
 * Return whether input is falsy or not.
 * 
 * inputs such as `false`, `null`, `0`, `""`, `undefined` and `NaN` are considered "falsy".
 * 
 * @param input 
 */
export function isFalsy(input: any): boolean {
  return !isTruthy(input);
}

/**
 * Returns whether input is instance of HTMLElement or not.
 * 
 * @param input 
 */
export function isHTMLElement(input: any): input is HTMLElement {
  return input instanceof HTMLElement;
}

/**
 * Checks whether environment is browser or not.
 */
export function isBrowser() {
  return typeof window !== 'undefined' && window.document;
}

/**
 * 
 * @param element 
 */
export function isActiveElement(element: Element) {
  return document.activeElement === element;
} 

/**
 * 
 * @param input 
 */
export function isElement(input: any): input is Element {
  return input instanceof Element;
}

/**
 * 
 * @param input 
 */
export function isDate(input: any): input is Date {
  return input instanceof Date;
}

/**
 * 
 * @param input 
 */
export function isIterable<T>(input: any): input is Iterable<T> {
  if (typeof input !== 'object' || input === null) {
    return false
  }

  return input[Symbol.iterator] !== undefined
}

/**
 * 
 * @param input 
 */
export function isAsyncIterable<T>(input: any): input is AsyncIterable<T> {
  if (typeof input !== 'object' || input === null) {
    return false;
  }

  return input[Symbol.asyncIterator] !== undefined
}

/**
 * 
 * @param input 
 */
export function isPromise<T>(input: any): input is Promise<T> {
  return input instanceof Promise;
}

/**
 * 
 * @param input 
 */
export function isSymbol(input: any): input is Symbol {
  return typeof input === 'symbol';
}

/**
 * 
 */
export function isTouchDevice() {
  return 'ontouchstart' in window ||
    navigator.maxTouchPoints   // IE10/11 & Surface
}

/**
 * 
 */
export function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  if (
    /windows phone/i.test(userAgent) ||
    /android/i.test(userAgent) ||
    (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
  ) {
    return true;
  }

  return false;
}

/**
 * 
 */
export function isGenerator(fn: Function) {
  return ['GeneratorFunction', 'AsyncGeneratorFunction'].includes(fn.constructor.name);
}