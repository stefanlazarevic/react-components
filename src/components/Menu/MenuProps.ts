import { Orientation } from "../../types";
import { ReactNodeLike } from "prop-types";

export interface MenuProps {
   /**
    * 
    */
   orientation?: Orientation;
   /**
    * 
    */
   children?: ReactNodeLike;
   /**
    * Focus first available descendant on mount.
    */
   autoFocus?: boolean;
   /**
    * 
    */
   onClose?: (event: React.SyntheticEvent) => void;
}