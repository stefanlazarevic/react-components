import React, { useEffect, useRef } from "react";

/**
 * @source https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
 */
export default function useCombinedRefs<T>(
  ...refs: Array<
    React.MutableRefObject<T> | ((ref: React.MutableRefObject<T>) => void)
  >
) {
  const localRef = useRef<any>(null);

  useEffect(() => {
    refs.forEach(
      (
        ref:
          | React.MutableRefObject<any>
          | ((ref: React.MutableRefObject<any>) => void)
      ) => {
        if (!ref) return;

        if (typeof ref === "function") {
          ref(localRef.current);
        } else {
          ref.current = localRef.current;
        }
      }
    );
  }, [refs]);

  return localRef;
}
