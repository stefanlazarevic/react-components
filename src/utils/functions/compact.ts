import { filter } from "./filter";

/**
 * Filters out all falsey values.
 */
export function compact<T>() {
   return filter<T>(Boolean);
}