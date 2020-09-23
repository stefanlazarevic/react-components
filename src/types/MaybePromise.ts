import { Maybe } from "./Maybe";

export type MaybePromise<T> = Maybe<T | Promise<T>>;