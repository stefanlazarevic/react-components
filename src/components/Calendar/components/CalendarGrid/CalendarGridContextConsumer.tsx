import React from 'react';
import { CalendarGrid } from '.';
import { useCalendarContext } from '../context/createCalendarContext';

export default function CalendarGridContextConsumer() {
   const { weekdays, multiselectable, selectNextMonth, selectPreviousMonth, selectNextYear, selectPreviousYear } = useCalendarContext();

   return (
      <CalendarGrid 
         weekdays={weekdays} 
         multiselectable={multiselectable} 
         onSelectNextYear={selectNextYear}
         onSelectPreviousYear={selectPreviousYear}
         onSelectNextMonth={selectNextMonth} 
         onSelectPreviousMonth={selectPreviousMonth}
      />
   );
}