import { createNamedContext } from "../../../context/createNamedContext";
import { useDescendants } from "../../../hooks";
import { MenuProps } from "../MenuProps";
import { IDescendantContext } from "../../../interfaces";
import { Orientation } from "../../../types";

export interface MenuContext extends IDescendantContext {
    orientation?: Orientation;
    autoFocus?: boolean;
    onClose?: (event: React.SyntheticEvent | Event) => void;
}

const [MenuContextProvider, useMenuContext] = createNamedContext<MenuContext>("MenuContext");

export function createMenuContext(props: MenuProps) {
    const { orientation, onClose, autoFocus} = props;

    return {
        ...useDescendants(),
        orientation,
        autoFocus,
        onClose
    }
}

export {MenuContextProvider, useMenuContext};