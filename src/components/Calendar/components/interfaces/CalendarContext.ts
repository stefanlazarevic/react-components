import { CalendarWeekday } from "./CalendarWeekday";
import { CalendarDayRecord } from "./CalendarDayRecord";
import { ReactNodeLike } from "prop-types";

export interface ICalendarContext {
   /**
    * 
    */
   today: Date;
   /**
    * 
    */
   weekdays: CalendarWeekday[];
   /**
    * 
    */
   currentMonth: number;
   /**
    * 
    */
   currentYear: number;
   /**
    * Current calendar view days packed in belonging calendar weeks.
    */
   days: CalendarDayRecord[][];
   /**
    * 
    */
   minimumDate?: Date;
   /**
    * 
    */
   maximumDate?: Date;
   /**
    * 
    */
   multiselectable?: boolean;
   /**
    * 
    */
   selectNextMonth: () => void;
   /**
    * 
    */
   selectPreviousMonth: () => void;
   /**
    * 
    */
   selectNextYear: () => void;
   /**
    * 
    */
   selectPreviousYear: () => void;
   /**
    * 
    */
   renderDay?: (day: CalendarDayRecord) => ReactNodeLike;
   /**
    * 
    */
   onSelect?: (selectedDate: Date) => void;
}