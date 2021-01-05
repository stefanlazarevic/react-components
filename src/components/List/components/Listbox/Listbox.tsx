import React, { forwardRef, MutableRefObject } from "react";

import "./Listbox.scss";

import { ListboxProps } from "./ListboxProps";
import { concatenate, extractAriaProperty } from "../../../../utils";
import { useListContext } from "../../context/ListContext";
import { keyboard } from "../../../../helpers";

const Listbox = forwardRef(function ListboxComponent(props: ListboxProps, ref: MutableRefObject<HTMLUListElement>) {
  const className = concatenate("Listbox", props.className);

  const {orientation, multiselectable, focusFirstDescendant, focusLastDescendant, selectAllOptions} = useListContext();

  const getAriaProp = extractAriaProperty<ListboxProps>(props);

  function onKeyDown(event: React.KeyboardEvent) {
    event.stopPropagation();
    
    const {keyCode, ctrlKey} = event;

    switch (keyCode) {
      case keyboard.KeyCode.HOME:
        event.preventDefault();
        focusFirstDescendant();
        break;
      case keyboard.KeyCode.END:
        event.preventDefault();
        focusLastDescendant();
        break;
      case keyboard.KeyCode.LETTER_A:
        if (ctrlKey) {
          selectAllOptions(event);
        }
        break;
      default: return;
    }
  }

	return (
    <ul 
      ref={ref} 
      id={props.id} 
      data-testid={props.testid} 
      className={className} 
      style={props.style} 
      role={props.role} 
      aria-orientation={orientation}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-labelledby={getAriaProp('labelledby')}
      aria-multiselectable={multiselectable}
    >
      {props.children}
    </ul>
  );
});

Listbox.defaultProps = {
  role: 'listbox'
}

Listbox.displayName = "Listbox";

export default Listbox;