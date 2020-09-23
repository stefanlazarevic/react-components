import { IFunction, LazyIterable } from "../../types";
import { ensureFunction } from "./ensureFunction";

/**
 * We can use pipe to compose functions together and return a new function which combines all other functions.
 *
 * The difference between pipe and compose is the order of execution of the functions.
 */
export function compose<T>(fn: IFunction | LazyIterable<T>, ...functions: (IFunction | LazyIterable<T>)[]) {
   return functions.reduce((f: IFunction, g: any) => {
      return function takeArguments(...args: any) {
         return f(ensureFunction(g)(...args));
      }
   }, ensureFunction(fn));
}