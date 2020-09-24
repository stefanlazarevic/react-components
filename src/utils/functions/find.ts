import { LazyIterable } from "../../types";
import { isAbsent, isAsyncIterable, isPromise } from "../assertions";

/**
 * 
 * @param predicateFn 
 */
export function find<T>(predicateFn: (input: T, index: number) => boolean) {
   return function findFn(data: LazyIterable<T>): any {
      if (isAbsent(data)) {
         return undefined;
      }

      if (isAsyncIterable(data) || isPromise(data)) {
         return (async () => {
            const stream = isPromise(data) ? await data : data;

            let index = 0;

            for await (let value of stream) {
               if (predicateFn(value, index++)) {
                  return value;
               }
            }

            return undefined
         })();
      }

      let index = 0;

      for (let value of data) {
         if (predicateFn(value, index++)) {
            return value;
         }
      }

      return undefined
   }
}