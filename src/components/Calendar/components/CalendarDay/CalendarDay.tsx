import React, { useCallback, useLayoutEffect, useMemo, useRef } from 'react';

import './CalendarDay.scss';

import { CalendarDayProps } from './CalendarDayProps';

import { concatenate, isFunction } from '../../../../utils';
import { useCalendarContext } from '../context/createCalendarContext';
import { useDescendant } from '../../../../hooks';
import { IDescendantContext } from '../../../../interfaces';
import { keyboard } from '../../../../helpers';
import { CalendarDescendant } from '../interfaces/CalendarDescendant';
import { ICalendarContext } from '../interfaces/CalendarContext';

function CalendarDay(props: CalendarDayProps) {
   const className = concatenate("CalendarDay", props.className);

   const day = useRef<HTMLTableCellElement>(null);

   const context = useCalendarContext();

   const { 
      weekdays, 
      renderDay, 
      onSelect, 
      focusPreviousDay, 
      focusNextDay, 
      focusPreviousWeek, 
      focusNextWeek, 
      focusFirstDay, 
      focusLastDay, 
      focusFirstWeekday,
      focusLastWeekday
   } = context as ICalendarContext;

   const descendant = useMemo(function createCalendarDescendant(): CalendarDescendant { 
      return {
         element: day.current!,
         isDisabled: props.isDisabled,
         day: props.day,
         month: props.month,
         year: props.year
      }
   }, [day.current, props.isDisabled]);

   const index = useDescendant(descendant, context as unknown as IDescendantContext);

   function onClick() {
      if (isFunction(onSelect)) {
         onSelect(`${props.year}-${props.month}-${props.day}`);
      }
   }

   function onKeyDown(event: React.KeyboardEvent) {
      const {keyCode, altKey, repeat} = event;

      if (repeat) {
         return;
      }

      if (keyCode === keyboard.KeyCode.ARROW_LEFT) {
         focusPreviousDay(index, props);
      }

      if (keyCode === keyboard.KeyCode.ARROW_RIGHT) {
         focusNextDay(index, props);
      }

      if (keyCode === keyboard.KeyCode.ARROW_UP) {
         focusPreviousWeek(index, props);
      }

      if (keyCode === keyboard.KeyCode.ARROW_DOWN) {
         focusNextWeek(index, props);
      }

      if (keyCode === keyboard.KeyCode.HOME) {
         event.preventDefault();

         if (altKey) {
            focusFirstDay();
         } else {
            focusFirstWeekday(index, props);
         }
      }

      if (keyCode === keyboard.KeyCode.END) {
         event.preventDefault();

         if (altKey) {
            focusLastDay();
         } else {
            focusLastWeekday(index, props);
         }
      }
   }

   const renderChildren = useCallback(() => {
      if (isFunction(renderDay)) {
         return renderDay(props);
      }

      return (
         <span>{props.day}</span>
      );
   }, []);

   useLayoutEffect(() => {
      if (props.autoFocus) {
         day.current!.focus();
      }
   }, []);

   return (
      <td 
         ref={day}
         id={props.id}
         data-testid={props.testid}
         className={className}
         style={props.style}
         tabIndex={props.tabIndex}
         aria-selected={props.isSelected}
         aria-disabled={props.isDisabled}
         onClick={onClick}
         onKeyDown={onKeyDown}
         data-index={index}
         aria-label={`${weekdays[props.weekday].name}, ${props.day} ${props.year}`}
         role="button"
      >
         {renderChildren()}
      </td>
   )
};

CalendarDay.defaultProps = {};

CalendarDay.displayName = "CalendarDay";

export default CalendarDay;