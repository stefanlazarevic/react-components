import React, {
	forwardRef,
	MutableRefObject,
	useMemo,
	useRef,
	useLayoutEffect,
	useCallback,
} from "react";

import "./Dialog.scss";

import { useClassNames, useCombinedRefs } from "../../hooks";

import { DialogProps, DialogPropTypes } from "./DialogProps";

import { KeyCode, array_empty, array_lastIndex } from "../../helpers";

const Dialog = forwardRef(function DialogComponent(
  props: DialogProps,
  ref: MutableRefObject<HTMLDivElement>
) {
  const className = useClassNames("Dialog", props.className);

  const selector = useMemo(
    () =>
      [
        'a[href]:not([inert])',
        'area[href]:not([inert])',
        'input:not([disabled]):not([inert])',
        'select:not([disabled]):not([inert])',
        'textarea:not([disabled]):not([inert])',
        'button:not([disabled]):not([inert])',
        'iframe:not([inert])',
        'audio:not([inert])',
        'video:not([inert])',
        '[contenteditable]:not([inert])',
        '[tabindex]:not([inert])'
      ].join(","),
    []
  );

  const dialog: MutableRefObject<HTMLDivElement> = useCombinedRefs(ref);

  const elements = useRef<HTMLElement[]>([]);

  useLayoutEffect(
    function ModalDidRender() {
      elements.current = Array.from(
        dialog.current.querySelectorAll<HTMLElement>(selector)
      ) as HTMLElement[];
    },
    [props.children, selector]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const { keyCode, shiftKey } = event;

      if (keyCode === KeyCode.ESC && typeof props.onEscape === "function") {
        props.onEscape(event);

        return;
      }

      let focusedIndex = elements.current.findIndex(element => element === document.activeElement);
      let currentIndex = focusedIndex;

      if (
        shiftKey &&
        keyCode === KeyCode.TAB &&
        !array_empty(elements.current)
      ) {
        event.preventDefault();

        currentIndex--;

        while (currentIndex !== focusedIndex) {
          if (currentIndex < 0) {
            currentIndex = array_lastIndex(elements.current);
          }

          const element = elements.current[currentIndex];

          if (element.hasAttribute('tabIndex') || !element.hasAttribute('disabled')) {
            const tabIndex = element.getAttribute('tabIndex');

            if (tabIndex !== "-1") {
              elements.current[currentIndex].focus();
              break;
            }
          }

          currentIndex--;
        }
      }

      if (
        !shiftKey &&
        keyCode === KeyCode.TAB &&
        !array_empty(elements.current)
      ) {
        event.preventDefault();

        currentIndex++;

        while (currentIndex !== focusedIndex) {
          if (currentIndex > array_lastIndex(elements.current)) {
            currentIndex = 0;
          }

          const element = elements.current[currentIndex];

          if (element.hasAttribute('tabIndex') || !element.hasAttribute('disabled')) {
            const tabIndex = element.getAttribute('tabIndex');

            if (tabIndex !== "-1") {
              elements.current[currentIndex].focus();
              break;
            }
          }

          currentIndex++;
        }
      }

      if (typeof props.onKeyDown === "function") {
        props.onKeyDown(event);
      }
    },
    [props.onEscape, props.onKeyDown]
  );

  return (
    <div
      ref={dialog}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      lang={props.lang}
      dir={props.dir}
      onKeyDown={onKeyDown}
    >
      {props.children}
    </div>
  );
});

Dialog.propTypes = DialogPropTypes;

Dialog.defaultProps = {
  dir: "auto"
};

Dialog.displayName = "Dialog";

export default Dialog;