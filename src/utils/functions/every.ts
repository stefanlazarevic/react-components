import { ArrayPredicateFunction, LazyIterable, Maybe } from "../../types";
import { isAbsent, isAsyncIterable, isPromise } from "../assertions";

/**
 * Returns true if all values match the predicate.
 * 
 * @param predicate 
 */
export function every<T>(predicate: ArrayPredicateFunction<T>) {
   return function processEvery(data?: Maybe<LazyIterable<T>>) {
      if (isAbsent(data)) {
         return false;
      }

      if (isAsyncIterable(data) || isPromise(data)) {
         return (async () => {
            const stream = isPromise(data) ? await data : data;

            let index = 0;

            for await (let value of stream) {
               if (!predicate(value, index++)) {
                  return false;
               }
            }

            return true;
         })();
      }

      let index = 0;
      for (let value of data) {
         if (!predicate(value, index++)) {
            return false;
         }
      }

      return true;
   }
}