/**
 * Returns iterator which iterates through numbers from min to max.
 * @param min 
 * @param max 
 * @param step 
 */
export function* range(min = 0, max = 10, step = 1) {
   let current = min;

   while (current <= max) {
      current += step;
      yield current - step;
   }
}