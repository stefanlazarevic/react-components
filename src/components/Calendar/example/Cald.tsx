import React, { useState } from 'react';
import { Calendar } from '..';

export default function Cald() {
   const [currentYear, setCurrentYear] = useState(2020);

   function onClick () {
      setCurrentYear((currentYear) => currentYear + 1);
   }

   return (
      <div>
         <Calendar currentYear={currentYear} selectedDay={new Date('2020-09-20')} startDate={new Date('2020-09-12')} />
         <button onClick={onClick}>Next year</button>
      </div>
   )
}