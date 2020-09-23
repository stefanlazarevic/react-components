import { pipe } from "../pipe";
import { range } from "../range";

describe("pipe", () => {
   test("Can be called with no arguments.", () => {
      expect(pipe()).not.toThrow();
   });

   test("Can pipe multiple functions", () => {
      const program = pipe(
         (a: number, b: number) => `fn1(${a}, ${b})`,
         (a: string) => `fn2(${a})`,
         (a: string) => `fn3(${a})`
      )

      expect(program(2, 3)).toEqual('fn3(fn2(fn1(2, 3)))')
   });

   test("Can pass generator as first argument", () => {
      const program = pipe(range());

      expect(Array.from(program())).toHaveLength(11);
   });
})