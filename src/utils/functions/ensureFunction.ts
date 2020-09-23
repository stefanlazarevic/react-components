import { IFunction } from "../../types";
import { isFunction } from "../assertions";

/**
 * Returns input if it is a function otherwise returns input when called.
 * @param input 
 */
export function ensureFunction(input?: any): IFunction {
   return isFunction(input) ? input : () => input
}