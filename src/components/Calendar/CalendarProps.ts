import { ReactNodeLike } from "prop-types";
import { CalendarDayRecord, CalendarWeekday } from "./components";

export interface CalendarProps {
   /**
    * 
    */
   selectedDay?: Date;
   /**
    * List of selected days when `multiselectable` is `true`.
    */
   selectedDays?: Date[];
   /**
    * 
    */
   disabledDays?: Date[];
   /**
    * Minimum date allowed to be picked.
    */
   startDate?: Date;
   /**
    * Maximum date allowed to be picked.
    */
   endDate?: Date;
   /**
    * Visible calendar month. 0 - 11
    */
   currentMonth?: number;
   /**
    * Visible calendar year.
    */
   currentYear?: number;
   /**
    * 
    */
   multiselectable?: boolean;
   /**
    * @default "en-US"
    */
   lang?: string;
   /**
    * 
    */
   renderDay?: (day: CalendarDayRecord) => ReactNodeLike;
   /**
    * 
    */
   onSelect?: (selectedDate: string) => void;
}