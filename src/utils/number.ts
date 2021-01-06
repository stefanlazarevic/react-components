/**
 * 
 * @param input 
 * @param steps 
 */
export function increment(input: number, steps: number = 1) {
   return input + steps;
}

/**
 * 
 * @param input 
 * @param steps 
 */
export function decrement(input: number, steps: number = 1) {
   return input - steps;
}

/**
 * 
 * @param input 
 * @param min 
 * @param max 
 */
export function clump(input: number, min: number, max: number) {
   return Math.min(max, Math.max(min, input))
}