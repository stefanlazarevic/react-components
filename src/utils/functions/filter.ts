import { ArrayPredicateFunction, LazyIterable } from "../../types";
import { isAbsent, isAsyncIterable, isPromise } from "../assertions";

export function filter<T>(predicate: ArrayPredicateFunction<T>) {
   return function takeArguments(data: LazyIterable<T>) {
      if (isAbsent(data)) {
         return [];
      }

      if (isAsyncIterable(data) || isPromise(data)) {
         return (async () => {
            const stream = isPromise(data) ? await data : data;

            // Return async generator as a computed property.
            return {
               async *[Symbol.asyncIterator]() {
                  let index = 0;
                  for await (let value of stream) {
                     if (!predicate(value, index++)) {
                        continue;
                     }

                     yield value;
                  }
               }
            }
         })();
      }

      // Return generator as a computed property.
      return {
         *[Symbol.iterator]() {
            let index = 0;
            for (let value of data) {
               if (!predicate(value, index++)) {
                  continue;
               }

               yield value;
            }
         }
      }
   }
}