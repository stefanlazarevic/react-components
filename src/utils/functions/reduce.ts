import { LazyIterable } from "../../types";
import { isAbsent, isAsyncIterable, isPromise } from "../assertions";

export function reduce<R, T = R>(callbackfn: (acc: R, value: T, index: number) => R, initial: R) {
   return function takeArguments(data: LazyIterable<T>) {
      if (isAbsent(data)) {
         return;
      }

      let accumulator = initial;

      if (isAsyncIterable(data) || isPromise(data)) {
         return (async () => {
            const stream = isPromise(data) ? await data : data;

            let index = 0;

            for await (let value of stream) {
               accumulator = callbackfn(accumulator, value, index++);
            }

            return accumulator;
         })();
      }

      let index = 0;
      
      for (let value of data) {
         accumulator = callbackfn(accumulator, value, index++);
      }

      return accumulator;
   }
}