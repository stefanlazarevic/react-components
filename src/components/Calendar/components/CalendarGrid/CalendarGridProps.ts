import { IComponentBase } from "../../../../interfaces";
import { ReactNodeLike } from "prop-types";
import { CalendarWeekday } from "../interfaces/CalendarWeekday";

export interface CalendarGridProps extends IComponentBase {
   /**
    * 
    */
   children?: ReactNodeLike;
   /**
    * 
    */
   weekdays: CalendarWeekday[]
   /**
    * 
    */
   multiselectable?: boolean;
   /**
    * 
    */
   onSelectNextMonth: () => void;
   /**
    * 
    */
   onSelectPreviousMonth: () => void;
   /**
    * 
    */
   onSelectNextYear: () => void;
   /**
    * 
    */
   onSelectPreviousYear: () => void;
}