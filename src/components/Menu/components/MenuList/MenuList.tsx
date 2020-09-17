import React, { forwardRef, MutableRefObject } from 'react';

import './MenuList.scss';

import { MenuListProps } from './MenuListProps';

import { concatenate } from '../../../../utils';
import { useMenuContext } from '../../context/MenuContext';
import { useCombinedRefs } from '../../../../hooks';
import { keyboard } from '../../../../helpers';

const MenuList = forwardRef(
    function MenuListComponent(props: MenuListProps, ref: MutableRefObject<HTMLUListElement>) {
        const className = concatenate("MenuList", props.className);

        const menulist = useCombinedRefs(ref);

        const { orientation, focusFirstDescendant, focusLastDescendant} = useMenuContext();

        function onKeyDown(event: React.KeyboardEvent) {
            const {keyCode} = event;

            if (keyCode === keyboard.KeyCode.HOME) {
                event.stopPropagation();
                focusFirstDescendant();
            }

            if (keyCode === keyboard.KeyCode.END) {
                event.stopPropagation();
                focusLastDescendant();
            }
        }

        return (
            <ul
                ref={menulist}
                id={props.id}
                data-testid={props.testid}
                className={className}
                style={props.style}
                role={props.role}
                aria-orientation={orientation}
                onKeyDown={onKeyDown}
            >
                {props.children}
            </ul>
        )
    }
);

MenuList.defaultProps = {
    role: "menu"
}

MenuList.displayName = "MenuList";

export default MenuList;