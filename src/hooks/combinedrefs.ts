import React, { useEffect, useRef, MutableRefObject } from "react";

/**
 * @source https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
 */
export default function useCombinedRefs<T>(
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

        if (typeof ref === "function") {
          ref(localRef);
        } else {
          ref.current = localRef.current;
        }
      }
    );
  }, [refs]);

  return localRef;
}
