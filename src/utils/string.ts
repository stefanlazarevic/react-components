import { isString } from "./assertions";
import { compact } from "./array";

/**
 *
 * @param value
 */
export function trim(value: string): string {
    return isString(value) ? value.trim() : "";
}

/**
 *
 * @param value
 */
export function trimLeft(value: string): string {
    return isString(value) ? value.trimLeft() : "";
}

/**
 *
 * @param value
 */
export function trimRight(value: string): string {
    return isString(value) ? value.trimRight() : "";
}

/**
 * Concatenate multiple strings into single one trimmed on both sides.
 *
 * @param args
 */
export function concatenate(...args: (string | undefined | null)[]): string {
    return trim(compact(args).join(" "));
}

/**
 * Split a string into substrings using the specified separator and return them as an array.
 * 
 * @param separator 
 * @param value 
 * @param limit 
 */
export function split(separator: string | RegExp = '', value: string, limit?: number) {
    return value.split(separator, limit)
};

/**
 * 
 * @param value 
 */
export function stripWhitespace(value: string): string {
    return value.replace(/\s+/g, '');
}

/**
 * 
 * @param value 
 * @param length 
 * @param pad 
 */
export function padStart(value: string | number, maxLength: number, fillString: string) {
    const string = String(value);

    return string.padStart(maxLength, fillString);
}

/**
 * 
 * @param value 
 * @param length 
 * @param pad 
 */
export function padEnd(value: string | number, maxLength: number, fillString: string) {
    const string = String(value);

    return string.padEnd(maxLength, fillString);
}