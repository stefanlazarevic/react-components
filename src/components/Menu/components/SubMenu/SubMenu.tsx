import React, { forwardRef, MutableRefObject, useState, useRef, useMemo, useLayoutEffect, useCallback } from 'react';

import './SubMenu.scss';

import { MenuItemProps } from '../MenuItem/MenuItemProps';
import { concatenate, focusElement, isDirectChild, debounce } from '../../../../utils';
import { useCombinedRefs, useDescendant } from '../../../../hooks';
import Menu from '../../Menu';
import { MenuList } from '../MenuList';
import { keyboard } from '../../../../helpers';
import { useMenuContext } from '../../context/MenuContext';

const SubMenu = forwardRef(function SubMenuComponent(props: MenuItemProps, ref: MutableRefObject<HTMLLIElement>) {
   const [expanded, setExpanded] = useState(false);

   const className = concatenate("MenuItem", "SubMenuItem", props.className);

   const menuItem = useCombinedRefs(ref);

   const subMenu = useRef<HTMLUListElement>(null);

   const context = useMenuContext();

   const { 
      orientation, 
      focusNextDescendant, 
      focusPreviousDescendant, 
   } = context;

   const descendant = useMemo(() => ({element: menuItem.current, isDisabled: props.disabled}), [menuItem.current, props.disabled]);

   const index = useDescendant(descendant, context);

   function expand() {
      setExpanded(true);
   }

   function collapse() {
      setExpanded(false);
   }

   function collapseAndFocusParent() {
      collapse();
      focusElement(menuItem.current);
   }

   function expandAndFocusFirstChild() {
      expand();
      requestAnimationFrame(() => {
         const element = subMenu.current?.querySelector('.MenuItem');

         focusElement(element as HTMLElement);
      });
   }

   function onClick(event: React.MouseEvent | React.KeyboardEvent) {
      /**
       * When we click on the nested submenu item, we must prevent parent from closing.
       * To achieve that we stop propagation at submenu item level when click was made on it.
       */
      if ((event.target as Node).parentElement === menuItem.current || event.target === menuItem.current) {
         event.stopPropagation();
      }

      if (expanded) {
         collapse();

         return;
      }

      expandAndFocusFirstChild();
   }

   function onKeyDown(event: React.KeyboardEvent<HTMLLIElement>) {
      const {keyCode, target} = event;

      if (keyCode === keyboard.KeyCode.ENTER) {
         if ((isDirectChild((target as HTMLLIElement), menuItem.current) || target === menuItem.current)) {
            event.stopPropagation();
   
            expandAndFocusFirstChild();
         } else {
            collapseAndFocusParent();
         }

         return;
      }

      if (keyCode === keyboard.KeyCode.ESC && expanded) {
         event.stopPropagation();

         collapseAndFocusParent();
      }

      if (keyCode === keyboard.KeyCode.ARROW_RIGHT) {
         if ((isDirectChild((target as HTMLLIElement), menuItem.current) || target === menuItem.current)) {
            if (!expanded && orientation === 'vertical') {
               event.stopPropagation();

               expandAndFocusFirstChild();
            }

            if (!expanded && orientation === 'horizontal') {
               focusNextDescendant(index);
            }
         } else {
            if (expanded && orientation === 'horizontal') {
               event.stopPropagation();

               collapse();
               focusNextDescendant(index);
            }

            if (!expanded && orientation === 'horizontal') {
               focusNextDescendant(index);
            }
         }

         return;
      }

      if (keyCode === keyboard.KeyCode.ARROW_LEFT) {
         if ((isDirectChild((target as HTMLLIElement), menuItem.current) || target === menuItem.current)) {
            if (expanded && orientation === 'vertical') {
               collapseAndFocusParent();
            }

            if (expanded && orientation === 'horizontal') {
               event.stopPropagation();
               collapse();
               focusPreviousDescendant(index);
            }

            if (!expanded && orientation === 'horizontal') {
               focusPreviousDescendant(index);
            }
         } else {
            if (expanded && orientation === 'vertical') {
               event.stopPropagation();
               
               collapseAndFocusParent();
            }

            if (expanded && orientation === 'horizontal') {
               event.stopPropagation();

               collapse();
               focusPreviousDescendant(index);
            }
         }

         return;
      }

      if (keyCode === keyboard.KeyCode.ARROW_UP && orientation === 'vertical') {
         event.stopPropagation();

         focusPreviousDescendant(index);
      }

      if (keyCode === keyboard.KeyCode.ARROW_DOWN && orientation === 'vertical') {
         event.stopPropagation();

         focusNextDescendant(index);
      }

      if (keyCode === keyboard.KeyCode.ARROW_DOWN && orientation === 'horizontal') {
         event.stopPropagation();

         expandAndFocusFirstChild();
      }
   }

   const processOutsideClick = useCallback((event: MouseEvent) => {
      if (!menuItem.current.contains(event.target as Element)) {
         collapse();
      }
   }, []);

   useLayoutEffect(() => {
      document.addEventListener('click', processOutsideClick);

      return () => {
         document.removeEventListener('click', processOutsideClick);
      }
   }, []);

   return (
      <li 
         ref={menuItem} 
         id={props.id} 
         data-testid={props.testid}
         className={className}
         style={props.style}
         role="menuitem"
         onClick={onClick}
         aria-haspopup="menu"
         aria-expanded={expanded}
         onKeyDown={onKeyDown}
         tabIndex={-1}
      >
         Test
         {expanded && <Menu orientation="vertical" onClose={collapseAndFocusParent}>
            <MenuList ref={subMenu} className="SubMenuList">
               {props.children}
            </MenuList>
         </Menu>}
      </li>
   );
});

SubMenu.defaultProps = {}

SubMenu.displayName = "SubMenu";

export default SubMenu;