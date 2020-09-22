import React from 'react';

import { createCalendarContext, CalendarContextProvider } from './components/context/createCalendarContext';
import { CalendarProps } from './CalendarProps';
import CalendarGridContextConsumer from './components/CalendarGrid/CalendarGridContextConsumer';

function Calendar(props: CalendarProps) {
   const context = createCalendarContext(props);

   return (
      <CalendarContextProvider value={context}>
         <CalendarGridContextConsumer />
      </CalendarContextProvider>
   )
}

Calendar.defaultProps = {
   selectedDays: [],
   lang: 'en-US'
}

Calendar.displayName = "Calendar";

export default Calendar;