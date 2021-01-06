import { isString } from "./assertions";

/**
 *
 * @param input
 */
export function trim(input: string): string {
    return isString(input) ? input.trim() : "";
}

/**
 *
 * @param input
 */
export function trimLeft(input: string): string {
    return isString(input) ? input.trimLeft() : "";
}

/**
 *
 * @param input
 */
export function trimRight(input: string): string {
    return isString(input) ? input.trimRight() : "";
}

/**
 * Concatenate multiple strings into single one trimmed on both sides.
 *
 * @param args
 */
export function concatenate(...args: (string | undefined | null)[]): string {
    let output = '';

    for (let i = 0; i < args.length; i++) {
        if (isString(args[i])) {
            output += args[i] + (i !== args.length - 1 ? ' ' : '');
        }
    }

    return output;
}

/**
 * Split a string into substrings using the specified separator and return them as an array.
 * 
 * @param separator 
 * @param input 
 * @param limit 
 */
export function split(separator: string | RegExp = '', input: string, limit?: number) {
    return input.split(separator, limit)
};

/**
 * 
 * @param input 
 */
export function stripWhitespace(input: string): string {
    return input.replace(/\s+/g, '');
}

/**
 * 
 * @param input 
 * @param length 
 * @param pad 
 */
export function padStart(input: string | number, maxLength: number, fillString: string) {
    const string = String(input);

    return string.padStart(maxLength, fillString);
}

/**
 * 
 * @param input 
 * @param length 
 * @param pad 
 */
export function padEnd(input: string | number, maxLength: number, fillString: string) {
    const string = String(input);

    return string.padEnd(maxLength, fillString);
}