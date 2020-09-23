import { createNamedContext } from "../../../../context/createNamedContext";
import { CalendarProps } from "../../CalendarProps";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ICalendarContext } from "../interfaces/CalendarContext";
import { getNumberOfDays, getWeekdayOffset, chunk, getNextMonth, getPreviousMonth, isDate, isNumber, focusElement, isArray } from "../../../../utils";
import { CalendarDayRecord } from "../interfaces";
import { useDescendants } from "../../../../hooks";
import { CalendarDescendant } from "../interfaces/CalendarDescendant";

const [CalendarContextProvider, useCalendarContext] = createNamedContext<ICalendarContext>('CalendarContext');

/**
 * 
 * @param props 
 */
export function createCalendarContext(props: CalendarProps): ICalendarContext {
   const today = useMemo(() => {
      return new Date();
   }, []);

   const descendantContext = useDescendants();

   const {getDescendantAtIndex, getNextDescendant, getPreviousDescendant} = descendantContext;

   const [currentMonth, setCurrentMonth] = useState(props.currentMonth || today.getMonth());

   const [currentYear, setCurrentYear] = useState(props.currentYear || today.getFullYear());

   const [selectedDays, setSelectedDays] = useState<Date[]>([]);

   const focusedDate = useRef<Date>(today);

   const retainFocus = useRef<boolean>(false);

   useEffect(function mapSelectedDaysPropsToState() {
      if (isArray(props.selectedDays) && props.multiselectable) {
         setSelectedDays(props.selectedDays);
      }

      if (isDate(props.selectedDay) && !props.multiselectable) {
         setSelectedDays([props.selectedDay]);
      }
   }, [props.selectedDays, props.multiselectable]);

   useEffect(function mapCurrentMonthPropToState() {
      if (isNumber(props.currentMonth) && props.currentMonth !== currentMonth) {
         focusedDate.current.setMonth(props.currentMonth);
         retainFocus.current = false;

         setCurrentMonth(props.currentMonth!);
      }
   }, [props.currentMonth]);

   useEffect(function mapCurrentYearPropToState() {
      if (isNumber(props.currentYear) && props.currentYear !== currentYear) {
         focusedDate.current.setFullYear(props.currentYear);
         retainFocus.current = false;

         setCurrentYear(props.currentYear);
      }
   }, [props.currentYear]);

   const weekdays = useMemo(function weekdays() {
      const defaultweekDays = [
         { shortName: 'Su', name: "Sunday" },
         { shortName: 'Mo', name: 'Monday' },
         { shortName: 'Tu', name: 'Tuesday' },
         { shortName: 'We', name: "Wednesday" },
         { shortName: 'Th', name: 'Thursday' },
         { shortName: 'Fr', name: 'Friday' },
         { shortName: 'Sa', name: 'Saturday' }
      ];

      return defaultweekDays;
   }, []);

   const minimumDate = useMemo(function extractMinimumDate(): Date | undefined {
      if (props.startDate && isDate(props.startDate)) {
         return props.startDate;
      }
   
      return undefined;
   }, [props.startDate]);

   const maximumDate = useMemo(function extractMinimumDate(): Date | undefined {
      if (props.endDate && isDate(props.endDate)) {
         return props.endDate;
      }

      return undefined;
   }, [props.endDate]);

   const days = useMemo((): CalendarDayRecord[][] => {
      const output: CalendarDayRecord[] = [];

      const numberOfDays = getNumberOfDays(currentMonth, currentYear);
      const weekdayOffset = getWeekdayOffset(currentMonth, currentYear);

      /** Build previous month */
      const previousMonth = getPreviousMonth(currentMonth);
      const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const numberOfDaysInPreviousMonth = getNumberOfDays(previousMonth, previousYear);

      const SelectedDaysWeakSet = new WeakSet(selectedDays);

      for (let day = numberOfDaysInPreviousMonth - weekdayOffset; day <= numberOfDaysInPreviousMonth; day++) {
         const date = new Date(previousYear, previousMonth, day);

         const isSelected = SelectedDaysWeakSet.has(date);

         const isDisabled = (minimumDate && minimumDate > date) || (maximumDate && maximumDate < date); 
         
         output.push({
            day,
            month: previousMonth,
            year: previousYear,
            weekday: (weekdayOffset + day) % 7,
            date,
            tabIndex: -1,
            isSelected,
            isDisabled
         })
      }

      /** Build current month */
      for (let day = 1; day <= numberOfDays; day++) {
         const date = new Date(currentYear, currentMonth, day);

         const isSelected = SelectedDaysWeakSet.has(date);

         const isDisabled = (minimumDate && minimumDate > date) || (maximumDate && maximumDate < date); 

         const isFocused = focusedDate.current.toDateString() === date.toDateString();

         output.push({
            day,
            month: currentMonth,
            year: currentYear,
            weekday: (weekdayOffset + day) % 7,
            tabIndex: isSelected || isFocused ? 0 : -1,
            isSelected,
            isDisabled,
            autoFocus: isFocused && retainFocus.current
         });
      }

      /** Build next month. */
      const remainingDays = 41 - (weekdayOffset + numberOfDays);
      const nextMonth = getNextMonth(currentMonth);
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

      for (let day = 1; day <= remainingDays; day++) {
         const date = new Date(nextYear, nextMonth, day);

         const isSelected = SelectedDaysWeakSet.has(date);

         const isDisabled = (minimumDate && minimumDate > date) || (maximumDate && maximumDate < date); 

         const isFocused = focusedDate.current.toDateString() === date.toDateString();

         output.push({
            day,
            month: nextMonth,
            year: nextYear,
            weekday: day % 7,
            tabIndex: isFocused ? 0 : -1,
            isSelected,
            isDisabled,
            autoFocus: isFocused && retainFocus.current
         })
      }

      return chunk(7, output);
   }, [today, selectedDays, currentMonth, currentYear, minimumDate, maximumDate]);

   const selectNextMonth = useCallback(function selectNextMonth() {
      const nextMonth = getNextMonth(currentMonth);
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

      if (isDate(maximumDate)) {
         const maxMonth = maximumDate.getMonth();
         const maxYear = maximumDate.getFullYear();

         if (nextYear > maxYear || (nextYear === maxYear && nextMonth > maxMonth)) {
            return;
         }
      }

      retainFocus.current = true;

      focusedDate.current.setMonth(nextMonth);
      focusedDate.current.setFullYear(nextYear);

      setCurrentMonth(nextMonth);
      setCurrentYear(nextYear);
   }, [currentMonth, currentYear, maximumDate]);

   const selectNextYear = useCallback(function selectNextYear() {
      const nextYear = currentYear + 1
      if (isDate(maximumDate)) {
         const maxYear = maximumDate.getFullYear();
         if (nextYear > maxYear) {
            return;
         }
      }

      retainFocus.current = true;

      focusedDate.current.setFullYear(nextYear);

      setCurrentYear(nextYear);
   }, [currentYear, maximumDate]); 

   const selectPreviousMonth = useCallback(function selectPreviousMonth() {
      const previousMonth = getPreviousMonth(currentMonth);
      const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

      if (isDate(minimumDate)) {
         const minMonth = minimumDate.getMonth();
         const minYear = minimumDate.getFullYear();

         if (previousYear < minYear || (previousYear === minYear && previousMonth < minMonth)) {
            console.log('Cant go back', previousYear, minYear, previousMonth, minMonth);
            return;
         }
      }

      retainFocus.current = true;

      focusedDate.current.setMonth(previousMonth);
      focusedDate.current.setFullYear(previousYear);

      setCurrentMonth(previousMonth);
      setCurrentYear(previousYear);
   }, [currentMonth, currentYear, minimumDate]);

   const selectPreviousYear = useCallback(function selectPreviousYear() {
      const previousYear = currentYear - 1;

      if (isDate(minimumDate)) {
         const minYear = minimumDate.getFullYear();
         if (previousYear < minYear) {
            return;
         }
      }

      retainFocus.current = true;

      focusedDate.current.setFullYear(previousYear);

      setCurrentYear(previousYear);
   }, [currentYear, minimumDate]); 

   const focusPreviousDay = useCallback(function focusPreviousDay(currentIndex: number, dayRecord: CalendarDayRecord) {
      const previousDay = getPreviousDescendant(currentIndex) as CalendarDescendant;

      focusedDate.current.setDate(dayRecord.day - 1);
      
      if (previousDay && previousDay.month === currentMonth) {
         focusElement(previousDay.element);
      } else {
         selectPreviousMonth();
      }

   }, [descendantContext, currentMonth, selectPreviousMonth]);

   const focusNextDay = useCallback(function focusNextDay(currentIndex: number, dayRecord: CalendarDayRecord) {
      const nextDay = getNextDescendant(currentIndex) as CalendarDescendant;

      focusedDate.current.setDate(dayRecord.day + 1);
      
      if (nextDay && nextDay.month === currentMonth) {
         focusElement(nextDay.element);
      } else {
         selectNextMonth();
      }
   }, [descendantContext, currentMonth, selectNextMonth]);

   const focusPreviousWeek = useCallback(function focusPreviousWeek(currentIndex: number, dayRecord: CalendarDayRecord) {
      const previousWeekDay = getDescendantAtIndex(currentIndex - 7) as CalendarDescendant;

      focusedDate.current.setDate(dayRecord.day - 7);
      
      if (previousWeekDay && previousWeekDay.month === currentMonth) {
         focusElement(previousWeekDay.element);
      } else {
         selectPreviousMonth();
      }
   }, [descendantContext, currentMonth]);

   const focusNextWeek = useCallback(function focusNextWeek(currentIndex: number, dayRecord: CalendarDayRecord) {
      const previousWeekDay = getDescendantAtIndex(currentIndex + 7) as CalendarDescendant;

      focusedDate.current.setDate(dayRecord.day + 7);
      
      if (previousWeekDay && previousWeekDay.month === currentMonth) {
         descendantContext.focusDescendantAtIndex(currentIndex + 7);
      } else {
         selectNextMonth();
      }
   }, [descendantContext, currentMonth]);

   const focusFirstDay = useCallback(function focusFirstDay() {
      const weekdayOffset = getWeekdayOffset(currentMonth, currentYear);

      const descendant = getDescendantAtIndex(weekdayOffset + 1);

      focusedDate.current.setDate(1);

      if (descendant) {
         descendantContext.focusDescendantAtIndex(weekdayOffset + 1);
      }
   }, [descendantContext, currentMonth, currentYear]);

   const focusLastDay = useCallback(function focusLastDay() {
      const weekdayOffset = getWeekdayOffset(currentMonth, currentYear);
      const numberOfDays = getNumberOfDays(currentMonth, currentYear);

      const descendant = getDescendantAtIndex(weekdayOffset + numberOfDays);

      focusedDate.current.setDate(numberOfDays);

      if (descendant) {
         descendantContext.focusDescendantAtIndex(weekdayOffset + numberOfDays);
      }
   }, [descendantContext, currentMonth, currentYear]);

   const focusFirstWeekday = useCallback(function focusFirstWeekday(currentIndex: number, dayRecord: CalendarDayRecord) {
      const index = currentIndex -dayRecord.weekday;

      const descendant = getDescendantAtIndex(index) as CalendarDescendant;

      if (descendant) {
         if (descendant.month !== currentMonth) {
            focusFirstDay();
            return;
         }
         
         focusedDate.current.setDate(descendant.day);

         descendantContext.focusDescendantAtIndex(index);
      }
   }, [descendantContext, currentMonth]);

   const focusLastWeekday = useCallback(function focusLastWeekday(currentIndex: number, dayRecord: CalendarDayRecord) {
      const index = currentIndex + (6 - dayRecord.weekday);

      const descendant = getDescendantAtIndex(index) as CalendarDescendant;

      if (descendant) {
         if (descendant.month !== currentMonth) {
            focusLastDay();
            return;
         }

         focusedDate.current.setDate(descendant.day);

         descendantContext.focusDescendantAtIndex(index);
      }
   }, [descendantContext, currentMonth]);

   return {
      ...descendantContext,
      today,
      weekdays,
      currentMonth,
      currentYear,
      days,
      minimumDate,
      maximumDate,
      selectNextMonth,
      selectPreviousMonth,
      selectNextYear,
      selectPreviousYear,
      renderDay: props.renderDay,
      onSelect: props.onSelect,
      focusPreviousDay,
      focusNextDay,
      focusPreviousWeek,
      focusNextWeek,
      focusFirstDay,
      focusLastDay,
      focusFirstWeekday,
      focusLastWeekday
   };
}

export {CalendarContextProvider, useCalendarContext};