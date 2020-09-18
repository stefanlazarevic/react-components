/**
 * 
 * @param keyCode 
 */
export function isNumericCharCode(charCode: number) {
   return (48 <= charCode && charCode <= 57);
}

/**
 * 
 * @param keyCode 
 */
export function isNumericKeyCode(keyCode: number) {
   return (48 <= keyCode && keyCode <= 57) || (96 <= keyCode && keyCode <= 105);
}