import { IComponentBase } from "../../../../interfaces";
import { ReactNodeLike } from "prop-types";

export interface CalendarWeekProps extends IComponentBase {
   /**
    * 
    */
   children?: ReactNodeLike;
   /**
    * 
    */
   index: number;
}