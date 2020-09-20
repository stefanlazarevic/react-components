export interface CalendarDayRecord {
   /**
    * 
    */
   day: number;
   /**
    * 
    */
   month: number;
   /**
    * 
    */
   year: number;
   /**
    * 
    */
   weekday: number;
   /**
    * 
    */
   date: Date,
   /**
    * 
    */
   isDisabled?: boolean;
   /**
    * 
    */
   isSelected?: boolean;
   /**
    * 
    */
   tabIndex?: number;
}