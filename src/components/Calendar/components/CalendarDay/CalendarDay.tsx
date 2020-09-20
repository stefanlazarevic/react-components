import React, { forwardRef, memo, MutableRefObject, useCallback, useMemo } from 'react';

import './CalendarDay.scss';

import { CalendarDayProps } from './CalendarDayProps';

import { concatenate, isFunction } from '../../../../utils';
import { useCalendarContext } from '../context/createCalendarContext';
import { useCombinedRefs } from '../../../../hooks';
import { keyboard } from '../../../../helpers';

const CalendarDay = forwardRef(function CalendarDayComponent(props: CalendarDayProps, ref: MutableRefObject<HTMLTableCellElement>) {
   const className = concatenate("CalendarDay", props.className);

   const day = useCombinedRefs<HTMLTableCellElement>(ref);

   const { minimumDate, maximumDate, renderDay, onSelect } = useCalendarContext();

   const isDisabled = useMemo(() => {
      return (maximumDate && props.date > maximumDate) || (minimumDate && props.date < minimumDate);
   }, [minimumDate, maximumDate, props.date]);

   function onClick() {
      if (isFunction(onSelect)) {
         onSelect(props.date);
      }
   }

   function onKeyDown(event: React.KeyboardEvent) {
      const {keyCode} = event;

      if (keyCode === keyboard.KeyCode.ARROW_LEFT) {
         // focusPreviousDescendant(index);
      }

      if (keyCode === keyboard.KeyCode.ARROW_RIGHT) {
         // focusNextDescendant(index);
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

   return (
      <td 
         ref={day}
         id={props.id}
         data-testid={props.testid}
         className={className}
         style={props.style}
         tabIndex={props.tabIndex}
         aria-selected={props.isSelected}
         aria-disabled={isDisabled}
         onKeyDown={onKeyDown}
         onClick={onClick}
      >
         {renderChildren()}
      </td>
   )
});

CalendarDay.defaultProps = {};

CalendarDay.displayName = "CalendarDay";

export default memo(CalendarDay);