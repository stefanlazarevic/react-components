import { ensureFunction } from "../ensureFunction";

describe("ensureFunction", () => {
   test("Returns function when input is not a function.", () => {
      expect(ensureFunction()).toBeInstanceOf(Function);
   });

   test("Returns input if it is a function.", () => {
      const input = () => {};
      expect(ensureFunction(input)).toBe(input);
   });
});