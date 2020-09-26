import { compose } from "../compose"

describe("compose", () => {
   it('Can compose multiple functions', () => {
      const program = compose<Function>(
         (a: string) => `fn1(${a})`,
         (a: string) => `fn2(${a})`,
         (a: number, b: number) => `fn3(${a}, ${b})`
      ) as Function;

      expect(program(2, 3)).toEqual('fn1(fn2(fn3(2, 3)))')
   })
})