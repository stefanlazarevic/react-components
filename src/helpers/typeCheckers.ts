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
 * Checks whether or not a value is a object.
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