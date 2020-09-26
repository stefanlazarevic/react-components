import { LazyIterable } from "../../types";
import { ensureFunction } from "./ensureFunction";

/**
 * We can use pipe to compose functions together and return a new function which combines all other functions.
 * 
 * The difference between pipe and compose is the order of execution of the functions.
 */
export function pipe<T>(...functions: (Function | LazyIterable<T>)[]): Function {
   return functions.reduceRight<Function>((f: Function, g: any) => {
      return function processNext(...args: any) {
         return f(ensureFunction(g)(...args));
      }
   }, ensureFunction(functions.pop()));
}