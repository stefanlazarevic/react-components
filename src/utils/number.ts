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
export function clamp(input: number, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
   return Math.min(max, Math.max(min, input))
}

/**
 * 
 * @param x 
 * @param n 
 */
export function toPercentage(x: number, n: number) {
   return x / n * 100;
}