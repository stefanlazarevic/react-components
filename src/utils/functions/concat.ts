import { LazyIterable } from "../../types";
import { isEmpty } from "../array";
import { isAsyncIterable, isPromise } from "../assertions";

/**
 * Concat multiple iterators or arrays into a single iterator.
 * @param data 
 */
export function concat<T>(...data: (T | LazyIterable<T>)[]) {
   if (isEmpty(data)) {
      return {
         *[Symbol.iterator]() {
            yield undefined;
         }
      };
   }

   if (data.some(isAsyncIterable) || data.some(isPromise)) {
      return {
         async *[Symbol.asyncIterator]() {
            for await (let value of await Promise.all(data)) {
               yield* value;
            }
         },
      }
   }

   return {
      *[Symbol.iterator]() {
         for (const value of data as Iterable<T>[]) {
            yield* value;
         } 
      },
   }
}