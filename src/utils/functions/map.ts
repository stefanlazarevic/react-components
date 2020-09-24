import { LazyIterable } from "../../types";
import { isAbsent, isAsyncIterable, isPromise } from "../assertions";

/**
 * Transforms collection or iterable object.
 * @param transformFn 
 */
export function map<T>(transformFn: (value: T, index: number) => T) {
   return function takeArguments(data: LazyIterable<T>) {
      if (isAbsent(data)) {
         return [];
      }

      if (isAsyncIterable(data) || isPromise(data)) {
         return (async () => {
            const stream = isPromise(data) ? await data : data;

            return {
               async *[Symbol.asyncIterator]() {
                  let index = 0;
                  for await (const value of stream) {
                     yield transformFn(value, index++);
                  }
               }
            }
         })();
      }

      return {
         *[Symbol.iterator]() {
            let index = 0;
            for (const value of data) {
               yield transformFn(value, index++);
            }
         }
      }
   }
}