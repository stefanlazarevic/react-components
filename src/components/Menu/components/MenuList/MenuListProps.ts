import { IComponentBase } from "../../../../interfaces";
import { ReactNodeLike } from "prop-types";

export interface MenuListProps extends IComponentBase {
    /**
     * @default "menu"
     */
    role?: string;
    /**
     * 
     */
    children?: ReactNodeLike;
}