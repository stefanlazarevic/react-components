/**
 * 
 * @param currentMonth 
 */
export function getNextMonth(currentMonth: number): number {
   return currentMonth === 11 ? 0 : currentMonth + 1;
}

/**
 * 
 * @param currentMonth 
 */
export function getPreviousMonth(currentMonth: number): number {
   return currentMonth === 0 ? 11 : currentMonth - 1;
}

/**
 * 
 * @param month 
 * @param year 
 */
export function getNumberOfDays(month: number, year: number): number {
   return 32 - new Date(year, month, 32).getDate();
}

/**
 * 
 * @param month 
 * @param year 
 */
export function getWeekdayOffset(month: number, year: number): number {
   return new Date(year, month, 0).getDay();
}

/**
 * 
 * @param currentDate 
 */
export function getWeekNumber(currentDate: Date): number {
   const ISOWeekday = (0 == currentDate.getDay()) ? 7 : currentDate.getDay();
   return Math.floor((((currentDate.getTime() - (new Date(currentDate.getFullYear(), 0, 1)).getTime()) / 86400000) - ISOWeekday + 10) / 7);
}

/**
 * Extract ISO date from Date object. "YYYY-MM-DD"
 * @param date 
 */
export function getISOStringDate(date: Date): string {
   return date.toISOString().split('T')[0];
}