import { ReactNodeLike } from "prop-types";
import { CalendarDayRecord, CalendarWeekday } from "./components";

export interface CalendarProps {
   /**
    * 
    */
   weekdays?: CalendarWeekday[];
   /**
    * 
    */
   currentMonth?: number;
   /**
    * 
    */
   currentYear?: number;
   /**
    * Minimum date allowed to be picked. Must be in ISO-8601 format: YYYY-MM-DD.
    */
   startDate?: Date;
   /**
    * Maximum date allowed to be picked. Must be in ISO-8601 format: YYYY-MM-DD.
    */
   endDate?: Date;
   /**
    * 
    */
   selectedDays?: Date[];
   /**
    * 
    */
   multiselectable?: boolean;
   /**
    * 
    */
   renderDay?: (day: CalendarDayRecord) => ReactNodeLike;
   /**
    * 
    */
   onSelect?: (selectedDate: Date) => void;
}