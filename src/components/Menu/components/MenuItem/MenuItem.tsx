import React, { forwardRef, MutableRefObject, useCallback, useMemo } from 'react';

import './MenuItem.scss';

import { MenuItemProps } from './MenuItemProps';

import { isFunction, concatenate } from '../../../../utils';
import { useDescendant, useCombinedRefs } from '../../../../hooks';
import { useMenuContext } from '../../context/MenuContext';
import { IDescendant } from '../../../../interfaces';
import { keyboard } from '../../../../helpers';

const MenuItem = forwardRef(function MenuItemComponent(props: MenuItemProps, ref: MutableRefObject<HTMLLIElement>) {
   const className = concatenate('MenuItem', props.className);

   const item = useCombinedRefs<HTMLLIElement | null>(ref);

   const context = useMenuContext();

   const {
      orientation,
      focusPreviousDescendant,
      focusNextDescendant,
   } = context;

   const descendant: IDescendant = useMemo(() => ({element: item.current as HTMLElement, disabled: props.disabled}), [item.current, props.disabled]);

   const index = useDescendant(descendant, context);

   const onKeyDown = useCallback(function onKeyDown(event: React.KeyboardEvent) {
      const {keyCode} = event;

      if (keyCode === keyboard.KeyCode.ARROW_LEFT && orientation === 'horizontal') {
         event.stopPropagation();

         focusPreviousDescendant(index);
      }

      if (keyCode === keyboard.KeyCode.ARROW_RIGHT && orientation === 'horizontal') {
         event.stopPropagation();

         focusNextDescendant(index);
      }

      if (keyCode === keyboard.KeyCode.ARROW_UP && orientation === 'vertical') {
         event.stopPropagation();

         focusPreviousDescendant(index);
      }

      if (keyCode === keyboard.KeyCode.ARROW_DOWN && orientation === 'vertical') {
         event.stopPropagation();

         focusNextDescendant(index);
      }
   }, [index, orientation]);

   const renderChildren = useCallback(function renderMenuItemChildren() {
      if (isFunction(props.children)) {
         return props.children();
      }

      return props.children;
   }, [props.children]);

   return (
      <li 
         ref={item} 
         id={props.id} 
         data-testid={props.testid} 
         className={className} 
         style={props.style} 
         role={props.role}
         tabIndex={-1}
         onKeyDown={onKeyDown}
         onClick={props.onClick}
         aria-haspopup={props.haspopup}
      >
         {renderChildren()}
      </li>
   );
});

MenuItem.defaultProps = {
   role: "menuitem"
}

MenuItem.displayName = "MenuItem";

export default MenuItem;