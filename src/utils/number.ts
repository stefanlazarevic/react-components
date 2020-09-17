/**
 * 
 * @param value 
 * @param steps 
 */
export function increment(value: number, steps: number = 1) {
   return value + steps;
}

/**
 * 
 * @param value 
 * @param steps 
 */
export function decrement(value: number, steps: number = 1) {
   return value - steps;
}

/**
 * 
 * @param value 
 * @param min 
 * @param max 
 */
export function clump(value: number, min: number, max: number) {
   if (min > max) {
      return value;
   }

   if (value < min) {
      return min;
   }

   if (value > max) {
      return max;
   }

   return value;
}