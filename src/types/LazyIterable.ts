import { MaybePromise } from "./MaybePromise";

export type LazyIterable<T> = MaybePromise<Iterable<T> | AsyncIterable<T>>