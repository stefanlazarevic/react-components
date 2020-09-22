import React, { forwardRef, memo, MutableRefObject, useMemo } from 'react';

import './CalendarGrid.scss';

import { CalendarGridProps } from './CalendarGridProps';

import { concatenate } from '../../../../utils';
import { CalendarWeek } from '../CalendarWeek';
import { keyboard } from '../../../../helpers';

const CalendarGrid = forwardRef(function CalendarComponent(props: CalendarGridProps, ref: MutableRefObject<HTMLTableElement>) {
   const className = concatenate("CalendarGrid", props.className);

   const Weeks = useMemo(() => {
      return Array.from({ length: 6 }, (_, index: number) => <CalendarWeek key={index} index={index} />);
   }, []);

   function onKeyDown(event: React.KeyboardEvent) {
      const { keyCode, altKey, repeat } = event;

      if (keyCode === keyboard.KeyCode.PAGE_UP && !repeat) {
         event.preventDefault();

         if (altKey) {
            props.onSelectNextYear();
            return;
         }

         props.onSelectNextMonth();
      }

      if (keyCode === keyboard.KeyCode.PAGE_DOWN && !repeat) {
         event.preventDefault();
         
         if (altKey) {
            props.onSelectNextYear();
         }
         
         props.onSelectPreviousMonth();
      }
   }

   return (
      <table 
         ref={ref}
         id={props.id}
         data-testid={props.testid}
         className={className}
         style={props.style}
         role="grid"
         aria-multiseltable={props.multiselectable}
         onKeyDown={onKeyDown}
      >
         <thead className="CalendarGridHead">
            <tr>
               {props.weekdays.map(weekday => (
                  <th key={weekday.name}>
                     <abbr title={weekday.name}>{weekday.shortName || weekday.name}</abbr>
                  </th>
               ))}
            </tr>
         </thead>
         <tbody>{Weeks}</tbody>
      </table>
   )
});

CalendarGrid.defaultProps = {};

CalendarGrid.displayName = "CalendarGrid";

export default memo(CalendarGrid);