import { CalendarWeekday } from "./CalendarWeekday";
import { CalendarDayRecord } from "./CalendarDayRecord";
import { ReactNodeLike } from "prop-types";
import { IDescendantContext } from "../../../../interfaces";

export interface ICalendarContext extends IDescendantContext {
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
   onSelect?: (selectedDate: string) => void;
   /**
    * 
    */
   focusPreviousDay: (currentIndex: number, dayRecord: CalendarDayRecord) => void;
   /**
    * 
    */
   focusNextDay: (currentIndex: number, dayRecord: CalendarDayRecord) => void;
   /**
    * 
    */
   focusPreviousWeek: (currentIndex: number, dayRecord: CalendarDayRecord) => void;
   /**
    * 
    */
   focusNextWeek: (currentIndex: number, dayRecord: CalendarDayRecord) => void;
}