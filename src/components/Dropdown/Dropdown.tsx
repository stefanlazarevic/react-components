import React, {
	forwardRef,
	MutableRefObject,
	useRef,
	useLayoutEffect,
	useCallback,
} from "react";

import "./Dropdown.scss";

import { useClassNames, useCombinedRefs } from "../../hooks";

import { getTabbableElementsQuery } from "../../helpers/string";
import { KeyCode, array_lastIndex, array_empty } from "../../helpers";

const Dropdown = forwardRef(function DropdownComponent(
	props: any,
	ref: MutableRefObject<HTMLUListElement>
) {
  const className = useClassNames("Dropdown", props.className);
  
  const list = useCombinedRefs(ref);

  const items =  useRef<HTMLElement[]>([]);

  const focusNext = useCallback((startIndex?: number) => {
    if (array_empty(items.current)) {
      return;
    }

    const lastIndex = array_lastIndex(items.current);

    if (typeof startIndex === 'number') {
      if (startIndex > lastIndex) {
        startIndex = lastIndex;
      }

      if (startIndex < 0) {
        startIndex = 0;
      }
    }

    const focusedIndex = items.current.findIndex(item => item === document.activeElement);
    
    let currentIndex = typeof startIndex === 'number' ? startIndex : focusedIndex + 1;

    while (currentIndex !== focusedIndex) {
      if (currentIndex > lastIndex) {
        currentIndex = 0;
      }

      const item = items.current[currentIndex];

      const isDisabled = item.getAttribute('aria-disabled') === 'true';
      const tabIndex = item.getAttribute('tabIndex');

      if (!isDisabled && tabIndex !== '-1') {
        item.focus();

        break;
      }

      currentIndex++;
    }

  }, []);

  const focusPrevious = useCallback((startIndex?: number) => {
    if (array_empty(items.current)) {
      return;
    }

    const lastIndex = array_lastIndex(items.current);

    if (typeof startIndex === 'number') {
      if (startIndex > lastIndex) {
        startIndex = lastIndex;
      }

      if (startIndex < 0) {
        startIndex = 0;
      }
    }

    const focusedIndex = items.current.findIndex(item => item === document.activeElement);
    
    let currentIndex = typeof startIndex === 'number' ? startIndex : focusedIndex - 1;

    while (currentIndex !== focusedIndex) {
      if (currentIndex < 0) {
        currentIndex = lastIndex;
      }

      const item = items.current[currentIndex];

      const isDisabled = item.getAttribute('aria-disabled') === 'true';
      const tabIndex = item.getAttribute('tabIndex');

      if (!isDisabled && tabIndex !== '-1') {
        item.focus();

        break;
      }

      currentIndex--;
    }
  }, []);

  useLayoutEffect(() => {
    if (list.current) {
      items.current = Array.from(list.current.querySelectorAll(getTabbableElementsQuery()));

      if (props.autoFocus) {
        focusNext(0);
      }
    }
  }, [focusNext]);

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLUListElement>) => {
    const {keyCode} = event;

    if (keyCode === KeyCode.ARROW_UP) {
      focusPrevious();
    }

    if (keyCode === KeyCode.ARROW_DOWN) {
      focusNext();
    }

    if (keyCode === KeyCode.HOME) {
      focusNext(0)
    }

    if (keyCode === KeyCode.END) {
      focusPrevious(array_lastIndex(items.current));
    }
  }, [focusNext]);

  const renderChildren = useCallback(() => {
    return props.children;
  }, [props.children]);

  return (
    <ul
      ref={list}
      id={props.id}
      data-testid={props.testid}
      className={className}
      style={props.style}
      role={props.role}
      onKeyDown={onKeyDown}
    >
      {renderChildren()}
    </ul>
  )
});

Dropdown.defaultProps = {
  role: 'menu'
};

Dropdown.displayName = "Dropdown";

export default Dropdown;