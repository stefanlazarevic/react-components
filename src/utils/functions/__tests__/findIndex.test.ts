import { findIndex } from "../findIndex";
import { pipe } from "../pipe";

describe('findIndex', () => {
   test("Should return index of an item in array which satisfies predicate.", () => {
      const program = pipe(findIndex<number>((value: number) => value === 1));

      expect(program([2, 3, 1, 2, 3])).toBe(2);
   });

   test("Should return index of an item in array which satisfies predicate. (2)", () => {
      const program = findIndex<number>((value: number) => value === 1);

      expect(program([2, 3, 1, 2, 3])).toBe(2);
   });

   test("Should return -1 if there is no element that satisfies predicate.", () => {
      const program = findIndex<number>((value: number) => value > 10);

      expect(program([2, 3, 1, 2, 3])).toBe(-1);
   });

   test("Should return -1 if there is no element that satisfies predicate.", async () => {
      const program = pipe(findIndex((value: number) => value === 10));

      const getFive = async () => 5;
      const getTen = async () => 10;

      expect(await program(Promise.resolve([1, getFive(), getTen(), 20, 30]))).toBe(2);
   });
})