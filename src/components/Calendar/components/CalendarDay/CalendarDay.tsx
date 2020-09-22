import React, { forwardRef, MutableRefObject, useCallback, useLayoutEffect, useMemo } from 'react';

import './CalendarDay.scss';

import { CalendarDayProps } from './CalendarDayProps';

import { concatenate, isFunction } from '../../../../utils';
import { useCalendarContext } from '../context/createCalendarContext';
import { useCombinedRefs, useDescendant } from '../../../../hooks';
import { IDescendantContext } from '../../../../interfaces';
import { keyboard } from '../../../../helpers';
import { CalendarDescendant } from '../interfaces/CalendarDescendant';

const CalendarDay = forwardRef(function CalendarDayComponent(props: CalendarDayProps, ref: MutableRefObject<HTMLTableCellElement>) {
   const className = concatenate("CalendarDay", props.className);

   const day = useCombinedRefs<HTMLTableCellElement>(ref);

   const context = useCalendarContext();

   const { weekdays, renderDay, onSelect, focusPreviousDay, focusNextDay, focusPreviousWeek, focusNextWeek } = context;

   const descendant = useMemo(function createCalendarDescendant(): CalendarDescendant { 
      return {
         element: day.current,
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
      const {keyCode} = event;

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
         console.log(day.current);
         day.current.focus();
      }
   }, [props.autoFocus]);

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
});

CalendarDay.defaultProps = {};

CalendarDay.displayName = "CalendarDay";

export default CalendarDay;