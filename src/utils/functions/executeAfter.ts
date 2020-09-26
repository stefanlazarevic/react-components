import { TimeoutController } from "../../types";

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