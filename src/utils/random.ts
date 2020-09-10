/**
 * Returns random string built from alphanumeric characters.
 * 
 * @param length
 * @default 16
 */
export function getRandomString(length: number = 16): string {
	let output = "";

	if (length <= 0) {
		return output;
	}

	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	while (output.length < length) {
		output += characters.charAt(getRandomNumber(0, characters.length - 1));
	}

	return output;
}

/**
 * Returns a random integer between min and max. (inclusive)
 * 
 * @param min 
 * @default 0
 * 
 * @param max 
 * @default 100
 */
export function getRandomNumber(min = 0, max = 100): number {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}