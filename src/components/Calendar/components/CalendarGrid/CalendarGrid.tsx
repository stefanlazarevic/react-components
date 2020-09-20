import React, { forwardRef, MutableRefObject, useLayoutEffect, useMemo, useRef } from 'react';

import './CalendarGrid.scss';

import { CalendarGridProps } from './CalendarGridProps';

import { concatenate } from '../../../../utils';
import { CalendarWeek } from '../CalendarWeek';
import { useCalendarContext } from '../context/createCalendarContext';
import { keyboard } from '../../../../helpers';
import { useCombinedRefs } from '../../../../hooks';

const CalendarGrid = forwardRef(function CalendarComponent(props: CalendarGridProps, ref: MutableRefObject<HTMLTableElement>) {
   const className = concatenate("CalendarGrid", props.className);

   const { weekdays, multiselectable, selectNextMonth, selectPreviousMonth, selectNextYear, selectPreviousYear} = useCalendarContext();

   const cells = useRef<HTMLTableCellElement[]>([]);

   const grid = useCombinedRefs(ref);

   useLayoutEffect(() => {
      cells.current = Array.from(grid.current.querySelectorAll<HTMLTableCellElement>('.CalendarDay'));

      console.log(cells.current);

      return () => {
         cells.current = [];
      };
   }, []);

   const weeks = useMemo(() => Array.from({ length: 6 }, (_, index: number) => index), []);

   function onKeyDown(event: React.KeyboardEvent) {
      const {keyCode, altKey} = event;

      if (keyCode === keyboard.KeyCode.PAGE_UP) {
         event.preventDefault();
         if (altKey) {
            selectNextYear();
         } else {
            selectNextMonth();
         }
      }

      if (keyCode === keyboard.KeyCode.PAGE_DOWN) {
         event.preventDefault();
         if (altKey) {
            selectPreviousYear();
         } else {
            selectPreviousMonth();
         }
      }
   }

   return (
      <table 
         ref={grid}
         id={props.id}
         data-testid={props.testid}
         className={className}
         style={props.style}
         role="grid"
         aria-multiseltable={multiselectable}
         onKeyDown={onKeyDown}
      >
         <thead className="CalendarGridHead">
            <tr>
               {weekdays.map(weekday => (
                  <th key={weekday.name}>
                     <abbr title={weekday.name}>{weekday.shortName || weekday.name}</abbr>
                  </th>
               ))}
            </tr>
         </thead>
         <tbody>
            {weeks.map(week => (
               <CalendarWeek key={week} index={week} />
            ))}
         </tbody>
      </table>
   )
});

CalendarGrid.defaultProps = {
   role: "grid"
};

CalendarGrid.displayName = "CalendarGrid";

export default CalendarGrid;