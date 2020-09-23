import { range } from "../range";

import { isIterable } from "../../assertions"

describe('range', () => {
   test('Returns Iterator when called.', () => {
      expect(isIterable(range())).toBeTruthy();
   });

   test('When spreaded in array, generates numbers from 0 to 10 inclusive.', () => {
      const expectedOutput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect([...range()]).toEqual(expectedOutput);
   });
})