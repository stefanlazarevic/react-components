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

/**
 * Check whether the Element is disabled or not.
 * @param target 
 */
function isDisabledElement(target?: Element | null) {
  if (!target) {
    return true;
  }

  if (target.hasAttribute('disabled')) {
    return true;
  }

  return target.getAttribute('aria-disabled') === "true";
}

/**
 * Simple function which focuses next available sibling in
 * the DOM tree.
 * 
 * @param currentChild 
 */
function focusNextSibling(currentChild: HTMLElement, options: DOMFocusOptions = {}) {
  if (!currentChild) {
    console.debug("Current child is absent.");
    return;
  }

  if (!currentChild.parentElement) {
    console.debug("Current child has no parent.");
    return;
  }

  if (!currentChild.parentElement.children.length) {
    console.debug("Parent element has no children.");
    return;
  }

  let nextChild = currentChild.nextElementSibling;

  if (!nextChild) {
    nextChild = currentChild.parentElement.firstElementChild;
  }

  while (nextChild && nextChild !== currentChild) {
    if (!isDisabledElement(nextChild)) {
      currentChild.setAttribute('tabIndex', '-1');
      nextChild.setAttribute('tabIndex', '0');

      if (nextChild instanceof HTMLElement && options.autoFocus) {
        nextChild.focus();
      }

      if (nextChild && options.emitClick) {
        nextChild.dispatchEvent(new MouseEvent('click'));
      }

      break;
    }

    nextChild = nextChild.nextElementSibling;

    if (!nextChild) {
      nextChild = currentChild.parentElement.firstElementChild;
    } 
  }
}

type DOMFocusOptions = {
  autoFocus?: boolean,
  emitClick?: boolean
}

function focusPreviousSibling(currentChild: HTMLElement, options: DOMFocusOptions = {}) {
  if (!currentChild) {
    console.debug('Current child is absent.');
    return;
  }

  if (!currentChild.parentElement) {
    console.debug('Current child has no parent.');
    return;
  }

  if (currentChild.parentElement.children.length < 1) {
    console.debug("Parent element has no children.");
    return;
  }

  let previousChild = currentChild.previousElementSibling;

  if (!previousChild) {
    previousChild = currentChild.parentElement.lastElementChild
  }

  while (previousChild && previousChild !== currentChild) {
    if (!isDisabledElement(previousChild)) {
      currentChild.setAttribute('tabIndex', '-1');
      previousChild.setAttribute('tabIndex', '0');

      if (previousChild instanceof HTMLElement && options.autoFocus) {
        previousChild.focus();
      }

      if (previousChild && options.emitClick) {
        previousChild.dispatchEvent(new MouseEvent('click'));
      }

      break;
    }

    previousChild = previousChild.previousElementSibling;

    if (!previousChild) {
      previousChild = currentChild.parentElement.lastElementChild
    }
  }
}

function focusFirstChild(parentElement: HTMLElement, options: DOMFocusOptions = {}) {
  if (!parentElement) {
    console.debug('Parent element is absent');
    return;
  }

  let currentChild = parentElement.firstElementChild;

  while (currentChild) {
    if (!isDisabledElement(currentChild)) {
      currentChild.setAttribute('tabIndex', '0');

      if (currentChild instanceof HTMLElement && options.autoFocus) {
        currentChild.focus();
      }

      if (currentChild && options.emitClick) {
        currentChild.dispatchEvent(new MouseEvent('click'));
      }

      break;
    }

    currentChild = currentChild.nextElementSibling;
  }
}

function focusLastChild(parentElement: HTMLElement, options: DOMFocusOptions = {}) {
  if (!parentElement) {
    console.debug('Parent element is absent.');
    return;
  }

  let currentChild = parentElement.lastElementChild;

  while (currentChild) {
    if (!isDisabledElement(currentChild)) {
      currentChild.setAttribute('tabIndex', '0');
      
      if (currentChild instanceof HTMLElement && options.autoFocus) {
        currentChild.focus();
      }

      if (currentChild && options.emitClick) {
        currentChild.dispatchEvent(new MouseEvent('click'));
      }

      break;
    }

    currentChild = currentChild.previousElementSibling;
  }
}

export default {
  addEventListener,
  isDisabledElement,
  focusNextSibling,
  focusPreviousSibling,
  focusFirstChild,
  focusLastChild
}