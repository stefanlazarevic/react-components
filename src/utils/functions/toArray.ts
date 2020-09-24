import { LazyIterable } from "../../types";
import { reduce } from "./reduce";

export function toArray<T>() {
   return function takeArguments(data: LazyIterable<T>) {
      return reduce<T[], T>((acc, current) => {
         acc.push(current)
         return acc
      }, [])(data)
   }
}