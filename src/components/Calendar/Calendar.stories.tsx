import React from 'react';
import Calendar from './Calendar';
import Cald from './example/Cald';

export default {
   title: 'Calendar',
   component: Calendar
}

export const Default = (args: any) => <Calendar {...args} />
Default.args = {
   onSelect: (date: Date) => console.log(date)
}

export const StartDate = Default.bind({});
StartDate.args = {
   startDate: new Date('2020-09-14')
}

export const EndDate = Default.bind({});
EndDate.args = {
   endDate: new Date('2020-09-20')
}

export const SelectedDay = Default.bind({});
SelectedDay.args = {
   selectedDays: [
      new Date('2020-09-13'),
   ]
}

export const SelectedDays = Default.bind({});
SelectedDays.args = {
   multiselectable: true,
   selectedDays: [
      new Date('2020-08-30'),
      new Date('2020-09-12'),
      new Date('2020-09-13'),
      new Date('2020-09-14'),
      new Date('2020-10-01'),
   ]
}

export const Test = () => <Cald />