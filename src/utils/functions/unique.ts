import { LazyIterable } from "../../types";
import { isAsyncIterable, isPromise } from "../assertions";

export function unique<T>() {
   return function takeArguments(data: LazyIterable<T>) {
      const cache = new Set<T>();

      if (isAsyncIterable(data) || isPromise(data)) {
         return (async () => {
            return {
               async *[Symbol.asyncIterator]() {
                  const stream = isPromise(data) ? await data : data;
                  
                  for await (const value of stream) {
                     if (!cache.has(value)) {
                        cache.add(value);
                        yield value;
                     }
                  }
               }
            }
         })();
      }

      return {
         *[Symbol.iterator]() {
            for (const value of data) {
               if (!cache.has(value)) {
                  cache.add(value);
                  yield value;
               }
            }
         }
      }
   }
}