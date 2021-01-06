import { IComponentBase } from "../../../../interfaces";
import { ReactNodeLike } from "prop-types";

export interface MenuItemProps extends IComponentBase {
   /**
    * 
    */
   children?: ReactNodeLike;
   /**
    * 
    */
   role?: string;
   /**
    * 
    */
   disabled?: boolean;
   /**
    * 
    */
   haspopup?: "menu";
   /**
    * 
    */
   content?: ReactNodeLike;
   /**
    * 
    */
   onClick?: (event: React.SyntheticEvent) => void;
   /**
    * 
    */
   onKeyDown?: (event: React.KeyboardEvent) => void;
   /**
    * 
    */
   onClose?: (event: React.SyntheticEvent) => void;
}