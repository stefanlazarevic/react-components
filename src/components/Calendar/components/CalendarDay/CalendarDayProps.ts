import { IComponentBase } from "../../../../interfaces";
import { CalendarDayRecord } from "../interfaces";

export interface CalendarDayProps extends IComponentBase, CalendarDayRecord {
   /**
    * 
    */
   selected?: boolean;
}