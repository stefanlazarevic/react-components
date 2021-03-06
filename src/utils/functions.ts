import { CancelableFunction } from "../types";
import { TimeoutController } from "../types";

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */ 
export function debounce(callbackfn: () => any, wait: number, immediate?: boolean): CancelableFunction {
   let timeout: NodeJS.Timeout | null;

   function debounceExecutor() {
      // @ts-ignore
      const context = this;
      const args = arguments;

      const later = function () {
         timeout = null;

         if (!immediate) {
            callbackfn.apply(context, args);
         }
      };

      const callNow = immediate && !timeout;

      if (timeout) {
         clearTimeout(timeout);
      }

      timeout = setTimeout(later, wait);

      if (callNow) {
         callbackfn.apply(context, args);
      }
   };

   debounceExecutor.cancel = function cancelDebounceFunction() {
      if (timeout) {
         clearTimeout(timeout);
      }
   }

   return debounceExecutor as CancelableFunction;
};

/**
 * 
 * @param callbackfn 
 * @param wait 
 */
export function executeAfter(wait: number, callbackfn: () => void): TimeoutController {
   let timeout: NodeJS.Timeout;
   let startTime: number;
   let remainingTime: number = wait;
   let canceled: boolean = false;

   function resume() {
      cancel();

      if (remainingTime < 0 || canceled) {
         return;
      }

      startTime = Date.now();
      timeout = setTimeout(callbackfn, remainingTime);
   }

   function pause() {
      cancel();

      if (remainingTime < 0 || canceled) {
         return;
      }

      remainingTime -= Date.now() - startTime;
   }

   function cancel() {
      if (timeout) {
         clearTimeout(timeout);
      }

      canceled = true;
   }

   resume();

   return {
      resume,
      pause,
      cancel
   }
}