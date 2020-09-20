import React from 'react';

import { CalendarGrid } from './components';
import { createCalendarContext, CalendarContextProvider } from './components/context/createCalendarContext';
import { CalendarProps } from './CalendarProps';

function Calendar(props: CalendarProps) {
   const context = createCalendarContext(props);

   return (
      <CalendarContextProvider value={context}>
         <CalendarGrid />
      </CalendarContextProvider>
   )
}

Calendar.defaultProps = {
   selectedDays: [],
   type: "single"
}

Calendar.displayName = "Calendar";

export default Calendar;