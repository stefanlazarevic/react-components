import { every } from "../every";
import { pipe } from "../pipe";

describe("every", () => {
   test("Should return false when data is absent.", () => {
      const program = every((x: number) => x === 1)();

      expect(program).toBeFalsy();
   });

   test("Should return true when data is an empty array.", () => {
      const program = every((x: number) => x === 1)([]);

      expect(program).toBeTruthy();
   });

   test("Should be composable.", () => {
      const program = pipe(every((x: number) => x === 1));
      
      expect(program([1, 2, 3])).toBeFalsy();
   });

   test("Should return true when all values meet the predicate.", () => {
      const program = pipe(every((x: number) => x === 1));
      
      expect(program([1, 1, 1])).toBeTruthy();
   });

   test("Should return true when all async values meet the predicate.", async () => {
      const program = pipe(every((x: number) => x === 1));

      const getOne = async () => {return 1};
      
      expect(await program(Promise.resolve([getOne(), getOne(), getOne()]))).toBeTruthy();
   });
})