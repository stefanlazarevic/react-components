import { createNamedContext } from "../../../../context/createNamedContext";
import { CalendarProps } from "../../CalendarProps";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ICalendarContext } from "../interfaces/CalendarContext";
import { getNumberOfDays, getWeekdayOffset, chunk, getNextMonth, getPreviousMonth, isString, isDate, isNumber } from "../../../../utils";
import { CalendarDayRecord } from "../interfaces";

const [CalendarContextProvider, useCalendarContext] = createNamedContext<ICalendarContext>('CalendarContext');

/**
 * 
 * @param props 
 */
export function createCalendarContext(props: CalendarProps): ICalendarContext {
   const today = new Date();

   const [currentMonth, setCurrentMonth] = useState(props.currentMonth || today.getMonth());

   const [currentYear, setCurrentYear] = useState(props.currentMonth || today.getFullYear());

   const [selectedDays, setSelectedDays] = useState<Date[]>([]);

   useEffect(() => {
      if (!props.multiselectable) {
         setSelectedDays(props.selectedDays!.slice(0, 1));
      }

      setSelectedDays(props.selectedDays!);
   }, [props.selectedDays]);

   useEffect(() => {
      if (isNumber(props.currentYear) && props.currentYear !== currentYear) {
         setCurrentYear(props.currentYear!);
      }
   }, [props.currentYear]);

   useEffect(() => {
      if (isNumber(props.currentMonth) && props.currentMonth !== currentMonth) {
         setCurrentMonth(props.currentMonth!);
      }
   }, [props.currentMonth]);

   const weekdays = useMemo(() => {
      const defaultweekDays = [
         { shortName: 'Su', name: "Sunday" },
         { shortName: 'Mo', name: 'Monday' },
         { shortName: 'Tu', name: 'Tuesday' },
         { shortName: 'We', name: "Wednesday" },
         { shortName: 'Th', name: 'Thursday' },
         { shortName: 'Fr', name: 'Friday' },
         { shortName: 'Sa', name: 'Saturday' }
      ];

      return props.weekdays || defaultweekDays;
   }, [props.weekdays]);

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

      for (let day = numberOfDaysInPreviousMonth - weekdayOffset; day <= numberOfDaysInPreviousMonth; day++) {
         const date = new Date(previousYear, previousMonth, day);
         const isSelected = selectedDays.findIndex((selectedDay: string | Date) => {
            const selectedDate = isString(selectedDay) ? new Date(selectedDay) : selectedDay;

            return selectedDate.toDateString() === date.toDateString();
         }) !== -1

         output.push({
            day,
            month: previousMonth,
            year: previousYear,
            weekday: (weekdayOffset + day) % 7,
            date,
            tabIndex: undefined,
            isSelected
         })
      }

      /** Build current month */
      for (let day = 1; day <= numberOfDays; day++) {
         const date = new Date(currentYear, currentMonth, day);
         const isSelected = selectedDays.findIndex((selectedDay: string | Date) => {
            const selectedDate = isString(selectedDay) ? new Date(selectedDay) : selectedDay;

            return selectedDate.toDateString() === date.toDateString();
         }) !== -1
         const isToday = date.toDateString() === today.toDateString();

         output.push({
            day,
            month: currentMonth,
            year: currentYear,
            weekday: (weekdayOffset + day) % 7,
            date,
            tabIndex: isSelected || isToday ? 0 : -1,
            isSelected
         });
      }

      /** Build next month. */
      const remainingDays = 41 - (weekdayOffset + numberOfDays);
      const nextMonth = getNextMonth(currentMonth);
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

      for (let day = 1; day <= remainingDays; day++) {
         const date = new Date(nextYear, nextMonth, day);
         const isSelected = selectedDays.findIndex((selectedDay: string | Date) => {
            const selectedDate = isString(selectedDay) ? new Date(selectedDay) : selectedDay;

            return selectedDate.toDateString() === date.toDateString();
         }) !== -1

         output.push({
            day,
            month: nextMonth,
            year: nextYear,
            weekday: day % 7,
            date,
            tabIndex: undefined,
            isSelected
         })
      }

      return chunk(7, output);
   }, [today, selectedDays, currentMonth, currentYear, minimumDate, maximumDate]);

   const selectNextMonth = useCallback(() => {
      const nextMonth = getNextMonth(currentMonth);
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

      if (isDate(maximumDate)) {
         const maxMonth = maximumDate.getMonth();
         const maxYear = maximumDate.getFullYear();

         if (nextYear > maxYear || (nextYear <= maxYear && nextMonth > maxMonth)) {
            return;
         }
      }
      setCurrentMonth(nextMonth);
      setCurrentYear(nextYear);
   }, [currentMonth, currentYear, maximumDate]);

   const selectNextYear = useCallback(() => {
      const nextYear = currentYear + 1
      if (isDate(maximumDate)) {
         const maxYear = maximumDate.getFullYear();
         if (nextYear > maxYear) {
            return;
         }
      }
      setCurrentYear(nextYear);
   }, [currentYear, maximumDate]); 

   const selectPreviousMonth = useCallback(() => {
      const previousMonth = getPreviousMonth(currentMonth);
      const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

      if (isDate(minimumDate)) {
         const minMonth = minimumDate.getMonth();
         const minYear = minimumDate.getFullYear();

         if (previousYear < minYear || (previousYear >= minYear && previousMonth < minMonth)) {
            return;
         }
      }
      setCurrentMonth(previousMonth);
      setCurrentYear(previousYear);
   }, [currentMonth, currentYear, minimumDate]);

   const selectPreviousYear = useCallback(() => {
      const previousYear = currentYear - 1;

      if (isDate(minimumDate)) {
         const minYear = minimumDate.getFullYear();
         if (previousYear < minYear) {
            return;
         }
      }
      setCurrentYear(previousYear);
   }, [currentYear, minimumDate]); 

   return {
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
      onSelect: props.onSelect
   };
}

export {CalendarContextProvider, useCalendarContext};