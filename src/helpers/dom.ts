/**
 * 
 * @param target 
 * 
 * A String that specifies the name of the event.
 * @param event 
 * 
 * Specifies the function to run when the event occurs.
 * @param handler
 * 
 * A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. 
 * @param useCapture 
 */
function addEventListener(target: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture = false) {
  target.addEventListener(event, handler, useCapture);

  return {
    remove: () => {
      target.removeEventListener(event, handler);
    }
  }
}

export default {
  addEventListener
}