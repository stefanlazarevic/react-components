import React from 'react';

import './CalendarWeek.scss';

import { CalendarWeekProps } from './CalendarWeekProps';
import { concatenate } from '../../../../utils';
import { CalendarDay } from '../CalendarDay';
import { useCalendarContext } from '../context/createCalendarContext';

function CalendarWeek(props: CalendarWeekProps) {
   const className = concatenate("CalendarWeek", props.className);

   const {days} = useCalendarContext();

   return (
      <tr
         id={props.id}
         data-testid={props.testid}
         className={className}
         style={props.style}
      >
         {days[props.index].map(record => (
            <CalendarDay key={`${record.day}-${record.month}-${record.year}`} {...record} />
         ))}
      </tr>
   )
};

CalendarWeek.defaultProps = {};

CalendarWeek.displayName = "CalendarWeek";

export default CalendarWeek;