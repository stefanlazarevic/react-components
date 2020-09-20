import { IComponentBase } from "../../../../interfaces";
import { ReactNodeLike } from "prop-types";
import { CalendarWeekday } from "../interfaces/CalendarWeekday";

export interface CalendarGridProps extends IComponentBase {
   /**
    * 
    */
   children?: ReactNodeLike;
   /**
    * @default "grid"
    */
   role?: string;
   /**
    * 
    */
   weekdays?: CalendarWeekday[]
   /**
    * @todo move to context.
    */
   currentMonth?: number;
   /**
    * @todo move to context.
    */
   currentYear?: number;
}