import { LazyIterable } from "../../types";
import { isAsyncIterable, isPromise } from "../assertions";

/**
 * 
 * @param predicate 
 */
export function findIndex<T>(predicate: Function) {
   return function takeArguments(data: LazyIterable<T>) {
      if (!data) {
         return -1;
      }

      if (isAsyncIterable(data) || isPromise(data)) {
         return (async () => {
            const stream = isPromise(data) ? await data : data;

            let index = 0;

            for await (const value of stream) {
               if (predicate(value, index)) {
                  return index;
               }

               index++;
            }

            return -1;
         })();
      }

      let index = 0;
      for (const value of data) {
         if (predicate(value, index)) {
            return index;
         }

         index++;
      }

      return -1;
   }
}