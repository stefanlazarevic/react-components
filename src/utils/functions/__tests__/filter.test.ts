import { isIterable } from "../../assertions";
import { filter } from "../filter";
import { pipe } from "../pipe";
import { range } from "../range";
import { toArray } from "../toArray";

describe("filter", () => {
   test("Should return function when called.", () => {
      expect(filter((x: any) => x)).toBeInstanceOf(Function);
   });

   test("Should return iterator when called with data.", () => {
      const program = filter((x: any) => x === 1)([]);

      expect(isIterable(program)).toBeTruthy();
   });

   test("Should be composable", () => {
      const program = pipe(filter((x: any) => x === 1));

      expect(isIterable(program([1, 2, 3]))).toBeTruthy();
   });

   test("Should keep only values that matches predicate.", () => {
      const program = pipe(filter((x: any) => x === 1), toArray());

      expect(program([1, 2, 3])).toEqual([1]);
   });

   test("Should keep only values that matches predicate. (2)", () => {
      const program = pipe(filter((x: any) => x === 1));

      expect(Array.from(program([1, 2, 3]))).toEqual([1]);
   });

   test("Should keep only values that matches predicate. (3)", () => {
      const program = pipe(filter((x: any) => x === 1));

      expect([...program([1, 2, 3])]).toEqual([1]);
   });

   test("Should keep only values that matches predicate. (async)", async () => {
      const program = pipe(filter((x: any) => x > 50));

      const getValues = async () => Array.from(range(0, 100));

      expect(await Array.from(program(await getValues()))).toHaveLength(50);
   });

   test("Should keep only values that matches predicate. (async) (2)", async () => {
      const program = pipe(filter((x: any) => x > 50), toArray());

      const getValues = async () => range(0, 100);

      expect(await program(await getValues())).toHaveLength(50);
   });
})