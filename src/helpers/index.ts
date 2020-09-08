export { default as array } from "./array";
export { default as dom } from "./dom";
export { default as random } from "./random";
export { default as keyboard } from "./keyboard";
export { default as string } from './string';
export { default as prop } from './prop';

export function debounce(callback: Function, wait: number = 0) {
  let timeout: NodeJS.Timeout;

  const debounced = function takeArguments() {
    const args = arguments;

    if (args[0] && typeof args[0].persist === 'function') {
      args[0].persist();
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function executeCallback() {
      callback.apply(null, args);
    }, wait);
  }

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }

  return debounced;
}