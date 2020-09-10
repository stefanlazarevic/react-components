import { useEffect, useRef, MutableRefObject } from "react";

import { isFunction } from '../utils/typeof';

/**
 * @source https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
 */
export function useCombinedRefs<T>(
  ...refs: Array<
    MutableRefObject<T> | ((ref: MutableRefObject<T>) => void)
  >
): MutableRefObject<T> {
  const localRef = useRef<T>({} as T);

  useEffect(() => {
    refs.forEach(
      (
        ref:
          | MutableRefObject<T>
          | ((ref: MutableRefObject<T>) => void)
      ) => {
        if (!ref) return;

        if (isFunction(ref)) {
          ref(localRef);
        } else {
          ref.current = localRef.current;
        }
      }
    );
  }, [refs]);

  return localRef;
}
