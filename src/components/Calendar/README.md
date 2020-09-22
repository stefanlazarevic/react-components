[X] Support minimum date.
[X] Support maximum date.
[ ] Support number of weeks.
[X] Support random date selection.
[ ] Support range date selection.
[X] Support single date selection.
[X] Support keyboard month navigation.
[X] Support keyboard year navigation.


## API

```jsx
<Calendar 
   selectedDay={new Date()}
   selectedDays={[new Date(), new Date()]} // \w multiselectable
   disabledDays={[new Date(), new Date()]}
   startDate={new Date()}
   endDate={new Date()}
   multiselectable={false}
   currentMonth={0} // 0 - 11
   currentYear={2020}
   lang="en" // ISO-LANG
/>
```

## Keyboard navigation

- `ARROW_LEFT` places focus on the previous day, if currently focused day is first day of a month,
opens previous month if not restricted by `startDate`.
- `ARROW_RIGHT` places focus on the next day, if currently focused day is first day of a month,
opens next month if not restricted by `endDate`.
- `ARROW_UP` places focus on the same weekday in previous week. If currently focused day in in first week of a month, navigates to previous month.
- `ARROW_DOWN` places focus on the same weekday in next week. If currently focused day in in first week of a month, navigates to next month.
- `PAGE_UP` navigates to previous month, focusing the same day.
- `PAGE_DOWN` navigates to next month, focusing the same day.
- `ALT + PAGE_UP` navigates to previous year, focusing the same day.
- `ALT + PAGE_DOWN` navigates to next year, focusing the same day.
- `HOME` focuses first day in the currently focused week.
- `END` focuses last day in the currently focused week.
- `CTRL + SHIFT + HOME` focuses current day.
- `ALT + HOME` focuses first day of current month.
- `ALT + END` focuses last day of current month.
- `ENTER` selects currently focused day if not disabled.
- `ESC` triggers `onClose` callback.