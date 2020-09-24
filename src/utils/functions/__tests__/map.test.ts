import { isIterable } from "../../assertions";
import { filter } from "../filter";
import { map } from "../map";
import { pipe } from "../pipe";
import { toArray } from "../toArray";

describe("map", () => {
   test("Should return function when called.", () => {
      expect(map((x: any) => x)).toBeInstanceOf(Function);
   });

   test("Should return iterator when called with arguments.", () => {
      const program = map((x: any) => x)([]);

      expect(isIterable(program)).toBeTruthy();
   });

   test("Should be composable.", () => {
      const program = pipe(map((x: any) => x));

      expect([...program([1, 2, 3])]).toEqual([1, 2, 3]);
   });

   test("Real case scenario", () => {
      const program = pipe(
         filter((x: number) => x > 50),
         map((x: number) => x ** 2),
         toArray()
      );

      expect(program([49, 50, 51, 52])).toEqual([2601, 2704]);
   });
});